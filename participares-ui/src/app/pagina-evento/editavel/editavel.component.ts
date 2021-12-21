import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from './../../eventos/eventos.service';
import { EscolasService } from './../../escolas/escolas.service';
import { PhotoService } from './../photo.service';
import { Escola, Imagem, Evento } from './../../core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { PaginaEventoService } from './../pagina-evento.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editavel',
  templateUrl: './editavel.component.html',
  styleUrls: ['./editavel.component.css']
})
export class EditavelComponent implements OnInit
{
  imagens = [];

  evento = new Evento();

  constructor(private pgService: PaginaEventoService,
//    private photoService: PhotoService,
    private escolaService: EscolasService,
    private eventoService: EventoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title) { }

  ngOnInit(): void {
    const codigoEvento = this.route.snapshot.params[`codigo`];
    this.title.setTitle('Cadastro de Evento');
    if(codigoEvento){
      this.carregarEvento(codigoEvento);
    }
    //this.photoService.getImages().then(images => this.imagens = images);
  }

  carregarEvento(codigo: number): any {
    return this.eventoService.buscarPorCodigo(codigo)
      .then((retorno : Evento) => {
        this.evento = retorno;
      })
      .catch((erro:any) => this.errorHandler.handle(erro));
  }


  // Apaga o evento
  confirmarExclusao(evento: any): void
  {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(evento);
      }
    });
  }

  excluir(evento: any): void
  {
    this.pgService.excluir(evento.codigo)
      .then(() => {
        this.messageService.add(
          {severity: 'success', detail: 'Evento excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: NgForm): void{
    if(this.editando){
      this.atualizarEvento(form);
    }else{
      this.adicionarEvento(form);
    }
  }

  get editando(): boolean{
    return Boolean(this.evento.codigo);
  }

  adicionarEvento(form: NgForm){
    this.eventoService.adicionar(this.evento)
      .then((eventoAdicionado : any) => {
        this.messageService.add(
          {severity: 'success', detail: 'Evento adicionado com sucesso!'});

        this.router.navigate(['/eventos', eventoAdicionado.codigo]);
      })
      .catch((erro : any) => this.errorHandler.handle(erro));
  }

  atualizarEvento(form: NgForm){
    this.eventoService.atualizar(this.evento)
      .then((evento : any) => {
        this.evento = evento;
        this.messageService.add(
          {severity: 'success', detail: 'Evento alterado com sucesso!'});
      })
      .catch((erro : any) => this.errorHandler.handle(erro));
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

  displayBasic: boolean = false;

  displayBasic2: boolean = false;

  displayCustom: boolean = false;

  activeIndex: number = 0;

  //add nova foto
  novaFoto(_form: NgForm)
  {
    //this.photoService.adicionarFoto(this.imagens).catch((erro: any) => this.errorHandler.handle(erro));
  }

  // Clique na foto
  imageClick(index: number)
  {
    this.activeIndex = index;
    this.displayCustom = true;
}
*/
