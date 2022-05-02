const LoadData = async () => {
  const accountDetails = await (await fetch('https://randomuser.me/api/?results=5')).json();
  // console.log(accountDetails.ok) //boolean value
  return accountDetails;
}

const getValue = async () => {
  const accountDetails = await LoadData();

const fakeImages = document.querySelector(".fake-image");
	for (var i = 0; i < accountDetails.results.length; i++) {
    let title= accountDetails["results"][i].name.title + ' ';
    let firstName= accountDetails["results"][i].name.first + ' ';
    let lastName= accountDetails["results"][i].name.last + ' ';
    let gender= '<p></p>' + accountDetails["results"][i].gender + '<p></p>';
    let img  = `<img src=${accountDetails["results"][i].picture.medium}>`
    fakeImages.innerHTML+= `${title} ${firstName} ${lastName} ${gender}`;
    fakeImages.innerHTML+= img + '<p></p>';
	}
}
getValue()
