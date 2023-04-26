const mobileNavButton = document.getElementById("nav-button");
// let r = document.getElementById("mobile-nav")
// console.log(r)
const nav = document.getElementById("expanded-nav")

const projects = [{
    title: "Share, Create, Edit & Sort Task",
    goals: `This is my first self-created full stack projects. 
    The goal when starting this project was to learn how to make a server(express.js),
    use a database to store data and learning how to connect client-side(front-end) to back-end `,
    description: `This project allows user to create a task with a title, description, and even able to add a due date. 
    You are allowed to not only create personal task, but also join or create your own group then assign task to this group.
    Users can easily edit their task, delete task and search task by title, or type(personal or group)`,
    issues:"When making this project I struggled in editing and deleting subdocuments that were arrays filled with objects, also I struggled linking my pages together due to not knowing react-router ",
    images: [
    {name: "Login", link: "./images/Home-Screen.png"},
    {name: "Task", link: "./images/Properties.png"},
    {name: "Create Note", link: "./images/Create-Note.png"},
    {name: "Group page", link: "./images/Current-Group.png"},
    {name: "Edit Note", link: "./images/Edit-Note.png"}
]
}]

//mobile button to open nav
function navButtonClick(){
    nav.classList.toggle("active")


}
mobileNavButton.addEventListener("click", navButtonClick)


//projects
let project1 = document.getElementById("project-1");
let openProject = document.getElementById("more-project");
let exitProject = document.getElementById("exit-project");
let descriptHalf = document.getElementById("descript-half");
let imgHalf = document.getElementById("img-half");
let body = document.getElementsByTagName("body")[0]
console.log(window.innerWidth < 768)

let close = ()=>{
    openProject.classList.toggle("about-project");
    descriptHalf.innerHTML = ""
    imgHalf.innerHTML = ""
    body.style.overflowY = "scroll"
    imgHalf.style.overflowY = "hidden";
    
};

function projectExtra(num){
    console.log("clicked")
    body.style.overflowY = "hidden"
    openProject.classList.toggle("about-project")
    imgHalf.style.overflowY = "scroll";
    //pictures
    let images = projects[num].images.map(current => `<img src="${current.link}" alt="${current.name}" class="click-image-expand"/>`)
    images = images.join("")
   

    //description
    descriptHalf.innerHTML = `
   
    <h4>${projects[num].title}</h4>
    <h6>Description:</h6>
    <p>${projects[num].description}</p>
    <h6>Goals:</h6>
    <p>${projects[num].goals}</p>
    <h6>Issues:</h6>
    <p>${projects[num].issues}</p>
    
    <button id="close-button">Exit</button>
    ${window.innerWidth <= 768 ? images: ""}
    

    ` 
    let closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", close);
    closeButton.classList.toggle("about-button")
    closeButton.style.backgroundColor = "red;"

    

    //image
    if(window.innerWidth > 768){
    imgHalf.innerHTML = images
}
    // document.getElementById("close-button").addEventListener("click", close)
    
    // openProject.appendChild(button)
    
}

// exitProject.addEventListener("click", projectExtra)
project1.addEventListener("click",()=>projectExtra(0))