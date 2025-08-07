"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let listProduct = [
    {
        id: 'M01',
        name: 'Ao so mi',
        price: 250000,
        catergory: {
            id: 'P01',
            name: 'Thoi trang nam'
        },
        discount: 20,
    },
    {
        id: 'M02',
        name: 'Chan vay',
        price: 100000,
        catergory: {
            id: 'P02',
            name: 'Thoi trang nu'
        },
        discount: 10,
    }, {
        id: 'M04',
        name: 'Binh hoa su',
        price: 300000,
        catergory: {
            id: 'P04',
            name: 'Decor'
        },
    }
];
function getFinalPrice(pr) {
    let finalPrice = pr.price;
    if (typeof pr.discount === 'number') {
        finalPrice = finalPrice - (pr.price * pr.discount / 100);
    }
    return `Ten: ${pr.name}
    Gia goc: ${pr.price}
    Gia sau giam gia: ${finalPrice}
    Danh muc: ${pr.catergory.name}`;
}
listProduct.forEach((temp) => console.log(getFinalPrice(temp)));
