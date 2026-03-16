// Versione semplificata per test
console.log("🚀 script.js caricato!");

function openModal(title, content) {
    console.log("Apertura modale:", title);
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('surpriseModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('surpriseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('surpriseModal');
    if (event.target == modal) closeModal();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("📦 DOM caricato, cerco emoji...");
    const emojis = document.querySelectorAll('.side-emoji');
    console.log("🔍 Trovate", emojis.length, "emoji");
    
    emojis.forEach((emoji, index) => {
        emoji.addEventListener('click', function() {
            console.log("✨ Cliccata emoji", index, "surprise:", this.dataset.surprise);
            openModal('Test ' + index, '<p style="color:#FFD700;">Funziona! 🎉</p>');
        });
    });
});