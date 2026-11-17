/* =========================================================
   Colibrí Consultoría · Misión Eje Cafetero 2026
   Todo el contenido sale del Informe Final G10 y la sustentación.
   ========================================================= */
(() => {
'use strict';

/* ---------------- Íconos (trazos estilo lucide) ---------------- */
const P = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  users: '<path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20"/><circle cx="10" cy="8" r="3.5"/><path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.6a3.5 3.5 0 0 1 0 6.8"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert: '<path d="M10.3 3.9 2.4 17.5A2 2 0 0 0 4.1 20.5h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V17h5v-1.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/>',
  badge: '<path d="m12 3 2.2 1.6 2.7-.2.9 2.6 2.3 1.4-.8 2.6.8 2.6-2.3 1.4-.9 2.6-2.7-.2L12 21l-2.2-1.6-2.7.2-.9-2.6-2.3-1.4.8-2.6-.8-2.6 2.3-1.4.9-2.6 2.7.2z"/><path d="m9 12 2 2 4-4"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  arrowR: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowL: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  arrowD: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8 11h8M8 14h5"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  heart: '<path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3.5A5 5 0 0 1 21 11c-2 4.6-9 9-9 9z"/><path d="M8 12h2l1-2 2 4 1-2h2"/>',
  leaf: '<path d="M5 20c0-9 6-15 15-15 0 9-5 15-14 15"/><path d="M5 20 14 11"/>',
  building: '<path d="M4 21V5l8-3v19M12 9h8v12M8 8h.01M8 12h.01M8 16h.01M16 13h.01M16 17h.01M2 21h20"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  pointer: '<path d="M9 11V5a2 2 0 0 1 4 0v5M13 10V9a2 2 0 0 1 4 0v2M17 11a2 2 0 0 1 4 0v3a7 7 0 0 1-7 7h-1a7 7 0 0 1-5.6-2.8L4.6 15a2 2 0 0 1 3-2.6L9 14"/>',
  file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
  scale: '<path d="M12 3v18M7 21h10M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
};
const ic = (n, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;
const hydrateIcons = (root = document) =>
  root.querySelectorAll('i[data-ic]').forEach(el => { el.outerHTML = ic(el.dataset.ic, el.className); });

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fmt = (v, dec = 0) => v.toLocaleString('es-CO', { minimumFractionDigits: dec, maximumFractionDigits: dec });
const initials = n => n.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('');
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   DATOS
   ========================================================= */
const CITY_COLOR = { pereira: 'var(--c-pereira)', manizales: 'var(--c-manizales)', armenia: 'var(--c-armenia)' };

const CITIES = {
  pereira: {
    name: 'Pereira', title: 'Un equipo completo y uno liviano',
    sub: 'Las 3 urgencias altas pendientes exigen 4 personas; el Equipo 9 solo tiene 3.',
    stats: [['Equipos', '8 y 9'], ['Personas', '7'], ['Edificaciones', '14 de 18'], ['Horas', '45 de 48'], ['Puntaje', '113 / 160', true]],
    teams: [
      { n: 8, full: true, h: 24, pts: 63, cost: '$2.250.000',
        members: [['Felipe Esteban Salazar', 'Geotecnia, avanzada', 1], ['Sebastian David Ortiz', 'Estructuras, inicial'], ['Victor Rodriguez', 'Civil, intermedia'], ['Andreina Espinel', 'Civil, inicial']],
        b: [['Edificio Los Pinos', 'Alta', 16, 'albergue'], ['Casa Los Cedros', 'Alta', 12], ['C.C. Las Acacias', 'Alta', 10, 'albergue'], ['Colegio Los Robles', 'Media', 10, 'albergue'], ['Colegio Los Cedros', 'Media', 10], ['Colegio El Progreso', 'Baja', 5]] },
      { n: 9, full: false, h: 21, pts: 50, cost: '$1.550.000',
        members: [['Juan Pablo Herrera', 'Estructuras, avanzada', 1], ['Olga Suarez', 'Civil, inicial'], ['Fernando Antolinez', 'Civil, inicial']],
        b: [['Edificio La Primavera', 'Media', 11], ['Edificio El Mirador', 'Media', 11], ['Casa Los Arrayanes', 'Media', 8], ['Casa Las Acacias', 'Media', 8], ['Casa Los Robles', 'Baja', 3], ['Casa Los Olivos', 'Baja', 3], ['Casa La Esperanza', 'Baja', 3], ['C.C. Los Cedros', 'Baja', 3]] },
    ],
    side: [
      { dark: true, lbl: 'Pendiente principal', big: '3 urgencias altas', p: 'Edificio Los Robles (16), Edificio El Porvenir (16) y C.C. El Mirador (10) exigen un equipo de 4 personas; el Equipo 8 ya usa sus 24 horas.' },
      { lbl: 'También queda fuera', big: '5 pts', p: 'Colegio El Mirador (urgencia baja): exige 4 personas y geotecnia.' },
      { lbl: 'Horas libres sin uso', big: '3 h', p: 'El Equipo 9 usa 21 de 24 horas, pero con 3 personas no puede atender las urgencias altas pendientes.' },
    ],
  },
  manizales: {
    name: 'Manizales', title: 'La ciudad atendida al 100 %',
    sub: 'Necesita 45 horas de inspección y sus dos equipos ofrecen 48.',
    stats: [['Equipos', '5 y 6'], ['Personas', '7'], ['Edificaciones', '13 de 13'], ['Horas', '45 de 48'], ['Puntaje', '122 / 122', true]],
    teams: [
      { n: 5, full: true, h: 24, pts: 66, cost: '$2.250.000',
        members: [['Natalia Fernanda Reyes', 'Geotecnia, avanzada', 1], ['Nicolas Eduardo Pineda', 'Estructuras, inicial'], ['Yiney Contreras', 'Civil, intermedia'], ['Silvia Plazas', 'Civil, inicial']],
        b: [['Colegio La Primavera', 'Alta', 16], ['Edificio La Aurora', 'Alta', 15], ['C.C. Los Pinos', 'Alta', 13], ['Colegio El Porvenir', 'Media', 11], ['Casa Los Nogales', 'Media', 6], ['Colegio La Colina', 'Baja', 5]] },
      { n: 6, full: false, h: 21, pts: 56, cost: '$1.550.000',
        members: [['Laura Valentina Castro', 'Estructuras, avanzada', 1], ['Adriana Pertegas', 'Civil, inicial'], ['Ronald Baez', 'Civil, inicial']],
        b: [['Casa El Encanto', 'Alta', 10], ['Casa El Paraiso', 'Alta', 10], ['Edificio Los Arrayanes', 'Media', 10], ['Edificio El Refugio', 'Media', 10], ['C.C. Los Robles', 'Media', 8], ['Edificio El Jardin', 'Baja', 5], ['Casa Las Camelias', 'Baja', 3]] },
    ],
    side: [
      { dark: true, lbl: 'Cobertura total', big: '13 de 13', p: 'Todas las edificaciones de Manizales se inspeccionan: 48 horas disponibles para 45 requeridas.' },
      { lbl: 'Cuidado compartido', big: '✓', p: 'Adriana Pertegas participa en el Equipo 6 y Ninfa Garay no, como exige la condición.' },
      { lbl: 'Productividad', big: '2,8 · 2,7', p: 'Puntos por hora de los equipos 5 y 6, por encima del promedio de la misión (2,7).' },
    ],
  },
  armenia: {
    name: 'Armenia', title: 'Un solo equipo, sin horas libres',
    sub: 'Los mínimos de cobertura ya consumen las 24 horas del Equipo 4.',
    stats: [['Equipo', '4'], ['Personas', '4'], ['Edificaciones', '7 de 9'], ['Horas', '24 de 24'], ['Puntaje', '74 / 87', true]],
    teams: [
      { n: 4, full: true, h: 24, pts: 74, cost: '$2.300.000',
        members: [['Camila Andrea Morales', 'Estructuras, avanzada', 1], ['Miguel Angel Cardenas', 'Geotecnia, inicial'], ['Andres Lara', 'Civil, intermedia'], ['Ruth Leal', 'Civil, intermedia']],
        b: [['Colegio Los Arrayanes', 'Alta', 18, 'albergue'], ['Colegio La Aurora', 'Alta', 18, 'albergue'], ['Edificio Los Olivos', 'Alta', 12], ['C.C. El Porvenir', 'Alta', 12], ['Casa La Alameda', 'Alta', 8], ['C.C. La Primavera', 'Baja', 4, 'apoyo'], ['Casa La Florida', 'Baja', 2, 'apoyo']] },
    ],
    side: [
      { dark: true, lbl: 'Albergues coordinados', big: '6 → 36 pts', p: 'Casa La Florida y C.C. La Primavera aportan 6 puntos, pero habilitan los dos colegios-albergue, los de mayor puntaje de la misión.' },
      { lbl: 'Quedan fuera', big: '13 pts', p: 'C.C. Las Palmas (media, 8 pts) y Casa El Remanso (media, 5 pts): el equipo ya usa sus 24 horas.' },
      { lbl: 'El equipo más productivo', big: '3,1 pts/h', p: '5 de sus 7 edificaciones son de urgencia alta.' },
    ],
  },
};

const CONCL = [
  { t: 'La misión es óptima: 309 puntos (83,7 %).', p: '5 equipos y 18 voluntarios inspeccionan 34 edificaciones y cumplen las 19 condiciones.', s: 3 },
  { t: 'Es factible por un margen estrecho.', p: 'La misión más barata posible cuesta $9,7 M: solo 3 % bajo el presupuesto.', s: 2 },
  { t: 'Limitan el dinero y las horas, no el talento.', p: 'Se usa el 99 % del presupuesto y 3 equipos agotan sus 24 h; sobran 12 voluntarios.', s: 2 },
  { t: 'Los mínimos de cobertura fijan el 2-2-1.', p: 'Cuestan 17 puntos, pero sin ellos Pereira se quedaría sin colegios inspeccionados.', s: 0 },
  { t: 'La deuda está en Pereira.', p: 'Recibe el 71 % de su puntaje; sus urgencias altas pendientes son un problema de capacidad.', s: 1 },
  { t: 'Pequeños aumentos bien dirigidos rinden mucho.', p: '$550.000 más dan +9,7 %; una hora diaria más da +5,8 %.', s: 4 },
];

const STEPS = ['Por qué 2-2-1', 'Lo que queda por fuera', 'El presupuesto define la misión', 'Cómo arma el modelo cada equipo', '¿Qué pasa si cambian los recursos?'];

const RECS = [
  { id: 'R1', kicker: 'Para aumentar el puntaje', title: 'Subir el presupuesto a <em>$10.550.000</em>',
    items: [['users', '<strong>Pereira pasa a tener 2 equipos completos</strong> con geotecnista; antes tenía 1 completo y 1 liviano.'],
      ['badge', '<strong>Entran</strong> Alejandro Jose Medina (geotecnia, avanzado, RT) y Santiago Andres Rojas (estructuras, inicial). <strong>Sale</strong> Juan Pablo Herrera.'],
      ['checkCircle', '<strong>Se inspeccionan</strong> Edificio Los Robles, Edificio El Porvenir y C.C. El Mirador: las 3 urgencias altas pendientes (+42 pts).'],
      ['clock', '<strong>Dejan de inspeccionarse</strong> Casa La Esperanza, Casa Los Robles, Casa Los Olivos y C.C. Los Cedros, de urgencia baja (−12 pts).']],
    delta: '+<span data-count="9.7" data-dec="1">0</span> %', dp: 'Puntaje de 309 a 339 con 5,5 % más de presupuesto.', z: 339,
    rows: [['Puntaje Z', '309', '339'], ['Urgencias altas', '13 de 16', '16 de 16'], ['Equipos de 4 en Pereira', '1', '2'], ['Puntaje de Pereira', '113 (71 %)', '143 (89 %)'], ['Edificaciones', '34', '33'], ['Costo', '$9,90 M', '$10,55 M']],
    note: 'Es el monto exacto: con menos no se atienden todas las urgencias altas y hasta $12 M el puntaje no sube más.', file: 'R1_Presupuesto.gms' },
  { id: 'R2', kicker: 'Para aumentar el puntaje', title: 'Ampliar la jornada a <em>9 horas</em>',
    items: [['clock', '<strong>Cada equipo dispone de 27 h</strong> en vez de 24. Se mantienen 5 equipos con los mismos perfiles y la distribución 2-2-1.'],
      ['checkCircle', '<strong>Pereira:</strong> el equipo completo suma C.C. El Mirador (urgencia alta, 10 pts) y cambia Colegio El Progreso por Colegio El Mirador (mismo puntaje).'],
      ['checkCircle', '<strong>Armenia:</strong> el equipo suma C.C. Las Palmas (urgencia media, 8 pts).'],
      ['alert', '<strong>Casi sin costo:</strong> lo que se paga por voluntario no depende de las horas. No recomendamos 10 h: más fatiga y riesgo de error.']],
    delta: '+<span data-count="5.8" data-dec="1">0</span> %', dp: 'Puntaje de 309 a 327 con solo $50.000 más.', z: 327,
    rows: [['Puntaje Z', '309', '327'], ['Horas por equipo', '24', '27'], ['Edificaciones', '34', '36'], ['Urgencias altas', '13 de 16', '14 de 16'], ['Puntaje de Pereira', '113 (71 %)', '123 (77 %)'], ['Puntaje de Armenia', '74 (85 %)', '82 (94 %)'], ['Costo', '$9,90 M', '$9,95 M']],
    file: 'R2_Jornada9h.gms' },
  { id: 'R1+R2', dark: true, kicker: 'El mejor resultado: personas y tiempo', title: 'Aplicar <em>R1 y R2 juntas</em>',
    items: [['users', '<strong>Pereira tiene 2 equipos completos</strong> que trabajan 26 y 27 h. Entra un geotecnista avanzado, Alejandro Jose Medina: 19 voluntarios.'],
      ['checkCircle', '<strong>Se inspeccionan las 16 urgencias altas</strong> y 37 de las 40 edificaciones.'],
      ['clock', '<strong>Solo quedan fuera</strong> Colegio El Progreso (baja), C.C. Los Cedros (baja) y Casa El Remanso (media).'],
      ['bulb', '<strong>Sin la hora extra</strong>, este puntaje exigiría $12.500.000: casi $2 M más.']],
    delta: '+<span data-count="15.2" data-dec="1">0</span> %', dp: 'Puntaje de 309 a 356 con $10.550.000.', z: 356,
    rows: [['Puntaje Z', '309', '356'], ['Edificaciones', '34', '37'], ['Urgencias altas', '13 de 16', '16 de 16'], ['Puntaje de Pereira', '113 (71 %)', '152 (95 %)'], ['Ciudad peor atendida', '71 %', '94 %'], ['Costo', '$9,90 M', '$10,55 M']],
    file: 'R1_R2_Combinadas.gms' },
  { id: 'R3', kicker: 'Para distribuir mejor los recursos', title: 'Cada ciudad con al menos el <em>75 %</em> de su puntaje',
    items: [['users', '<strong>Pereira recibe 2 equipos de 4 personas</strong> e inspecciona Edificio El Porvenir y C.C. El Mirador, dos urgencias altas.'],
      ['alert', '<strong>Manizales se queda sin geotecnista</strong> (sale Natalia Fernanda Reyes): deja C.C. Los Pinos (alta), Colegio El Porvenir y Casa Los Nogales.'],
      ['lock', '<strong>Requiere $10.250.000</strong>; con $10.000.000 la condición es infactible.'],
      ['bulb', '<strong>El precio de la equidad:</strong> 10 puntos menos en total. Sirve como regla de planeación si no se consigue R1.']],
    delta: '71 → <span data-count="83">0</span> %', dp: 'Pereira mejora; el total baja 10 puntos (−3,2 %).', z: 299, icon: 'scale',
    rows: [['Pereira', '113 (71 %)', '133 (83 %)'], ['Manizales', '122 (100 %)', '92 (75 %)'], ['Armenia', '74 (85 %)', '74 (85 %)'], ['Puntaje Z', '309', '299'], ['Urgencias altas', '13 de 16', '14 de 16'], ['Costo', '$9,90 M', '$10,25 M']],
    file: 'R3_Equidad.gms' },
  { id: 'R4', kicker: 'Para distribuir mejor los recursos', title: 'Un inicial por cada <em>avanzado</em>',
    items: [['checkCircle', '<strong>Se inspeccionan las mismas 34 edificaciones</strong>: cambian las personas, no el plan de inspección.'],
      ['badge', '<strong>Entran 4 avanzados con habilitación RT:</strong> Alejandro Jose Medina, Yanith Cuellar, Yajaira Veloza y Mariana Lopez Torres.'],
      ['users', '<strong>Entran 2 civiles intermedios:</strong> Oscar Peñaranda y Ninfa Garay, que reemplaza a Adriana Pertegas (se respeta el cuidado compartido).'],
      ['alert', '<strong>Requiere $10.200.000</strong>; con $10.000.000 esta regla baja el puntaje a 279.']],
    delta: '9 → <span data-count="6">0</span>', dp: 'voluntarios iniciales; el puntaje se mantiene en 309.', z: 309, icon: 'badge',
    rows: [['Puntaje Z', '309', '309'], ['Edificaciones', '34', '34'], ['Voluntarios iniciales', '9', '6'], ['Voluntarios avanzados', '5', '6'], ['Equipos con 2 iniciales por avanzado', '4 de 5', '0 de 5'], ['Costo', '$9,90 M', '$10,20 M']],
    file: 'R4_Acompanamiento.gms' },
];

const SCEN = [
  ['Base', 113, 122, 74, '$9,90 M'], ['R1', 143, 122, 74, '$10,55 M'], ['R2', 123, 122, 82, '$9,95 M'],
  ['R1+R2', 152, 122, 82, '$10,55 M'], ['R3', 133, 92, 74, '$10,25 M'], ['R4', 113, 122, 74, '$10,20 M'], ['Todas', 129, 122, 82, '$10,45 M'],
];

/* =========================================================
   ANIMACIONES (contadores, barras, anillos)
   ========================================================= */
function countUp(el) {
  const target = parseFloat(el.dataset.count), dec = +(el.dataset.dec || 0);
  if (reduced) { el.textContent = fmt(target, dec); return; }
  const dur = 1500, t0 = performance.now();
  cancelAnimationFrame(el._raf);
  const step = now => {
    const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(target * e, dec);
    if (k < 1) el._raf = requestAnimationFrame(step);
  };
  el._raf = requestAnimationFrame(step);
}
function play(el) {
  const all = (sel) => [...(el.matches(sel) ? [el] : []), ...el.querySelectorAll(sel)];
  all('[data-count]').forEach(countUp);
  all('[data-w]').forEach(b => { b.style.width = b.dataset.w + '%'; });
  all('[data-h]').forEach(b => { b.style.height = b.dataset.h + '%'; });
  all('[data-ring]').forEach(c => {
    const len = 2 * Math.PI * c.r.baseVal.value;
    c.style.strokeDashoffset = len * (1 - parseFloat(c.dataset.ring) / 100);
  });
  all('path.draw').forEach(p => { p.style.strokeDashoffset = 0; });
}
function resetEl(el) {
  const all = (sel) => [...(el.matches(sel) ? [el] : []), ...el.querySelectorAll(sel)];
  all('[data-count]').forEach(c => { cancelAnimationFrame(c._raf); c.textContent = fmt(0, +(c.dataset.dec || 0)); });
  all('[data-w]').forEach(b => { b.style.transition = 'none'; b.style.width = '0'; b.offsetWidth; b.style.transition = ''; });
  all('[data-h]').forEach(b => { b.style.transition = 'none'; b.style.height = '0'; b.offsetWidth; b.style.transition = ''; });
  all('[data-ring]').forEach(c => {
    const len = 2 * Math.PI * c.r.baseVal.value;
    c.style.transition = 'none'; c.style.strokeDasharray = len; c.style.strokeDashoffset = len; c.getBoundingClientRect(); c.style.transition = '';
  });
  all('path.draw').forEach(p => {
    const len = p.getTotalLength();
    p.style.transition = 'none'; p.style.strokeDasharray = len; p.style.strokeDashoffset = len; p.getBoundingClientRect();
    p.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.2,.7,.2,1)';
  });
}

const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    play(en.target);
    io.unobserve(en.target);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

/** Prepara (o reinicia) las animaciones de entrada dentro de root. */
function arm(root) {
  $$('.stagger', root).forEach(g => [...g.children].forEach((c, i) => { c.style.transitionDelay = (i * 90) + 'ms'; }));
  const targets = [...(root.matches && root.matches('.reveal, .anim') ? [root] : []), ...$$('.reveal, .anim', root)];
  targets.forEach(el => {
    io.unobserve(el);
    el.classList.remove('in');
    resetEl(el);
  });
  requestAnimationFrame(() => targets.forEach(el => io.observe(el)));
}

/* =========================================================
   TOOLTIP
   ========================================================= */
const tip = $('#tooltip');
function showTip(html, x, y) { tip.innerHTML = html; tip.style.left = x + 'px'; tip.style.top = y + 'px'; tip.classList.add('show'); }
function hideTip() { tip.classList.remove('show'); }
document.addEventListener('scroll', hideTip, { passive: true });

/* =========================================================
   MAPA DE COLOMBIA + ZOOM EJE CAFETERO
   ========================================================= */
const COL = [[-71.67,12.46],[-71.12,12.08],[-71.32,11.78],[-71.97,11.6],[-72.25,11.15],[-72.49,10.97],[-72.9,10.45],[-73.05,9.7],[-72.95,9.2],[-72.66,8.62],[-72.44,8.0],[-72.44,7.42],[-72.0,7.32],[-71.0,6.99],[-70.1,6.96],[-69.39,6.1],[-68.6,6.2],[-67.85,6.3],[-67.34,6.1],[-67.52,5.56],[-67.83,4.5],[-67.3,3.4],[-67.8,2.82],[-67.45,2.6],[-67.18,2.25],[-66.88,1.25],[-67.07,1.13],[-67.25,1.72],[-67.54,2.04],[-67.87,1.69],[-69.82,1.71],[-69.8,1.09],[-69.22,0.99],[-69.25,0.6],[-69.45,0.71],[-70.02,0.54],[-70.02,-0.19],[-69.58,-0.55],[-69.42,-1.12],[-69.89,-4.3],[-70.39,-3.77],[-70.69,-3.74],[-70.05,-2.73],[-70.81,-2.26],[-71.41,-2.34],[-71.77,-2.17],[-72.33,-2.43],[-73.07,-2.31],[-73.66,-1.26],[-74.12,-1.0],[-74.44,-0.53],[-75.11,-0.06],[-75.37,-0.15],[-75.8,0.08],[-76.29,0.42],[-76.58,0.26],[-77.42,0.4],[-77.67,0.83],[-77.86,0.81],[-78.86,1.38],[-78.99,1.69],[-78.62,1.77],[-78.66,2.27],[-78.43,2.63],[-77.93,2.7],[-77.51,3.33],[-77.13,3.85],[-77.5,4.09],[-77.31,4.67],[-77.53,5.58],[-77.32,5.85],[-77.48,6.69],[-77.88,7.22],[-77.75,7.71],[-77.43,7.64],[-77.24,7.94],[-77.47,8.52],[-77.35,8.67],[-76.84,8.64],[-76.09,9.34],[-75.67,9.44],[-75.66,9.77],[-75.48,10.62],[-74.91,11.08],[-74.28,11.1],[-74.2,11.31],[-73.41,11.23],[-72.63,11.73],[-72.24,11.96],[-71.75,12.44]];

function buildMap() {
  const k = 25.5, ox = 14, oy = 10;
  const pr = ([lon, lat]) => [(lon + 79.3) * k + ox, (12.8 - lat) * k + oy];
  const d = 'M' + COL.map(p => pr(p).map(v => v.toFixed(1)).join(',')).join('L') + 'Z';
  const [ex, ey] = pr([-75.62, 4.8]);

  // panel de zoom: 420 px por grado, centrado en (-75.6, 4.8)
  const zx = lon => 540 + (lon + 75.6) * 420, zy = lat => 240 - (lat - 4.8) * 420;
  const pts = {
    manizales: [zx(-75.52), zy(5.07), 'Equipos 5 y 6', 'Caldas'],
    pereira: [zx(-75.69), zy(4.81), 'Equipos 8 y 9', 'Risaralda'],
    armenia: [zx(-75.68), zy(4.53), 'Equipo 4', 'Quindío'],
  };
  const route = `M${pts.manizales[0]},${pts.manizales[1]} Q${pts.manizales[0] - 50},${(pts.manizales[1] + pts.pereira[1]) / 2} ${pts.pereira[0]},${pts.pereira[1]} T${pts.armenia[0]},${pts.armenia[1]}`;

  const pin = (key) => {
    const [x, y, sub, dept] = pts[key];
    return `<g class="pin" data-city="${key}" tabindex="0" role="button" aria-label="Ver ${CITIES[key].name}" style="--c:${CITY_COLOR[key]}">
      <circle class="pin-halo" cx="${x}" cy="${y}" r="40"/>
      <circle class="pin-pulse" cx="${x}" cy="${y}" r="18"/>
      <circle class="pin-core" cx="${x}" cy="${y}" r="13"/>
      <text class="pin-name" x="${x + 26}" y="${y - 2}">${CITIES[key].name.toUpperCase()}</text>
      <text class="pin-sub" x="${x + 26}" y="${y + 16}">${sub}</text>
      <text class="map-dept" x="${x + 26}" y="${y + 33}">${dept}</text>
    </g>`;
  };

  $('#mapWrap').innerHTML = `
  <svg viewBox="0 0 760 480" role="img" aria-label="Mapa de Colombia con el Eje Cafetero ampliado: Manizales, Pereira y Armenia">
    <defs>
      <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#E7E0D0"/></pattern>
      <clipPath id="panelClip"><rect x="420" y="28" width="320" height="424" rx="26"/></clipPath>
    </defs>
    <text class="map-sea" x="6" y="330">Océano</text><text class="map-sea" x="6" y="346">Pacífico</text>
    <text class="map-sea" x="16" y="58">Mar Caribe</text>
    <path class="map-land" d="${d}"/>
    <text class="map-label" x="185" y="250">COLOMBIA</text>
    <line class="map-link" x1="${ex}" y1="${ey - 16}" x2="420" y2="40"/>
    <line class="map-link" x1="${ex}" y1="${ey + 16}" x2="420" y2="440"/>
    <circle class="map-lens-pulse" cx="${ex}" cy="${ey}" r="16"/>
    <circle class="map-lens" cx="${ex}" cy="${ey}" r="16"/>
    <circle cx="${ex + 1}" cy="${ey - 6}" r="2.6" fill="${CITY_COLOR.manizales}"/>
    <circle cx="${ex - 2}" cy="${ey}" r="2.6" fill="${CITY_COLOR.pereira}"/>
    <circle cx="${ex - 2}" cy="${ey + 7}" r="2.6" fill="${CITY_COLOR.armenia}"/>
    <rect class="map-panel" x="420" y="28" width="320" height="424" rx="26"/>
    <rect x="420" y="28" width="320" height="424" rx="26" fill="url(#dots)" clip-path="url(#panelClip)"/>
    <text class="map-title" x="444" y="62">Eje Cafetero</text>
    <path class="map-route" d="${route}"/>
    ${pin('manizales')}${pin('pereira')}${pin('armenia')}
  </svg>`;

  $$('#mapWrap .pin').forEach(g => {
    g.addEventListener('click', () => selectCity(g.dataset.city, true));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectCity(g.dataset.city, true); } });
  });
}

