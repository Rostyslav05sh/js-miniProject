let url = new URL(location.href)
let u = url.searchParams.get('id')

const asyncFunc = async () => {
    const json = await fetch('https://jsonplaceholder.typicode.com/users/' + JSON.parse(u));
    const users = await json.json();
    let div2 = document.createElement('div')
    document.body.append(div2)
    div2.classList.add('div2')
    function iterator(users) {
        for (const user in users) {
            if (users.hasOwnProperty(user)) {
                if (typeof users[user] == 'object') {
                    iterator(users[user])
                } else {
                    let p = document.createElement('p')
                    p.innerText = `${user}: ${users[user]}`
                    div2.append(p)
                }
            }
        }
    }
    iterator(users)

    let div1 = document.createElement('div')
    div1.classList.add('div1')
let button = document.createElement('button')
button.innerText = 'post of current user'
    button.classList.add('btn1')
    div1.append(button)
document.body.append(div1)

let url1 = new URL(`https://jsonplaceholder.typicode.com/users/${u}/posts`)
button.addEventListener('click', function (e) {

    fetch(url1).then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                let p = document.createElement('p')
                let a = document.createElement('a')
                let button = document.createElement('button')
                let div3 = document.createElement('div')
                div3.classList.add('div3')
                button.innerText = 'More'
                p.innerText = `title №${post.id}: ${post.title}`
                a.href = 'post-details.html?id=' + JSON.stringify(`${post.id}`)
                div3.append(p)
                a.append(button)
                div3.append(a)
                div4.append(div3)
            }
        })
    button.setAttribute('disabled','disabled')
    let div4 = document.createElement('div')
    div4.classList.add('div4')
    document.body.append(div4)
})
}
void asyncFunc();



