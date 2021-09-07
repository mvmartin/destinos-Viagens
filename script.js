
const sulButton = document.getElementById('button-sul')
const sudesteButton = document.getElementById('button-sudeste');
const centroOesteButton = document.getElementById('button-centro-oeste');
const nordesteButton = document.getElementById('button-nordeste');
const norteButton = document.getElementById('button-norte');

const imagem1 = document.getElementById( 'imagem-passeio-1' );
const local1 = document.getElementById( 'local-passeio-1' );
const descricao1 = document.getElementById( 'descricao-passeio-1' );

const imagem2 = document.getElementById( 'imagem-passeio-2' );
const local2 = document.getElementById( 'local-passeio-2' );
const descricao2 = document.getElementById( 'descricao-passeio-2' );

const imagem3 = document.getElementById( 'imagem-passeio-3' );
const local3 = document.getElementById( 'local-passeio-3' );
const descricao3 = document.getElementById( 'descricao-passeio-3' );

const imagem4 = document.getElementById( 'imagem-passeio-4' );
const local4 = document.getElementById( 'local-passeio-4' );
const descricao4 = document.getElementById( 'descricao-passeio-4' );


function dadosSul() {

    
    imagem1.src = './assets/sul/foziguacu.jpg'
    local1.innerHTML = 'Cataratas do Iguaçu - Paraná';
    descricao1.innerHTML ='As Cataratas do Iguaçu. Com 275 quedas d’água - algumas chegam a medir 90 metros de altura - Foz do Iguaçu divide com a vizinha Argentina Puerto Iguazu, espetáculo de águas, biodiversidade e esportes radicais.'

    imagem2.src = './assets/sul/betoCarrero.jpg'
    local2.innerHTML = 'Beto Carrero - Santa Catarina'
    descricao2.innerHTML = 'É um parque de diversões para todas as idades! Tem atividades para crianças, como Crazy River e Xícara Maluca. Já para os adultos, as principais atrações são kart e barco vikking. Além disso, montanhas russas, teatros, exposições fazem parte da programação'

    imagem3.src = './assets/sul/gramado.jpg'
    local3.innerHTML =   'Gramado - Rio Grande do Sul'
    descricao3.innerHTML =  'É uma cidade única em solo brasileiro. Contando com uma cultura muito particular, arquitetura característica e inúmeras opções de lazer para turistas, é um destino mais do que recomendado para quem quer ter contato com o que a cultura local tem a oferecer de melhor. Por meio da forte influência da cultura europeia, a região oferece aos visitantes a experiência de visitar a Europa sem sair do Brasil'

    imagem4.src = './assets/sul/valeEuropeu.jpg'
    local4.innerHTML = 'Vale Europeu - Santa Catarina'
    descricao4.innerHTML = 'O Vale Europeu abriga 49 municípios catarinenses, como Blumenau, Pomerode e Nova Trento. O ecoturismo, santuários religiosos e festas típicas são os destaques dessas cidades. Em julho, a região recebe mais uma edição das travessias de 8 dias, feitas com bicicleta pela Rota Enxaimel, além de incríveis vinícolas, cachoeiras e grutas.'

    
}


function dadosSudeste() {

    
    imagem1.src = './assets/sudeste/arraialDoCabo.jpg'
    local1.innerHTML = 'Arraial do Cabo - Rio de Janeiro';
    descricao1.innerHTML ='A região paradisíaca, localizada próxima a Cabo Frio, no Rio de Janeiro, possui praias um tanto quanto exóticas e quese assemelham bastante com as praias do Caribe. Considerada uma das praias mais bonitas do Brasil (e do mundo inteiro), a Praia do Farol é certamente aquele lugar tão paradisíaco que nem parece verdade. Tanta beleza tem um preço: o acesso só se dá de barco e o número de visitantes é controlado pela Marinha Brasileira, que mantém uma base no local.'

    imagem2.src = './assets/sudeste/vitoriaVelha.jpg'
    local2.innerHTML = 'Cidade Velha - Esperito Santo'
    descricao2.innerHTML = 'Trinta e dois quilômetros de litoral, seis praias principais, lagoas, muito azul e muito verde em várias áreas de proteção ambiental. Vila Velha é uma cidade histórica, datada do início da cidade data de 1535, mas também é linda, charmosa, moderna e aconchegante. Com temperatura média em torno dos 25ºC, ela oferece de tudo um pouco!'

    imagem3.src = './assets/sudeste/lAGO DE FURNAS, CAPITÓLIO.jpg'
    local3.innerHTML =   'Lago de Furnas - Minas Gerais'
    descricao3.innerHTML =  'A cidade de Capitólio, em Minas Gerais, fica em um lugar privilegiado: bem próxima à Serra da Canastra e ao Lago de Furnas, principal atração do local. Combinado com vários cânions e quedas d’água, o local possui uma das paisagens mais bonitas do Brasil. O Lago artificial foi formado para permitir a geração de energia pela Usina Hidrelétrica de Furnas em 1963 e hoje serve como espaço de passeios e banhos refrescantes em meio ao calor de Minas Gerais.'

    imagem4.src = './assets/sudeste/cristoRedentor.jpg'
    local4.innerHTML = 'Cristo Redentor - Rio de Janeiro'
    descricao4.innerHTML = 'A incrível Estátua do Cristo Redentor, conhecida como símbolo do Brasil no exterior, tem 30 metros de altura e 8 metros de pedestal. É um lugar icônico, inaugurado em 1931, que fica localizado no alto do Morro do Corcovado, com 710 metros de altura, e em meio à maior floresta urbana do mundo, a Floresta da Tijuca. Sua vista é simplesmente sensacional e se você for visitar o Rio de Janeiro, ir ao Cristo Redentor é um passeio imperdível, com paisagens de cair o queixo!'

}

