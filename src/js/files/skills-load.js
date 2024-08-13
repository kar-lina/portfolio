import { throttle } from './functions.js';
import { server } from './server.js';

// Следующая страница
let nextPage = 2;

// Не отправляем ещё один запрос
let isLoading = false;

// Больше не отправляем никаких запросов
let shouldLoad = true;
function checkPosition() {
  // Высота документа и экрана
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;

  // Сколько пикселей уже проскроллили
  const scrolled = window.scrollY;

  // Порог
  const threshold = height - screenHeight / 4;

  // Низ экрана относительно страницы
  const position = scrolled + screenHeight;

  if (position >= threshold) {
    // Вызываем действие
    fetchSkills().catch((error) => console.log(error));
  }
}

function appendSkill(skillData) {
  // Если данных нет, ничего не делаем
  if (!skillData) return;

  // Храним ссылку на элемент
  const skillsContainer = document.querySelector('.experience__timeline');

  // Превращает данные в HTML-элемент
  const skillNode = composeSkillItem(skillData);

  // Добавляем созданный элемент в <main>
  skillsContainer.appendChild(skillNode);
  // Init animation
  skillAnimationInit(skillNode);
}
function composeSkillItem(skillData) {
  // Если ничего не передано, ничего не возвращаем
  if (!skillData) return;

  // Обращаемся к старому шаблону
  const template = document.querySelector('#timeline-experience__template');

  // Клонируем
  const skill = template.content.children[0].cloneNode(true);
  // Получаем нужную информацию
  const { year, position, company, description, skills, link } = skillData;


  // Добавляем соответствующие тексты и числа
  skill.querySelector('.year-experience__title').innerText = year.start + ' - ' + year.end;
  skill.querySelector('.timeline-experience__title>span').innerText = company;
  skill.querySelector('.timeline-experience__position>span').innerText = position;

  skill.querySelector('.timeline-experience__description').innerText = description;
  if (skills && skills.length) {
    skills.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('timeline-experience__skill');
      div.innerHTML = item;
      skill.querySelector('.timeline-experience__skills')?.append(div);
    });
  }
  skill.querySelector('.timeline-experience__link a').href = link ?? '';
  
  // Возвращаем созданный элемент
  return skill;
}
function skillAnimationInit(skill) {
  const startAnimation = (entries) => {
    if (entries[0].isIntersecting) {
      skill.classList.add('_visible');
    }
  };
  const observer = new IntersectionObserver(throttle(startAnimation, 200));
  const options = { root: null, rootMargin: '0px', threshold: 1 };
  observer.observe(skill, options);
}

async function fetchSkills() {
  // Не отправляем новый запрос
  if (isLoading || !shouldLoad) return;

  // Предотвращаем новые запросы
  isLoading = true;

  const { skills, next } = await server.loadSkills(nextPage);

  skills.forEach(appendSkill);

  // Следующая страница
  nextPage = next;

  // Больше не надо ничего запрашивать
  if (!next) shouldLoad = false;

  // Снимаем флаг
  isLoading = false;
}
export function skillsLoadInit() {
  window.addEventListener('scroll', throttle(checkPosition, 200));
  window.addEventListener('resize', throttle(checkPosition, 200));
}
