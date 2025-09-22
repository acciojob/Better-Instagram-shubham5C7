//your code here
const images = document.querySelectorAll('.image');

    let dragSrc = null;

   images.forEach(img =>{
    img.addEventListener('dragstart',e=>{
      dragSrc = img;
      e.dataTransfer.effectAllowed = 'move';
    })
  
     img.addEventListener('dragover', e => {
    e.preventDefault(); 
  });
  img.addEventListener('drop', e => {
    e.preventDefault();
    if (dragSrc !== img) {
      const parent = img.parentNode;
      parent.insertBefore(dragSrc, img); 
    }
  });
 })