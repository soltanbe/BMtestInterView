import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | login_page', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:login-page');
    assert.ok(route);
  });
});
