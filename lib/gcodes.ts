import fs from "fs";
import path from "path";

const gcodesDirectory = path.join(process.cwd(), "public/gcodes");

export function getGcode(filenames: string[]) {
  const gcodes: Record<string, string> = {};

  for (const filename of filenames) {
    const fullPath = path.join(gcodesDirectory, `${filename}.gcode`);
    gcodes[filename] = fs.readFileSync(fullPath, "utf8");
  }

  return gcodes;
}
