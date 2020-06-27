const express = require('express')
const { asyncHandler } = require('../getSendResult')
const router = express.Router()
const fs = require('fs')
const path = require('path')

router.get('/', asyncHandler(async (req, res) => {
    const file = path.resolve(__dirname, '../../public/md/one.md')
    return await fs.promises.readFile(file, 'utf8')
}))

module.exports = router