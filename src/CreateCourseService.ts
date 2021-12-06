

/**
 * name - string
 * duration - number
 */

interface Course{
    name: string;
    duration: number
}

class CreateCourseService {
    name;
    constructor({name}: Course){
        this.name = name
    }

    execute({ name, duration }: Course){
        console.log(name,duration, this.name)
    }
}

export default CreateCourseService