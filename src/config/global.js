export default {
  global: {
    componenteFormativo: 'Ajustes y cierre del periodo',
    descripcionCurso:
      'En este componente se desarrollan los ajustes contables, para generar los estados financieros de propósito general de acuerdo con la normativa legal vigente. Cabe resaltar, que la información contable y financiera, debe ser coherente con los hechos económicos realizados por la empresa en cumplimiento de su objeto social; por ende, debe expresar la realidad económica atendiendo a las Normas Internacionales de Información Financiera (NIIF) Al finalizar el periodo contable se realiza el cierre del ejercicio, teniendo en cuenta los ajustes contables, cuyo objetivo es corregir aquellas partidas que no quedaron contabilizadas correctamente o en su defecto se deben saldar, con el fin de mostrar la situación económica del ente económico.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ajustes de cierre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Deterioro',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Depreciaciones',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Amortización',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diferencia en cambio',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Arqueo de caja',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Conciliación bancaria',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Balance de prueba',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Balance ajustado',
            hash: 't_1_8',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2a. ed.) Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (CTCP) (2020, 27 de noviembre). Norma Internacional de Contabilidad 7: Estados de flujos de efectivo.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534368973-9784',
    },
    {
      referencia:
        'CTCP (2020, 27 de noviembre). Norma Internacional de Contabilidad 21: Efectos de las Variaciones en las Tasas de Cambio de la Moneda Extranjera.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/enmiendas-niif-16-y-segundo-semestre-2016/1514470523-2378',
    },
    {
      referencia:
        'CTCP (2020, 27 de noviembre). Norma Internacional de Información Financiera 9: Instrumentos Financieros.',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-discusion-publica/enmienda-a-la-niif-9-instrumentos/doc-ctcp-xl8w9-141',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 2. Presentación de Estados Financieros. (2020, 27 de noviembre).',
      link: 'http://nicniif.org/files/NIC%202%20Inventarios.pdf',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 9. Instrumentos Financieros. (2020, 4 de diciembre).',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-discusion-publica/enmienda-a-la-niif-9-instrumentos/doc-ctcp-xl8w9-141',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 12. Impuesto a las ganancias (2020, 4 de diciembre).',
      link:
        'https://www.nicniif.org/files/u1/Norma_Internacional_de_Contabilidad_n___12.pdf',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 13. Presentación de Estados Financieros. (2020, 4 de diciembre).',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534363802-6328',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 16. arrendamientos (2020, 27 de noviembre).',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/oficializada/ES_GVT_IFRS16_2016.pdf',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 21. efectos de las variaciones de las tasas (2020, 27 de noviembre).',
      link: 'https://www.nicniif.org/files/u1/NIC_21_0.pdf',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 36. (2020, 27 de noviembre). Deterioro del valor de los activos.',
      link: 'http://nicniif.org/files/u1/NIC_36.pdf',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 38. Activos Intangibles. (2020, 27 de noviembre).',
      link: 'http://nicniif.org/files/u1/NIC_38.pdf',
    },
    {
      referencia:
        'Norma Internacional de Contabilidad 39. Instrumentos Financieros: Reconocimiento y medición (2020, 27 de noviembre).',
      link: 'http://nicniif.org/files/u1/NIC_39.pdf',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. Mc. Graw Hill.',
    },
  ],
  glosario: [
    {
      termino: 'Asientos de ajuste',
      significado:
        'registros contables realizados al finalizar un periodo y que tienen como objetivo registrar hechos económicos ejecutados, pero no reconocidos y corregir errores y omisiones cometidos a lo largo del periodo contable.',
    },
    {
      termino: 'Asientos de cierre',
      significado:
        'asientos contables que se deben realizar al finalizar un periodo con el propósito de cerrar las cuentas de resultados y transferir su saldo neto a la cuenta apropiada del patrimonio.',
    },
    {
      termino: 'Balance de prueba ajustado',
      significado:
        'listado de los saldos débitos y créditos de las cuentas de los estados financieros, que se prepara después de los asientos de ajuste y antes de los de cierre.',
    },
    {
      termino: 'Cuentas permanentes',
      significado:
        'partidas del balance general que perduran en los distintos periodos y no se deben cerrar.',
    },
    {
      termino: 'Cuentas temporales',
      significado:
        'partidas del estado de resultados que deben cerrarse al finalizar un periodo contable para determinar la utilidad o pérdida operacional.',
    },
    {
      termino: 'Depreciación',
      significado:
        'distribución del costo histórico de las propiedades, planta y equipo en los distintos periodos de vida útil.',
    },
    {
      termino: 'Ganancias y pérdidas',
      significado:
        'cuenta temporal que tiene como finalidad resumir los ingresos y gastos de un periodo.',
    },
    {
      termino: 'Gastos pagados por anticipado',
      significado:
        'desembolsos realizados por la empresa que tienen como finalidad pagar por anticipado ciertos gastos.',
    },
    {
      termino: 'Ingresos recibidos por anticipado',
      significado:
        'dinero recibido por la empresa como anticipo de servicios por prestar en el futuro.',
    },
    {
      termino: 'Valor residual',
      significado:
        'es el importe estimado que la entidad podría obtener de un activo por su disposición, después de haber deducido los costos estimados para su disposición, si el activo tuviera ya la edad y condición esperadas al término de su vida útil.',
    },
  ],
  complementario: [
    {
      texto:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. (2a. ed.) Ediciones de la U.',
      tipo: 'Biblioteca SENA',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
