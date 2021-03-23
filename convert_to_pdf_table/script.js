// jsPDF docs are found here:
// http://raw.githack.com/MrRio/jsPDF/master/docs/
new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      heading: "Formulario OACI NOTAM",
      moreText: [
        "Aqui puede ir NOTAM CHARLY",
        "Aqui puede ir NOTAM ALFA",
      ],
      items: [
        { title: "Item 1", body: "I am item 1 body text", cuerpo: "hola mundo" },
        { title: "Item 2", body: "I am item 1 body text", cuerpo: "hola mundo" },
        { title: "Item 3", body: "I am item 1 body text", cuerpo: "hola mundo" },
        { title: "Item 4", body: "I am item 1 body text", cuerpo: "hola mundo" },
      ],
      datos_formulario:
      {
        indicador_prioridad: "GG",
        direccion: "TODAS LAS DIRECCIONES AMHS DESTINO",
        fecha_hora_deposito: "2103251200",
        indicador_remitente: "SLLPYNYX",
        //parte 2 del formulario notam
        serie_numero_charly: "C0092/21",
        serie_numero_alfa: "A0092/21",
        serie_numero_charly_repla: "C0054/21",
        serie_numero_alfa_repla: "A0054/21",
        serie_numero_charly_cancel: "C0043/21",
        serie_numero_alfa_cancel: "A0043/21",
        //parte 3 del formulario notam
        fir: 'SLLF',
        codigo_notam: 'QWER',
        transito: '12',
        objetivo: 'OBJ',
        alcance: 'AL',
        limite_inferior: 'INF',
        limite_superior: 'SUP',
        coordenadas: '12321S12320W12',
        lugar: 'SLVR',
        //parte 4 del formulario notam: periodo de validez
        desde: '2103212243',
        hasta: '2103212243',
        horario: 'BTWN 1500 - 1800',
        texto_notam: ' ESTE ES EL TEXTO NOTAM',
        limite_inferior_casilla: 'LIMITE INFERIOR CASILLA',
        limite_superior_casilla: 'LIMITE SUPERIOR CASILLA',
        firma: 'tecnico de turno',
        
        notam_charly:"q",
        notam_alfa:"q",
      },

    };
  },
  methods: {

    generatePDF() {
      const columns = [
        { title: "Title", dataKey: "title" },
        { title: "Body", dataKey: "body" },
        { title: "Cuerpo", dataKey: "cuerpo" }
      ];
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      });
      // text is placed using x, y coordinates
      doc.setFontSize(16).text(this.heading, 0.5, 1.0);
      // create a line under heading 
      doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);

      // Using autoTable plugin
      const color_celda = [230, 230, 255];
      doc.autoTable(
        {
          bodyStyles: {
            lineWidth: 0.01,
            lineColor: [0, 0, 0],
            fontSize: 8,
            cellPadding: 0
          },
          theme: "plain",
          headStyles: {
            fillColor: color_celda,
            lineWidth: 0.01,
            lineColor: [0, 0, 0],
            fontSize: 8,
          },
          columnWidth: 'wrap',
          columnStyles: {
            nombre_campo: { halign: 'center', valign: 'middle', minCellWidth: 1 },
            valor_campo: { minCellWidth: 5 }
          },
          columns: [
            { dataKey: 'nombre_campo', header: { content: " ", colSpan: 3, styles: { halign: 'center', valign: 'middle' } } },
            { dataKey: 'valor_campo', header: 'Valor_campo', },
            { dataKey: 'simbolo', header: 'Simbolo', },
          ],
          body: [
            { nombre_campo: { content: 'Indicador de prioridad', styles: { fillColor: color_celda } }, valor_campo: this.datos_formulario.indicador_prioridad, simbolo: '--->' },
            { nombre_campo: { content: 'Dirección', styles: { fillColor: color_celda } }, valor_campo: { content: this.datos_formulario.direccion, colSpan: 2 }, simbolo: '--->' },
            [{ content: " ", colSpan: 3, styles: { halign: 'center', valign: 'middle' } }],
            [{ content: " ", colSpan: 3, styles: { halign: 'center', valign: 'middle' } }],
            { nombre_campo: { content: ' ', colSpan: 2 }, simbolo: '<<<=' },
            { nombre_campo: { content: 'Fecha y hora de deposito', styles: { fillColor: color_celda } }, valor_campo: this.datos_formulario.fecha_hora_deposito, simbolo: '--->' },
            { nombre_campo: { content: 'Indicador del remitente', styles: { fillColor: color_celda } }, valor_campo: this.datos_formulario.indicador_remitente, simbolo: '<<= (' },
          ],

          margin: { left: 0.5, top: 1.25, bottom: 0, }
        })

      doc.autoTable(
        {
          startY: doc.lastAutoTable.finalY + 0.01,
          bodyStyles: {
            lineWidth: 0.005,
            lineColor: [0, 0, 0],
            fontSize: 8,
            cellPadding: 0
          },
          theme: "plain",
          headStyles: {
            fillColor: color_celda,
            lineWidth: 0.01,
            lineColor: [0, 0, 0],
            fontSize: 8,
          },
          columnStyles: {
            0: {
              columnWidth: 1.3, valign: 'middle', halign: 'center'
            },
            1: {
              columnWidth: 0.7
            },
            2: {
              columnWidth: 0.6
            },
            3: {
              columnWidth: 1.5
            },
          },

          // European countries centered
          columns: [
            { dataKey: 'principal', header: { content: "Serie, número e identificador del mensaje", colSpan: 4, styles: { halign: 'center', valign: 'middle' } } },
            { dataKey: 'uno', header: 'Serie, número e identificador del mensaje', },
            { dataKey: 'dos', header: 'Europe' },
            { dataKey: 'tres', header: 'Asia' },
            //{ header: 'America', dataKey: 'america' },
          ],

          body: [
            {
              principal:
              {
                content: 'NOTAM que contiene nueva información',
                rowSpan: 2,
                styles: { fillColor: color_celda }
              },

              //llenando el NOTAM NUEVO o el NUEVO CORRELATIVO
              uno: this.datos_formulario.serie_numero_charly + '\n' + this.datos_formulario.serie_numero_alfa,
              dos: {
                content: 'NOTAMN',
                rowSpan: 2,
                styles: {
                  valign: 'middle',
                  halign: 'center'
                }
              },
              tres: {
                content: '',
                rowSpan: 2,
              }
            },

            {
              principal: {
                content: ' '
              },
              uno: "(Serie y número/año) "
            },
            {
              principal: {
                content: 'NOTAM que reemplaza un NOTAM anterior',
                rowSpan: 2,
                styles: {
                  fillColor: color_celda
                }
              },

              //llenando el NOTAM NUEVO o el NUEVO CORRELATIVO
              uno: this.datos_formulario.serie_numero_charly + '\n' + this.datos_formulario.serie_numero_alfa,
              dos: {
                content: 'NOTAMR',
                rowSpan: 2,
                styles: {
                  valign: 'middle',
                  halign: 'center'
                }
              },
              tres: this.datos_formulario.serie_numero_charly_repla + '\n' + this.datos_formulario.serie_numero_alfa_repla
            },

            { principal: { content: ' ' }, uno: "(Serie y número/año) ", tres: "(Serie y número/año del NOTAM remplazado) " },

            {
              principal: {
                content: 'NOTAM que cancela un NOTAM anterior',
                rowSpan: 2,
                styles: {
                  fillColor: color_celda
                }
              },

              //llenando el NOTAM NUEVO o el NUEVO CORRELATIVO
              uno: this.datos_formulario.serie_numero_charly + '\n' + this.datos_formulario.serie_numero_alfa,
              dos: {
                content: 'NOTAMC',
                rowSpan: 2,
                styles: {
                  valign: 'middle',
                  halign: 'center'
                }
              },
              tres: this.datos_formulario.serie_numero_charly_cancel + '\n' + this.datos_formulario.serie_numero_alfa_cancel
            },

            { principal: { content: ' ' }, uno: "(Serie y número/año) ", tres: "(Serie y número/año del NOTAM cancelado) " },
          ],
          margin: { left: 0.5, top: 1.25, bottom: 0, }

        })

      doc.autoTable(
        {
          startY: doc.lastAutoTable.finalY + 0.01,
          bodyStyles: {
            lineWidth: 0.005,
            lineColor: [0, 0, 0],
            fontSize: 8,
            cellPadding: 0
          },
          theme: "plain",
          headStyles: {
            fillColor: color_celda,
            lineWidth: 0.01,
            lineColor: [0, 0, 0],
            fontSize: 8,
          },
          /*
          columnStyles: {
            0: {
              columnWidth: 1.3, valign: 'middle',halign: 'center'
            },
            1: {
              columnWidth: 0.7
            },
            2: {
              columnWidth: 0.6
            },
            3: {
              columnWidth: 1.5
            },
          },
           */
          // European countries centered
          columns: [
            //{ dataKey: 'principal', header:  },
            { dataKey: 'cell1', header: { content: "Serie, número e identificador del mensaje", colSpan: 46, styles: { halign: 'center', valign: 'middle' } }, },
            { dataKey: 'cell2', header: '', },
            { dataKey: 'cell3', header: '', },
            { dataKey: 'cell4', header: '', },
            { dataKey: 'cell5', header: '', },
            { dataKey: 'cell6', header: '', },
            { dataKey: 'cell7', header: '', },
            { dataKey: 'cell8', header: '', },
            { dataKey: 'cell9', header: '', },
            { dataKey: 'cell10', header: '', },
            { dataKey: 'cell11', header: '', },
            { dataKey: 'cell12', header: '', },
            { dataKey: 'cell13', header: '', },
            { dataKey: 'cell14', header: '', },
            { dataKey: 'cell15', header: '', },
            { dataKey: 'cell16', header: '', },
            { dataKey: 'cell17', header: '', },
            { dataKey: 'cell18', header: '', },
            { dataKey: 'cell19', header: '', },
            { dataKey: 'cell20', header: '', },
            { dataKey: 'cell21', header: '', },
            { dataKey: 'cell22', header: '', },
            { dataKey: 'cell23', header: '', },
            { dataKey: 'cell24', header: '', },
            { dataKey: 'cell25', header: '', },
            { dataKey: 'cell26', header: '', },
            { dataKey: 'cell27', header: '', },
            { dataKey: 'cell28', header: '', },
            { dataKey: 'cell29', header: '', },
            { dataKey: 'cell30', header: '', },
            { dataKey: 'cell31', header: '', },
            { dataKey: 'cell32', header: '', },
            { dataKey: 'cell33', header: '', },
            { dataKey: 'cell34', header: '', },
            { dataKey: 'cell35', header: '', },
            { dataKey: 'cell36', header: '', },
            { dataKey: 'cell37', header: '', },
            { dataKey: 'cell38', header: '', },
            { dataKey: 'cell39', header: '', },
            { dataKey: 'cell40', header: '', },
            { dataKey: 'cell41', header: '', },
            { dataKey: 'cell42', header: '', },
            { dataKey: 'cell43', header: '', },
            { dataKey: 'cell44', header: '', },
            { dataKey: 'cell45', header: '', },
            //{ header: 'America', dataKey: 'america' },
          ],
          body: [
            //FILA 1: TITULOS DE LAS CASILLAS
            {
              cell1: { content: " ", styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //FIR
              cell2: { content: "FIR", colSpan: 5, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //codigo NOTAM
              cell7: { content: "Código NOTAM", colSpan: 6, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //TRANSITO
              cell13: { content: "Tránsito", colSpan: 3, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //OBJETIVO
              cell16: { content: "Objetivo", colSpan: 4, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //ALCANCE
              cell20: { content: "Alcance", colSpan: 3, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //LIMITE INFERIOR
              cell23: { content: "Límite inferior", colSpan: 4, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //LIMITE SUPERIOR
              cell27: { content: "Limite superior", colSpan: 4, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },
              //COORDENADAS RADIO
              cell31: { content: "Coordenadas, Radio", colSpan: 15, styles: { fillColor: color_celda, halign: 'center', valign: 'middle' } },

              cell45: "<<=/",
            },
            //FILA 2: CASILLAS PARA LLENAR EL FORMULARIO
            {
              cell1: { content: "Q)", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //FIR
              cell2: { content: this.datos_formulario.fir.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell3: { content: this.datos_formulario.fir.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell4: { content: this.datos_formulario.fir.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell5: { content: this.datos_formulario.fir.substring(3, 4), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell6: { content: '/', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //codigo NOTAM
              cell7: { content: "Q", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell8: { content: this.datos_formulario.codigo_notam.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell9: { content: this.datos_formulario.codigo_notam.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell10: { content: this.datos_formulario.codigo_notam.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell11: { content: this.datos_formulario.codigo_notam.substring(3, 4), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell12: { content: "/", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //TRANSITO
              cell13: { content: this.datos_formulario.transito.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell14: { content: this.datos_formulario.transito.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell15: { content: "/", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //OBJETIVO
              cell16: { content: this.datos_formulario.objetivo.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell17: { content: this.datos_formulario.objetivo.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell18: { content: this.datos_formulario.objetivo.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell19: { content: "/", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //ALCANCE
              cell20: { content: this.datos_formulario.alcance.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell21: { content: this.datos_formulario.alcance.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell22: { content: "/", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //LIMITE INFERIOR
              cell23: { content: this.datos_formulario.limite_inferior.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell24: { content: this.datos_formulario.limite_inferior.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell25: { content: this.datos_formulario.limite_inferior.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell26: { content: "/", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //LIMITE SUPERIOR
              cell27: { content: this.datos_formulario.limite_superior.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell28: { content: this.datos_formulario.limite_superior.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell29: { content: this.datos_formulario.limite_superior.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell30: { content: "/", rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //COORDENADAS RADIO
              cell31: { content: this.datos_formulario.coordenadas.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell32: { content: this.datos_formulario.coordenadas.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell33: { content: this.datos_formulario.coordenadas.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell34: { content: this.datos_formulario.coordenadas.substring(3, 4), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell35: { content: this.datos_formulario.coordenadas.substring(4, 5), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell36: { content: this.datos_formulario.coordenadas.substring(5, 6), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell37: { content: this.datos_formulario.coordenadas.substring(6, 7), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell38: { content: this.datos_formulario.coordenadas.substring(7, 8), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell39: { content: this.datos_formulario.coordenadas.substring(8, 9), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell40: { content: this.datos_formulario.coordenadas.substring(9, 10), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell41: { content: this.datos_formulario.coordenadas.substring(10, 11), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell42: { content: this.datos_formulario.coordenadas.substring(11, 12), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell43: { content: this.datos_formulario.coordenadas.substring(12, 13), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell44: { content: this.datos_formulario.coordenadas.substring(13, 14), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },

              cell45: "<<=/",
            },
            //FILA 3: SOLO PARA COMBINAR COLUMNAS
            {
              cell1: '',
              cell2: '',
              cell3: '',
              cell4: '',
              cell5: '',
              cell6: '',
              cell7: '',
              cell8: '',
              cell9: '',
              cell10: '',
              cell11: '',
              cell12: '',
              cell13: '',
              cell14: '',
              cell15: '',
              cell16: '',
              cell17: '',
              cell18: '',
              cell19: '',
              cell20: '',
              cell21: '',
              cell22: '',
              cell23: '',
              cell24: '',
              cell25: '',
              cell26: '',
              cell27: '',
              cell28: '',
              cell29: '',
              cell30: '',
              cell31: '',
              cell32: '',
              cell33: '',
              cell34: '',
              cell35: '',
              cell36: '',
              cell37: '',
              cell38: '',
              cell39: '',
              cell40: '',
              cell41: '',
              cell42: '',
              cell43: '',
              cell44: ' ',
              cell45: ' ',
            },
            //FILA 4: IDENTIFICACION DEL LUGAR
            {
              cell1: { content: "dentificación del indicador de lugar OACI correspondiente a la instalación, espacio aéreo o condición notificados", colSpan: 30, styles: { fillColor: color_celda, halign: 'center', valign: 'middle', cellPadding: 0.03 } },
              cell31: { content: "A)   " + this.datos_formulario.lugar, colSpan: 14, styles: { halign: 'left', valign: 'middle', cellPadding: 0.03 } },
              cell45: { content: '-->', styles: { halign: 'left', valign: 'middle', cellPadding: 0.03 } }
            }
          ],
          margin: { left: 0.5, top: 1.25, bottom: 0, }

        })

      doc.autoTable(
        {
          startY: doc.lastAutoTable.finalY + 0.01,
          bodyStyles: {
            lineWidth: 0.005,
            lineColor: [0, 0, 0],
            fontSize: 8,
            cellPadding: 0
          },
          theme: "plain",
          headStyles: {
            fillColor: color_celda,
            lineWidth: 0.01,
            lineColor: [0, 0, 0],
            fontSize: 8,
          },
          columnStyles: {
            0: {
              columnWidth: 1, valign: 'middle', halign: 'center'
            },

          },
          columns: [
            { dataKey: 'cell1', header: { content: "Período de validez", colSpan: 15, styles: { halign: 'center', valign: 'middle' } }, },
            { dataKey: 'cell2', header: '', },
            { dataKey: 'cell3', header: '', },
            { dataKey: 'cell4', header: '', },
            { dataKey: 'cell5', header: '', },
            { dataKey: 'cell6', header: '', },
            { dataKey: 'cell7', header: '', },
            { dataKey: 'cell8', header: '', },
            { dataKey: 'cell9', header: '', },
            { dataKey: 'cell10', header: '', },
            { dataKey: 'cell11', header: '', },
            { dataKey: 'cell12', header: '', },
            { dataKey: 'cell13', header: '', },
            { dataKey: 'cell14', header: '', },
            { dataKey: 'cell15', header: '', },
            //{ header: 'America', dataKey: 'america' },
          ],
          body: [
            //FILA 1: CASILLAS PARA LLENAR EL FORMULARIO DESDE
            {
              cell1: { content: "Desde (grupo fecha-hora)", rowSpan: 2, styles: { fillColor: color_celda, halign: 'left', valign: 'middle', cellPadding: 0.1 } },
              cell2: { content: 'B)', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //PERIODO VALIDEZ CASILLA B)
              cell3: { content: this.datos_formulario.desde.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell4: { content: this.datos_formulario.desde.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell5: { content: this.datos_formulario.desde.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell6: { content: this.datos_formulario.desde.substring(3, 4), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell7: { content: this.datos_formulario.desde.substring(4, 5), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell8: { content: this.datos_formulario.desde.substring(5, 6), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell9: { content: this.datos_formulario.desde.substring(6, 7), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell10: { content: this.datos_formulario.desde.substring(7, 8), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell11: { content: this.datos_formulario.desde.substring(8, 9), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell12: { content: this.datos_formulario.desde.substring(9, 10), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //FLECHA
              cell13: { content: "-->", rowSpan: 2, colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell15: "s"
            },
            //SOLO PARA COMBINAR COLUMNAS
            {
              cell1: '',
              cell2: '',
              cell3: '',
              cell4: '',
              cell5: '',
              cell6: '',
              cell7: '',
              cell8: '',
              cell9: '',
              cell10: '',
              cell11: '',
              cell12: '',
              cell13: '',
              cell14: '',
              cell15: '',

            },

            //FILA 2: CASILLAS PARA LLENAR EL FORMULARIO HASTA
            {
              cell1: { content: "Hasta (PERM o grupo fecha-hora)", rowSpan: 2, styles: { fillColor: color_celda, halign: 'left', valign: 'middle', cellPadding: 0.1 } },
              cell2: { content: 'C)', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //PERIODO VALIDEZ CASILLA B)
              cell3: { content: this.datos_formulario.hasta.substring(0, 1), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell4: { content: this.datos_formulario.hasta.substring(1, 2), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell5: { content: this.datos_formulario.hasta.substring(2, 3), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell6: { content: this.datos_formulario.hasta.substring(3, 4), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell7: { content: this.datos_formulario.hasta.substring(4, 5), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell8: { content: this.datos_formulario.hasta.substring(5, 6), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell9: { content: this.datos_formulario.hasta.substring(6, 7), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell10: { content: this.datos_formulario.hasta.substring(7, 8), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell11: { content: this.datos_formulario.hasta.substring(8, 9), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell12: { content: this.datos_formulario.hasta.substring(9, 10), rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //FLECHA
              cell13: { content: "EST \n PERM", rowSpan: 2, colSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              cell14: "SA",
              cell15: "s"
            },
            // SOLO PARA COMBINAR COLUMNAS
            {
              cell1: '',
              cell2: '',
              cell3: '',
              cell4: '',
              cell5: '',
              cell6: '',
              cell7: '',
              cell8: '',
              cell9: '',
              cell10: '',
              cell11: '',
              cell12: '',
              cell13: '',
              cell14: '',
              cell15: '',

            },
            //FILA 3: horario si corresponde
            {
              cell1: { content: "Horario (si corresponde)", rowSpan: 4, styles: { fillColor: color_celda, halign: 'left', valign: 'middle', cellPadding: 0.1 } },
              cell2: { content: 'D)', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //PERIODO VALIDEZ CASILLA D)
              cell3: { content: this.datos_formulario.horario, rowSpan: 2, colSpan: 12, styles: { halign: 'left', valign: 'middle', cellPadding: 0.05, } },
              cell15: { content: " ", },
            },
            // SOLO PARA COMBINAR COLUMNAS
            {
              cell1: '',
              cell2: '',
              cell3: '',
              cell4: '',
              cell5: '',
              cell6: '',
              cell7: '',
              cell8: '',
              cell9: '',
              cell10: '',
              cell11: '',
              cell12: '',
              cell13: '',
              cell14: '',
              cell15: '',
            },
            //FILA 4: horario si corresponde, parte 2
            {
              cell1: { content: "" },
              cell2: { content: '', rowSpan: 2, styles: { halign: 'center', valign: 'middle' } },
              //PERIODO VALIDEZ CASILLA B)
              cell3: { content: this.datos_formulario.hasta.substring(0, 1), colSpan: 12, rowSpan: 2, styles: { halign: 'left', valign: 'middle', cellPadding: 0.05 } },
              cell15: ""
            },
            // SOLO PARA COMBINAR COLUMNAS
            {
              cell1: '',
              cell2: '',
              cell3: '',
              cell4: '',
              cell5: '',
              cell6: '',
              cell7: '',
              cell8: '',
              cell9: '',
              cell10: '',
              cell11: '',
              cell12: '',
              cell13: '',
              cell14: '',
              cell15: '',
            },
          ],
          margin: { left: 0.5, top: 1.25, bottom: 0, }

        })

      doc.autoTable(
        {
          startY: doc.lastAutoTable.finalY + 0.01,
          bodyStyles: {
            lineWidth: 0.005,
            lineColor: [0, 0, 0],
            fontSize: 8,
            cellPadding: 0
          },
          theme: "plain",
          headStyles: {
            fillColor: color_celda,
            lineWidth: 0.01,
            lineColor: [0, 0, 0],
            fontSize: 8,
          },
          columnStyles: {
            0: {
              columnWidth: 0.45, valign: 'middle', halign: 'center'
            },
          },
          columns: [
            //{ dataKey: 'principal', header:  },
            { dataKey: 'cell1', header: { content: "Texto del NOTAM; Entradas en lenguaje claro (con abreviaturas OACI)", colSpan: 3, styles: { halign: 'center', valign: 'middle' } }, },
            { dataKey: 'cell2', header: '', },
            { dataKey: 'cell3', header: '', },
          ],
          body: [
            //FILA 1: CUERPO DEL MENSAJE E)
            {
              cell1: { content: "E) " + this.datos_formulario.texto_notam + "\n \n", rowSpan: 1, colSpan: 3, styles: { halign: 'left', valign: 'middle', cellPadding: 0.1 } },
            },
            //FILA 2: limite inferior
            {
              cell1: { content: "Limite inferior", styles: { fillColor: color_celda, halign: 'left', valign: 'middle', cellPadding: 0.02 } },
              cell2: { content: 'F) ' + this.datos_formulario.limite_inferior_casilla, styles: { halign: 'left', valign: 'middle', cellPadding: 0.02 } },
              cell3: { content: '-->', styles: { halign: 'center', valign: 'middle' } },
            },
            //FILA 3: limite superior
            {
              cell1: { content: "Limite superior", styles: { fillColor: color_celda, halign: 'left', valign: 'middle', cellPadding: 0.02 } },
              cell2: { content: 'G) ' + this.datos_formulario.limite_superior_casilla, styles: { halign: 'left', valign: 'middle', cellPadding: 0.02 } },
              cell3: { content: ")<<=", styles: { halign: 'center', valign: 'middle' } },
            },
            //FILA 4: firma
            {
              cell1: { content: "Firma " + this.datos_formulario.firma, colSpan: 3, styles: { fillColor: color_celda, halign: 'left', valign: 'middle', cellPadding: 0.02 } },
            },
          ],
          margin: { left: 0.5, top: 1.25, bottom: 0, }
        })

      doc.autoTable(
        {
          startY: doc.lastAutoTable.finalY + 0.1,
          bodyStyles: {
            lineWidth: 0.005,
            lineColor: [0, 0, 0],
            fontSize: 8,
            cellPadding: 0
          },
          theme: "plain",
          headStyles: {
            fillColor: color_celda,
            lineWidth: 0.01,
            lineColor: [0, 0, 0],
            fontSize: 8,
          },
          columnStyles: {
            0: {
              columnWidth: 0.45, valign: 'middle', halign: 'center'
            },
          },
          columns: [
            //{ dataKey: 'principal', header:  },
            { dataKey: 'cell1', header: { content: "Notam serie C", styles: { halign: 'center', valign: 'middle' } }, },
            { dataKey: 'cell2', header: { content: "Notam serie A", styles: { halign: 'center', valign: 'middle' } }, },
          ],
          body: [
            //FILA 1: CUERPO DEL MENSAJE E)
            {
              cell1: { content: this.datos_formulario.notam_charly+ "\n \n", styles: { halign: 'left', valign: 'middle', cellPadding: 0.1 } },
              cell2: { content: this.datos_formulario.notam_alfa + "\n \n", styles: { halign: 'left', valign: 'middle', cellPadding: 0.1 } },
            },
          ],
          margin: { left: 0.5, top: 1.25, bottom: 0, }
        })

      // Using array of sentences
      //doc.setFont("helvetica").setFontSize(12).text(this.moreText, 0.5, 3.5, { align: "left", maxWidth: "7.5" });

      // Creating footer and saving file
      doc
        .setFont("times")
        .setFontSize(11)
        .setFontStyle("italic")
        .setTextColor(0, 0, 255)
        .text(
          "@upsilon from @ifisnuklear",
          0.5,
          doc.internal.pageSize.height - 0.5
        )
        .save(`${this.heading}.pdf`);
    }
  }
});
