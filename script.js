// script.js

/* ==============================================================
   TRANSLATIONS – Deutsch (de) & Englisch (en)
   ============================================================== */
const translations = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.commands": "Commands",
    "nav.privacy": "Datenschutz",
    "nav.terms": "Terms of Use",
    "nav.contact": "Kontakt",
    "nav.burgerLabel": "Navigation öffnen",
    // Hero
    "hero.slogan": "Dein ultimativer Discord-Musik-Bot – alles, was du brauchst!",
    "hero.description": "Shadow Music ist dein leistungsstarker Discord-Musikbot mit Equalizer, Playlist-Import aus Spotify, YouTube & SoundCloud sowie smarter Song-Empfehlungsfunktion. Kostenfrei, zuverlässig und immer für dich da.",
    "hero.invite": "Bot einladen",
    "hero.support": "Support Server",
    // Features
    "features.title": "Features",
    "features.intro": "Shadow Music bringt professionelle Musikwiedergabe direkt auf deinen Discord-Server – mit Features, die kein anderer Bot bietet.",
    "features.basics.desc": "Steuere die Wiedergabe intuitiv per Slash-Command – von Abspielen über Pausieren bis hin zum Skippen ganzer Tracks.",
    "features.basics.title": "Grundfunktionen",
    "features.basics.li1": "Abspielen, Pausieren, Skippen",
    "features.basics.li2": "Playlist-Unterstützung",
    "features.equalizer.title": "Equalizer",
    "features.equalizer.desc": "/equalizer für personalisierten Sound",
    "features.voice.title": "Voice Messages",
    "features.voice.desc": "/listen Command reagiert auf Voice Messages",
    "features.recommended.title": "Song Empfehlungen",
    "features.recommended.desc": "/recommended Songs basierend auf deinem Geschmack",
    "features.import.title": "Playlist Import",
    "features.import.desc": "Import von Spotify, SoundCloud & YouTube",
    "features.dynamic": "Dynamisches Feature hinzugefügt ⚡",
    // Commands
    "commands.title": "Commands",
    "commands.intro": "Alle Slash-Commands auf einen Blick. Shadow Music unterstützt eine Vielzahl von Befehlen für Wiedergabe, Warteschlange, Playlists und Einstellungen.",
    "commands.moreLink": "Alle Commands ansehen →",
    "commands.featured.title": "⭐ Featured Commands",
    "featuredCmds.intro": "Eine Auswahl unserer beliebtesten Commands.",
    "commands.cat.playback": "🎵 Musik-Playback",
    "commands.cat.control": "🎛️ Steuerung / Sound",
    "commands.cat.queue": "📋 Queue / Warteschlange",
    "commands.cat.playlists": "🎶 Playlists",
    "commands.cat.utilities": "🛠️ Utilities",
    "commands.cat.settings": "⚙️ Einstellungen",
    // Command descriptions
    "cmd.play.desc": "Spielt einen Song oder eine URL ab",
    "cmd.pause.desc": "Pausiert die aktuelle Wiedergabe",
    "cmd.resume.desc": "Setzt die Wiedergabe fort",
    "cmd.stop.desc": "Stoppt die Wiedergabe und verlässt den Voice-Channel",
    "cmd.skip.desc": "Überspringt den aktuellen Song",
    "cmd.nowplaying.desc": "Zeigt den aktuell gespielten Song an",
    "cmd.volume.desc": "Lautstärke einstellen",
    "cmd.seek.desc": "Springt zu einer bestimmten Position im Song",
    "cmd.listen.desc": "Reagiert auf Discord Voice Messages und spielt sie ab",
    "cmd.import_playlist.desc": "Importiert eine Playlist von Spotify, YouTube oder SoundCloud",
    "cmd.lyrics.desc": "Zeigt den Songtext des aktuell gespielten Songs an",
    "cmd.playlist_save.desc": "Speichert die aktuelle Queue als neue Playlist",
    "cmd.playlist_save_and_load.desc": "Playlists speichern und in die Queue laden",
    "cmd.queue.desc": "Zeigt die aktuelle Song-Warteschlange an",
    "cmd.clear.desc": "Leert die gesamte Warteschlange",
    "cmd.shuffle.desc": "Mischt die Warteschlange zufällig durch",
    "cmd.remove.desc": "Entfernt einen Song aus der Warteschlange",
    "cmd.loop.desc": "Wiederholt den aktuellen Song oder die Queue",
    "cmd.playlist_create.desc": "Erstellt eine neue persönliche Playlist",
    "cmd.playlist_add.desc": "Fügt einen Song zur Playlist hinzu",
    "cmd.playlist_load.desc": "Lädt eine Playlist in die Queue",
    "cmd.playlist_list.desc": "Zeigt alle gespeicherten Playlists an",
    "cmd.playlist_delete.desc": "Löscht eine bestehende Playlist",
    "cmd.equalizer.desc": "Passt den Equalizer für personalisierten Sound an",
    "cmd.recommended.desc": "Gibt Song-Empfehlungen basierend auf dem aktuellen Song",
    "cmd.disconnect.desc": "Trennt den Bot vom Voice-Channel",
    "cmd.ping.desc": "Zeigt die Latenz des Bots an",
    "cmd.help.desc": "Zeigt alle verfügbaren Commands und deren Beschreibung",
    // Command params (contain HTML spans)
    "cmd.play.params": '<span class="param">query</span> – Song-Name oder URL',
    "cmd.volume.params": '<span class="param">level</span> – Lautstärke (1–100)',
    "cmd.seek.params": '<span class="param">position</span> – Zeit in Sekunden',
    "cmd.remove.params": '<span class="param">index</span> – Position in der Queue',
    "cmd.loop.params": '<span class="param">mode</span> – off / song / queue',
    "cmd.playlist_create.params": '<span class="param">name</span> – Name der Playlist',
    "cmd.playlist_add.params": '<span class="param">name</span> – Playlist · <span class="param">song</span> – Song-URL oder Name',
    "cmd.playlist_load.params": '<span class="param">name</span> – Name der Playlist',
    "cmd.playlist_delete.params": '<span class="param">name</span> – Name der Playlist',
    "cmd.equalizer.params": '<span class="param">preset</span> – bass / treble / flat / pop / rock',
    "cmd.import_playlist.params": '<span class="param">url</span> – Spotify-, YouTube- oder SoundCloud-URL',
    "cmd.playlist_save.params": '<span class="param">name</span> – Name der neuen Playlist',
    // Usage examples
    "cmd.play.example": "Beispiel: /play Bohemian Rhapsody",
    "cmd.import_playlist.example": "Beispiel: /import_playlist https://open.spotify.com/playlist/...",
    "cmd.playlist_load.example": "Beispiel: /playlist load MeinePlaylist",
    "cmd.playlist_save.example": "Beispiel: /playlist save Favorites",
    "cmd.listen.example": "Beispiel: /listen (dann Voice Message senden)",
    "cmd.equalizer.example": "Beispiel: /equalizer bass",
    // Stats
    "stats.title": "🌐 Live Server Count",
    "stats.live": "Live",
    "stats.label": "Server nutzen Shadow Music",
    "stats.vote": "Vote auf top.gg",
    "stats.widgetVote": "Vote für Shadow Music auf top.gg!",
    "stats.members": "Mitglieder",
    "stats.status":  "Bot Status",
    "stats.online":  "🟢 Online",
    "stats.offline": "🔴 Offline",
    // CTA
    "cta.title": "Jetzt Shadow Music einladen",
    "cta.invite": "Bot einladen",
    "cta.support": "Support Server",
    // Terms of Use
    "terms.title": "Terms of Use",
    "terms.content": `<p><strong>Nutzungsbedingungen für Shadow Music</strong></p>
<p>Durch die Nutzung von Shadow Music erklärst du dich damit einverstanden, die folgenden Bedingungen einzuhalten:</p>
<p>1. <strong>Berechtigte Nutzung:</strong> Du darfst den Bot ausschließlich auf Discord-Servern einsetzen, für die du die entsprechende Berechtigung besitzt. Eine Nutzung auf Servern, auf denen du nicht autorisiert bist, ist untersagt.</p>
<p>2. <strong>Haftungsausschluss des Entwicklers:</strong> Der Entwickler von Shadow Music übernimmt keine Verantwortung für Verstöße gegen die Discord-Nutzungsbedingungen oder andere rechtliche Vorschriften, die durch die Verwendung des Bots entstehen. Du bist allein für die rechtmäßige Nutzung des Bots verantwortlich.</p>
<p>3. Wir Shadow Music behalten uns das Recht vor, den Bot von dem Server zu entfernen, wenn wir ungewöhnliche Aktivitäten bemerken, und leiten ggf. Verstöße an das Discord Safety Team weiter. Auch hier gilt die Einhaltung der ToS von Discord.</p>`,
    // Privacy Policy
    "privacy.title": "Datenschutz",
    "privacy.content": `<h3>1. Allgemeine Hinweise</h3>
<p>Der Schutz deiner persönlichen Daten ist uns sehr wichtig. Diese Datenschutzerklärung informiert dich darüber, welche Daten der Discord Music Bot (im Folgenden „Bot") erhebt, verarbeitet und speichert.</p>
<p>Die Verarbeitung deiner Daten erfolgt gemäß den Bestimmungen der <strong>Datenschutz-Grundverordnung (DSGVO)</strong> und des <strong>Bundesdatenschutzgesetzes (BDSG)</strong>.</p>
<h3>2. Verantwortlicher</h3>
<p>Shadow Music Team / Shadowbytes Mod Team<br>E-Mail: <a href="mailto:shadowbyte2233@gmail.com">shadowbyte2233@gmail.com</a></p>
<h3>3. Datenverarbeitung</h3>
<h4>a) Discord-Nutzerinformationen</h4>
<p>Folgende Daten werden verarbeitet: Discord-Benutzername und -ID, Server-ID und Kanal-ID, Rollen- und Berechtigungsinformationen.</p>
<p><strong>Zweck:</strong> Steuerung des Bots, Zuweisung von Rechten, Personalisierung von Empfehlungen.<br><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO.</p>
<h4>b) Musik- und Playlistdaten</h4>
<p>Verarbeitet werden: Titel der abgespielten Songs, vom Nutzer erstellte Playlists, Verlauf der abgespielten Songs (temporär).</p>
<p><strong>Speicherfrist:</strong> Playlistdaten dauerhaft bis zur Löschung; Songverlauf max. 30 Tage.</p>
<h4>c) Server- und technische Daten</h4>
<p>Der Bot wird auf einem Server von <strong>IONOS</strong> gehostet. Server-Logdaten und Nutzungsmuster werden zur Betriebssicherung verarbeitet.<br><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.</p>
<h4>d) Externe Services – Lavalink</h4>
<p>Musikdaten werden von einem öffentlichen Lavalink-Server bezogen. Dabei können Songtitel, Länge, Quelle und ggf. Discord-IDs übermittelt werden.</p>
<h3>4. Weitergabe von Daten</h3>
<p>Eine Weitergabe erfolgt nur für den Betrieb des Bots (IONOS), die Musikbereitstellung (Lavalink) und gesetzliche Verpflichtungen. Eine kommerzielle Weitergabe erfolgt <strong>nicht</strong>.</p>
<h3>5. Cookies und Tracking</h3>
<p>Der Bot verwendet keine Cookies oder Web-Tracking auf Discord.</p>
<h3>6. Rechte der Nutzer</h3>
<p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit.<br>Wende dich an: <a href="mailto:shadowbyte2233@gmail.com">shadowbyte2233@gmail.com</a></p>
<h3>7. Datensicherheit</h3>
<p>Wir setzen Verschlüsselung, Zugangsbeschränkungen und regelmäßige Backups ein, um deine Daten zu schützen.</p>
<h3>8. Änderungen</h3>
<p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Mit der Nutzung des Bots erklärst du dich mit der Datenverarbeitung gemäß dieser Erklärung einverstanden.</p>`,
    // Privacy / Terms more-links
    "privacy.moreLink": "Vollständige Datenschutzerklärung →",
    "terms.moreLink": "Vollständige Nutzungsbedingungen →",
    // Contact
    "contact.title": "Kontakt",
    "contact.intro": "Du hast Fragen, Feedback oder ein Problem? Kontaktiere uns jederzeit über Discord oder per E-Mail – wir helfen gerne!",
    "contact.moreLink": "Zur Kontaktseite →",
    "contact.discord.label": "Discord Support Server",
    "contact.email.label": "Email",
    // Subpage titles & headings
    "page.commands.title": "Commands – Shadow Music",
    "page.commands.heading": "Alle Commands",
    "page.commands.intro": "Eine vollständige Übersicht aller verfügbaren Slash-Commands von Shadow Music. Nutze /help im Bot für eine direkte Übersicht im Discord.",
    "page.privacy.title": "Datenschutz – Shadow Music",
    "page.terms.title": "Terms of Use – Shadow Music",
    "page.contact.title": "Kontakt – Shadow Music",
    "page.contact.heading": "Kontakt",
    "page.contact.intro": "Wir sind für dich da! Ob du Hilfe benötigst, Feedback teilen oder einfach in Kontakt treten möchtest – nutze einen der folgenden Wege.",
    "nav.pages": "Seiten",
    // Footer
    "footer.copyright": "© 2026 Shadow Music",
    // Support section
    "support.title": "Support benötigt?",
    "support.intro": "Öffne ein Ticket auf unserem Discord",
    "support.detail": "Brauchst du Hilfe? Nutze das Widget unten, um ein Ticket zu öffnen, oder tritt unserem Support-Server bei.",
    "support.join": "Support Server öffnen",
    // Featured commands section
    "featured.title": "⭐ Featured Commands",
    "featured.intro": "Eine Auswahl unserer beliebtesten Commands.",
    "featured.listen": "Reagiert auf Discord Voice Messages und spielt sie ab",
    "featured.recommended": "Gibt Song-Empfehlungen basierend auf dem aktuellen Song",
    "featured.shuffle": "Mischt die Warteschlange zufällig durch",
    // Test-phase modal
    "modal.testphase.title": "⚠️ Testphase",
    "modal.testphase.body": "Diese Website befindet sich aktuell in einer Testphase und funktioniert möglicherweise nicht vollständig korrekt. Angezeigte Zahlen (z. B. Server-Statistiken) sind Beispielwerte und entsprechen nicht den tatsächlichen Daten.",
    "modal.testphase.ok": "OK",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.commands": "Commands",
    "nav.privacy": "Privacy Policy",
    "nav.terms": "Terms of Use",
    "nav.contact": "Contact",
    "nav.burgerLabel": "Open navigation",
    // Hero
    "hero.slogan": "Your ultimate Discord music bot – everything you need!",
    "hero.description": "Shadow Music is your powerful Discord music bot featuring a built-in equalizer, playlist import from Spotify, YouTube & SoundCloud, and smart song recommendations. Free, reliable, and always there for you.",
    "hero.invite": "Invite Bot",
    "hero.support": "Support Server",
    // Features
    "features.title": "Features",
    "features.intro": "Shadow Music brings professional music playback directly to your Discord server – with features no other bot offers.",
    "features.basics.desc": "Control playback intuitively via slash commands – from playing and pausing to skipping entire tracks.",
    "features.basics.title": "Basic Functions",
    "features.basics.li1": "Play, Pause, Skip",
    "features.basics.li2": "Playlist support",
    "features.equalizer.title": "Equalizer",
    "features.equalizer.desc": "/equalizer for personalized sound",
    "features.voice.title": "Voice Messages",
    "features.voice.desc": "/listen command responds to voice messages",
    "features.recommended.title": "Song Recommendations",
    "features.recommended.desc": "/recommended songs based on your taste",
    "features.import.title": "Playlist Import",
    "features.import.desc": "Import from Spotify, SoundCloud & YouTube",
    "features.dynamic": "Dynamic feature added ⚡",
    // Commands
    "commands.title": "Commands",
    "commands.intro": "All slash commands at a glance. Shadow Music supports a wide range of commands for playback, queue management, playlists, and settings.",
    "commands.moreLink": "View all commands →",
    "commands.featured.title": "⭐ Featured Commands",
    "featuredCmds.intro": "A selection of our most popular commands.",
    "commands.cat.playback": "🎵 Music Playback",
    "commands.cat.control": "🎛️ Control / Sound",
    "commands.cat.queue": "📋 Queue",
    "commands.cat.playlists": "🎶 Playlists",
    "commands.cat.utilities": "🛠️ Utilities",
    "commands.cat.settings": "⚙️ Settings",
    // Command descriptions
    "cmd.play.desc": "Plays a song or URL",
    "cmd.pause.desc": "Pauses the current playback",
    "cmd.resume.desc": "Resumes playback",
    "cmd.stop.desc": "Stops playback and leaves the voice channel",
    "cmd.skip.desc": "Skips the current song",
    "cmd.nowplaying.desc": "Shows the currently playing song",
    "cmd.volume.desc": "Adjust volume",
    "cmd.seek.desc": "Jump to a specific position in the song",
    "cmd.listen.desc": "Responds to Discord voice messages and plays them",
    "cmd.import_playlist.desc": "Import a playlist from Spotify, YouTube or SoundCloud",
    "cmd.lyrics.desc": "Shows the lyrics of the currently playing song",
    "cmd.playlist_save.desc": "Saves the current queue as a new playlist",
    "cmd.playlist_save_and_load.desc": "Save playlists and load them into the queue",
    "cmd.queue.desc": "Shows the current song queue",
    "cmd.clear.desc": "Clears the entire queue",
    "cmd.shuffle.desc": "Shuffles the queue randomly",
    "cmd.remove.desc": "Removes a song from the queue",
    "cmd.loop.desc": "Repeats the current song or queue",
    "cmd.playlist_create.desc": "Creates a new personal playlist",
    "cmd.playlist_add.desc": "Adds a song to a playlist",
    "cmd.playlist_load.desc": "Loads a playlist into the queue",
    "cmd.playlist_list.desc": "Shows all saved playlists",
    "cmd.playlist_delete.desc": "Deletes an existing playlist",
    "cmd.equalizer.desc": "Adjusts the equalizer for personalized sound",
    "cmd.recommended.desc": "Provides song recommendations based on the current song",
    "cmd.disconnect.desc": "Disconnects the bot from the voice channel",
    "cmd.ping.desc": "Shows the bot's latency",
    "cmd.help.desc": "Shows all available commands and their descriptions",
    // Command params (contain HTML spans)
    "cmd.play.params": '<span class="param">query</span> – Song name or URL',
    "cmd.volume.params": '<span class="param">level</span> – Volume (1–100)',
    "cmd.seek.params": '<span class="param">position</span> – Time in seconds',
    "cmd.remove.params": '<span class="param">index</span> – Position in the queue',
    "cmd.loop.params": '<span class="param">mode</span> – off / song / queue',
    "cmd.playlist_create.params": '<span class="param">name</span> – Playlist name',
    "cmd.playlist_add.params": '<span class="param">name</span> – Playlist · <span class="param">song</span> – Song URL or name',
    "cmd.playlist_load.params": '<span class="param">name</span> – Playlist name',
    "cmd.playlist_delete.params": '<span class="param">name</span> – Playlist name',
    "cmd.equalizer.params": '<span class="param">preset</span> – bass / treble / flat / pop / rock',
    "cmd.import_playlist.params": '<span class="param">url</span> – Spotify, YouTube or SoundCloud URL',
    "cmd.playlist_save.params": '<span class="param">name</span> – Name for the new playlist',
    // Usage examples
    "cmd.play.example": "Example: /play Bohemian Rhapsody",
    "cmd.import_playlist.example": "Example: /import_playlist https://open.spotify.com/playlist/...",
    "cmd.playlist_load.example": "Example: /playlist load MyPlaylist",
    "cmd.playlist_save.example": "Example: /playlist save Favorites",
    "cmd.listen.example": "Example: /listen (then send a Voice Message)",
    "cmd.equalizer.example": "Example: /equalizer bass",
    // Stats
    "stats.title": "🌐 Live Server Count",
    "stats.live": "Live",
    "stats.label": "Servers use Shadow Music",
    "stats.vote": "Vote on top.gg",
    "stats.members": "Members",
    "stats.status":  "Bot Status",
    "stats.online":  "🟢 Online",
    "stats.offline": "🔴 Offline",
    // CTA
    "cta.title": "Invite Shadow Music Now",
    "cta.invite": "Invite Bot",
    "cta.support": "Support Server",
    // Terms of Use
    "terms.title": "Terms of Use",
    "terms.content": `<p><strong>Terms of Use for Shadow Music</strong></p>
<p>By using Shadow Music, you agree to comply with the following terms:</p>
<p>1. <strong>Authorized Use:</strong> You may only use the bot on Discord servers for which you have the appropriate permissions. Use on servers where you are not authorized is prohibited.</p>
<p>2. <strong>Developer Disclaimer:</strong> The developer of Shadow Music accepts no responsibility for violations of Discord's Terms of Service or other legal regulations arising from the use of the bot. You are solely responsible for the lawful use of the bot.</p>
<p>3. Shadow Music reserves the right to remove the bot from a server if unusual activity is detected and may report violations to the Discord Safety Team. Discord's Terms of Service must be followed at all times.</p>`,
    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.content": `<h3>1. General Information</h3>
