import type { UserConfig } from '@farmfe/core';
function defineConfig(config: UserConfig): UserConfig {
  return config;
}

export default defineConfig({
  compilation:{
    input: {
      useMemo: './useMemo.html', // useMemo Page
      // ... more pages
    }
  },
  server:{
port:1234
  },
  plugins:[
    '@farmfe/plugin-react',
  ]
})