import app from './app.js'

// const PORT = process.env.PORT 
app.listen(process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT }`)
})