<p>The protection of your personal data is very important to us. This privacy policy informs you about which data the Discord Music Bot (the "Bot") collects, processes and stores.</p>
<p>Data processing is carried out in accordance with the <strong>General Data Protection Regulation (GDPR)</strong>.</p>
<h3>2. Data Controller</h3>
<p>Shadow Music Team / Shadowbytes Mod Team<br>Email: <a href="mailto:shadowbyte2233@gmail.com">shadowbyte2233@gmail.com</a></p>
<h3>3. Data Processing</h3>
<h4>a) Discord User Information</h4>
<p>The following data is processed: Discord username and ID, server ID and channel ID, role and permission information.</p>
<p><strong>Purpose:</strong> Bot control, permission assignment, recommendation personalization.<br><strong>Legal basis:</strong> Art. 6(1)(b) GDPR.</p>
<h4>b) Music and Playlist Data</h4>
<p>Data processed: titles of played songs, user-created playlists, playback history (temporary).</p>
<p><strong>Retention period:</strong> Playlist data permanently until deleted; song history max. 30 days.</p>
<h4>c) Server and Technical Data</h4>
<p>The bot is hosted on an <strong>IONOS</strong> server. Server log data and usage patterns are processed to ensure operation.<br><strong>Legal basis:</strong> Art. 6(1)(f) GDPR.</p>
<h4>d) External Services – Lavalink</h4>
<p>Music data is sourced from a public Lavalink server. Song titles, duration, source, and Discord IDs may be transmitted.</p>
<h3>4. Data Sharing</h3>
<p>Data is only shared for bot operation (IONOS), music provision (Lavalink), and legal obligations. No commercial sharing occurs.</p>
<h3>5. Cookies and Tracking</h3>
<p>The bot does not use cookies or web tracking on Discord.</p>
<h3>6. User Rights</h3>
<p>You have the right to access, rectification, erasure, restriction of processing, objection, and data portability.<br>Contact: <a href="mailto:shadowbyte2233@gmail.com">shadowbyte2233@gmail.com</a></p>
<h3>7. Data Security</h3>
<p>We use encryption, access restrictions, and regular backups to protect your data.</p>
<h3>8. Changes</h3>
<p>This privacy policy may be updated as needed. By using the bot, you consent to the data processing described herein.</p>`,
    // Privacy / Terms more-links
    "privacy.moreLink": "Full Privacy Policy →",
    "terms.moreLink": "Full Terms of Use →",
    // Contact
    "contact.title": "Contact",
    "contact.intro": "Have questions, feedback, or an issue? Reach us anytime via Discord or email – we're happy to help!",
    "contact.moreLink": "Go to contact page →",
    "contact.discord.label": "Discord Support Server",
    "contact.email.label": "Email",
    // Subpage titles & headings
    "page.commands.title": "Commands – Shadow Music",
    "page.commands.heading": "All Commands",
    "page.commands.intro": "A complete overview of all available slash commands for Shadow Music. Use /help in the bot for a direct overview in Discord.",
    "page.privacy.title": "Privacy Policy – Shadow Music",
    "page.terms.title": "Terms of Use – Shadow Music",
    "page.contact.title": "Contact – Shadow Music",
    "page.contact.heading": "Contact",
    "page.contact.intro": "We're here for you! Whether you need help, want to share feedback, or simply want to get in touch – use one of the following channels.",
    "nav.pages": "Pages",
    // Footer
    "footer.copyright": "© 2026 Shadow Music",
    // Support section
    "support.title": "Need Support?",
    "support.intro": "Here is our Discord to open a ticket",
    "support.detail": "Need help? Use the widget below to open a ticket or join our support server for live assistance.",
    "support.join": "Open Support Server",
    // Featured commands section
    "featured.title": "⭐ Featured Commands",
    "featured.intro": "A selection of our most popular commands.",
    "featured.listen": "Responds to Discord Voice Messages and plays them",
    "featured.recommended": "Provides song recommendations based on the current song",
    "featured.shuffle": "Shuffles the queue randomly",
    // Test-phase modal
    "modal.testphase.title": "⚠️ Test Phase",
    "modal.testphase.body": "This website is currently in a test phase and may not function correctly. Displayed numbers (e.g. server stats) are example placeholders and do not reflect actual data.",
    "modal.testphase.ok": "OK",
  }
};

/* ==============================================================
   i18n – apply translations to the page
   ============================================================== */

/**
 * Applies translations for the given language to all elements
 * with data-i18n, data-i18n-html, or data-i18n-aria attributes.
 * @param {string} lang - Language code ('de' or 'en')
 */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (for formatted/legal sections)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Aria-label attributes
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // Update <html lang="…"> attribute
  document.documentElement.lang = lang;

  // Update <title> if data-i18n-title is set on <html>
  const htmlEl = document.documentElement;
  if (htmlEl.dataset.i18nTitle) {
    const titleKey = htmlEl.dataset.i18nTitle;
    if (t[titleKey] !== undefined) document.title = t[titleKey];
  }

  // Highlight the active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/**
 * Initialises the language system:
 * reads the stored preference (or defaults to 'de'),
 * applies it, and wires up the toggle buttons.
 */
function initI18n() {
  const savedLang = localStorage.getItem('shadow-music-lang') || 'de';
  applyTranslations(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      localStorage.setItem('shadow-music-lang', lang);
      applyTranslations(lang);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Shadow Music Landingpage geladen.");

  // Initialise language system as early as possible
  initI18n();

  /* ------------------------------------------------------------------
     NAVBAR: scrolled class + burger menu
  ------------------------------------------------------------------ */
  const navbar = document.getElementById("navbar");
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  if (burger) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }

  // Close mobile menu when a link is clicked
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (burger) burger.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ------------------------------------------------------------------
     SMOOTH SCROLL for nav links (offset for fixed navbar)
  ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ------------------------------------------------------------------
     SCROLL-REVEAL via IntersectionObserver
  ------------------------------------------------------------------ */
  const revealSelectors = ".card, .cmd-card, .cmd-category, .contact-card, .reveal";
  const revealElements = document.querySelectorAll(revealSelectors);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));

  /* ------------------------------------------------------------------
     PARALLAX effect on hero banner
  ------------------------------------------------------------------ */
  const hero = document.getElementById("hero");
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (hero) {
          const offset = window.scrollY;
          hero.style.backgroundPositionY = `calc(50% + ${offset * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ------------------------------------------------------------------
     Dynamic feature – uses the active translation
  ------------------------------------------------------------------ */
  const currentLang = localStorage.getItem('shadow-music-lang') || 'de';
  const featureList = document.querySelectorAll(".card ul");
  if (featureList.length) {
    const li = document.createElement('li');
    li.textContent = translations[currentLang]['features.dynamic'];
    featureList[0].appendChild(li);
  }

  /* ------------------------------------------------------------------
     SERVER COUNT – top.gg API with count-up animation
  ------------------------------------------------------------------ */
  fetchBotStats();

  /* ------------------------------------------------------------------
     TEST-PHASE MODAL
  ------------------------------------------------------------------ */
  showTestPhaseModal();
});

