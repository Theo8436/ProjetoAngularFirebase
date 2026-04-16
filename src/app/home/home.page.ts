import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemon: any = {
    nome: '',
    poder: ''
  };

  enviado = false;

  constructor(
    public crudService: CrudService
  ) {}

  enviar() {
    if (!this.pokemon.nome || !this.pokemon.poder) {
      return;
    }

    this.crudService.insert(this.pokemon, 'pokemons');
    this.enviado = true;
    this.pokemon = {
      nome: '',
      poder: ''
    };
  }

}
