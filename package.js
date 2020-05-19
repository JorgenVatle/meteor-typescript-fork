Package.describe({
  name: "refapp:meteor-typescript",
  version: "0.0.1",
  summary: "A Typescript compiler plugin for Meteor",
  git: "https://github.com/refapp/meteor-typescript",
  documentation: "README.md",
});

Package.registerBuildPlugin({
  name: "meteor-typescript",
  sources: ["meteor-typescript-plugin.js"],
  npmDependencies: {
    typescript: "3.9.2",
  },
});

Package.onUse(function (api) {
  api.use("isobuild:compiler-plugin@1.0.0");
  api.versionsFrom("1.10");
  api.use("ecmascript");
  api.mainModule("meteor-typescript-plugin.js");
});
