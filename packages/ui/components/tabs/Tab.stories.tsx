import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import Tab from "./Tab";

const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Tab>;

export default meta;

export const Default: StoryObj<typeof Tab> = {
  args: {
    onClick: fn(),
    children: "Tab",
  },
};
