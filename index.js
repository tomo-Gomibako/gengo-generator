const twitter = require("./twitter")
const dailyuse = require("./dailyuse-kanji.json").dailyuse
const kanji = dailyuse

async function post() {
	// console.log(await twitter.getTimelineByScreenName("71aa55"))
	// console.log(kanji)
	const options = []
	let status = ""
	for(let i = 0; i < 3; i++) {
		const index = Math.random() * kanji.length | 0
		options.push(kanji[index])
	}
	for(let v of options.sort((a, b) => a.strokes - b.strokes).slice(0, 2)) {
		status += v.char
	}
	// console.log(status)
	twitter.postStatus(status)
}
post()
setInterval(() => {
	post()
}, 900000);
