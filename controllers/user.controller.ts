export const userData = (req: any, res: any) => {
    res.send({  
        "id" : 1,
        "name":"aness",
        "email" : "aneeskhan3065@gmail.com"
        })
};

export const createUser = (req: any, res: any) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Name and email are required fields'
    });
  }

  res.status(201).json({
    success: true,
    data: {
      name,
      email
    }
  });
};
