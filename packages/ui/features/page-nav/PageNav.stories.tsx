import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import PageNav from "./PageNav";

const meta = {
  title: "Features/PageNav",
  component: PageNav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof PageNav>;

export default meta;

export const Default: StoryObj<typeof PageNav> = {
  args: {
    onClick: fn(),
    items: [
      { id: "start", label: "Start", disabled: true },
      { id: "1", label: "Page 1" },
      { id: "2", label: "Page 2" },
      { id: "3", label: "Page 3" },
      { id: "4", label: "Page 4" },
      { id: "5", label: "Page 5" },
      { id: "6", label: "Page 6" },
      { id: "end", label: "End", disabled: true },
    ],
  },
};
