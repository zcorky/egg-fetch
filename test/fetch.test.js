'use strict';

const mock = require('egg-mock');

describe('test/fetch.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/fetch-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('ctx.fetch ok', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, fetch')
      .expect(200);
  });
});
