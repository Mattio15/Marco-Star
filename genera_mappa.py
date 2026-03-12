"""
Genera una mappa stellare personalizzata per Marco
La notte della laurea a Varigotti - 26 marzo 2026
"""

from starplot import MapPlot
from starplot.projections import Stereographic
from starplot.styles import PlotStyle, extensions
from datetime import datetime
import pytz
import os

# ============================================
# CONFIGURAZIONE
# ============================================

# Data della laurea: 26 marzo 2026 - ore 21:00 italiane (20:00 UTC)
DATA_LAUREA = datetime(2026, 3, 26, 20, 0, tzinfo=pytz.UTC)

# Coordinate precise di Varigotti
LATITUDINE = 44.18203
LONGITUDINE = 8.39737

# Nome del festeggiato
NOME = "Marco"

print("✨ Creazione della mappa stellare...")
print(f"   Luogo: Varigotti ({LATITUDINE}, {LONGITUDINE})")
print(f"   Data: 26 marzo 2026, ore 21:00 (ora italiana)")

# Crea lo stile personalizzato
style = PlotStyle()
style = style.extend(extensions.BLUE_DARK)

# Crea la mappa - NOTA: la risoluzione si imposta qui, non nell'export!
p = MapPlot(
    projection=Stereographic(),
    lat=LATITUDINE,
    lon=LONGITUDINE,
    dt=DATA_LAUREA,
    style=style,
    resolution=3000,  # Alta risoluzione per stampa
    hide_colliding_labels=True,
    dpi=300,  # ✅ DPI spostato qui!
)

# Aggiungi elementi
print("   Aggiungo costellazioni...")
p.constellations()

print("   Aggiungo confini...")
p.constellation_borders()

print("   Aggiungo stelle...")
p.stars(where=[lambda s: s.magnitude < 6])

print("   Aggiungo Via Lattea...")
p.milky_way()

print("   Aggiungo pianeti...")
p.planets()

# Esporta PNG - senza dpi!
output_file = "stella_di_marco_stampa.png"
print(f"   Esporto in {output_file}...")
p.export(output_file)  # ✅ Senza dpi!

if os.path.exists(output_file):
    print(f"✅ Mappa creata con successo: {output_file}")
    size_kb = os.path.getsize(output_file) / 1024
    print(f"   Dimensione: {size_kb:.1f} KB")
else:
    print("❌ Errore: il file non è stato creato")

# Versione SVG
output_svg = "stella_di_marco_stampa.svg"
print(f"   Esporto in {output_svg}...")
p.export(output_svg)
print(f"✅ Versione vettoriale creata: {output_svg}")

print("\n🎉 Fatto! Ora puoi stampare la mappa.")