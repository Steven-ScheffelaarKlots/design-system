import Button from "./button"; // Adjust the import path to your Button component
import { fn } from "@storybook/test";

// Default export that defines component metadata
const buttonMeta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
  tags: ["autodocs"],
};

export default buttonMeta;

export const Active = {
  args: {
    children: "BUTTON",
  },
};

export const Hover = {
  args: {
    children: "BUTTON",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Focused = {
  args: {
    children: "BUTTON",
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const Pressed = {
  args: {
    children: "BUTTON",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Disabled = {
  args: {
    children: "BUTTON",
    disabled: true,
  },
};
