import parse from "html-react-parser";
import DOMPurify from "dompurify";

export default function parseContent(content: string) {
  const sanitizedHtml = DOMPurify.sanitize(content);
  return parse(sanitizedHtml);
}
