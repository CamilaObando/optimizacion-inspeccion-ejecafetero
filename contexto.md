# Contexto del proyecto · Página web de sustentación Colibrí

Sesiones: 16 y 18 de noviembre de 2026.

## Qué es

Página web estática (HTML, CSS y JS, sin frameworks ni compilación) para la **sustentación del proyecto de Modelos Determinísticos 2026-2, Grupo Asesor 10**. En la presentación el grupo actúa como la consultora **Colibrí Consultoría** ("Optimización en acción").

La página muestra **solo resultados**: el contexto del problema se explica hablando.

- Fuentes de contenido: `G10_Informe_Final.pdf` y `Sustentación G10 – Misión de voluntarios Eje Cafetero (1).pdf`. Todas las cifras de la página salen de ahí.
- Repo: `optimizacion-inspeccion-ejecafetero` (remoto `github.com/CamilaObando/optimizacion-inspeccion-ejecafetero`). **Todavía no se ha hecho commit** de estos archivos.
- Para abrirla: doble clic en `index.html`. Funciona sin servidor; solo las fuentes de Google Fonts necesitan internet.

## Archivos

| Archivo | Qué contiene |
|---|---|
| `index.html` | Estructura de la página: topbar, vista Inicio, vista Proyecto (submenú y 3 paneles), footer |
| `css/styles.css` | Todos los estilos: paleta, tarjetas, animaciones y responsive |
| `js/app.js` | Datos, navegación, mapa, animaciones, gráficas y textos de ciudades, conclusiones y recomendaciones |
| `assets/colibri-logo.png` | Logo (copia de `../recursos/ColibríConsultoríaLogo.png`) |
| `contexto.md` | Este archivo |

## Estilo acordado

- Minimalista, moderno y profesional, con fondo crema (`--bg #FAF7F0`) y tarjetas blancas con bordes redondeados.
- Paleta de verdes, azules y tierra tomada del logo:
  - verde `--green #0F6B4B`
  - café `--earth #5A3517`
  - naranja `--orange #E8891C`
  - azul `--blue #2563A8`
- Tipografías: **Fraunces** (títulos, serif como el logo) y **Plus Jakarta Sans** (texto).
- Colores por ciudad, validados para daltonismo y contraste. Se usan en el mapa, en el detalle de ciudad y en el gráfico de escenarios:
  - Pereira `#1E8A5E` (verde)
  - Manizales `#2563A8` (azul)
  - Armenia `#C9711F` (tierra)
- Adaptable a celular: menú hamburguesa por debajo de 760 px, sin scroll horizontal.

## Estructura de la página

### Navegación (rutas por hash)
- `#/`: Inicio. Los enlaces del menú hacen scroll a las secciones `inicio`, `nosotros`, `valor`, `voluntariados` y `equipo` mediante `data-go`.
- `#/proyecto/contexto`, `#/proyecto/resultados`, `#/proyecto/conclusiones` y `#/proyecto/recomendaciones`: las 4 pestañas del proyecto (`#/proyecto` solo abre Contexto). El submenú queda fijo (sticky) arriba.

### Inicio
1. **Portada**: logo con animación flotante, lema y botones.
2. **Quiénes somos**, **Misión** y **Visión**, con los textos exactos que dio el usuario.
3. **Propuesta de valor**: Decidimos con datos, Comprobamos antes de enviar y Lo explicamos claro. Debajo va una franja de proceso: Diagnóstico → Modelo → Verificación → Decisión.
4. **Nuestros voluntariados**:
   - Proyecto principal **"Misión Eje Cafetero 2026"**, que abre el proyecto.
   - Dos proyectos inventados, marcados "En diseño": **Brigadas de Salud Pacífico** (Chocó) y **Siembra Andina** (reforestación en la Sabana de Bogotá).
5. **Equipo consultor**: los 5 integrantes del informe, sin cargos.

### Proyecto · 01 Contexto (pestaña por defecto, agregada el 18 de noviembre)
- Basada en `Recursos/Contexto1.jpeg` (El problema) y `Recursos/Contexto2.jpeg` (Metodología empleada).
- **El problema**:
  - Texto introductorio.
  - 4 tarjetas de decisiones (qué voluntarios, cómo se arman los equipos, a qué ciudad va cada uno, qué edificaciones), unidas por una línea naranja animada.
  - 4 tarjetas de recursos con contadores: 30 voluntarios, 40 edificaciones, 3 × 8 h y $10 M (esta última en verde).
- **Metodología empleada**: 6 pasos (01 a 06) en una cuadrícula de 3 × 2.
- Al final, el botón "Ver los resultados" lleva a la pestaña 02.
- Los botones "Misión Eje Cafetero" del Inicio ahora abren `#/proyecto/contexto`.

