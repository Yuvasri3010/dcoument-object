const headElem = document.createElement("h1");
headElem.textContent ="My Task"

document.body.append(headElem);

document.body.style.backgroundColor = "Green"
const existingElement = document.getElementById("existingElementId");
if(existingElement)
{
    existingElement.style.backgroundColor = "Green";
}