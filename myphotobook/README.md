# 📸 My PhotoBook

Un'applicazione web moderna per configurare e ordinare fotolibri personalizzati con un'interfaccia intuitiva e in tempo reale.

## 🚀 Tecnologie

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Type safety
- **React Hook Form** - Gestione form con validazione Zod
- **Radix UI** - Componenti accessibili
- **Tailwind CSS** - Styling moderno
- **Lucide React** - Icone

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 🎯 Come funziona

1. **Configura il libro**: Scegli formato, dimensione e numero di pagine
2. **Aggiungi opzioni extra**: Seleziona confezione regalo o copertina personalizzata
3. **Inserisci i dati spedizione**: Compila il form con i tuoi dati
4. **Controlla il riepilogo**: Verifica tutte le scelte nel pannello laterale
5. **Conferma l'ordine**: Quando tutto è completo, clicca "Conferma ordine"

## 🏗️ Struttura del progetto

```
app/
├── components/       # Componenti UI organizzati per atomic design
│   ├── atoms/       # Componenti base (Button, Input, Label)
│   ├── molecules/   # Componenti compositi (Form, Selector)
│   └── organisms/   # Componenti complessi (PreviewPanel)
├── context/         # Gestione stato globale
├── lib/            # Utilities e validazioni
└── types/          # Definizioni TypeScript
```

## 🧪 Build per produzione

```bash
npm run build
npm start
```

## 🌐 Deploy

Applicazione deployata su **Vercel**

## 📝 Note

- L'applicazione non richiede backend e mantiene tutto in memoria
- I dati vengono validati sia lato client che con schemi Zod
- Interfaccia responsive per desktop e mobile

---