### Proyecto · 02 Resultados
- Diapositivas **5 y 6 juntas**:
  - Contador 309 de 369 y anillo del 83,7 %.
  - 6 tarjetas KPI con barras animadas: equipos 5/10, voluntarios 18/30, edificaciones 34/40, urgencias altas 13/16, presupuesto 99 % y horas 114/120.
- Botón **"Ver el despliegue por ciudad"**, que muestra la **diapositiva 7**:
  - Mapa SVG de Colombia con un zoom del Eje Cafetero y pines clicables.
  - Tabla por ciudad (las filas también son clicables).
  - Nota sobre la Unidad A.
- Botones **Pereira / Manizales / Armenia** (diapositivas **8, 9 y 10**). Cada ciudad muestra:
  - Encabezado y mini-estadísticas.
  - Tarjetas de equipo con integrantes (RT marcado) y edificaciones (urgencia, puntos y etiqueta de albergue o apoyo).
  - Tarjetas laterales de análisis.

### Proyecto · 03 Conclusiones y análisis
- Primero, las 6 conclusiones de la **diapositiva 17**. Cada una tiene un enlace "Ver el análisis" que abre el paso correspondiente.
- Botón **"¿De dónde salen nuestras conclusiones?"**: abre un carrusel de 5 pasos con Anterior y Siguiente.
  1. Por qué 2-2-1: barras de horas por ciudad (diap. 12).
  2. Lo que queda por fuera: 60 puntos (diap. 13).
  3. El presupuesto define la misión (diap. 14).
  4. Cómo arma el modelo cada equipo (diap. 15).
  5. ¿Qué pasa si cambian los recursos? (diap. 16): dos gráficas SVG (presupuesto en escalones y horas) con tooltips.

### Proyecto · 04 Recomendaciones
- Pestañas **R1, R2, R1+R2, R3 y R4** (diapositivas **19 a 23**). Cada una tiene:
  - Lista "Qué cambia en la práctica".
  - Tarjeta con el porcentaje de cambio animado.
  - Barras de Z (Base vs. Con Rx).
  - Tabla comparativa, con los valores que cambian resaltados en naranja.
- Pestaña extra **Σ Escenarios** (diapositiva 24, agregada como bonus): barras apiladas por ciudad para los 7 escenarios y el orden sugerido R2 → R1 → R4 → R3. Se puede quitar si no se quiere.

### Atajos de teclado (para presentar)
- `1`, `2`, `3` y `4` cambian de pestaña dentro del proyecto.
- `←` y `→` hacen lo siguiente según dónde estés:
  - En Resultados, con el despliegue abierto: cambian de ciudad.
  - En Conclusiones, con el análisis abierto: cambian de paso.
  - En Recomendaciones: cambian de recomendación.

## Dónde cambiar cosas (en `js/app.js`)

| Quiero cambiar… | Busca |
|---|---|
| Equipos, integrantes, edificaciones o tarjetas laterales de cada ciudad | `const CITIES` |
| Texto de las 6 conclusiones y a qué paso enlazan (`s` = índice 0–4) | `const CONCL` |
| Títulos de los 5 pasos del análisis | `const STEPS` |
| Contenido de cada paso del análisis | `function stepHTML(i)` |
| Datos de las gráficas de sensibilidad | `function drawCharts()` |
| Contenido de R1 a R4 (lista, porcentaje, tabla, nota y archivo .gms) | `const RECS` |
| Datos del gráfico de escenarios | `const SCEN` |
| Mapa (contorno de Colombia, posición de las ciudades, etiquetas) | `const COL` y `function buildMap()` |
| Íconos SVG disponibles | `const P` (en el HTML se usan como `<i data-ic="nombre"></i>`) |

En `index.html` se editan directamente:
- los textos de Inicio (misión, visión, propuesta de valor, voluntariados, equipo);
- el contenido de la pestaña Contexto (sección `id="p-contexto"`);
- las tarjetas KPI;
- la tabla de despliegue por ciudad.

Los números animados usan `data-count="309"` (y `data-dec="1"` para decimales). Las barras animadas usan `data-w="porcentaje"`.

## Cómo se verificó

Se tomaron capturas con Chrome headless (script en el scratchpad de la sesión, no está en el repo) a 1440 px y a 390 px:
- Inicio
- Resultados con Pereira, Manizales y Armenia
- Conclusiones (pasos 1 y 5)
- Recomendaciones (R1 y Escenarios)

Ajustes que se hicieron tras revisar las capturas:
- El mapa pasó a ancho completo, con la tabla y la nota debajo.
- Se recolocaron las etiquetas "Mar Caribe", "45 h" y "Meseta hasta $12 M", que se cruzaban con otros elementos.

## Pendientes o ideas posibles

- Hacer commit y push al repo (y opcionalmente publicarlo con GitHub Pages).
- Decidir si se deja la pestaña extra "Escenarios" en Recomendaciones.
- Agregar cargos o fotos al equipo consultor si se quiere.
- En celular, la tabla de despliegue se desplaza horizontalmente dentro de su tarjeta (es intencional).