function dadosCentroOeste() {

    
    imagem1.src = './assets/centro-oeste/chapaGuimaraes.jpg'
    local1.innerHTML = 'Chapada dos Guimarães - Mato Grosso';
    descricao1.innerHTML ='local é simplesmente um paraíso de belezas naturais. São mais de 30 hectares de natureza altamente preservada e de grande valor histórico, principalmente pelos registros rupestres e os antigos refúgios de escravos. Por isso, o Parque é considerado uma Área de Preservação Ambiental (APA) e também uma Unidade de Conservação (UC)profundo com a natureza'

    imagem2.src = './assets/centro-oeste/bonito.JPG'
    local2.innerHTML = 'Bonito - Mato Grosso do Sul'
    descricao2.innerHTML = 'É a principal cidade turística da região da Serra da Bodoquena, sendo o turismo a principal atividade da região há muito tempo,além de estar em constante evolução buscando a interferência mínima na natureza. Bonito reúne um conjunto de equipes, empresas, ONGs e órgãos governamentais que buscam organizar e coordenar o ecoturismo, visando sempre a sustentabilidade local e a conservação da natureza.'

    imagem3.src = './assets/centro-oeste/caudasNovas.jpg'
    local3.innerHTML =   'Caudas Novas - Goiás'
    descricao3.innerHTML =  'Um dos destinos mais famosos de Goiás, Caldas Novas ganhou fama por contar com o maior manancial hidrotermal do mundo. São mais de 20 parques aquáticos e 200 piscinas hidrotermais, que atraem milhões de turistas de todas as idades por ano. O Lago da Represa de Corumbá, o Parque Estadual da Serra de Caldas Novas e o Jardim Japonês são alguns dos lugares mais procurados.'

    imagem4.src = './assets/centro-oeste/brasilia.jpg'
    local4.innerHTML = 'Brasília'
    descricao4.innerHTML = 'A capital do país destaca-se por seu exemplar planejamento estrutural, criado com traços modernos e considerado uma das obras-primas de Oscar Niemeyer. Vale a pena conferir alguns dos pontos turísticos: Congresso Nacional, Praça dos Três Poderes, Esplanada dos Ministérios, Catedral de Brasília, Parque Nacional de Brasília,Panteão da Pátria, Santuário Dom Bosco e Memorial JK.'

}


