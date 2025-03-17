globalThis.$libmupdf_wasm_Module = {
  locateFile(path: string) {
    return "./node_modules/mupdf/dist/" + path;
  },
};

const mupdf = await import("mupdf/mupdfjs");

const file = Bun.file("./dummy.pdf");
const buffer = await file.arrayBuffer();
const data = new Uint8Array(buffer);

const pdf = mupdf.PDFDocument.openDocument(data, "application/pdf");
const page = new mupdf.PDFPage(pdf, 0);

console.log(page.getText());
