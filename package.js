Package.describe({
  name: 'clinical:active-layout-fullscreen-config',
  version: '0.0.1',
  summary: 'Default fullscreen configuration for ActiveLayout. For testing and debugging, mostly.',
  git: 'https://github.com/clinical-meteor/active-layout-fullscreen-config',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('clinical:active-layout@0.7.5');
  api.imply('clinical:active-layout');

  api.addFiles('client/fullscreen-config.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('clinical:active-layout-fullscreen-config');
});
