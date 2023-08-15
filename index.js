document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("product-container");

    fetch('data.json')
        .then(response => 
            {return response.json();
            })
        .then(data => {
            data.menu.forEach(categoria => {
                categoria.platos.forEach(plato => {
                    const productElement = document.createElement("div");
                    productElement.className = "product";

                    productElement.innerHTML = `
                        <div class="col-3">
                            <img src="${plato.imagen}" alt="${plato.descripcion}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${plato.nombre}</h4>
                            </div>
                            <p class="mb-1">${plato.descripcion}</p>
                        </div>
                    </div>
                </div>`;

                container.appendChild(productElement);
                });
            });
        })
        .catch(error => {
            console.error("Error al obtener el JSON:", error);
        });
});
