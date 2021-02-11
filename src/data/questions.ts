export interface QuestionDataInterface {
  answerOptions: Answer[]
  questionNumber: number
  questionText: string
}

interface Answer {
  answerText: string
  isCorrect: boolean
  active: boolean
  id: number
}

const questionData: QuestionDataInterface[] = [
  {
    questionNumber: 1,
    questionText: 'O etanol é produzido através de qual fonte de energia?',
    answerOptions: [
      { id: 1, active: false, isCorrect: false, answerText: 'Solar' },
      { id: 2, active: false, isCorrect: true, answerText: 'Biomassa' },
      { id: 3, active: false, isCorrect: false, answerText: 'Eólica' },
      { id: 4, active: false, isCorrect: false, answerText: 'Geotérmica' },
      { id: 5, active: false, isCorrect: false, answerText: 'Hidrelétrica' }
    ]
  },
  {
    questionNumber: 2,
    questionText: 'Qual dessas aves não voa?',
    answerOptions: [
      { id: 1, active: false, isCorrect: true, answerText: 'Pinguim' },
      { id: 2, active: false, isCorrect: false, answerText: 'Galinha' },
      { id: 3, active: false, isCorrect: false, answerText: 'Cegonha' },
      { id: 4, active: false, isCorrect: false, answerText: 'Pato' },
      { id: 5, active: false, isCorrect: false, answerText: 'Peru' }
    ]
  },
  {
    questionNumber: 3,
    questionText: 'Nesses pares, ambos são mamíferos:',
    answerOptions: [
      { id: 1, active: false, isCorrect: true, answerText: 'Baleia azul e golfinhos' },
      { id: 2, active: false, isCorrect: false, answerText: 'Morcegos e galinhas' },
      { id: 3, active: false, isCorrect: false, answerText: 'Girafas e tartarugas' },
      { id: 4, active: false, isCorrect: false, answerText: 'Porcos e pinguins' },
      { id: 5, active: false, isCorrect: false, answerText: 'Macacos e sapos' }
    ]
  },
  {
    questionNumber: 4,
    questionText: 'De que são constituídos os diamantes?',
    answerOptions: [
      { id: 1, active: false, isCorrect: false, answerText: 'Grafite' },
      { id: 2, active: false, isCorrect: false, answerText: 'Rênio' },
      { id: 3, active: false, isCorrect: true, answerText: 'Carbono' },
      { id: 4, active: false, isCorrect: false, answerText: 'Ósmio' },
      { id: 5, active: false, isCorrect: false, answerText: 'Bóhrio' }
    ]
  },
  {
    questionNumber: 5,
    questionText: 'Qual a ciência que estuda a atmosfera da Terra e a climatologia?',
    answerOptions: [
      { id: 1, active: false, isCorrect: false, answerText: 'Astronomia' },
      { id: 2, active: false, isCorrect: false, answerText: 'Metereologia' },
      { id: 3, active: false, isCorrect: false, answerText: 'Dispersão atmosférica' },
      { id: 4, active: false, isCorrect: true, answerText: 'Meteorologia' },
      { id: 5, active: false, isCorrect: false, answerText: 'Horologia' }
    ]
  },
  {
    questionNumber: 6,
    questionText: 'Quantos braços tem um polvo?',
    answerOptions: [
      { id: 1, active: false, isCorrect: false, answerText: '6' },
      { id: 2, active: false, isCorrect: true, answerText: '8' },
      { id: 3, active: false, isCorrect: false, answerText: '10' },
      { id: 4, active: false, isCorrect: false, answerText: '7' },
      { id: 5, active: false, isCorrect: false, answerText: '3' }
    ]
  },
  {
    questionNumber: 7,
    questionText:
      'Durante quantos anos Fidel Castro, um dos governantes que esteve mais tempo no poder, esteve à frente de Cuba?',
    answerOptions: [
      { id: 1, active: false, isCorrect: false, answerText: '39 anos' },
      { id: 2, active: false, isCorrect: false, answerText: '32 anos' },
      { id: 3, active: false, isCorrect: false, answerText: '40 anos' },
      { id: 4, active: false, isCorrect: true, answerText: '49 anos' },
      { id: 5, active: false, isCorrect: false, answerText: '46 anos' }
    ]
  },
  {
    questionNumber: 8,
    questionText: 'Qual a função da ONU?',
    answerOptions: [
      {
        id: 1,
        active: false,
        isCorrect: false,
        answerText: 'Zelar pela cultura em todas as nações.'
      },
      {
        id: 2,
        active: false,
        isCorrect: true,
        answerText: 'Unir as nações com o objetivo de manter a paz e a segurança mundial.'
      },
      {
        id: 3,
        active: false,
        isCorrect: false,
        answerText: 'Financiar países em desenvolvimento.'
      },
      {
        id: 4,
        active: false,
        isCorrect: false,
        answerText: 'Regular o funcionamento do sistema financeiro a nível internacional.'
      },
      {
        id: 5,
        active: false,
        isCorrect: false,
        answerText: 'Gerenciar acordos de comércio entre os países.'
      }
    ]
  },
  {
    questionNumber: 9,
    questionText: 'Qual destes grupos não devem tomar a vacina contra a febre amarela?',
    answerOptions: [
      {
        id: 1,
        active: false,
        isCorrect: true,
        answerText: 'Transplantados, pacientes oncológicos, pessoas com alergia grave ao ovo.'
      },
      {
        id: 2,
        active: false,
        isCorrect: false,
        answerText: 'Crianças até 2 anos, grávidas, doadores de sangue.'
      },
      {
        id: 3,
        active: false,
        isCorrect: false,
        answerText: 'Pacientes com câncer, idosos acima de 75 anos.'
      },
      {
        id: 4,
        active: false,
        isCorrect: false,
        answerText:
          'Mulheres que querem engravidar, lactantes, bebês com menos de 1 ano, doentes que recebam tratamento de saúde especial.'
      },
      {
        id: 5,
        active: false,
        isCorrect: false,
        answerText: 'Pessoas alérgicas, crianças até 2 anos, grávidas.'
      }
    ]
  },
  {
    questionNumber: 10,
    questionText: 'Quais as respectivas cores da reciclagem do papel, do vidro, do metal e do plástico?',
    answerOptions: [
      {
        id: 1,
        active: false,
        isCorrect: true,
        answerText: 'Azul, verde, amarelo e vermelho.'
      },
      {
        id: 2,
        active: false,
        isCorrect: false,
        answerText: 'Verde, azul, vermelho e amarelo.'
      },
      {
        id: 3,
        active: false,
        isCorrect: false,
        answerText: 'Vermelho, amarelo, verde e azul.'
      },
      {
        id: 4,
        active: false,
        isCorrect: false,
        answerText: 'Azul, amarelo, verde e vermelho.'
      },
      {
        id: 5,
        active: false,
        isCorrect: false,
        answerText: 'Verde, amarelo, azul e vermelho.'
      }
    ]
  },
  {
    questionNumber: 11,
    questionText: 'Quais as maiores pandemias da história?',
    answerOptions: [
      { id: 1, active: false, isCorrect: false, answerText: 'Gripe espanhola e câncer' },
      { id: 2, active: false, isCorrect: false, answerText: 'Varíola e hipertensão' },
      { id: 3, active: false, isCorrect: true, answerText: 'Peste negra e covid-19' },
      { id: 4, active: false, isCorrect: false, answerText: 'Cólera e colesterol' },
      { id: 5, active: false, isCorrect: false, answerText: 'Asma e gripe espanhola' }
    ]
  },
  {
    questionNumber: 12,
    questionText: 'Quem é o autor do famoso discurso "Eu tenho um sonho"?',
    answerOptions: [
      { id: 1, active: false, isCorrect: false, answerText: 'Nelson Mandela' },
      { id: 2, active: false, isCorrect: true, answerText: 'Martin Luther King' },
      { id: 3, active: false, isCorrect: false, answerText: 'Zumbi dos Palmares' },
      { id: 4, active: false, isCorrect: false, answerText: 'Barack Obama' },
      { id: 5, active: false, isCorrect: false, answerText: 'Carlota Joaquina' }
    ]
  },
  {
    questionNumber: 13,
    questionText: 'Que acontecimento importante para a história da humanidade teve lugar em 20 de julho de 1969?',
    answerOptions: [
      { id: 1, active: false, isCorrect: true, answerText: 'Chegada do homem à lua.' },
      { id: 2, active: false, isCorrect: false, answerText: 'Fim do Apartheid.' },
      { id: 3, active: false, isCorrect: false, answerText: 'Lançamento das bombas atômicas em Hiroshima e Nagasaki.' },
      { id: 4, active: false, isCorrect: false, answerText: 'Lançamento do álbum dos Beatles Abbey Road.' },
      { id: 5, active: false, isCorrect: false, answerText: 'Envio do primeiro e-mail da história.' }
    ]
  },
  {
    questionNumber: 14,
    questionText: 'Em que ano e onde aconteceu o maior acidente aéreo da história do Brasil?',
    answerOptions: [
      { id: 1, active: false, isCorrect: true, answerText: 'Ano 2007, em São Paulo.' },
      { id: 2, active: false, isCorrect: false, answerText: 'Ano 2006, no Mato Grosso.' },
      { id: 3, active: false, isCorrect: false, answerText: 'Ano 1982, no Ceará.' },
      { id: 4, active: false, isCorrect: false, answerText: 'Ano 1996, em São Paulo.' },
      { id: 5, active: false, isCorrect: false, answerText: 'Ano 1952, na floresta Amazônica.' }
    ]
  },
  {
    questionNumber: 15,
    questionText: 'Qual é respectivamente o animal terrestre mais lento e o mais veloz?',
    answerOptions: [
      { id: 1, active: false, isCorrect: true, answerText: 'Bicho-preguiça e guepardo' },
      { id: 2, active: false, isCorrect: false, answerText: 'Tartaruga e leão' },
      { id: 3, active: false, isCorrect: false, answerText: 'Coala e cavalo' },
      { id: 4, active: false, isCorrect: false, answerText: 'Caracol e tubarão' },
      { id: 5, active: false, isCorrect: false, answerText: 'Bicho-preguiça e libélula' }
    ]
  }
]

export default questionData
