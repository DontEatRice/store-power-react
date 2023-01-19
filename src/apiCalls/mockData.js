export const stores = [
    {
        "id": 1,
        "name": "Frog Shop",
        "city": "Warszawa",
        "street": "al. Marszałkowska 20",
        "phoneNumber": null,
        "email": "warsaw@frog.shop",
        "password": "$2a$08$5HOqf6rJ8u5dfUP84k4cyuaZCbJFZlMPRr06VqPktq0TeyXu9bYX.",
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    },
    {
        "id": 2,
        "name": "Jedzeniomat",
        "city": "Warszawa",
        "street": "Koszykowa 85B",
        "phoneNumber": null,
        "email": "koszykowa@jedzeniomat.net",
        "password": "$2a$08$5HOqf6rJ8u5dfUP84k4cyuSXxOOpBi0OnrFuG/TvPS8uysdKKOjvC",
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    }
]

export const products = [
    {
        "id": 1,
        "name": "Mleko 2%",
        "imageLink": "https://pl.wikipedia.org/wiki/Mleko#/media/Plik:Milk_glass.jpg",
        "description": "Pij mleko będziesz wielki!",
        "unitOfMeasureId": 1,
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    },
    {
        "id": 2,
        "name": "Ziemniaki 1KG",
        "imageLink": "https://dietetycy.org.pl/wp-content/uploads/2016/09/156549667_m-1600x1067.jpg",
        "description": "Frytki, Czipsy, czyli to co tygryski lubią najbardziej!",
        "unitOfMeasureId": 3,
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    }
]

export const pricebooks = [
    {
        "id": 1,
        "price": "1.23",
        "quantity": 1,
        "validFrom": null,
        "validTo": null,
        "storeId": 1,
        "productId": 1,
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    },
    {
        "id": 2,
        "price": "0.89",
        "quantity": 1,
        "validFrom": "2022-12-15T23:16:43.000Z",
        "validTo": "2023-02-15T23:16:43.000Z",
        "storeId": 1,
        "productId": 2,
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    },
    {
        "id": 3,
        "price": "1.00",
        "quantity": 1,
        "validFrom": null,
        "validTo": null,
        "storeId": 2,
        "productId": 1,
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    },
    {
        "id": 4,
        "price": "0.99",
        "quantity": 1,
        "validFrom": "2022-12-15T23:16:43.000Z",
        "validTo": "2023-02-15T23:16:43.000Z",
        "storeId": 2,
        "productId": 2,
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    }
]

export const units = [
    {
        "id": 1,
        "label": "Litry",
        "name": "L",
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    },
    {
        "id": 2,
        "label": "Sztuki",
        "name": "SZT",
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    },
    {
        "id": 3,
        "label": "Kilogramy",
        "name": "KG",
        "createdAt": "2023-01-15T23:16:43.000Z",
        "updatedAt": "2023-01-15T23:16:43.000Z"
    }
]