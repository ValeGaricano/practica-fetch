let container = document.querySelector(".product-container");
fetch()
    .then(response => response.json())
    .then(data => {
        data.menu.forEach(platos => {
            const productElement = document.createElement("div");
            productElement.className = "product";
        
            productElement.innerHTML = `
                <div class="col-3">
                    <img src="${platos.imagen}" alt="${platos.descripcion}" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">${platos.nombre}</h4>
                    </div>
                    <p class="mb-1">${platos.descripcion}</p>
                </div>
            </div>
        </div>
            `;
            
            container.appendChild(productElement); 
        });
    })
    .catch(error => {
        console.error("Error al obtener el JSON:", error);
    });

