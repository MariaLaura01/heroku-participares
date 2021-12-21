import { ActivatedRoute } from '@angular/router';
import { EventoService } from './../../eventos/eventos.service';
import { Evento } from './../../core/model';
import { ImagemService } from './../../imagens/imagem.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Escola, Imagem } from 'src/app/core/model';
import { PaginaEventoService } from '../pagina-evento.service';
import {GalleriaModule} from 'primeng/galleria';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-generico',
  templateUrl: './generico.component.html',
  styleUrls: ['./generico.component.css']
})
export class GenericoComponent implements OnInit
{

  imagens:Array<Imagem> = [];

  evento: Evento;

  escola: Escola;

  constructor(
    private pgService: PaginaEventoService,
//    private photoService: PhotoService,
    private errorHandler: ErrorHandlerService,
    private eventoService: EventoService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private imagemService: ImagemService,
    private route: ActivatedRoute
  ) { }

  displayBasic: boolean = false;

  displayBasic2: boolean = false;

  displayCustom: boolean = false;

  activeIndex: number = 0;

  ngOnInit() : void {
    const codigoEvento = this.route.snapshot.params[`codigo`];
    this.carregarEvento(codigoEvento);
    //this.importarEvento();
    //this.photoService.getImages().then(images => this.imagens = images);
  }

  carregarEvento(codigo: number) {
    this.eventoService.buscarPorCodigo(codigo)
      .then((resultado:Evento) => {
        this.evento = resultado;
      })
      .catch((erro:any) => this.errorHandler.handle(erro));
  }

  /*
  // Recebe o JSON do evento da sessão (gambiarra never ends)
  importarEvento(): void{
    // Obtendo string do evento da sessão
    let eventoString = localStorage.getItem('evento');
    if (eventoString) {
      this.evento = JSON.parse( eventoString );
    }
  }
  */



  //pega o nome da escola atraves do codigo (não sei se tá certo)
  buscarEscola(codigo: number) : void
  {
    this.pgService.nomeEscolaPorCodigo(codigo)
    .then((escola: Escola) =>
    {
      this.escola = escola;
    })
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

}

/*
  // Relacionado com as fotos
  responsiveOptions:any[] =
  [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  //add nova foto
  novaFoto(_form: NgForm)
  {
    this.photoService.adicionarFoto(this.imagens)
    .catch((erro: any) => this.errorHandler.handle(erro));
  }

  // Clique na foto
  imageClick(index: number)
  {
    this.activeIndex = index;
    this.displayCustom = true;
  }

  pesquisarImagens(): void {
    this.imagemService.listarTodas()
    .then(resultado => {
      this.imagens = resultado;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }
*/
