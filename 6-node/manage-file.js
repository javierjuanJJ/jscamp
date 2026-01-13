import { mkdir, readFile, writeFile, access } from 'node:fs/promises'
import { join, basename, extname } from 'node:path'
import { constants } from 'node:fs'

let content = 'Hola'

// Comprobar permiso de lectura
try {
    await access('archivo.txt', constants.R_OK)
    content = await readFile('archivo.txt', 'utf-8')
    console.log(content)
} catch {
    console.log('No tienes permiso para leer el archivo.')
}

// Comprobar permiso de escritura
const outputDir = join('output', 'files', 'documents')

try {
    await access('.', constants.W_OK)

    await mkdir(outputDir, { recursive: true })

    const uppercaseContent = content.toUpperCase()
    const outputFilePath = join(outputDir, 'archivo-uppercase.txt')

    console.log('La extensión es:', extname(outputFilePath))
    console.log('El nombre del archivo es:', basename(outputFilePath))

    await writeFile(outputFilePath, uppercaseContent)
    console.log('Archivo creado con contenido en mayúsculas')
} catch {
    console.log('No tienes permiso para escribir en el directorio especificado.')
}
