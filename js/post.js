let url = new URL(location.href)
let u = url.searchParams.get('id')
let div2 = document.createElement('div')
div2.classList.add('div2')

const asyncFunc = async () => {
    const json1 = await fetch('https://jsonplaceholder.typicode.com/posts/' + JSON.parse(u));
    const posts = await json1.json();
    const json2 = await fetch('https://jsonplaceholder.typicode.com/posts/' + JSON.parse(u) + '/comments')
    const comments = await json2.json();
    function iteratorP(posts) {
                    let div = document.createElement('div')

        for (const post in posts) {
            if (posts.hasOwnProperty(post)) {
                if (typeof posts[post] == 'object') {
                    iteratorP(posts[post])
                } else {
                    let p = document.createElement('p')
                    p.innerText = `${post}: ${posts[post]}`
                    div.classList.add('divP')
                    div.append(p)
                }
            }
        }
                    document.body.append(div)
    }
    function iteratorC(comments) {
                    let div1 = document.createElement('div')

        for (const comment in comments) {
            if (comments.hasOwnProperty(comment)) {
                if (typeof comments[comment] == 'object') {
                    iteratorC(comments[comment])
                } else {
                    let p = document.createElement('p')
                    p.innerText = `${comment}: ${comments[comment]}`
                    div1.classList.add('divC')
                    div1.append(p)
                    div2.append(div1)
                }
            }
        }
                    document.body.append(div2)
    }
    iteratorP(posts)
    iteratorC(comments)
}
asyncFunc();

//