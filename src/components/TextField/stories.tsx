import { Story, Meta } from '@storybook/react'
import withFormik from 'storybook-formik'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
  decorators: [withFormik],
} as Meta

export const Default: Story = () => (
  <TextField label="Add some text" name="text" />
)
