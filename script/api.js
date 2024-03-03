const loadData = async () => {
  // console.log('api loaded test');
  const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
  const data = await response.json()
  const posts = data.posts;
  // console.log(posts);
  showAllDataInDisplay(posts)
}


const showAllDataInDisplay = (posts) => {
  // console.log(posts);
  posts.forEach(post => {
    console.log(post);
    const showData = document.getElementById('post-data')
    const div = document.createElement('div')
    div.classList = `card card-compact  bg-base-300 my-12 py-12`
    div.innerHTML = `
     <div class="flex">
     <div class="avatar online">
     <div class="w-24 rounded">
       <img src="${post.image}" />
     </div>
   </div>
     <div class="card-body">
       <div class="flex">
       <h4 class="font-bold pr-14">#${post.category}</h4>
       <h4 class="font-bold">Author: ${post.author.name}</h4>
       </div>
       <h2 class="card-title">${post.title}</h2>
       <p class="">${post.description}</p>
      
       <div class="flex">
      <div class="flex ">
      <div class="mr-14">
      <i class="fa-regular fa-message"></i>
      <span>${post.comment_count}</span>
      </div>
      <div class="mr-14">
      <i class="fa-regular fa-eye"></i>
      <span>${post.view_count}</span>
      </div>
      <div class="mr-14">
      <i class="fa-regular fa-clock"></i>
      <span>${post.posted_time} min</span>
      </div>
      <div class="bg-green-400 p-2 rounded-full flex justify-end">
      <i class="fa-solid fa-envelope-open text-white"></i>
      </div>
      </div>
       </div>
     </div>
     </div>
       `
    showData.appendChild(div)



  })
}


loadData()