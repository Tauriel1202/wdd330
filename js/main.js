const lst = document.querySelector('ol')
const links = [
  {
    title: "Week 1",
    url: "week1/index.html"
  }
]

links.forEach((links)=>{
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.href = links.url
  a.innerHTML = links.title

  li.append(a)
  lst.append(li)
})
