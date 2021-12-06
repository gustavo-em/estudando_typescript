"use strict";
/**
 * name - string
 * duration - number
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    constructor({ name }) {
        this.name = name;
    }
    execute({ name, duration }) {
        console.log(name, duration, this.name);
    }
}
exports.default = CreateCourseService;
