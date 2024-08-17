document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM completamente cargado y analizado');
    
    const productListContainer = document.querySelector('.product-list');
    const tabButtonsContainer = document.getElementById('tab-buttons');
    const tabContentContainer = document.getElementById('tab-content');

    if (!productoDetalle || productoDetalle.length === 0) {
        console.error('No se encontraron productos en productoDetalle');
        return;
    }

    productoDetalle.forEach(producto => {
        // Crear elemento de producto
        const productElement = document.createElement('div');
        productElement.className = 'col-xl-3 col-lg-4 col-md-4 col-12 hide-plan-button';
        productElement.innerHTML = `
            <div class="single-product">
                <div class="product-img">
                    <a href="#" onclick="showTab(${producto.id})">
                        <img class="default-img" src="${producto.imgDefault}" alt="#">
                        <img class="hover-img" src="${producto.imgHover}" alt="#">
                    </a>
                </div>
                <div class="product-content">
                    <h3><a href="#" onclick="showTab(${producto.id})">${producto.nombre}</a></h3>
                    <div class="product-price">
                        <span>$${producto.precio} ARS</span>
                    </div>
                </div>
            </div>
        `;
        productListContainer.appendChild(productElement);

    });

    function showTab(id) {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        document.getElementById(`tab-${id}`).classList.add('active');
    }

    // Mostrar la primera pestaña por defecto
    if (productoDetalle.length > 0) {
        showTab(productoDetalle[0].id);
    }
});
