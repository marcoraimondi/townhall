# Townhall Strategy — Voting App

Sito di voto live per il Townhall, stile Sky TG24.

## Pagine

| Pagina | URL | Descrizione |
|---|---|---|
| `index.html` | `/` | **Partecipanti** — votano dal telefono |
| `display.html` | `/display.html` | **Schermo grande** — risultati live stile TG24 |
| `admin.html` | `/admin.html` | **Conduttore** — gestisce le domande |

## Come funziona

1. **Prima del townhall**: apri `admin.html` e aggiungi tutte le domande
2. **Sul proiettore**: apri `display.html` a schermo intero
3. **I partecipanti**: scansionano il QR code / aprono l'URL su telefono
4. **Durante**: il conduttore attiva una domanda alla volta da admin → tutti la vedono immediatamente → i voti appaiono in tempo reale sul display
5. **Sentiment**: i partecipanti esprimono il mood in qualsiasi momento (da 😴 a 🔥), il display mostra la media della sala in basso come ticker

## Regole Firebase Realtime Database

Carica `database.rules.json` su Firebase Console → Realtime Database → Regole.

La regola sui voti permette a ogni utente di votare **una sola volta per domanda** (il voto non è modificabile).

## Deploy su GitHub Pages

```bash
git init
git add .
git commit -m "Townhall voting app"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/townhall.git
git push -u origin main
```

Poi su GitHub: Settings → Pages → Source: `main` / `root` → Save.

URL finale: `https://TUO_USERNAME.github.io/townhall/`
