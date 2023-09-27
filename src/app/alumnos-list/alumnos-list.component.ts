import { Component } from '@angular/core';
import { Alumno } from 'src/models/alumno.interface';
import { Estado } from 'src/models/estado.enum';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.scss']
})
export class AlumnosListComponent {

  titulo="Listado Alumnos";

  estudiantes: Array<Alumno> =[
    {id: 1, nombre:"Fabian", apellido:"Guevara", edad:21, correo:"fabiguevara@gmail.com", matriculado:Estado.Matriculado, activo:true},
    {id: 2, nombre:"Miguel", apellido:"Diaz", edad:28, correo:"juanmi_96@gmail.com", matriculado:Estado.Matriculado, activo:true},
    {id: 3, nombre:"Carlos", apellido:"Peralta", edad:38, correo:"carpe25@gmail.com", matriculado:Estado.NoMatriculado, activo:false},
    {id: 4, nombre:"Edgar", apellido:"Forero", edad:19, correo:"fore@gmail.com", matriculado:Estado.NoMatriculado, activo:false},
    {id: 5, nombre:"Gustavo", apellido:"Petro", edad:63, correo:"gustavop.45@gmail.com", matriculado:Estado.NoMatriculado, activo:false},
    {id: 6, nombre:"Lewis", apellido:"Toledo", edad:40, correo:"opimuzpo@hos.gb", matriculado:Estado.Matriculado, activo:true},
    {id: 7, nombre:"Adam", apellido:"Crawford", edad:25, correo:"fidumfe@aro.gov", matriculado:Estado.NoMatriculado, activo:false},
    {id: 8, nombre:"Olivia", apellido:"Holloway", edad:29, correo:"peewpec@eva.zw", matriculado:Estado.Matriculado, activo:true},
    {id: 9, nombre:"Ethel", apellido:"Watson", edad:44, correo:"sihegud@wul.nl", matriculado:Estado.NoMatriculado, activo:false},
    {id: 10, nombre:"Kyle", apellido:"Hunt", edad:24, correo:"ohowze@ewoed.gw", matriculado:Estado.Matriculado, activo:true},
    {id: 11, nombre:"Myrtle", apellido:"Snyder", edad:26, correo:"adjoto@ji.py", matriculado:Estado.NoMatriculado, activo:false},
    {id: 12, nombre:"Ernest", apellido:"McKenzie", edad:41, correo:"pe@pojas.dk", matriculado:Estado.Matriculado, activo:true},
    {id: 13, nombre:"Ronnie", apellido:"Mullins", edad:45, correo:"vo@row.gs", matriculado:Estado.NoMatriculado, activo:false},
    {id: 14, nombre:"Tommy", apellido:"Aguilar", edad:34, correo:"izipo@vibbukmo.hk", matriculado:Estado.Matriculado, activo:true},
  ];

}

/* izuwa@uzu.be
ekelo@zezhe.om
ofe@nop.pm
2ziir@tij.tn
opimuzpo@hos.gb
fidumfe@aro.gov
peewpec@eva.zw
sihegud@wul.nl
howze@ewoed.gw
adjoto@ji.py
pe@pojas.dk
vo@row.gs
izipo@vibbukmo.hk
zeni@dihag.dk
uteeh@elaohi.ro
rok@omgiw.pf
nefomisa@nez.be
pejvaveg@jujoivu.cd
we@lu.ms
afrif@ropud.mm
sigoltik@je.bf
ecbici@ajrah.ps */
/* 28
21
38
19
40
44
25
29
24
19
34
24
26
41
29
45 */
/* Love
Ramsey
Francis 
Hunt
Ramsey
Snyder
Austin
Patterson
Mullins
Ford
Houston
Watson
Pierce
Aguilar*/
/* Adam
Ernest
Olivia
Lewis
Ethel
Maria
Evelyn
Myrtle
Edna
Tom
Ronnie
Kyle
Sarah
Troy */
