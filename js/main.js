const lst = document.querySelector('ol')
const links = [
  {
    title: "Week 1",
    url: "week1/index.html"
  },
  {
    title: "Week 2",
    url: "week2/index.html"
  },
  {
    title: "Week 3",
    url: "week3/index.html"
  },
  {
    title: "Week 4",
    url: "week4/index.html"
  },
  {
    title: "Week 5",
    url: "week5/index.html"
  }, 
  {
    title: "Midterm Challenge",
    url: "challenge1/index.html"
  },
  {
    title: "Week 7",
    url: "week7/index.html"
  }, 
  {
    title: "Week 8",
    url: "week8/index.html"
  },
  {
    title: "Week 9",
    url: "week9/index.html"
  }, 
  {
    title: "Week 10",
    url: "week10/index.html"
  },
  {
    title: "Challenge 2",
    url: "challenge2/star.html"
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
