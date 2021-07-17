import { Story, Meta } from '@storybook/react'
import CharacterCard from '.'

export default {
  title: 'CharacterCard',
  component: CharacterCard,
} as Meta

export const Default: Story = () => (
  <CharacterCard
    id="1"
    name="Iron Man"
    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, porro alias vitae provident a ducimus tenetur! Odit molestias, vel beatae doloremque, iure, ullam quae iste magnam sequi consequuntur nihil dolor."
    thumbnail={{
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
      extension: 'jpg',
    }}
  />
)
