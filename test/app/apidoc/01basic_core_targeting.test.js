'use strict';

const { app, assert } = require('egg-mock/bootstrap');


describe('API Endpoint and Authentication', () => {

  // it('should assert', function* () {
  //   const pkg = require('../../../package.json');
  //   assert(app.config.keys.startsWith(pkg.name));
  //
  //   // const ctx = app.mockContext({});
  //   // yield ctx.service.xx();
  // });

  // it('basic core targeting should GET /', () => {
  //   return app.httpRequest()
  //     .get('/')
  //     .expect('hi, egg')
  //     .expect(200);
  // });

  it('baidu should response', async () => {
    await app.httpRequest('http://www.baidu.com')
      .get('/')
      .expect(200);
  });
});