import { useState, useEffect } from 'react'

export function useRouter() {
    // Estado para la ruta actual
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    // Efecto para detectar cambios de navegación
    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        // Escuchar cambios en el historial (botón atrás/adelante)
        window.addEventListener('popstate', handleLocationChange)

        // Cleanup: remover el listener al desmontar
        return () => {
            window.removeEventListener('popstate', handleLocationChange)
        }
    }, [])

    // Función para navegar programáticamente
    const navigateTo = (path) => {
        window.history.pushState({}, '', path)
        setCurrentPath(path)
    }

    // Retornar la API del hook
    return {
        currentPath,
        navigateTo,
    }
}