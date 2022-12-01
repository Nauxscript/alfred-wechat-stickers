import alfy from 'alfy';
import stickersData from './stickersData.js'

// const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');
const data = JSON.parse(JSON.stringify(stickersData)).data

const items = alfy
	.inputMatches(data, 'keyword')
	.map(element => ({
		title: element.code,
		subtitle: element.keyword,
		arg: element.code,
		mods: {
			ctrl: {
				arg: element.code,
				subtitle: 'Copy and paste',
			},
		},
	}));

alfy.output(items);