/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath: '/cothamgardenspfta',
  distDir: 'out/cothamgardenspfta',
  trailingSlash: true,
  images: { unoptimized: true },
  webpack: (cfg) => {
    cfg.module.rules.push(
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: { mode: ['react-component'] }
      }
    );
    return cfg;
  }
};
