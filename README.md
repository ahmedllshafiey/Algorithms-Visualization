# Algorithms Visualization

![License](https://img.shields.io/badge/license-MIT-green)

## Overview

Algorithms Visualization is a project aimed at visualizing various sorting algorithms. This project uses TypeScript, Vite, and HTML5 Canvas to provide a visual representation of algorithms in action, helping users to better understand their functionality and performance.

## Features

- **Bubble Sort Visualization**: A visual representation of the bubble sort algorithm.
- **Responsive Design**: The canvas adjusts its size based on the window size.
- **Random Colors**: Each element in the array is represented by a rectangle with a randomly assigned color.

## Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ahmedllshafiey/Algorithms-Visualization.git
   cd Algorithms-Visualization
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

## Usage

### Development Server

To start the development server with hot-reloading on changes:

```sh
npm run dev
```

### Build

To build the project:

```sh
npm run build
```

### Preview

To preview the built project:

```sh
npm run serve
```

## Project Structure

```plaintext
.
├── build/                  # Compiled output
├── public/                 # Public files like favicon
├── src/
│   ├── styles/             # CSS styles
│   │   └── global.css
│   └── Bubble.ts           # TypeScript class for Bubble Sort visualization
├── index.html              # Main HTML file
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Project metadata and scripts
└── LICENSE                 # MIT License
```

## Configuration

### TypeScript Configuration

The `tsconfig.json` file is set to output JavaScript files into a `build` directory:

```json
{
  "compilerOptions": {
    "outDir": "./build",
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

### Vite Configuration

The `vite.config.ts` file is configured to use polling for file changes, ensuring that the server restarts on any change:

```ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

Ahmed Shafiey

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For any inquiries or feedback, please contact [ahmedllshafiey@gmail.com](mailto:ahmedllshafiey@gmail.com).