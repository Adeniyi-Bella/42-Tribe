// // var numField1 =document.getElementById("numField1");
// // /*Document = An internal property that JS knows how to find
// // Every browser knows how to handle document
// // getelementbyID is a function that can grab ID on the browser*/

// // var numField2 =document.getElementById("numField2");
// // var resultField = document.getElementById("resultField");

// // var form = document.getElementById('xisWhatPErcentOfY');

// // form.addEventListener('submit', function(event) {
// //    if (!numField1.value || !numField2.value) {
// //        alert('Please enter values in the fied')
// //    } else {
// //        var x = parseFloat(numField1.value);
// //        var y = parseFloat(numField2.value);

// //        var result = x/y;
// //        var percent = result * 100;
// //        resultField.innerText = 'Answer: ' + percent + '%';
// //        event.preventDefault();
// //    }
// // });


// // const json = '{"result":true, "count":42}';
// // const obj = JSON.parse(json);

// // let accountDetails = 

// // {
// //   "results": [
// //     {
// //       "gender": "female",
// //       "name": {
// //         "title": "Mrs",
// //         "first": "Violet",
// //         "last": "Walters"
// //       },
// //       "location": {
// //         "street": {
// //           "number": 2905,
// //           "name": "W Dallas St"
// //         },
// //         "city": "Palm Bay",
// //         "state": "Texas",
// //         "country": "United States",
// //         "postcode": 31525,
// //         "coordinates": {
// //           "latitude": "80.4094",
// //           "longitude": "150.1376"
// //         },
// //         "timezone": {
// //           "offset": "+9:00",
// //           "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
// //         }
// //       },
// //       "email": "violet.walters@example.com",
// //       "login": {
// //         "uuid": "fe9e4ead-31f8-48c8-a7cd-fc190be1be8a",
// //         "username": "ticklishzebra802",
// //         "password": "shemale",
// //         "salt": "f9GIYHyC",
// //         "md5": "3b48db7bce0708f11d56c600ba5d0854",
// //         "sha1": "942ae32dd75884d2d04390662b843efa3f1ca0f8",
// //         "sha256": "50bc520f1ad9c60bb1d886fcaa8f6430f2e9b73d4601674e710cb3fa3035ad03"
// //       },
// //       "dob": {
// //         "date": "1950-08-26T04:47:03.336Z",
// //         "age": 72
// //       },
// //       "registered": {
// //         "date": "2012-11-03T21:39:45.888Z",
// //         "age": 10
// //       },
// //       "phone": "(790)-785-6191",
// //       "cell": "(227)-698-1347",
// //       "id": {
// //         "name": "SSN",
// //         "value": "404-77-5453"
// //       },
// //       "picture": {
// //         "large": "https://randomuser.me/api/portraits/women/0.jpg",
// //         "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
// //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
// //       },
// //       "nat": "US"
// //     }
// //   ],
// //   "info": {
// //     "seed": "652124d46c861bb5",
// //     "results": 1,
// //     "page": 1,
// //     "version": "1.3"
// //   }
// // }

// // let accountDetail = JSON.parse(accountDetails)

// const LoadData = async () => {
//   const url = 'https://randomuser.me/api/';
//   const res = await fetch(url);
//   console.log(res.ok)
//   const data =await res.json();
//   // console.log(data)
//   return data;
// }

// // const data_aw = LoadData().then(data => console.log(data));
// setTimeout(() => {
// const getValue = async () => {
//   const accountDetails = await LoadData();
//   // console.log(data_aw.results[0].gender)
// let Name = (accountDetails["results"][0].name)
// let Gender = (accountDetails["results"][0].gender)
// let Picture = (accountDetails["results"][0].picture.medium)
// let guestName = $("#name").append(Name.title, ' ',Name.last, ' ', Name.first)
// let guestGender = $("#gender").append(Gender)
// let guestPicture = $("#pics").append(Picture).attr("href", Picture)
// }
// getValue()
// })




// // console.log(Object.keys(Name).length)
// // console.log(Name.last)
// // var size = Object.keys(Name).length





