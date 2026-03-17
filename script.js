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

// Chiudi la modale cliccando fuori
window.onclick = function(event) {
    const modal = document.getElementById('surpriseModal');
    if (event.target == modal) closeModal();
}

// Gestione click sulle emoji - CON INDICI CORRETTI E NOMI ESATTI
document.addEventListener('DOMContentLoaded', function() {

    const emojis = document.querySelectorAll('.side-emoji');
    
    // INDICE 0: emoji-1 (poesia1) - ⭐ Poesia 1 - Cielo (alto sx)
    emojis[0].addEventListener('click', function() {
        openModal('⭐ Poesia 1 - Cielo',
            `<div style="text-align:center; min-height: 650px; display: flex; align-items: center; justify-content: center;">
                <p style="font-style:italic; font-size:1.2em; line-height:1.8;">
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
    });
    
    // INDICE 1: emoji-2 (foto1) - Foto 1 (alto dx)
    emojis[1].addEventListener('click', function() {
        openModal('😺 Foto - Friendzi e gatito',
            `<div style="text-align:center;">
                <img src="foto1.png" style="max-width:100%; max-height:800px; border-radius:12px; border:3px solid #FFD700;">
            </div>`
        );
    });
    
    // INDICE 2: emoji-3 (poesia3) - 💭 Poesia 3 - Pensieri (basso sx)
    emojis[2].addEventListener('click', function() {
        openModal('💭 Poesia 3 - Pensieri',
            `<div style="text-align:center; min-height: 650px; display: flex; align-items: center; justify-content: center;">
                <p style="font-style:italic; font-size:1.2em; line-height:1.8;">
                    "Paure in spalla<br>
                    ti chiedevi<br>
                    come farò ad arrivare nel futuro.<br>
                    Leggevi tanto sperando di trovare<br>
                    una qualche risposta,<br>
                    sempre alla prossima pagina.<br>
                    Notti intere a studiare<br> 
                    sotto stelle di carta,<br>
                    ma quei capitoli non li ha chiesti:<br>
                    bastava respirare."
                </p>
            </div>`
        );
    });
    
    // INDICE 3: emoji-4 (foto3) - Foto 3 (basso dx)
    emojis[3].addEventListener('click', function() {
        openModal('🌠 Foto - Notte da Varigottini',
            `<div style="text-align:center;">
                <img src="foto3.png" style="max-width:100%; max-height:800px; border-radius:12px; border:3px solid #FFD700;">
            </div>`
        );
    });
    
    // INDICE 4: emoji-5 (foto2) - Foto 2 (centro sx)
    emojis[4].addEventListener('click', function() {
        openModal('🧼 Foto - Experience in the toilette',
            `<div style="text-align:center;">
                <img src="foto2.png" style="max-width:100%; max-height:800px; border-radius:12px; border:3px solid #FFD700;">
            </div>`
        );
    });
    
    // INDICE 5: emoji-6 (poesia2) - 🌊 Poesia 2 - Mare (centro dx)
    emojis[5].addEventListener('click', function() {
        openModal('🌊 Poesia 2 - Mare',
            `<div style="text-align:center; min-height: 650px; display: flex; align-items: center; justify-content: center;">
                <p style="font-style:italic; font-size:1.2em; line-height:1.8;">
                    "Piuttosto di tuffarci<br>
                    tra le onde<br>
                    siamo davvero disposti<br>
                    a rifare sempre<br>
                    lo stesso castello di sabbia?"
                </p>
            </div>`
        );
    });
});