/* ==============================================================
   COUNT-UP ANIMATION HELPER
   ============================================================== */
/**
 * Animates a number counting up from 0 to `target` over `duration` ms.
 * @param {HTMLElement} el      - Element whose textContent is updated.
 * @param {number}      target  - Final value to count up to.
 * @param {number}      duration - Animation duration in milliseconds.
 * @param {string}      [suffix=''] - Optional suffix appended after the number (e.g. '+').
 */
function countUp(el, target, duration, suffix) {
  suffix = suffix || '';
  const startTime = performance.now();
  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(target * eased).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ==============================================================
   FETCH BOT STATS FROM SHADOW MUSIC API
   ============================================================== */
/**
 * Fetches live bot stats (servers, members, online status) from the
 * Shadow Music Node.js bot API at /api/stats.
 *
 * Falls back to static placeholders if the API is unreachable.
 *
 * Configure BOT_API_URL to point at wherever the bot is hosted:
 *   - Local dev:   'http://localhost:3000'
 *   - Production:  'https://your-bot-host.example.com'
 */
function fetchBotStats() {
  // ⚠️ Change this URL to your deployed bot's address in production
  const BOT_API_URL = 'https://your-bot-host.example.com';   // TODO: update for production

  const serverEl  = document.getElementById('server-count');
  const memberEl  = document.getElementById('member-count');
  const statusEl  = document.getElementById('bot-status');

  const FALLBACK_SERVERS = 500;
  const FALLBACK_MEMBERS = 10000;

  function setStatus(online) {
    if (!statusEl) return;
    const lang = localStorage.getItem('shadow-music-lang') || 'de';
    statusEl.textContent = online ? translations[lang]['stats.online'] : translations[lang]['stats.offline'];
    statusEl.className   = 'bot-status ' + (online ? 'online' : 'offline');
  }

  fetch(BOT_API_URL + '/api/stats')
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      const servers = (data && data.servers)  ? data.servers  : FALLBACK_SERVERS;
      const members = (data && data.members)  ? data.members  : FALLBACK_MEMBERS;
      const online  = !!(data && data.online);
      console.log('[Shadow Music] Bot stats:', data);
      if (serverEl) countUp(serverEl, servers, 2000);
      if (memberEl) countUp(memberEl, members, 2000);
      setStatus(online);
    })
    .catch(function (err) {
      console.warn('[Shadow Music] Bot API not reachable, using fallback. (' + err.message + ')');
      if (serverEl) countUp(serverEl, FALLBACK_SERVERS, 1500, '+');
      if (memberEl) countUp(memberEl, FALLBACK_MEMBERS, 1500, '+');
      setStatus(false);
    });
}


