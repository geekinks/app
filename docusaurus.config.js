// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Geek ink',
  tagline: "we're more than just a school—we're your ultimate destination for all things tech. From top-notch education to a wide range of tech services, we're here to support you every step of the way on your journey to success.",
  favicon: 'img/favicon/favicon.ico',

  // Set the production url of your site here
  url: 'https://geekink.com.ng',
  baseUrl: '/',
  organizationName: 'geekinks',
  projectName: 'app', 
  trailingSlash: false,


      // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  //  plugins 
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: './static/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // analytics
        gtag: {
          trackingID: 'G-1MBRGBYCHX',
          anonymizeIP: true,
        },
        // sitemap
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: './sidebars.js',

        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
    // Declare some <meta> tags SEO
    metadata: [
      {name: 'keywords', content: 'Geek ink, Technoprenuer, LinkedInuted, Social Innovators, GSU'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://github.com',
        },
      },
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'Geek ink',
          url: 'https://web.facebook.com/geeksadacamy',
          logo: 'https://geekink.com.ng/img/logo.png',
        }),
      },
    ],
      navbar: {
        logo: {
          alt: 'Geek ink',
          src: 'img/logo.png',
        },
        items: [
          {
            // type: 'docSidebar',
            type: 'dropdown',
            position: 'left',
            label: 'Courses',
            items: [
              {
                type: 'doc',
                label: 'General Computing Basic',
                docId: 'basic/intro',
              },
              {
                type: 'doc',
                label: 'Advance Excel',
                docId: 'excel/intro',
              },
              {
                type: 'doc',
                label: 'Python programming(OOPs & DSA)',
                docId: 'python/intro',
              },
              {
                type: 'doc',
                label: 'Java programming(SE, OOPs & DSA)',
                docId: 'python/intro',
              },
              {
                type: 'doc',
                label: 'Fullstack(MERN)',
                docId: 'mern/intro',
              },
              {
                type: 'doc',
                label: 'Frontend(ReactJS)',
                docId: 'react/intro',
              },
              {
                type: 'doc',
                label: 'Backend(NodeJS)',
                docId: 'node/intro',
              }
            ],
          },
          {
            to: '/blog',
             label: 'Blog',
             position: 'left'
            
            },
            // {
            //   to: '/services',
            //    label: 'Services',
            //    position: 'left'
              
            // },
            // {
            //   to: '/services',
            //    label: 'Contact Us',
            //    position: 'right'
              
            // },
          // {
          //   href: 'https://github.com/AdamsGeeky',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/geekinks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Geek ink, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
