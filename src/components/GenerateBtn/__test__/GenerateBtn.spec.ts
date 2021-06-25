import { shallowMount } from '@vue/test-utils'
import GenerateBtn from '@/components/GenerateBtn/GenerateBtn.vue'

describe('GenerateBtn.vue', () => {
  const wrapper: any = shallowMount(GenerateBtn);
  
  describe('Events/Emits', () => {
    it('should trigger changed-status', async () => {
      const spy = jest.spyOn(wrapper.vm, 'generate-profiles');

      await wrapper.vm.generateProfiles();

      expect(wrapper.emitted('generate-profiles')).toBeTruthy();
      expect(spy).toHaveBeenCalled();
    });
  })
})