/* =========================================================
   DETALLE DE CIUDAD (diapositivas 8, 9 y 10)
   ========================================================= */
let currentCity = null;
function teamCard(t) {
  const urg = u => `<span class="urg urg-${u.toLowerCase()}">${u}</span>`;
  return `<article class="card team-card">
    <div class="team-top"><h4>Equipo ${t.n}</h4>
      <span class="chip ${t.full ? 'chip-full' : 'chip-light'}">${t.full ? 'Completo · 4 personas' : 'Liviano · 3 personas'}</span></div>
    <p class="team-meta">${t.h} h · <strong>${t.pts} puntos</strong> · ${t.cost}</p>
    <div class="hours"><span>${t.h} de 24 h</span><div class="bar"><span style="width:${(t.h / 24) * 100}%"></span></div></div>
    <p class="subhead">Integrantes</p>
    <ul class="members">${t.members.map(([n, r, rt]) => `
      <li class="${rt ? 'rt' : ''}"><span class="mini-av">${initials(n)}</span>
        <span class="who"><strong>${n}</strong><small>${r}</small></span>${rt ? '<span class="rt-badge">RT</span>' : ''}</li>`).join('')}
    </ul>
    <p class="subhead">Edificaciones</p>
    <ul class="blist">${t.b.map(([n, u, p, tag]) => `
      <li><span class="bname">${n}${tag ? `<small class="${tag}">${tag}</small>` : ''}</span>${urg(u)}<span class="pts">${p} pts</span></li>`).join('')}
    </ul>
  </article>`;
}
function selectCity(key, scroll) {
  const c = CITIES[key];
  currentCity = key;
  $$('#mapWrap .pin').forEach(g => { g.classList.toggle('active', g.dataset.city === key); g.classList.toggle('dim', g.dataset.city !== key); });
  $$('#citySwitch button').forEach(b => b.classList.toggle('active', b.dataset.city === key));
  $$('#deployTable tbody tr').forEach(r => r.classList.toggle('active', r.dataset.city === key));
  const wide = c.teams.length === 1;
  $('#cityDetail').innerHTML = `
  <div class="city-detail" style="--city:${CITY_COLOR[key]}">
    <div class="city-head">
      <div><p class="eyebrow">${c.name}</p><h3>${c.title}</h3><p class="sub">${c.sub}</p></div>
      <div class="city-stats">${c.stats.map(([l, v, hl]) => `<div class="cstat ${hl ? 'hl' : ''}"><small>${l}</small><strong>${v}</strong></div>`).join('')}</div>
    </div>
    <div class="city-body ${wide ? 'wide' : ''}">
      <div class="teams">${c.teams.map(teamCard).join('')}</div>
      <aside class="side">${c.side.map(s => `
        <div class="card side-card ${s.dark ? 'dark' : ''}"><p class="lbl">${s.lbl}</p><p class="big">${s.big}</p><p>${s.p}</p></div>`).join('')}
      </aside>
    </div>
  </div>`;
  if (scroll) {
    const y = $('#citySwitch').getBoundingClientRect().top + scrollY - 150;
    scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  }
}

