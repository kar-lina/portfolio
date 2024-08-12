export const server = {
  async loadSkills(page = 1) {
    const SHOW_ELEMENTS = 4;
    
    const file = 'json/skills.json';
    let response = await fetch(file, {
      method: 'GET',
    });
    if (!response.ok) {
      return Promise.reject(new Error(`Could not load ${file}`));
    }
    let result = await response.json();
    if (result?.skills) {
      const skills = result.skills.slice(SHOW_ELEMENTS * (page - 1), SHOW_ELEMENTS * page);      
      const finished = SHOW_ELEMENTS * page >= result.skills.length;
      const next = finished ? null : page + 1;
      return new Promise((resolve) => {
        // Таймаут имитирует сетевую «задержку»
        setTimeout(() => {
          resolve({ skills, next });
        }, 150);
      });
    }
  },
};
