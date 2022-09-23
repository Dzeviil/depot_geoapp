const { codegen } = require ('swagger-axios-codegen')
codegen({
    methodNameMode: 'operationId',
    source:require('../assets/swagger_docs.json'),
    outputDir: '.'
  })
  
