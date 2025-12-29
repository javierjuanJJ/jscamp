const HTTP_STATUS = new Map([
    // 1xx - Informativos
    [100, "Continue – El servidor ha recibido la solicitud y continúa"],
    [101, "Switching Protocols – Cambio de protocolo"],
    [102, "Processing – Procesando la solicitud"],

    // 2xx - Éxito
    [200, "OK – La solicitud fue exitosa"],
    [201, "Created – Recurso creado correctamente"],
    [202, "Accepted – Solicitud aceptada pero no procesada aún"],
    [204, "No Content – Éxito sin contenido en la respuesta"],

    // 3xx - Redirecciones
    [301, "Moved Permanently – Recurso movido permanentemente"],
    [302, "Found – Redirección temporal"],
    [304, "Not Modified – Recurso no modificado"],

    // 4xx - Errores del cliente
    [400, "Bad Request – Solicitud inválida"],
    [401, "Unauthorized – No autenticado"],
    [403, "Forbidden – Acceso denegado"],
    [404, "Not Found – Recurso no encontrado"],
    [405, "Method Not Allowed – Método no permitido"],
    [408, "Request Timeout – Tiempo de espera agotado"],
    [409, "Conflict – Conflicto con el estado actual"],
    [422, "Unprocessable Entity – Error de validación"],
    [429, "Too Many Requests – Demasiadas solicitudes"],

    // 5xx - Errores del servidor
    [500, "Internal Server Error – Error interno del servidor"],
    [501, "Not Implemented – Funcionalidad no implementada"],
    [502, "Bad Gateway – Respuesta inválida de otro servidor"],
    [503, "Service Unavailable – Servicio no disponible"],
    [504, "Gateway Timeout – Tiempo de espera del gateway agotado"]
]);


export function getErrorMessage(status) {
    if (navigator.onLine) {
        return 'It has not internet access'
    } else {
        return HTTP_STATUS.get(status) || "Unknown error";
    }

}
