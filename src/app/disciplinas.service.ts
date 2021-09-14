import { Injectable } from '@angular/core';

interface Disciplinas {
  materia: string;
  dia: string;
  hora: string;
  p1: number;
  p2: number;
}

@Injectable()
export class DisciplinasService {
  constructor() {}

  list: Array<Disciplinas> = [];

  getList() {
    return this.list;
  }

  add(materia: string, dia: string, hora: string, p1: number, p2: number) {
    this.list.push({ materia, dia, hora, p1, p2 });
    this.myStorage();
  }

  notaP1: number;
  notaP2: number;

  editP1(index: number, nota: string) {
    this.notaP1 = parseFloat(nota);
    this.list[index].p1 = this.notaP1;
  }

  editP2(index: number, nota: string) {
    this.notaP2 = parseFloat(nota);
    this.list[index].p2 = this.notaP2;
  }

  remove(index: number) {
    this.list.splice(index, 1);
  }

  myStorage() {
    const text = JSON.stringify(this.list);
    localStorage.setItem('list', text);
  }
}
