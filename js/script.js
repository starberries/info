const body = document.documentElement;
const desc = document.querySelector(".desc");
const format = document.querySelectorAll(".format");
const btn = document.querySelector(".color-btn");

const bodyOptions = [
    "linear-gradient(150deg,rgba(233, 131, 122, 1) 0%, rgba(168, 88, 144, 1) 50%, rgba(127, 60, 90, 1) 100%)",
    "linear-gradient(150deg,rgba(239, 181, 216, 1) 0%, rgba(172, 200, 241, 1) 20%, rgba(241, 148, 167, 1) 50%, rgba(135, 152, 199, 1) 100%)",
    "linear-gradient(150deg,rgba(209, 153, 242, 1) 0%, rgba(179, 167, 243, 1) 20%, rgba(227, 135, 248, 1) 60%, rgba(60, 134, 230, 1) 100%)",
];

const descOptions = [
    "rgba(233, 131, 122, 0.3)",
    "rgba(239, 181, 216, 0.3)",
    "rgba(209, 153, 242, 0.3)",
];

const formatOptions = [
    "linear-gradient(150deg,rgba(224, 130, 122, 0.8) 0%, rgba(161, 75, 135, 0.8) 50%, rgba(130, 53, 88, 0.8) 100%)",
    "linear-gradient(150deg,rgba(192, 124, 165, 0.8) 0%, rgba(121, 152, 199, 0.8) 50%, rgba(199, 95, 116, 0.8) 90%)",
    "linear-gradient(150deg,rgba(130, 121, 180, 0.8) 0%, rgba(227, 135, 248, 0.8) 27%, rgba(33, 89, 162, 0.8) 91%)",
];

body.style.background = bodyOptions[0];

desc.style.background = descOptions[0];
format.forEach((el) => {
    el.style.background = formatOptions[0];
});
// btn.style.background = bodyOptions[1];
