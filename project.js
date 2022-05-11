const Student =[
    
    {  id: 1,
      first_name: "Calley",
      last_name: "Rivitt",
      email: "crivitt0@dell.com",
      gender: "Female",
      ip_address: "128.88.59.251",
      phone_numer: "474-878-8611",
      home_adress: "6 Farwell Drive"
  },
  {
      id: 2,
      first_name: "Germayne",
      last_name: "MacCartney",
      email: "gmaccartney1@newsvine.com",
      gender: "Male",
      ip_address: "214.42.108.177",
      phone_numer: "619-329-8734",
      home_adress: "4 Mayer Terrace"
  },
  {
      id: 3,
      first_name: "Honor",
      last_name: "Becken",
      email: "hbecken2@themeforest.net",
      gender: "Female",
      ip_address: "229.118.185.13",
      phone_numer: "770-768-9865",
      home_adress: "32796 Victoria Place"
  }
]
////////////////////////////////////////////////////
//array iterations. assignment
//1.mapping

const mapping= Student.map(value=>value.first_name)
console.log(mapping);
