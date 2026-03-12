"""
Genera un QR code personalizzato per la mappa stellare di Marco
"""

import qrcode
import os

# ============================================
# CONFIGURAZIONE - CON IL TUO USERNAME!
# ============================================

# Il tuo URL su GitHub Pages
USERNAME = "Mattio15"
REPO_NAME = "Marco-Star"
URL = f"https://{USERNAME}.github.io/{REPO_NAME}"

# Crea la cartella assets se non esiste
os.makedirs("assets", exist_ok=True)

print(f"📱 Generazione QR code per: {URL}")

# Crea QR code con alta correzione errori
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)

qr.add_data(URL)
qr.make(fit=True)

# Versione colorata (oro su blu) - PERFETTA per il tema!
img_color = qr.make_image(fill_color="#FFD700", back_color="#0B1A2E")
img_color.save("assets/qr_code_stella.png")
print("✅ QR code colorato: assets/qr_code_stella.png")

# Versione classica (nero su bianco) - come backup
img_classic = qr.make_image()
img_classic.save("assets/qr_code_classic.png")
print("✅ QR code classico: assets/qr_code_classic.png")

# Mostra il percorso completo per sicurezza
print(f"\n📂 I file sono stati salvati in: {os.path.abspath('assets')}")