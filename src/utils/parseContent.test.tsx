import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import parseContent from "./parseContent";

const xssPayloads = [
  "<script>alert(1)</script>",
  "<img src=x onerror=alert(1)>",
  '<a href="javascript:alert(1)">click</a>',
];

const render = (content: string) =>
  renderToStaticMarkup(<>{parseContent(content)}</>);

describe("parseContent sanitization", () => {
  it.each(xssPayloads)("strips dangerous markup from %s", (payload) => {
    const html = render(payload);
    expect(html).not.toMatch(/<script/i);
    expect(html).not.toMatch(/onerror/i);
    expect(html).not.toMatch(/javascript:/i);
  });

  it("preserves safe formatting markup", () => {
    const html = render("<p>hello <strong>world</strong></p>");
    expect(html).toContain("<strong>world</strong>");
  });
});
