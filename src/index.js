import "./styles.css";

function pageLoad() {
  const mainContent = document.querySelector("#content");
  const innerdiv = document.createElement("div");
  const heading = document.createElement("h1");
  heading.textContent = "Welcome to Junes Bar :)"
  innerdiv.classList.add("main-para");
  innerdiv.textContent =
    "Where good vibes, great drinks, and even better company come together! Whether you're here to unwind after a long day, celebrate with friends, or simply enjoy a night out, we're thrilled to have you with us. Grab a seat, explore our handcrafted cocktails and local brews, and let our friendly staff take care of the rest. At POPs, every night is a celebration, and we can't wait to make your experience unforgettable. Cheers to great times ahead!";
mainContent.appendChild(heading); 
mainContent.appendChild(innerdiv);
}

pageLoad();