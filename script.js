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
    document.querySelectorAll('.side-emoji').forEach(emoji => {
        emoji.addEventListener('click', function() {
            const surprise = this.dataset.surprise;
            
            if (surprise === 'poesia1') {
                openModal(
                    '🌟 Una poesia per te',
                    `<p style="font-style: italic; text-align: center;">
                        "Sii come la stella polare,<br>
                        immutabile nel tuo splendore<br>
                        anche quando le nuvole la celano."<br>
                        <span style="color: #FFD700;">— Proverbio Sufi</span>
                    </p>`
                );
            } else if (surprise === 'foto1') {
                openModal(
                    '📸 Un ricordo speciale',
                    `<p>Qui potresti mettere una vostra foto a Varigotti!</p>
                    <p style="color: #FFD700;">Oppure un messaggio segreto...</p>`
                );
            } else if (surprise === 'messaggio1') {
                openModal(
                    '💫 Un pensiero per te',
                    `<p>Marco, ricordati che in ogni stella cadente c'è un desiderio che aspetta di essere espresso.</p>
                    <p style="color: #FFD700;">E noi siamo qui per realizzarli insieme a te.</p>`
                );
            } else if (surprise === 'poesia2') {
                openModal(
                    '🌠 Un\'altra poesia',
                    `<p style="font-style: italic;">
                        "Vega brilla nella Lira,<br>
                        e tu brilli nei nostri cuori."<br>
                        <span style="color: #FFD700;">— I tuoi amici</span>
                    </p>`
                );
            } else if (surprise === 'foto2') {
                openModal(
                    '🎓 La tua laurea',
                    `<p>Che questa stella illumini sempre il tuo cammino, proprio come tu illumini il nostro.</p>
                    <p style="color: #FFD700;">Congratulazioni, Marco!</p>`
                );
            } else if (surprise === 'messaggio2') {
                openModal(
                    '✨ Un segreto',
                    `<p>PS: Le stelle non sono solo lassù...<br>
                    Ce n'è una anche qui, che brilla per te ogni giorno.</p>
                    <p style="color: #FFD700;">(Siamo noi, i tuoi amici!)</p>`
                );
            }
        });
    });
});