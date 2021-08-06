(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return s})),r.d(n,"default",(function(){return m}));var o=r(3),t=r(7),i=(r(0),r(136)),a={id:"timer0-int",title:"Timer 0 - Interrup\xe7\xe3o",slug:"/franzininho-diy/exemplos-avr-libc/timer0-int",description:"Vamos aprender usar o timer 0 como temporizador e usando sua interrup\xe7\xe3o",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},c={unversionedId:"FranzininhoDIY/exemplos-avr-libc/timer0-int",id:"FranzininhoDIY/exemplos-avr-libc/timer0-int",isDocsHomePage:!1,title:"Timer 0 - Interrup\xe7\xe3o",description:"Vamos aprender usar o timer 0 como temporizador e usando sua interrup\xe7\xe3o",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/timer0-int.md",slug:"/franzininho-diy/exemplos-avr-libc/timer0-int",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/timer0-int",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/timer0-int.md",version:"current",sidebar:"docs",previous:{title:"Timer 0",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/timer0"},next:{title:"Contador de pulsos externos",permalink:"/docs-franzininho-site/docs/franzininho-diy/exemplos-avr-libc/contadores"}},s=[{value:"Interrup\xe7\xe3o do Timer0",id:"interrup\xe7\xe3o-do-timer0",children:[]},{value:"Usando o Timer0 como temporizador com sua interrup\xe7\xe3o",id:"usando-o-timer0-como-temporizador-com-sua-interrup\xe7\xe3o",children:[{value:"Recursos necess\xe1rios",id:"recursos-necess\xe1rios",children:[]},{value:"C\xf3digo exemplo",id:"c\xf3digo-exemplo",children:[]},{value:"Simula\xe7\xe3o do exemplo",id:"simula\xe7\xe3o-do-exemplo",children:[]}]}],l={toc:s};function m(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Nesse exemplo vamos entender como usar a interrup\xe7\xe3o do Timer0 para verificar o seu overflow. Dessa forma n\xe3o precisaremos ficar monitorando o flag de overflow no loop principal da aplica\xe7\xe3o."),Object(i.b)("h2",{id:"interrup\xe7\xe3o-do-timer0"},"Interrup\xe7\xe3o do Timer0"),Object(i.b)("p",null,"No exemplo anterior configuramos o Timer0 para operar no modo  normal. Para monitora a sua contagem monitoramos o flag TOV0  dentro do loop. Como o Timer \xe9 um perif\xe9rico que funciona independente  da CPU podemos habilitar a sua contagem e verificar o overflow atrav\xe9s  da sua interrup\xe7\xe3o. "),Object(i.b)("p",null,"Para habilitar a interrup\xe7\xe3o do Timer0 devermos colocar 1 no bit ",Object(i.b)("strong",{parentName:"p"},"TOIE0")," no registrador ",Object(i.b)("strong",{parentName:"p"},"TIMSK"),":"),Object(i.b)("p",null,Object(i.b)("img",{alt:"TIMSK",src:r(260).default})),Object(i.b)("p",null,"Ap\xf3s isso, para que a interrup\xe7\xe3o realmente ocorra, devemos habilitar a chave global de interrup\xe7\xe3o atrav\xe9s da fun\xe7\xe3o sei();"),Object(i.b)("h2",{id:"usando-o-timer0-como-temporizador-com-sua-interrup\xe7\xe3o"},"Usando o Timer0 como temporizador com sua interrup\xe7\xe3o"),Object(i.b)("p",null,"Vamos  fazer a mesma aplica\xe7\xe3o do exemplo anterior, que \xe9 inverter o estado lo  LED em intervalos de 1 s. A diferen\xe7a aqui \xe9 que vamos monitorar os  overflows do timer atrav\xe9s da rotina de interrup\xe7\xe3o. "),Object(i.b)("p",null,"A configura\xe7\xe3o do timer segue a mesma, j\xe1 que queremos gerar um delay de 1 segundo. "),Object(i.b)("p",null,"Assim, precisaremos contar a quantidade de interrup\xe7\xf5es e quando atingir 63, inverteremos o estado do LED."),Object(i.b)("h3",{id:"recursos-necess\xe1rios"},"Recursos necess\xe1rios"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Placa Franzininho DIY(com Micronucleus);"),Object(i.b)("li",{parentName:"ul"},"LED;"),Object(i.b)("li",{parentName:"ul"},"Resistor de 470 Ohm;"),Object(i.b)("li",{parentName:"ul"},"Jumpers;"),Object(i.b)("li",{parentName:"ul"},"Computador com as ferramentas de software instaladas.")),Object(i.b)("h3",{id:"c\xf3digo-exemplo"},"C\xf3digo exemplo"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-c"}),'/**\n * \n * @file main.c\n * @author F\xe1bio Souza\n * @brief Exibe como usar a interrup\xe7\xe3o do timer 0 para temporiza\xe7\xe3o\n * @version 0.1\n * @date 2021-02-13\n * \n * @copyright Franzininho \n * This example code is in the Public Domain (or CC0 licensed, at your option.)\n * Unless required by applicable law or agreed to in writing, this\n * software is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR\n * CONDITIONS OF ANY KIND, either express or implied.\n * \n */\n\n#include <avr/io.h>\n#include <util/delay.h> \n#include <avr/interrupt.h>\n\n#define F_CPU 16500000L\n\n    \n#define setBit(valor,bit) (valor |= (1<<bit))\n#define clearBit(valor,bit) (valor &= ~(1<<bit))\n#define toogleBit(valor,bit) (valor ^= (1<<bit))\n#define testBit(valor,bit)    (valor & (1<<bit))\n\nunsigned char tempo = 0;  //contador auxiliar\n\n\nISR (TIMER0_OVF_vect) //vetor de interrup\xe7\xe3o para o timer 0\n{\n  tempo++;                     //incrementa contador auxiliar\n  if(tempo >=63)               //se passaram-se 63 x 15,89 ms = 1 s\n  {\n    toogleBit(PORTB,PB1);      //inverte LED\n    tempo = 0;                 //reinicia contador\n  }\n}\n\n/**\n * @brief Fun\xe7\xe3o main\n * \n * @return int \n */\nint main(void) \n{\n  \n  setBit(DDRB,PB1);     // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n  //configura\xe7\xe3o do timer0 para overflow a aproximadamente 15,89 ms\n  //t = (1/16.5Mhz) x 1024 x 256 = 15,89 ms\n  TCCR0A=0x00;                      //Modo Normal\n  TCCR0B=0x00;\n  TCCR0B |= (1<<CS00)|(1<<CS02);   //prescaler de 1024\n  TCNT0=0;                         //inicia timer com 0\n  setBit(TIMSK,TOIE0);             //habilita interrup\xe7\xe3o do timer0 \n  sei();                           //habilita interrup\xe7\xe3o global\n  \n  /**\n   * @brief loop infinito\n   * \n   */\n  while (1)\n  {\n      //n\xe3o faz nada no loop \n  }                                                \n  return (0);                           \n}\n')),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Informa\xe7\xe3o")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note que no loop principal n\xe3o fizemos nada. Todo o tratamento ficou na interrup\xe7\xe3o do Timer0."))),Object(i.b)("h3",{id:"simula\xe7\xe3o-do-exemplo"},"Simula\xe7\xe3o do exemplo"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Wokwi: "))),Object(i.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/306143631949955648?view=diagram"}))}m.isMDXComponent=!0},136:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var o=r(0),t=r.n(o);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=t.a.createContext({}),m=function(e){var n=t.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=m(e.components);return t.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},u=t.a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(r),u=o,b=p["".concat(a,".").concat(u)]||p[u]||d[u]||i;return r?t.a.createElement(b,c(c({ref:n},l),{},{components:r})):t.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},260:function(e,n,r){"use strict";r.r(n),n.default=r.p+"assets/images/TIMSK-a059550570192a069297e5ea900b71ef.png"}}]);