function dadosNordeste() {

    
    imagem1.src = './assets/nordeste/morroSP.jpg'
    local1.innerHTML = 'Morro de São Paulo - Bahia';
    descricao1.innerHTML ='Em plena Costa do Dendê e somente acessível de barco, Morro de São Paulo conta com apenas quatro praias exploradas. Repletas de ótimos restaurantes e pousadas, as praias contam ainda com piscinas naturais de águas transparentes perfeitas para mergulho. Não é permitido tráfego de carros na ilha – são tratores que levam os turistas até às pousadas e pontos turísticos por uma estrada de terra paralela à praia. Mas nada como praticar longas caminhadas para desbravar todos os encantos e lindas vistas de Morro de São Paulo'

    imagem2.src = './assets/nordeste/lencoisMaranhenses.jpg'
    local2.innerHTML = 'Lençóis Maranhenses -  Maranhão'
    descricao2.innerHTML = 'A circulação pela região, cheia de trilhas de areia e rios, requer uso de jipes potentes ou de barcos. E escalar alguma das dunas pode exigir certo esforço físico. Mas tudo é recompensado pelas vistas estonteantes desse paraíso protegido pelo status de Parque Nacional. As lagoas têm águas cristalinas e quentinhas e as areias das dunas, mesmo sob calor intenso, não são demasiadamente quentes. Na temporada de ventos, os adeptos do kitesurf levam um colorido a mais à paisagem dos Lençóis'

    imagem3.src = './assets/nordeste/natal.jpg'
    local3.innerHTML =   'Natal - Rio Grande do Norte'
    descricao3.innerHTML =  'As praias o principal ponto de interesse. Destaque para a badalada Praia de Ponta Negra, com seus animados quiosques e restaurantes, mar calmo e as dunas do Morro do Careca, com 120 metros de altura quase todas cobertas por vegetação. Se sobrar tempo, aproveite para desbravar outros destinos do variado litoral potiguar, com seus 400 quilômetros de costa das dunas de Genipabu, às lagoas de Jacumã e a internacional vila da Pipa'

    imagem4.src = './assets/nordeste/portoGalinhas.jpg'
    local4.innerHTML = 'Porto de Galinhas - Pernambuco'
    descricao4.innerHTML = 'Porto de Galinhas fica a cerca de 200 metros da costa. Suas águas cristalinas e esverdeadas, barreiras de recifes e corais formam piscinas naturais que viram verdadeiros aquários cheios de peixinho coloridos. Para chegar até os corais, o passeio é por meio de jangadas coloridas – caso a maré esteja baixa, é possível até nadar e caminhar mar adentro. O local tornou-se um dos mais badalados balneários do litoral pernambucano, com praias para todos os gostos. Incluindo algumas com ondas fortes, perfeitas para a prática de surfe. No verão, todo o vilarejo ganha movimento ainda maior, com turistas do Brasil e do mundo'

}


function dadosNorte() {

    
    imagem1.src = './assets/norte/jalapao.jpg'
    local1.innerHTML = 'Parque do Jalapão – Tocantins';
    descricao1.innerHTML ='Acima de tudo, este é um destino que nasceu para o ecoturismo e para quem curte muito uma aventura. Emoldurado por cachoeiras, águas transparentes, chapadas e dunas cor de laranja, o Parque do Jalapão é um legítimo oásis. A queda d’água em formato de ferradura da Cachoeira da Velha é um de seus ícones, assim como o Fervedouro do Ceiça (poço cristalino no qual é impossível afundar devido à pressão da água). Ao mesmo tempo,vale conhecer a grandiosa fenda do Cânion Sussuapara e a Pedra Furada, mirante de onde se tem acesso a um pôr do sol incrível.'

    imagem2.src = './assets/norte/monteRoraima.jpg'
    local2.innerHTML = 'Monte Roraima – Roraima'
    descricao2.innerHTML = 'Na tríplice fronteira entre Brasil, Guiana e Venezuela, o Monte Roraima é um dos pontos mais elevados do país, esbanjando 2374 metros de altura. Ao seu redor há belíssimas formações rochosas, cachoeiras, lagos e uma fauna e flora muito ricas. A paisagem ali é tão bonita que serviu de inspiração para a animação “Up – Altas Aventuras”, sabia? Em linhas gerais, pode apostar que você vai voltar pra casa com fotos de cair o queixo.'

    imagem3.src = './assets/norte/TrilhadaSamauma.jpg'
    local3.innerHTML =   'Trilha da Samaúma - Amapá'
    descricao3.innerHTML =  'Na Ilha de Santana, no Amapá, a Trilha da Samaúma é um atrativo e tanto pra quem está a fim de muito contato com a natureza. Cercada pelo Rio Amazonas e com uma flora milenar, que abriga árvores de grande porte, bem como açaizais e plantas raras e coloridas, a trilha passa por riachos, igarapés e samaúmas centenárias que somam mais de 400 anos. Para completar, a gastronomia local é uma delícia e é bem fácil encontrá-la pela ilha.'

    imagem4.src = './assets/norte/Parque Nacional de Anavilhanas – Amazonas.jpg'
    local4.innerHTML = 'Parque de Anavilhanas – Amazonas'
    descricao4.innerHTML = 'Um pedacinho do céu em meio à Amazônia, o Parque Nacional de Anavilhanas é o segundo maior arquipélago fluvial do planeta. Afinal de contas, é composto por 400 ilhas e 60 lagos. Famoso pela presença do Rio Negro, da vegetação de igapós gigantes e de animais como aves, mamíferos, peixes, répteis e anfíbios, é ideal para a prática de atividades ao ar livre. Anote aí alguns exemplos: trilhas terrestres e aquáticas, escaladas em árvores e voos panorâmicos.'

}
