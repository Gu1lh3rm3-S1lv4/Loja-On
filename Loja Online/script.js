// Exemplo de lista de produtos com preços
const products = [
    { id: 1, name: "Celular Samsung Galaxy", category: "eletronicos", image:"https://tienda.travel.cl/ccstore/v1/images/?source=/file/v8054972938904177117/products/SKU95895.1.jpg&height=300&width=300", description: "Celular com ótima câmera e desempenho.", price: 1499.99 },
    { id: 2, name: "Notebook Dell Inspiron", category: "eletronicos", image: "https://http2.mlstatic.com/D_NQ_NP_758506-MLU77355062283_062024-O.webp", description: "Notebook rápido e ideal para trabalho.", price: 3499.99 },
    { id: 3, name: "Camiseta Nike", category: "moda", image: "https://cdn.awsli.com.br/600x700/2550/2550456/produto/230932943/f4009868-d725-4b08-a200-2e394e5dffb6-lhwfnqqn7c.jpeg", description: "Camiseta confortável e estilosa.", price: 129.99 },
    { id: 4, name: "Bola de Futebol Adidas", category: "esportes", image: "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/0/4/04062056926198_1.jpg", description: "Bola profissional para jogos.", price: 199.99 },
    { id: 5, name: "Sofá de Couro", category: "movel", image: "https://images.tcdn.com.br/img/img_prod/1167086/sofa_deeni_100_couro_legitimo_melhor_relacao_custo_beneficio_1051_1_f1a900b8db347d54a18a795611e6e037.jpg", description: "Sofá de alta qualidade para sua sala.", price: 2999.99 },
    { id: 6, name: "Smartwatch Apple", category: "eletronicos", image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-experience-for-entire-family-hero_09152020_big.jpg.large.jpg", description: "Relógio inteligente com várias funcionalidades.", price: 2499.99 },
    { id: 7, name: "Tênis vans", category: "moda", image: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hdc/h6d/h00/h00/12093664788510/1002900210004U-02-BASEIMAGE-Midres.jpg", description: "Tênis confortável e estiloso para o dia a dia.", price: 499.99 },
    { id: 8, name: "Cadeira Escritório Ergonomica", category: "movel", image: "https://eletroangeloni.vtexassets.com/arquivos/ids/508959-800-450?v=638224365263200000&width=800&height=450&aspect=true", description: "Cadeira ergonômica para o seu conforto.", price: 899.99 },
    { id: 9, name: "Televisão LG NanoCell '50'", category: "eletronicos", image:"https://www.lg.com/content/dam/channel/wcms/br/images/tv/50nano77sra_awz_essp_br_c/gallery/DZ02.jpg", description: "", price: 1499.99 },
    { id: 10, name: "Playstation 5", category: "eletronicos", image: "https://guyane.microforce.biz/56311-home_default/sony-console-ps5-slim-optique.jpg", description: "", price: 3499.99 },
    { id: 11, name: "Iphone 14 Plus", category: "eletronicos", image: "https://istoedinheiro.com.br/wp-content/uploads/sites/17/2022/10/iphone-14-model-select-202209-6-7inch-av2-e1666991373100.jpeg", description: "", price: 129.99 },
    { id: 12, name: "Cama de casal box", category: "movel", image: "https://images.tcdn.com.br/img/img_prod/1328803/cama_box_conjugado_casal_sp_moveis_molas_ensacadas_43x138x188cm_237_2_b7f19f3ba8ac46bf272af2e8e7e41d57.jpg", description: "", price: 2999.99 },
    { id: 14, name: "Smartwatch Apple", category: "eletronicos", image: "https://via.placeholder.com/200", description: "Relógio inteligente com várias funcionalidades.", price: 2499.99 },
    { id: 15, name: "Tênis Puma", category: "moda", image: "https://via.placeholder.com/200", description: "Tênis confortável e estiloso para o dia a dia.", price: 499.99 },
    { id: 16, name: "Cadeira Escritório Ergonomica", category: "movel", image: "https://via.placeholder.com/200", description: "Cadeira ergonômica para o seu conforto.", price: 899.99 },
    { id: 17, name: "Celular Samsung Galaxy", category: "eletronicos", image:"https://tienda.travel.cl/ccstore/v1/images/?source=/file/v8054972938904177117/products/SKU95895.1.jpg&height=300&width=300", description: "Celular com ótima câmera e desempenho.", price: 1499.99 },
    { id: 18, name: "Notebook Dell Inspiron", category: "eletronicos", image: "https://http2.mlstatic.com/D_NQ_NP_758506-MLU77355062283_062024-O.webp", description: "Notebook rápido e ideal para trabalho.", price: 3499.99 },
    { id: 19, name: "Camiseta Nike", category: "moda", image: "https://cdn.awsli.com.br/600x700/2550/2550456/produto/230932943/f4009868-d725-4b08-a200-2e394e5dffb6-lhwfnqqn7c.jpeg", description: "Camiseta confortável e estilosa.", price: 129.99 },
    { id: 20, name: "Bola de Futebol Adidas", category: "esportes", image: "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/0/4/04062056926198_1.jpg", description: "Bola profissional para jogos.", price: 199.99 },
    { id: 21, name: "Sofá de Couro", category: "movel", image: "https://images.tcdn.com.br/img/img_prod/1167086/sofa_deeni_100_couro_legitimo_melhor_relacao_custo_beneficio_1051_1_f1a900b8db347d54a18a795611e6e037.jpg", description: "Sofá de alta qualidade para sua sala.", price: 2999.99 },
    { id: 22, name: "Smartwatch Apple", category: "eletronicos", image: "https://via.placeholder.com/200", description: "Relógio inteligente com várias funcionalidades.", price: 2499.99 },
    { id: 23, name: "Tênis Puma", category: "moda", image: "https://via.placeholder.com/200", description: "Tênis confortável e estiloso para o dia a dia.", price: 499.99 },
    { id: 24, name: "Cadeira Escritório Ergonomica", category: "movel", image: "https://via.placeholder.com/200", description: "Cadeira ergonômica para o seu conforto.", price: 899.99 },
    { id: 25, name: "Celular Samsung Galaxy", category: "eletronicos", image:"https://tienda.travel.cl/ccstore/v1/images/?source=/file/v8054972938904177117/products/SKU95895.1.jpg&height=300&width=300", description: "Celular com ótima câmera e desempenho.", price: 1499.99 },
    { id: 26, name: "Notebook Dell Inspiron", category: "eletronicos", image: "https://http2.mlstatic.com/D_NQ_NP_758506-MLU77355062283_062024-O.webp", description: "Notebook rápido e ideal para trabalho.", price: 3499.99 },
    { id: 27, name: "Camiseta Nike", category: "moda", image: "https://cdn.awsli.com.br/600x700/2550/2550456/produto/230932943/f4009868-d725-4b08-a200-2e394e5dffb6-lhwfnqqn7c.jpeg", description: "Camiseta confortável e estilosa.", price: 129.99 },
    { id: 28, name: "Bola de Futebol Adidas", category: "esportes", image: "https://portaldasmalas.com.br/media/catalog/product/cache/0d28dfeedc66c42a926ad7ab64c6041b/0/4/04062056926198_1.jpg", description: "Bola profissional para jogos.", price: 199.99 },
    { id: 29, name: "Sofá de Couro", category: "movel", image: "https://images.tcdn.com.br/img/img_prod/1167086/sofa_deeni_100_couro_legitimo_melhor_relacao_custo_beneficio_1051_1_f1a900b8db347d54a18a795611e6e037.jpg", description: "Sofá de alta qualidade para sua sala.", price: 2999.99 },
    { id: 30, name: "Smartwatch Apple", category: "eletronicos", image: "https://via.placeholder.com/200", description: "Relógio inteligente com várias funcionalidades.", price: 2499.99 },
    { id: 31, name: "Tênis Puma", category: "moda", image: "https://via.placeholder.com/200", description: "Tênis confortável e estiloso para o dia a dia.", price: 499.99 },
    { id: 32, name: "Cadeira Escritório Ergonomica", category: "movel", image: "https://via.placeholder.com/200", description: "Cadeira ergonômica para o seu conforto.", price: 899.99, }

  ];
  
  // Função para exibir os produtos na tela
  function displayProducts(filteredProducts) {
    const productResults = document.getElementById("productResults");
    productResults.innerHTML = "";
  
    if (filteredProducts.length === 0) {
      productResults.innerHTML = "<p>Nenhum produto encontrado.</p>";
    } else {
      filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
  
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        `;
  
        productResults.appendChild(productItem);
      });
    }
  }
   /*Atualização na função displayProducts*/
function displayProducts(filteredProducts) {
  const productResults = document.getElementById("productResults");
  productResults.innerHTML = "";

  if (filteredProducts.length === 0) {
    productResults.innerHTML = "<p>Nenhum produto encontrado.</p>";
  } else {
    filteredProducts.forEach(product => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      productItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        <button class="buy-button" onclick="buyProduct(${product.id})">Comprar</button>
      `;

      productResults.appendChild(productItem);
    });
  }
}

// Função de compra do produto
function buyProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    alert(`Você comprou: ${product.name}\nTotal: R$ ${product.price.toFixed(2).replace('.', ',')}`);
  }
}

  // Função de pesquisa de produtos
  function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const selectedCategory = document.getElementById("category").value;
  
    const filteredProducts = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchInput);
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  
    displayProducts(filteredProducts);
  }
  //Função de compra do produto
function buyProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Você comprou: ${product.name}\nTotal: R$ ${product.price.toFixed(2).replace('.', ',')}`);
    }
}

// Exibe os produtos inicialmente
displayProducts(products);
  // Função para aplicar os filtros (quando o filtro de categoria é alterado)
  function applyFilters() {
    searchProducts();
  }
  
  // Exibir os produtos iniciais
  displayProducts(products);
// Função para criar as estrelas
function criarEstrelas() {
  for (let i = 0; i < 100; i++) {
      let estrela = document.createElement('div');
      estrela.classList.add('estrela');
      estrela.style.top = Math.random() * 100 + 'vh';
      estrela.style.left = Math.random() * 100 + 'vw';
      estrela.style.animationDelay = Math.random() * 10 + 's';
      document.body.appendChild(estrela);
  }
}
  