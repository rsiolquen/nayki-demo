// Encabezado compartido. Edita aquí el menú y la portada de todas las páginas.
document.querySelectorAll("[data-header]").forEach((slot) => {
    slot.innerHTML =
        'Proyecto de portafolio · Demo sin registros reales. Cambiar vista por edadInicioSobre nosotrosCampañasAdoptadosVoluntariado' +
        (slot.dataset.header === "completo"
            ? `
            ÑAYKI
                    Transformando vidas felinas
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style="height: 100%; width: 100%;"
                >
                    <path
                        d="M-0.00,49.85 C222.57,107.76 240.63,-65.45 500.00,49.85 L501.92,151.07 L-0.00,149.60 Z"
                        style="stroke: none; fill: rgb(255, 255, 255);"
                    >
                
            `
            : "");

    if (slot.dataset.header === "completo") {
        slot.querySelectorAll("[data-section]").forEach((link) => {
            link.href = "#" + link.dataset.section;
        });
    }
});