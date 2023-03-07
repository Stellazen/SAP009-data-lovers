import { ordenar, filtroProdutor, filtroDiretor, calculo} from '../src/data.js';

const castle = {
  title: 'Castle in the Sky',
  release_date:"1986",
  rt_score: "95",
  producer: 'Isao Takahata',
  director: 'Hayao Miyazaki'
}
const totoro = {
  title: 'My neighbor Totoro',
  release_date:"1988",
  rt_score: "93",
  producer: 'Hayao Miyazaki',
  director: 'Hayao Miyazaki'
}
const spirited ={
  title: 'Spirited Away',
  release_date: "2001",
  rt_score: "97",
  producer: 'Toshio Suzuki',
  director: 'Hayao Miyazaki'
}
const poko ={
  title: 'Pom Poko',
  release_date: "1994",
  rt_score: "78",
  producer: 'Toshio Suzuki',
  director: 'Isao Takahata'
}

const filmes = [totoro, castle, spirited, poko]

it('deve ordenar filmes de A a Z',() =>{
  const resultado = ordenar(filmes,'deAZ')
  expect(resultado).toEqual([castle, totoro, poko, spirited])
})

it('deve ordenar filmes de Z a A',() =>{
  const resultado = ordenar(filmes,'deZA')
  expect(resultado).toEqual([spirited, poko, totoro, castle])
})

it('deve ordenar data de menor para maior',() =>{
  const resultado = ordenar(filmes,'crescente')
  expect(resultado).toEqual([castle, totoro, poko, spirited])
})

it('deve ordenar data de maior para menor',() =>{
  const resultado = ordenar(filmes,'decrescente')
  expect(resultado).toEqual([spirited, poko, totoro, castle])
})

it('deve ordenar score de maior para menor',() =>{
  const resultado = ordenar(filmes,'score')
  expect(resultado).toEqual([spirited, castle, totoro, poko])
})

it('deve filtrar por produtor',() =>{
  const resultado = filtroProdutor(filmes,'Toshio Suzuki')
  expect(resultado).toEqual([spirited, poko])
})

it('deve filtrar por diretor',() =>{
  const resultado = filtroDiretor(filmes,'Isao Takahata')
  expect(resultado).toEqual([poko])
})

it('deve tirar a media de score',() =>{
  const resultado = calculo(filmes)
  expect(resultado).toEqual(90.75)
})


