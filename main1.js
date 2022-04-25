const LoadData = async () => {
  const accountDetails = await (await fetch('https://randomuser.me/api/?results=10')).json();
  // console.log(accountDetails.ok) //boolean value
  return accountDetails;
}

const getValue = async () => {
  const accountDetails = await LoadData();

const fakeImages = document.querySelectorAll(".fake-image");
	for (var i = 0; i < fakeImages.length; i++) {
  console.log(accountDetails["results"][i].gender)
    fakeImages[i].innerHTML+= accountDetails["results"][i].name.title + ' ';
    fakeImages[i].innerHTML+= accountDetails["results"][i].name.first + ' ';
    fakeImages[i].innerHTML+= accountDetails["results"][i].name.last + ' ';
    fakeImages[i].innerHTML+= '<p></p>' + accountDetails["results"][i].gender + '<p></p>';
    var img = document.createElement("img");
    img.src = accountDetails["results"][i].picture.medium;
    fakeImages[i].appendChild(img);
    fakeImages[i].innerHTML+= '<hr>'
    // fakeImages[i].innerHTML+= '<p></p>' + '<img src="accountDetails["results"][i].picture.medium"> ';
	}
}
getValue()
