Package.describe({
    summary: "Collection of functions for async logic.",
    name: "mylar:async",
    version: "0.0.1",
    git: "https://github.com/gliesesoftware/mylar-async.git"
});

Package.onUse(function (api) {
  api.addFiles('async.js', ['client', 'server']);
});
