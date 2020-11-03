import { shallowMount } from '@vue/test-utils';

import Hello from '@/components/Hello';

describe('Hello', () => {
  it('greets the user', () => {
    const wrapper = shallowMount(Hello);

    expect(wrapper.html()).toContain('Hello, World!');
  })
})
