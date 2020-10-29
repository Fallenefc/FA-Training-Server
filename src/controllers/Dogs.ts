import Dog from '../models/Dogs'

export const getDogs = async (_, res): Promise<void> => {
  const doggos = await Dog.find();
  res.status(200);
  res.send(doggos);
}

// Have to improve Post Dog to send the new as a response, or does it already send it? Yes, it does.
export const postDog = async (req, res): Promise<void> => {
  try {
    const newDoggo = req.body;
    const createdDog = await Dog.create(newDoggo);
    console.log(`Added to database: ${JSON.stringify(newDoggo)}`)
    res.send(createdDog)
  }
  catch (e) {
    console.error(`Error adding a dog to the database: ${e}`)
  }
}

export const updateDoggo = async (req, res): Promise<void> => {
  try {
    const id = req.params.id;
    const type = req.params.type;
    const typeMap = {
      'Up': 1,
      'Down': -1
    }
    const dog = await Dog.findByIdAndUpdate(id, {
      $inc: { age: typeMap[type]}
    })
    res.status(200);
    res.send(dog);
  } 
  catch(e) {
    console.log(e);
    res.status(500);
  }
}