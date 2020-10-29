import Button from './Button'

export default {
  title: 'Button',
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large']
      }
    },
    backgroundColor: {
      control: 'color'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: `<Button v-bind="$props" /> `
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'プライマリーボタン',
  primary: true,
  scondary: false,
  size: 'medium',
  backgroundColor: ''
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  label: 'セカンダリーボタン',
  primary: false,
  scondary: true
}