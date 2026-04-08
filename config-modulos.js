/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║         JESSICA PEÑA NAILS SPA — CONFIGURACIÓN DE MÓDULOS       ║
 * ║                                                                  ║
 * ║  Este archivo es el REGISTRO CENTRAL de todos los archivos       ║
 * ║  del sistema. Solo agrega aquí tu nuevo archivo y automáti-      ║
 * ║  camente aparecerá en el menú del index.html                     ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 *  INSTRUCCIONES PARA AGREGAR UN NUEVO MÓDULO:
 *  1. Copia el bloque plantilla del final
 *  2. Cambia "archivo", "nombre", "icono" y "grupo"
 *  3. Si el archivo aún no está listo → pon  activo: false
 *  4. Guarda este archivo — el menú se actualiza solo al recargar index
 *
 *  ⚠️  TODOS los archivos .html deben estar en la MISMA carpeta
 *      que index.html y config-modulos.js
 *
 *  GRUPOS DISPONIBLES (puedes inventar nuevos escribiendo cualquier nombre):
 *    "Operaciones" | "Reportes" | "Maestros" | "Finanzas" | "Sistema" | "Móvil"
 *
 *  ESTADOS:
 *    activo: true  → se puede abrir normalmente
 *    activo: false → aparece en gris con etiqueta "Dev" (archivo en desarrollo)
 */

const MODULOS = [

  // ════════════════════════════════════════
  //  GRUPO: OPERACIONES
  // ════════════════════════════════════════
  {
    grupo:   "Operaciones",
    nombre:  "Ventas",
    icono:   "💰",
    archivo: "ventas.html",
    activo:  true
  },
  {
    grupo:   "Operaciones",
    nombre:  "Compras",
    icono:   "📋",
    archivo: "compras.html",
    activo:  true
  },
  {
    grupo:   "Operaciones",
    nombre:  "Servicios",
    icono:   "💅",
    archivo: "servicios.html",
    activo:  true
  },
  {
    grupo:   "Operaciones",
    nombre:  "Calculadora Servicios",
    icono:   "🧮",
    archivo: "servicio_calculadora.html",
    activo:  true
  },
  {
    grupo:   "Operaciones",
    nombre:  "Gastos",
    icono:   "💸",
    archivo: "gastos.html",
    activo:  true
  },

  // ════════════════════════════════════════
  //  GRUPO: MAESTROS
  // ════════════════════════════════════════
  {
    grupo:   "Maestros",
    nombre:  "Clientes",
    icono:   "👥",
    archivo: "clientes.html",
    activo:  true
  },
  {
    grupo:   "Maestros",
    nombre:  "Productos",
    icono:   "💎",
    archivo: "productos.html",
    activo:  true
  },
  {
    grupo:   "Maestros",
    nombre:  "Inventario",
    icono:   "📦",
    archivo: "inventario.html",
    activo:  true
  },
  {
    grupo:   "Maestros",
    nombre:  "Proveedores",
    icono:   "🏢",
    archivo: "proveedores.html",
    activo:  true
  },

  // ════════════════════════════════════════
  //  GRUPO: FINANZAS
  // ════════════════════════════════════════
  {
    grupo:   "Finanzas",
    nombre:  "Créditos",
    icono:   "💳",
    archivo: "creditos.html",
    activo:  true
  },
  {
    grupo:   "Finanzas",
    nombre:  "Financiero",
    icono:   "📊",
    archivo: "financiero.html",
    activo:  true
  },

  // ════════════════════════════════════════
  //  GRUPO: REPORTES
  // ════════════════════════════════════════
  {
    grupo:   "Reportes",
    nombre:  "Reporte Ventas",
    icono:   "📈",
    archivo: "reporte-ventas.html",
    activo:  false                        // ← aún no creado
  },
  {
    grupo:   "Reportes",
    nombre:  "Reporte Compras",
    icono:   "📉",
    archivo: "reporte-compras.html",
    activo:  false                        // ← aún no creado
  },

  // ════════════════════════════════════════
  //  GRUPO: SISTEMA
  // ════════════════════════════════════════
  {
    grupo:   "Sistema",
    nombre:  "Admin Usuarios",
    icono:   "🔐",
    archivo: "admin-usuarios.html",
    activo:  true
  },
  {
    grupo:   "Sistema",
    nombre:  "Limpiar Datos",
    icono:   "🗑️",
    archivo: "LIMPIAR_DATOS.HTML",
    activo:  true
  },
  {
    grupo:   "Sistema",
    nombre:  "Scanner",
    icono:   "📷",
    archivo: "SCAN.HTML",
    activo:  true
  },

  // ════════════════════════════════════════
  //  GRUPO: MÓVIL
  // ════════════════════════════════════════
  {
    grupo:   "Móvil",
    nombre:  "Compras Móvil",
    icono:   "📱",
    archivo: "comp_movil.html",
    activo:  true
  },
  {
    grupo:   "Móvil",
    nombre:  "Productos Móvil",
    icono:   "📲",
    archivo: "prod_movil.html",
    activo:  true
  },

  // ════════════════════════════════════════
  //  ✏️  PLANTILLA PARA FUTUROS ARCHIVOS
  //  Copia este bloque, quita los /* */ y edita:
  // ════════════════════════════════════════
  /*
  {
    grupo:   "Operaciones",       // grupo donde aparecerá
    nombre:  "Mi Nuevo Módulo",   // nombre visible en el menú
    icono:   "🆕",                // emoji del ícono
    archivo: "mi-nuevo.html",     // nombre EXACTO del archivo en tu carpeta
    activo:  false                // false = gris, true = abre normalmente
  },
  */

];
