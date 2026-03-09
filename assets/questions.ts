/*
祖母 (そぼ) - Sobo (Avó)
祖父 (そふ) - Sofu (Avô)

母 (はは) - Haha (Mãe)
父 (ちち) - Chichi (Pai)

兄 (あに) - Ani (Irmão mais velho)
姉 (あね) - Ane (Irmã mais velha)

弟 (おとうと) - Otouto (Irmão mais novo)
妹 (いもうと) - Imouto (Irmã mais nova)


夫 (おっと) - Otto (Esposo) 
妻 (つま) -  Tsuma (Esposa)

子ども (こども) - Kodomo (Filhos) 
私 (わたし) - Watashi (Eu)

一戸建て (いっこだて) - Ikkodate
アパート - (apaato )
マンション (manshon)
シェアハウス (しぇあはうす) - shea-hausu
寮 (リョウ) ryoo

お寺 (オテラ / おてら) - Otera - templo budista

公園 (コウエン / こうえん) - kōen - Parque público 
学校 (ガッコウ / がっこう)  - gakkoo - Escola
スーパー     | sūpā - Supermercado

ドラッグストア  | doraggu sutoa  - Drogaria
ショッピングセンター    | shoppingu sentā - Shopping center

*/
 
 
  export  const questions = [
    
    {
      question: 'Como se diz Pai em nihongo?',
      img: 'chichi.png',
      audio: 'chichi.mp3',
      correct: 'a',
      options: [
        { value: 'a', letter: 'A', text: '父 (ちち) ' },
        { value: 'b', letter: 'B', text: '祖母 (そぼ)' },
        { value: 'c', letter: 'C', text: '兄 (あに)' },
        { value: 'd', letter: 'D', text: '夫 (おっと)' } 
      ]
    },
    {
      question: 'Como se diz Esposa em nihongo?',
      img: 'tsuma.png',
      audio: 'tsuma.mp3',
      correct: 'd',
      options: [
        { value: 'a', letter: 'A', text: '私 (わたし)' }, 
        { value: 'b', letter: 'B', text: '妹 (いもうと)' }, 
        { value: 'c', letter: 'C', text: '姉 (あね) ' }, 
        { value: 'd', letter: 'D', text: '妻 (つま)' } 
      ]
    },

    {
      question: 'Como se diz Irmão mais velho em nihongo?',
      img: 'ani.png',
      audio: 'ani.mp3',
      correct: 'c',
      options: [
        { value: 'a', letter: 'A', text: '子ども (こども)' },
        { value: 'b', letter: 'B', text: '祖父 (そふ)' },
        { value: 'c', letter: 'C', text: '兄 (あに)' },
        { value: 'd', letter: 'D', text: '父 (ちち)' } 
      ]
    },
    {
      question: 'Como se diz Mãe em nihongo?',
      img: 'haha.png',
      audio: 'haha.mp3',
      correct: 'b',
      options: [
        { value: 'a', letter: 'A', text: '妻 (つま)' }, 
        { value: 'b', letter: 'B', text: '母 (はは)' },  
        { value: 'c', letter: 'C', text: '妹 (いもうと)' },
        { value: 'd', letter: 'D', text: '兄 (あに)' } 
      ]
    },

    {
      question: 'Como se diz Eu em nihongo?',
      img: 'watashi.png',
      audio: 'watashi.mp3',
      correct: 'b',
      options: [
        { value: 'a', letter: 'A', text: '夫 (おっと)' },
        { value: 'b', letter: 'B', text: '私 (わたし)' },
        { value: 'c', letter: 'C', text: '弟 (おとうと)' },
        { value: 'd', letter: 'D', text: '祖母 (そぼ)' } 
      ]
    },
    {
      question: 'Como se diz Filhos em nihongo?',
      img: 'kodomo.png',
      audio: 'kodomo.mp3',
      correct: 'd',
      options: [
        { value: 'a', letter: 'A', text: '弟 (おとうと)' }, 
        { value: 'b', letter: 'B', text: '兄 (あに)' },  
        { value: 'c', letter: 'C', text: '夫 (おっと)' },
        { value: 'd', letter: 'D', text: '子ども (こども)' } 
      ]
    },

    {
      question: 'Como se diz Irmão mais novo em nihongo?',
      img: 'otouto.png',
      audio: 'otouto.mp3',
      correct: 'a',
      options: [
        { value: 'a', letter: 'A', text: '弟 (おとうと)' },
        { value: 'b', letter: 'B', text: '兄 (あに)' },
        { value: 'c', letter: 'C', text: '子ども (こども)' },
        { value: 'd', letter: 'D', text: '父 (ちち)' } 
      ]
    },
    {
      question: 'Como se diz Irmã mais velha em nihongo?',
      img: 'ane.png',
      audio: 'ane.mp3',
      correct: 'b',
      options: [
        { value: 'a', letter: 'A', text: '妻 (つま) ' }, 
        { value: 'b', letter: 'B', text: '姉 (あね)' },  
        { value: 'c', letter: 'C', text: '父 (ちち)' },
        { value: 'd', letter: 'D', text: '子ども (こども)' } 
      ]
    },
    {
      question: 'Como se diz Irmã mais nova em nihongo?',
      img: 'imouto.png',
      audio: 'imouto.mp3',
      correct: 'c',
      options: [
        { value: 'a', letter: 'A', text: '姉 (あね)' },
        { value: 'b', letter: 'B', text: '兄 (あに)' },
        { value: 'c', letter: 'C', text: '妹 (いもうと)' },
        { value: 'd', letter: 'D', text: '妻 (つま) ' } 
      ]
    },
    {
      question: 'Como se diz Esposo em nihongo?',
      img: 'otto.png',
      audio: 'otto.mp3',
      correct: 'a',
      options: [
        { value: 'a', letter: 'A', text: '夫 (おっと)' },
        { value: 'b', letter: 'B', text: '私 (わたし)' },
        { value: 'c', letter: 'C', text: '兄 (あに)' },
        { value: 'd', letter: 'D', text: '姉 (あね)' } 
      ]
    },

  ];

  export const koreQuestions = [
    {
      question: 'Quem aparece nas fotos? Ouça o audio e responda.',
      img: '01-haha.jpg',
      audio: '01-haha.mp3',
      correct: 'b',
      options: [
        { value: 'a', letter: 'A', text: 'ともだち (tomodachi)' },
        { value: 'b', letter: 'B', text: 'はは (haha)' },
        { value: 'c', letter: 'C', text: 'あねのこども (ane no kodomo)' },
        { value: 'd', letter: 'D', text: 'こいびと (koibito)' }, 
        { value: 'e', letter: 'E', text: 'ペット (petto)' } 
      ]
    },
    {
      question: 'Quem aparece nas fotos? Ouça o audio e responda.',
      img: '02-ane.jpg',
      audio: '02-ane.mp3',
      correct: 'e',
      options: [
        { value: 'a', letter: 'A', text: 'ペット (petto)' } ,
        { value: 'b', letter: 'B', text: 'はは (haha)' },
        { value: 'c', letter: 'C', text: 'こいびと (koibito)' }, 
        { value: 'd', letter: 'D', text: 'ともだち (tomodachi)' },
        { value: 'e', letter: 'E', text: 'あねのこども (ane no kodomo)' },
      ]
    },
    {
      question: 'Quem aparece nas fotos? Ouça o audio e responda.',
      img: '03-petto.jpg',
      audio: '03-petto.mp3',
      correct: 'c',
      options: [
        { value: 'a', letter: 'A', text: 'ペット (petto)' },
        { value: 'b', letter: 'B', text: 'あねのこども (ane no kodomo)' },
        { value: 'c', letter: 'C', text: 'こいびと (koibito)' }, 
        { value: 'd', letter: 'D', text: 'ともだち (tomodachi)' },
        { value: 'e', letter: 'E', text: 'はは (haha)' },
      ]
    },
    {
      question: 'Quem aparece nas fotos? Ouça o audio e responda.',
      img: '04-tomodachi.jpg',
      audio: '04-tomodachi.mp3',
      correct: 'd',
      options: [
          { value: 'a', letter: 'A', text: 'こいびと (koibito)' },
          { value: 'b', letter: 'B', text: 'あねのこども (ane no kodomo)' },
          { value: 'c', letter: 'C', text: 'ペット (petto)' },  
          { value: 'd', letter: 'D', text: 'ともだち (tomodachi)' },
          { value: 'b', letter: 'E', text: 'はは (haha)' },
      ]
    },
  ];

  export const placesQuestions = [
    {
      question: 'Qual a moradia da imagem?',
      img: 'ikkodate.jpg',
      audio: 'ikkodate.mp3',
      correct: 'b',
      options: [
        { value: 'a', letter: 'A', text: 'アパート' },
        { value: 'b', letter: 'B', text: '一戸建て (いっこだて)' },
        { value: 'c', letter: 'C', text: 'シェアハウス (しぇあはうす)' },
        { value: 'd', letter: 'D', text: '寮 (リョウ)' }, 
        { value: 'e', letter: 'E', text: 'マンション' } 
      ]
    },
    {
      question: 'Qual a moradia da imagem?',
      img: 'shea-hausu.jpg',
      audio: 'shea-hausu.mp3',
      correct: 'a',
      options: [
        { value: 'a', letter: 'A', text: 'シェアハウス (しぇあはうす)' },
        { value: 'b', letter: 'B', text: 'マンション' }, 
        { value: 'c', letter: 'C', text: '一戸建て (いっこだて)' },
        { value: 'd', letter: 'D', text: '寮 (リョウ)' }, 
        { value: 'e', letter: 'E', text: 'アパート' },
      ]
    },
    {
      question: 'Qual a moradia da imagem?',
      img: 'ryoo.jpg',
      audio: 'ryoo.mp3',
      correct: 'd',
      options: [
        { value: 'a', letter: 'A', text: '一戸建て (いっこだて)' },
        { value: 'b', letter: 'B', text: 'アパート' },
        { value: 'c', letter: 'C', text: 'シェアハウス (しぇあはうす)' },
        { value: 'd', letter: 'D', text: '寮 (リョウ)' }, 
        { value: 'e', letter: 'E', text: 'マンション' }, 
      ]
    },
    {
      question: 'Qual a moradia da imagem?',
      img: 'manshon.jpg',
      audio: 'manshon.mp3',
      correct: 'c',
      options: [
          { value: 'a', letter: 'A', text: 'シェアハウス (しぇあはうす)' },
          { value: 'b', letter: 'B', text: '寮 (リョウ)' }, 
          { value: 'c', letter: 'C', text: 'マンション' }, 
          { value: 'd', letter: 'D', text: 'アパート' },
          { value: 'e', letter: 'E', text: '一戸建て (いっこだて)' },
      ]
    },
    {
      question: 'Qual a moradia da imagem?',
      img: 'apaato.jpg',
      audio: 'apaato.mp3',
      correct: 'e',
      options: [
          { value: 'a', letter: 'A', text: '寮 (リョウ)' }, 
          { value: 'b', letter: 'B', text: '一戸建て (いっこだて)' },
          { value: 'c', letter: 'C', text: 'マンション' }, 
          { value: 'd', letter: 'D', text: 'シェアハウス (しぇあはうす)' },
          { value: 'e', letter: 'E', text: 'アパート' },
      ]
    },

    {
      question: 'Qual o local da imagem?',
      img: 'suupaa.jpg',
      audio: 'suupaa.mp3',
      correct: 'a',
      options: [
          { value: 'a', letter: 'A', text: 'スーパー ' }, 
          { value: 'b', letter: 'B', text: '学校 (ガッコウ / がっこう)' },
          { value: 'c', letter: 'C', text: 'ドラッグストア' }, 
          { value: 'd', letter: 'D', text: 'ショッピングセンター' },
          { value: 'e', letter: 'E', text: '公園 (コウエン / こうえん)' },
      ]
    },

    {
      question: 'Qual o local da imagem?',
      img: 'gakkoo.jpg',
      audio: 'gakkoo.mp3',
      correct: 'c',
      options: [
          { value: 'a', letter: 'A', text: 'ショッピングセンター' },
          { value: 'b', letter: 'B', text: 'ドラッグストア' }, 
          { value: 'c', letter: 'C', text: '学校 (ガッコウ / がっこう)' },
          { value: 'd', letter: 'D', text: '公園 (コウエン / こうえん)' },
          { value: 'e', letter: 'E', text: 'スーパー ' }, 
      ]
    },
    {
      question: 'Qual o local da imagem?',
      img: 'doraggu.jpg',
      audio: 'doraggu.mp3',
      correct: 'e',
      options: [
          { value: 'a', letter: 'A', text: 'ショッピングセンター' },
          { value: 'b', letter: 'B', text: '公園 (コウエン / こうえん)' },
          { value: 'c', letter: 'C', text: 'スーパー ' }, 
          { value: 'd', letter: 'D', text: '学校 (ガッコウ / がっこう)' },
          { value: 'e', letter: 'E', text: 'ドラッグストア' }, 
      ]
    },
    {
      question: 'Qual o local da imagem?',
      img: 'kooen.jpg',
      audio: 'kooen.mp3',
      correct: 'b',
      options: [
          { value: 'a', letter: 'A', text: 'ドラッグストア' }, 
          { value: 'b', letter: 'B', text: '公園 (コウエン / こうえん)' },
          { value: 'c', letter: 'C', text: '学校 (ガッコウ / がっこう)' },
          { value: 'd', letter: 'D', text: 'スーパー ' }, 
          { value: 'e', letter: 'E', text: 'ショッピングセンター' },
      ]
    },
    {
      question: 'Qual o local da imagem?',
      img: 'shoppingu.jpg',
      audio: 'shoppingu.mp3',
      correct: 'c',
      options: [
          { value: 'a', letter: 'A', text: '学校 (ガッコウ / がっこう)' },
          { value: 'b', letter: 'B', text: 'スーパー ' }, 
          { value: 'c', letter: 'C', text: 'ショッピングセンター' },
          { value: 'd', letter: 'D', text: '公園 (コウエン / こうえん)' },
          { value: 'e', letter: 'E', text: 'ドラッグストア' }, 
      ]
    },

  ]
