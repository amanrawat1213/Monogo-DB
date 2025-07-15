use("CrudDb")

// use can find everything in the documentation in monog db
console.log(db)
// Create Operation
// db.createCollection("courses")


// db.courses.insertOne({
//     name: "Web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })
// if i again run the script it will create another entry


// if you want to insert multiple entries one
// db.courses.insertMany([
//     {
//       "name": "Python Masterclass",
//       "price": 0,
//       "assignments": 10,
//       "projects": 30
//     },
//     {
//       "name": "JavaScript Basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 20
//     },
//     {
//       "name": "C# for Beginners",
//       "price": 0,
//       "assignments": 15,
//       "projects": 40
//     },
//     {
//       "name": "Web Development Fundamentals",
//       "price": 0,
//       "assignments": 12,
//       "projects": 35
//     },
//     {
//       "name": "Java Programming Essentials",
//       "price": 0,
//       "assignments": 14,
//       "projects": 38
//     },
//     {
//       "name": "ReactJS Crash Course",
//       "price": 0,
//       "assignments": 10,
//       "projects": 25
//     },
//     {
//       "name": "SQL Simplified",
//       "price": 0,
//       "assignments": 12,
//       "projects": 30
//     },
//     {
//       "name": "Responsive Web Design",
//       "price": 0,
//       "assignments": 10,
//       "projects": 28
//     },
//     {
//       "name": "Node.js for Beginners",
//       "price": 0,
//       "assignments": 13,
//       "projects": 36
//     },
//     {
//       "name": "Frontend Development with Vue.js",
//       "price": 0,
//       "assignments": 11,
//       "projects": 32
//     }
//   ]
//   )




//   READ
// let a = db.courses.find({price: 0}) 
// console.log(a.count())
// console.log(a)



// UPDATE

// db.courses.updateOne({price: 100}, {$set:{price: 1000}})

// db.courses.updateMany({price: 0}, {$set:{price: 1000}})

// DELETE

db.courses.deleteOne({price: 1000})

// db.courses.deleteMany({price: 1000})

