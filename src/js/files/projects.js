import { server } from './server.js';

export const loadProjectsInit = async () => {
  try {
    const { projects } = await server.loadProjects();
    if (!projects?.length) return;

    const projectConainer = document.querySelector('.projects__content');

    projects.forEach((project) => {
      const projectNode = composeProject(project);
      projectConainer.insertAdjacentHTML('beforeend', projectNode);
    });
  } catch (error) {
    console.log('error', error);
  }
};

function composeProject(project) {
  const { name, description, tools, img, link } = project;

  const projectImg = img ? `<img loading="lazy" src="${img}" alt="${name}" />` : `<img loading="lazy" src="/img/projects/mock.jpg" alt="${name}" />`;
  const projectTitle = name ? `<h3 class="project__title">${name}</h3>` : '';
  const projectDescription = description ? `<p class="project__text">${description}</p>` : '';
  const projectTools = tools ? `<p class="project__text">${tools}</p>` : '';
  const projectLink = link ? `<a href="${link}" class="project__link _btn">Learn more</a>` : '';

  const projectInfo = `<div class="project__info">
    ${projectTitle}
    ${projectDescription}
    ${projectTools}
    ${projectLink}
  </div>`;

  const projectImage = `<div class="project__image">
            <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[150px] sm:h-[172px] max-w-[270px] sm:max-w-[301px]  md:h-[294px] md:max-w-[512px]">
              <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              ${projectImg}
              </div>
            </div>
            <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px]  md:h-[21px] md:max-w-[597px]">
              <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </div>`;

  const projectElement = `<div class="projects__item project">
    ${projectImage}
    ${projectInfo}
  </div>`;
  return projectElement;
}
