// Restore grid size from localStorage before any UI is created or rendered
window.gridSizeIndex = parseInt(localStorage.getItem('soundboardGridSizeIndex') || '0');
// Ensure reload button is a perfect square and emoji is centered vertically and horizontally
setTimeout(() => {
    reloadBtn.style.height = filterInput.offsetHeight + 'px';
    reloadBtn.style.width = reloadBtn.style.height;
    reloadBtn.style.padding = '0';
    reloadBtn.style.fontSize = (parseInt(reloadBtn.style.height) * 0.7) + 'px';
    reloadBtn.style.display = 'flex';
    reloadBtn.style.alignItems = 'center';
    reloadBtn.style.justifyContent = 'center';
}, 0);
// --- PANEL WRAP LOGIC ---
window.addEventListener('DOMContentLoaded', () => {
    // After panel and soundboard are set up, force a re-render to apply correct button sizes
    setTimeout(() => {
        renderButtons(filterInput.value);
    }, 0);
    // Grid size is restored before first renderButtons call outside this event
    // Create panel
    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.top = '0';
    panel.style.left = '0';
    panel.style.width = '100vw';
    panel.style.height = '100vh';
    panel.style.background = '#181818';
    panel.style.display = 'flex';
    panel.style.flexDirection = 'column';
    panel.style.zIndex = '1';
    panel.style.overflow = 'hidden';

    // Header
    const header = document.createElement('div');
    header.textContent = 'Meme Soundboard';
    header.style.fontSize = '2em';
    header.style.fontWeight = 'bold';
    header.style.color = '#fff';
    header.style.padding = '24px 24px 0 24px';
    header.style.flex = '0 0 auto';
    panel.appendChild(header);

    // Filter row
    const filterRow = document.createElement('div');
    filterRow.style.display = 'flex';
    filterRow.style.alignItems = 'stretch';
    filterRow.style.gap = '12px';
    filterRow.style.padding = '24px';
    filterRow.style.flex = '0 0 auto';
    filterRow.style.background = 'none';
    filterRow.style.flexWrap = 'nowrap';
    filterRow.appendChild(filterInput);

    // Reload button
    filterRow.appendChild(reloadBtn);
// Add grid size adjustment button
// Grid size options and index in global scope
window.gridSizes = [
    { w: 160, h: 120 },
    { w: 120, h: 90 },
    { w: 100, h: 70 },
    { w: 80, h: 56 }
];
// gridSizeIndex is set at the top of DOMContentLoaded, do not set again here
const gridSizeBtn = document.createElement('button');
gridSizeBtn.innerHTML = '🔳';
gridSizeBtn.title = 'Adjust grid size';
gridSizeBtn.style.background = '#333';
gridSizeBtn.style.color = '#fff';
gridSizeBtn.style.border = 'none';
gridSizeBtn.style.borderRadius = '6px';
gridSizeBtn.style.cursor = 'pointer';
gridSizeBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
gridSizeBtn.style.fontSize = '2em';
gridSizeBtn.style.display = 'flex';
gridSizeBtn.style.alignItems = 'center';
gridSizeBtn.style.justifyContent = 'center';
gridSizeBtn.style.textAlign = 'center';
// Remove marginLeft for consistent spacing; rely on filterRow.style.gap
setTimeout(() => {
    gridSizeBtn.style.height = filterInput.offsetHeight + 'px';
    gridSizeBtn.style.width = gridSizeBtn.style.height;
    gridSizeBtn.style.verticalAlign = 'middle';
    gridSizeBtn.style.marginTop = getComputedStyle(filterInput).marginTop;
    gridSizeBtn.style.marginBottom = getComputedStyle(filterInput).marginBottom;
}, 0);
gridSizeBtn.onclick = () => {
    window.gridSizeIndex = (window.gridSizeIndex + 1) % window.gridSizes.length;
    localStorage.setItem('soundboardGridSizeIndex', window.gridSizeIndex);
    renderButtons(filterInput.value);
};
filterRow.appendChild(gridSizeBtn);
    panel.appendChild(filterRow);

    // Soundboard area
    soundboard.style.maxHeight = 'unset';
    soundboard.style.flex = '1 1 auto';
    soundboard.style.overflowY = 'auto';
    soundboard.style.display = 'grid';
    soundboard.style.gridTemplateColumns = `repeat(auto-fill, ${window.gridSizes[window.gridSizeIndex].w}px)`;
    soundboard.style.justifyContent = 'center';
    soundboard.style.gap = '16px'; // Consistent spacing between buttons
    soundboard.style.alignContent = 'start'; // Prevent vertical stretching
    soundboard.style.alignItems = 'center'; // Center buttons vertically in their grid cells
    soundboard.style.gap = '12px';
    soundboard.style.padding = '24px';
    panel.appendChild(soundboard);

    // Add panel to body
    document.body.appendChild(panel);
});
// List of meme sounds and emojis
// You can use either a local file ("lol.mp3") or a direct web URL ("https://.../sound.mp3")
const sounds = [
  { emoji: '🌀', label: "Meme", file: "https://www.myinstants.com/media/sounds/are-you-out-of-your-mind-greenscreen-change-quality-and-end-wont-cut-off_2.mp3" },
  { emoji: '🎻', label: "Sad Violin (the meme one)", file: "https://www.myinstants.com/media/sounds/tf_nemesis.mp3" },
  { emoji: '🕵️‍♂️', label: "Among Us role reveal sound", file: "https://www.myinstants.com/media/sounds/among-us-role-reveal-sound.mp3" },
  { emoji: '💻', label: "Error SOUNDSS", file: "https://www.myinstants.com/media/sounds/error_CDOxCYm.mp3" },
  { emoji: '😵‍💫', label: "Emotional Damage Meme", file: "https://www.myinstants.com/media/sounds/emotional-damage-meme.mp3" },
  { emoji: '👶😂', label: "baby laughing meme", file: "https://www.myinstants.com/media/sounds/baby-laughing-meme.mp3" },
  { emoji: '💀', label: "Death sound (Fortnite)", file: "https://www.myinstants.com/media/sounds/tmp_7901-951678082.mp3" },
  { emoji: '🎬', label: "Meme final", file: "https://www.myinstants.com/media/sounds/meme-de-creditos-finales.mp3" },
  { emoji: '💨', label: "Fart Meme Sound", file: "https://www.myinstants.com/media/sounds/fart-meme-sound.mp3" },
  { emoji: '🤳', label: "instagram thud", file: "https://www.myinstants.com/media/sounds/vine-boom-sound-effect_KT89XIq.mp3" },
  { emoji: '🕷️', label: "spiderman meme song", file: "https://www.myinstants.com/media/sounds/spiderman-meme-song.mp3" },
  { emoji: '🏃‍♂️', label: "RUN vine", file: "https://www.myinstants.com/media/sounds/run-vine-sound-effect.mp3" },
  { emoji: '🥊', label: "Punch Sound", file: "https://www.myinstants.com/media/sounds/punch-gaming-sound-effect-hd_RzlG1GE.mp3" },
  { emoji: '🌌', label: "Galaxy meme", file: "https://www.myinstants.com/media/sounds/galaxy-meme.mp3" },
  { emoji: '🎤', label: "outro song", file: "https://www.myinstants.com/media/sounds/outro-song_oqu8zAg.mp3" },
  { emoji: '😴', label: "*Snore* mimimimimimi", file: "https://www.myinstants.com/media/sounds/snore-mimimimimimi.mp3" },
  { emoji: '😹', label: "cat laugh meme 1", file: "https://www.myinstants.com/media/sounds/cat-laugh-meme-1.mp3" },
  { emoji: '🐕', label: "what da dog doin", file: "https://www.myinstants.com/media/sounds/yt1s_wU4BGgD.mp3" },
  { emoji: '🕺', label: "WIDE PUTIN MEME", file: "https://www.myinstants.com/media/sounds/my-movie-6_0RlWMvM.mp3" },
  { emoji: '😱', label: "Shocked sound", file: "https://www.myinstants.com/media/sounds/shocked-sound-effect.mp3" },
  { emoji: '🏎️', label: "DEJA VU MEME", file: "https://www.myinstants.com/media/sounds/deja-vu.mp3" },
  { emoji: '🧑‍🦱', label: "'Aw Shit! Here go again.' CJ from GTA SA", file: "https://www.myinstants.com/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3" },
  { emoji: '🎺', label: "dun dun dunnnnnnnn", file: "https://www.myinstants.com/media/sounds/dun-dun-dun-sound-effect-brass_8nFBccR.mp3" },
  { emoji: '🚨', label: "-999 Social Credit Siren", file: "https://www.myinstants.com/media/sounds/999-social-credit-siren.mp3" },
  { emoji: '😲', label: "Oh My God Meme", file: "https://www.myinstants.com/media/sounds/oh-my-god-meme.mp3" },
  { emoji: '🎬', label: "Directed by Robert B Weide", file: "https://www.myinstants.com/media/sounds/directed-by-robert-b_voI2Z4T.mp3" },
  { emoji: '🥖', label: "French meme song", file: "https://www.myinstants.com/media/sounds/french-meme-song.mp3" },
  { emoji: '💨', label: "Fart Meme Sound (Better and louder)", file: "https://www.myinstants.com/media/sounds/fartmeme.mp3" },
  { emoji: '😳', label: "Wow Anime meme", file: "https://www.myinstants.com/media/sounds/anime-wow-sound-effect-mp3cut.mp3" },
  { emoji: '😐', label: "They ask you how you are meme", file: "https://www.myinstants.com/media/sounds/they-ask-you-how-you-are-and-you-just-have-to-say-that-youre-fine-sound-effect_IgYM1CV.mp3" },
  { emoji: '🤔', label: "asian meme huh?", file: "https://www.myinstants.com/media/sounds/huh_37bAoRo.mp3" },
  { emoji: '🤣', label: "HAha funny laugh", file: "https://www.myinstants.com/media/sounds/ny-video-online-audio-converter.mp3" },
  { emoji: '🚪', label: "FBI OPEN UP (with explosion)", file: "https://www.myinstants.com/media/sounds/fbi-open-up_dwLhIFf.mp3" },
  { emoji: '🫠', label: "Bruh meme", file: "https://www.myinstants.com/media/sounds/movie_1_C2K5NH0.mp3" },
  { emoji: '🧐', label: "'What' Bottom Text Meme (Sanctuary Guardian) - S", file: "https://www.myinstants.com/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd.mp3" },
  { emoji: '🧠', label: "Long brain fart", file: "https://www.myinstants.com/media/sounds/long-brain-fart.mp3" },
  { emoji: '🤬', label: "Nani FULL", file: "https://www.myinstants.com/media/sounds/nani-meme-sound-effect.mp3" },
  { emoji: '🧅', label: "WHAT ARE YOU DOING IN MY SWAMP", file: "https://www.myinstants.com/media/sounds/what-are-you-doing-in-my-swamp-.mp3" },
  { emoji: '🌭', label: "Snoop Dogg meme", file: "https://www.myinstants.com/media/sounds/tmpbxydyrz3.mp3" },
  { emoji: '⚰️', label: "Coffin Dance Meme", file: "https://www.myinstants.com/media/sounds/y2mate-mp3cut_sRzY6rh.mp3" },
  { emoji: '🍦', label: "bing chilling", file: "https://www.myinstants.com/media/sounds/bing-chilling_fcdGgUc.mp3" },
  { emoji: '🦄', label: "Oh No No No Tik Tok Song Sound Effect", file: "https://www.myinstants.com/media/sounds/oh-no-no-no-tik-tok-song-sound-effect.mp3" },
  { emoji: '🗣️', label: "AUUGHHH", file: "https://www.myinstants.com/media/sounds/auughhh.mp3" },
  { emoji: '🥊', label: "punch sound effect meme", file: "https://www.myinstants.com/media/sounds/punch-sound-effect-meme.mp3" },
  { emoji: '🧑‍🎤', label: "jojo - ayayay", file: "https://www.myinstants.com/media/sounds/jojos-bizarre-adventure-ay-ay-ay-ay-_-sound-effect.mp3" },
  { emoji: '🐸', label: "frog laughing meme", file: "https://www.myinstants.com/media/sounds/frog-laughing-meme.mp3" },
  { emoji: '🚨', label: "danger alarm sound effect meme", file: "https://www.myinstants.com/media/sounds/danger-alarm-sound-effect-meme.mp3" },
  { emoji: '🇪🇸', label: "English or Spanish Song", file: "https://www.myinstants.com/media/sounds/english-or-spanish-song.mp3" },
  { emoji: '🏁', label: "Okay let’s go", file: "https://www.myinstants.com/media/sounds/meme-okay-lets-go.mp3" },
  { emoji: '🎶', label: "We Got Him Meme Song Loud", file: "https://www.myinstants.com/media/sounds/ladies-and-gentlemen-we-got-him-song.mp3" },
  { emoji: '🎶', label: "musica triste meme", file: "https://www.myinstants.com/media/sounds/tmpq7mpzzl9.mp3" },
  { emoji: '🔊', label: "Доброе утро моя девочка", file: "https://www.myinstants.com/media/sounds/dobroe-utro-moia-devochka.mp3" },
  { emoji: '🔊', label: "oof minecraft", file: "https://www.myinstants.com/media/sounds/steve-old-hurt-sound_XKZxUk4.mp3" },
  { emoji: '🌀', label: "æ meme", file: "https://www.myinstants.com/media/sounds/ae-meme.mp3" },
  { emoji: '😱', label: "AMOGUS SCREAMING", file: "https://www.myinstants.com/media/sounds/guy-yelling-among-us-sound-effect.mp3" },
  { emoji: '🔊', label: "Lightskin Rizz (Sin City)", file: "https://www.myinstants.com/media/sounds/lightskin-rizz-sin-city.mp3" },
  { emoji: '🌀', label: "Run Meme", file: "https://www.myinstants.com/media/sounds/awolnation-run-audio-mp3cut_TdXTLux.mp3" },
  { emoji: '🎶', label: "Lobotomy Sound Effect", file: "https://www.myinstants.com/media/sounds/lobotomy-sound-effect.mp3" },
  { emoji: '🎶', label: "Rat dance Music", file: "https://www.myinstants.com/media/sounds/rat-dance-music.mp3" },
  { emoji: '🔊', label: "Lagging/loading", file: "https://www.myinstants.com/media/sounds/loading-lost-connection-green-screen-with-sound-effect-2_K8HORkT.mp3" },
  { emoji: '🎶', label: "MUSICA DE SIGMA ESTOURADO", file: "https://www.myinstants.com/media/sounds/musica-de-sigma-estourado.mp3" },
  { emoji: '🌀', label: "Bad to the Bone Meme", file: "https://www.myinstants.com/media/sounds/bad-to-the-bone-meme.mp3" },
  { emoji: '🔊', label: "windows xp21", file: "https://www.myinstants.com/media/sounds/windows-xp-startup_1ph012N.mp3" },
  { emoji: '🧠', label: "Galaxy brain meme", file: "https://www.myinstants.com/media/sounds/galaxy-brain-meme.mp3" },
  { emoji: '🎶', label: "Duck toy sound", file: "https://www.myinstants.com/media/sounds/duck-toy-sound.mp3" },
  { emoji: '🔊', label: "Hey let her go!", file: "https://www.myinstants.com/media/sounds/let-her-go.mp3" },
  { emoji: '😢', label: "Risadinha de ladrão", file: "https://www.myinstants.com/media/sounds/sabe-porque-as-meninas-dao-maior-valor-na-risada-de-ladrao-mp3cut.mp3" },
  { emoji: '🌀', label: "Meme mp3", file: "https://www.myinstants.com/media/sounds/meme-de-creditos-finales_qHtIjyQ.mp3" },
  { emoji: '🔊', label: "“Hello There” Obi Wan", file: "https://www.myinstants.com/media/sounds/obi-wan_says_hello_thereyoutubetomp4.mp3" },
  { emoji: '🔥', label: "FIRE IN THE HOLE Geometry Dash", file: "https://www.myinstants.com/media/sounds/fire-in-the-hole-geometry-dash.mp3" },
  { emoji: '🌀', label: "U Got That (meme)", file: "https://www.myinstants.com/media/sounds/u-got-that-mp3-fix.mp3" },
  { emoji: '🎶', label: "FAIL SOUND MEME", file: "https://www.myinstants.com/media/sounds/fail-sound-effect.mp3" },
  { emoji: '🔊', label: "Gas Gas Gas - Manuel (Short)", file: "https://www.myinstants.com/media/sounds/gas-gas-gaslqshort.mp3" },
  { emoji: '🌀', label: "Sicko Mode Meme SFX", file: "https://www.myinstants.com/media/sounds/the-beginning-of-sicko-mode-sound-effect-for-memes_xAcUeuI.mp3" },
  { emoji: '🌀', label: "Pablo MEME", file: "https://www.myinstants.com/media/sounds/yt1s_NSjFWNC.mp3" },
  { emoji: '🔊', label: "You Are My Sunshine Lebron James", file: "https://www.myinstants.com/media/sounds/you-are-my-sunshine-lebron-james.mp3" },
  { emoji: '💥', label: "Explosion meme", file: "https://www.myinstants.com/media/sounds/explosion-meme_dTCfAHs.mp3" },
  { emoji: '🔊', label: "Lá ele", file: "https://www.myinstants.com/media/sounds/la-ele.mp3" },
  { emoji: '🔊', label: "BYE BYE! ~ Lumi Athena SFX", file: "https://www.myinstants.com/media/sounds/bye-bye-lumi-athena-sfx.mp3" },
  { emoji: '🎶', label: "JOJO SONG", file: "https://www.myinstants.com/media/sounds/jojos-golden-wind_kL2WElB.mp3" },
  { emoji: '🔊', label: "wee weee weee", file: "https://www.myinstants.com/media/sounds/weeeee_original_1193597514938524841.mp3" },
  { emoji: '🔊', label: "Electric Zoo", file: "https://www.myinstants.com/media/sounds/spongebob-squarepants-the-yellow-album-21-electric-zoo-audiotrimmer.mp3" },
  { emoji: '🔊', label: "Punch Effect", file: "https://www.myinstants.com/media/sounds/punch_u4LmMsr.mp3" },
  { emoji: '🔊', label: "lula tira", file: "https://www.myinstants.com/media/sounds/lula-tira.mp3" },
  { emoji: '🔊', label: "MICHAEL DONT LEAVE ME HERE", file: "https://www.myinstants.com/media/sounds/michael-dont-leave-me-here.mp3" },
  { emoji: '🎶', label: "BRUH sound effect!", file: "https://www.myinstants.com/media/sounds/bruh-sound-effect_WstdzdM.mp3" },
  { emoji: '🎶', label: "What The Hell Meme Sound Effect", file: "https://www.myinstants.com/media/sounds/what-the-hell-meme-sound-effect.mp3" },
  { emoji: '🔊', label: "Women haha", file: "https://www.myinstants.com/media/sounds/women-haha.mp3" },
  { emoji: '🌀', label: "tom da tank meme", file: "https://www.myinstants.com/media/sounds/loud-version_7n1qEm2.mp3" },
  { emoji: '🔔', label: "BELLIGOL, BELLIGOL, BELLIGHAM, É ELE", file: "https://www.myinstants.com/media/sounds/belligol-belligol-belligham-e-ele.mp3" },
  { emoji: '🌀', label: "MAN SNORING MEME", file: "https://www.myinstants.com/media/sounds/man-snoring-meme_ctrllNn.mp3" },
  { emoji: '🔊', label: "AMONGUS", file: "https://www.myinstants.com/media/sounds/among_us_trap_remix_bass_boosted_leonz_8455886905626474145-mp3cut.mp3" },
  { emoji: '🌀', label: "Meme omgs", file: "https://www.myinstants.com/media/sounds/meme_lgkJmX6.mp3" },
  { emoji: '🔊', label: "Tu conhece a Paola?", file: "https://www.myinstants.com/media/sounds/tu-conhece-a-paola.mp3" },
  { emoji: '🔊', label: "Huh5544", file: "https://www.myinstants.com/media/sounds/videoplayback_y6EZG5Z.mp3" },
  { emoji: '🔊', label: "Вы чё все геи чоли тут?", file: "https://www.myinstants.com/media/sounds/vy-chio-vse-gei-choli-tut.mp3" },
  { emoji: '🔊', label: "A BOATE CALIFÓRNIA", file: "https://www.myinstants.com/media/sounds/a-boate-california.mp3" },
  { emoji: '🔊', label: "OK - Même", file: "https://www.myinstants.com/media/sounds/okay-meme.mp3" },
  { emoji: '🔊', label: "FEIN FEIN FEIN FEIN", file: "https://www.myinstants.com/media/sounds/fein-fein-fein-fein.mp3" },
  { emoji: '🔊', label: "Emotional_Damage", file: "https://www.myinstants.com/media/sounds/emotional-damage_svaNMfN.mp3" },
  { emoji: '🔊', label: "No no Wait Wait!", file: "https://www.myinstants.com/media/sounds/no-no-wait-wait.mp3" },
  { emoji: '🔊', label: "Slumber That Brother Gone", file: "https://www.myinstants.com/media/sounds/slumber-that-brother-gone-meme_pXziXJ1.mp3" },
  { emoji: '🌀', label: "Aayein Meme", file: "https://www.myinstants.com/media/sounds/aayein-meme.mp3" },
  { emoji: '🔊', label: "ultra gay", file: "https://www.myinstants.com/media/sounds/ultra-gay-seal_1.mp3" },
  { emoji: '🐻', label: "Pookie Bear", file: "https://www.myinstants.com/media/sounds/pookie-bear.mp3" },
  { emoji: '🌀', label: "The Lion Sleeps Tonight (meme)", file: "https://www.myinstants.com/media/sounds/the-lion-sleeps-tonight.mp3" },
  { emoji: '🎶', label: "oiia oiia Sound", file: "https://www.myinstants.com/media/sounds/oiia-oiia-sound.mp3" },
  { emoji: '🎶', label: "Bass Distortion / Dab Sound", file: "https://www.myinstants.com/media/sounds/dab-distortion.mp3" },
  { emoji: '💨', label: "Le fart de Simon", file: "https://www.myinstants.com/media/sounds/le-fart-de-simon.mp3" },
  { emoji: '💨', label: "Fart Sound Effect (From 21st Century Memes)", file: "https://www.myinstants.com/media/sounds/fart-meme-sound_qo90QRs.mp3" },
  { emoji: '🔊', label: "I am Steve", file: "https://www.myinstants.com/media/sounds/i-am-steve.mp3" },
  { emoji: '🔊', label: "You What?", file: "https://www.myinstants.com/media/sounds/you-what-spongebob.mp3" },
  { emoji: '🔊', label: "Do It- dooo0o0o0o0o0 eeewewet", file: "https://www.myinstants.com/media/sounds/do-eeeweweewet.mp3" },
  { emoji: '🔊', label: "Vibe check", file: "https://www.myinstants.com/media/sounds/klonk.mp3" },
  { emoji: '🔊', label: "Come here boy", file: "https://www.myinstants.com/media/sounds/daequan-come-here-boy-sound-effect.mp3" },
  { emoji: '🔊', label: "Hawk Tuah (Short)", file: "https://www.myinstants.com/media/sounds/hawk-tuah-short.mp3" },
  { emoji: '🌀', label: "the rock meme", file: "https://www.myinstants.com/media/sounds/the-rock-meme.mp3" },
  { emoji: '🔊', label: "Lista mais g@y do Planeta Terra 2.0", file: "https://www.myinstants.com/media/sounds/lista-mais-g-y-do-planeta-terra-2-0.mp3" },
  { emoji: '🔊', label: "Система поиска пи###са", file: "https://www.myinstants.com/media/sounds/sistema-poiska-pi-sa.mp3" },
  { emoji: '🔊', label: "Gegagedigedagedago (Full)", file: "https://www.myinstants.com/media/sounds/gegagedigedagedago-full.mp3" },
  { emoji: '🔊', label: "omg bruh oh hell nah", file: "https://www.myinstants.com/media/sounds/omg-bruh-oh-hell-nah.mp3" },
  { emoji: '🧙', label: "SHADOW WIZARD MONEY GANG WE LOVE CASTING SPELLS", file: "https://www.myinstants.com/media/sounds/shadow-wizard-money-gang-we-love-casting-spells_3h95aGA.mp3" },
  { emoji: '🔊', label: "Ching Cheng Hanji", file: "https://www.myinstants.com/media/sounds/ching-cheng-hanji.mp3" },
  { emoji: '🚨', label: "metal gear alert sound effect", file: "https://www.myinstants.com/media/sounds/metal-gear-alert-sound-effect_XKoHReZ.mp3" },
  { emoji: '🔊', label: "hold up tiktok", file: "https://www.myinstants.com/media/sounds/hold-up-tiktok.mp3" },
  { emoji: '🔊', label: "УХ ТЫ БЛЯ°•°", file: "https://www.myinstants.com/media/sounds/ukh-ty-bliadeg-deg.mp3" },
  { emoji: '🔊', label: "TOME RODRIGO FARO", file: "https://www.myinstants.com/media/sounds/tome-rodrigo-faro_xDXKGwq.mp3" },
  { emoji: '😂', label: "troll face laugh meme oh no no no", file: "https://www.myinstants.com/media/sounds/oh-no-no-no-no-laugh_sejx5Bk.mp3" },
  { emoji: '🌀', label: "Mr Beast Phonk Meme", file: "https://www.myinstants.com/media/sounds/mr-beast-phonk-meme.mp3" },
  { emoji: '🔊', label: "SUBWAY SURFERS BASS BOOSTED", file: "https://www.myinstants.com/media/sounds/subway-surfers-bass-boosted.mp3" },
  { emoji: '🔊', label: "Это район для геев", file: "https://www.myinstants.com/media/sounds/eto-raion-dlia-geev.mp3" },
  { emoji: '🔊', label: "El señor de la noche - Don Omar", file: "https://www.myinstants.com/media/sounds/el-senor-de-la-noche-don-omar.mp3" },
  { emoji: '🔊', label: "Joker Shitpost beatbox", file: "https://www.myinstants.com/media/sounds/joker-shitpost-beatbox.mp3" },
  { emoji: '🔊', label: "Meri jung Emotional", file: "https://www.myinstants.com/media/sounds/meri-jung-emotional.mp3" },
  { emoji: '🎶', label: "What meme song", file: "https://www.myinstants.com/media/sounds/what-bottom-text-meme-sanctuary-guardian-sound-effect-hd_tdDIUTg.mp3" },
  { emoji: '🔊', label: "ELON MUSK UMA VEZ DISSE ESTOURADO", file: "https://www.myinstants.com/media/sounds/elon-musk-uma-vez-disse-estourado.mp3" },
  { emoji: '🔊', label: "OH MA GAUD VINE", file: "https://www.myinstants.com/media/sounds/oh-ma-gaud-vine.mp3" },
  { emoji: '🌀', label: "Keyboard meme", file: "https://www.myinstants.com/media/sounds/keyboard-meme.mp3" },
  { emoji: '🔊', label: "Tobu - Candyland", file: "https://www.myinstants.com/media/sounds/candyland-cat-meme.mp3" },
  { emoji: '🌀', label: "Confused cross eyed kitten meme", file: "https://www.myinstants.com/media/sounds/confused-cross-eyed-kitten-meme.mp3" },
  { emoji: '🎶', label: "Why do I hear boss music", file: "https://www.myinstants.com/media/sounds/why-do-i-hear-boss-music.mp3" },
  { emoji: '🌀', label: "гипно дэнс | hypnodancer meme", file: "https://www.myinstants.com/media/sounds/gipno-dens-hypnodancer-meme.mp3" },
  { emoji: '💨', label: "Wet fart meme", file: "https://www.myinstants.com/media/sounds/wet-fart-meme.mp3" },
  { emoji: '🔊', label: "tenge tenge", file: "https://www.myinstants.com/media/sounds/tenge-tenge.mp3" },
  { emoji: '🔊', label: "Dr. Livesey", file: "https://www.myinstants.com/media/sounds/dr-livesey.mp3" },
  { emoji: '🌀', label: "4Chan meme", file: "https://www.myinstants.com/media/sounds/untitled_bmEjZi2.mp3" },
  { emoji: '🔊', label: "anzeige ritter", file: "https://www.myinstants.com/media/sounds/das-gibt-ne-anzeige-von-karin-ritter-160kbps.mp3" },
  { emoji: '🔊', label: "O moreno ta ingnorante", file: "https://www.myinstants.com/media/sounds/o-moreno-ta-ingnorante.mp3" },
  { emoji: '🐶', label: "Laughing dog meme", file: "https://www.myinstants.com/media/sounds/laughing-dog-meme.mp3" },
  { emoji: '🔊', label: "Caganeira gordurosa", file: "https://www.myinstants.com/media/sounds/caganeira-gordurosa.mp3" },
  { emoji: '🔊', label: "PEGUE NA MINHA POMBAAAAAAAAAAAA ESTOURADO", file: "https://www.myinstants.com/media/sounds/pegue-na-minha-pombaaaaaaaaaaaa-estourado.mp3" },
  { emoji: '🐱', label: "HUH? Cat meme", file: "https://www.myinstants.com/media/sounds/huh-cat-meme.mp3" },
  { emoji: '🔊', label: "Heyy daddyyyyy⁓ omg", file: "https://www.myinstants.com/media/sounds/heyy-daddyyyyy-omg.mp3" },
  { emoji: '🌀', label: "E Meme", file: "https://www.myinstants.com/media/sounds/its-in-the-game_TyOFKRF.mp3" },
  { emoji: '🌀', label: "Kanye West Wolves Meme", file: "https://www.myinstants.com/media/sounds/wolves_-_kanye-6b019add-71f7-4a31-8363-ed112937445e.mp3" },
  { emoji: '🎶', label: "Windows XP ERROR Song", file: "https://www.myinstants.com/media/sounds/windows-xp-error-song-edited-by-dj-cobaltsteel-77.mp3" },
  { emoji: '🔊', label: "AW HELL NAH MAN", file: "https://www.myinstants.com/media/sounds/aw-hell-nah-man.mp3" },
  { emoji: '🔊', label: "Machi No Dorufin", file: "https://www.myinstants.com/media/sounds/machi-no-dorufin.mp3" },
  { emoji: '💥', label: "FBI open UP. (with explosion)", file: "https://www.myinstants.com/media/sounds/fbi-open-up-explosion.mp3" },
  { emoji: '🎶', label: "Yippee meme sound effect", file: "https://www.myinstants.com/media/sounds/yippee-meme-sound-effect.mp3" },
  { emoji: '🕺', label: "HQ Coffin Dance, Funeral", file: "https://www.myinstants.com/media/sounds/hq-coffin-dance-funeral-vicetone-tony-igy-astronomia.mp3" },
  { emoji: '🚨', label: "epic sax alert 10 seconds fade", file: "https://www.myinstants.com/media/sounds/hd-epic-sax-gandalf-10-sec_f1uqKhm.mp3" },
  { emoji: '🔊', label: "AAAAAAAAAAAAAAAAAAAA é lutador", file: "https://www.myinstants.com/media/sounds/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-e-lutador.mp3" },
  { emoji: '🔊', label: "Бобуляция", file: "https://www.myinstants.com/media/sounds/bobuliatsiia.mp3" },
  { emoji: '🔊', label: "Gas Gas Gas - Manuel (Long)", file: "https://www.myinstants.com/media/sounds/gas-gas-gaslq.mp3" },
  { emoji: '🌀', label: "Salamaleico Salam Alaikum Meme", file: "https://www.myinstants.com/media/sounds/salamaleico-mini.mp3" },
  { emoji: '🔊', label: "Tmkc Mahavirwa wala", file: "https://www.myinstants.com/media/sounds/tmkc-mahavirwa-wala.mp3" },
  { emoji: '👽', label: "alien tiktok meme song", file: "https://www.myinstants.com/media/sounds/alien-meme-song-with-lyrics-patlamaya-devam-lyrics-alien-dancing-meme-mp3cut.mp3" },
  { emoji: '🌀', label: "Can We Get Much Higher-One Piece Meme", file: "https://www.myinstants.com/media/sounds/can-we-get-much-higher-one-piece-meme.mp3" },
  { emoji: '🔊', label: "got you homie", file: "https://www.myinstants.com/media/sounds/got-you.mp3" },
  { emoji: '🔊', label: "Наша задача это разными схемами", file: "https://www.myinstants.com/media/sounds/nasha-zadacha-eto-raznymi-skhemami.mp3" },
  { emoji: '🔊', label: "Hay alguien ahí con vida - larga", file: "https://www.myinstants.com/media/sounds/hay-alguien-ahi-con-vida-larga.mp3" },
  { emoji: '🌀', label: "Dwayne Rock Johnson Eyebrow raise meme", file: "https://www.myinstants.com/media/sounds/dwayne-rock-johnson-eyebrow-raise-meme.mp3" },
  { emoji: '🔊', label: "STONKS", file: "https://www.myinstants.com/media/sounds/different-variations-for-stonks-sound-effect.mp3" },
  { emoji: '🌀', label: "Memento Mancing Mania", file: "https://www.myinstants.com/media/sounds/memento-mancing-mania_ymrKDvh.mp3" },
  { emoji: '🌀', label: "Meme do Cavalo", file: "https://www.myinstants.com/media/sounds/cavalo_mvwjw3K.mp3" },
  { emoji: '🌀', label: "memes", file: "https://www.myinstants.com/media/sounds/rap-dos-memes.mp3" },
  { emoji: '🔊', label: "Delivery - Lethal Company", file: "https://www.myinstants.com/media/sounds/delivery-lethal-company.mp3" },
  { emoji: '🔊', label: "Wide Putin Walkin", file: "https://www.myinstants.com/media/sounds/wide-putin-walkin.mp3" },
  { emoji: '🐱', label: "Cat Vibing To Ievan Polkka", file: "https://www.myinstants.com/media/sounds/cat-vibing-to-ievan-polkka.mp3" },
  { emoji: '🔊', label: "Deja vu fade", file: "https://www.myinstants.com/media/sounds/deja-vu-fade.mp3" },
  { emoji: '🌀', label: "minecraft Door meme", file: "https://www.myinstants.com/media/sounds/minecraft-door-sound-effect.mp3" },
  { emoji: '🔊', label: "botao do whatsapp", file: "https://www.myinstants.com/media/sounds/botao-do-whatsapp.mp3" },
  { emoji: '🌀', label: "Violin screech meme", file: "https://www.myinstants.com/media/sounds/violin-screech-meme.mp3" },
  { emoji: '🌀', label: "let's go meme", file: "https://www.myinstants.com/media/sounds/lets-go-meme.mp3" },
  { emoji: '🔊', label: "GuYs iTs a CoNtRolLER pLaYEr", file: "https://www.myinstants.com/media/sounds/controller-player-sound-effect-0s-4s-zqbnklqu_le-961_0vB95H9.mp3" },
  { emoji: '🌀', label: "chora nao vagabunda (meme)", file: "https://www.myinstants.com/media/sounds/chora-nao-vagabunda-meme.mp3" },
  { emoji: '🔊', label: "You Know the Rules, Say Goodbye", file: "https://www.myinstants.com/media/sounds/you-know-the-rules-and-so-do-i-say-goodbye.mp3" },
  { emoji: '🔊', label: "Mister Bombastic Bomba Fantastic", file: "https://www.myinstants.com/media/sounds/mister-bombastic-bomba-fantastic.mp3" },
  { emoji: '🔊', label: "mission failed, we get em next time", file: "https://www.myinstants.com/media/sounds/mission-failed-well-get-em-next-time-sound-effect-zxhixnbk.mp3" },
  { emoji: '🚨', label: "alarma saturada", file: "https://www.myinstants.com/media/sounds/alarma-saturada.mp3" },
  { emoji: '🔊', label: "YAAAYY CHILDREN!!!!", file: "https://www.myinstants.com/media/sounds/children-yaysound-effect.mp3" },
  { emoji: '🔊', label: "13 anos", file: "https://www.myinstants.com/media/sounds/13-anos.mp3" },
  { emoji: '🔊', label: "meowrgh", file: "https://www.myinstants.com/media/sounds/meowrgh.mp3" },
  { emoji: '🔊', label: "Awkward Moment", file: "https://www.myinstants.com/media/sounds/awkward-moment.mp3" },
  { emoji: '📯', label: "Train horn meme", file: "https://www.myinstants.com/media/sounds/train-horn-meme_v6N3591.mp3" },
  { emoji: '🔊', label: "тыщ тыгыдыгыдыщ тыщ", file: "https://www.myinstants.com/media/sounds/tyshch-tygydygydyshch-tyshch.mp3" },
  { emoji: '🔊', label: "PEACHES PEACHES", file: "https://www.myinstants.com/media/sounds/peaches-super-mario-movie.mp3" },
  { emoji: '🌀', label: "Man Beatboxing Meme", file: "https://www.myinstants.com/media/sounds/man-beatboxing-meme-online-audio-converter.mp3" },
  { emoji: '🔊', label: "Minecraft potion", file: "https://www.myinstants.com/media/sounds/minecraft-potion-drinking-sound-effect-1.mp3" },
  { emoji: '🔊', label: "ah ha ha", file: "https://www.myinstants.com/media/sounds/ah-haha.mp3" },
  { emoji: '🔊', label: "Аннигиляторная Пушка", file: "https://www.myinstants.com/media/sounds/annihilation-gun.mp3" },
  { emoji: '🔊', label: "Da Baby Lets Goooo", file: "https://www.myinstants.com/media/sounds/dababy-lets-go-sound-effect_EWZTfTT.mp3" },
  { emoji: '🌀', label: "it is what it is meme", file: "https://www.myinstants.com/media/sounds/savetweetvid_tadwtrm1nizoqxxv.mp3" },
  { emoji: '🌀', label: "helicopter meme", file: "https://www.myinstants.com/media/sounds/helicopter-meme.mp3" },
  { emoji: '🔊', label: "Biden SODA!", file: "https://www.myinstants.com/media/sounds/yt1s_qwrCPVf.mp3" },
  { emoji: '🔊', label: "Пельмени", file: "https://www.myinstants.com/media/sounds/pelmeni.mp3" },
  { emoji: '🔊', label: "Cotton eye joe (nuggets)", file: "https://www.myinstants.com/media/sounds/cotton-eye-joe-nuggets.mp3" },
  { emoji: '🔊', label: "PUM IMPACTO", file: "https://www.myinstants.com/media/sounds/pum-impacto.mp3" },
  { emoji: '🔊', label: "Was that the bite of 87", file: "https://www.myinstants.com/media/sounds/was-that-the-bite-of-87-markiplier-original-video-clip-sound-clip.mp3" },
  { emoji: '🐱', label: "samsung notification 234223243", file: "https://www.myinstants.com/media/sounds/yt1s_nijLeKo.mp3" },
  { emoji: '🔊', label: "Вы приговариваетесь (мармелад)", file: "https://www.myinstants.com/media/sounds/vy-prigovarivaetes-marmelad.mp3" },
  { emoji: '👽', label: "zab zab zab bla bla blu blu alien tiktok meme", file: "https://www.myinstants.com/media/sounds/zab-zab-zab-bla-bla-blu-blu-alien-tiktok-meme.mp3" },
  { emoji: '🎶', label: "spiderman meme song 2.0", file: "https://www.myinstants.com/media/sounds/spiderman-meme-song-2-0.mp3" },
  { emoji: '🚗', label: "im bout to end this man caree", file: "https://www.myinstants.com/media/sounds/recording-22.mp3" },
  { emoji: '🔊', label: "Olha a mensagem !b", file: "https://www.myinstants.com/media/sounds/olha-a-mensagem-b_Rp09o17.mp3" },
  { emoji: '🌀', label: "disgusting meme", file: "https://www.myinstants.com/media/sounds/disgusting_WJOvrJj.mp3" },
  { emoji: '🔊', label: "OOOh shit a rat", file: "https://www.myinstants.com/media/sounds/a-rat.mp3" },
  { emoji: '🔊', label: "ЫЫЫ Стандоф 2 говно", file: "https://www.myinstants.com/media/sounds/yyy-standof-2-govno.mp3" },
  { emoji: '🌀', label: "wake up meme", file: "https://www.myinstants.com/media/sounds/wake-up-meme-close-up-aetrim1609692048785-aemerge1609692158800.mp3" },
  { emoji: '🌀', label: "Oh No Meme (2020)", file: "https://www.myinstants.com/media/sounds/oh-no-meme-2020_hX2n56J.mp3" },
  { emoji: '🎶', label: "ALL Goofy Sounds", file: "https://www.myinstants.com/media/sounds/all-goofy-sounds.mp3" },
  { emoji: '🔊', label: "I have the power of god and anime", file: "https://www.myinstants.com/media/sounds/i_have_the_power_of_god_and_anime_on_my_side.mp3" },
  { emoji: '😱', label: "Man Screaming Meme", file: "https://www.myinstants.com/media/sounds/man-screaming-memes-sound-effect-2020-for-pro-content-creators_HU6teNC.mp3" },
  { emoji: '🌀', label: "Tecnologia Meme", file: "https://www.myinstants.com/media/sounds/tecnologia-meme.mp3" },
  { emoji: '🔊', label: "NOIS DA O CV P0RRA KKKKKKKKKK", file: "https://www.myinstants.com/media/sounds/nois-da-o-cv-p0rra-kkkkkkkkkk.mp3" },
  { emoji: '🎶', label: "Bob Esponja - Fail Sound", file: "https://www.myinstants.com/media/sounds/bob-esponja-fail-sound.mp3" },
  { emoji: '🔊', label: "gogogogogogo", file: "https://www.myinstants.com/media/sounds/gogogogogogo.mp3" },
  { emoji: '🌀', label: "Louth meme", file: "https://www.myinstants.com/media/sounds/spongebob_trap_remix.mp3" },
  { emoji: '🌀', label: "DISCORD CALL MEME", file: "https://www.myinstants.com/media/sounds/discord-call-meme.mp3" },
  { emoji: '🔊', label: "Hindi Totoo Yan - BABALU", file: "https://www.myinstants.com/media/sounds/hindi-totoo-yan-babalu.mp3" },
  { emoji: '🌀', label: "WOAH! (meme)", file: "https://www.myinstants.com/media/sounds/woah_Wlc9EIM.mp3" },
  { emoji: '🔊', label: "TODAS MIS PAJAS ME GUSTA RECORDAR", file: "https://www.myinstants.com/media/sounds/todas-mis-pajas-me-gusta-recordar.mp3" },
  { emoji: '🔊', label: "iluminati", file: "https://www.myinstants.com/media/sounds/iluminati_kUXvuSv.mp3" },
  { emoji: '🔊', label: "старый бог вовчик", file: "https://www.myinstants.com/media/sounds/staryi-bog-vovchik.mp3" },
  { emoji: '💀', label: "dead meme please ignore", file: "https://www.myinstants.com/media/sounds/dead-meme-please-ignore.mp3" },
  { emoji: '🌀', label: "Oh No Knuckles Meme", file: "https://www.myinstants.com/media/sounds/oh_no_1_yTNavML.mp3" },
  { emoji: '🔊', label: "Pra nossa alegria", file: "https://www.myinstants.com/media/sounds/para-nossa-alegria-_cut.mp3" },
  { emoji: '🔊', label: "MontanaBlack88 Aha", file: "https://www.myinstants.com/media/sounds/aha_LAs5Pqf.mp3" },
  { emoji: '🌀', label: "mm whatcha say meme", file: "https://www.myinstants.com/media/sounds/mm-whatcha-say-meme-audio-mp3.mp3" },
  { emoji: '🎶', label: "the rock meme sound effect", file: "https://www.myinstants.com/media/sounds/the-rock-meme-sound-effect.mp3" },
  { emoji: '😂', label: "deddy tolol", file: "https://www.myinstants.com/media/sounds/deddy-tolol.mp3" },
  { emoji: '🌀', label: "SANIC meme", file: "https://www.myinstants.com/media/sounds/sanic_2E0Aa1p.mp3" },
  { emoji: '🌀', label: "Pyrocynical Chinese meme (original)", file: "https://www.myinstants.com/media/sounds/pyrocynical-chinese-meme-original-mp3cut.mp3" },
  { emoji: '🔊', label: "Unexpected John Cena", file: "https://www.myinstants.com/media/sounds/areyousureaboutthat.mp3" },
  { emoji: '🔊', label: "Que dificil me la pusiste diablo", file: "https://www.myinstants.com/media/sounds/que-dificil-me-la-pusiste-diablo.mp3" },
  { emoji: '🌀', label: "Si meme spiderman", file: "https://www.myinstants.com/media/sounds/si-meme-spiderman.mp3" },
  { emoji: '🔊', label: "KWAI SEU APP DE VIDEOS CURTOS ESTOURADOS", file: "https://www.myinstants.com/media/sounds/kwai-seu-app-de-videos-curtos-estourados.mp3" },
  { emoji: '🎶', label: "OUTRO SONG (Xenogenesis)", file: "https://www.myinstants.com/media/sounds/outro-song-xenogenesis.mp3" },
  { emoji: '🔊', label: "TURI IP IP ESTOURADO", file: "https://www.myinstants.com/media/sounds/turi-ip-ip-estourado.mp3" },
  { emoji: '🔊', label: "Garbageee", file: "https://www.myinstants.com/media/sounds/still-a-piece-of-garbage_KJxlB13.mp3" },
  { emoji: '🌀', label: "SpongeBob levitating meme", file: "https://www.myinstants.com/media/sounds/spongebob-levitating-meme.mp3" },
  { emoji: '🌀', label: "Meme Click", file: "https://www.myinstants.com/media/sounds/meme-click.mp3" },
  { emoji: '🌀', label: "EVERSON ZOIO - TIRA MEME", file: "https://www.myinstants.com/media/sounds/tira-tira-caraio-everson-zoio-meme.mp3" },
  { emoji: '🌀', label: "john cena chinese meme", file: "https://www.myinstants.com/media/sounds/john-cena-chinese-meme.mp3" },
  { emoji: '🔊', label: "Ah Shit, Here We Go Again.", file: "https://www.myinstants.com/media/sounds/gta-san-andreas-ah-shit-here-we-go-again_PHjnAqj.mp3" },
  { emoji: '🌀', label: "Boing Boing Boing meme", file: "https://www.myinstants.com/media/sounds/boing-boing-boing-meme.mp3" },
  { emoji: '🎶', label: "E sound", file: "https://www.myinstants.com/media/sounds/e-sound-effect_vA4ZcRK.mp3" },
  { emoji: '🔊', label: "Агуляция", file: "https://www.myinstants.com/media/sounds/aguliatsiia.mp3" },
  { emoji: '🔊', label: "DUAR", file: "https://www.myinstants.com/media/sounds/duar.mp3" },
  { emoji: '🔊', label: "'Fish!' you, me, gas station clip", file: "https://www.myinstants.com/media/sounds/fish-you-me-gas-station-clip.mp3" },
  { emoji: '🔊', label: "you're going to Brazil", file: "https://www.myinstants.com/media/sounds/your_going_to_brazil_among_us_meme_-526181161000490320.mp3" },
  { emoji: '🌀', label: "NUH UH MEME", file: "https://www.myinstants.com/media/sounds/nuh-uh-meme.mp3" },
  { emoji: '🔊', label: "Звук фотоаппарата", file: "https://www.myinstants.com/media/sounds/zvuk-fotoapparata.mp3" },
  { emoji: '🌀', label: "meme man sam", file: "https://www.myinstants.com/media/sounds/and-his-name-is-john-cena-1_1.mp3" },
  { emoji: '🔊', label: "Chalti Firti Cocaine ...", file: "https://www.myinstants.com/media/sounds/chalti-firti-cocaine.mp3" },
  { emoji: '🔊', label: "Akhhhh...", file: "https://www.myinstants.com/media/sounds/akhhhh.mp3" },
  { emoji: '🌀', label: "PUMPKIN MEME", file: "https://www.myinstants.com/media/sounds/pumpkin-meme.mp3" },
  { emoji: '🔊', label: "É um Real a Palma da Banana", file: "https://www.myinstants.com/media/sounds/e-um-real-a-palma-da-banana.mp3" },
  { emoji: '🌀', label: "gaogamer12 meme", file: "https://www.myinstants.com/media/sounds/roblox-death-sound_1_7QU3n8P.mp3" },
  { emoji: '🌀', label: "wake me up meme", file: "https://www.myinstants.com/media/sounds/aud-20151122-wa0000.mp3" },
  { emoji: '🌀', label: "Chicos estoy comiendo mortadela meme", file: "https://www.myinstants.com/media/sounds/chicos-estoy-comiendo-mortadela-meme.mp3" },
  { emoji: '🌀', label: "anime meme suka blyat", file: "https://www.myinstants.com/media/sounds/nouveau-projet.mp3" },
  { emoji: '🌀', label: "mr-beast-phonk-meme.mp3", file: "https://www.myinstants.com/media/sounds/mr-beast-phonk-meme-mp3.mp3" },
  { emoji: '🐶', label: "Dog laughing meme form TikTok", file: "https://www.myinstants.com/media/sounds/dog-laughing-meme-form-tiktok.mp3" },
  { emoji: '🌀', label: "Blue lobster meme", file: "https://www.myinstants.com/media/sounds/blue-lobster-meme.mp3" },
  { emoji: '🌀', label: "Hello!!! Meme", file: "https://www.myinstants.com/media/sounds/hello-meme.mp3" },
  { emoji: '😂', label: "goofy ahh laugh meme", file: "https://www.myinstants.com/media/sounds/goofy-ahh-laugh-meme.mp3" },
  { emoji: '🔊', label: "Skill Issue Halo Announcer", file: "https://www.myinstants.com/media/sounds/skill-issue-halo-announcer.mp3" },
  { emoji: '🔊', label: "i was the knight in shining armor in your movie", file: "https://www.myinstants.com/media/sounds/i-was-the-knight-in-shining-armor-in-your-movie.mp3" },
  { emoji: '🔊', label: "Calma aí calabreso (Davi)", file: "https://www.myinstants.com/media/sounds/calma-ai-calabreso-davi.mp3" },
  { emoji: '🌀', label: "ricardo meme remix", file: "https://www.myinstants.com/media/sounds/halogen-u-got-that-10-sec.mp3" },
  { emoji: '🔊', label: "let him cook now", file: "https://www.myinstants.com/media/sounds/let-him-cook-now.mp3" },
  { emoji: '🚨', label: "Danger Siren Alarm", file: "https://www.myinstants.com/media/sounds/danger-siren-alarm_BfknMds.mp3" },
  { emoji: '🔊', label: "Toyota", file: "https://www.myinstants.com/media/sounds/toyota-meme.mp3" },
  { emoji: '🌀', label: "Russian meme", file: "https://www.myinstants.com/media/sounds/russian-meme.mp3" },
  { emoji: '🌀', label: "Risa de bebe meme", file: "https://www.myinstants.com/media/sounds/risa-de-bebe-meme.mp3" },
  { emoji: '🌀', label: "meme violin (sad violin)", file: "https://www.myinstants.com/media/sounds/meme-violin-sad-violin.mp3" },
  { emoji: '🌀', label: "meme violin (sad violin)", file: "https://www.myinstants.com/media/sounds/meme-violin-sad-violin.mp3" },
  { emoji: '🔊', label: "olha o relampago", file: "https://www.myinstants.com/media/sounds/olha-o-relampago.mp3" },
  { emoji: '🐶', label: "What da dog doin?", file: "https://www.myinstants.com/media/sounds/what-the-dog-doing-vine.mp3" },
  { emoji: '🔊', label: "I'm Going to Kill You, And then Kill you again.", file: "https://www.myinstants.com/media/sounds/final_5f99b14b144d4b004b4e5eac_638028.mp3" },
  { emoji: '🔊', label: "шойгу герасимов *отрыжка*", file: "https://www.myinstants.com/media/sounds/shoigu-gerasimov-otryzhka.mp3" },
  { emoji: '🔊', label: "Doraemon puerta mágica", file: "https://www.myinstants.com/media/sounds/doraemon-puerta-magica.mp3" },
  { emoji: '🔊', label: "CONCHTUMARE!!", file: "https://www.myinstants.com/media/sounds/conchetumare_Wv0iiaP.mp3" },
  { emoji: '🔊', label: "No No Square (VR Chat)", file: "https://www.myinstants.com/media/sounds/no-no-square-audio.mp3" },
  { emoji: '🔊', label: "I like your cut, 'G'! (revisited)", file: "https://www.myinstants.com/media/sounds/i-like-your-cut-g-revisited.mp3" },
  { emoji: '🔊', label: "EAGLE EARRAPE", file: "https://www.myinstants.com/media/sounds/eagle-earrape.mp3" },
  { emoji: '😱', label: "The Rake Scream", file: "https://www.myinstants.com/media/sounds/the-rake-scream.mp3" },
  { emoji: '🌀', label: "Illuminati Confirmed Meme", file: "https://www.myinstants.com/media/sounds/x-files-theme-song-copy_dLYAyUk.mp3" },
  { emoji: '😂', label: "Lol Meme", file: "https://www.myinstants.com/media/sounds/lol_ZtLafxH.mp3" },
  { emoji: '🌀', label: "fortunate son meme", file: "https://www.myinstants.com/media/sounds/fortunate_son-mp3cut.mp3" },
  { emoji: '🔊', label: "ich bins tim", file: "https://www.myinstants.com/media/sounds/bamm-ich-bins-tim.mp3" },
  { emoji: '🔊', label: "Freddy beatbox", file: "https://www.myinstants.com/media/sounds/freddy-beatbox.mp3" },
  { emoji: '🔊', label: "Bro que buena información ( Quevedo)", file: "https://www.myinstants.com/media/sounds/bro-que-buena-informacion-quevedo.mp3" },
  { emoji: '🔊', label: "Hell yeeeah", file: "https://www.myinstants.com/media/sounds/hell-yeeeah.mp3" },
  { emoji: '🎶', label: "Glass breaking sound effect", file: "https://www.myinstants.com/media/sounds/glass-breaking-sound-effect_wLZSIYn.mp3" },
  { emoji: '🔊', label: "nuh uh", file: "https://www.myinstants.com/media/sounds/nuh-uh_lKz6ns0.mp3" },
  { emoji: '🌀', label: "meme do nobru apelão", file: "https://www.myinstants.com/media/sounds/meme-do-nobru.mp3" },
  { emoji: '😂', label: "Trololllooo Song", file: "https://www.myinstants.com/media/sounds/trollolo.mp3" },
  { emoji: '🆘', label: "I'm dying help me", file: "https://www.myinstants.com/media/sounds/im-dying-help-me-sound-effect.mp3" },
  { emoji: '🌀', label: "Mario reacts to a spicy meme", file: "https://www.myinstants.com/media/sounds/sm64_mario_oof_jCpnBTB.mp3" },
  { emoji: '🔊', label: "Hawk Tuah", file: "https://www.myinstants.com/media/sounds/hawk-tuah.mp3" },
  { emoji: '🌀', label: "Shooting Stars Meme", file: "https://www.myinstants.com/media/sounds/fat-man-does-amazing-dive-shooting-stars_2.mp3" },
  { emoji: '🔊', label: "optimum pride", file: "https://www.myinstants.com/media/sounds/optimum-pride.mp3" },
  { emoji: '🔊', label: "turi ip ip ip", file: "https://www.myinstants.com/media/sounds/turi-ip-ip-ip.mp3" },
  { emoji: '🔊', label: "Пасхалко Эщкере 1488", file: "https://www.myinstants.com/media/sounds/paskhalko-eshchkere-1488.mp3" },
  { emoji: '🔊', label: "Сидим не рыпаемся", file: "https://www.myinstants.com/media/sounds/sidim-ne-rypaemsia.mp3" },
  { emoji: '🔊', label: "neco-arc dori", file: "https://www.myinstants.com/media/sounds/neco-arc-dori.mp3" },
  { emoji: '🔊', label: "manoel gomes parabens", file: "https://www.myinstants.com/media/sounds/manoel-gomes-parabens.mp3" },
  { emoji: '🔊', label: "The ting go.. skrrra pap pap k", file: "https://www.myinstants.com/media/sounds/the-ting-go.mp3" },
  { emoji: '🔊', label: "Bailalo rocky", file: "https://www.myinstants.com/media/sounds/bailalo-rocky.mp3" },
  { emoji: '😱', label: "screaming emoji meme", file: "https://www.myinstants.com/media/sounds/screaming-emoji-meme.mp3" },
  { emoji: '🔊', label: "ESTE SUCESO", file: "https://www.myinstants.com/media/sounds/este-suceso.mp3" },
  { emoji: '🌀', label: "Meme's Phone", file: "https://www.myinstants.com/media/sounds/suoneria-mp3cut.mp3" },
  { emoji: '🔊', label: "Фуфелшмерц Пакостин Корпорейтееед", file: "https://www.myinstants.com/media/sounds/fufelshmerts-pakostin-korporeiteeed.mp3" },
  { emoji: '🌀', label: "kratos falling meme (dream on)", file: "https://www.myinstants.com/media/sounds/kratos-falling-meme-dream-on.mp3" },
  { emoji: '🎶', label: "fail meme song", file: "https://www.myinstants.com/media/sounds/meme-song.mp3" },
  { emoji: '🔊', label: "Nhạc xổ số", file: "https://www.myinstants.com/media/sounds/nhac-xo-so.mp3" },
  { emoji: '🌀', label: "karbonat erol meme", file: "https://www.myinstants.com/media/sounds/karbonat-erol-meme.mp3" },
  { emoji: '🔊', label: "Mama F***er", file: "https://www.myinstants.com/media/sounds/mama-fck1.mp3" },
  { emoji: '🔊', label: "Mamma Mia Marcello", file: "https://www.myinstants.com/media/sounds/mamma-mia-marcello.mp3" },
  { emoji: '🌀', label: "xue hua piao piao bei feng xiao xiao meme", file: "https://www.myinstants.com/media/sounds/xue-hua-piao-piao_FOynuVG.mp3" },
  { emoji: '🔊', label: "Empanadas - Dross", file: "https://www.myinstants.com/media/sounds/ojhemaflk-omsawt-online-audio-converter.mp3" },
  { emoji: '🔊', label: "there you are you little shit", file: "https://www.myinstants.com/media/sounds/jettlastkill2.mp3" },
  { emoji: '🔊', label: "Lá ele mil vezes", file: "https://www.myinstants.com/media/sounds/la-ele-mil-vezes.mp3" },
  { emoji: '🔊', label: "Je propose une branlette collective", file: "https://www.myinstants.com/media/sounds/je-propose-une-branlette-collective.mp3" },
  { emoji: '🌀', label: "oh my pc meme", file: "https://www.myinstants.com/media/sounds/oh-my-pc-meme.mp3" },
  { emoji: '🔊', label: "Я твоего деда нахуй нахуй посадил", file: "https://www.myinstants.com/media/sounds/ia-tvoego-deda-nakhui-nakhui-posadil.mp3" },
  { emoji: '🔊', label: "Boliviano - Gaspi", file: "https://www.myinstants.com/media/sounds/y2mate_7GF5HwI.mp3" },
  { emoji: '🌀', label: "grito meme", file: "https://www.myinstants.com/media/sounds/cat-screams-like-a-grown-man.mp3" },
  { emoji: '🔊', label: "DJ Stop", file: "https://www.myinstants.com/media/sounds/dj-stop.mp3" },
  { emoji: '🔊', label: "нихуя себе", file: "https://www.myinstants.com/media/sounds/new-project_DswLARH.mp3" },
  { emoji: '🔊', label: "うんち！", file: "https://www.myinstants.com/media/sounds/unchi.mp3" },
  { emoji: '🔊', label: "Hot hot hot hot (South Park)", file: "https://www.myinstants.com/media/sounds/hot-hot-hot-hot.mp3" },
  { emoji: '🎶', label: "Gangsters Paradise Meme Sound", file: "https://www.myinstants.com/media/sounds/video0_yI8sAjg.mp3" },
  { emoji: '🔊', label: "KNOCK KNOCK MF ITS UNITED STATES OF AMERICA", file: "https://www.myinstants.com/media/sounds/knock-knock-mf-its-united-states-of-america.mp3" },
  { emoji: '🔊', label: "РЕБЯТА ТАМ НЛО", file: "https://www.myinstants.com/media/sounds/rebiata-tam-nlo.mp3" },
  { emoji: '🌀', label: "Why Why WHYYYYYYY -Preacher Meme", file: "https://www.myinstants.com/media/sounds/why-meme.mp3" },
  { emoji: '🌀', label: "Get Out Meme", file: "https://www.myinstants.com/media/sounds/get-out-meme.mp3" },
  { emoji: '🔊', label: "ugh fine, I guess you are my little pogchamp", file: "https://www.myinstants.com/media/sounds/ugh-fine-i-guess-you-are-my-little-pogchamp.mp3" },
  { emoji: '🌀', label: "Dank Meme", file: "https://www.myinstants.com/media/sounds/2016-08-26-1930-49.mp3" },
  { emoji: '🔔', label: "Old Church Bell Meme", file: "https://www.myinstants.com/media/sounds/old-church-bell-meme.mp3" },
  { emoji: '🔊', label: "RickY54", file: "https://www.myinstants.com/media/sounds/rick-astley-never-gonna-give-you-up-chorus-1-audiotrimmer.mp3" },
  { emoji: '🔊', label: "ümidi noluyo lan", file: "https://www.myinstants.com/media/sounds/umidi-noluyo-lan.mp3" },
  { emoji: '🔊', label: "Лучше иметь друга", file: "https://www.myinstants.com/media/sounds/luchshe-imet-druga_xCZYGQu.mp3" },
  { emoji: '🔊', label: "eu tenho probleminha fallen", file: "https://www.myinstants.com/media/sounds/y2mate-mp3cut_UiukPeR.mp3" },
  { emoji: '🌀', label: "Metal pipe meme but louder", file: "https://www.myinstants.com/media/sounds/metal-pipe-meme-but-louder.mp3" },
  { emoji: '🌀', label: "niko niko meme", file: "https://www.myinstants.com/media/sounds/tmp46hceynw.mp3" },
  { emoji: '🌀', label: "No Spider meme", file: "https://www.myinstants.com/media/sounds/no-spider-meme.mp3" },
  { emoji: '🔊', label: "Now that's a lot of damage", file: "https://www.myinstants.com/media/sounds/thats-a-lot-of-damage_f0qw5B7.mp3" },
  { emoji: '🌀', label: "Plankton Meme", file: "https://www.myinstants.com/media/sounds/plankton-meme.mp3" },
  { emoji: '🔊', label: "KÖFTE - XATAR", file: "https://www.myinstants.com/media/sounds/kofte-spie.mp3" },
  { emoji: '🌀', label: "The Nice Meme Button", file: "https://www.myinstants.com/media/sounds/nice-meem.MP3" },
  { emoji: '🎶', label: "sus among us sound", file: "https://www.myinstants.com/media/sounds/sus_5644vtL.mp3" },
  { emoji: '🔊', label: "black suit spider man", file: "https://www.myinstants.com/media/sounds/black-suit-spider-man.mp3" },
  { emoji: '🌀', label: "Tralalero Tralala Meme", file: "https://www.myinstants.com/media/sounds/tralalero-tralala-meme_R8mqoQo.mp3" },
  { emoji: '🐶', label: "which bomboclaat dog i am", file: "https://www.myinstants.com/media/sounds/which-bomboclaat-dog-i-am.mp3" },
  { emoji: '🐶', label: "DogWaterFull", file: "https://www.myinstants.com/media/sounds/final_601b29f38f209800d33f61f5_812970-online-audio-converter.mp3" },
  { emoji: '🐱', label: "discord nofications", file: "https://www.myinstants.com/media/sounds/discord-nofications.mp3" },
  { emoji: '🌀', label: "metal pipe fall meme", file: "https://www.myinstants.com/media/sounds/metal-pipe-fall-meme.mp3" },
  { emoji: '😱', label: "Kid Screaming Meme meme", file: "https://www.myinstants.com/media/sounds/kid-screaming-meme-meme.mp3" },
  { emoji: '🌀', label: "Metal pipe meme", file: "https://www.myinstants.com/media/sounds/metal-pipe-meme_r77fH3y.mp3" },
  { emoji: '🔊', label: "Baby launghing bass boosted", file: "https://www.myinstants.com/media/sounds/baby-launghing-bass-boosted.mp3" },
  { emoji: '📯', label: "MLG AIRHORN! :D", file: "https://www.myinstants.com/media/sounds/airhorn_QlBB6XN.mp3" },
  { emoji: '🔊', label: "WHEN THE IMPOSTER IS SUS!", file: "https://www.myinstants.com/media/sounds/when-the-imposter-is-sus-beatbox-meme-y2mm.mp3" },
  { emoji: '🔊', label: "Why are you Geh?", file: "https://www.myinstants.com/media/sounds/why-are-you-geh.mp3" },
  { emoji: '🔊', label: "WOAH YANKEE WITH NO BRIM", file: "https://www.myinstants.com/media/sounds/yankee-with-no-brim-mp3cut.mp3" },
  { emoji: '🔊', label: "Chui", file: "https://www.myinstants.com/media/sounds/chui_dauEqBo.mp3" },
  { emoji: '🔊', label: "пятерка упал в бездну", file: "https://www.myinstants.com/media/sounds/piaterka-upal-v-bezdnu_WxV5k5O.mp3" },
  { emoji: '🎶', label: "pablo meme song", file: "https://www.myinstants.com/media/sounds/pablo-meme-song.mp3" },
  { emoji: '🌀', label: "Crying Black Dude MEME", file: "https://www.myinstants.com/media/sounds/crying-black-dude-meme.mp3" },
  { emoji: '🔊', label: "Ты педик а я гомик", file: "https://www.myinstants.com/media/sounds/ty-pedik-a-ia-gomik.mp3" },
  { emoji: '🌀', label: "The meme of many memes", file: "https://www.myinstants.com/media/sounds/and-his-name-is-fart.mp3" },
  { emoji: '🎶', label: "low quality tutorial music meme", file: "https://www.myinstants.com/media/sounds/low-quality-tutorial-music-meme.mp3" },
  { emoji: '🔊', label: "i just lost my dawg", file: "https://www.myinstants.com/media/sounds/i-just-lost-my-dawg_2DBOI7e.mp3" },
  { emoji: '🔊', label: "You Are My sunshine Dark Lebron James", file: "https://www.myinstants.com/media/sounds/you-are-my-sunshine-dark-lebron-james.mp3" },
  { emoji: '🔊', label: "si pinche prieto", file: "https://www.myinstants.com/media/sounds/si-pinche-prieto.mp3" },
  { emoji: '🔊', label: "Nooooooooob", file: "https://www.myinstants.com/media/sounds/noob_NLwTWAV.mp3" },
  { emoji: '🔊', label: "enjoy mario's agony", file: "https://www.myinstants.com/media/sounds/tmpcoj3v_01_0TBRB2b.mp3" },
  { emoji: '🔊', label: "うわっ、前から車が！！", file: "https://www.myinstants.com/media/sounds/uwatsu-qian-karache-ga.mp3" },
  { emoji: '🔊', label: "Mundial Ronaldinho Soccer 64", file: "https://www.myinstants.com/media/sounds/mundial-ronaldinho-soccer-64.mp3" },
  { emoji: '🔊', label: "Still Dre - Dr. Dre", file: "https://www.myinstants.com/media/sounds/still-dre_94l4wpj.mp3" },
  { emoji: '🌀', label: "Meme Snoop", file: "https://www.myinstants.com/media/tmpv1j67tyy.mp3" },
  { emoji: '🌀', label: "Meme money", file: "https://www.myinstants.com/media/shane-mcmahon-here-comes-the-money-entrance-theme-mp3cut_zYoMFim.mp3" },
  { emoji: '🔊', label: "'Wow!' (anime voice accent)", file: "https://www.myinstants.com/media/sounds/wow-anime-voice-accent.mp3" },
  { emoji: '🔊', label: "Hello moto", file: "https://www.myinstants.com/media/sounds/hello-moto-sound-notification.mp3" },
  { emoji: '🌀', label: "Stop The cap Meme", file: "https://www.myinstants.com/media/sounds/final_5f458f223c6f0b0015b3382c_910180.mp3" },
  { emoji: '🌀', label: "EA Sports Meme", file: "https://www.myinstants.com/media/sounds/ea-sports-meme-eeee_xHt17Ki.mp3" },
  { emoji: '🔊', label: "BORA SOLTE MINHA CAMISA VOZES", file: "https://www.myinstants.com/media/sounds/bora-solte-minha-camisa-vozes.mp3" },
  { emoji: '🎶', label: "tutorial music meme", file: "https://www.myinstants.com/media/sounds/tutorial-music-meme.mp3" },
  { emoji: '🌀', label: "Chipi Chapa meme", file: "https://www.myinstants.com/media/sounds/chipi-chapa-meme.mp3" },
  { emoji: '🔊', label: "Who invited this kid?", file: "https://www.myinstants.com/media/sounds/video0-1-online-audio-converter_2i1mcmV.mp3" },
  { emoji: '🔊', label: "Yang semangat dong", file: "https://www.myinstants.com/media/sounds/yang-semangat-dong.mp3" },
  { emoji: '🔊', label: "Nossa esturado seu madruga", file: "https://www.myinstants.com/media/sounds/nossa-esturado-seu-madruga.mp3" },
  { emoji: '🌀', label: "A pia ta cheia de louça meme", file: "https://www.myinstants.com/media/sounds/a-pia-ta-cheia-de-louca-meme.mp3" },
  { emoji: '🔊', label: "Antes que eu fico bêbado", file: "https://www.myinstants.com/media/sounds/antes-que-eu-fico-bebado.mp3" },
  { emoji: '🔊', label: "Слушай, а ловко ты это придумал", file: "https://www.myinstants.com/media/sounds/dobrynya_lovko_ty_eto_pridumal.mp3" },
  { emoji: '🌀', label: "Ocean meme", file: "https://www.myinstants.com/media/sounds/ocean-meme.mp3" },
  { emoji: '🔊', label: "HELLO MOTO ESTOURADO", file: "https://www.myinstants.com/media/sounds/hello-moto-estourado.mp3" },
  { emoji: '🔊', label: "Paperissima sprint", file: "https://www.myinstants.com/media/sounds/paperissima-sprint.mp3" },
  { emoji: '🌀', label: "man shut yo gah damn meme", file: "https://www.myinstants.com/media/sounds/man-shut-yo-gah-damn-meme.mp3" },
  { emoji: '🔊', label: "Talking Benxspeed", file: "https://www.myinstants.com/media/sounds/talking-benxspeed.mp3" },
  { emoji: '🔊', label: "correle gordo", file: "https://www.myinstants.com/media/sounds/correle-gordo-correle-gordo-mp3cut.mp3" },
  { emoji: '🌀', label: "hello it me meme", file: "https://www.myinstants.com/media/sounds/untitled_ZxWSVr8.mp3" },
  { emoji: '🔊', label: "bass boost drop!", file: "https://www.myinstants.com/media/sounds/bass-boost-drop.mp3" },
  { emoji: '🔊', label: "ehhhh eh eh eh", file: "https://www.myinstants.com/media/sounds/ehhhh-eh-eh-eh.mp3" },
  { emoji: '🌀', label: "STONKS meme", file: "https://www.myinstants.com/media/sounds/stonks_zfCZHYQ.mp3" },
  { emoji: '🔊', label: "Guitarra Humana", file: "https://www.myinstants.com/media/sounds/guitarra-humana-so-na-pisadinha-mp3cut.mp3" },
  { emoji: '🌀', label: "memes end!", file: "https://www.myinstants.com/media/sounds/meme-de-creditos-finales_q6M8iCG.mp3" },
  { emoji: '🌀', label: "Lie detector meme", file: "https://www.myinstants.com/media/sounds/lie-detector-meme.mp3" },
  { emoji: '🌀', label: "peppa pig memez", file: "https://www.myinstants.com/media/sounds/vbb.mp3" },
  { emoji: '🔊', label: "Hello everybody my name is Markiplier", file: "https://www.myinstants.com/media/sounds/hello-everybody-my-name-is-markiplier_4nI0X3d.mp3" },
  { emoji: '🌀', label: "Ew brother ew what's that brother meme", file: "https://www.myinstants.com/media/sounds/ew-brother-ew-whats-that-brother-meme.mp3" },
  { emoji: '💥', label: "Explosion meme sound effect", file: "https://www.myinstants.com/media/sounds/explosion-meme-sound-effect.mp3" },
  { emoji: '🔊', label: "je pratique la pignouf", file: "https://www.myinstants.com/media/sounds/je-pratique-la-pignouf.mp3" },
  { emoji: '👏', label: "xQc clapping", file: "https://www.myinstants.com/media/sounds/clapping-fast.mp3" },
  { emoji: '🌀', label: "Flint and steel Meme", file: "https://www.myinstants.com/media/sounds/flint-and-steel-meme_pMPGXOO.mp3" },
  { emoji: '🚗', label: "Cartoon Mr. Krab Walking", file: "https://www.myinstants.com/media/sounds/cartoon-mr-krab-walking.mp3" },
  { emoji: '🔊', label: "Something In My Ass!", file: "https://www.myinstants.com/media/sounds/something-in-my-ass_gCDhPgd.mp3" },
  { emoji: '🔊', label: "Vamo sim pô, claro", file: "https://www.myinstants.com/media/sounds/vamo-sim-po-claro.mp3" },
  { emoji: '🌀', label: "conceito estrategia meme", file: "https://www.myinstants.com/media/sounds/conceito-estrategia-meme.mp3" },
  { emoji: '🔊', label: "LEBRON", file: "https://www.myinstants.com/media/sounds/lebron.mp3" },
  { emoji: '🔊', label: "Aboba", file: "https://www.myinstants.com/media/sounds/aboba.mp3" },
  { emoji: '🔊', label: "PH intro x See you again", file: "https://www.myinstants.com/media/sounds/ph-intro-x-see-you-again.mp3" },
  { emoji: '🔊', label: "Oblivion NPC Theme", file: "https://www.myinstants.com/media/sounds/oblivion-npc-theme.mp3" },
  { emoji: '💨', label: "long wet smelly ass fart", file: "https://www.myinstants.com/media/sounds/long-wet-smelly-ass-fart.mp3" },
  { emoji: '🔊', label: "SMOKE WEEED EVERYDAY", file: "https://www.myinstants.com/media/sounds/snoop-dogg-smoke-weed-everyday_cDbMNNz.mp3" },
  { emoji: '🌀', label: "Fnaf meme Har Har", file: "https://www.myinstants.com/media/sounds/fnaf-meme-har-har.mp3" },
  { emoji: '🔊', label: "Yodel Goofy", file: "https://www.myinstants.com/media/sounds/eene-yodel-goofy.mp3" },
  { emoji: '😱', label: "horror scream high quality", file: "https://www.myinstants.com/media/sounds/horror-scream-high-quality.mp3" },
  { emoji: '🎶', label: "Lava Chiken Full Song from A minecraft movie", file: "https://www.myinstants.com/media/sounds/lava-chiken-full-song-from-a-minecraft-movie.mp3" },
  { emoji: '🌀', label: "'What'meme", file: "https://www.myinstants.com/media/sounds/what_JOcN7Y8.mp3" },
  { emoji: '🧟', label: "plants vs zombies theme BASS BOOSTED", file: "https://www.myinstants.com/media/sounds/plants-vs-zombies-theme-bass-boosted.mp3" },
  { emoji: '🌀', label: "Quack Meme", file: "https://www.myinstants.com/media/sounds/quack-meme.mp3" },
  { emoji: '🌀', label: "NO, Meme", file: "https://www.myinstants.com/media/sounds/no-meme.mp3" },
  { emoji: '🎶', label: "French music for google translate meme", file: "https://www.myinstants.com/media/sounds/french-music-for-google-translate-meme.mp3" },
  { emoji: '🔊', label: "I loveee - Repo", file: "https://www.myinstants.com/media/sounds/i-loveee-repo.mp3" },
  { emoji: '🌀', label: "are vedya sachin tendulkar meme", file: "https://www.myinstants.com/media/sounds/are-vedya-sachin-tendulkar-meme.mp3" },
  { emoji: '🔊', label: "LWIAY intro", file: "https://www.myinstants.com/media/sounds/lwaiy.mp3" },
  { emoji: '🔊', label: "Feuball Junge, BAM!", file: "https://www.myinstants.com/media/sounds/feuball-junge-bam.mp3" },
  { emoji: '🔊', label: "Meu Deus, Meu Senhor", file: "https://www.myinstants.com/media/sounds/meu-deus-meu-senhor.mp3" },
  { emoji: '🌀', label: "Bone crack meme", file: "https://www.myinstants.com/media/sounds/bone-crack-meme.mp3" },
  { emoji: '🌀', label: "heads will roll meme remix", file: "https://www.myinstants.com/media/sounds/edit_sEoaCDA.mp3" },
  { emoji: '🐶', label: "Meme Snoop Dogg", file: "https://www.myinstants.com/media/tmpktrnct0r.mp3" },
  { emoji: '🎶', label: "Doom Music", file: "https://www.myinstants.com/media/sounds/doom-music.mp3" },
  { emoji: '🐤', label: "Chick Fila HELP ME HELLLLP (just help)", file: "https://www.myinstants.com/media/sounds/chick-fila-help-me-hellllp-just-help.mp3" },
  { emoji: '🔊', label: "Ezi kuzi ciye te", file: "https://www.myinstants.com/media/sounds/ezi-kuzi-ciye-te.mp3" },
  { emoji: '🔊', label: "Chupa-me a Piça - CSGAPPY", file: "https://www.myinstants.com/media/sounds/chupa-me-a-pica-csgappy.mp3" },
  { emoji: '🌀', label: "Memez.......", file: "https://www.myinstants.com/media/sounds/implayingminecraft_hxmKmxU.mp3" },
  { emoji: '🔊', label: "Oh Hell Nononoo", file: "https://www.myinstants.com/media/sounds/oh-hell-no_aQX7VTp.mp3" },
  { emoji: '🎶', label: "Minecraft Cave Sound 5", file: "https://www.myinstants.com/media/sounds/minecraft-cave-sound-5.mp3" },
  { emoji: '🔊', label: "Pokimane", file: "https://www.myinstants.com/media/sounds/pokimane.mp3" },
  { emoji: '🌀', label: "WOAHWOAHWOAH (meme)", file: "https://www.myinstants.com/media/sounds/woahwoahwoahwoah.mp3" },
  { emoji: '🌀', label: "outro meme", file: "https://www.myinstants.com/media/sounds/outro-meme.mp3" },
  { emoji: '🌀', label: "red circle meme", file: "https://www.myinstants.com/media/sounds/red-circle-meme.mp3" },
  { emoji: '🌀', label: "transformation meme", file: "https://www.myinstants.com/media/sounds/youre-a-stone-luigi.mp3" },
  { emoji: '🔊', label: "Ora Ora Ora", file: "https://www.myinstants.com/media/sounds/ora-sound-effect_oxkoqWC.mp3" },
  { emoji: '🔊', label: "Llegue de la barbería", file: "https://www.myinstants.com/media/sounds/llegue-de-la-barberia.mp3" },
  { emoji: '😱', label: "Disappear Scream", file: "https://www.myinstants.com/media/sounds/disappear-scream.mp3" },
  { emoji: '🎶', label: "Scary sound (from void memes)", file: "https://www.myinstants.com/media/sounds/void_2.mp3" },
  { emoji: '🔊', label: "Smash everyone joins", file: "https://www.myinstants.com/media/sounds/everyone-joins-the-battle-template-1.mp3" },
  { emoji: '🔊', label: "GG'S BRO! Monrgaal", file: "https://www.myinstants.com/media/sounds/ggs-bro.mp3" },
  { emoji: '🌀', label: "Im in danger meme (Simpsons)", file: "https://www.myinstants.com/media/sounds/im-in-danger-meme-template.mp3" },
  { emoji: '🔊', label: "Preto não quero não", file: "https://www.myinstants.com/media/sounds/preto-nao-quero-nao_knc0nCH.mp3" },
  { emoji: '🔊', label: "Nyanyanyanyanyanyanya", file: "https://www.myinstants.com/media/sounds/nyan_cat_compressed.mp3" },
  { emoji: '🌀', label: "Meme End", file: "https://www.myinstants.com/media/sounds/meme-end.mp3" },
  { emoji: '📯', label: "lit air horn meme", file: "https://www.myinstants.com/media/sounds/mlg-airhorn_e7Z1Lfs.mp3" },
  { emoji: '🔊', label: "fnaf2 ambience", file: "https://www.myinstants.com/media/sounds/fnaf2-ambience.mp3" },
  { emoji: '🔊', label: "İMPARATOR", file: "https://www.myinstants.com/media/sounds/imparator.mp3" },
  { emoji: '🚗', label: "​compramos carros y camionetas viejas para", file: "https://www.myinstants.com/media/sounds/yt1s_yaOypuJ.mp3" },
  { emoji: '🔊', label: "макан лучший репер", file: "https://www.myinstants.com/media/sounds/makan-luchshii-reper.mp3" },
  { emoji: '🌀', label: "Berserk Skeleton Meme", file: "https://www.myinstants.com/media/sounds/berserk-skeleton-meme.mp3" },
  { emoji: '🐶', label: "butter dog", file: "https://www.myinstants.com/media/sounds/megumins.mp3" },
  { emoji: '🌀', label: "The boys meme Tik tok", file: "https://www.myinstants.com/media/sounds/the-boys-meme-tik-tok.mp3" },
  { emoji: '😂', label: "Dah Yatim Goblok Main Ling Kek Tolol Anjing", file: "https://www.myinstants.com/media/sounds/dah-yatim-goblok-main-ling-kek-tolol-anjing.mp3" },
  { emoji: '💨', label: "Fart Meme", file: "https://www.myinstants.com/media/sounds/frout.mp3" },
  { emoji: '🔊', label: "POKEMON ( German )", file: "https://www.myinstants.com/media/sounds/pokemon-german.mp3" },
  { emoji: '🔊', label: "A-A-AND YOU FAIL", file: "https://www.myinstants.com/media/sounds/a-a-and-you-fail.mp3" },
  { emoji: '🔊', label: "Vos mères c’est des dinosaures Tk78", file: "https://www.myinstants.com/media/sounds/vos-meres-cest-des-dinosaures-tk78.mp3" },
  { emoji: '🦇', label: "MrBeast - Rap Battle Announcer", file: "https://www.myinstants.com/media/sounds/mrbeast-rap-battle-announcer.mp3" },
  { emoji: '🎶', label: "1738 song", file: "https://www.myinstants.com/media/sounds/1738-song.mp3" },
  { emoji: '🔊', label: "Malupiton ARAY KO!!", file: "https://www.myinstants.com/media/sounds/malupiton-aray-ko.mp3" },
  { emoji: '🔊', label: "let her go by passenger", file: "https://www.myinstants.com/media/sounds/let-her-go-meme.mp3" },
  { emoji: '🎶', label: "Kahoot Lobby Music", file: "https://www.myinstants.com/media/sounds/kahoot-lobby-music.mp3" },
  { emoji: '🎶', label: "rodrigo faro sound", file: "https://www.myinstants.com/media/sounds/rodrigo-faro-sound.mp3" },
  { emoji: '🌀', label: "Directed by Robert B. Weide- theme meme", file: "https://www.myinstants.com/media/sounds/directed-by-robert-b-weide-theme-meme.mp3" },
  { emoji: '🌀', label: "kratos-falling meme", file: "https://www.myinstants.com/media/sounds/kratos-falling-meme.mp3" },
  { emoji: '🚓', label: "POLICE I SWEAR TO GOD", file: "https://www.myinstants.com/media/sounds/police-i-swear-to-god.mp3" },
  { emoji: '🔊', label: "Re: Zero - uueEEhuuuuhhhhhh", file: "https://www.myinstants.com/media/sounds/rezero-kara-hajimeru-isekai-seikatsu-creepy-sound_mMcw4Ln.mp3" },
];




