import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'zh-CN',
    title: 'ChatGPT-plugin 文档',
    description: '一个基于ChatGPT和New Bing的聊天插件',
    base: '/',
      
    plugins: [
        ['@vuepress/back-to-top'],
        [
            '@vuepress/pwa',
            {
                skipWaiting: true
            }
        ],
        [
            '@vuepress/plugin-pwa-popup',
            {
                locales: {
                    '/': {
                        message: '发现新内容可用',
                        buttonText: '刷新',
                    }
                }
            }
        ],
        [
            '@vuepress/plugin-google-analytics',
            {
                id: 'G-KB1K01QNTT'
            }
        ],
        [
            '@vuepress/plugin-docsearch',
            {
                apiKey: '916be29da8c120ab95e9ffa0c2975f0d',
                indexName: 'chatgpt-err0r',
                algoliaOptions: {
                    facetFilters: ["lang:en-US"],
                },
            }
        ],
        [
            '@vuepress/plugin-sitemap',
            {
                hostname: 'https://chatgpt-docs.err0r.top/'
            }
        ]
    ],

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        repo: 'ikechan8370/chatgpt-plugin',
        docsRepo: 'Err0rCM/chatgpt-plugin-docs',
        docsBranch: 'master',
        docsDir: 'docs',
        editLinkText: "编辑此页",
        lastUpdated: true,
        lastUpdatedText: '上一次编辑',
        contributors: true,
        tip: "提示",
        warning: "注意",
        danger: "警告",
        backToHome: "返回首页",
        nextLinks: true,
        prevLinks: true,
        navbar: [
            { text: 'Guide', children: ['/guide/', '/guide/quick_start.md', '/guide/config.md', '/guide/file.md', '/guide/docker.md'] },
            { text: 'Config', children: ['/config/', '/config/apikey.md', '/config/accesstoken.md', '/config/bing.md', '/config/browser.md', '/config/tts.md'] },
            { text: 'Admin', children: ['/admin/', '/admin/chat.md', '/admin/mode.md', '/admin/replymode.md', '/admin/silence.md', '/admin/queue.md', '/admin/confirm.md'] },
            { text: 'Set', children: ['/set/', '/set/sethelp.md', '/set/share.md'] },
            { text: 'Draw', children: ['/draw/', '/draw/drawpic.md'] },
            { text: 'FAQ', children: ['/faq/', '/faq/reverseapi.md', '/faq/slider.md'] },
            { text: 'Other', link: '/other/' },
        ],
        sidebar: "auto",
    },

})
