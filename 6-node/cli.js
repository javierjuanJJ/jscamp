import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

// Leer argumentos
const args = process.argv.slice(2) // Solo argumentos relevantes

// Validar número de parámetros
if (args.length > 2) {
    console.error('❌ Demasiados parámetros. Uso:\nnode app.js <directorio> [--files-only | --dirs-only]')
    process.exit(1)
}

if (args.length === 0) {
    console.error('❌ Falta el parámetro del directorio. Uso:\nnode app.js <directorio> [--files-only | --dirs-only]')
    process.exit(1)
}

// Asignar parámetros
const dir = args[0] ?? '.'
const filterParameter = args[1] ?? ''

// Validar filterParameter
const allowedFilters = ['', '--files-only', '--dirs-only']
if (!allowedFilters.includes(filterParameter)) {
    console.error('❌ Filtro inválido. Usa: --files-only | --dirs-only | (vacío)')
    process.exit(1)
}

// Formateo de tamaños
const formatBytes = (size) => (size < 1024 ? `${size} B` : `${(size / 1024).toFixed(2)} KB`)

// Validar que el directorio exista
try {
    const stats = await stat(dir)
    if (!stats.isDirectory()) {
        console.error('❌ La ruta no es un directorio')
        process.exit(1)
    }
} catch {
    console.error('❌ El directorio no existe')
    process.exit(1)
}

// Leer nombres
const files = await readdir(dir)

// Recuperar info de cada archivo/carpeta
const entries = await Promise.all(
    files.map(async (name) => {
        const fullPath = join(dir, name)
        const info = await stat(fullPath)
        return {
            name,
            isDir: info.isDirectory(),
            size: formatBytes(info.size)
        }
    })
)

// Filtrar y ordenar
const sortedByName = (a, b) => a.name.localeCompare(b.name, 'es')
const dirs = entries.filter(e => e.isDir).sort(sortedByName)
const filesList = entries.filter(e => !e.isDir).sort(sortedByName)

let listFilesAndDirectories = []
switch (filterParameter) {
    case '--files-only':
        listFilesAndDirectories = filesList
        break
    case '--dirs-only':
        listFilesAndDirectories = dirs
        break
    default:
        listFilesAndDirectories = [...dirs, ...filesList]
}

// Mostrar resultado
for (const entry of listFilesAndDirectories) {
    const icon = entry.isDir ? '📁' : '📄'
    const size = entry.isDir ? '-' : ` ${entry.size}`
    console.log(`${icon} ${entry.name.padEnd(25)}    ${size}`)
}
