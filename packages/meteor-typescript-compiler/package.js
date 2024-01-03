/**
 * Match these with the versions in the meteor-typescript/package.js
 */
const COMPILER_VERSION = "0.3.18";
const TYPESCRIPT_VERSION = "5.3.2";

Package.describe({
  name: "jorgenvatle:meteor-typescript-compiler",
  version: COMPILER_VERSION,
  summary: "A Typescript compiler plugin for Meteor",
  git: "https://github.com/JorgenVatle/meteor-typescript-fork",
  documentation: "README.md",
});

Npm.depends({
  "typescript": TYPESCRIPT_VERSION,
  "chalk": "4.0.0",
  "@types/node": "14.0.4",
});

Package.onUse(function (api) {
  api.versionsFrom("1.10");
  api.use(["babel-compiler"], "server");
  api.use(["typescript@3.0.0||4.0.0"], "server"); // For compiling this package
  api.addFiles(["meteor-typescript-compiler.ts"], "server");
  api.export(["MeteorTypescriptCompiler"], "server");
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("typescript");
  api.use("jorgenvatle:meteor-typescript-compiler");
  api.mainModule("tests.ts");
});