/* =========================================================
   CONCLUSIONES + ANÁLISIS (diapositivas 17 y 12–16)
   ========================================================= */
function renderConclusions() {
  $('#conclGrid').innerHTML = CONCL.map((c, i) => `
    <article class="card concl reveal">
      <span class="concl-n">${i + 1}</span>
      <h3>${c.t}</h3>
      <p>${c.p}</p>
      <button class="concl-link" data-step="${c.s}">Ver el análisis: ${STEPS[c.s]} ${ic('arrowR')}</button>
    </article>`).join('');
  $$('#conclGrid .concl-link').forEach(b => b.addEventListener('click', () => openAnalysis(+b.dataset.step, true)));
}

function stepHTML(i) {
  if (i === 0) {
    const rows = [
      ['Pereira', '2 equipos', 39, 61, 48, 71, '113 de 160 puntos', true],
      ['Manizales', '2 equipos', 25, 45, 48, 100, '122 de 122 puntos'],
      ['Armenia', '1 equipo', 24, 29, 24, 85, '74 de 87 puntos'],
    ];
    const max = 66;
    return `<h3>Por qué 2-2-1: las horas que exige cada ciudad</h3>
      <p class="sub">Comparamos las horas que piden los mínimos de cobertura y la ciudad completa con las que ofrecen sus equipos.</p>
      <div class="legend"><span><i class="sw sw-min"></i>Horas que exigen los mínimos</span><span><i class="sw sw-tot"></i>Horas para inspeccionar toda la ciudad</span><span><i class="sw sw-av"></i>Horas disponibles (24 h por equipo)</span></div>
      <div class="anim">${rows.map(([c, eq, mn, tot, av, pct, pts, warn]) => `
        <div class="hrow">
          <div class="city">${c}<small>${eq}</small></div>
          <div class="htrack">
            <div class="htot" data-w="${(tot / max) * 100}"><b>${tot} h</b></div>
            <div class="hmin" data-w="${(mn / max) * 100}">${mn} h mínimos</div>
            <div class="hav" style="left:calc(${(av / max) * 100}% - 2px)"><i>${av} h disponibles</i></div>
          </div>
          <div class="hpct ${warn ? 'warn' : ''}"><strong><span data-count="${pct}">0</span> %</strong><small>${pts}</small></div>
        </div>`).join('')}</div>
      <div class="callout">${ic('bulb')}<p>Los mínimos ya exigen 2 + 2 + 1 = 5 equipos y el presupuesto no paga un sexto: <strong>la distribución no la elige el modelo, es la única posible.</strong> A Pereira le faltan 13 horas.</p></div>`;
  }
  if (i === 1) {
    const out = [
      ['Edificio Los Robles', 'Pereira', 'Alta', 16, 'Exige 4 personas y geotecnia'],
      ['Edificio El Porvenir', 'Pereira', 'Alta', 16, 'Exige 4 personas'],
      ['C.C. El Mirador', 'Pereira', 'Alta', 10, 'Exige 4 personas'],
      ['Colegio El Mirador', 'Pereira', 'Baja', 5, 'Exige 4 personas y geotecnia'],
      ['C.C. Las Palmas', 'Armenia', 'Media', 8, 'El Equipo 4 ya usa sus 24 h'],
      ['Casa El Remanso', 'Armenia', 'Media', 5, 'El Equipo 4 ya usa sus 24 h'],
    ];
    return `<h3>Lo que queda por fuera: 60 puntos</h3>
      <p class="sub">Seis edificaciones: cuatro en Pereira y dos en Armenia.</p>
      <div class="two-col anim">
        <div class="out-list">${out.map(([n, c, u, p, why], k) => `
          <div class="out-row" style="animation-delay:${k * 90}ms">
            <div><strong>${n}</strong><small>${why}</small></div>
            <span class="city-tag"><span class="cdot" style="background:${CITY_COLOR[c.toLowerCase()]}"></span>${c}</span>
            <span class="urgc"><span class="urg urg-${u.toLowerCase()}">${u}</span></span>
            <span class="pts">${p}</span>
          </div>`).join('')}</div>
        <div class="dark-stat">
          <div class="big"><span data-count="70">0</span> %</div>
          <p>de los puntos perdidos son las <strong>3 urgencias altas de Pereira</strong> (42 puntos).</p>
          <hr>
          <p>No es un problema de prioridad sino de capacidad: el único equipo de 4 personas en Pereira ya trabaja sus 24 horas.</p>
        </div>
      </div>`;
  }
  if (i === 2) {
    return `<h3>El presupuesto define la misión</h3>
      <p class="sub">Se gastan $9.900.000 de $10.000.000. El margen real es mucho menor de lo que parece.</p>
      <div class="two-col anim">
        <div>
          <div class="budget-bar">
            <span class="seg" data-w="41.8" style="background:#2F4A3E"></span>
            <span class="seg" data-w="33.3" style="background:#8FB3A0"></span>
            <span class="seg" data-w="23.3" style="background:#B5835A"></span>
            <span class="budget-marker"><i>Mínimo factible: $9,7 M</i></span>
          </div>
          <div class="budget-legend">
            <div><strong><i class="sw" style="background:#2F4A3E;width:12px"></i>Civiles</strong><small>$4,20 M · 42 %</small></div>
            <div><strong><i class="sw" style="background:#8FB3A0;width:12px"></i>Estructuras</strong><small>$3,35 M · 34 %</small></div>
            <div><strong><i class="sw" style="background:#B5835A;width:12px"></i>Geotecnia</strong><small>$2,35 M · 24 %</small></div>
          </div>
          <div class="stat-pair">
            <div class="stat-box"><strong>$<span data-count="9.7" data-dec="1">0</span> M</strong><small>costo de la misión más barata que cumple todas las condiciones</small></div>
            <div class="stat-box"><strong><span data-count="3">0</span> %</strong><small>de margen entre ese mínimo y el presupuesto</small></div>
          </div>
          <div class="callout">${ic('alert')}<p>Un recorte de <strong>$250.000</strong> baja el puntaje de 309 a 279. Por debajo de $9,7 M, ninguna misión cumple las condiciones.</p></div>
        </div>
        <div class="dark-stat talent">
          <p class="eyebrow" style="color:#F7C58A">Talento sin asignar</p>
          <p><strong>12 voluntarios</strong>; 5 podrían liderar un equipo:</p>
          <ul><li>Yajaira Veloza</li><li>Yanith Cuellar</li><li>Daniel Felipe Vargas</li><li>Mariana Lopez Torres</li></ul>
          <em>(estructuras, avanzados)</em>
          <ul><li>Alejandro Jose Medina</li></ul>
          <em>(geotecnia, avanzado)</em>
          <hr>
          <p style="color:var(--orange);font-weight:800;font-size:1.15rem">Falta dinero, no talento.</p>
        </div>
      </div>`;
  }
  if (i === 3) {
    const teams = [['Equipo 4 · Armenia', 74, '3,1', 24, true], ['Equipo 5 · Manizales', 66, '2,8', 24], ['Equipo 6 · Manizales', 56, '2,7', 21], ['Equipo 8 · Pereira', 63, '2,6', 24], ['Equipo 9 · Pereira', 50, '2,4', 21]];
    return `<h3>Cómo arma el modelo cada equipo</h3>
      <p class="sub">Cada equipo es el más barato que cumple los requisitos de sus edificaciones.</p>
      <div class="two-col even anim">
        <div>
          <div class="ttype"><div class="ttype-top"><h4>Equipo completo</h4><span class="chip">4 personas</span></div>
            <p><strong>1 avanzado RT</strong> + estructuras + geotecnia + civiles · $2,25–2,30 M</p>
            <p>Inspecciona cualquier edificación: colegios, urgencias altas y terreno. <strong>Equipos 8, 5 y 4.</strong></p></div>
          <div class="ttype"><div class="ttype-top"><h4>Equipo liviano</h4><span class="chip dark">3 personas</span></div>
            <p><strong>Estructuras avanzado RT</strong> + 2 civiles iniciales · $1,55 M</p>
            <p>Viviendas, edificios y C.C. de urgencia media o baja, sin terreno. <strong>Equipos 9 y 6.</strong></p></div>
          <div class="callout">${ic('bulb')}<p>Todos llevan <strong>1 avanzado</strong> y casi todos <strong>2 iniciales</strong>, el máximo permitido: son los perfiles más baratos. Esto motiva la recomendación R4.</p></div>
        </div>
        <div>
          <p class="subhead" style="margin-top:0">Horas usadas de 24 y puntos por hora</p>
          ${teams.map(([n, p, ph, h, top]) => `
            <div class="tbar ${top ? 'top' : ''}">
              <div class="tbar-top"><strong>${n}</strong><span>${p} pts · <b style="color:var(--ink)">${ph} pts/h</b> · ${h} h</span></div>
              <div class="bar"><span data-w="${(h / 24) * 100}"></span></div>
            </div>`).join('')}
          <p class="fine">Barra llena: 24 h usadas. Los equipos livianos usan 21 h. Ninguno se acerca al mínimo de 12 h.</p>
        </div>
      </div>`;
  }
  return `<h3>¿Qué pasa si cambian los recursos?</h3>
    <p class="sub">Resolvimos el modelo con distintos presupuestos y horas disponibles. Pasa el cursor por los puntos.</p>
    <div class="charts anim">
      <div class="chart-box"><h4>Puntaje según el presupuesto</h4><div class="chart" id="chBudget"></div>
        <p><strong>Sube por escalones.</strong> $550.000 más dan +30 puntos; entre $10,55 M y $12 M el dinero no tiene en qué usarse.</p></div>
      <div class="chart-box"><h4>Puntaje según las horas por equipo</h4><div class="chart" id="chHours"></div>
        <p><strong>Sube de forma gradual.</strong> Cada hora diaria adicional por equipo aporta entre 16 y 18 puntos.</p></div>
    </div>`;
}

