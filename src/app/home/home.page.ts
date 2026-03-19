import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livros.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 livros: Livro[] = [
  {
    isbn: '123',
    titulo: 'Os Dois Morrem no Final',
    sinopse: 'Os Dois realmente morrem no final',
    data_lancamento: '01/01/2001',
    paginas: '3233',
    autor: [
      { nome: 'Theo', email: 'shse@gmail.com' }
    ],
    categoria: [
      { nome: 'queer love' }
    ],
    editora: { nome: 'horanghae', email: 'svtbestdancer@gmail.com' }
  },
  {
    isbn: '124',
    titulo: 'Vermelho, Branco e Sangue Azul',
    sinopse: 'Romance entre o filho da presidente dos EUA e um príncipe britânico.',
    data_lancamento: '14/05/2019',
    paginas: '421',
    autor: [
      { nome: 'Casey', email: 'casey@email.com' }
    ],
    categoria: [
      { nome: 'romance' }
    ],
    editora: { nome: 'Editora Arco', email: 'contato@arco.com' }
  },
  {
    isbn: '125',
    titulo: 'Aristóteles e Dante Descobrem os Segredos do Universo',
    sinopse: 'Dois garotos constroem uma amizade profunda e transformadora.',
    data_lancamento: '21/02/2012',
    paginas: '359',
    autor: [
      { nome: 'Benjamin', email: 'benjamin@email.com' }
    ],
    categoria: [
      { nome: 'young adult' }
    ],
    editora: { nome: 'Planeta', email: 'planeta@email.com' }
  },
  {
    isbn: '126',
    titulo: 'Heartstopper',
    sinopse: 'História em quadrinhos sobre amizade e amor adolescente.',
    data_lancamento: '01/01/2018',
    paginas: '288',
    autor: [
      { nome: 'Alice', email: 'alice@email.com' }
    ],
    categoria: [
      { nome: 'hq' }
    ],
    editora: { nome: 'Graphix', email: 'graphix@email.com' }
  },
  {
    isbn: '127',
    titulo: 'Simon vs. a Agenda Homo Sapiens',
    sinopse: 'Um adolescente guarda um segredo enquanto se apaixona online.',
    data_lancamento: '07/04/2015',
    paginas: '320',
    autor: [
      { nome: 'Becky', email: 'becky@email.com' }
    ],
    categoria: [
      { nome: 'comédia romântica' }
    ],
    editora: { nome: 'Balzer', email: 'balzer@email.com' }
  },
  {
    isbn: '128',
    titulo: 'Me Chame Pelo Seu Nome',
    sinopse: 'Um intenso romance de verão na Itália.',
    data_lancamento: '01/01/2007',
    paginas: '248',
    autor: [
      { nome: 'Andre', email: 'andre@email.com' }
    ],
    categoria: [
      { nome: 'drama' }
    ],
    editora: { nome: 'Intrínseca', email: 'intrinseca@email.com' }
  },
  {
    isbn: '129',
    titulo: 'A Canção de Aquiles',
    sinopse: 'Releitura da mitologia grega focando em Aquiles e Pátroclo.',
    data_lancamento: '20/09/2011',
    paginas: '378',
    autor: [
      { nome: 'Madeline', email: 'madeline@email.com' }
    ],
    categoria: [
      { nome: 'fantasia' }
    ],
    editora: { nome: 'Ecco', email: 'ecco@email.com' }
  },
  {
    isbn: '130',
    titulo: 'Garoto Encontra Garoto',
    sinopse: 'Um mundo onde ser diferente é totalmente normal.',
    data_lancamento: '01/09/2003',
    paginas: '185',
    autor: [
      { nome: 'David', email: 'david@email.com' }
    ],
    categoria: [
      { nome: 'ficção' }
    ],
    editora: { nome: 'Knopf', email: 'knopf@email.com' }
  },
  {
    isbn: '131',
    titulo: 'Eles Dois Se Amam',
    sinopse: 'Dois jovens enfrentam desafios para viver um amor verdadeiro.',
    data_lancamento: '10/10/2020',
    paginas: '300',
    autor: [
      { nome: 'Lucas', email: 'lucas@email.com' }
    ],
    categoria: [
      { nome: 'romance queer' }
    ],
    editora: { nome: 'Nova Era', email: 'novaera@email.com' }
  },
  {
    isbn: '132',
    titulo: 'Além do Arco-Íris',
    sinopse: 'Uma jornada de autodescoberta e aceitação.',
    data_lancamento: '05/06/2018',
    paginas: '275',
    autor: [
      { nome: 'Marina', email: 'marina@email.com' }
    ],
    categoria: [
      { nome: 'drama' }
    ],
    editora: { nome: 'Aurora', email: 'aurora@email.com' }
  },
  {
    isbn: '133',
    titulo: 'Entre Nós Dois',
    sinopse: 'Uma história sensível sobre identidade e amor.',
    data_lancamento: '12/03/2021',
    paginas: '310',
    autor: [
      { nome: 'Rafael', email: 'rafael@email.com' }
    ],
    categoria: [
      { nome: 'romance' }
    ],
    editora: { nome: 'Luz', email: 'luz@email.com' }
  }
]



}
