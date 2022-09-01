import routes from "./routes";

export default class App {
    constructor() {
        this.route = "/";
        this.mountPage();
    }

    mountPage() {
        new routes[this.route](document.querySelector("#app"));
    }
}
