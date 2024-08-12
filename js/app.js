(() => {
    "use strict";
    function headerScroll() {
        const headerEl = document.querySelector(".header");
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) headerEl.classList.remove("_scroll"); else headerEl.classList.add("_scroll");
        };
        const headerObserver = new IntersectionObserver(callback);
        headerObserver.observe(headerEl);
    }
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const createElement = (tag, attrs, children = []) => {
        const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
        Object.keys(attrs).forEach((name => {
            element.setAttribute(name, String(attrs[name]));
        }));
        if (children.length) children.forEach((child => {
            const childElement = createElement(...child);
            element.appendChild(childElement);
        }));
        return element;
    };
    var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const getAttrs = element => Array.from(element.attributes).reduce(((attrs, attr) => {
        attrs[attr.name] = attr.value;
        return attrs;
    }), {});
    const getClassNames = attrs => {
        if (typeof attrs === "string") return attrs;
        if (!attrs || !attrs.class) return "";
        if (attrs.class && typeof attrs.class === "string") return attrs.class.split(" ");
        if (attrs.class && Array.isArray(attrs.class)) return attrs.class;
        return "";
    };
    const combineClassNames = arrayOfClassnames => {
        const classNameArray = arrayOfClassnames.flatMap(getClassNames);
        return classNameArray.map((classItem => classItem.trim())).filter(Boolean).filter(((value, index, self) => self.indexOf(value) === index)).join(" ");
    };
    const toPascalCase = string => string.replace(/(\w)(\w*)(_|-|\s*)/g, ((g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase()));
    const replaceElement = (element, {nameAttr, icons, attrs}) => {
        const iconName = element.getAttribute(nameAttr);
        if (iconName == null) return;
        const ComponentName = toPascalCase(iconName);
        const iconNode = icons[ComponentName];
        if (!iconNode) return console.warn(`${element.outerHTML} icon name was not found in the provided icons object.`);
        const elementAttrs = getAttrs(element);
        const [tag, iconAttributes, children] = iconNode;
        const iconAttrs = {
            ...iconAttributes,
            "data-lucide": iconName,
            ...attrs,
            ...elementAttrs
        };
        const classNames = combineClassNames([ "lucide", `lucide-${iconName}`, elementAttrs, attrs ]);
        if (classNames) Object.assign(iconAttrs, {
            class: classNames
        });
        const svgElement = createElement$1([ tag, iconAttrs, children ]);
        return element.parentNode?.replaceChild(svgElement, element);
    };
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const createIcons = ({icons = {}, nameAttr = "data-lucide", attrs = {}} = {}) => {
        if (!Object.values(icons).length) throw new Error("Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`");
        if (typeof document === "undefined") throw new Error("`createIcons()` only works in a browser environment.");
        const elementsToReplace = document.querySelectorAll(`[${nameAttr}]`);
        Array.from(elementsToReplace).forEach((element => replaceElement(element, {
            nameAttr,
            icons,
            attrs
        })));
        if (nameAttr === "data-lucide") {
            const deprecatedElements = document.querySelectorAll("[icon-name]");
            if (deprecatedElements.length > 0) {
                console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide");
                Array.from(deprecatedElements).forEach((element => replaceElement(element, {
                    nameAttr: "icon-name",
                    icons,
                    attrs
                })));
            }
        }
    };
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const defaultAttributes = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 2,
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    };
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const Menu = [ "svg", defaultAttributes, [ [ "line", {
        x1: "4",
        x2: "20",
        y1: "12",
        y2: "12"
    } ], [ "line", {
        x1: "4",
        x2: "20",
        y1: "6",
        y2: "6"
    } ], [ "line", {
        x1: "4",
        x2: "20",
        y1: "18",
        y2: "18"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const ArrowRight = [ "svg", defaultAttributes, [ [ "path", {
        d: "M5 12h14"
    } ], [ "path", {
        d: "m12 5 7 7-7 7"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const Globe = [ "svg", defaultAttributes, [ [ "circle", {
        cx: "12",
        cy: "12",
        r: "10"
    } ], [ "path", {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
    } ], [ "path", {
        d: "M2 12h20"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const X = [ "svg", defaultAttributes, [ [ "path", {
        d: "M18 6 6 18"
    } ], [ "path", {
        d: "m6 6 12 12"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const Instagram = [ "svg", defaultAttributes, [ [ "rect", {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5"
    } ], [ "path", {
        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    } ], [ "line", {
        x1: "17.5",
        x2: "17.51",
        y1: "6.5",
        y2: "6.5"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const Mail = [ "svg", defaultAttributes, [ [ "rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
    } ], [ "path", {
        d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const Send = [ "svg", defaultAttributes, [ [ "path", {
        d: "m22 2-7 20-4-9-9-4Z"
    } ], [ "path", {
        d: "M22 2 11 13"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const Copyright = [ "svg", defaultAttributes, [ [ "circle", {
        cx: "12",
        cy: "12",
        r: "10"
    } ], [ "path", {
        d: "M14.83 14.83a4 4 0 1 1 0-5.66"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const BriefcaseBusiness = [ "svg", defaultAttributes, [ [ "path", {
        d: "M12 12h.01"
    } ], [ "path", {
        d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
    } ], [ "path", {
        d: "M22 13a18.15 18.15 0 0 1-20 0"
    } ], [ "rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "6",
        rx: "2"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const MapPin = [ "svg", defaultAttributes, [ [ "path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    } ], [ "circle", {
        cx: "12",
        cy: "10",
        r: "3"
    } ] ] ];
    /**
 * @license lucide v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
    const Link = [ "svg", defaultAttributes, [ [ "path", {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    } ], [ "path", {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    } ] ] ];
    const lucideIconsInit = () => {
        createIcons({
            icons: {
                Menu,
                ArrowRight,
                Globe,
                X,
                Instagram,
                Mail,
                Send,
                Copyright,
                BriefcaseBusiness,
                MapPin,
                Link
            }
        });
    };
    const burgerMenuInit = () => {
        const menu = document.querySelector("header nav.menu");
        const burgerButton = document.querySelector("header .menu__btn");
        burgerButton.addEventListener("click", (() => {
            menu.classList.toggle("open");
        }));
    };
    function throttle(callback, delay) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date;
            if (now - lastCall < delay) return;
            lastCall = now;
            callback(...args);
        };
    }
    const server = {
        async loadSkills(page = 1) {
            const SHOW_ELEMENTS = 4;
            const file = "json/skills.json";
            let response = await fetch(file, {
                method: "GET"
            });
            if (!response.ok) return Promise.reject(new Error(`Could not load ${file}`));
            let result = await response.json();
            if (result?.products) {
                const products = result.products.slice(SHOW_ELEMENTS * (page - 1), SHOW_ELEMENTS * page);
                const finished = SHOW_ELEMENTS * page >= result.products.length;
                const next = finished ? null : page + 1;
                return new Promise((resolve => {
                    setTimeout((() => {
                        resolve({
                            products,
                            next
                        });
                    }), 150);
                }));
            }
        }
    };
    let nextPage = 2;
    let isLoading = false;
    let shouldLoad = true;
    function checkPosition() {
        const height = document.body.offsetHeight;
        const screenHeight = window.innerHeight;
        const scrolled = window.scrollY;
        const threshold = height - screenHeight / 4;
        const position = scrolled + screenHeight;
        if (position >= threshold) fetchSkills().catch((error => console.log(error)));
    }
    function appendSkill(skillData) {
        if (!skillData) return;
        const main = document.querySelector(".experience__timeline");
        const skillNode = composeSkillItem(skillData);
        main.append(skillNode);
    }
    function composeSkillItem(skillData) {
        if (!skillData) return;
        const template = document.querySelector(".timeline-experience__item");
        const skill = template.content.cloneNode(true);
        const {year, position, company, description, skills, link} = skillData;
        skill.querySelector(".year-experience__title").innerText = year.start + " - " + year.end;
        skill.querySelector(".timeline-experience__title").innerText = company;
        skill.querySelector(".timeline-experience__position").innerText = position;
        skill.querySelector(".timeline-experience__description").innerText = description;
        if (skills && skills.length) skills.forEach((item => {
            const div = document.createElement("div");
            div.classList.add("timeline-experience__skill");
            div.innerHTML = item;
            skill.querySelector(".timeline-experience__skills")?.append(div);
        }));
        skill.querySelector(".timeline-experience__link a").href = link ?? "";
        return skill;
    }
    async function fetchSkills() {
        if (isLoading || !shouldLoad) return;
        isLoading = true;
        const {skills, next} = await server.loadSkills(nextPage);
        skills.forEach(appendSkill);
        nextPage = next;
        if (!next) shouldLoad = false;
        isLoading = false;
    }
    function skillsLoadInit() {
        window.addEventListener("scroll", throttle(checkPosition, 200));
        window.addEventListener("resize", throttle(checkPosition, 200));
    }
    lucideIconsInit();
    function documentActions(e) {
        e.target;
    }
    window.onload = function() {
        document.addEventListener("click", documentActions);
        burgerMenuInit();
        headerScroll();
        skillsLoadInit();
    };
})();