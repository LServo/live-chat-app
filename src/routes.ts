import { Router } from 'express'
import { MessagesController } from './controller/MessagesController'
import { SettingsController } from './controller/SettingsController'
import { UsersController } from './controller/UsersController'

const router = Router()

const messagesController = new MessagesController()
const settingsController = new SettingsController()
const usersController = new UsersController()

router.get('/settings/:username', settingsController.findByUserName)
router.put('/settings/:username', settingsController.update)
router.get('/messages/:id', messagesController.showByUser)
router.post('/messages', messagesController.create)
router.post('/settings', settingsController.create)
router.post('/users', usersController.create)

export { router }