/* gráfico de línea en SVG (escalones o lineal), con tooltip */
function lineChart(el, o) {
  const W = 520, H = 300, m = { l: 44, r: 18, t: 22, b: 36 };
  const x = v => m.l + (v - o.x[0]) / (o.x[1] - o.x[0]) * (W - m.l - m.r);
  const y = v => H - m.b - (v - o.y[0]) / (o.y[1] - o.y[0]) * (H - m.t - m.b);
  let d = `M${x(o.data[0][0])},${y(o.data[0][1])}`;
  o.data.slice(1).forEach(([a, b]) => { d += o.step ? `H${x(a)}V${y(b)}` : `L${x(a)},${y(b)}`; });
  const area = d + `V${y(o.y[0])}H${x(o.data[0][0])}Z`;
  const yt = o.yTicks.map(v => `<line x1="${m.l}" x2="${W - m.r}" y1="${y(v)}" y2="${y(v)}"/>`).join('');
  const ytl = o.yTicks.map(v => `<text x="${m.l - 10}" y="${y(v) + 4}" text-anchor="end">${v}</text>`).join('');
  const xtl = o.xTicks.map(v => `<text x="${x(v)}" y="${H - m.b + 22}" text-anchor="middle">${o.xFmt(v)}</text>`).join('');
  const anns = (o.ann || []).map(a => `<text class="ann ${a.hl ? 'hl' : ''}" x="${x(a.at[0]) + (a.dx || 0)}" y="${y(a.at[1]) + (a.dy || -12)}" text-anchor="${a.anchor || 'middle'}">${a.t}</text>`).join('');
  const infeas = o.infeas ? `<rect class="infeas" x="${x(o.x[0])}" y="${m.t}" width="${x(o.infeas) - x(o.x[0])}" height="${H - m.t - m.b}"/>` : '';
  const pts = o.data.map(([a, b], k) => `
    <circle class="pt ${o.hl && o.hl.includes(k) ? 'hl' : ''}" cx="${x(a)}" cy="${y(b)}" r="${o.hl && o.hl.includes(k) ? 6.5 : 5}"/>
    <circle class="hit" data-k="${k}" cx="${x(a)}" cy="${y(b)}" r="16"/>`).join('');
  el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.label}">
    <defs><linearGradient id="g-${el.id}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#0F6B4B" stop-opacity=".16"/><stop offset="1" stop-color="#0F6B4B" stop-opacity="0"/></linearGradient></defs>
    ${infeas}
    <g class="grid">${yt}</g>
    <g class="axis">${ytl}${xtl}</g>
    <line class="baseline" x1="${m.l}" x2="${W - m.r}" y1="${H - m.b}" y2="${H - m.b}"/>
    <path class="area" d="${area}" fill="url(#g-${el.id})"/>
    <path class="line draw" d="${d}"/>
    ${pts}${anns}
  </svg>`;
  el.querySelectorAll('.hit').forEach(c => {
    const [a, b] = o.data[+c.dataset.k];
    const pt = c.previousElementSibling;
    c.addEventListener('mouseenter', () => {
      const r = c.getBoundingClientRect();
      pt.setAttribute('r', 8);
      showTip(o.tip(a, b), r.left + r.width / 2, r.top + 4);
    });
    c.addEventListener('mouseleave', () => { pt.setAttribute('r', o.hl && o.hl.includes(+c.dataset.k) ? 6.5 : 5); hideTip(); });
  });
}
function drawCharts() {
  lineChart($('#chBudget'), {
    label: 'Puntaje óptimo según el presupuesto', step: true,
    data: [[9.75, 279], [10, 309], [10.25, 309], [10.5, 329], [10.55, 339], [10.75, 339], [11, 339], [12, 339], [12.5, 356], [13, 356], [15, 369]],
    x: [9.5, 15.2], y: [265, 378], yTicks: [280, 300, 320, 340, 360], xTicks: [10, 11, 12, 13, 14, 15], xFmt: v => `$${v} M`,
    infeas: 9.7, hl: [1, 4],
    ann: [{ t: '$9,75 M · 279', at: [9.75, 279], dy: 22, dx: 4, anchor: 'start' }, { t: 'Base · 309', at: [10, 309], dx: 10, dy: 22, anchor: 'start', hl: 1 },
      { t: 'R1 · 339', at: [10.55, 339], dy: -14, anchor: 'end', dx: -6, hl: 1 }, { t: 'Meseta hasta $12 M', at: [11.7, 339], dy: 20 },
      { t: '6.º equipo · 356', at: [12.5, 356], dy: -14 }, { t: 'Las 40 · 369', at: [15, 369], dy: -12, anchor: 'end' }],
    tip: (a, b) => `Presupuesto <b>$${fmt(a, 2)} M</b><br>Puntaje <b>${b}</b>`,
  });
  lineChart($('#chHours'), {
    label: 'Puntaje óptimo según las horas por equipo',
    data: [[24, 309], [26, 318], [27, 327], [30, 343], [32, 354]],
    x: [23.5, 32.5], y: [295, 365], yTicks: [300, 320, 340, 360], xTicks: [24, 26, 27, 30, 32], xFmt: v => `${v} h`, hl: [0, 2],
    ann: [{ t: 'Base · 309', at: [24, 309], dy: 24, dx: 2, anchor: 'start', hl: 1 }, { t: 'R2 · 9 h/día · 327', at: [27, 327], dy: 26, dx: 4, anchor: 'start', hl: 1 },
      { t: '10 h/día · 343', at: [30, 343], dy: -14, anchor: 'end' }, { t: '354', at: [32, 354], dy: -14 }],
    tip: (a, b) => `<b>${a} h</b> por equipo (${fmt(a / 3, a % 3 ? 1 : 0)} h/día)<br>Puntaje <b>${b}</b>`,
  });
}

let step = 0;
function renderStepper() {
  $('#stepper').innerHTML = STEPS.map((s, i) => `<button class="step-btn" role="tab" data-i="${i}"><small>PASO ${i + 1}</small><span>${s}</span></button>`).join('');
  $$('#stepper .step-btn').forEach(b => b.addEventListener('click', () => goStep(+b.dataset.i)));
}
function goStep(i) {
  if (i < 0 || i >= STEPS.length) return;
  const back = i < step;
  step = i;
  $$('#stepper .step-btn').forEach((b, k) => { b.classList.toggle('active', k === i); b.setAttribute('aria-selected', k === i); });
  const act = $('#stepper .step-btn.active');
  act && act.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  $('#stage').innerHTML = `<div class="stage-inner ${back ? 'back' : ''}">${stepHTML(i)}</div>`;
  if (i === 4) drawCharts();
  $('#stepCount').textContent = `${i + 1} / ${STEPS.length}`;
  $('#stepPrev').disabled = i === 0;
  $('#stepNext').disabled = i === STEPS.length - 1;
  arm($('#stage'));
}
function openAnalysis(i = 0, scroll = false) {
  const box = $('#analysis'), btn = $('#btnAnalysis');
  box.hidden = false; btn.setAttribute('aria-expanded', 'true');
  goStep(i);
  if (scroll) setTimeout(() => box.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }), 60);
}

/* =========================================================
   RECOMENDACIONES (diapositivas 19–23 + resumen 24)
   ========================================================= */
let recIdx = 0;
function renderRecTabs() {
  const subs = ['Presupuesto', 'Jornada 9 h', 'Combinadas', 'Equidad', 'Acompañamiento', 'Escenarios'];
  $('#recTabs').innerHTML = [...RECS.map(r => r.id), 'Σ'].map((id, i) =>
    `<button class="rec-tab" role="tab" data-i="${i}"><span class="rb">${id}</span><small>${subs[i]}</small></button>`).join('');
  $$('#recTabs .rec-tab').forEach(b => b.addEventListener('click', () => goRec(+b.dataset.i)));
}
function recHTML(r) {
  const max = 370;
  return `<div class="rec">
    <div class="rec-head"><span class="rec-badge ${r.dark ? 'dark' : ''}">${r.id}</span>
      <div><p class="rec-kicker">${r.kicker}</p><h3>${r.title}</h3></div></div>
    <div class="rec-body">
      <div class="card rec-changes">
        <p class="subhead" style="margin-top:0">Qué cambia en la práctica</p>
        <ul>${r.items.map(([i, t], k) => `<li style="animation-delay:${150 + k * 110}ms">${ic(i)}<span>${t}</span></li>`).join('')}</ul>
        <p class="rec-file">${ic('file')} Corrida del modelo: ${r.file}</p>
      </div>
      <div class="rec-side">
        <div class="delta ${r.z < 309 ? 'neg' : ''} anim">${ic(r.icon || 'arrowUp')}
          <div><div class="delta-big">${r.delta}</div><p>${r.dp}</p></div></div>
        <div class="card zbars anim">
          <div class="zbar"><span>Base</span><div class="bar"><span data-w="${(309 / max) * 100}"></span></div><b>309</b></div>
          <div class="zbar new"><span>Con ${r.id}</span><div class="bar"><span data-w="${(r.z / max) * 100}"></span></div><b>${r.z}</b></div>
        </div>
        <div class="card ctable-card">
          <table class="ctable"><thead><tr><th>Indicador</th><th>Base</th><th>Con ${r.id}</th></tr></thead>
            <tbody>${r.rows.map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td class="${b !== c ? 'chg' : ''}">${c}</td></tr>`).join('')}</tbody></table>
        </div>
        ${r.note ? `<p class="rec-note">${r.note}</p>` : ''}
      </div>
    </div>
  </div>`;
}
function summaryHTML() {
  const max = 400;
  const best = 3;
  return `<div class="rec">
    <div class="rec-head"><span class="rec-badge dark">Σ</span>
      <div><p class="rec-kicker">Fuente: Anexo E, hoja Escenarios</p><h3>Escenarios y <em>orden sugerido</em></h3></div></div>
    <div class="summary">
      <div class="card sc-card anim">
        <div class="sc-legend"><span><i style="background:var(--c-pereira)"></i>Pereira</span><span><i style="background:var(--c-manizales)"></i>Manizales</span><span><i style="background:var(--c-armenia)"></i>Armenia</span></div>
        <div class="sc-chart">${SCEN.map(([n, p, m, a], k) => `
          <div class="sc-col ${k === best ? 'best' : ''}">
            <div class="sc-total">${p + m + a}</div>
            <div class="sc-stack" style="height:${((p + m + a) / max) * 100}%">
              <div class="sc-seg" data-h="${(p / (p + m + a)) * 100}" data-tip="${n} · Pereira <b>${p}</b>" style="background:var(--c-pereira)">${p}</div>
              <div class="sc-seg" data-h="${(m / (p + m + a)) * 100}" data-tip="${n} · Manizales <b>${m}</b>" style="background:var(--c-manizales)">${m}</div>
              <div class="sc-seg" data-h="${(a / (p + m + a)) * 100}" data-tip="${n} · Armenia <b>${a}</b>" style="background:var(--c-armenia)">${a}</div>
            </div>
          </div>`).join('')}</div>
        <div class="sc-names">${SCEN.map(([n, , , , c], k) => `<div class="${k === best ? 'best' : ''}"><strong>${n}</strong><small>${c}</small></div>`).join('')}</div>
      </div>
      <div class="order">
        <p class="subhead" style="margin:0 0 4px">Orden sugerido</p>
        <div class="card order-item"><b>1</b><p><strong>R2:</strong> casi gratis; solo requiere un acuerdo con los voluntarios.</p></div>
        <div class="card order-item"><b>2</b><p><strong>R1:</strong> gestionar $550.000; resuelve las urgencias altas de Pereira.</p></div>
        <div class="card order-item"><b>3</b><p><strong>R4:</strong> si la prioridad es la calidad técnica.</p></div>
        <div class="card order-item"><b>4</b><p><strong>R3:</strong> como regla permanente de planeación.</p></div>
        <p class="rec-note">No mejoran el puntaje: equipos de 5 personas, liberar la Unidad A o más de $10,55 M sin ampliar la jornada.</p>
      </div>
    </div>
  </div>`;
}
function goRec(i) {
  const n = RECS.length + 1;
  recIdx = (i + n) % n;
  $$('#recTabs .rec-tab').forEach((b, k) => { b.classList.toggle('active', k === recIdx); b.setAttribute('aria-selected', k === recIdx); });
  $('#recStage').innerHTML = recIdx < RECS.length ? recHTML(RECS[recIdx]) : summaryHTML();
  $$('#recStage .sc-seg').forEach(s => {
    s.addEventListener('mousemove', e => showTip(s.dataset.tip, e.clientX, e.clientY));
    s.addEventListener('mouseleave', hideTip);
  });
  arm($('#recStage'));
}

