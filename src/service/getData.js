import fetch from './../plugins/fetch'

/**
 * 获取置顶公告
 */

export const announceLists = () => fetch('/crowdfunding/articleIndex.html');

/**
 * 获取最新热点
 */

export const latestLists = () => fetch('/fortuneChur/news/classification.html');