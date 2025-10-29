/// <reference types="vite/client" />

// Declare .ink files as raw text imports
declare module '*.ink?raw' {
  const content: string;
  export default content;
}
