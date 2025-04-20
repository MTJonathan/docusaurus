// src/custom-sidebar.js

const sidebar = [
  {
    type: 'doc',
    id: 'intro',
    label: '🧭 Introducción',
  },
  {
    type: 'category',
    label: '🔍 Inspector',
    items: [
      {
        type: 'doc',
        id: 'Inspector/abrir-inspector',
        label: '📂 Abrir Inspector',
      },
      {
        type: 'doc',
        id: 'Inspector/estructura-visual',
        label: '🧱 Estructura Visual',
      },
      {
        type: 'doc',
        id: 'Inspector/pestaña-Elementos',
        label: '🧩 Pestaña Elementos',
      },
      {
        type: 'doc',
        id: 'Inspector/pestaña-fuente',
        label: '📰 Pestaña Fuente',
      },
      {
        type: 'doc',
        id: 'Inspector/pestaña-red',
        label: '🌐 Pestaña Red',
      },
      {
        type: 'doc',
        id: 'Inspector/consejos-finales',
        label: '✅ Consejos Finales',
      },
    ],
  },
  {
    type: 'category',
    label: '🧰 Inspector-Extras',
    items: [
      {
        type: 'doc',
        id: 'tutorial-extras/performance',
        label: '🚀 Rendimiento',
      },
      {
        type: 'doc',
        id: 'tutorial-extras/application',
        label: '📱 Aplicaciones',
      },
      {
        type: 'doc',
        id: 'tutorial-extras/securitys',
        label: '🔐 Seguridad',
      },
      {
        type: 'doc',
        id: 'tutorial-extras/depuracion-avanzada',
        label: '🧪 Depuración Avanzada',
      },
      {
        type: 'doc',
        id: 'tutorial-extras/snippets',
        label: '📎 Snippets',
      },
    ],
  },
];

export default sidebar;
