const router = require('express').Router()
module.exports = router

router.use('/brands', require('./brandRoutes'))
router.use('/creditCards', require('./creditCardRoutes'))
router.use('/departments', require('./departmentRoutes'))
router.use('/merchants', require('./merchantRoutes'))
router.use('/products', require('./productsRoute'))
router.use('/reviews', require('./reviewRoutes'))
router.use('/users', require('./usersRoutes'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
