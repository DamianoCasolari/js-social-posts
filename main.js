const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://picsum.photos/300/300"
        },
        "likes": 80,
        "created": "2023-02-29"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2022-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2022-03-05"
    }
];

const containerPosts = document.querySelector("#container")




// i cretate Dynamicly the posts with array "posts"
posts.forEach((object) => {
    const post = `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${object.media}" alt="${object.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${object.author.name}</div>
                        <div class="post-meta__time">${differenceDate(object.created)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${object.content}</div>
            <div class="post__image">
                <img src="${object.author.image}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${object.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
`
    containerPosts.innerHTML += post;
})




// -------FUNCTION 

// I create the difference between today's date and that of the object 
function differenceDate(date) {
    const dateObject = new Date(date);
    const dateToday = new Date();

    const diffInMs = dateToday.getTime() - dateObject.getTime();
    const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    const diffInMonths = (dateToday.getFullYear() - dateObject.getFullYear()) * 12 + ((dateToday.getMonth() + 1) - (dateObject.getMonth() + 1));

    if (diffInHours < 24) {
        return diffInHours + " hours ago"
    } else if (diffInDays < 30) {
        return diffInDays + " days ago"
    } else if (diffInMonths < 12){
        return diffInMonths + " months ago"
    } else {
        return date
    }
}