import {moduleFor, test} from 'ember-qunit'

moduleFor('controller:photo', 'Unit | Controller | photo', {
	// Specify the other units that are required for this test.
	needs: ['service:store']
})

// Replace this with your real tests.
test('it exists', function(assert) {
	let controller = this.subject()
	assert.ok(controller)
})
