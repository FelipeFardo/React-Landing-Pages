import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestias nam quidem voluptatibus asperiores sed, possimus perferendis quia similique unde autem sit qui, accusamus explicabo nobis aliquid dolor, eius exercitationem voluptates!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
