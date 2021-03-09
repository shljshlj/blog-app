class User {
  constructor(id, name, username, address = null, company = null, email = null, phone = null, website = null) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.address = address && createInfoObjArray(address);
    this.company = company && createInfoObjArray(company);
    this.contact = createInfoObjArray({ email, phone, website });
  }

  getUserPreview() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      city: this.address ? this.address.city : null,
      companyName: this.company ? this.company.name : null
    }
  }

  getAvatarUrl() {
    return `https://api.multiavatar.com/${this.username}.svg`;
  }
}

function createInfoObjArray(dataObj) {
  const arr = [];
  for (const property in dataObj) {
    arr.push({ type: property, info: dataObj[property] })
  }

  return arr;
}

export default User;



/*
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
}
*/