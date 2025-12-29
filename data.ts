import { MenuSection } from './types';

export const menuData: MenuSection[] = [
  {
    id: 'comidas',
    title: { es: 'Comidas', en: 'Food', pt: 'Comidas' },
    coverTitle: { es: 'Comidas', en: 'Cuisine', pt: 'Gastronomia' },
    // Updated image: Renaissance style food
    coverImage: 'https://i.pinimg.com/1200x/e8/5d/6b/e85d6b82faaf660a4c47bc9b92b5038c.jpg', 
    subSections: [
      {
        title: { es: 'Platitos', en: 'Small Plates', pt: 'Petiscos' },
        items: [
          { 
            name: { es: 'Olivas Marinadas y Cascaritas Especiadas', en: 'Marinated Olives & Spiced Peels', pt: 'Azeitonas Marinadas e Cascas Especiadas' },
            description: { 
              es: 'Variedad de olivas y cítricos encurtidos al estilo de la casa, un bocado fresco y aromático', 
              en: 'Variety of olives and house-style pickled citrus, a fresh and aromatic bite',
              pt: 'Variedade de azeitonas e frutas cítricas em conserva ao estilo da casa, um bocado fresco e aromático'
            },
            price: 5000 
          },
          { 
            name: { es: 'Bits de Provoleta', en: 'Provoleta Bites', pt: 'Cubos de Provoleta' },
            description: { 
              es: 'Esferas de provoleta doradas, con dulce de membrillo y nuez caramelizada', 
              en: 'Golden provoleta spheres with quince paste and caramelized walnut',
              pt: 'Esferas de provoleta douradas com doce de marmelo e noz caramelizada'
            },
            price: 9000 
          },
          { 
            name: { es: 'Albóndigas de Cordero al Ajillo', en: 'Garlic Lamb Meatballs', pt: 'Almôndegas de Cordeiro ao Alho' },
            description: { 
              es: 'Acompañado de una base de kugel crujiente', 
              en: 'Served on a crispy kugel base',
              pt: 'Servido sobre uma base crocante de kugel'
            },
            price: 9000 
          },
          { 
            name: { es: 'Charcuterie 100 grs', en: 'Charcuterie 100g', pt: 'Charcutaria 100g' },
            description: { 
              es: 'Selección del Cheff', 
              en: 'Chef\'s Selection',
              pt: 'Seleção do Chef'
            },
            price: 10000 
          },
        ]
      },
      {
        title: { es: 'Entradas', en: 'Starters', pt: 'Entradas' },
        items: [
          { 
            name: { es: 'Cremoso de Estación', en: 'Seasonal Creamy Dip', pt: 'Cremoso da Estação' },
            description: { 
              es: 'Cremoso de alubias, alcauciles, aceite de oliva, tahini y ajo', 
              en: 'Creamy beans, artichokes, olive oil, tahini, and garlic',
              pt: 'Creme de feijão, alcachofras, azeite, tahine e alho'
            },
            price: 8000 
          },
          { 
            name: { es: 'Trio de Empanadas de Langostino y Queso', en: 'Prawn & Cheese Empanada Trio', pt: 'Trio de Empanadas de Camarão e Queijo' },
            description: { 
              es: 'Tres empanadas de langostinos, queso y sriracha', 
              en: 'Three prawns, cheese, and sriracha empanadas',
              pt: 'Três empanadas de camarão, queijo e sriracha'
            },
            price: 15000 
          },
          { 
            name: { es: 'Trío de Empanadas Mendocinas', en: 'Mendocina Empanada Trio', pt: 'Trio de Empanadas Mendocinas' },
            description: { 
              es: 'Un clásico de la cocina argentina, fiel a la tradición. Picadillo, cebolla, huevo y aceitunas, con una mezcla de especias que transportan a Mendoza.', 
              en: 'An Argentine classic. Minced meat, onion, egg, and olives, with a spice blend that transports you to Mendoza.',
              pt: 'Um clássico argentino. Carne moída, cebola, ovo e azeitonas, com uma mistura de especiarias que transportam a Mendoza.'
            },
            price: 10000 
          },
          { 
            name: { es: 'Trío de Empanadas de Queso y Cebolla', en: 'Cheese & Onion Empanada Trio', pt: 'Trio de Empanadas de Queijo e Cebola' },
            description: { 
              es: 'Mezcla de quesos derretidos con cebolla caramelizada', 
              en: 'Melted cheese blend with caramelized onion',
              pt: 'Mistura de queijos derretidos com cebola caramelizada'
            },
            price: 8000 
          },
          { 
            name: { es: 'Trío de Empanadas Irish Stew', en: 'Irish Stew Empanada Trio', pt: 'Trio de Empanadas Irish Stew' },
            description: { 
              es: 'Un clásico irlandés. Empanada rellena de cordero cocido a fuego lento en cerveza Stout, con zanahorias, papas y un toque de hierbas frescas.', 
              en: 'An Irish classic. Empanada filled with lamb slow-cooked in Stout beer, with carrots, potatoes, and fresh herbs.',
              pt: 'Um clássico irlandês. Empanada recheada com cordeiro cozido lentamente em cerveja Stout, com cenouras, batatas e ervas frescas.'
            },
            price: 12000 
          },
          { 
            name: { es: 'Fish and Chips', en: 'Fish and Chips', pt: 'Fish and Chips' },
            description: { 
              es: 'Clásico británico. Nuestra pesca blanca se sumerge en una tempura de cerveza, acompañado con chips de batata y papas', 
              en: 'British classic. White fish in beer batter tempura, served with sweet potato and potato chips',
              pt: 'Clássico britânico. Peixe branco em tempura de cerveja, acompanhado de chips de batata doce e batata'
            },
            price: 16000 
          },
          { 
            name: { es: 'Rabas', en: 'Fried Calamari', pt: 'Lulas Fritas' },
            description: { 
              es: 'Nuestras rabas son un bocado delicado especiado y crujiente, acompañado con lactonesa de menta y albahaca', 
              en: 'Delicate spiced and crispy calamari rings, served with mint and basil lactonesa',
              pt: 'Lulas delicadamente temperadas e crocantes, acompanhadas de lactonesa de hortelã e manjericão'
            },
            price: 18000 
          },
          { 
            name: { es: 'Papas Crujientes Trufadas con Mayonesa Casera', en: 'Crispy Truffled Potatoes', pt: 'Batatas Crocantes Trufadas' },
            description: { 
              es: 'Crujientes papas fritas con el distintivo aroma de la trufa y una mayonesa casera', 
              en: 'Crispy fries with distinctive truffle aroma and homemade mayonnaise',
              pt: 'Batatas fritas crocantes com aroma distinto de trufa e maionese caseira'
            },
            price: 13000 
          },
          { 
            name: { es: 'Provoleta con Peras Caramelizadas y Queso Azul', en: 'Provoleta with Caramelized Pears', pt: 'Provoleta com Peras Caramelizadas' },
            description: { 
              es: 'Un clásico con un toque inesperado. Provoleta derretida, realzada con el dulzor de las peras, finalizada con queso azul', 
              en: 'A classic with a twist. Melted provoleta enhanced with sweet pears, finished with blue cheese',
              pt: 'Um clássico com um toque inesperado. Provoleta derretida realçada com o doce das peras, finalizada com queijo azul'
            },
            price: 15000 
          },
        ]
      },
      {
        title: { es: 'Principales', en: 'Mains', pt: 'Pratos Principais' },
        items: [
          { 
            name: { es: 'Milanesa a la Napolitana con Papas', en: 'Milanesa Napolitana with Fries', pt: 'Milanesa à Napolitana com Batatas' },
            description: { 
              es: 'La reversión de un clásico argentino, con una milanesa tierna, salsa casera de tomate, queso y papas doradas', 
              en: 'A twist on an Argentine classic: tender milanesa, homemade tomato sauce, cheese, and golden fries',
              pt: 'Uma versão de um clássico argentino: milanesa macia, molho de tomate caseiro, queijo e batatas douradas'
            },
            price: 22000 
          },
          { 
            name: { es: 'Lomo Wellington', en: 'Beef Wellington', pt: 'Bife Wellington' },
            description: { 
              es: 'Acompañado con papines mendocinos salteados, finalizado con una con emulsión de albahaca y menta', 
              en: 'Served with sautéed Andean potatoes, finished with a basil and mint emulsion',
              pt: 'Servido com batatas andinas salteadas, finalizado com emulsão de manjericão e hortelã'
            },
            price: 40000 
          },
          { 
            name: { es: 'Berenjenas a la Parmesana', en: 'Eggplant Parmigiana', pt: 'Berinjela à Parmegiana' },
            description: { 
              es: 'Finas láminas de berenjena fresca, que se doran a la perfección y se intercalan con una salsa de tomate casera de cocción lenta y láminas de mozzarella cremosa', 
              en: 'Thin slices of fresh eggplant, perfectly browned and layered with slow-cooked homemade tomato sauce and creamy mozzarella',
              pt: 'Fatias finas de berinjela fresca, douradas e intercaladas com molho de tomate caseiro e mussarela cremosa'
            },
            price: 15000 
          },
          { 
            name: { es: 'Filet Mignon & Chimichurri de Pistacho', en: 'Filet Mignon & Pistachio Chimichurri', pt: 'Filé Mignon e Chimichurri de Pistache' },
            description: { 
              es: 'Un corte excepcional, cocido a la perfección y acompañado con cremoso de zanahoria, espárragos, kale, finalizado con chimichurri de pistacho', 
              en: 'An exceptional cut, cooked to perfection and served with carrot cream, asparagus, kale, finished with pistachio chimichurri',
              pt: 'Um corte excepcional, cozido à perfeição e servido com creme de cenoura, espargos, couve, finalizado com chimichurri de pistache'
            },
            price: 32000 
          },
          { 
            name: { es: 'Risotto de Mollejas al Brandy', en: 'Sweetbread & Brandy Risotto', pt: 'Risoto de Mollejas ao Brandy' },
            description: { 
              es: 'Realizado con mollejas flambeadas en Brandy', 
              en: 'Made with brandy-flambéed sweetbreads',
              pt: 'Feito com mollejas flambadas em Brandy'
            },
            price: 25000 
          },
        ]
      },
      {
        title: { es: 'Ensaladas', en: 'Salads', pt: 'Saladas' },
        items: [
          { 
            name: { es: 'Ensalada Caesar', en: 'Caesar Salad', pt: 'Salada Caesar' },
            description: { 
              es: 'Un clásico atemporal. Mix de hojas verdes, se mezclan con nuestra vinagreta Caesar casera, elaborada con anchoas, aceite de oliva y un toque cítrico. Servida con pan de masa madre y pollo grillado', 
              en: 'Timeless classic. Mixed greens with homemade Caesar vinaigrette (anchovies, olive oil, citrus). Served with sourdough bread and grilled chicken',
              pt: 'Um clássico atemporal. Mix de folhas verdes com vinagrete Caesar caseiro. Servido com pão de fermentação natural e frango grelhado'
            },
            price: 16000 
          },
          { 
            name: { es: 'Ensalada de Trucha Salmonada', en: 'Salmon Trout Salad', pt: 'Salada de Truta Salmonada' },
            description: { 
              es: 'Base de hojas verdes frescas, trozos de trucha salmonada, hongos portobello salteados, aderezo cremoso de yogur natural, eneldo y mostaza dijon', 
              en: 'Fresh green base, salmon trout pieces, sautéed portobello mushrooms, creamy natural yogurt dressing, dill, and Dijon mustard',
              pt: 'Base de folhas verdes frescas, pedaços de truta salmonada, cogumelos portobello salteados, molho cremoso de iogurte natural, endro e mostarda Dijon'
            },
            price: 19000 
          },
        ]
      },
      {
        title: { es: 'Entre Panes', en: 'Sandwiches', pt: 'Sanduíches' },
        items: [
          { 
            name: { es: 'Garnish Burger', en: 'Garnish Burger', pt: 'Garnish Burger' },
            description: { 
              es: 'Medallón 120 gr, cheddar, bacon, cebolla caramelizada y mayonesa casera acompañada de papas crujientes', 
              en: '120g patty, cheddar, bacon, caramelized onion, and homemade mayo served with crispy fries',
              pt: 'Hambúrguer de 120g, cheddar, bacon, cebola caramelizada e maionese caseira acompanhada de batatas crocantes'
            },
            price: 17000 
          },
          { 
            name: { es: 'Burger Sweet Chili', en: 'Sweet Chili Burger', pt: 'Hambúrguer Sweet Chili' },
            description: { 
              es: 'Medallón 120 gr, se cubre con queso tybo, salsa sweet chilli casera, rúcula, acompañada de papas crujientes', 
              en: '120g patty, covered in Tybo cheese, homemade sweet chili sauce, arugula, served with crispy fries',
              pt: 'Hambúrguer de 120g, coberto com queijo Tybo, molho sweet chili caseiro, rúcula, acompanhado de batatas crocantes'
            },
            price: 17000 
          },
          { 
            name: { es: 'Roll de Pollo Especiado a la Jameson', en: 'Jameson Spiced Chicken Roll', pt: 'Roll de Frango com Especiarias Jameson' },
            description: { 
              es: 'Tiernas tiras de pollo marinado en Jameson, cebollas, pimientos y queso mozzarella en Tortilla de Api', 
              en: 'Tender chicken strips marinated in Jameson, onions, peppers, and mozzarella cheese in Api Tortilla',
              pt: 'Tiras macias de frango marinado em Jameson, cebolas, pimentões e queijo mussarela em Tortilha de Api'
            },
            price: 17000 
          },
          { 
            name: { es: 'Roll Veggie en Tortilla de Api', en: 'Veggie Roll', pt: 'Roll Vegetariano' },
            description: { 
              es: 'Combinación de hongos, vegetales asados y queso mozzarella. Acompañado de chips de batata', 
              en: 'Combination of mushrooms, roasted vegetables, and mozzarella cheese. Served with sweet potato chips',
              pt: 'Combinação de cogumelos, vegetais assados e queijo mussarela. Acompanhado de chips de batata doce'
            },
            price: 15000 
          },
          { 
            name: { es: 'Chistorra', en: 'Chistorra Sandwich', pt: 'Sanduíche de Chistorra' },
            description: { 
              es: 'Chorizo de cerdo en pan de papa y queso, con salsa criolla emulsión de ajo asado, chips de papas y batata', 
              en: 'Pork sausage in potato cheese bread, with salsa criolla, roasted garlic emulsion, potato and sweet potato chips',
              pt: 'Linguiça de porco em pão de batata e queijo, com molho criolla, emulsão de alho assado, chips de batata e batata doce'
            },
            price: 12000 
          },
        ]
      },
      {
        title: { es: 'Postres', en: 'Desserts', pt: 'Sobremesas' },
        items: [
          { 
            name: { es: 'El Consentido', en: 'The Spoiled One', pt: 'O Mimo' },
            description: { 
              es: 'Flan clásico argentino de la casa, se acompaña con un blend de dulce de leche y Jim Beam de vainilla finalizado con crema Chantilly', 
              en: 'Classic homemade Argentine flan, accompanied by a Dulce de Leche and Jim Beam Vanilla blend, finished with Chantilly cream',
              pt: 'Pudim clássico argentino da casa, acompanhado por um blend de doce de leite e Jim Beam de baunilha, finalizado com creme Chantilly'
            },
            price: 8000 
          },
          { 
            name: { es: 'Pavlova', en: 'Pavlova', pt: 'Pavlova' },
            description: { 
              es: 'Clásica pavlova rellena con frutos de estacion y crema de pistacho, terminado con chantilly', 
              en: 'Classic pavlova filled with seasonal fruits and pistachio cream, finished with chantilly',
              pt: 'Pavlova clássica recheada com frutas da estação e creme de pistache, finalizada com chantilly'
            },
            price: 11000 
          },
          { 
            name: { es: 'Tarta de Frutas de Estación', en: 'Seasonal Fruit Tart', pt: 'Torta de Frutas da Estação' },
            description: { 
              es: 'Base de masa sablee, relleno con Frangipane de almendras y frutas de estación, acompañado con helado de crema americana', 
              en: 'Sablé dough base, almond Frangipane filling and seasonal fruits, served with sweet cream ice cream',
              pt: 'Base de massa sablée, recheio de Frangipane de amêndoas e frutas da estação, acompanhado com sorvete de creme'
            },
            price: 9500 
          },
          { 
            name: { es: 'Némesis de Chocolate', en: 'Chocolate Nemesis', pt: 'Nêmesis de Chocolate' },
            description: { 
              es: 'Nemesis de chocolate, acompañada con praliné de almendras y masa sable, terminado con ganache de chocolate blanco y triple sec de naranja', 
              en: 'Chocolate Nemesis, served with almond praline and sablé dough, finished with white chocolate ganache and orange triple sec',
              pt: 'Nêmesis de chocolate, acompanhado com praliné de amêndoas e massa sablée, finalizado com ganache de chocolate branco e triple sec de laranja'
            },
            price: 15000 
          },
        ]
      }
    ]
  },
  {
    id: 'bebidas',
    title: { es: 'Bebidas', en: 'Drinks', pt: 'Bebidas' },
    coverTitle: { es: 'Bebidas', en: 'Drinks', pt: 'Bebidas' },
    // Updated image: Dark mood bottles
    coverImage: 'https://i.pinimg.com/1200x/eb/19/71/eb1971d3aa87e846b00fbe5ea727a424.jpg',
    subSections: [
      {
        title: { es: 'Tintos', en: 'Red Wines', pt: 'Vinhos Tintos' },
        items: [
          { name: { es: 'Finca Ambrosía | Viña Única Cabernet Sauvignon', en: 'Finca Ambrosía | Viña Única Cabernet Sauvignon', pt: 'Finca Ambrosía | Viña Única Cabernet Sauvignon' }, price: 45000 },
          { name: { es: 'Finca Ambrosía | Viña Única Cabernet Franc', en: 'Finca Ambrosía | Viña Única Cabernet Franc', pt: 'Finca Ambrosía | Viña Única Cabernet Franc' }, price: 45000 },
          { name: { es: 'Finca Ambrosía | Viña Única Malbec', en: 'Finca Ambrosía | Viña Única Malbec', pt: 'Finca Ambrosía | Viña Única Malbec' }, price: 45000 },
          { name: { es: 'Familia Cassone | Obra Prima Maximus Blend', en: 'Familia Cassone | Obra Prima Maximus Blend', pt: 'Familia Cassone | Obra Prima Maximus Blend' }, price: 40000 },
          { name: { es: 'Corbeau Wines | Mad Bird Cabernet Franc', en: 'Corbeau Wines | Mad Bird Cabernet Franc', pt: 'Corbeau Wines | Mad Bird Cabernet Franc' }, price: 30000 },
          { name: { es: 'Terrazas de los Andes Origen | Los Chacayes', en: 'Terrazas de los Andes Origen | Los Chacayes', pt: 'Terrazas de los Andes Origen | Los Chacayes' }, price: 38000 },
          { name: { es: 'Terrazas de los Andes | Reserva Pinot Noir', en: 'Terrazas de los Andes | Reserva Pinot Noir', pt: 'Terrazas de los Andes | Reserva Pinot Noir' }, price: 35000 },
        ]
      },
      {
        title: { es: 'Blancos y Rosados', en: 'White & Rosé', pt: 'Brancos e Rosés' },
        items: [
          { name: { es: 'Corbeau Wines | Mad Bird Blanc', en: 'Corbeau Wines | Mad Bird Blanc', pt: 'Corbeau Wines | Mad Bird Blanc' }, price: 30000 },
          { name: { es: 'Corbeau Wines | Mad Bird Rosé', en: 'Corbeau Wines | Mad Bird Rosé', pt: 'Corbeau Wines | Mad Bird Rosé' }, price: 30000 },
          { name: { es: 'Familia Cassone | Obra Prima Rose', en: 'Familia Cassone | Obra Prima Rose', pt: 'Familia Cassone | Obra Prima Rose' }, price: 30000 },
          { name: { es: 'Finca Ambrosía | Luna Llena Chardonnay', en: 'Finca Ambrosía | Luna Llena Chardonnay', pt: 'Finca Ambrosía | Luna Llena Chardonnay' }, price: 40000 },
        ]
      },
      {
        title: { es: 'Bebidas Gaseosas', en: 'Soft Drinks', pt: 'Refrigerantes' },
        items: [
          { name: { es: 'Coca-Cola Regular', en: 'Coca-Cola Regular', pt: 'Coca-Cola Regular' }, price: 5000 },
          { name: { es: 'Coca-Cola Zero', en: 'Coca-Cola Zero', pt: 'Coca-Cola Zero' }, price: 5000 },
          { name: { es: 'Sprite Regular', en: 'Sprite Regular', pt: 'Sprite Regular' }, price: 5000 },
          { name: { es: 'Sprite Zero', en: 'Sprite Zero', pt: 'Sprite Zero' }, price: 5000 },
          { name: { es: 'Schweppes Pomelo', en: 'Schweppes Grapefruit', pt: 'Schweppes Toranja' }, price: 5000 },
        ]
      },
      {
        title: { es: 'Bebidas Sin Alcohol', en: 'Non-Alcoholic', pt: 'Sem Álcool' },
        items: [
          { name: { es: 'Limonada', en: 'Lemonade', pt: 'Limonada' }, price: 6000 },
          { name: { es: 'Mocktails', en: 'Mocktails', pt: 'Mocktails' }, price: 8000 },
        ]
      },
      {
        title: { es: 'Britvic', en: 'Britvic', pt: 'Britvic' },
        items: [
          { name: { es: 'Indian Tonic', en: 'Indian Tonic', pt: 'Indian Tonic' }, price: 6000 },
          { name: { es: 'Ginger Beer', en: 'Ginger Beer', pt: 'Ginger Beer' }, price: 6000 },
          { name: { es: 'Ginger Ale', en: 'Ginger Ale', pt: 'Ginger Ale' }, price: 6000 },
          { name: { es: 'Tomate Juice', en: 'Tomato Juice', pt: 'Suco de Tomate' }, price: 6000 },
          { name: { es: 'Cranberries Juice', en: 'Cranberry Juice', pt: 'Suco de Oxicoco' }, price: 6000 },
        ]
      },
      {
        title: { es: 'Cerveza', en: 'Beer', pt: 'Cerveja' },
        items: [
          { name: { es: 'Long Neck Stella Artois', en: 'Long Neck Stella Artois', pt: 'Long Neck Stella Artois' }, price: 6000 },
          { name: { es: 'Stella Artois 0.0', en: 'Stella Artois 0.0', pt: 'Stella Artois 0.0' }, price: 5000 },
        ]
      },
      {
        title: { es: 'Espumantes y Champagnes', en: 'Sparkling & Champagne', pt: 'Espumantes e Champanhes' },
        items: [
          { name: { es: 'Chandon Extra Brut', en: 'Chandon Extra Brut', pt: 'Chandon Extra Brut' }, price: 40000 },
          { name: { es: 'Chandon Delice Rosé', en: 'Chandon Delice Rosé', pt: 'Chandon Delice Rosé' }, price: 40000 },
          { name: { es: 'Chandon Cuvée Réserve Blanc de Noirs', en: 'Chandon Cuvée Réserve Blanc de Noirs', pt: 'Chandon Cuvée Réserve Blanc de Noirs' }, price: 50000 },
          { name: { es: 'Chandon Magnum', en: 'Chandon Magnum', pt: 'Chandon Magnum' }, price: 120000 },
          { name: { es: 'Baron B Extra Brut', en: 'Baron B Extra Brut', pt: 'Baron B Extra Brut' }, price: 70000 },
          { name: { es: 'Veuve Clicquot Yellow Label Brut', en: 'Veuve Clicquot Yellow Label Brut', pt: 'Veuve Clicquot Yellow Label Brut' }, price: 290000 },
          { name: { es: 'Don Pérignon Blanc Vintage 2015', en: 'Don Pérignon Blanc Vintage 2015', pt: 'Don Pérignon Blanc Vintage 2015' }, price: 720000 },
        ]
      }
    ]
  },
  {
    id: 'cocktails',
    title: { es: 'Cocktails', en: 'Cocktails', pt: 'Coquetéis' },
    coverTitle: { es: 'Cocktails', en: 'Cocktails', pt: 'Coquetéis' },
    // Fantasy / Alchemist / Dark Moody
    coverImage: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2940&auto=format&fit=crop', 
    subSections: [
      {
        title: { es: 'Clásicos', en: 'Classics', pt: 'Clássicos' },
        items: [
          { 
            name: { es: 'Gran Penicillin', en: 'Grand Penicillin', pt: 'Gran Penicillin' },
            description: { 
              es: 'J. Walker Black Label, Double Black, blend de mieles, limón, jengibre, spray Caol Ila 12 Yo', 
              en: 'J. Walker Black Label, Double Black, honey blend, lemon, ginger, Caol Ila 12yo spray',
              pt: 'J. Walker Black Label, Double Black, blend de méis, limão, gengibre, spray Caol Ila 12 Yo'
            },
            price: 16000 
          },
          { 
            name: { es: 'Little Penicillin', en: 'Little Penicillin', pt: 'Little Penicillin' },
            description: { 
              es: 'J. Walker Black, Narciso Negro en cocción con ananá, miel, limón, jazmín y espuma de jengibre', 
              en: 'J. Walker Black, Black Narcissus cooked with pineapple, honey, lemon, jasmine, and ginger foam',
              pt: 'J. Walker Black, Narciso Negro cozido com abacaxi, mel, limão, jasmim e espuma de gengibre'
            },
            price: 14000 
          },
          { 
            name: { es: 'Smoke Penicillin', en: 'Smoke Penicillin', pt: 'Smoke Penicillin' },
            description: { 
              es: 'Singleton 12, Caol Ila, cordial de miel orgánica y jengibre', 
              en: 'Singleton 12, Caol Ila, organic honey and ginger cordial',
              pt: 'Singleton 12, Caol Ila, cordial de mel orgânico e gengibre'
            },
            price: 25000 
          },
          { 
            name: { es: 'Il Negroni Perfetto', en: 'Il Negroni Perfetto', pt: 'Il Negroni Perfetto' },
            description: { 
              es: 'Gin BullDog, Campari, Vermuth Antica Fórmula, rodaja y twist de naranja', 
              en: 'Bulldog Gin, Campari, Antica Formula Vermouth, orange slice and twist',
              pt: 'Gin BullDog, Campari, Vermuth Antica Fórmula, rodela e twist de laranja'
            },
            price: 16000 
          },
          { 
            name: { es: 'Daiquiri de banana', en: 'Banana Daiquiri', pt: 'Daiquiri de Banana' },
            description: { 
              es: 'Ron, cordial de banana, jugo de lima', 
              en: 'Rum, banana cordial, lime juice',
              pt: 'Rum, cordial de banana, suco de limão'
            },
            price: 11000 
          },
          { 
            name: { es: 'Paper Plane', en: 'Paper Plane', pt: 'Paper Plane' },
            description: { 
              es: 'Wild Turkey 81, Aperol, Amaro del Capo, jugo de lima', 
              en: 'Wild Turkey 81, Aperol, Amaro del Capo, lime juice',
              pt: 'Wild Turkey 81, Aperol, Amaro del Capo, suco de limão'
            },
            price: 14000 
          },
          { 
            name: { es: 'Bloody Mary', en: 'Bloody Mary', pt: 'Bloody Mary' },
            description: { 
              es: 'Vodka Absolut, Britvic tomate, salsa inglesa, tabasco, limón, sal de apio, mix de pimienta, pincho de aceitunas', 
              en: 'Absolut Vodka, Britvic tomato, Worcestershire sauce, Tabasco, lemon, celery salt, pepper mix, olive garnish',
              pt: 'Vodka Absolut, tomate Britvic, molho inglês, tabasco, limão, sal de aipo, mix de pimenta, espeto de azeitonas'
            },
            price: 16000 
          },
          { 
            name: { es: 'Moscow Mule', en: 'Moscow Mule', pt: 'Moscow Mule' },
            description: { 
              es: 'Vodka Antártica, jugo de lima, Britvic Ginger Beer, menta', 
              en: 'Antártica Vodka, lime juice, Britvic Ginger Beer, mint',
              pt: 'Vodka Antártica, suco de limão, Britvic Ginger Beer, hortelã'
            },
            price: 12000 
          },
          { 
            name: { es: 'Sevilla Collins', en: 'Sevilla Collins', pt: 'Sevilla Collins' },
            description: { 
              es: 'Tanqueray Sevilla, almíbar simple, jugo de lima, top de soda', 
              en: 'Tanqueray Sevilla, simple syrup, lime juice, soda top',
              pt: 'Tanqueray Sevilla, xarope simples, suco de limão, top de soda'
            },
            price: 10000 
          },
          { 
            name: { es: 'Old Cuban', en: 'Old Cuban', pt: 'Old Cuban' },
            description: { 
              es: 'Ron, Chandon Extra-Brut, menta, almibar simple, lima y angostura', 
              en: 'Rum, Chandon Extra-Brut, mint, simple syrup, lime, and Angostura',
              pt: 'Rum, Chandon Extra-Brut, hortelã, xarope simples, limão e Angostura'
            },
            price: 12000 
          },
          { 
            name: { es: 'Little Italy', en: 'Little Italy', pt: 'Little Italy' },
            description: { 
              es: 'Whiskey TX, Vermut Rosso y Cynar', 
              en: 'TX Whiskey, Rosso Vermouth, and Cynar',
              pt: 'Whiskey TX, Vermut Rosso e Cynar'
            },
            price: 12000 
          },
          { 
            name: { es: 'Old Fashioned The Garnish', en: 'Old Fashioned The Garnish', pt: 'Old Fashioned The Garnish' },
            description: { 
              es: 'Whiskey Wild Turkey 101, bitter Angostura, azúcar, cereza, rodaja y twist de naranja', 
              en: 'Wild Turkey 101 Whiskey, Angostura bitter, sugar, cherry, orange slice and twist',
              pt: 'Whiskey Wild Turkey 101, bitter Angostura, açúcar, cereja, rodela e twist de laranja'
            },
            price: 17000 
          },
          { 
            name: { es: 'Cosmopolitan', en: 'Cosmopolitan', pt: 'Cosmopolitan' },
            description: { 
              es: 'Vodka Absolut, Cranberry britvic, jugo de limón, triple sec, almíbar simple', 
              en: 'Absolut Vodka, Britvic Cranberry, lemon juice, triple sec, simple syrup',
              pt: 'Vodka Absolut, Cranberry Britvic, suco de limão, triple sec, xarope simples'
            },
            price: 11000 
          },
          { 
            name: { es: 'Fitzgerald', en: 'Fitzgerald', pt: 'Fitzgerald' },
            description: { 
              es: 'Gin, almíbar simple, limón y angostura', 
              en: 'Gin, simple syrup, lemon, and Angostura',
              pt: 'Gin, xarope simples, limão e Angostura'
            },
            price: 12000 
          },
          { 
            name: { es: 'Boulevardier', en: 'Boulevardier', pt: 'Boulevardier' },
            description: { 
              es: 'Jim Beam White, Campari, vermouth rosso', 
              en: 'Jim Beam White, Campari, Rosso Vermouth',
              pt: 'Jim Beam White, Campari, Vermouth Rosso'
            },
            price: 14000 
          },
          { 
            name: { es: 'Mint Julep', en: 'Mint Julep', pt: 'Mint Julep' },
            description: { 
              es: 'Wild Turkey 81, menta fresca, almíbar simple, Angostura', 
              en: 'Wild Turkey 81, fresh mint, simple syrup, Angostura',
              pt: 'Wild Turkey 81, hortelã fresca, xarope simples, Angostura'
            },
            price: 16000 
          },
          { 
            name: { es: 'Campari Tonic', en: 'Campari Tonic', pt: 'Campari Tonic' },
            description: { 
              es: 'Campari, agua tónica, rodaja de limón', 
              en: 'Campari, tonic water, lemon slice',
              pt: 'Campari, água tônica, rodela de limão'
            },
            price: 9000 
          },
          { 
            name: { es: 'Aperol Spritz', en: 'Aperol Spritz', pt: 'Aperol Spritz' },
            description: { 
              es: 'Chandon Extra-Brut, Aperol, soda, rodaja de naranja', 
              en: 'Chandon Extra-Brut, Aperol, soda, orange slice',
              pt: 'Chandon Extra-Brut, Aperol, soda, rodela de laranja'
            },
            price: 8500 
          },
          { 
            name: { es: 'Sazerac 1850', en: 'Sazerac 1850', pt: 'Sazerac 1850' },
            description: { 
              es: 'Hennessy Vs, Peychaud, simple syrup, Absenta', 
              en: 'Hennessy Vs, Peychaud, simple syrup, Absinthe',
              pt: 'Hennessy Vs, Peychaud, xarope simples, Absinto'
            },
            price: 25000 
          },
          { 
            name: { es: 'Sidecar', en: 'Sidecar', pt: 'Sidecar' },
            description: { 
              es: 'Hennessy Vs, Cointreau, jugo de limón', 
              en: 'Hennessy Vs, Cointreau, lemon juice',
              pt: 'Hennessy Vs, Cointreau, suco de limão'
            },
            price: 18000 
          },
          { 
            name: { es: 'Paloma Espolón', en: 'Paloma Espolón', pt: 'Paloma Espolón' },
            description: { 
              es: 'Tequila Espolon Blanco, pomelo gasificado', 
              en: 'Tequila Espolon Blanco, sparkling grapefruit',
              pt: 'Tequila Espolon Blanco, toranja gaseificada'
            },
            price: 15000 
          },
        ]
      },
      {
        title: { es: 'Viajes y Degustaciones', en: 'Journeys & Tastings', pt: 'Viagens e Degustações' },
        items: [
          { 
            name: { es: 'Historia del Negroni - Cap. 1', en: 'History of Negroni - Ch. 1', pt: 'História do Negroni - Cap. 1' },
            description: { 
              es: 'Tres cocktails: Mito, Americano y Negroni para degustar', 
              en: 'Three cocktails: Mito, Americano, and Negroni for tasting',
              pt: 'Três coquetéis: Mito, Americano e Negroni para degustar'
            },
            price: 18000 
          },
          { 
            name: { es: 'Degustación de Penicillin', en: 'Penicillin Tasting', pt: 'Degustação de Penicillin' },
            description: { 
              es: 'Little Penicillin, El Gran Penicillin y Smoked Penicillin', 
              en: 'Little Penicillin, The Grand Penicillin, and Smoked Penicillin',
              pt: 'Little Penicillin, O Grande Penicillin e Smoked Penicillin'
            },
            price: 28000 
          },
          { 
            name: { es: 'Los Viajes de Frida', en: 'Frida\'s Journeys', pt: 'As Viagens de Frida' },
            description: { 
              es: 'Degustación de cócteles inspirada en Frida Kahlo. Postales de París | New York is Burning | Frida en Flor | Columna Rota', 
              en: 'Cocktail tasting inspired by Frida Kahlo. Postcards from Paris | New York is Burning | Frida in Bloom | The Broken Column',
              pt: 'Degustação de coquetéis inspirada em Frida Kahlo. Cartões Postais de Paris | New York is Burning | Frida em Flor | Coluna Quebrada'
            },
            price: 50000 
          },
        ]
      },
      {
        title: { es: 'De Autor', en: 'Signature Cocktails', pt: 'De Autor' },
        items: [
          { 
            name: { es: 'Sol De los Inca', en: 'Inca Sun', pt: 'Sol dos Incas' },
            description: { 
              es: 'Pisco, durazno, naranja, Apricot, aire cítrico de apricot', 
              en: 'Pisco, peach, orange, Apricot, citrus apricot air',
              pt: 'Pisco, pêssego, laranja, Apricot, ar cítrico de apricot'
            },
            price: 12000 
          },
          { 
            name: { es: 'My Name is Flor', en: 'My Name is Flor', pt: 'My Name is Flor' },
            description: { 
              es: 'Blend de ron, ananá, cedrón, hibisco', 
              en: 'Rum blend, pineapple, lemon verbena, hibiscus',
              pt: 'Blend de rum, abacaxi, lúcia-lima, hibisco'
            },
            price: 12000 
          },
          { 
            name: { es: 'Botanic Lab', en: 'Botanic Lab', pt: 'Botanic Lab' },
            description: { 
              es: 'Vodka, albahaca, manzana, sauco, pectina', 
              en: 'Vodka, basil, apple, elderflower, pectin',
              pt: 'Vodka, manjericão, maçã, sabugueiro, pectina'
            },
            price: 12000 
          },
          { 
            name: { es: 'Mai-Tai-Soi', en: 'Mai-Tai-Soi', pt: 'Mai-Tai-Soi' },
            description: { 
              es: 'Ron jamaica, Ron Havana, Orgeat, azahar, Cointreau, lima', 
              en: 'Jamaican Rum, Havana Rum, Orgeat, orange blossom, Cointreau, lime',
              pt: 'Rum jamaicano, Rum Havana, Orgeat, flor de laranjeira, Cointreau, limão'
            },
            price: 15000 
          },
          { 
            name: { es: 'Limón - Tini', en: 'Lemon - Tini', pt: 'Limão - Tini' },
            description: { 
              es: 'Gin Entre Perro y Lobo Cap 2, coco, Lemongrass, salmuera de Limón', 
              en: 'Gin Entre Perro y Lobo Ch 2, coconut, Lemongrass, lemon brine',
              pt: 'Gin Entre Perro y Lobo Cap 2, coco, Lemongrass, salmoura de Limão'
            },
            price: 12000 
          },
        ]
      }
    ]
  }
];