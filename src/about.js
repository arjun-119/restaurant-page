export default function about() {
  const mainContent = document.querySelector("#content");
  mainContent.textContent = '';

  const para1 = document.createElement("div");
  para1.classList.add("main-para")
  const para2 = document.createElement("div");
  para2.classList.add("sub-para");
  para1.textContent =
    "With years of experience in the hospitality industry, June brings a passion for great service and a love for crafting unique drinks that keep our customers coming back. Whether you're a regular or a first-time guest, June's warm personality and attention to detail ensure every visit feels special.";
  
  mainContent.appendChild(para1);

  para2.textContent = "If you have any questions, need assistance with reservations, or want to plan an event at June's Bar, feel free to reach out directly to June at june@notfake.com or give us a call at 080-555-6969. We look forward to welcoming you!";
  mainContent.appendChild(para2);


}
