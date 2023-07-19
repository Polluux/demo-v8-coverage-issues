import { describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import CoverageTestComponent from 'src/components/coverage-test-component.vue';

describe('CoverageTestComponent', () => {
  it('Do things', async() => {
    const wrapper = mount(CoverageTestComponent, { propsData: { } });
    wrapper.vm.f(true);
    wrapper.unmount();
  });
});