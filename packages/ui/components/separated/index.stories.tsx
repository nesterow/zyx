import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import Separated from "./Separated";

const meta = {
  title: "Components/Separated",
  component: Separated,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Separated>;

export default meta;
type Story = StoryObj<typeof meta>;

const Separator = () => (
  <span className="inline-block bg-green-500 h-[8px] w-[8px] mx-4 rounded-full"></span>
);

export const Anatomy: Story = {
  args: {
    className:
      "flex items-center bg-white py-2 px-3 rounded-md font-sans border-1 border-gray-300 border-dashed",
    children: ["item 1", "item 2", "item 3"].map((item, index) => (
      <a
        href="#"
        tabIndex={0 - index}
        className="bg-white py-2 px-4 rounded-lg text-sm font-mono focus:ring-2 focus:ring-green-400 border-1 border-gray-300 border-dashed"
      >
        {item}
      </a>
    )),
    separator: <Separator />,
  },
};