/* =========================================================
   NAVEGACIÓN (inicio ↔ proyecto, submenú)
   ========================================================= */
const views = { home: $('#view-home'), proyecto: $('#view-proyecto') };
let currentView = null, currentTab = null;

function moveInk() {
  const a = $('.subnav-track a.active'), ink = $('#subnavInk');
  if (!a) return;
  ink.style.left = a.offsetLeft + 'px';
  ink.style.width = a.offsetWidth + 'px';
}
function setTab(tab) {
  if (!['resultados', 'conclusiones', 'recomendaciones'].includes(tab)) tab = 'resultados';
  $$('.subnav-track a').forEach(a => { const on = a.dataset.tab === tab; a.classList.toggle('active', on); a.setAttribute('aria-selected', on); });
  moveInk();
  if (currentTab === tab) return;
  const prevTab = currentTab;
  currentTab = tab;
  $$('.panel').forEach(p => { p.hidden = p.dataset.panel !== tab; });
  const panel = $(`.panel[data-panel="${tab}"]`);
  // reiniciar la animación del panel
  panel.style.animation = 'none'; panel.offsetHeight; panel.style.animation = '';
  arm(panel);
  if (prevTab) {
    const top = $('#subnav').offsetTop - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--top'));
    if (scrollY > top) scrollTo({ top, behavior: 'auto' });
  }
}
function route() {
  const h = location.hash || '#/';
  const m = h.match(/^#\/proyecto(?:\/(\w+))?/);
  const view = m ? 'proyecto' : 'home';
  if (view !== currentView) {
    Object.entries(views).forEach(([k, v]) => { v.hidden = k !== view; });
    currentView = view;
    currentTab = null;
    scrollTo({ top: 0, behavior: 'auto' });
    arm(views[view]);
  }
  if (view === 'proyecto') setTab(m[1] || 'resultados');
  closeMenu();
}

function goSection(id) {
  const scroll = () => { const el = document.getElementById(id); el && el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); };
  if (currentView !== 'home') { location.hash = '#/'; setTimeout(scroll, 160); } else scroll();
}

