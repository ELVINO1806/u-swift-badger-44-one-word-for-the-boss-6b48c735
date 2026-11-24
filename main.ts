import fs from "node:fs";

const word: string = "Unpromotable";
const outDir: string = "/output";
const outFile: string = `${outDir}/entry.txt`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, word, { encoding: "utf8" });

const written: string = fs.readFileSync(outFile, { encoding: "utf8" });
if (written !== word) {
  throw new Error("entry.txt does not contain exactly the expected word");
}
