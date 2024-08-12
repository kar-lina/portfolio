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
    fetchSkills().catch(error => console.log(error));
  }
}
function appendSkill(skillData) {
  // Если данных нет, ничего не делаем
  if (!skillData) return;

  // Храним ссылку на элемент
  const main = document.querySelector('.experience__timeline');

  // Превращает данные в HTML-элемент
  const skillNode = composeSkillItem(skillData);

  // Добавляем созданный элемент в <main>
  main.append(skillNode);
}
function composeSkillItem(skillData) {
  // Если ничего не передано, ничего не возвращаем
  if (!skillData) return;

  // Обращаемся к старому шаблону
  const template = document.querySelector('#timeline-experience__template');
  
  // Клонируем
  console.log('template', template.content);
  const skill = template.content

  // Получаем нужную информацию
  const { year, position, company, description, skills, link } = skillData;

  // Добавляем соответствующие тексты и числа
  skill.querySelector('.year-experience__title').innerText = year.start + ' - ' + year.end;
  skill.querySelector('.timeline-experience__title').innerText = company;
  skill.querySelector('.timeline-experience__position').innerText = position;
  skill.querySelector('.timeline-experience__description').innerText = description;
  if (skills && skills.length) {
    skills.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('timeline-experience__skill');
      div.innerHTML = item;
      skill.querySelector('.timeline-experience__skills')?.append(div);
    });
  }
  skill.querySelector('.timeline-experience__link a').href = link?? '';
  // Возвращаем созданный элемент
  return skill;
}

async function fetchSkills() {
  // Не отправляем новый запрос
  if (isLoading || !shouldLoad) return;

  // Предотвращаем новые запросы
  isLoading = true;

  const { skills, next } = await server.loadSkills(nextPage);
  console.log('skills', skills);
  
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
