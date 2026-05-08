import { Product, SiteConfig } from "./types";

export const SITE_CONFIG: SiteConfig = {
  name: "2clothes",
  tagline: "Elegância Minimalista para o Dia a Dia",
  nuvemshopUrl: "https://2clothes.lojavirtualnuvem.com.br",
  mercadoLivreUrl: "https://lista.mercadolivre.com.br/_CustId_SEU_ID_AQUI", // ALTERE ESTE LINK AQUI
  instagramUrl: "https://instagram.com/2clothes", // Altere para seu perfil
  whatsappNumber: "5511999999999", // Altere para o seu número
  whatsappMessage: "Olá! Gostaria de saber mais sobre as peças da 2clothes.",
  description: "Curadoria de peças contemporâneas em tons neutros e tecidos naturais. Qualidade e sofisticação em cada detalhe.",
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Camisa de Linho Premium",
    price: 74.00,
    description: "Linho 100% natural, corte slim e acabamento refinado em tom areia.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_979852-MLB96666015505_102025-F-camisa-femenina-listrada-casual-botoes-frontal-manga-curto.webp",
    category: "Camisas",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-4279471909-camisa-femenina-listrada-casual-botoes-frontal-manga-curto-_JM?searchVariation=192402748117#polycard_client=search-desktop&be_origin=backend&searchVariation=192402748117&search_layout=grid&position=36&type=item&tracking_id=799475bf-8bf3-42c8-b952-2b1f110ac07d",
  },
  {
    id: "2",
    name: "Calça Algodão Orgânico",
    price: 78.00,
    description: "Modelagem contemporânea em sarja de algodão orgânico, cor taupe.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_987056-MLB97994189700_112025-F-calca-cargo-masculina-larga-skatista-streetwear-sarja-p-a-gg.webp",
    category: "Calças",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-5573702182-calca-cargo-masculina-larga-skatista-streetwear-sarja-p-a-gg-_JM?searchVariation=184697387744#polycard_client=search-desktop&be_origin=backend&searchVariation=184697387744&search_layout=grid&position=41&type=item&tracking_id=67564e7c-62aa-4851-a237-f0e65e2821dd",
  },
  {
    id: "3",
    name: "Tricot Modal Confort",
    price: 110.00,
    description: "Toque macio e caimento impecável. Essencial para sobreposições.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_746031-MLB110888343505_042026-F-conjunto-camisa-e-colete-tricot-com-cinto-elegante-moda.webp",
    category: "Inverno",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-5368604160-conjunto-camisa-e-colete-tricot-com-cinto-elegante-moda-_JM?searchVariation=187732298021#polycard_client=search-desktop&be_origin=backend&searchVariation=187732298021&search_layout=grid&position=47&type=item&tracking_id=9a673c37-52e6-4159-a5ca-5c859040d0d5",
  },
  {
    id: "4",
    name: "Blazer Estruturado Linho",
    price: 210.00,
    description: "Peça icônica para looks modernos. Forro interno acetinado.",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_872109-MLB78525137445_082024-F-blazer-slim-fit-masculinoroupa-masculinasarja-premium.webp",
    category: "Alfaiataria",
    mercadoLivreUrl: "https://produto.mercadolivre.com.br/MLB-2846248926-blazer-slim-fit-masculinoroupa-masculinasarja-premium-_JM?searchVariation=184034670787#polycard_client=recommendations_vip-seller_items-above&reco_backend=ranker-retsys-same-seller&reco_model=rk_entity_sameseller&reco_client=vip-seller_items-above&reco_item_pos=1&reco_backend_type=low_level&reco_id=de9bdc31-74e6-47ff-827d-f0cbac600945",
  }
];
