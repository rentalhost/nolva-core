import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      container: ["container"],
      breakpoint: ["mobile"],
      color: ["theme"],
    },
  },
});
