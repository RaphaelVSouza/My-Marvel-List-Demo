import { Story, Meta } from '@storybook/react'
import ModalError from '.'

export default {
  title: 'ModalError',
  component: ModalError,
  argTypes: {
    title: {
      type: 'string',
    },
    text: {
      type: 'string',
    },
    btnText: {
      type: 'string',
    },
  },
} as Meta

export const Default: Story = (args) => (
  <ModalError title="" text="" btnText="" {...args} />
)

Default.args = {
  title: 'Something wrong happened!',
  text: 'An unexpected error ocurred, try again later.',
  btnText: 'Back to home page',
}