const soundboard = document.getElementById('soundboard');
const filterInput = document.getElementById('filterInput');
let renderToken = 0;

// Make soundboard fit window and buttons scrollable
soundboard.style.maxHeight = 'calc(100vh - 110px)'; // Adjust for filter row and some margin
soundboard.style.overflowY = 'auto';
soundboard.style.display = 'grid';
soundboard.style.gridTemplateColumns = 'repeat(auto-fit, minmax(120px, 1fr))';
soundboard.style.gap = '12px';

// Create a flex row for filter and reload button
const filterRow = document.createElement('div');
filterRow.style.display = 'flex';
filterRow.style.alignItems = 'center';
filterRow.style.gap = '12px';
filterRow.style.margin = '16px 0';
filterRow.style.flexWrap = 'nowrap';
filterRow.style.alignItems = 'stretch'; // Ensure the items stretch to match height

// Move filterInput into filterRow
filterInput.parentNode.insertBefore(filterRow, filterInput);
filterRow.appendChild(filterInput);

// Add Reload Sounds button with emoji
const reloadBtn = document.createElement('button');
reloadBtn.innerHTML = '🔄';
reloadBtn.style.background = '#d32f2f';
reloadBtn.style.color = '#fff';
reloadBtn.style.border = 'none';
reloadBtn.style.borderRadius = '6px';
reloadBtn.style.cursor = 'pointer';
reloadBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
reloadBtn.style.marginLeft = 'auto';
reloadBtn.style.whiteSpace = 'nowrap';
reloadBtn.style.fontSize = '2em';
reloadBtn.style.display = 'flex';
reloadBtn.style.alignItems = 'center';
reloadBtn.style.justifyContent = 'center';
reloadBtn.style.textAlign = 'center';
setTimeout(() => {
    reloadBtn.style.height = filterInput.offsetHeight + 'px';
    reloadBtn.style.width = reloadBtn.style.height;
    reloadBtn.style.verticalAlign = 'middle'; // Align vertically
    reloadBtn.style.marginTop = getComputedStyle(filterInput).marginTop; // Match filter input margin
    reloadBtn.style.marginBottom = getComputedStyle(filterInput).marginBottom; // Match filter input margin
}, 0);
reloadBtn.onclick = () => {
    localStorage.removeItem(PLAYABLE_CACHE_KEY);
    playableCache = {};
    renderButtons(filterInput.value);
};
filterRow.appendChild(reloadBtn);

