import { mount } from '@vue/test-utils';
import AppHello from '../AppHello.vue';

describe('AppHello', () => {
	it('renders out hello text', () => {
		let wrapper = mount(AppHello);

		expect(wrapper.html()).toContain('hello');
	});
});
