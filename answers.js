// create 5 burgers (at least 3 should be beef)
db.orders.insertMany([
  {
    protein: 'beef',
    cheese: 1,
    toppings: 'ketchup, mustard,lettuce,tomato,onion'
  },
  {
    protein: 'beef',
    cheese: 1,
    toppings: 'ketchup, mustard,lettuce,tomato,onion'
  },
  { protein: 'beef', cheese: 0, toppings: 'ketchup, mustard,lettuce,tomato' },
  { protein: 'veggie', cheese: 0, toppings: 'lettuce,tomato,onion' },
  { protein: 'chicken', cheese: 1, toppings: 'ketchup,lettuce' }
])
// find all the burgers
db.orders.find({})
// show just the meat of each burger
db.orders.find({}, { protein: true })
// show just the toppings of each burger
db.orders.find({}, { toppings: true })
// show everything but the cheese
db.orders.find({}, { cheese: 0 })
// find all the burgers with beef
db.orders.find({ protein: 'beef' })
// find all the burgers that are not beef
db.orders.find({ protein: { $ne: 'beef' } })
// find the first burger with cheese
db.orders.findOne({ cheese: 1 })
// find one and update the first burger with cheese to have a property of 'double cheese'
db.orders.updateOne(
  { cheese: 1 },
  { $set: { cheese: 'double cheese' }, $currentDate: { lastModified: true } }
)

// find the burger you updated to have double cheese
db.orders.findOne({ cheese: 'double cheese' })
// find and update all the beef burgers to be 'veggie'
db.orders.updateMany(
  { protein: 'beef' },
  { $set: { protein: 'veggie' }, $currentDate: { lastModified: true } }
)
// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.orders.deleteOne({ protein: 'veggie' })

// drop the collection
//Expected Output
//true

db.orders.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()
//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger
