/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath: '/cotham-gardens-ptfa-website/',
  distDir: 'out/cotham-gardens-ptfa-website/',
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
