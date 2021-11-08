(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{132:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return u}));var i=a(3),t=a(7),r=(a(0),a(156)),o=["components"],c={id:"franzininho-wifi",title:"Placa Franzininho WiFi",slug:"/franzininho-wifi/franzininho-wifi",description:"Detalhes da Franzininho WiFi"},l={unversionedId:"FranzininhoWifi/franzininho-wifi",id:"FranzininhoWifi/franzininho-wifi",isDocsHomePage:!1,title:"Placa Franzininho WiFi",description:"Detalhes da Franzininho WiFi",source:"@site/docs/FranzininhoWifi/franzininho-wifi.md",slug:"/franzininho-wifi/franzininho-wifi",permalink:"/en/docs/franzininho-wifi/franzininho-wifi",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/franzininho-wifi.md",version:"current",sidebar:"docs",previous:{title:"Franzininho DIY no PICSimLab",permalink:"/en/docs/franzininho-diy/picsimlab/primeiros-passos"},next:{title:"Primeiros Passos com ESP-IDF",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/primeiros-passos"}},s=[{value:"Caracter\xedsticas",id:"caracter\xedsticas",children:[]},{value:"Pinout",id:"pinout",children:[]},{value:"Licen\xe7a",id:"licen\xe7a",children:[]}],p={toc:s};function u(e){var n=e.components,c=Object(t.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},p,c,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A Franzininho WiFi \xe9 uma placa de desenvolvimento para avaliar os m\xf3dulos ESP32-S2 (Wroom e Wrover) e desenvolver a nova gera\xe7\xe3o de placas Franzininho. O projeto Franzininho foi criado para desenvolver habilidades em pessoas nas \xe1reas de eletr\xf4nica e programa\xe7\xe3o, por meio de atividades no formato DIY e em conjunto com a cultura maker, no Brasil."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Placa Franzininho WiFi Front",src:a(371).default})),Object(r.b)("p",null,"Como n\xe3o existem muitas placas no mercado brasileiro com ESP32-S2, desenvolvemos o Franzininho WiFi para servir como plataforma de desenvolvimento ESP32-S2 e nos ajudar a avaliar e validar aplica\xe7\xf5es com este SoC."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Placa Franzininho WiFi",src:a(372).default})),Object(r.b)("h2",{id:"caracter\xedsticas"},"Caracter\xedsticas"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ESP32-S2 module( Wrover ou Wroom): ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Xtensa\xaesingle-core32-bit LX7 microprocessor, up to 240 MHz"),Object(r.b)("li",{parentName:"ul"},"128 KB ROM"),Object(r.b)("li",{parentName:"ul"},"320 KB SRAM"),Object(r.b)("li",{parentName:"ul"},"16 KB SRAM in RTC"),Object(r.b)("li",{parentName:"ul"},"2 MB (8 Mbit) PSRAM ( Only with Wrover Module)"),Object(r.b)("li",{parentName:"ul"},"WiFi 802.11 b/g/n"))),Object(r.b)("li",{parentName:"ul"},"Interfaces: GPIO, SPI, LCD, UART, I2C, I2S, Camera interface, IR, pulse counter, LED PWM, TWAI(compatible with ISO 11898-1), USB 1.1OTG, ADC, DAC, touch sensor, temperature sensor."),Object(r.b)("li",{parentName:"ul"},"USB Type-A Male"),Object(r.b)("li",{parentName:"ul"},"RGB LED (WS2812) (GPIO 18)"),Object(r.b)("li",{parentName:"ul"},"40 pin broken out to 2x20 2.54mm header pins(36 GPIO) - Breadboard Friendly"),Object(r.b)("li",{parentName:"ul"},"Reset and DFU (BOOT0) buttons to get into the ROM bootloader (which is a USB serial port so you don\u2019t need a separate cable!)"),Object(r.b)("li",{parentName:"ul"},"Serial debug pins ( TX and RX, for checking the hardware serial debug console)\nJTAG pads for advanced debugging access."),Object(r.b)("li",{parentName:"ul"},"3.3 V Power On LED"),Object(r.b)("li",{parentName:"ul"},"3.3 V Regulator"),Object(r.b)("li",{parentName:"ul"},"Power: ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Micro USB port (default power supply)"),Object(r.b)("li",{parentName:"ul"},"5V and GND header pins"),Object(r.b)("li",{parentName:"ul"},"3V3 and GND header pins"))),Object(r.b)("li",{parentName:"ul"},"Dimensions: 72 mm x 30 mm"),Object(r.b)("li",{parentName:"ul"},"Works with ",Object(r.b)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/index.html"},"ESP-IDF")," or ",Object(r.b)("a",{parentName:"li",href:"https://circuitpython.org/"},"CircuitPython"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Placa Franzininho WiFi back",src:a(373).default})),Object(r.b)("h2",{id:"pinout"},"Pinout"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Pinout placa Franzininho WiFi",src:a(374).default})),Object(r.b)("h2",{id:"licen\xe7a"},"Licen\xe7a"),Object(r.b)("p",null,"O projeto \xe9 um hardware de c\xf3digo aberto e est\xe1 dispon\xedvel na licen\xe7a de hardware aberto do CERN."),Object(r.b)("p",null,"A placa Franzininho WiFi \xe9 certificada na OSHWA:\n",Object(r.b)("a",{parentName:"p",href:"https://certification.oshwa.org/br000006.html"},"UID BR000006")),Object(r.b)("p",null,Object(r.b)("img",{alt:"oshwa",src:a(375).default})))}u.isMDXComponent=!0},156:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return f}));var i=a(0),t=a.n(i);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=t.a.createContext({}),p=function(e){var n=t.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},u=function(e){var n=p(e.components);return t.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},d=t.a.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,f=u["".concat(o,".").concat(d)]||u[d]||b[d]||r;return a?t.a.createElement(f,c(c({ref:n},s),{},{components:a})):t.a.createElement(f,c({ref:n},s))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},371:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/placaFranzininhoWiFi-a2a75be880fd864e7e155166d4e669af.jpeg"},372:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/front-4c0319330ac58760d0a1d8d19f8d84ed.jpeg"},373:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/back-7e00c997c9b7384d1b1802e74d36763f.jpeg"},374:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/pinagem-franzininho-wifi-3ee791cdc4872c0837b81cd12994e047.png"},375:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/OSHW_mark_BR000006-d3520baa4e06ecf07d8ffc4e77efc865.png"}}]);