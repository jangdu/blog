// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 300,
  async headers() {
    return [
      {
        source: '/(.*)', // 모든 경로에 대한 설정
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*' // 모든 도메인에 대해 접근 허용
          }
        ]
      }
    ]
  },
  images: {
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'https://utteranc.es/client.js',
      'https://www.googletagmanager.com',
      'https://blog.jangdu.co.kr',
      'https://www.google-analytics.com',
      'https://console.cloudinary.com/',
      'https://giscus.app',
      'transitivebullsh.it'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})
