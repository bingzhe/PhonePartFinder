import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'MOSTON',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
      '^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)':
        'z-paging/components/z-paging$1/z-paging$1.vue',
    },
  },
  tabBar: {
    color: '#6e6d6b',
    selectedColor: '#e64340',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    height: '50px',
    fontSize: '10px',
    iconWidth: '24px',
    spacing: '3px',
    list: [
      {
        iconPath: 'static/tabbar/home-off.png',
        selectedIconPath: 'static/tabbar/home-on.png',
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/video-off.png',
        selectedIconPath: 'static/tabbar/video-on.png',
        pagePath: 'pages/video-course/video-course',
        text: '教程',
      },
      {
        iconPath: 'static/tabbar/feedback-off.png',
        selectedIconPath: 'static/tabbar/feedback-on.png',
        pagePath: 'pages/feedback/feedback',
        text: '反馈',
      },
    ],
  },
})
