import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["docsPage"],
  argTypes: {
    id: {
      control: { type: "text" },
    },
    multiple: {
      control: { type: "boolean" },
    },
    search: {
      control: { type: "boolean" },
    },
    options: {
        control: { type: "object" },
     },
    selectedOptions: {
      control: { type: "object" },
   },
   optionLabel: { control: { type: 'text'}},
   inputLabel: { control: { type: 'text'}}
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DynamicDropdown: Story = {
  args: {
    id: 'dropdown1',
    multiple: false,
    search: false,
    options: [{ id: '1', label: 'option 1', value: 'opt1'}, { id: '2', label: 'long long long long long option 2', value: 'opt2'}],
    selectedOptions: ['1'],
    optionLabel: '',
    inputLabel: ''
  },
};
