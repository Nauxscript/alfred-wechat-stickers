import alfy from 'alfy';
import stickersData from './stickersData.js'

const iconPath = './icons'
// const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');
const data = JSON.parse(JSON.stringify(stickersData)).data

const items = alfy
	.inputMatches(data, 'keyword')
	.map(element => ({
		title: element.name,
		subtitle: element.keyword,
		arg: element.code,
		icon: {
			path: element.key ? `${iconPath}/${element.key}.png` : `${iconPath}/default.png` 
		},
		mods: {
			ctrl: {
				arg: element.code,
				subtitle: 'Copy and paste',
			},
		},
	}));

alfy.output(items);