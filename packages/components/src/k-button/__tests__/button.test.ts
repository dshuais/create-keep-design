/*
 * @Author: dushuai
 * @Date: 2024-01-05 12:25:19
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-10 21:57:49
 * @description: 测试button组件
 */
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../k-button.tsx';

// The component to test
describe('test-k-button', () => {
  // 传入slot
  it('should render slot', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'k-button'
      }
    });
    expect(wrapper.text()).toBe('k-button');
  });

  // 传入props
  it('should have props', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      }
    });
    expect(wrapper.classes()).toContain('keep-button--primary');
  });
});
