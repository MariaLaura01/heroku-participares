import { Evento } from './../../core/model';
import { PaginaInicialService } from './../pagina-inicial.service';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import {FilterService} from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.component.html',
  styleUrls: ['./componentes.component.css']
})
export class ComponentesComponent implements OnInit {

  eventos = [{nome: 'Festa da primavera', escola:{nome: 'Machadinho'}}];

  constructor(private homeService: PaginaInicialService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private filterService: FilterService,
    private messageService: MessageService) { }

  ngOnInit(): void
  {
    this.pesquisar();
    const value = 'PrimeNG';
    this.filterService.filters.equals(value, 'NG');                            //false
    this.filterService.filters.equals(value, 8);                               //false
    this.filterService.filters.equals(value, new Date());                      //false
    this.filterService.filters.contains(value, 'NG');                          //true
    this.filterService.filters.startsWith(value, 'NG');                        //false
    this.filterService.filters.endsWith(value, 'NG');                          //true
    this.filterService.filters.lt(10, 20);                                     //true
    this.filterService.filters.gt(50, 20);                                     //true
    this.filterService.filters.in(value, ['PrimeFaces', 'PrimeNG']);           //true
  }

  // Insere as informações na página
  pesquisar(): void
  {
    this.homeService.pesquisar()
      .then(resultado => {
        this.eventos = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  exportarEvento(evento: Evento): void {
    let eventoString: string = JSON.stringify(evento);
    localStorage.setItem('evento', eventoString);
  }
}
