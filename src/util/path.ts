import path from "path";

const DirRoot = path.dirname(process.mainModule?.filename as string);

export { DirRoot };
