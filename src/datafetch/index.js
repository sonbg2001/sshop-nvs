import data from '~/data';

//Get Data
const getDatas = () => {
    let dat = JSON.parse(localStorage.getItem('data'));
    if (!dat) dat = data;
    return dat;
};
const getData = getDatas();
//Save Data
function saveDatas(dat) {
    localStorage.setItem('data', JSON.stringify(dat));
}

//Products
function getAllProduct() {
    return getData.products;
}

function getProductById(id) {
    let products = getData.products;

    products = products.filter((product) => Number(product.id) === Number(id));
    if (products.length > 0) return products[0];

    return {};
}

function getProductBySortAndFilter(sortType, filter = '') {
    let products = getData.products;
    switch (sortType) {
        case 'default':
            products = [...getData.products];
            break;
        case 'nameasc':
            products.sort((a, b) => {
                if (b.name > a.name) return 1;
                else return -1;
            });
            break;
        case 'namedesc':
            products.sort((a, b) => {
                if (a.name > b.name) return 1;
                else return -1;
            });
            break;
        case 'priceasc':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'pricedesc':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'new':
            products.sort((a, b) => b.id - a.id);
            break;
        default:
        //code
    }
    if (filter) products = products.filter((product) => product.type === filter);
    return products;
}

//User
function getAllUser() {
    return getData.users;
}

function getUserById(id) {
    let users = getData.users;
    users = users.filter((user) => user.id === id);
    console.log(id, users);
    if (users.length > 0) return users[0];
    else return {};
}

function getUserByUsername(username) {
    let users = getData.users;
    users = users.filter((user) => user.username === username);
    if (users.length > 0) return users[0];
    else return {};
}

function getUserByUsernameAndPassword(username, password) {
    let users = getData.users;
    users = users.filter((user) => user.username === username && user.password === password);
    if (users.length > 0) return users[0];
    else return {};
}

function editUser(user) {
    console.log('edit');
    let dat = getData;
    for (let i = 0; i < dat.users.length; i++) {
        if (dat.users[i].id === user.id) {
            dat.users[i] = { ...user };
            break;
        }
    }
    saveDatas(dat);
}

const datafetch = {
    //Data
    getData,
    saveDatas,
    //Product
    getAllProduct,
    getProductById,
    getProductBySortAndFilter,
    //User
    getAllUser,
    getUserById,
    getUserByUsername,
    getUserByUsernameAndPassword,
    editUser,
};

export default datafetch;
