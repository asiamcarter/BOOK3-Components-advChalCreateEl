// Put an article DOM element in your index.html with the id attribute value of messages.
const article = document.createElement("article")
article.id = "messages"

// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
let articleRef = document.querySelector("article")

// Create five (5) section components, each with a class of message, and with the content of your choosing.
    let section1 = document.createElement("section")
    section1.className = "message"
    section1.textContent = "Hey there"
    articleRef.appendChild(section1)

    let section2 = document.createElement("section")
    section2.className = "message"
    section2.textContent = "sup u?"
    articleRef.appendChild(section2)

    let section3 = document.createElement("section")
    section3.className = "message"
    section3.textContent = "nm"
    articleRef.appendChild(section3)

    let section4 = document.createElement("section")
    section4.className = "message"
    section4.textContent = "v cool"
    articleRef.appendChild(section4)

    let section5 = document.createElement("section")
    section5.className = "message"
    section5.textContent = "kBYE"
    articleRef.appendChild(section5)


    
    







