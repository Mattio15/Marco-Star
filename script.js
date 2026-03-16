// Funzione per aprire la modale
function openModal(title, content) {
    document.getElementById('modalTitle').innerHTML = title;
    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('surpriseModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Funzione per chiudere la modale
function closeModal() {
    document.getElementById('surpriseModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Chiudi la modale cliccando fuori dal contenuto
window.onclick = function(event) {
    const modal = document.getElementById('surpriseModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Gestione click sulle emoji
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 script.js caricato!");
    
    document.querySelectorAll('.side-emoji').forEach(emoji => {
        emoji.addEventListener('click', function() {
            const surprise = this.dataset.surprise;
            console.log("✨ Cliccata emoji:", surprise);
            
            if (surprise === 'poesia1') {
                openModal(
                    '📝 Poesia 1 - Alto Sinistra',
                    `<p style="font-style: italic; text-align: center; font-size:1.2em;">
                        "Sii come la stella polare,<br>
                        immutabile nel tuo splendore<br>
                        anche quando le nuvole la celano."<br>
                        <span style="color: #FFD700;">— Proverbio Sufi</span>
                    </p>`
                );
                
            } else if (surprise === 'foto1') {
                openModal(
                    '🖼️ Foto 1 - Alto Destra',
                    `<img src="Screenshot 2026-03-16 174221.png" 
                          alt="NESUNO GUARDA MENTRE" 
                 style="max-width: 100%; max-height: 300px; width: auto; height: auto; border-radius: 12px; border: 3px solid #FFD700; box-shadow: 0 0 20px rgba(255,215,0,0.3); object-fit: contain;">
            <p style="color: #FFD700; text-align: center; margin-top: 20px; font-size: 1.5em; font-weight: bold; line-height: 1.8;">
                         NESUNO<br>GUARDA<br>MENTRE
                     </p>`
                );
                
            } else if (surprise === 'foto2') {
                openModal(
                    '🖼️ Foto 2 - Basso Sinistra',
                    `<img src="Screenshot 2026-03-16 174315.png" 
                        alt="NESUNO GUARDA MENTRE" 
                 style="max-width: 100%; max-height: 300px; width: auto; height: auto; border-radius: 12px; border: 3px solid #FFD700; box-shadow: 0 0 20px rgba(255,215,0,0.3); object-fit: contain;">
            <p style="color: #FFD700; text-align: center; margin-top: 20px; font-size: 1.5em; font-weight: bold; line-height: 1.8;"></p>`
                );
                
            } else if (surprise === 'poesia2') {
                openModal(
                    '📝 Poesia 2 - Basso Destra',
                    `<p style="font-style: italic; text-align: center; font-size:1.2em;">
                        "E tu brilli nei nostri cuori."<br>
                        <span style="color: #FFD700;">— I tuoi amici</span>
                    </p>`
                );
                
            } else if (surprise === 'poesia3') {
                openModal(
                    '📝 Poesia 3 - Centro Sinistra',
                    `<p style="font-style: italic; text-align: center; font-size:1.2em;">
                        "Terza poesia in arrivo..."
                    </p>`
                );
                
            } else if (surprise === 'foto3') {
                openModal(
                    '🖼️ Foto 3 - Centro Destra',
                    `<img src="Screenshot 2026-03-16 174338.png" 
                        alt="NESUNO GUARDA MENTRE" 
                 style="max-width: 100%; max-height: 300px; width: auto; height: auto; border-radius: 12px; border: 3px solid #FFD700; box-shadow: 0 0 20px rgba(255,215,0,0.3); object-fit: contain;">
            <p style="color: #FFD700; text-align: center; margin-top: 20px; font-size: 1.5em; font-weight: bold; line-height: 1.8;">
                        (Qui andrà la terza foto)
                     </p>`
                );
            }
        });
    });
});