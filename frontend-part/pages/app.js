import page from '../../node_modules/page/page.mjs';
import { render } from '../../node_modules/lit-html/lit-html.js';
import { HomePage } from './HomePage.js';
import { AboutUs } from './aboutUs.js';
import { ContactUs } from './ContactUs.js';



const Main = document.querySelector("main");
Main.id = "root";

const root = document.getElementById("root");


function UpdateCTX(ctx, next) {
    ctx.render = (template) => renderer(template, root);
    next()
}


function renderer(template, root) {
    render(template, root);

}


page(UpdateCTX);
page("/", HomePage);
page("/aboutUs", AboutUs);
page("/contactUs", ContactUs);


page.start();