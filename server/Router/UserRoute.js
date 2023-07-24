import express from 'express'
import { UnfollowUser, deleteUser, followUser, getAllUser, getUser, updateUser } from '../Controllers/UserControllers.js'
import authMiddleWare from '../Middleware/authMiddleWare.js'
 const router = express.Router()

router.get('/', getAllUser)
router.get('/:id',getUser)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id' ,authMiddleWare, deleteUser)
router.put('/:id/follow' ,authMiddleWare, followUser)
router.put('/:id/unfollow' ,authMiddleWare, UnfollowUser)

export default router