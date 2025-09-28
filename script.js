 const images = document.querySelectorAll(".image");

 function updateLabels() {
   images.forEach(div => {
     const img = div.querySelector("img");
     div.setAttribute("data-label", img.alt);
   });
 }
 updateLabels();

 for (let div of images) {
   div.addEventListener("dragstart", (e) => {
     e.dataTransfer.setData("text/plain", e.currentTarget.querySelector("img").src);
   });

   div.addEventListener("dragover", (e) => {
     e.preventDefault();
   });

   div.addEventListener("drop", (e) => {
     e.preventDefault();
     const targetImg = e.currentTarget.querySelector("img");
     const draggedSrc = e.dataTransfer.getData("text/plain");

    
     const draggedImg = [...document.querySelectorAll(".image img")].find(img => img.src === draggedSrc);

     if (draggedImg && targetImg && draggedImg !== targetImg) {

       const tempSrc = draggedImg.src;
       draggedImg.src = targetImg.src;
       targetImg.src = tempSrc;


       const tempAlt = draggedImg.alt;
       draggedImg.alt = targetImg.alt;
       targetImg.alt = tempAlt;

    
       updateLabels();
     }
   });
 }