import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        accusantium inventore mollitia nemo asperiores fugit autem tenetur
        distinctio, reiciendis sint! Illum fugit numquam nisi nostrum
        repellendus labore corporis expedita distinctio!
      </h1>
      <GoTop {...args} />
    </div>
  );
};
