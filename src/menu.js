export default function menu(){
    const mainContent = document.querySelector("#content");
    mainContent.textContent = '';
    const list = document.createElement("ul");
    const item1 = document.createElement("li");
    const item2 = document.createElement("li");

    item1.textContent = "Main Course";
    item2.textContent = "Deserts";
    list.appendChild(item1);
    list.appendChild(item2);
   
  mainContent.appendChild(list); 
  
   };
  
  