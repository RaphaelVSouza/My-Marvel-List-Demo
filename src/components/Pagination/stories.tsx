import { Story, Meta } from '@storybook/react'
import Pagination from '.'

export default {
  title: 'Pagination',
  component: Pagination,
} as Meta

export const Default: Story = () => (
  <Pagination limit={20} total={60} currentPage={0} setCurrentPage={() => ''} />
)
