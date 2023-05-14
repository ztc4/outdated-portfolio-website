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
],
accomplishments: `The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.
 An unexpected accomplishment would be learning Tailwind, I made a mockery of it before, I thought it made the code look like gibberish 
but now I'm contemplating remaking this very portfolio site using it and my 500+ lines of css for this site look like garbage in comparison.`,
githubLink: "https://github.com/ztc4/Full-Stack-Task-App",
deployment: "",

},
{
    title: "Ecommerce site w/ stripe as payment system",
    goals: `Learn how to use Stripe Api.
    Learn the ins and outs of Next.js, mainly how to use the Search Engine Optimizations features and,
    making a backend using the in-built api features `,
    description: `The project itself is simplistic itself, try to mimic an online shopping site.
     I focused less on login/logout functionally and instead went for just a simple cart feature that connected to stripe.
      I somehow found the tradeoffs that next.js can inccur with trying to optimize SEO and using react client components.  `,
    issues:` I couldn't get the inbuilt api to work how I wanted(I was on a experimental version at the time) so just opted for an outside server with express.js.
     I also made errors in structuring which components should be clientside & which should be server side.
     This ended up with me not having an overarching state(redux,context) and instead making several extra api calls to my server and sending more data than it should be.
     I once messed up my project playing with TypeScript, so I had to find a git version that didn't mess up my deploy.
     `,
    images: [
    {name: "homescreen", link: "./images/Home-Screen.png"},

],
    accomplishments: `The first accomplishment would most likely be learning Next.js, it was what I set off to do, so no surprise there.
     An unexpected accomplishment would be learning Tailwind, I made a mockery of it before, I thought it made the code look like gibberish 
    but now I'm contemplating remaking this very portfolio site using it and my 500+ lines of css for this site look like garbage in comparison.`,
    githubLink: "https://github.com/ztc4/Ecommerce-Nextjs",
    deployment: "https://ecommerce-portfolio-website.vercel.app/",

},
{
    title: "Javascript Personal Game",
    goals: `Not many goals going into this, Just generally interested in exploring the event Listeners behind games and the oop principles that was shown in small tutorial video games.`,
    description: `A game that allow you to move the your player, interact with other characters(npcs) that allow you to access dialogs to understand your current task and even fight enemies.`,
    issues:` Videos were boring so I dropped them after learning the basic collision using squares, and manipulation of the canvas itself.
     `,
    images: [
    {name: "My personal intruduction to gaming ", link: "./images/Home-Screen.png"},

],
    accomplishments: `Greater understanding writing code in a non web-development sense`,
    githubLink: "https://github.com/ztc4",
    deployment: "",

}



]

//mobile button to open nav
function navButtonClick(){
    nav.classList.toggle("active")


}
mobileNavButton.addEventListener("click", navButtonClick)


//projects
let project1 = document.getElementById("project-1");
let project2 = document.getElementById("project-2");
let project3 = document.getElementById("project-3");
let openProject = document.getElementById("more-project");
let exitProject = document.getElementById("exit-project");
let moreProject = document.getElementById("more-project");
let body = document.getElementsByTagName("body")[0]
console.log(window.innerWidth < 768)

function close (){
    console.log("closed")
    
    moreProject.innerHTML= "Click on a Project to expand"



    
};

function projectExtra(num){
    moreProject.classList.add("test1")
   
    
    console.log("clicked")
    body.style.overflowY = "scroll"


    //pictures

    let images = projects[num].images.map(current => `<img src="${current.link}" alt="${current.name}" class="each-image"/>`)
    images = images.join("")
   

    moreProject.innerHTML = `
    
    <h3>${projects[num].title}</h3>
    <h4>Description:</h4>
    <p>${projects[num].description}</p>
    <h4>Goals:</h4>
    <p>${projects[num].goals}</p>
    <h4>Issues:</h4>
    <p>${projects[num].issues}</p>
    <h4>Accomplishments:</h4>
    <p>${projects[num].accomplishments}</p>
    <h4>Github:<a href="${projects[num].githubLink}">Link to github</a></h4>
    <h4>Deployment:<a href="${projects[num].deployment}">Link to Deployment</a></h4>
    <a href="./images/Home-Screen.png"></a>
    <button id="close-button" >Exit</button>
    <div id="test-images" >${images}</div>
    
    
    `
    moreProject.classList.toggle("test1")
    document.getElementById("close-button").addEventListener("click", close)



    
}



//task
project1.addEventListener("click",()=>projectExtra(0))
//ecommerce
project2.addEventListener("click",()=>projectExtra(1))
//game
project3.addEventListener("click",()=>projectExtra(2))