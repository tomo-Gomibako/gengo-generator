const twitter = require("./twitterAPI-wrapper")
const dailyuse = require("./dailyuse-kanji.json").dailyuse
const kanji = dailyuse

async function post() {
	// console.log(await twitter.getTimelineByScreenName("71aa55"))
	// console.log(kanji)
	let status = ""
	for(let i = 0; i < 2; i++) {
		const index = Math.random() * kanji.length | 0
		status += kanji[index]
	}
	// console.log(status)
	twitter.postStatus(status)
}
setInterval(() => {
	post()
}, 900000);
