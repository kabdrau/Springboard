//1
console.log("1. Select the section with an id of container without using querySelector.");
let id = document.getElementById("container");
console.log(id);

//2
console.log("2. Select the section with an id of container using querySelector.");
let idNew = document.querySelector("#container");
console.log(idNew);

//3
console.log("3. Select all of the list items with a class of “second”.");
let second = document.querySelectorAll(".second");
console.log(second);

//4
console.log("4. Select a list item with a class of third, but only the list item inside of the ol tag.");
let olThird = document.querySelector("ol .third");
console.log(olThird);

//5
console.log("5. Give the section with an id of container the text “Hello!”.");
let sectionContainer = document.querySelector("#container");
console.log(sectionContainer.innerText);
sectionContainer.innerText = "Hello";
console.log(sectionContainer.innerText);

//6
console.log("6. Add the class main to the div with a class of footer.");
let footer = document.querySelector(".footer");
console.log(footer.classList);
footer.classList.add("main");
console.log(footer.classList);

//7
console.log("7. Remove the class main on the div with a class of footer.");
footer.classList.remove("main");
console.log(footer.classList);

//8
console.log("8. Create a new li element.");
let newLi = document.createElement("li");
console.log(newLi);

//9 
console.log("9. Give the li the text “four”.");
newLi.innerText = "four";
console.log(newLi);

//10
console.log("10. Append the li to the ul element.")
console.log(sectionContainer);
// adding back 3lis to ul from section container
const oldUl = document.createElement('ul')
sectionContainer.append(oldUl);
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
li1.innerText = "one";
li2.innerText = "two";
li3.innerText = "three";
oldUl.append(li1);
oldUl.append(li2);
oldUl.append(li3);
console.log(sectionContainer);
// adding new li to ul
oldUl.appendChild(newLi);
console.log(oldUl);

//11
console.log("11. Loop over all of the lis inside the ol tag and give them a background color of “green”.");
// adding back 3lis to ol from section container
const oldOl = document.createElement('ol')
sectionContainer.append(oldOl);
console.log(sectionContainer);
let liOne = document.createElement("li");
let liTwo = document.createElement("li");
let liThree = document.createElement("li");
liOne.innerText = "one";
liTwo.innerText = "two";
liThree.innerText = "three";
oldOl.appendChild(liOne);
oldOl.appendChild(liTwo);
oldOl.appendChild(liThree);
console.log(sectionContainer);
// assign test class to allLis
let allLis = document.querySelectorAll('li');
for (let li of allLis) {
    li.classList.add('test')
};
// change color
let olLis = document.querySelectorAll("ol li");
for (let i=0; i<olLis.length; i++) {
    olLis[i].style.backgroundColor = "green"
};

//12
console.log("12. Remove the div with a class of footer");
console.log(document.body);
footer.remove();
console.log(document.body);