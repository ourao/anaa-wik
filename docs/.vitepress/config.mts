import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "An AA Group",
  description: "Service site",
  base: "/anaa-wik/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/guides/formats' },
    ],
    outline: [2,4],
    repo: 'ourao/anaa-wik',
    logo: '/img/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ourao/anaa-wik' }
    ]
  }
};
const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  // useTitleFromFrontmatter: true,
};
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