/* ==============================================================
   TEST-PHASE MODAL
   ============================================================== */
/**
 * Shows the test-phase notice modal on page load.
 * Uses localStorage to suppress the modal for 24 hours after
 * the user dismisses it.
 */
function showTestPhaseModal() {
  const STORAGE_KEY = 'shadow-music-testphase-dismissed';
  const TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const dismissedAt = parseInt(stored, 10);
    if (!isNaN(dismissedAt) && Date.now() - dismissedAt < TTL_MS) {
      return; // still within 24-hour window – do not show
    }
  }

  const overlay = document.getElementById('testphase-modal-overlay');
  if (!overlay) return;

  // Apply translations before showing
  const lang = localStorage.getItem('shadow-music-lang') || 'de';
  const t = translations[lang];
  const titleEl = overlay.querySelector('[data-i18n="modal.testphase.title"]');
  const bodyEl  = overlay.querySelector('[data-i18n="modal.testphase.body"]');
  const okBtn   = overlay.querySelector('[data-i18n="modal.testphase.ok"]');
  if (titleEl) titleEl.textContent = t['modal.testphase.title'];
  if (bodyEl)  bodyEl.textContent  = t['modal.testphase.body'];
  if (okBtn)   okBtn.textContent   = t['modal.testphase.ok'];

  overlay.removeAttribute('hidden');
  if (okBtn) okBtn.focus();

  function keyHandler(e) {
    if (e.key === 'Escape') dismiss();
  }

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    overlay.setAttribute('hidden', '');
    document.removeEventListener('keydown', keyHandler);
  }

  if (okBtn) {
    okBtn.addEventListener('click', dismiss, { once: true });
  }

  // Also allow dismissing by clicking the backdrop (no { once } – clicking
  // inside the modal box should not consume the listener)
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) dismiss();
  });

  // Allow dismissing with Escape key
  document.addEventListener('keydown', keyHandler);
}
