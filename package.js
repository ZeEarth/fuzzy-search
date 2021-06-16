Package.describe({
  summary: "Fuzzy text searching plugin for Meteor - TEST ONLY"
});

Package.on_use(function (api) {
	api.add_files('lib/fuzzy-search.js', ['client', 'server']);
	api.export('mostSimilarWords');
});