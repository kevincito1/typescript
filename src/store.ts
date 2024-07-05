import { listProducts } from "./interface/interface";

const urlProducts: string = 'https://api.escuelajs.co/api/v1/products';
const urlCategories: string = 'https://api.escuelajs.co/api/v1/categories';
const urlUsers: string = 'https://api.escuelajs.co/api/v1/users';

const $Products = document.getElementById('fake_store') as HTMLElement;
const $Container = document.createElement('div') as HTMLElement;
$Container.id = 'principalContainer'



fetch(urlProducts)
    .then(response => response.json())
    .then((data: listProducts)=>{
        data.dataProducts.forEach((product) => {
            const $Figure = document.createElement('figure') as HTMLElement;
            const $Img = document.createElement('img') as HTMLImageElement;
            const $Figcaption = document.createElement('figcaption') as HTMLElement;
            const $Title = document.createElement('h1') as HTMLElement;
            $Title.innerText = product.title;
            const $Id = document.createElement('h3') as HTMLElement;
            $Id.innerText = product.id.toString();
            const $Price = document.createElement('h3') as HTMLElement;
            $Price.innerText = product.price.toString();
            const $Description = document.createElement('paragraph') as HTMLElement;
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

            $Container.appendChild($Figure)

        });

        $Products.appendChild($Container)

    });