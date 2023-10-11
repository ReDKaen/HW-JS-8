// task 1


const allParagraph = document.querySelectorAll("p")

allParagraph.forEach((i) => {
    i.style.backgroundColor = "#ff0000"
})

console.log(allParagraph);

//task 2

const idElement = document.querySelector("#optionsList")

const idParent = idElement.parentElement

const idChild = idElement.children


console.log(idElement);

console.log(idChild);
console.log(idParent);

//task 3 

const classParagraph = document.querySelectorAll("#testParagraph").forEach((i) =>{
    i.innerText = "this is paragraph"
})


//task 5 

const headerElement = document.querySelectorAll(".main-header").forEach((i) =>{
    const headerChild = i.querySelectorAll("*")

    headerChild.forEach((j) =>{
        j.classList.add("nav-item")
    })
    console.log(headerChild);
})

//task 6 


const sectionTitle = document.querySelector(".section-title")

sectionTitle.classList.remove("section-title")

console.log(sectionTitle);






