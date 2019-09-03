function router(app) {
  app.get('/products/getProducts', function (req, res) {
      res.send({
          code: 200,
          message: '查询成功！',
          products: [

          ]
      })
  })

  app.get('/products/getRecommands', function (req, res) {
      res.send({
          code: 200,
          message: '查询成功！',
          recommandProducts: [

          ]
      })
  })
}

module.exports = router