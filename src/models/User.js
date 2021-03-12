class User {
  constructor(id, name, username, address = null, company = null, email = null, phone = null, website = null) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.address = address;
    this.company = company;
    this.email = email;
    this.phone = phone;
    this.website = website;
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
    return `https://api.multiavatar.com/${this.id}.svg`;
  }

  getShortInfo() {
    return [
      ['website', this.website],
      ['address', this.address ? this.address.city : null, 'Lives in'],
      ['company', this.company ? this.company.name : null, 'Works at']
    ].map(infoArr => {
      return {
        infoType: infoArr[0],
        infoValue: infoArr[1],
        text: infoArr[2] ? `${infoArr[2].trim()} ` : null
      }
    });
  }
}

export default User;


/*
function createInfoObjArray(dataObj) {
  const arr = [];
  for (const property in dataObj) {
    arr.push({ type: property, info: dataObj[property] })
  }

  return arr;
}
*/

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