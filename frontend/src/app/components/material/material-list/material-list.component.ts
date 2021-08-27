import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  page = 1;


  materials =[
    {
      id: 1, 
      title: "Gerenciamento de Recursos", 
      description: "Duas aulas sobre Gerenciamento de Recursos criadas exclusivamente para você aplicar no contexto remoto.",
      categories: ["sistemas operacionais"],
      contentLink: "",
      image: "https://play-lh.googleusercontent.com/2lW0k28gmKwv75J0ZqVSw-Bxi6JAuHAFxQkf0ppVfMnKg-BBAXmkQcblqp2M1yW00ju-"
    },
    {
      id: 2, 
      title: "Matemática desplugada", 
      description: "Conteúdos incríveis para você, que é professor do ensino básico, ensinar matemática para seus pequenos!",
      categories: ["matematica", "computacao desplugada"],
      contentLink: "",
      image: "https://s2.glbimg.com/NNbJWCWpPiTmrRTP6Vq_NWVXZw8=/e.glbimg.com/og/ed/f/original/2018/10/31/math-1500720_1920.jpg"
    },
    {
      id: 3, 
      title: "Computação para crianças", 
      description: "Conteúdos incríveis para ensinar conceitos de computação para crianças!",
      categories: ["computacao desplugada"],
      contentLink: "",
      image: "https://i1.wp.com/ventruenoob.com/wp-content/uploads/2018/12/Governo-do-Reino-Unido-vai-ensinar-computa%C3%A7%C3%A3o-para-todas-as-crian%C3%A7as.jpg?fit=960%2C640&ssl=1"
    },
    {
      id: 4, 
      title: "Ensinando Geografia com informática", 
      description: "Plano de duas aulas expositivas ensinando geografia para adolescentes.",
      categories: ["matematica", "computacao desplugada"],
      contentLink: "",
      image: "https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-conceito-contorno-geografia_1995-527.jpg?size=626&ext=jpg"
    },
    {
      id: 5, 
      title: "Laços de Repetição", 
      description: "Conteúdos para ensinar estruturas de repeticão para sua turma, independente da idade!",
      categories: ["logica de programacao"],
      contentLink: "",
      image: "https://media.istockphoto.com/vectors/icon-refresh-reload-rotation-loop-pictogram-vector-id1085009066?b=1&k=6&m=1085009066&s=170667a&w=0&h=ieSh5C-QcOaqz_pGT4BvorpRd_rBW4NYXIKLVEygJck="
    },

  ]



  constructor() { }

  ngOnInit(): void {
  }

}
