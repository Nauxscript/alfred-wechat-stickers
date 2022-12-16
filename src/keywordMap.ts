import type { Keys } from './stickersData'

type KeywordMap = Record<string, Keys[]>

const keywordMap: KeywordMap = {
  '笑 smile': ['旺柴-wc', '奸笑-jx', '社会社会-shsh', '呲牙-zy', '再见-zj', '皱眉-zm', '偷笑-tx', '坏笑-hx', '色-se', '憨笑-hx', '微笑-wx', '阴险-yx', '愉快-yk', '太阳-ty'],
  'qq 亲亲': ['亲亲-qq', '嘴唇-zc'],
  '花 hua 玫瑰': ['凋谢-dx', '玫瑰-mg'],
  '企鹅 qe': ['发抖-fd', '跳跳-tt', '转圈-zq'],
  '无语 wy 不爽 bs': ['Emm', '再见-zj', '右哼哼-yhh', '微笑-wx', '吐-tu', '抠鼻-kb', '汗-han', '傲慢-am', '白眼-by', '鄙视-bs', '闭嘴-bz', '擦汗-ch', '菜刀-cd', '抓狂-zk'],
  '骂人 mr 打人 dr': ['咒骂-zm', '发怒-fn', '敲打-qd', '抓狂-zk', '菜刀-cd'],
  '心 xin': ['心碎-xs', '爱心-ax', '色-se'],
  '难过 ng sad upset 情绪': ['打脸-dl', '大哭-dk', '凋谢-dx', '囧-jiong', '可怜-kl', '骷髅-kl', '快哭了-kkl', '流泪-ll', '难过-ng', '衰-shuai', '委屈-wq', '心碎-xs', '皱眉-zm'],
  '礼物 lw 过年 gn': ['發-fa', '福-fu', '红包-hb', '玫瑰-mg', '啤酒-pj', '礼物-lw'],
  '抱抱 bb 安慰 aw': ['拥抱-yb', '亲亲-qq', '可怜-kl', '撇嘴-pz', '皱眉-zm'],
}

export default keywordMap

