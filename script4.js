const products = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

// console.log(products.photos);

const newProduct = products.filter(products => products.photos && products.photos.length > 0);

newProduct.sort(function(a, b) {
    if (a.price > b.price) {
        return 1;
    } else {
        return -1;
    }
});

console.log(newProduct);