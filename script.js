const images = document.querySelectorAll('.image');

images.forEach(img => {

  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
  });

  img.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  img.addEventListener("drop", (e) => {
    e.preventDefault();
    
    const draggedId = e.dataTransfer.getData("text");
    const dragged = document.getElementById(draggedId);

    const parent = e.target.parentNode;
    const targetNext = e.target.nextSibling;

    if(dragged !== e.target){
      parent.insertBefore(dragged, e.target);
      parent.insertBefore(e.target, targetNext);
    }
  });
});