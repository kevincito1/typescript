const urlProducts = 'https://api.escuelajs.co/api/v1/products';
const urlCategories = 'https://api.escuelajs.co/api/v1/categories';
const urlUsers = 'https://api.escuelajs.co/api/v1/users';
const $Products = document.getElementById('fake_store');
const $Container = document.createElement('div');
$Container.id = 'principalContainer';
fetch(urlProducts)
    .then(response => response.json())
    .then((data) => {
    data.dataProducts.forEach((product) => {
        const $Figure = document.createElement('figure');
        const $Img = document.createElement('img');
        const $Figcaption = document.createElement('figcaption');
        const $Title = document.createElement('h1');
        $Title.innerText = product.title;
        const $Id = document.createElement('h3');
        $Id.innerText = product.id.toString();
        const $Price = document.createElement('h3');
        $Price.innerText = product.price.toString();
        const $Description = document.createElement('paragraph');
        $Description.innerText = product.description;
        $Img.setAttribute('src', product.images[0]);
        $Img.setAttribute('alt', product.title);
        $Img.setAttribute('title', product.title);
        $Figcaption.appendChild($Title);
        $Figcaption.appendChild($Id);
        $Figcaption.appendChild($Price);
        $Figcaption.appendChild($Description);
        $Figure.appendChild($Img);
        $Figure.appendChild($Figcaption);
        $Container.appendChild($Figure);
    });
    $Products.appendChild($Container);
});
export {};
