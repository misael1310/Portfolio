import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import parseContent from "./parseContent";

const render = (content: string) =>
  renderToStaticMarkup(<>{parseContent(content)}</>);

// Executable vectors that must never survive sanitization, regardless of which
// tags DOMPurify chooses to keep.
const DANGEROUS_PATTERNS = [
  /<script/i,
  /javascript:/i,
  /data:text\/html/i,
  /\son\w+=/i, // inline event-handler attributes (onerror, onload, ...)
];

const xssPayloads = [
  "<script>alert(1)</script>",
  "<img src=x onerror=alert(1)>",
  '<a href="javascript:alert(1)">click</a>',
  '<a href="data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==">x</a>',
  "<svg onload=alert(1)></svg>",
  "<body onload=alert(1)>",
  "<div onmouseover=alert(1)>hover</div>",
  "<input onfocus=alert(1) autofocus />",
  '<iframe src="javascript:alert(1)"></iframe>',
  '<form action="javascript:alert(1)"><button>go</button></form>',
];

describe("parseContent sanitization", () => {
  it.each(xssPayloads)("removes every executable vector from %s", (payload) => {
    const html = render(payload);
    for (const pattern of DANGEROUS_PATTERNS) {
      expect(html).not.toMatch(pattern);
    }
  });

  it("preserves the visible text of a neutralized link", () => {
    const html = render('<a href="javascript:alert(1)">click me</a>');
    expect(html).not.toMatch(/javascript:/i);
    expect(html).toContain("click me");
  });

  it("preserves multiple safe formatting tags", () => {
    const html = render(
      "<p>hello <strong>world</strong> <em>now</em></p>" +
        "<ul><li>one</li></ul><code>snippet</code>",
    );
    expect(html).toContain("<strong>world</strong>");
    expect(html).toContain("<em>now</em>");
    expect(html).toContain("<ul>");
    expect(html).toContain("<li>one</li>");
    expect(html).toContain("<code>snippet</code>");
  });

  it("keeps safe content while dropping unsafe siblings in mixed input", () => {
    const html = render(
      "<p>safe text</p><script>alert(1)</script><img src=x onerror=alert(1)>",
    );
    expect(html).toContain("safe text");
    expect(html).not.toMatch(/<script/i);
    expect(html).not.toMatch(/\son\w+=/i);
  });

  it("handles edge cases without throwing", () => {
    expect(render("")).toBe("");
    expect(render("just plain text")).toContain("just plain text");
    // Unclosed/malformed markup must not leak a script tag.
    const malformed = render("<p>oops<script>alert(1)");
    expect(malformed).not.toMatch(/<script/i);
  });
});