// Playability cache using localStorage
const PLAYABLE_CACHE_KEY = 'soundboardPlayableCacheV1';
let playableCache = {};
try {
    playableCache = JSON.parse(localStorage.getItem(PLAYABLE_CACHE_KEY) || '{}');
} catch (e) {
    playableCache = {};
}

function setPlayableCache(file, value) {
    playableCache[file] = value;
    localStorage.setItem(PLAYABLE_CACHE_KEY, JSON.stringify(playableCache));
}

async function isSoundPlayable(url) {
    // Use cache if available
    if (playableCache.hasOwnProperty(url)) {
        return playableCache[url];
    }
    return new Promise(resolve => {
        const audio = new Audio();
        audio.src = url;
        audio.addEventListener('canplaythrough', () => {
            setPlayableCache(url, true);
            resolve(true);
        }, { once: true });
        audio.addEventListener('error', () => {
            setPlayableCache(url, false);
            resolve(false);
        }, { once: true });
    });
}

async function renderButtons(filter = "") {
    const myToken = ++renderToken;
    soundboard.innerHTML = "";
    let btnWidth = 160, btnHeight = 120;
    if (typeof window.gridSizeIndex !== 'undefined' && window.gridSizes) {
        btnWidth = window.gridSizes[window.gridSizeIndex].w;
        btnHeight = window.gridSizes[window.gridSizeIndex].h;
    }
    soundboard.style.gridTemplateColumns = `repeat(auto-fill, ${btnWidth}px)`;
    soundboard.style.alignContent = 'start';
    soundboard.style.alignItems = 'center';
    const search = filter.trim().toLowerCase();
    const filtered = sounds.filter(sound => {
        if (!search) return true;
        return (
            sound.label.toLowerCase().includes(search) ||
            sound.emoji.toLowerCase().includes(search)
        );
    });
    for (const sound of filtered) {
        let playable = playableCache.hasOwnProperty(sound.file) ? playableCache[sound.file] : undefined;
        if (playable === undefined) {
            playable = await isSoundPlayable(sound.file);
        }
        if (myToken !== renderToken) return; // Cancel if a new render started
        if (playable) {
            const btn = document.createElement('button');
            btn.className = 'button';
            btn.style.width = btnWidth + 'px';
            btn.style.height = btnHeight + 'px';
            btn.style.margin = '0'; // Remove margin, use grid gap instead
            btn.style.display = 'flex';
            btn.style.flexDirection = 'column';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.padding = Math.round(btnHeight * 0.10) + 'px';
            btn.style.userSelect = 'none';
            // Scale emoji and label font size with button size, slightly smaller for more room
            const emojiSpan = document.createElement('span');
            emojiSpan.textContent = sound.emoji;
            emojiSpan.style.fontSize = Math.round(btnHeight * 0.42) + 'px';
            emojiSpan.style.lineHeight = '1';
            emojiSpan.style.display = 'block';
            emojiSpan.style.textAlign = 'center';
            emojiSpan.style.userSelect = 'none';
            emojiSpan.classList.add('emoji-span');
            const labelSpan = document.createElement('span');
            labelSpan.className = 'button-label';
            labelSpan.textContent = sound.label;
            labelSpan.style.fontSize = Math.round(btnHeight * 0.14) + 'px';
            labelSpan.style.lineHeight = '1.1';
            labelSpan.style.display = 'block';
            labelSpan.style.textAlign = 'center';
            labelSpan.style.userSelect = 'none';
            btn.appendChild(emojiSpan);
            btn.appendChild(labelSpan);
            btn.onclick = () => playSound(sound.file, emojiSpan);
            soundboard.appendChild(btn);
        }
    }
}


// Ensure all sounds are populated before first render
filterInput.value = '';
renderButtons();

filterInput.addEventListener('input', e => {
    renderButtons(e.target.value);
});

let currentPlaying = null;
function playSound(file, emojiSpan) {
    // Stop previous animation
    if (currentPlaying && currentPlaying.emojiSpan) {
        currentPlaying.emojiSpan.classList.remove('playing-emoji');
    }
    // file can be a local filename or a web URL
    const audio = new Audio(file);
    audio.currentTime = 0;
    audio.play();
    // Add animation class
    if (emojiSpan) {
        emojiSpan.classList.add('playing-emoji');
    }
    currentPlaying = { audio, emojiSpan };
    audio.addEventListener('ended', () => {
        if (emojiSpan) emojiSpan.classList.remove('playing-emoji');
        currentPlaying = null;
    });
}

// To add more sounds, just expand the sounds array above.
// You can use direct links to mp3 files from sites like myinstants.com.
// For best results, use direct .mp3 links.
