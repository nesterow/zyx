import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import PageMenu from "./PageMenu";

const meta = {
  title: "Features/PageMenu",
  component: PageMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof PageMenu>;

export default meta;

export const Default: StoryObj<typeof PageMenu> = {
  args: {
    children: "Trigger",
  },
};
