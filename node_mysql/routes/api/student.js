const express = require('express')
const router = express.Router()
const stuServ = require('../../services/StudentServices')
const sendMsg = require('../getSendResult')

router.get('/', async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const sex = req.query.sex || -1;
  const name = req.query.name || "";
  return await stuServ.getStudents(page, limit, sex, name);
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  return await stuServ.getStudentById(id);
})

router.post('/', sendMsg.asyncHandler(async (req, res, next) => {
    return await stuServ.addStudent(req.body);
}))

router.delete('/:id', sendMsg.asyncHandler(async (req, res) => {
    return await stuServ.deleteStudent(req.params.id);
}))

router.put('/:id', sendMsg.asyncHandler(async (req, res) => {
    return await stuServ.updateStudent(req.params.id, req.body);
}))

module.exports = router