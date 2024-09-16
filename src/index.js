import "./styles.css";
import home from "./home"
import menu from "./menu"
import about from "./about" 

const buttons = document.querySelectorAll("button");

home()

buttons.forEach((button)=>{
  if(button.textContent === "Home")
      button.addEventListener("click", ()=>{
  home()})
  if(button.textContent === "Menu")
    button.addEventListener("click", ()=>{
      menu()})
  if(button.textContent === "About")
    button.addEventListener("click", ()=>{
      about()})
})
