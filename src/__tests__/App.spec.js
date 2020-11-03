import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from '@/App.vue';
import Hello from '@/components/Hello';

const flushPromises = () => new Promise(setImmediate);

jest.mock("@/components/Hello", () => ({
  name: "Hello",
  render: h => h("div")
}));

import { routes } from '@/router';

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);

describe("App", () => {
  let state;
  let actions;
  let store;

  beforeEach(() => {
    state = {}
    actions = {}
    store = new Vuex.Store({
      state,
      actions
    })
  })

  it('renders a Hello component when base route is pushed', async () => {
    const router = new VueRouter({
      mode: 'history',
      routes
    });

    const wrapper = mount(App, {
      localVue,
      router,
      store
    });

    router.push("/");

    await flushPromises();
    expect(wrapper.findComponent(Hello).exists()).toBe(true);
  })
})
