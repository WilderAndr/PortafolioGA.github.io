class JSONORM {
  constructor(dataSource) {
    this.dataSource = dataSource;
    this.data = null;
  }

  async load() {
    const response = await fetch(this.dataSource);
    this.data = await response.json();
    return this.data;
  }

  findAll() {
    return this.data ? this.data.projects : [];
  }

  findById(id) {
    return this.findAll().find(project => project.id === id);
  }

  findByTag(tag) {
    return this.findAll().filter(project => 
      project.tags.includes(tag)
    );
  }
}

// Uso:
// const orm = new JSONORM('/portfolio-jekyll-tdd/_data/projects.json');
// await orm.load();
// const projects = orm.findAll();
