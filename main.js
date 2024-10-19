import express from 'express'
import 'dotenv/config'
const app=express()
// const port=3000

app.get('/',(req,res) => {
  res.send("First backend to deploy!")
}
)
app.get('/jsondata',(req,res) => {
    res.json({name:"vivekant kumar",favguy:"dhara"})
  }
  )
app.get('/:name',(req,res) => {
  res.send(`Hellow ${req.params.name}`)
}
)



app.listen(process.env.port,() => {
  console.log(`app is listing on http://localhost:${process.env.port}/`);
  
}
)