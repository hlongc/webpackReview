module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb', // 继承阿尔滨的规则
  // 指定解析器选项
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  // 指定脚本的运行环境
  env: {
    browser: true
  },
  // 启用的规则及其各自的错误级别
  rules: {
    indent: ['error', 2], // 缩进风格
    quotes: ['error', 'single'], // 引号类型
    semi: ['error', 'never'], // 不加分号
    'comma-dangle': ['error', 'never'], // 结尾处不加逗号
    'no-console': 'off',
    'no-param-reassign': 'off', // 允许对参数进行赋值
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
}
