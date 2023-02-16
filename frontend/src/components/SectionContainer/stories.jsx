import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          totam iure maiores dolorum perspiciatis voluptatibus asperiores
          repellat provident, voluptates aperiam quibusdam. Dolorum ad minima
          corporis commodi numquam quas aut similique!
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
