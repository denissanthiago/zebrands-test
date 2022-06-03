/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    apiGitHubUrl: 'https://api.github.com/',
  },
}

module.exports = nextConfig
