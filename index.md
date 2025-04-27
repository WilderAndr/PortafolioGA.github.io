---
layout: default
title: Portafolio con TDD y ORM
---

# Bienvenido a mi portafolio

Este portafolio demuestra:

- Desarrollo guiado por pruebas (TDD)
- ORM simple con JSON
- Despliegue en GitHub Pages

## Proyectos

<div id="projects-container">
  <!-- Los proyectos se cargarán dinámicamente con JS -->
</div>

## Ejemplo TDD

{% include tdd-example.html %}

<script src="/portfolio-jekyll-tdd/assets/js/orm.js"></script>
<script src="/portfolio-jekyll-tdd/assets/js/tdd-example.js"></script>
<script>
  // Cargar proyectos usando nuestro ORM
  document.addEventListener('DOMContentLoaded', async () => {
    const orm = new JSONORM('/portfolio-jekyll-tdd/_data/projects.json');
    await orm.load();
    
    const projects = orm.findAll();
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
      const projectEl = document.createElement('div');
      projectEl.className = 'project';
      projectEl.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <small>Tags: ${project.tags.join(', ')}</small>
      `;
      container.appendChild(projectEl);
    });
  });
</script>
