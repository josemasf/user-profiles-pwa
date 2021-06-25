import {
  shallowMount
} from '@vue/test-utils'
import {
  GenerateBtn
} from '@/components'

describe('GenerateBtn.vue', () => {
  const wrapper: any = shallowMount(GenerateBtn);

  describe('Rendering', () => {
    it('Se renderiza el componente', async () => {
      expect(wrapper).toMatchSnapshot();
    });
  })
  describe('Eventos', () => {
    it('emite evento generate-profiles', () => {
      const spy = jest.spyOn(wrapper.vm, 'generateProfiles');
      wrapper.vm.generateProfiles();

      expect(wrapper.emitted('generate-profiles')).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    })
  })
})