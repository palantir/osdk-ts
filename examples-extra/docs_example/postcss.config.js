import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    'postcss-import': {
      resolve: (id) => {
        // Handle @osdk/react-components package imports
        if (id === '@osdk/react-components/styles.css') {
          return path.resolve(__dirname, '../../packages/react-components/build/browser/styles.css');
        }
        // Handle @osdk/react-components-styles package imports
        if (id === '@osdk/react-components-styles') {
          return path.resolve(__dirname, '../../packages/react-components-styles/src/index.css');
        }
        // Default resolution for other imports
        return id;
      }
    },
    tailwindcss: {},
    autoprefixer: {},
  },
}
