import {
    shallowMount
} from '@vue/test-utils'
import {
    Map
} from '@/components'

describe('Map.vue', () => {
    const wrapper: any = shallowMount(Map, {
        propsData: {
            latitude: 0,
            longitude: 0,
            id: 1
        }
      });

    describe('Rendering', () => {
        it('Se renderiza el componente', async () => {
            expect(wrapper).toMatchSnapshot();
        });
    })
    describe('Props', () => {
        it('latitude exists', async () => {
          const prop = wrapper.props().latitude;
          expect(prop).toBe(0);
        });
    
        it('longitude exists', async () => {
          const prop = wrapper.props().longitude;
          expect(prop).toBe(0);
        });
        it('id exists', async () => {
          const prop = wrapper.props().id;
          expect(prop).toBe(1);
        });   

      });
})