Package.describe({
  summary: "Collection of functions for async logic."
});

Package.onUse(function (api) {
  api.addFiles('async.js', ['client', 'server']);
});
