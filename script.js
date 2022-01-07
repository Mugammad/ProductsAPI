fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        let products = data.filter((productList) => {
            return (
              productList.price <= "30"
            );
          });

        products.forEach(element => {
            document.getElementById('output').innerHTML += `
                    <div class="col-md-3 border border-primary box p-2 m-2">
                        <img src="${element.image}" class="img-fluid">
                        <h4 class="pt-3">${element.title}</h4>
                        <h5>R ${element.price}</h6>
                        <p>${element.description}</p>
                    </div>
            `
        });
          
    });