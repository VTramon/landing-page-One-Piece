type CharacterInformationProps = {
  character?: string;
};

const CharacterInformation: React.FC<CharacterInformationProps> = ({
  character,
}) => {
  const Luffy =
    'É o capitão do Bando do Chapéu de Palha, filho de Dragon, o homem mais procurado do mundo e neto de Monkey D. Garp, Vice-Almirante da Marinha e arqui-inimigo de Gol D. Roger, que fez história no mundo como o Rei dos Piratas e o dono original do tesouro One Piece. Atualmente, Luffy faz parte do grupo conhecido como "Pior Geração", que reconhece os 12 piratas cujas ousadas ações contra o Governo Mundial lhe renderam uma recompensa acima de $100.000.000. A do Luffy é $1.500.000.000.';

  const Zoro =
    'O espadachim que domina os estilos Ittoryu (Estilo Uma Espada), o Nitoryu (Estilo Duas Espadas), e desenvolveu por conta própria o Santoryu (Estilo Três Espadas). Foi o primeiro a entrar no bando, e assim como seu capitão, faz parte da Pior Geração com uma recompensa de $320.000.000. Enquanto Luffy sonha em se tornar o Rei dos Piratas, o sonho de Zoro é um dia ser o melhor espadachim do mundo, sonho que adquiriu durante a infância apos a morte de sua única amiga, que sofria preconceito por ser mulher e querer ser espadachim.';

  const Nami =
    'Apos passar 8 anos trabalhando forçadamente para Arlong, que tinha todo seu vilarejo como reféns, recebeu a missão de tentar roubar os Chapéus de Palha. Para sua surpresa, a tripulação de Luffy conseguiu se rebelar e vencer Arlong. É a cartógrafa e navegadora do navio, graças ao seu grande conhecimento e com a ajuda de uma das ferramentas criadas por Usopp, é capaz de mudar o clima e até criar tempestades. E apesar de não estar entre os mais fortes do barco é a pessoa que assume a liderança do barco na ausência do capitão, assim como um imediato faria (apesar de não haver ninguém com este posto no bando).';

  const Usopp =
    'Inicialmente é introduzido apenas como um garoto famoso por suas mentiras. Contudo, o pirata é um homem sensível, e suas narrativas incríveis surgiram como mecanismo de defesa. São uma forma que ele encontrou, ainda criança, de lidar com a morte da mãe e o abandono do pai. Mas apos ser convidado para entrar no bando se mostra extremamente engenhoso e inventivo, além de ser um exímio atirador e filho do melhor atirador do mundo, apesar de ser extremamente medroso se mostra um guerreiro poderoso quando necessário.';

  const Sanji =
    'Apesar de ser filho da nobre família Vinsmoke, durante a infância sofreu bullying de seus irmãos menosprezando sua atitude de alimentar aqueles que seu pai julgava inferiores e a quem não dava atenção. O patriarca via o filho como a vergonha da família. Sanji renunciou seu título de príncipe do Reino Germa. Foi convidado para o bando quando Luffy o viu entrar em uma briga com um tenente da marinha por desperdiçar comida, e alimentar um fugitivo faminto as escondidas. Além de ser o cozinheiro do barco é um exímio lutador ficando entre os três integrantes mais fortes do grupo, é uma pessoa séria e sensata a maior parte do tempo, exceto quando esta perto de uma mulher bonita.';

  const Chopper =
    'Era uma rena comum até ingerir a fruta Hito Hito no Mi, que lhe deu não apenas características humanoides, como também grande inteligência e a capacidade de alterar a forma física de seu corpo. Após desastrosas primeiras interações com os humanos, Chopper foi resgatado pelo Dr Hiriluk, que ajudou a jovem rena a se tornar um médico, sendo ensinado ainda por seis anos pela Dra. Kureha. Conforme controlou cada vez mais os poderes que a Hito Hito no Mi lhe proporcionou, ele já conseguiu assumir sete formas diferentes. Crescer seus pelos, aumentar seus músculos, diminuir seu peso e aprimorar sua velocidade são alguns dos recursos que consegue alcançar a partir dessas transformações.';

  const Robin =
    'Embora tenha sido introduzida como uma antagonista acabou se juntando ao bando apos luffy salvar sua vida e ganhou a confiança do resto do grupo, apos tentar se entregar a marinha para poupar os outros tripulantes. Ela não é apenas uma arqueóloga e historiadora que possui conhecimentos extremamente valiosos como também a única sobrevivente da ilha de Ohara e a última pessoa no mundo capaz de ler os Poneglyphs, ato considerado um risco para o Governo Mundial.';

  const Franky =
    'Assim como Nico Robin, o personagem começa sua trajetória como um antagonista. Um ciborgue de 36 anos, Franky é o líder da Família Franky, que trabalhava com o desmantelamento de navios. É um construtor naval de primeira e um dos integrantes mais atenciosos e maduros, embora seu jeito meio excêntrico passe a ideia errada inicialmente, ele arrisca sua vida para proteger a equipe e quaisquer pessoas que são perseguidas, visto que, para ele, ninguém deve ser julgado por ser quem é.';

  const Brook =
    'Foi encontrado por Luffy e sua equipe em uma ilha fantasma conhecida como Thriller Bark, no Triângulo Florian. O pirata viveu lá por quase 50 anos após a morte de sua tripulação. Sua antiga equipe foi vítima de doenças e diferentes inimigos. Brook sobreviveu apenas graças à fruta Yomi Yomi no Mi, que lhe proporcionou uma segunda vida como um esqueleto imortal. A vontade de entrar para a tripulação se justifica tanto na sua paixão por navegar quanto pelo seu sonho de um dia reencontrar o filhote de baleia Laboon, adotado como mascote de sua antiga tripulação.';

  const Jinbe =
    'É um homem-peixe da espécie tubarão-baleia. Seu primeiro encontro com luffy foi em uma tentativa para salvar Ace (irmão de luffy) do corredor da morte. Encontrou Luffy 2 anos depois quando recebeu sua ajuda para acabar com o golpe de estado que estava havendo na ilha dos homens peixes, que foi quando recebeu a oferta para entrar para o bando, e acabou aceitando a oferto algum tempo depois na ilha Whole Cake onde enfrentaram Big Mom uma dos 4 "Imperadores do Mar" (os piratas mais fortes atualmente). Seu grande sonho é, um dia, alcançar a coexistência pacífica e igualitária entre homens-peixe e humanos, como era o sonho de seu ex-capitão Fisher Tiger.';

  return (
    <div>
      {!!character && character === 'Monkey D. Luffy' ? (
        <p>{Luffy}</p>
      ) : !!character && character === 'Usopp' ? (
        <p>{Usopp}</p>
      ) : !!character && character === 'Roronoa Zoro' ? (
        <p>{Zoro}</p>
      ) : !!character && character === 'Nami' ? (
        <p>{Nami}</p>
      ) : !!character && character === 'Brook' ? (
        <p>{Brook}</p>
      ) : !!character && character === 'Chopper' ? (
        <p>{Chopper}</p>
      ) : !!character && character === 'Franky' ? (
        <p>{Franky}</p>
      ) : !!character && character === 'Jinbe' ? (
        <p>{Jinbe}</p>
      ) : !!character && character === 'Nico Robin' ? (
        <p>{Robin}</p>
      ) : !!character && character === 'Vinsmoke Sanji' ? (
        <p>{Sanji}</p>
      ) : null}
    </div>
  );
};

export { CharacterInformation };
