# Rest-Api

## 1 - For Login Request : (POST)

URL => https://nabdh.alwaysdata.net/login/

Required Data => email , password

Response => Errors if Data Not Correct || Success if Data Correct

## 2 - For Signup Request : (POST)

URL => https://nabdh.alwaysdata.net/signup/

Required Data => email , password , confirmPassword , type

Response => (Errors if Data Not Correct || Success if Data Correct ) In Format JSON

## 3 - To get All Assosciations (GET)

URL : https://nabdh.alwaysdata.net/association/

Response => All Associations In Format JSON

## 4 - To get Association By ID (GET)

URL : https://nabdh.alwaysdata.net/association/read.php?id={id}

Response =>  Association In Format JSON


## 5 - To get All Donators (GET)

URL : https://nabdh.alwaysdata.net/donators/

## 6 - To update association (POST)

URL : https://nabdh.alwaysdata.net/association/update.php

Response => association In Format JSON

Required Data => name , state , activity , phone,address,id,idCard,associationLicence,image

## 7 - To update donator (POST)

URL : https://nabdh.alwaysdata.net/association/update.php

Response => association In Format JSON

Required Data => name , state ,  phone,address,id,image

## 8 - To get Association By ID (GET)

URL : https://nabdh.alwaysdata.net/donators/read.php?id={id}

Response => Donator By ID In Format JSON

## 9 - To get All events (GET)

URL : https://nabdh.alwaysdata.net/event/

## 10 - To get Evnet By ID (GET)

URL : https://nabdh.alwaysdata.net/event/read.php?id={id}

## 11 - To delete Evnet By ID (GET)

URL : https://nabdh.alwaysdata.net/event/delete.php?id={id}

## 2 - To create event : (POST)

URL => https://nabdh.alwaysdata.net/event/create.php

Required Data => author,title,description,image,raised,goal,startingDate,endingDate,idCard,associationLicence,image

## 12 - To delete Association By ID (GET)

URL : https://nabdh.alwaysdata.net/association/delete.php?id={id}

## 13 - To delete donator By ID (GET)

URL : https://nabdh.alwaysdata.net/donators/delete.php?id={id}









