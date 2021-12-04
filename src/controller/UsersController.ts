import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


class UsersController {
  async create(request: Request, response: Response): Promise<Response> {// Promete o retorno de uma resposta, se não ouver, acusará erro!
    const { email } = request.body

    const usersService = new UsersService()

    const user = await usersService.create(email)

    return response.json(user)
  }
}

export { UsersController }