/* menú móvil */
const menuBtn = $('#menuBtn'), nav = $('#nav');
function closeMenu() { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
menuBtn.addEventListener('click', () => { const o = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', o); });

/* =========================================================
   INICIO
   ========================================================= */
function init() {
  hydrateIcons();
  buildMap();
  renderConclusions();
  renderStepper();
  renderRecTabs();
  goRec(0);

  $$('[data-go]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); closeMenu(); goSection(a.dataset.go); }));

  // Botón: despliegue por ciudad
  $('#btnDeploy').addEventListener('click', () => {
    const box = $('#deploy'), btn = $('#btnDeploy');
    const open = box.hidden;
    box.hidden = !open;
    btn.setAttribute('aria-expanded', open);
    if (open) { arm(box); setTimeout(() => box.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }), 50); }
  });
  $$('#citySwitch button').forEach(b => b.addEventListener('click', () => selectCity(b.dataset.city, false)));
  $$('#deployTable tbody tr').forEach(r => r.addEventListener('click', () => selectCity(r.dataset.city, true)));
  $('#cityDetail').innerHTML = `<div class="city-empty">${ic('pointer')} Elige Pereira, Manizales o Armenia en el mapa o en los botones para ver sus equipos y edificaciones.</div>`;

  // Botón: de dónde salen las conclusiones
  $('#btnAnalysis').addEventListener('click', () => {
    const box = $('#analysis'), btn = $('#btnAnalysis');
    if (box.hidden) openAnalysis(0, true);
    else { box.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
  });
  $('#stepPrev').addEventListener('click', () => goStep(step - 1));
  $('#stepNext').addEventListener('click', () => goStep(step + 1));

  // Teclado para presentar: ← → recorren pasos/recomendaciones; 1-3 cambian de pestaña
  document.addEventListener('keydown', e => {
    if (currentView !== 'proyecto' || e.target.closest('input, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (['1', '2', '3'].includes(e.key)) { location.hash = '#/proyecto/' + ['resultados', 'conclusiones', 'recomendaciones'][+e.key - 1]; return; }
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    if (currentTab === 'conclusiones' && !$('#analysis').hidden) { e.preventDefault(); goStep(step + dir); }
    else if (currentTab === 'recomendaciones') { e.preventDefault(); goRec(recIdx + dir); }
    else if (currentTab === 'resultados' && !$('#deploy').hidden) {
      e.preventDefault();
      const order = ['pereira', 'manizales', 'armenia'];
      const k = currentCity ? order.indexOf(currentCity) : -1;
      selectCity(order[(k + dir + 3) % 3], false);
    }
  });

  const topbar = $('#topbar');
  addEventListener('scroll', () => topbar.classList.toggle('scrolled', scrollY > 8), { passive: true });
  addEventListener('resize', moveInk);
  addEventListener('hashchange', route);
  document.fonts && document.fonts.ready.then(moveInk);
  route();
}
init();
})();
