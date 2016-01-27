// var nightwatch = require('nightwatch');

describe('clinical:active-layout-fullscreen-config', function () {
  var server = meteor();
  var client = browser(server);

  it("ActiveEntry object should be loaded on client and server", function () {
    return server.execute(function () {
      expect(ActiveEntry.isAbc()).to.equal('abc');
    }).then(function (data){
      return client.execute(function (a) {
        expect(ActiveEntry.isAbc()).to.equal('abc');
      });
    });
  });

});
