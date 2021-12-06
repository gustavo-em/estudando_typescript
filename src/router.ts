import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request: Request, response: Response){
    const course = new CreateCourseService({name: "Gust", duration: 10})
    course.execute({name: "gustavo", duration: 10})
    
    return response.json({a:'eisso'})
}