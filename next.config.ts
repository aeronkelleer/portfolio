import { basePath } from '@/constants/const';
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    loadPaths: [path.join(__dirname, 'src/styles').replace(/\\/g, '/')],
    prependData: `@use 'abstracts' as *;`,
  },
};

export default nextConfig;
