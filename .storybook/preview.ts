import type { Preview } from "@storybook/react";
import "../src/index.css"; // Ensure your global styles are included

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
