function showHistoryInfo(title, text, mapImage) {
    // Set modal content
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    document.getElementById('modalMap').style.backgroundImage = `url(${mapImage})`;
    
    // Display the modal with fade-in animation
    document.getElementById('historyModal').style.display = "block";
    setTimeout(function() {
        document.getElementById('historyModal').classList.add('fadeIn');
    }, 10);
}

function closeModal() {
    // Hide the modal
    document.getElementById('historyModal').style.display = "none";
}

// Close modal if user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('historyModal')) {
        closeModal();
    }
}
