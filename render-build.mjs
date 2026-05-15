import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const darkCss = `html.dark-theme{color-scheme:dark;background:#080c14}html.dark-theme body{background:linear-gradient(180deg,#121b2d,#080c14 320px);color:#e8eefc}html.dark-theme .brand p,html.dark-theme .muted,html.dark-theme .small,html.dark-theme .empty{color:#a9b5c8}html.dark-theme .panel,html.dark-theme .card,html.dark-theme table{background:#111827;border-color:#263449;box-shadow:0 18px 50px rgba(0,0,0,.34)}html.dark-theme .btn,html.dark-theme input,html.dark-theme select,html.dark-theme textarea{background:#0d1422;border-color:#263449;color:#e8eefc}html.dark-theme .btn:hover{background:#162238}html.dark-theme .btn.primary{background:#2563eb;border-color:#2563eb;color:#fff}html.dark-theme .btn.danger{background:#331313;border-color:#74302b;color:#fecaca}html.dark-theme label,html.dark-theme h1,html.dark-theme h2,html.dark-theme th,html.dark-theme td,html.dark-theme .cat b{color:#e8eefc}html.dark-theme th{background:#172033;color:#dbe7f5}html.dark-theme td,html.dark-theme .cat{border-color:#233044}html.dark-theme tbody tr:hover{background:#141d2e}html.dark-theme .track{background:#1f2a3d}html.dark-theme .tag.ok{background:#10264b;color:#93c5fd}html.dark-theme .tag.plan{background:#33260c;color:#fbbf24}html.dark-theme .tag.in{background:#06291e;color:#34d399}html.dark-theme .tag.out{background:#331313;color:#fca5a5}`;

const themeScript = `const THEME_KEY='fc.theme.v1';function applyTheme(t){const dark=t==='dark';document.documentElement.classList.toggle('dark-theme',dark);localStorage.setItem(THEME_KEY,dark?'dark':'light');const b=document.getElementById('themeBtn');if(b){b.textContent=dark?'Tela clara':'Tela preta';b.title=dark?'Usar tela clara':'Usar tela preta'}}function toggleTheme(){applyTheme(document.documentElement.classList.contains('dark-theme')?'light':'dark')}applyTheme(localStorage.getItem(THEME_KEY)==='dark'?'dark':'light');const bindOriginal=bind;bind=function(){bindOriginal();const b=document.getElementById('themeBtn');if(b)b.onclick=toggleTheme};`;

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });

let html = await readFile("index.html", "utf8");
html = html.replace("</style>", `${darkCss}</style>`);
html = html.replace("<button class='btn' id='importBtn'>", "<button class='btn' id='themeBtn' title='Usar tela preta'>Tela preta</button><button class='btn' id='importBtn'>");
html = html.replace("init()</script>", `${themeScript}init()</script>`);

await writeFile("dist/index.html", html, "utf8");
await copyFile("README.md", "dist/README.md");

console.log("Build concluido em dist com tema escuro.");
