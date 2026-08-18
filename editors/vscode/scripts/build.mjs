#!/usr/bin/env node

import { exec, unlink } from "../../../scripts/utils.mjs";
import { fileURLToPath } from "node:url";

const yarn = fileURLToPath(
  new URL("../../../js/.yarn/releases/yarn-4.0.2.cjs", import.meta.url)
);

unlink("./dist");
await exec(process.execPath, [yarn, "build:lsp"]);
await exec(process.execPath, [yarn, "build:syntax"]);
await exec(process.execPath, [yarn, "build:node"]);
await exec(process.execPath, [yarn, "build:browser-extension"]);
await exec(process.execPath, [yarn, "build:browser-server"]);
