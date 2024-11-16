/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath: '/cgschoolstreet',
  distDir: 'out/cgschoolstreet',
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
