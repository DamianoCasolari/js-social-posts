const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/300/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://picsum.photos/600/300"
        },
        "likes": 80,
        "created": "2023-02-29"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://picsum.photos/1100/1100"
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
            "image": ""
        },
        "likes": 78,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "",
        "author": {
            "name": "Luca Formicola",
            "image": "https://picsum.photos/900/900"
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
            "image": "https://picsum.photos/600/600"
        },
        "likes": 95,
        "created": "2022-03-05"
    }
];

const containerPosts = document.querySelector("#container")

// i cretate Dynamicly the posts with array "posts"
posts.forEach((object) => {

    const charProfileName = checkProfilePhoto(object.media, object.author.name)
    let dNoneClass = addDnoneClasses(object.media)
    let deleteClass = addStyleCharProfile(dNoneClass)

    const post = `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic ${dNoneClass}" src="${object.media}" alt="${object.author.name}"> 
                        <div class="${deleteClass} style_char" style="background-color:${randomBackground()};">${charProfileName}</div>                   
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
                        <a class="like-button  js-like-button" href="#" data-postid="${object.id}">
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


/**
 *  change profile photos with first letters of first name and second name 
 * @param {string} profilePhoto string with info of proffile photo
 * @param {string} profileName string with info of proffile name
 * @returns 
 */
function checkProfilePhoto(profilePhoto, profileName) {
    if (profilePhoto == "") {
        // const firstSecondNameArray = profileName.split(" ")
        // const firstCharsArray = firstSecondNameArray.map(string => string.charAt(0))
        // const StringBothChar = firstCharsArray.join("")
        // return StringBothChar

        // with destructuring 
        const [firsName, secondName] = profileName.split(" ")
        return `${firsName.charAt(0)}` + `${secondName.charAt(0)}`
    }
}

//addeventListener increment like and change color button on like button 
const ArrayButtonsEl = document.querySelectorAll(".like-button")
let arrayIdClick = []
const numberLike = document.querySelectorAll(".likes__counter > b")

ArrayButtonsEl.forEach((elementDom, index) => {
    elementDom.addEventListener("click", function (e) {
        e.preventDefault()
        elementDom.classList.toggle("like-button--liked")

        const postId = elementDom.getAttribute("data-postid");
        let nLike = Number(elementDom.closest(".likes__cta").nextElementSibling.querySelector(".js-likes-counter").innerText)
        //add the condition to check if the Like button has already been clicked
        if (elementDom.classList.contains("like-button--liked")) {
            arrayIdClick.push(postId);
            console.log("array id = " + arrayIdClick);
            nLike++
        } else {
            const filteredArray = arrayIdClick.filter(id => id !== postId);
            arrayIdClick = [];
            arrayIdClick.push(...filteredArray);
            console.log("array id = " + arrayIdClick);
            nLike--
        }
        numberLike[index].innerText = nLike;
    })
})

// -------FUNCTION 

/**
 * add class "display-none" to the img with profile photo if the user doesn't put profile photo
 * @param {string} profilePhoto info about profile picture
 * @returns class to add display-none to the photo
 */
function addDnoneClasses(profilePhoto) {
    if (profilePhoto == "") {
        return "d_none"
    }
}

/**
 * add class "display-none" to the div with characters if the user put profile photo
* @param {string} profilePhoto info about profile pictures
* @returns class to add the first few characters instead of profile picture
*/
function addStyleCharProfile(comparation) {
    let classChar = comparation == "d_none" ? "" : "d_none"
    return classChar

}

/**
 * create random background to change background of Characters in the profile photo
 * @returns new background
 */
function randomBackground() {
    let cN1 = Math.floor(Math.random() * 255) + 1
    let cN2 = Math.floor(Math.random() * 255) + 1
    return `rgb(255,${cN1},${cN2})`
}


// I create the difference between today's date and that of the object 
function differenceDate(date) {
    const dateObject = new Date(date);
    const dateToday = new Date();

    const diffInMs = dateToday.getTime() - dateObject.getTime();
    const diffInHours = Math.round(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));
    const diffInMonths = (dateToday.getFullYear() - dateObject.getFullYear()) * 12 + (dateToday.getMonth() - dateObject.getMonth());

    if (diffInHours < 24) {
        return diffInHours + " hours ago"
    } else if (diffInDays < 30) {
        return diffInDays + " days ago"
    } else if (diffInMonths < 12) {
        return diffInMonths + " months ago"
    } else {
        return date
    }
}

// ---- this IS NOT ACTIVE but it is an alternative version (required in the exercise) to the DifferenceDate() function

/**
 * function to convert an American date into an Italian date
 * @param {string} americanDate date in american format
 * @returns date in italiano format
 */
function italianDateFormat(americanDate) {
    let arrayDateInfo = americanDate.split("-")
    let newItalianDate = arrayDateInfo.reverse()
    return newItalianDate.join("-")
}
