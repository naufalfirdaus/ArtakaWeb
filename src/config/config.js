const config = {
    domain : 'http://localhost:3001/artaka/api',
    urlImage : 'http://localhost:3001/artaka/api/product/images',
    domainAuth : 'http://localhost:3001/artaka/auth/',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key"
  }
  
  export default config