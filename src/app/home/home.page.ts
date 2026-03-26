import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro, IProduto } from './acervo.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: IProduto[] = [
    {
      nome: "manteiga",
      validade: "26/09/2098",
      lote: "TGH&"
    },

      {
    nome: "Manteiga",
    validade: "26/09/2098",
    lote: "TGH&"
  },
  {
    nome: "Leite",
    validade: "10/04/2026",
    lote: "LT123"
  },
  {
    nome: "Queijo",
    validade: "15/05/2026",
    lote: "QJ456"
  },
  {
    nome: "Pão",
    validade: "02/04/2026",
    lote: "PA789"
  },
  {
    nome: "Iogurte",
    validade: "20/04/2026",
    lote: "IO321"
  },
  {
    nome: "Arroz",
    validade: "30/12/2026",
    lote: "AR654"
  },
  {
    nome: "Feijão",
    validade: "18/11/2026",
    lote: "FE987"
  },
  {
    nome: "Macarrão",
    validade: "25/08/2026",
    lote: "MC159"
  },
  {
    nome: "Açúcar",
    validade: "01/01/2027",
    lote: "AC753"
  },
  {
    nome: "Sal",
    validade: "05/06/2027",
    lote: "SL852"
  },
  {
    nome: "Café",
    validade: "12/09/2026",
    lote: "CF951"
  }
  ]
}
