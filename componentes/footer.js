// Pie de página compartido por todas las vistas.
document.querySelectorAll("[data-footer]").forEach((slot) => {
  slot.innerHTML = `
    <footer class="pie-pagina" id="creadora">
      <div class="grupo-1">
        <div class="box">
          <figure>
            <a href="#">
              <img src="IMG/im.jpg" alt="Creadora de Ñayki">
            </a>
          </figure>
        </div>
        <div class="box">
          <h2>SOBRE LA CREADORA</h2>
          <p>
            Rosio Leuquén Ramírez es la creadora de Ñaykis, nombre sacado de sus raíces mapuche,
            una organización dedicada al rescate, adopción y cuidado de gatos. Impulsada por
            su amor y conexión con los felinos, fundó Ñaykis con el objetivo de brindar una
            segunda oportunidad a los gatos en situación de peligro y encontrarles hogares
            amorosos a través del proceso de adopción. Con su pasión, determinación e innovación
            en el cuidado de los gatos, Rosio ha dejado un impacto duradero en la comunidad felina,
            inspirando a otros a tomar acción y proteger a estos animales vulnerables.
          </p>
          <p>¡Gracias por tu apoyo!</p>
        </div>
        <div class="box">
          <h2>SÍGUENOS</h2>
          <p>Proyecto académico de portafolio. No se reciben solicitudes reales.</p>
        </div>
      </div>
      <h2 class="titulo-final">
        &copy; 2023 | Ñayki | Rosio Leuquén Ramírez | Proyecto académico
      </h2>
    </footer>
  `;
});
