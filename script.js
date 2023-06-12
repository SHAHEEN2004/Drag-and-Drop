document.addEventListener('DOMContentLoaded', function() {
    const draggableContainer = document.querySelector('.draggable-container');
    const droppableContainer = document.querySelector('.droppable');
    const resetButton = document.querySelector('#reset-btn');
    const successMessage = document.querySelector('#success-message');
  
    let draggedItem = null;
  
    // Add event listeners for drag and drop
    draggableContainer.addEventListener('dragstart', handleDragStart);
    droppableContainer.addEventListener('dragover', handleDragOver);
    droppableContainer.addEventListener('drop', handleDrop);
    resetButton.addEventListener('click', handleReset);
  
    function handleDragStart(event) {
      draggedItem = event.target;
      event.dataTransfer.setData('text/html', draggedItem.outerHTML); // Store the HTML content of the dragged item
      event.dataTransfer.effectAllowed = 'move';
    }
  
    function handleDragOver(event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
    }
  
    function handleDrop(event) {
      event.preventDefault();
      const droppedItem = event.dataTransfer.getData('text/html'); // Retrieve the HTML content of the dropped item
      droppableContainer.innerHTML = droppedItem; // Replace the existing content of the droppable container with the dropped item
      droppableContainer.style.backgroundColor = 'rgba(0, 0, 255, 0.5)'; // Set the background color of the droppable container with a glass blur effect (blue color with 50% opacity)
      successMessage.style.display = 'block';
      successMessage.style.color = 'rgba(255, 255, 255, 0.8)'; // Add some white color to the success message with 80% opacity
    }
  
    function handleReset() {
      droppableContainer.innerHTML = '<p>Drop images here</p>';
      droppableContainer.style.backgroundColor = '#ffffff'; // Reset the background color of the droppable container
      successMessage.style.display = 'none';
    }
  });
  