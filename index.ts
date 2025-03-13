import { PDFDocument, PDFPage } from "mupdf/mupdfjs";

const file = Bun.file("./dummy.pdf");
const buffer = await file.arrayBuffer();
const data = new Uint8Array(buffer);

const pdf = PDFDocument.openDocument(data, "application/pdf");
const page = new PDFPage(pdf, 0);

console.log(page.getText());
