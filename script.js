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
            
            // ⭐ STELLA - Poesia 1 (Alto Sinistra)
            if (surprise === 'poesia1') {
                openModal(
                    '⭐ Poesia 1 - Cielo',
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px;">
                        <p style="font-style: italic; text-align: center; font-size:1.3em; line-height:1.8;">
                            "Da un giorno all'altro<br>
                            sostituiscono la pioggia.<br>
                            Le nuvole sganciano<br>
                            sulle nostre teste<br>
                            miliardi di bigliettini.<br>
                            Il mare ha già<br>
                            le farfalle nello stomaco.<br>
                            Sta arrivando:<br>
                            <br>
                            'Alla mia festa sono vietati<br>
                            gli ombrelli'"
                        </p>
                    </div>`
                );
            }
            
            // ⭐ ONDA - Foto 1 (Alto Destra)
            else if (surprise === 'foto1') {
                openModal(
                    '⭐ Foto 1 - Onda',
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px;">
                        <img src="Screenshot 2026-03-16 174221.png" 
                             alt="NESUNO GUARDA MENTRE" 
                             style="max-width: 100%; max-height: 400px; width: auto; height: auto; border-radius: 12px; border: 3px solid #FFD700; box-shadow: 0 0 20px rgba(255,215,0,0.3); object-fit: contain;">
                        <p style="color: #FFD700; text-align: center; margin-top: 20px; font-size: 1.8em; font-weight: bold; line-height: 1.8;">
                            NESUNO<br>GUARDA<br>MENTRE
                        </p>
                    </div>`
                );
            }
            
            else if (surprise === 'poesia2') {
                openModal(
                    '🌊 Poesia 2 - Mare',
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px;">
                        <p style="font-style: italic; text-align: center; font-size:1.3em; line-height:1.8;">
                            "Piuttosto di tuffarci<br>
                            tra le onde<br>
                            siamo davvero disposti<br>
                            a rifare sempre<br>
                            lo stesso castello di sabbia?"
                        </p>
                    </div>`
                );
            }
            
            // 🌊 ONDA - Foto 2 (Centro Destra)
            else if (surprise === 'foto2') {
                openModal(
                    '🌊 Foto 2 - Onda',
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px;">
                        <img src="Screenshot 2026-03-16 174315.png" 
                             alt="Seconda foto" 
                             style="max-width: 100%; max-height: 400px; width: auto; height: auto; border-radius: 12px; border: 3px solid #FFD700; box-shadow: 0 0 20px rgba(255,215,0,0.3); object-fit: contain;">
                    </div>`
                );
            }
            
            // ⭐ STELLA - Poesia 3 (Basso Sinistra)
            else if (surprise === 'poesia3') {
                openModal(
                    '💭 Poesia 3 - Pensieri',
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px;">
                        <p style="font-style: italic; text-align: center; font-size:1.3em; line-height:1.8;">
                            "Paure in spalla<br>
                            ti chiedevi<br>
                            come farò ad arrivare nel futuro.<br>
                            Leggevi tanto sperando di trovare<br>
                            una qualche risposta,<br>
                            sempre alla prossima pagina.<br>
                            Notti intere a studiare<br>
                            sotto stelle di carta,<br>
                            Ma quei capitoli non li ha chiesti:<br>
                            bastava respirare."
                        </p>
                    </div>`
                );
            }
            
            // 💭 NUVOLETTA - Foto 3 (Basso Destra)
            else if (surprise === 'foto3') {
                openModal(
                    '💭 Foto 3 - Pensiero',
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 500px;">
                        <img src="Screenshot 2026-03-16 174338.png" 
                             alt="Terza foto" 
                             style="max-width: 100%; max-height: 400px; width: auto; height: auto; border-radius: 12px; border: 3px solid #FFD700; box-shadow: 0 0 20px rgba(255,215,0,0.3); object-fit: contain;">
                    </div>`
                );
            }
        });
    });
});