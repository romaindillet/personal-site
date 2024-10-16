export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",

	permalink: function (data) {
		const date = data.page.date
		const dateURL = date.toISOString().split('T')[0].split('-').join('/')
		return `/${dateURL}/${this.slugify(data.title)}/`
  },
};
