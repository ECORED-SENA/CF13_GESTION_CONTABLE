<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Ajustes de cierre
    p Para realizar el cierre contable se requiere haber efectuado los procedimientos del ciclo contable, los cuales hacen referencia al proceso de reconocimiento y medición de los hechos económicos. Estos deben presentarse de forma ordenada, de acuerdo con el período de tiempo; teniendo en cuenta las normas contables, financieras, tributarias y laborales.
    p.mb-5 En el procedimiento del ciclo contable se tienen en cuenta las siguientes actividades:
    .row.align-items-center.mb-5
      .col-lg-6
        ul.lista-ul.ms-5
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Realización del hecho económico.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Generación de documentos contables.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Reconocimiento y medición inicial del hecho económico de acuerdo con la operación comercial y el soporte contable generado.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Registro en el libro diario.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Traslado de la información al libro mayor y balances.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Elaboración del balance de comprobación.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Luego, se realizan los ajustes con el fin de validar la información y que los saldos sean correctos.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Se emite el comprobante de cierre.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Finalmente, se elaboran los estados financieros de propósito general: estado de situación financiera, estado de resultados, estado de cambio en el patrimonio, estados de flujos de efectivo y notas.
      .col-lg-6
        figure(data-aos="flip-right")
          img(src="@/assets/curso/img2.svg", style="margin: auto; max-width: 80%;")
    figure.mb-5
      img(src="@/assets/curso/img3.svg", style="margin: auto; max-width: 70%;")
    p.mb-5  Los asientos de ajuste hacen referencia al reconocimiento y medición de hechos económicos que presentan errores, omisiones y ajustes al valor real, con el fin de reflejar la realidad económica de la empresa y de esta manera presentar los estados financieros de forma comprensible, útil, oportuna y confiable para la toma de decisiones. Estos ajustes carecen del soporte contable específico; por lo tanto, se registran a través de una nota de contabilidad, con el fin de evidenciar el tipo de ajustes realizado en el respectivo período contable.
    .row.align-items-center
      .col-lg-6
        figure(data-aos="flip-right")
          img(src="@/assets/curso/img4.svg", style="margin: auto; max-width: 80%;")
      .col-lg-6
        p Los ajustes que se realizan con mayor frecuencia, afectando el período actual y posteriores son:
        ul.lista-ul.ms-5
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Efectivo: caja y bancos.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Deudores.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Inventarios.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Depreciación acumulada (PPE).
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Gastos pagados por anticipado.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Ingresos recibidos por anticipado.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Ingresos por cobrar.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Costos y gastos por pagar.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Provisiones para obligaciones laborales.
    separador.mb-5
    #t_1_1
    .titulo-segundo
      h2 1.1 Deterioro
    p.mb-5 El concepto de deterioro es un término que se utiliza bajo estándares internacionales, teniendo en cuenta las siguientes normas y grupo de información:
    .row
      .col-lg-6.d-flex
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p La Norma Internacional de Contabilidad (NIC) 36 Deterioro del Valor de los Activos: esta norma es aplicable para NIIF plenas, perteneciente al grupo 1.
      .col-lg-6.d-flex
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Sección 27 de las NIIF para PYMES, aplicable al grupo.
    .h4 La Norma Internacional de Contabilidad (NIC) 36 Deterioro del Valor de los Activos
    p.mb-5 Esta Norma relaciona los procedimientos aplicables a los activos, con el fin de reflejar el valor real de los hechos económicos. El deterioro hace referencia a la pérdida que sufren los activos cuando el valor registrado en libros es mayor al importe recuperable; es decir, el valor al cual se pretende vender o valorar dicho activo, menos los costos y uso del bien.
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-a.color-secundario.p-4.p-md-5(data-aos="slide-left")
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/img7.svg", style="margin: auto; max-width: 80%;")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p De acuerdo con la NIC 36, el importe recuperable es “el mayor entre su valor razonable menos los costos de disposición y su valor en uso” (p.1695).
                  br
                  br
                  p Según la NIIF 13 (2020) la medición del valor razonable es “el precio que se recibiría por vender un activo o que se pagaría por transferir un pasivo en una transacción ordenada entre participantes de mercado en la fecha de la medición” (p.3).
    p.mb-5 El objetivo y alcance de la presente norma son los siguientes:
    .h3 El objetivo
    p.mb-5 El objetivo de esta Norma consiste en establecer los procedimientos que una entidad aplicará para asegurar que sus activos están contabilizados por un importe que no sea superior a su importe recuperable. Un activo estará contabilizado por encima de su importe recuperable cuando su importe en libros exceda del importe que se pueda recuperar del mismo a través de su utilización o de su venta. Si este fuera el caso, el activo se presentaría como deteriorado, y la norma exige que la entidad reconozca una pérdida por deterioro del valor de ese activo. En la Norma también se especifica cuándo la entidad revertirá la pérdida por deterioro del valor, así como la información a revelar.
    .h4 Alcance
    p Esta Norma se aplicará para la contabilización del deterioro del valor de todos los activos, distintos de:
    .row.align-items-center.mb-4.mb-lg-0
      .col-lg-6
        ul.lista-ul.ms-5
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Inventarios (véase la NIC 2 Inventarios).
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Activos de contratos y activos que surgen de los costos para obtener o cumplir un contrato que se reconocen de acuerdo con la NIIF 15 Ingresos de Actividades Ordinarias procedentes de Contratos con Clientes.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Activos por impuestos diferidos (véase la NIC 12 Impuesto a las Ganancias).
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Activos que surjan por beneficios a los empleados (véase la NIC 19 Beneficios a los Empleados).
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Activos financieros dentro del alcance de la NIIF 9 Instrumentos Financieros.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Propiedades de inversión que se midan según su valor razonable (véase la NIC 40 Propiedades de Inversión).
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Activos biológicos relacionados con la actividad agrícola dentro del alcance de la NIC 41 Agricultura que se midan según su valor razonable menos los costos de disposición.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Contratos dentro del alcance de la NIIF 17 Contratos de Seguros que son activos.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Activos no corrientes (o grupos de activos para su disposición) clasificados como mantenidos para la venta de acuerdo con la NIIF 5 Activos no Corrientes Mantenidos Para la Venta y Operaciones Discontinuadas.
      .col-lg-6
        figure(data-aos="flip-right")
          img(src="@/assets/curso/img8.svg", style="margin: auto; max-width: 70%;")
    p Cabe resaltar, que la empresa al finalizar cada período contable realizará la prueba de deterioro y verificará si hay indicios de este, con el fin de realizar los ajustes a que haya lugar; para ello, realizará la comparación del valor en libros con el importe recuperable, este proceso se debe realizar por lo menos una vez al año.
    p.mb-5 La NIC 36, considera indicios de deterioro los que se transcriben a continuación:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Fuentes externas de información")
        .col-12
          ul.lista-ul.ms-5
            li 
              i.fas.fa-check(style="color: #D9A171")
              | Existen indicios observables de que el valor del activo ha disminuido durante el período significativamente, más que lo que cabría esperar como consecuencia del paso del tiempo o de su uso normal.
            li 
              i.fas.fa-check(style="color: #D9A171")
              | Durante el período han tenido lugar, o van a tener lugar en un futuro inmediato, cambios significativos con una incidencia adversa sobre la entidad, referentes al entorno legal, económico, tecnológico o de mercado en los que ésta opera, o bien en el mercado al que está destinado el activo.
            li 
              i.fas.fa-check(style="color: #D9A171")
              | Durante el período, las tasas de interés de mercado, u otras tasas de mercado de rendimiento de inversiones, han experimentado incrementos que probablemente afecten a la tasa de descuento utilizada para calcular el valor en uso del activo, de forma que disminuya el importe recuperable de forma significativa.
            li 
              i.fas.fa-check(style="color: #D9A171")
              | El importe en libros de los activos netos de la entidad es mayor que su capitalización bursátil.
      div(titulo="Fuentes internas de información")
        .row
          .col-12
            ul.lista-ul.ms-5
              li 
                i.fas.fa-check(style="color: #D9A171")
                | Se dispone de evidencia sobre la obsolescencia o deterioro físico de un activo.
              li 
                i.fas.fa-check(style="color: #D9A171")
                | Durante el período han tenido lugar, o se espera que tengan lugar en un futuro inmediato, cambios significativos en el alcance o manera en que se usa o se espera usar el activo, que afectarán desfavorablemente a la entidad. Estos cambios incluyen el hecho de que el activo esté ocioso, planes de discontinuación o restructuración de la operación a la que pertenece el activo, planes para disponer del activo antes de la fecha prevista, y la reconsideración como finita de la vida útil de un activo, en lugar de indefinida.
              li 
                i.fas.fa-check(style="color: #D9A171")
                | Según la NIC se dispone de evidencia procedente de informes internos, que indica que el rendimiento económico del activo es, o va a ser, peor que el esperado. (p.4.)
    p.mb-5 Así mismo, se establecen las #[b consideraciones de reconocimiento y medición]:
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="flip-left")
          img(src="@/assets/curso/img9.svg", style="margin: auto; max-width: 70%;")
      .col-lg-6
        ul.lista-ul.ms-5
          li 
            i.fas.fa-check(style="color: #D9A171")
            | El importe del deterioro debe registrarse en el resultado del período, excepto los activos reconocidos por su valor revaluado de acuerdo con la Norma Internacional de Contabilidad (NIC) 16.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Para identificar el valor razonable del activo, se tiene en cuenta analizar el precio de cotización en el mercado activo.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | En el momento que se reconoce la pérdida por deterioro se debe determinar los activos y pasivos por impuestos diferidos; para ello, se realiza la comparación del valor en libros del activo con su base fiscal, de acuerdo con la Norma Internacional de Contabilidad (NIC 12).
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Cuando existe indicios de deterioro, es indispensable estimar el importe recuperable de forma individual o en su defecto de la unidad generadora de efectivo (conjunto de activos que generan entradas de efectivo) siempre y cuando no esté por debajo del mayor valor entre los siguientes: el valor razonable menos los costos de disposición, el valor en uso y cero.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Cuando se reconoce el deterioro de la unidad generadora del activo, se realiza la distribución (reducción de importe en libros) entre el conjunto de activos que lo componen.
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Se podrá revertir la pérdida de períodos anteriores, cuando se generan cambios en las estimaciones; por lo tanto, se aumentará su valor hasta su importe recuperable.
    .h4 Indicios para reversión de pérdida por deterioro
    p.mb-5 De acuerdo con la NIC 36, al evaluar si existe algún indicio de que pueda haberse deteriorado el valor de un activo, una entidad considerará, como mínimo, los siguientes indicios:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Fuentes externas de información")
        .col-12
          ul.lista-ul.ms-5
            li 
              i.fas.fa-check(style="color: #D9A171")
              | Existen indicios observables de que el valor del activo ha aumentado significativamente durante el período.
            li 
              i.fas.fa-check(style="color: #D9A171")
              | Durante el período, han tenido, o van a tener lugar en un futuro inmediato, cambios significativos con un efecto favorable para la entidad, referentes al entorno legal, económico, tecnológico o de mercado en los que ésta opera, o bien en el mercado al cual va destinado el activo en cuestión.
            li 
              i.fas.fa-check(style="color: #D9A171")
              | Durante el período, las tasas de interés de mercado, u otras tasas de mercado de rendimiento de inversiones, han experimentado disminuciones que probablemente afecten a la tasa de descuento utilizada para calcular el valor en uso del activo, de forma que incrementan el importe recuperable de forma significativa.
      div(titulo="Fuentes internas de información")
        .row
          .col-12
            ul.lista-ul.ms-5
              li 
                i.fas.fa-check(style="color: #D9A171")
                | Durante el período han tenido lugar, o se espera que tengan lugar en el futuro inmediato, cambios significativos en el alcance o manera en que se utiliza o se espera utilizar el activo, con efecto favorable para la entidad. Estos cambios incluyen los costos en los que se haya incurrido durante el período para mejorar o desarrollar el rendimiento del activo o reestructurar la operación a la que dicho activo pertenece.
              li 
                i.fas.fa-check(style="color: #D9A171")
                | Se dispone de evidencia procedente de informes internos que indiquen que el rendimiento económico del activo es, o va a ser, mejor que el esperado.
    .h4.pt-5.mb-4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4
          p El 1 de agosto la empresa compra a crédito, una máquina por valor de $100.000.000, con IVA del 19%, el valor de instalación es de $15.000.000. El activo estará apto para su uso el 15 de agosto de 2020. La vida útil es de 10 años.
          p El técnico experto estima el valor residual en $10.000.000. Calcule el valor del activo a 31 de diciembre de 2020. 
          p.mb-0 El importe recuperable es de $105.000.000, realice la prueba de deterioro; como se muestra a continuación: 
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0.d-flex
        table
          thead(style="background-color: #D9A171;")
            tr
              th.text-white.text-center DETALLE
              th.text-white.text-center VALOR
          tbody
            tr
              td Costo Activo
              td $ 100.000.000
            tr(style="background-color: #F6F6F6;")
              td IVA 19%
              td $ 19.000.000
            tr
              td Instalación
              td $ 15.000.000
            tr(style="background-color: #F6F6F6;")
              td Costo Adquisición
              td $ 134.000.000
      .col-lg-5.d-flex
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="3").text-white.text-center Medición Inicial
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td PPYE
              td $ 134.000.000
              td 
            tr(style="background-color: #F6F6F6;")
              td  Cuentas por pagar
              td
              td $ 134.000.000
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0.d-flex
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="2").text-white.text-center Importe de depreciación
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Valor en libros
              th.text-white.text-center Valor
          tbody
            tr
              th Costo Activo
              td $ 134.000.000
            tr(style="background-color: #F6F6F6;")
              th Valor residual
              td $ 10.000.000
            tr
              th Importe de depreciación
              td $ 124.000.000
      .col-lg-5
        .cajon.color-primario.p-4
          .h4.mb-5 Vida útil: 10 años
          p Anual= $124.000.000/10 = $ 12.400.000
          p Mensual= $ 12.400.000/12 = $ 1.033.333
          p.mb-5 Diaria= $ 1.033.333/30 = $ 34.444
    p.mb-5 El activo se encuentra apto para su uso a partir del 15 de agosto de 2020; por lo tanto, se tendrá en cuenta dicha fecha para iniciar el reconocimiento de la depreciación.
    .h4.text-center Depreciación agosto: 16 días
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td.text-center Gastos depreciación PPE
              td.text-center $ 551.104
              td.text-center 
            tr(style="background-color: #F6F6F6;")
              td.text-center PPE Depreciación acumulada
              td.text-center
              td.text-center $ 551.104
    .h4.text-center Depreciación septiembre: 30 días
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td.text-center Gastos depreciación PPE
              td.text-center $ 1.033.333
              td.text-center 
            tr(style="background-color: #F6F6F6;")
              td.text-center PPE Depreciación acumulada
              td.text-center
              td.text-center $ 1.033.333
    .h4.text-center Depreciación octubre: 30 días
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td.text-center Gastos depreciación PPE
              td.text-center $ 1.033.333
              td.text-center 
            tr(style="background-color: #F6F6F6;")
              td.text-center PPE Depreciación acumulada
              td.text-center
              td.text-center $ 1.033.333
    .h4.text-center Depreciación noviembre: 30 días
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td.text-center Gastos depreciación PPE
              td.text-center $ 1.033.333
              td.text-center 
            tr(style="background-color: #F6F6F6;")
              td.text-center PPE Depreciación acumulada
              td.text-center
              td.text-center $ 1.033.333
    .h4.text-center Depreciación diciembre: 30 días
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td.text-center Gastos depreciación PPE
              td.text-center $ 1.033.333
              td.text-center 
            tr(style="background-color: #F6F6F6;")
              td.text-center PPE Depreciación acumulada
              td.text-center
              td.text-center $ 1.033.333
    p.text-center Supuesto: Prueba Deterioro: Importe recuperable < Valor en libros
    p.text-center Deterioro
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          tbody
            tr
              th.text-center Costo Activo
              td.text-center $ 134.000.000
            tr(style="background-color: #F6F6F6;")
              th.text-center Depreciación acumulada (Ag-Dic)
              td.text-center $ 4.684.436
            tr
              th.text-center Importe en libros
              td.text-center $ 129.315.564
    p.text-center Importe recuperable: $ 105.000.000
    p.text-center Valor libros: $ 129.351.564
    p.text-center Deterioro = $ 24.315.564
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td.text-center Gasto Deterioro PPE
              td.text-center $ 24.315.564
              td.text-center 
            tr(style="background-color: #F6F6F6;")
              td.text-center Deterioro PPE
              td.text-center
              td.text-center $ 24.315.564
    p Cabe resaltar, que hay Normas Internacionales que relacionan en su contenido las directrices para el reconocimiento del deterioro, entre ellas tenemos:
    figure.mb-5(data-aos="flip-left")
      img(src="@/assets/curso/img10.svg", style="margin: auto; max-width: 90%;")
    .h4 Deterioro en inventarios (NIC 2)
    p Esta norma se aplica a todos los inventarios; excepto instrumentos financieros y activos biológicos. Allí se definen los criterios de reconocimiento, medición, presentación y revelación de inventarios, permitiendo identificar el costo con base a los elementos que lo componen. De igual manera, presenta las bases para el reconocimiento y medición del deterioro por este concepto. 
    p.mb-5 El deterioro en inventario se identifica mediante la comparación del importe en libros y el valor neto realizable; este último hace referencia al precio que se puede obtener por la venta de dicho activo. Si el importe en libros es mayor al valor neto realizable se considera deterioro de inventarios; por lo tanto, se registra la pérdida mediante un gasto.
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4
          p.mb-0 Se compran 100 pares de zapatos a $25.000. Se incurrió en una erogación de $100.000 para transportar los bienes a su establecimiento de venta. Calcular el IVA 19%, RF 2,5%, RICA 11,04*1000.
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0.d-flex
        table
          thead(style="background-color: #D9A171;")
            tr
              th(colspan="2").text-white.text-center Determinación costo de adquisición
          tbody
            tr
              th Precio de adquisición
              td $ 2.500.000
            tr(style="background-color: #F6F6F6;")
              th Impuestos recuperables
              td $ 0
            tr
              th TOTAL COSTO ADQUISICIÓN
              td $ 2.500.000
      .col-lg-5.d-flex
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              th Inventarios
              td $ 2.500.000
              td 
            tr(style="background-color: #F6F6F6;")
              th IVA
              td $ 475.000
              td
            tr
              th RF 2,5%
              td 
              td $ 62.500
            tr(style="background-color: #F6F6F6;")
              th RICA 11,04 * 1000
              td 
              td $ 27.600
            tr
              th Proveedores Nacionales
              td 
              td $ 2.884.900
            tr(style="background-color: #F6F6F6;")
              th Total
              td $ 2.975.000
              td $ 2.975.000
    .h4 Supuesto deterioro
    p.mb-5 El precio estimado de los inventarios es de $2.900.000 y los gastos de venta son de $600.000
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0.d-flex
        table
          thead(style="background-color: #D9A171;")
            tr
              th.text-white.text-center DETALLE
              th.text-white.text-center VALOR
          tbody
            tr
              th Valor en libros
              td $ 2.500.000
            tr(style="background-color: #F6F6F6;")
              th Valor neto realizable (PV -gastos)
              td $ 2.300.000
            tr
              th DETERIORO
              td $ 200.000
      .col-lg-5.d-flex
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              th Gastos deterioro
              td $ 200.000
              td 
            tr(style="background-color: #F6F6F6;")
              th Deterioro inventarios
              td
              td $ 200.000
    .h4 Deterioro Instrumentos Financieros (NIIF) 9
    p Es importante recordar que al estudiar la Norma Internacional de Información Financiera (NIIF) 9 “Instrumentos Financieros”, se analizaron los criterios de reconocimiento, medición, presentación y revelación. Esta norma tiene como objetivo “establecer los principios para la información financiera sobre activos y pasivos financieros, de forma que se presente información útil y relevante para los usuarios de los estados financieros para la evaluación de los importes, calendario e incertidumbre de los flujos de efectivo futuros de la entidad.
    .row.align-items-center.mb-5
      .col-lg-6
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p #[b La NIIF 9 (2014) expresa:]
            p.mb-0 Una entidad reconocerá una corrección de valor por pérdidas por pérdidas crediticias esperadas sobre un activo financiero que se mide de acuerdo con los párrafos 4.1.2 o 4.1.2A, una cuenta por cobrar por arrendamientos, un activo de contrato o un compromiso de préstamo y un contrato de garantía financiera a los que se les aplica los requerimientos de deterioro de valor de acuerdo con los párrafos 2.1(g), 4.2.1(c) o 4.2.1(d) El objetivo de los requerimientos del deterioro de valor es reconocer las pérdidas crediticias esperadas durante el tiempo de vida del activo de todos los instrumentos financieros para los cuales ha habido incrementos significativos en el riesgo crediticio desde el reconocimiento inicial — evaluado sobre una base colectiva o individual — considerando toda la información razonable y sustentable, incluyendo la que se refiera al futuro. (p.22)
      .col-lg-6
        figure(data-aos="flip-left").mt-4.mt-lg-0
          img(src="@/assets/curso/img11.svg", style="margin: auto; max-width: 60%;")
    p.mb-5 El deterioro constituye la pérdida en los activos financieros, el cual ha sido medido al costo o al costo amortizado; por lo tanto, se debe revisar de forma individual si existen indicios de deterioro en cada período contable y realizar el respectivo ajuste a que haya lugar.
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4
          p.mb-0 La empresa Contable SAS, tiene una cuenta por cobrar por valor de $65.000.000, el cliente presenta una situación económica especial; por lo tanto, llega a un acuerdo de pago y se define que la cuenta será pagada dentro de 6 meses, la tasa del mercado es del 1,8% EM.
    p.mb-5 En este caso, es importante tener en cuenta que el cliente paga dentro de 6 meses el valor de $65.000.000, no se cobran intereses; por lo tanto, dicho valor se debe traer a valor presente teniendo en cuenta el concepto de matemáticas financieras y valor el dinero en el tiempo. Por lo tanto, se aplica la fórmula de valor actual o valor presente, mediante interés efectivo.
    .row.align-items-center
      .col-lg-6
        .cajon.color-primario.p-4.mb-5
          p VA = VF(1+i)⋀ n
          p VA = $65.000.000 / (1+0,018i)
            sup ⋀ 6
          p VA = $58.401.864
        p.mb-5 El deterioro es la diferencia entre el valor actual y el valor futuro.
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              th Gastos Deterioro
              td $ 6.598.139
              td 
            tr(style="background-color: #F6F6F6;")
              th Deterioro clientes
              td
              td $ 6.598.139
            tr
              th TOTAL
              td $ 6.598.139
              td $ 6.598.139
      .col-lg-6
        figure(data-aos="flip-right").mt-4.mt-lg-0
          img(src="@/assets/curso/img12.svg", style="margin: auto; max-width: 40%;")
    separador.mb-5
    #t_1_2
    .titulo-segundo
      h2 1.2 Depreciaciones
    p La depreciación es el desgaste que sufren los activos fijos por su uso, este se reconoce como un gasto (débito) y se revela en el estado de resultados, disminuyendo la utilidad del ejercicio. Por otro lado, se presenta en el activo (crédito) disminuyendo el grupo de propiedades, planta y equipo.
    .row.align-items-center
      .col-lg-6
        p De acuerdo con los estándares internacionales la depreciación se debe realizar a partir de que el activo fijo se encuentra apto para su uso, teniendo en cuenta el valor del importe en libros y la vida útil estipulada en las políticas contables. La estimación de la vida útil es el período en el cual la empresa desea darle uso al activo fijo. 
        p Por ejemplo, la empresa Contable SAS, adquiere un vehículo para uso de la gerencia, en las políticas contables se estableció que la vida útil es de tres (3) años, teniendo en cuenta que cada tres años venden el vehículo y adquieren uno nuevo, por lo tanto, este será el período de depreciación.
        p De igual manera, se tiene en cuenta el desgaste del activo fijo y la obsolescencia técnica o comercial, teniendo en cuenta las mejoras, mantenimientos y reparaciones realizadas. En el caso en que la empresa, cambie las estimaciones contables respecto a la vida útil o valor residual, deberá revelar la información teniendo en cuenta los efectos que generen las modificaciones sobre los resultados futuros. Estos cambios se reconocerán como un cambio en una estimación contable de acuerdo con la NIC 8 “Políticas Contables, Cambios en las Estimaciones Contables y Errores”.
        p Es importante definir el “valor residual”, teniendo en cuenta que es un término utilizado frecuentemente en el procedimiento de cálculo de la depreciación de activos fijos.
        p Según la NIC 16 (2020):
      .col-lg-6
        figure(data-aos="flip-left")
          img(src="@/assets/curso/img13.svg", style="margin: auto; max-width: 80%;")
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4.mb-0.ms-3 El valor residual de un activo es el importe estimado que la entidad podría obtener de un activo por su disposición, después de haber deducido los costos estimados para su disposición, si el activo tuviera ya la edad y condición esperadas al término de su vida útil. (p.2)
              i.fas.fa-quote-right.d-flex.justify-content-end
    p De igual forma, para ampliar los conceptos sobre este tema se analizan los párrafos 43 y 44 de la NIC 16, que manifiesta que se depreciará de forma separada cada parte de un elemento de propiedades, planta y equipo que tenga un costo significativo con relación al costo total del elemento y será distribuida entre sus partes significativas. Por ejemplo, podría ser adecuado depreciar por separado la estructura y los motores de un avión. 
    p La depreciación de un activo cesará cuando haya finalizado su período de depreciación (vida útil). Por otro lado, se tendrá en cuenta la fecha más próxima entre la clasificación del activo como mantenido para la venta o la baja de cuentas de este, pero en ningún momento cuando el activo no se esté utilizando.
    p.mb-5 Para calcular la depreciación contable, se tiene en cuenta los siguientes elementos para hallar el importe en libros:
    figure(data-aos="flip-right").mb-5
      img(src="@/assets/curso/img14.svg", style="margin: auto; max-width: 80%;")
    p.mb-5 En el caso que se realicen las mediciones posteriores y que el activo se revalúe, el nuevo importe se tendrá en cuenta para la depreciación de este. 
    .h4 Depreciación fiscal
    p De acuerdo con el art. 69 del Estatuto Tributario (ET) para los contribuyentes declarantes de renta, se tendrá en cuenta la sumatoria de los costos de adquisición y los costos atribuibles hasta que el activo se encuentre en condiciones de uso. Cabe resaltar que los costos de desmantelamiento y retiro del elemento no se tendrán en cuenta.
    .row.mb-5
      .col-lg-6
        p #[b Parágrafo 1.] Las propiedades de inversión que se midan contablemente bajo el modelo de valor razonable, para efectos fiscales se medirán al costo.
        p Según el art. 69-1, los activos no corrientes mantenidos para la venta tendrán en cuenta los siguientes conceptos para calcular la depreciación acumulada:
    figure(data-aos="flip-right").mb-5
      img(src="@/assets/curso/img15.svg", style="margin: auto; max-width: 80%;")
    .h4 Vida útil
    p.mb-5 La vida útil de los activos fijos se relaciona en las políticas contables diseñadas por la empresa, teniendo en cuenta la utilidad del activo. De acuerdo con el art. 137 del ET, la tasa de depreciación anual y vida útil equivalente se presenta de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0.d-flex
        table
          thead(style="background-color: #D9A171;")
            tr
              th.text-white.text-center Activo
              th.text-white.text-center Tasa de depreciación anual
              th.text-white.text-center Vida útil equivalente
          tbody
            tr
              td Construcciones y edificaciones
              td 2,22%
              td 45 años
            tr(style="background-color: #F6F6F6;")
              td Acueducto, planta y redes
              td 2,50%
              td 40 años
            tr
              td Vías de comunicación
              td 2,50%
              td 40 años
            tr(style="background-color: #F6F6F6;")
              td Flota y equipo aéreo
              td 3,33%
              td 30 años
            tr
              td Flota y equipo férreo
              td 5,00%
              td 20 años
            tr(style="background-color: #F6F6F6;")
              td Flota y equipo fluvial
              td 6,67%
              td 15 años
            tr
              td Armamento y equipo de vigilancia
              td 10,00%
              td 10 años
            tr(style="background-color: #F6F6F6;")
              td Equipo eléctrico
              td 10,00%
              td 10 años
            tr
              td Flota y equipo de transporte terrestre
              td 10,00%
              td 10 años
            tr(style="background-color: #F6F6F6;")
              td Maquinaria, equipos
              td 10,00%
              td 10 años
            tr
              td Muebles y enseres
              td 10,00%
              td 10 años
            tr(style="background-color: #F6F6F6;")
              td Equipo médico científico
              td 12,50%
              td 8 años
            tr
              td Envases, empaques y herramientas
              td 20,00%
              td 5 años
            tr(style="background-color: #F6F6F6;")
              td Equipo de computación
              td 20,00%
              td 5 años
            tr
              td Redes de procesamiento de datos
              td 20,00%
              td 5 años
            tr(style="background-color: #F6F6F6;")
              td Equipo de comunicación
              td 20,00%
              td 5 años
    .h4 Métodos de depreciación
    p.mb-5 La depreciación se calcula sobre la sumatoria del precio de adquisición, el impuesto sobre las ventas y costos atribuibles para poner en funcionamiento el activo. Los métodos, son los siguientes:
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img16.svg", style="margin: auto; max-width: 60%;")
      .col
        .h4.mb-0 Método de línea recta
    p.mb-5 Es el método que se usa con mayor frecuencia en las empresas, el cual consiste en dividir el costo del activo entre la vida útil estimada; por lo tanto, el cálculo en períodos iguales será el mismo valor.
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4
          p.mb-0 La entidad compra una máquina por valor de $35.000.000, más IVA del 19%. La vida útil estimada del activo es de 15 años. Paga mano de obra por instalación de la máquina por $300.000, materiales e insumos de instalación $180.000.
    p Se realiza una prueba de funcionamiento del activo y se paga $150.000. El vendedor de la máquina transfiere los riesgos y beneficios el 7 de noviembre de 2020 y la máquina está apta para ser usada el 12 de noviembre de 2020. Calcular la depreciación del mes de noviembre y diciembre.
    .row.justify-content-center.mb-5
      .col-lg-5.d-flex
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="2").text-white.text-center Valor en libros
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Valor en libros
              th.text-white.text-center Valor
          tbody
            tr
              th Costo Activo
              td $ 35.000.000
            tr(style="background-color: #F6F6F6;")
              th IVA
              td $ 6.650.000
            tr
              th MO instalación
              td $ 300.000
            tr(style="background-color: #F6F6F6;")
              th Materiales instalación
              td $ 180.000
            tr
              th MO instalación
              td $ 300.000
            tr(style="background-color: #F6F6F6;")
              th Costo
              td $ 42.430.000
      .col-lg-5.mb-lg-0
        .cajon.color-primario.p-4
          .p Vida útil= 15 años
          .p Anual= $ 42.430.000/15 = $ 2.828.667
          .p Mensual= $ 2.828.667/12 = $ 235.722
          .p.mb-0 Diaria= $ 235.722/30 = $ 7.857
    p.mb-5 El activo se encuentra apto para su uso a partir del 12 de noviembre de 2020; por lo tanto, se tendrá en cuenta dicha fecha para iniciar el reconocimiento de la depreciación; lo que corresponde a 19 días.
    .row.justify-content-center.mb-5
      .col-lg-7.d-flex.mb-5
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="3").text-white.text-center Depreciación Noviembre: 19 días
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Gastos depreciación PPE
              td $ 149.283
              td
            tr(style="background-color: #F6F6F6;")
              td PPE Depreciación acumulada
              td
              td $ 149.283
            tr
              td Total
              td $ 149.283
              td $ 149.283
      .col-lg-7.d-flex
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="3").text-white.text-center Depreciación Diciembre: 30 días
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Gastos depreciación PPE
              td $ 235.722
              td
            tr(style="background-color: #F6F6F6;")
              td PPE Depreciación acumulada
              td
              td $ 235.722
            tr
              td Total
              td $ 235.722
              td $ 235.722
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img17.svg", style="margin: auto; max-width: 60%;")
      .col
        .h4.mb-0 Método de depreciación acelerada
    .row.justify-content-center.mb-5
      .col-lg-8.p-4.rounded.bg-color1
        p Es considerado un método de depreciación acelerada, porque el activo se deprecia más en los primeros años y menos en los últimos. Cabe resaltar que el método de depreciación se estipula en las políticas contables, señalando la tasa de depreciación y vida útil aplicable a los activos fijos. 
        p.mb-4 Primero, se debe calcular el factor de depreciación, para ello, utilizamos la siguiente fórmula:
        figure.mb-4
          img(src="@/assets/curso/img21.svg", style="max-width: 20%;").m-auto
        p Donde: 
        p #[b S] = suma de dígitos.
        p #[b N] = años estimados de vida útil.
        p Teniendo en cuenta el ejemplo anterior, se desarrollará por el método de depreciación acelerada:
        figure
          img(src="@/assets/curso/img44.svg", style="max-width: 20%;").m-auto
    p.mb-5 Luego, se tiene en cuenta el factor para cada año de vida: 15/120 – 14/120 -13/120 y así sucesivamente hasta llegar a uno, como se muestra en la siguiente tabla:
    .row.justify-content-center.mb-5
      .col-lg-10
        table
          thead(style="background-color: #D9A171;")
            tr
              th.text-white.text-center AÑOS
              th.text-white.text-center FACTOR
              th.text-white.text-center DEPRECIACIÓN ANUAL
              th.text-white.text-center DEPRECIACIÓN ACUMULADA
              th.text-white.text-center VALOR EN LIBROS
          tbody
            tr
              td -
              td -
              td -
              td -
              td $ 42.430.000
            tr(style="background-color: #F6F6F6;")
              td 1
              td 15/120
              td $ 5.303.750
              td $ 5.303.750
              td $ 37.126.250
            tr
              td 2
              td 14/120
              td $ 4.950.167
              td $ 10.253.917
              td $ 32.176.083
            tr(style="background-color: #F6F6F6;")
              td 3
              td 13/120
              td $ 4.596.583
              td $ 14.850.500
              td $ 27.579.500
            tr
              td 4
              td 12/120
              td $ 4.243.000
              td $ 19.093.500
              td $ 23.336.500
            tr(style="background-color: #F6F6F6;")
              td 5
              td 11/120
              td $ 3.889.417
              td $ 22.982.917
              td $ 19.447.083
            tr
              td 6
              td 10/120
              td $ 3.535.833
              td $ 26.518.750
              td $ 15.911.250
            tr(style="background-color: #F6F6F6;")
              td 7
              td 9/120
              td $ 3.182.250
              td $ 29.701.000
              td $ 12.729.000
            tr
              td 8
              td 8/120
              td $ 2.828.667
              td $ 32.529.667
              td $ 9.900.333
            tr(style="background-color: #F6F6F6;")
              td 9
              td 7/120
              td $ 2.475.083
              td $ 35.004.750
              td $ 7.425.250
            tr
              td 10
              td 6/120
              td $ 2.121.500
              td $ 37.126.250
              td $ 5.303.750
            tr(style="background-color: #F6F6F6;")
              td 11
              td 5/120
              td $ 1.767.917
              td $ 38.894.167
              td $ 3.535.833
            tr
              td 12
              td 4/120
              td $ 1.414.333
              td $ 40.308.500
              td $ 2.121.500
            tr(style="background-color: #F6F6F6;")
              td 13
              td 3/120
              td $ 1.060.750
              td $ 41.369.250
              td $ 1.060.750
            tr
              td 14
              td 2/120
              td $ 707.167
              td $ 42.076.417
              td $ 353.583
            tr(style="background-color: #F6F6F6;")
              td 15
              td 1/120
              td $ 353.583
              td $ 42.430.000
              td $ 0
    p.mb-5 Se puede observar que, comparado con el método de línea recta, en este método, en los primeros años el activo se deprecia más y en los últimos años su valor es menor.
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img18.svg", style="margin: auto; max-width: 60%;")
      .col
        .h4.mb-0 Método de unidades de producción
    p.mb-5 Para aplicar este método se tiene en cuenta la vida útil del activo de acuerdo con su capacidad de producción, como puede ser: horas de trabajo, kilómetros y unidades producidas.
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4
          p.mb-0 Se adquiere una máquina el 24 de noviembre de 2020 por valor de $40.000.000, la cual tiene una capacidad de producción de 20.000 unidades. La vida útil estimada es de 10 años.  Las unidades producidas son las siguientes:
    .row.justify-content-center.mb-5
      .col-lg-5
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Año
              th.text-white.text-center Unidades producidas
          tbody
            tr
              th 1
              td 2.800
            tr(style="background-color: #F6F6F6;")
              th 2
              td 2.700
            tr
              th 3
              td 2.450
            tr(style="background-color: #F6F6F6;")
              th 4
              td 2.200
            tr
              th 5
              td 1.900
            tr(style="background-color: #F6F6F6;")
              th 6
              td 1.750
            tr
              th 7
              td 1.900
            tr(style="background-color: #F6F6F6;")
              th 8
              td 1.600
            tr
              th 9
              td 1.400
            tr(style="background-color: #F6F6F6;")
              th 10
              td 1.300
            tr
              th Total
              td 20.000
      .col-lg-5.mt-4.mt-lg-0
        .cajon.color-primario.p-4
          p Para calcular el valor de depreciación por unidad se aplica la siguiente fórmula:
          figure.mb-4
            img(src="@/assets/curso/img19.svg", style=" max-width: 85%;")
          p Luego, se multiplica las unidades producidas por la depreciación por unidad:
          figure.mb-4
            img(src="@/assets/curso/img20.svg", style=" max-width: 85%;")
          p #[b Depreciación por unidad=] $2.000/unidad
          p Seguidamente, se multiplica las unidades producidas por la depreciación por unidad:
          p #[b Depreciación=] $ 2.0000 * 2.800 unidades.
          p #[b Depreciación=] $ 5.600.000
    p.mb-5 A continuación, observa la tabla de depreciación:
    table
      thead
        tr(style="background-color: #D9A171;")
          th.text-white.text-center AÑOS
          th.text-white.text-center Unidades producidas
          th.text-white.text-center Depreciación por unidad
          th.text-white.text-center Depreciación
          th.text-white.text-center Depreciación acumulada
          th.text-white.text-center Valor neto en libros
      tbody
        tr
          td -
          td -
          td -
          td -
          td -
          td $ 40.000.000,00
        tr(style="background-color: #F6F6F6;")
          td 1
          td 2.800
          td $ 2.000
          td $ 5.600.000,00
          td $ 5.600.000,00
          td $ 34.400.000,00
        tr
          td 2
          td 2.700
          td $ 2.000
          td $ 5.400.000,00
          td $ 11.000.000,00
          td $ 29.000.000,00
        tr(style="background-color: #F6F6F6;")
          td 3
          td 2.450
          td $ 2.000
          td $ 4.900.000,00
          td $ 15.900.000,00
          td $ 24.100.000,00
        tr
          td 4
          td 2.200
          td $ 2.000
          td $ 4.400.000,00
          td $ 20.300.000,00
          td $ 19.700.000,00
        tr(style="background-color: #F6F6F6;")
          td 5
          td 1.900
          td $ 2.000
          td $ 3.800.000,00
          td $ 24.100.000,00
          td $ 15.900.000,00
        tr
          td 6
          td 1.750
          td $ 2.000
          td $ 3.500.000,00
          td $ 27.600.000,00
          td $ 12.400.000,00
        tr(style="background-color: #F6F6F6;")
          td 7
          td 1.900
          td $ 2.000
          td $ 3.800.000,00
          td $ 31.400.000,00
          td $ 8.600.000,00
        tr
          td 8
          td 1.600
          td $ 2.000
          td $ 3.200.000,00
          td $ 34.600.000,00
          td $ 5.400.000,00
        tr(style="background-color: #F6F6F6;")
          td 9
          td 1.400
          td $ 2.000
          td $ 2.800.000,00
          td $ 37.400.000,00
          td $ 2.600.000,00
        tr
          td 10
          td 1.300
          td $ 2.000
          td $ 2.600.000,00
          td $ 40.000.000,00
          td 
    separador.mb-5
    #t_1_3
    .titulo-segundo
      h2 1.3 Amortización
    p Este concepto se utiliza para diferir en cuotas los gastos pagados por anticipado que son consumidos en el período de tiempo y que efectivamente cumplen con la definición del activo, de lo contrario se deben registrar en el gasto, clase 5.
    p Cabe resaltar que el activo debe cumplir con los siguientes criterios:
    .row.align-items-center.mb-5
      .col-lg-6
        ul.lista-ul.ms-4
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Debe ser controlado
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Proviene de eventos pasados
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Genera beneficios económicos futuros
          li 
            i.fas.fa-check(style="color: #D9A171")
            | Debe ser fiable su valor
        p.mt-5 Algunos conceptos que se tienen en cuenta para amortización de gastos pagados por anticipado al final del período contable son:  arrendamientos, pólizas de seguros, comisiones, honorarios, mantenimiento, servicios, etc.
      .col-lg-6.mt-4.mt-lg-0
        figure(data-aos="flip-left")
          img(src="@/assets/curso/img22.svg", style="margin: auto; max-width: 80%;")
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4
          p El 1 de diciembre de 2020, la empresa Contable SAS, adquiere por un año una póliza de seguro por valor de $12.000.000, canela en efectivo
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Anticipo – seguros
              td $ 12.000.000
              td
            tr(style="background-color: #F6F6F6;")
              td Efectivo
              td
              td $ 12.000.000
            tr
              td Total
              td $ 12.000.000
              td $ 12.000.000
    p.mb-5 Al finalizar el mes, es decir el 31 de diciembre se realiza la amortización del primer mes, teniendo en cuenta trasladar el valor mensual a la cuenta de gastos-clase 5, que se calcula de la siguiente manera:
    .row.justify-content-center.mb-5
      .col-lg-6
        .cajon.color-primario.p-4
          p #[b Valor mensual= $ 12.000.000 / 12]
          p.mb-0 #[b Valor mensual= $ 1.000.000]
    p.mb-5 El valor de la póliza se divide en 12 meses, que corresponde al período de amortización. La contabilización del mes de diciembre se realiza como se muestra a continuación.
    .row.justify-content-center.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Gastos seguros
              td $ 1.000.000
              td
            tr(style="background-color: #F6F6F6;")
              td Anticipo – seguros
              td
              td $ 1.000.000
            tr
              td Total
              td $ 1.000.000
              td $ 1.000.000
    p En el año 2021, continúa el proceso de amortización, una vez se haya consumido o recibido el servicio, hasta que la cuenta del activo quede en cero (0) y su valor sea trasladado al gasto, el cual se verá reflejado en el estado de resultados.
    p Por otro lado, los activos intangibles se amortizan a medida que generan beneficios económicos para la empresa, teniendo en cuenta que estos poseen vida útil definida e indefinida, estos últimos de acuerdo con la NIC 38 no se amortizan; además se tendrá en cuenta los criterios relacionados en la NIC 38 y políticas diseñadas por la empresa. Cabe resaltar, que los activos intangibles inician el proceso de amortización, una vez este se encuentren en condiciones de uso.
    p La NIC 38 (2020):
    .row.align-items-center.mb-5
      .col-lg-6
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-0 La amortización cesará en la fecha más temprana entre aquélla en que el activo se clasifique como mantenido para la venta (o incluido en un grupo de activos para su disposición que se haya clasificado como mantenido para la venta) de acuerdo con la NIIF 5, y la fecha en que se produzca la baja en cuentas de este”. (párr.97)
              br
              br
              p Pueden utilizarse diferentes métodos para distribuir el importe amortizable de un activo, de forma sistemática, a lo largo de su vida útil. Estos métodos incluyen el método lineal, el de depreciación decreciente y el de las unidades de producción. El método utilizado se seleccionará a partir del patrón esperado de consumo de los beneficios económicos futuros esperados incorporados en el activo y se aplicará de forma coherente de período a período, a menos que se produzca un cambio en los patrones esperados de consumo de dichos beneficios económicos futuros. (párr.98)
      .col-lg-6.mt-4.mt-lg-0
        figure(data-aos="flip-right")
          img(src="@/assets/curso/img23.svg", style="margin: auto; max-width: 80%;")
    p NIC 8, establece:
    .row.justify-content-center.mb-5
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-0 Tanto el período como el método de amortización utilizado para un activo intangible con vida útil finita se revisarán, como mínimo, al final de cada período. Si la nueva vida útil esperada difiere de las estimaciones anteriores, se cambiará el período de amortización para reflejar esta variación. Si se ha experimentado un cambio en el patrón esperado de generación de beneficios económicos futuros por parte del activo, el método de amortización se modificará para reflejar estos cambios. Los efectos de estas modificaciones en el período y en el método de amortización, se tratarán como cambios en las estimaciones contables. (párr.106)
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-11
        .cajon.color-primario.p-4
          p.mb-0 El 1 de julio de 2020 la empresa Contable SAS inicia el desarrollo de un software, por lo tanto, incurre en los siguientes gastos:
    figure.mb-5(data-aos="flip-right")
      img(src="@/assets/curso/img24.svg", style="margin: auto; max-width: 80%;")
    p.mb-5 El software estará apto para su uso el 01 de diciembre de 2020. Se estima una vida útil de 3 años. Se solicita realizar la medición inicial y la amortización del primer mes.
    .h4.mb-5 Medición inicial:
    .row.justify-content-center.mb-5
      .col-lg-8
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Activo intangible en desarrollo - personal
              td $ 5.500.000
              td
            tr(style="background-color: #F6F6F6;")
              td Activo intangible en desarrollo – Materiales e insumos
              td  $ 3.300.000
              td
            tr
              td Activo intangible en desarrollo - Pruebas
              td $ 1.200.000 
              td
            tr(style="background-color: #F6F6F6;")
              td Efectivo
              td 
              td $ 10.000.000 
            tr
              td TOTAL
              td $ 10.000.000 
              td $ 10.000.000 
    .h4.mb-5 Amortización: 31 de diciembre de 2020
    p.mb-5 Se realiza por el mes de diciembre, teniendo en cuenta que el activo intangible es apto para su uso a partir del 1 de diciembre de 2020.
    .row.mb-5
      .col-lg-6
        .cajon.color-primario.p-4
          p #[b Costo Activo= $ 10.000.000]
          p #[b Vida útil= 3 años]
          p #[b Anual= $ 3.333.333]
          p #[b Mensual= $ 277.778]
          p.mb-0 #[b Diaria= $ 92.593]
    .row.justify-content-center
      .col-lg-8
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Gasto intangible - #[i Software]
              td $ 277.778
              td
            tr(style="background-color: #F6F6F6;")
              td Activo intangible - #[i software]
              td
              td $ 277.778
            tr
              td Total
              td $ 277.778
              td $ 277.778
    separador.mb-5
    #t_1_4
    .titulo-segundo
      h2 1.4 Diferencia en cambio
    p Este tipo de ajustes se presenta cuando la empresa realiza operaciones comerciales en moneda extranjera o tiene negocios en el extranjero; por lo tanto, al realizar la conversión de moneda para la presentación de la información contable la empresa se encuentra expuesta al riesgo cambiario, lo cual genera diferencias que deben registrarse mediante un ajuste contable, cuyo objetivo es reflejar la realidad económica.
    p.mb-5 El objetivo de la Norma Internacional de contabilidad (NIC) 21 expresa:
    .row.align-items-center.mb-5
      .col-lg-6
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Una entidad puede llevar a cabo actividades en el extranjero de dos maneras diferentes. Puede realizar transacciones en moneda extranjera o bien puede tener negocios en el extranjero. Además, la entidad puede presentar sus estados financieros en una moneda extranjera. El objetivo de esta Norma es prescribir cómo se incorporan, en los estados financieros de una entidad, las transacciones en moneda extranjera y los negocios en el extranjero, y cómo convertir los estados financieros a la moneda de presentación elegida.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Los principales problemas que se presentan son la tasa o tasas de cambio a utilizar, así como la manera de informar sobre los efectos de las variaciones en las tasas de cambio dentro de los estados financieros. Cabe resaltar que para el grupo 2- NIIF pymes aplica la sección 30 Conversión de la moneda extranjera. (p.A195)
      .col-lg-6
        figure(data-aos="flip-left")
          img(src="@/assets/curso/img25.svg", style="margin: auto; max-width: 65%;")
    .h4 Ejemplo:
    .cajon.color-primario.p-4.mb-5
      p.mb-0 El 24 de noviembre de 2020 la empresa Contables SAS adquiere maquinaria y equipo por valor de USD 57.000, a una tasa de USD 3.500. El 18 de diciembre de 2020, se transfiere el riesgo una vez la máquina se encuentra en Colombia, fecha en la cual se realizará el pago. Cuando se realiza el proceso de nacionalización la tasa vigente es USD 3.620.
    .h4.mb-5 24 de noviembre de 2020
    .row.justify-content-center.mb-5
      .col-lg-8
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center
              th.text-white.text-center Débito
              th.text-white.text-center Crédito
          tbody
            tr
              td Propiedades, planta y equipo - Maquinaria
              td $ 199.500.000
              td
            tr(style="background-color: #F6F6F6;")
              td Pasivo - Acreedores del exterior
              td
              td $ 199.500.000
    .h4.mb-5 18 de diciembre de 2020
    .row.justify-content-center.mb-5
      .col-11
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Se origina una diferencia por diferencia en cambio, aumenta el valor del pasivo.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | A la llegada de la máquina a puerto colombiano, el valor de la obligación es mayor como consecuencia del incremento en la tasa de cambio. El nuevo saldo de la obligación es de $343.500.000.  De acuerdo con la NIIF para las Pymes, el ajuste por diferencia en cambio debe incluirse en los resultados del período y no debe incluirse como parte del costo del activo.
    .row.justify-content-center
      .col-lg-8
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center
              th.text-white.text-center Débito
              th.text-white.text-center Crédito
          tbody
            tr
              td Gasto - Diferencia en cambio
              td $ 6.840.000
              td
            tr(style="background-color: #F6F6F6;")
              td Pasivo - Acreedores del exterior
              td
              td $ 6.840.000
    separador.mb-5
    #t_1_5
    .titulo-segundo
      h2 1.5 Arqueo de caja
    p Las empresas manejan la cuenta de caja general y caja menor, las cuales hacen parte del efectivo; esta última se utiliza para gastos de menor cuantía y debe establecerse en las políticas contables el valor del fondo y los conceptos que lo componen, con el fin de ser aplicados de forma correcta conforme los estándares establecidos. 
    p.mb-5 Por otro lado, la caja general se utiliza para cancelar gastos o conceptos mayores. En cualquiera de los dos casos es importante realizar un arqueo de caja, el cual consiste en comparar el valor de libros con lo que efectivamente existe en la caja.
    figure(data-aos="flip-right").mb-5
      img(src="@/assets/curso/img26.svg", style="margin: auto; max-width: 90%;")
    p.mb-5 Cuando se realiza la comparación pueden surgir diferencias que requieren un ajuste contable mediante una nota de contabilidad, estos pueden ser:
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img16.svg", style="margin: auto; max-width: 60%;")
      .col
        p.mb-0 El importe de libros es mayor al valor del arqueo de caja: eso genera un faltante, por ende, se establece el responsable de dicha situación y se procede a realizar el ajuste, con el fin de reflejar la realidad económica y el saldo correcto del efectivo. Los casos que se presentan por faltantes son los siguientes:
    .row.justify-content-end
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Carece de registro en libros, sin embargo, el dinero se utilizó para cancelar algún concepto.
        .h4 Ejemplo:
        p Sandra Rojas canceló por concepto de papelería $40.000, sin embargo, no se registró dicho concepto en los libros. Por lo tanto, se realiza el ajuste, registrando el concepto pendiente.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/img27.svg", style="margin: auto; max-width: 50%;")
          .col-lg-5.mt-4.mt-lg-0
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Gastos de papelería
                  td $ 40.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Efectivo
                  td
                  td $ 40.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 40.000
                  td $ 40.000
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Faltante injustificado, no se evidencia el concepto o soporte por el que falta dinero en la caja, una vez se realizó el arqueo. Por lo anterior, el colaborador es responsable de este suceso.
        .h4 Ejemplo:
        p Una vez realizado el arqueo de caja se observa que se presenta un faltante injustificado por valor de $50.000.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Efectivo
                  td $ 50.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Cuentas por cobrar a trabajadores
                  td
                  td $ 50.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 50.000
                  td $ 50.000
          .col-lg-5.mt-4.mt-lg-0
            figure
              img(src="@/assets/curso/img28.svg", style="margin: auto; max-width: 50%;")
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img17.svg", style="margin: auto; max-width: 60%;")
      .col
        p.mb-0 El importe de libros es menor al valor del arqueo de caja: en este caso la diferencia constituye un sobrante, el cual requiere un ajuste contable. Los casos que se presentan son los siguientes:
    .row.justify-content-end
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Mayor valor en la caja y carece del registro contable.
        .h4 Ejemplo:
        p María Medina realiza un abono de $500.000 a su cuenta, el valor es recibido, sin embargo, carece del registro contable; por lo tanto, se realiza el ajuste aumentando la cuenta de efectivo.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/img29.svg", style="margin: auto; max-width: 50%;")
          .col-lg-5.mt-4.mt-lg-0
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Efectivo
                  td $ 500.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Deudores comerciales- clientes
                  td
                  td $ 500.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 500.000
                  td $ 500.000
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Sobrantes en la caja injustificado, si es una cuantía mínima se aumenta el valor de efectivo y el ingreso; sin embargo, si es un valor significativo debe establecerse las causas que originó el sobrante; por lo tanto, se registra como un pasivo.
        .h4 Ejemplo:
        p El 25 de noviembre de 2020, se realiza el arqueo de caja donde se obtiene un valor de $220.000 y el importe en libros se encuentra por $200.000. Por lo tanto, se realiza el ajuste teniendo en cuenta la diferencia.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Efectivo
                  td $ 20.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Ingreso-sobrante de caja
                  td
                  td $ 20.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 20.000
                  td $ 20.000
          .col-lg-5.mt-4.mt-lg-0
            figure
              img(src="@/assets/curso/img28.svg", style="margin: auto; max-width: 50%;")
    separador.mb-5
    #t_1_6
    .titulo-segundo
      h2 1.6 Conciliación bancaria
    figure(data-aos="flip-right").mb-5
      img(src="@/assets/curso/img30.svg", style="margin: auto; max-width: 50%;")
    p La conciliación bancaria, es el proceso de verificación y comparación del importe en libros de la cuenta de bancos con el extracto de la cuenta de ahorros o corriente generado por la entidad financiera; cuyo objetivo, es confrontar las diferencias y realizar los ajustes respectivos que permitan revelar información comprensible, útil y oportuna.
    p.mb-5 La conciliación se realiza de forma mensual, teniendo en cuenta, confirmar las fechas, valores, soportes de las transacciones, luego se analizan las diferencias encontradas y se realizan los ajustes, con el fin de reflejar el saldo correcto en los libros. Los ajustes que frecuentemente se presentan son los siguientes:
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img16.svg", style="margin: auto; max-width: 60%;")
      .col
        p.mb-0 #[b Por importes no registrados por la empresa y que se reflejan en el extracto bancario:] en este caso se debe realizar ajustes mediante notas débito y notas crédito, de acuerdo con la transacción que se esté presentando:
    ul.lista-ul.ms-4
      li 
        i.fas.fa-angle-right(style="color: #D9A171")
        p #[b Por notas débito:] se presentan por concepto de chequeras, comisiones, cheques devueltos, intereses de sobregiros, intereses por préstamos y otros cobros realizados por las entidades financieras. En este caso disminuye la cuenta de bancos (crédito) y aumenta la cuenta (débito) relacionada con el concepto que se está cancelando.
    .row.justify-content-end
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Ejemplo 1: Registro compra chequera
        p La empresa Contable SAS, no registra la compra de chequera por valor de $180.000, más IVA del 19%, la cual se encuentra registrada en el extracto bancario emitido por la entidad financiera.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Gastos bancarios (chequera)
                  td $ 180.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td IVA
                  td $ 34.200
                  td
                tr(style="background-color: #FFFFFF;")
                  td Bancos
                  td
                  td $ 214.200
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 214.200
                  td $ 214.200
          .col-lg-5.mt-4.mt-lg-0
            figure
              img(src="@/assets/curso/img31.svg", style="margin: auto; max-width: 50%;")
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Ejemplo 2: Registro GMF
        p En el extracto bancario se encuentra registrada una nota débito por concepto de Gravamen a los movimientos financieros por un valor de $90.300, el cual, no se encuentra registrado en los libros contables de la empresa.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/img32.svg", style="margin: auto; max-width: 50%;")
          .col-lg-5.mt-4.mt-lg-0
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Gastos Financieros (GMF)
                  td $ 90.300
                  td
                tr(style="background-color: #F6F6F6;")
                  td Bancos
                  td
                  td $ 90.300
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 90.300
                  td $ 90.300
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Ejemplo 3: Registro cheque devuelto
        p En ocasiones se reflejan valores reconocidos en los libros contables y no registrados por la entidad financiera: este caso sucede cuando existen cheques pendientes de cobro o que han sido devueltos, también se presentan remesas en tránsito.
        p En el extracto bancario existe una nota débito por concepto de un cheque girado por el cliente Carlos Téllez por valor de $ 600.000, consignado a la empresa contables SAS y devuelto por la entidad financiera por fondos insuficientes, por lo anterior, el importe no se encuentra registrado en los libros contables.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Clientes
                  td $ 600.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Bancos
                  td
                  td $ 600.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 600.000
                  td $ 600.000
          .col-lg-5.mt-4.mt-lg-0
            figure
              img(src="@/assets/curso/img33.svg", style="margin: auto; max-width: 50%;")
    ul.lista-ul.ms-4
      li 
        i.fas.fa-angle-right(style="color: #D9A171")
        p #[b Por notas crédito:] sucede cuando en el extracto bancario se presentan notas crédito por concepto de préstamos abonados en cuenta corriente, consignaciones de clientes, rendimientos financieros.
    .row.justify-content-end
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Ejemplo 4: Consignación realizada por el cliente y no registrada
        p Al realizar la confrontación del extracto bancario con los libros de bancos, se observa que el extracto relaciona una nota crédito por valor de $550.000, correspondiente a la consignación realizada por el cliente Jorge Medina y no registrada por la empresa.
        p Se realiza la contabilización aumentando la cuenta de bancos y disminuyendo la cuenta de clientes.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/img34.svg", style="margin: auto; max-width: 50%;")
          .col-lg-5.mt-4.mt-lg-0
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Bancos
                  td $ 550.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Clientes
                  td
                  td $ 550.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 550.000
                  td $ 550.000
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img17.svg", style="margin: auto; max-width: 60%;")
      .col
        p.mb-0 #[b Por errores en libros:] se presenta cuando la empresa registra un menor o mayor valor en la contabilidad, por concepto de consignaciones.
    .row.justify-content-end
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Ejemplo 5: registro de menor valor de la consignación
        p La empresa contable SAS realiza una consignación en la cuenta corriente por valor de $1.000.000; sin embargo, el registro contable aparece por $100.000.
        p El ajuste se realiza por la diferencia, aumentado la cuenta de bancos.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Bancos
                  td $ 900.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Efectivo (caja)
                  td
                  td $ 900.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 900.000
                  td $ 900.000
          .col-lg-5.mt-4.mt-lg-0
            figure
              img(src="@/assets/curso/img35.svg", style="margin: auto; max-width: 50%;")
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Ejemplo 6: registro de mayor valor de la consignación
        p La empresa contable SAS realiza una consignación en la cuenta corriente por valor de $580.000; sin embargo, el registro contable aparece por $850.000.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/img36.svg", style="margin: auto; max-width: 50%;")
          .col-lg-5.mt-4.mt-lg-0
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Efectivo (caja)
                  td $ 270.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Bancos
                  td
                  td $ 270.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 270.000
                  td $ 270.000
    .row.align-items-center.mb-5
      .col-auto.d-inline
        figure
          img(src="@/assets/curso/img18.svg", style="margin: auto; max-width: 60%;")
      .col
        p.mb-0 #[b Por errores en libros al contabilizar un cheque:] se presenta cuando la empresa registra un menor o mayor valor en la contabilidad, por concepto de cheques girados.
    .row.justify-content-end
      .col-11.p-4(style="background-color: #D8E4EF").mb-5
        .h4 Ejemplo 7: registro de menor valor del cheque
        p La empresa contable SAS gira un cheque para cancelar mantenimiento de equipo por valor de $810.000; sin embargo, el registro contable aparece por $180.000.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Gastos de mantenimiento de equipos
                  td $ 630.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Bancos
                  td
                  td $ 630.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 630.000
                  td $ 630.000
          .col-lg-5.mt-4.mt-lg-0
            figure
              img(src="@/assets/curso/img37.svg", style="margin: auto; max-width: 50%;")
      .col-11.p-4(style="background-color: #D8E4EF")
        .h4 Ejemplo 8: registro de mayor valor del cheque
        p La empresa contable SAS gira un cheque por valor de $3.200.000, para cancelar a los proveedores la mercancía; sin embargo, el registro contable aparece por $3.800.000.
        p Asiento de ajuste.
        .row.align-items-center.justify-content-center
          .col-lg-5
            figure
              img(src="@/assets/curso/img38.svg", style="margin: auto; max-width: 50%;")
          .col-lg-5.mt-4.mt-lg-0
            table
              thead
                tr(style="background-color: #D9A171;")
                  th.text-white.text-center CUENTA
                  th.text-white.text-center DEBE
                  th.text-white.text-center HABER
              tbody
                tr(style="background-color: #FFFFFF;")
                  td Bancos
                  td $ 600.000
                  td
                tr(style="background-color: #F6F6F6;")
                  td Proveedores
                  td
                  td $ 600.000
                tr(style="background-color: #FFFFFF;")
                  td Total
                  td $ 600.000
                  td $ 600.000
    separador.mb-5
    #t_1_7
    .titulo-segundo
      h2 1.7 Balance de prueba
    p.mb-5 El Balance de prueba o de comprobación es un documento que refleja los saldos en él debe y haber de las cuentas de activo, pasivo, patrimonio, ingresos, gastos y costos. Cada una de las columnas débito y crédito deber dar sumas iguales, verificando una vez más el principio de partida doble.
    .row.align-items-center.mb-5
      .col-lg-6
        p Las cuentas de naturaleza débito son activos, gastos y costo y las cuentas de naturaleza crédito se encuentran conformadas por pasivo, patrimonio e ingresos.
        p Este balance es el insumo para elaborar el balance de prueba ajustado, donde se actualizan los saldos de las cuentas que presentaron ajustes por diferentes conceptos y seguidamente realizar los estados financieros de propósito general.
      .col-lg-6
        figure(data-aos="flip-right")
          img(src="@/assets/curso/img40.svg", style="margin: auto; max-width: 80%;")
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4
          p.mb-0 La empresa contable SAS, presenta los siguientes saldos del libro mayor a 31 de diciembre de 2020, con el fin de elaborar el balance de prueba.
    .row.mb-5.align-items-center
      .col-lg-6
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Código
              th.text-white.text-center Cuenta
              th.text-white.text-center Saldo
          tbody
            tr
              th 1105
              td Caja
              td $ 409.000
            tr(style="background-color: #F6F6F6;")
              th 1110
              td Bancos
              td $ 17.680.000
            tr
              th 1705
              td Gastos pagados por anticipado
              td  $ 1.170.000 
            tr(style="background-color: #F6F6F6;")
              th 1305
              td Clientes
              td $ 5.070.000 
            tr
              th
              td
              td
            tr(style="background-color: #F6F6F6;")
              th 1365
              td Cuentas por cobrar a trabajadores
              td $ 520.000 
            tr
              th 1435
              td Inventarios
              td $ 32.500.000 
            tr(style="background-color: #F6F6F6;")
              th 1524
              td Equipo de oficina
              td $ 6.500.000 
            tr
              th 1540
              td Flota y equipo de transporte
              td $ 62.400.000 
            tr(style="background-color: #F6F6F6;")
              th 1592
              td Depreciación acumulada
              td $ 7.670.000 
            tr
              th 2105
              td Obligaciones nacionales
              td $ 630.000 
            tr(style="background-color: #F6F6F6;")
              th 2205
              td Proveedores nacionales
              td $ 3.120.000 
            tr
              th 2408
              td Impuestos sobre las ventas por pagar
              td $ 910.000 
            tr(style="background-color: #F6F6F6;")
              th 2705
              td Ingresos recibidos por anticipado
              td $ 130.000 
            tr
              th 3115
              td Aportes sociales
              td $ 98.800.000 
            tr(style="background-color: #F6F6F6;")
              th 5105
              td Gastos de personal
              td $ 4.160.000 
            tr
              th 4135
              td Ingresos ordinarios
              td $ 42.120.000 
            tr(style="background-color: #F6F6F6;")
              th 4210
              td Ingresos Financieros
              td $ 364.000 
            tr
              th 5305
              td Gastos Financieros
              td $ 585.000 
            tr(style="background-color: #F6F6F6;")
              th 6135
              td Costo de ventas
              td $ 22.750.000 
      .col-lg-6
        figure(data-aos="flip-right")
          img(src="@/assets/curso/img41.svg", style="margin: auto; max-width: 80%;")
    p.mb-5 Para elaborar el balance de comprobación o de prueba es importante organizar cada una de las cuentas teniendo en cuenta la clase de activo, pasivo, patrimonio, ingresos, gastos y costos, luego se traslada el saldo de acuerdo con la naturaleza de cada cuenta. Finalmente, se verifica que el total débito y crédito tengan el mismo valor. A continuación, observe la solución del ejercicio planteado:
    .row.justify-content-center
      .col-lg-8
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="4").text-white.text-center CONTABLE SAS
            tr(style="background-color: #D9A171;")
              th(colspan="4").text-white.text-center NIT: 900.430.320-0
            tr(style="background-color: #E1B590")
              th(colspan="4").text-white.text-center Balance General de Comprobación
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Código
              th.text-white.text-center Cuenta
              th.text-white.text-center Debe
              th.text-white.text-center Haber
          tbody
            tr
              td 1105
              td Caja
              td $ 409.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1110
              td Bancos
              td $ 17.680.000
              td
            tr
              td 1305
              td Clientes
              td $ 5.070.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1365
              td Cuentas por cobrar a trabajadores
              td $ 520.000
              td
            tr
              td 1435
              td Inventarios
              td $ 32.500.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1524
              td Equipo de oficina
              td $ 6.500.000
              td
            tr
              td 1540
              td Flota y equipo de transporte
              td $ 62.400.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1592
              td Depreciación acumulada
              td 
              td $ 7.670.000
            tr
              td 1705
              td Gastos pagados por anticipado
              td $ 1.170.000
              td
            tr(style="background-color: #F6F6F6;")
              td 2105
              td Obligaciones nacionales
              td 
              td $ 630.000
            tr
              td 2205
              td Proveedores nacionales
              td 
              td $ 3.120.000
            tr(style="background-color: #F6F6F6;")
              td 2408
              td Impuestos sobre las ventas por pagar
              td 
              td $ 910.000
            tr
              td 2705
              td Ingresos recibidos por anticipado
              td 
              td $ 130.000
            tr(style="background-color: #F6F6F6;")
              td 3115
              td Aportes sociales
              td 
              td $ 98.800.000
            tr
              td 4135
              td Ingresos ordinarios
              td 
              td $ 42.120.000
            tr(style="background-color: #F6F6F6;")
              td 4210
              td Ingresos financieros
              td 
              td $ 364.000
            tr
              td 5105
              td Gastos de personal
              td $ 4.160.000
              td
            tr(style="background-color: #F6F6F6;")
              td 5305
              td Gastos financieros
              td $ 585.000
              td
            tr
              td 6135
              td Costo de ventas
              td $ 22.750.000
              td
            tr(style="background-color: #F6F6F6;")
              td 
              td TOTAL
              td $ 153.744.000
              td $ 153.744.000
    separador.mb-5
    #t_1_8
    .titulo-segundo
      h2 1.8 Balance ajustado
    p Para elaborar el balance ajustado es importante tener en cuenta los diferentes ajustes que se presentaron en las cuentas, como son los ajustes de caja, bancos, depreciaciones, amortizaciones y demás cuentas que hayan sufrido alguna modificación por concepto de algún tipo de ajustes, los cuales generan cambios en períodos posteriores.
    p Teniendo en cuenta lo anterior, se procede a realizar el comprobante de ajustes, seguidamente el balance ajustado donde se trasladan cada una de las cuentas de activos, pasivo, patrimonio, ingresos, gastos y costos. 
    p.mb-5 Cabe resaltar que el balance debe sumar igual en el movimiento débito y crédito. 
    figure(data-aos="flip-left").mb-5
      img(src="@/assets/curso/img42.svg", style="margin: auto; max-width: 80%;")
    .h4 Ejemplo:
    .row.justify-content-center.mb-5
      .col-11
        .cajon.color-primario.p-4.mb-5
          p.mb-0 Teniendo en cuenta el ejemplo anterior, se realizarán los siguientes ajustes contables con el fin de elaborar el comprobante de ajustes y el balance ajustado de la empresa Contable SAS.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Al realizar el arqueo de caja se observa que existe un faltante injustificado por valor de $35.000.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | La empresa no ha realizado el registro del GMF por valor de $85.000 de acuerdo con la nota débito reflejada en el extracto bancario.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Se deprecian los activos fijos por el método de línea recta por un mes. La vida útil del equipo oficina es de 10 años y de la flota de transportes 5 años.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Se realiza la amortización de los gastos pagados por anticipado, el valor corresponde 2 meses de arrendamiento.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | se realiza la amortización de los ingresos recibidos por anticipado, el valor corresponde a dos meses de intereses.
    .row.justify-content-center
      .col-lg-8
        table.mb-5
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="4").text-white.text-center CONTABLE SAS
            tr(style="background-color: #E1B590;")
              th(colspan="4").text-white.text-center NIT: 900.430.320-0
            tr(style="background-color: #D9A171")
              th(colspan="4").text-white.text-center Comprobante de ajustes
            tr(style="background-color: #E1B590;")
              th(colspan="4").text-white.text-center Fecha: 30 de noviembre de 2020
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Código
              th.text-white.text-center Detalle
              th.text-white.text-center Debe
              th.text-white.text-center Haber
          tbody
            tr
              td 1365
              td CajaCuentas por cobrar a trabajadores
              td $ 35.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1105
              td Caja
              td
              td $ 35.000
            tr
              td 5115
              td GMF
              td $ 85.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1110
              td Bancos
              td
              td $ 85.000
            tr
              td 5160
              td Gastos depreciación
              td $ 1.094.167
              td
            tr(style="background-color: #F6F6F6;")
              td 1592
              td Depreciación acumulada
              td
              td $ 1.094.167
            tr
              td 5120
              td Gastos arrendamiento
              td $ 585.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1705
              td Gastos pagados por anticipado
              td
              td $ 585.000
            tr
              td 2705
              td Ingresos recibidos por anticipado
              td $ 65.000
              td
            tr(style="background-color: #F6F6F6;")
              td 4210
              td Ingresos financieros
              td
              td $ 65.000
            tr
              td 
              td Sumas iguales
              td $ 1.864.167
              td $ 1.864.167
            tr(style="background-color: #F6F6F6;")
              td Elaborado por:
                br
                br
              td Revisado por:
                br
                br
              td Aprobado por:
                br
                br
              td Contabilizado por:
                br
                br
      .col-lg-11
        table.mb-5
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="8").text-white.text-center CONTABLE SAS
            tr(style="background-color: #D9A171;")
              th(colspan="8").text-white.text-center NIT: 900.430.320-0
            tr(style="background-color: #E1B590")
              th(colspan="2").text-white.text-center
              th(colspan="2").text-white.text-center Balance de prueba
              th(colspan="2").text-white.text-center Ajustes
              th(colspan="2").text-white.text-center Balance ajustado
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Código
              th.text-white.text-center Cuenta
              th.text-white.text-center Debe
              th.text-white.text-center Haber
              th.text-white.text-center Debe
              th.text-white.text-center Haber
              th.text-white.text-center Debe
              th.text-white.text-center Haber
          tbody
            tr
              td 1105
              td Caja
              td $ 409.000
              td
              td
              td $ 35.000
              td $ 374.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1110
              td Bancos
              td $ 17.680.000
              td
              td
              td $ 85.000
              td $ 17.595.000
              td 
            tr
              td 1305
              td Clientes
              td $ 5.070.000
              td
              td
              td 
              td $ 5.070.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1365
              td Cuentas por cobrar a trabajadores
              td $ 520.000
              td
              td $ 35.000
              td 
              td $ 555.000
              td 
            tr
              td 1435
              td Inventarios
              td $ 32.500.000
              td
              td
              td 
              td $ 32.500.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1524
              td Equipo de oficina
              td $ 6.500.000
              td
              td
              td 
              td $ 6.500.000
              td 
            tr
              td 1540
              td Flota y equipo de transporte
              td $ 62.400.000
              td
              td
              td 
              td $ 62.400.000
              td
            tr(style="background-color: #F6F6F6;")
              td 1592
              td Depreciación acumulada
              td 
              td $ 7.670.000
              td
              td $ 1.094.167
              td 
              td $ 8.764.167
            tr
              td 1705
              td Gastos pagados por anticipado
              td $ 1.170.000
              td
              td
              td $ 585.000
              td $ 585.000
              td
            tr(style="background-color: #F6F6F6;")
              td 2105
              td Obligaciones nacionales
              td 
              td $ 630.000
              td
              td 
              td 
              td $ 630.000
            tr
              td 2205
              td Proveedores nacionales
              td 
              td $ 3.120.000
              td
              td 
              td 
              td $ 3.120.000
            tr(style="background-color: #F6F6F6;")
              td 2408
              td Impuestos sobre las ventas por pagar
              td 
              td $ 910.000
              td
              td 
              td 
              td $ 910.000
            tr
              td 2705
              td Ingresos recibidos por anticipado
              td 
              td $ 130.000
              td $ 65.000
              td 
              td 
              td $ 65.000
            tr(style="background-color: #F6F6F6;")
              td 3115
              td Aportes sociales
              td 
              td $ 98.800.000
              td
              td 
              td 
              td $ 98.800.000
            tr
              td 4135
              td Ingresos ordinarios
              td 
              td $ 42.120.000
              td
              td 
              td 
              td $ 42.120.000
            tr(style="background-color: #F6F6F6;")
              td 4210
              td Ingresos financieros
              td 
              td $ 364.000
              td
              td $ 65.000
              td 
              td $ 429.000
            tr
              td 5105
              td Gastos de personal
              td $ 4.160.000
              td
              td
              td 
              td $ 4.160.000
              td
            tr(style="background-color: #F6F6F6;")
              td 5120
              td Gastos arrendamiento
              td 
              td
              td $ 585.000
              td 
              td $ 585.000
              td
            tr
              td 5160
              td Gastos depreciación
              td 
              td
              td $ 1.094.167
              td 
              td $ 1.094.167
              td
            tr(style="background-color: #F6F6F6;")
              td 5305
              td Gastos financieros
              td $ 585.000
              td
              td $ 85.000
              td 
              td $ 670.000
              td
            tr
              td 6135
              td Costo de ventas
              td $ 22.750.000
              td
              td
              td 
              td $ 22.750.000
              td
            tr(style="background-color: #F6F6F6;")
              td 
              td TOTAL
              td $ 153.744.000
              td $ 153.744.000
              td $ 1.864.167
              td $ 1.864.167
              td $ 154.838.167
              td $ 154.838.167
    .h4 Hoja de trabajo
    p La hoja de trabajo es el documento que recopila la información del balance de prueba, los ajustes, el balance ajustado, el estado de resultados y estado de situación financiera. Su objetivo es validar la información contable y que sea útil para la elaboración de los estados financieros.
    p.mb-5 Cabe resaltar que este insumo contribuye en la elaboración de los asientos de cierre, teniendo en cuenta que los saldos de las cuentas de ingresos, gastos y costos se deben cerrar al finalizar el período contable.
    .h4 Asientos de cierre
    p.mb-5 Para realizar el cierre de las cuentas de resultados, se realiza una anotación contraria a su naturaleza. Por ejemplo, los ingresos se debitan y los gastos y costos se acreditan con el fin de determinar la utilidad o pérdida del ejercicio.
    .row.mb-5
      .col-lg-6
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="3").text-white.text-center Cierre de las cuentas de ingresos
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Ingresos ordinarios
              td $ 42.120.000
              td
            tr(style="background-color: #F6F6F6;")
              td Ingresos financieros
              td $ 429.000
              td
            tr
              td Utilidad o pérdida
              td 
              td $ 42.549.000
            tr(style="background-color: #F6F6F6;")
              td TOTAL
              td $ 42.549.000
              td $ 42.549.000
      .col-lg-6
        table
          thead
            tr(style="background-color: #5E6178;")
              th(colspan="3").text-white.text-center Cierre de las cuentas de gastos
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Utilidad o pérdida
              td $ 29.259.167
              td
            tr(style="background-color: #F6F6F6;")
              td Gastos de personal
              td
              td $ 4.160.000
            tr
              td Gastos arrendamiento
              td 
              td $ 585.000
            tr(style="background-color: #F6F6F6;")
              td Gastos depreciación
              td
              td $ 1.094.167
            tr
              td Gastos financieros
              td 
              td $ 670.000
            tr(style="background-color: #F6F6F6;")
              td Costo de ventas
              td
              td $ 22.750.000
            tr
              td TOTAL
              td $ 29.259.167
              td $ 29.259.167
    .h4 Cierre de la cuenta de utilidad o pérdida
    p.mb-5 A continuación, se observa la hoja de trabajo, teniendo en cuenta la información del ejemplo anterior:
    .row.justify-content-center.mb-5
      .col-lg-8
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center CUENTA
              th.text-white.text-center DEBE
              th.text-white.text-center HABER
          tbody
            tr
              td Utilidad del ejercicio
              td $ 13.289.833
              td
            tr(style="background-color: #F6F6F6;")
              td Gastos de personal
              td
              td $ 13.289.833
            tr
              td Total
              td $ 13.289.833
              td $ 13.289.833
    p.mb-5 El ejercicio presentó utilidad, teniendo en cuenta que los ingresos superaron los costos y gastos; por lo tanto, se realizó el registro crédito aumentando el patrimonio. En el caso en que los ingresos sean inferiores a los costos y gastos, se refleja una pérdida en el ejercicio, disminuyendo el patrimonio (débito).
    .row.justify-content-center.mb-5
      .col-lg-8
        table
          thead
            tr(style="background-color: #D9A171;")
              th.text-white.text-center Código
              th.text-white.text-center Cuenta
              th.text-white.text-center Saldo
          tbody
            tr
              th 1105
              td Caja
              td $ 409.000
            tr(style="background-color: #F6F6F6;")
              th 1110
              td Bancos
              td $ 17.680.000 
            tr
              th 1305
              td Clientes
              td $ 5.070.000
            tr(style="background-color: #F6F6F6;")
              th 1365
              td Cuentas por cobrar a trabajadores
              td $ 520.000
            tr
              th 1435
              td Inventarios
              td $ 32.500.000
            tr(style="background-color: #F6F6F6;")
              th 1524
              td Equipo de oficina
              td $ 6.500.000
            tr
              th 1540
              td Flota y equipo de transporte
              td $ 62.400.000
            tr(style="background-color: #F6F6F6;")
              th 1592
              td Depreciación acumulada
              td
            tr
              th 1705
              td Gastos pagados por anticipado
              td $ 1.170.000
            tr(style="background-color: #F6F6F6;")
              th 2105
              td Obligaciones nacionales
              td
            tr
              th 2205
              td Proveedores nacionales
              td
            tr(style="background-color: #F6F6F6;")
              th 2408
              td Impuestos sobre las ventas por pagar
              td
            tr
              th 2705
              td Ingresos recibidos por anticipado
              td
            tr(style="background-color: #F6F6F6;")
              th 3115
              td Aportes sociales
              td
            tr
              th 4135
              td Ingresos ordinarios
              td
            tr(style="background-color: #F6F6F6;")
              th 4210
              td Ingresos financieros
              td
            tr
              th 5105
              td Gastos de personal
              td $ 4.160.000
            tr(style="background-color: #F6F6F6;")
              th 5120
              td Gastos arrendamiento
              td
            tr
              th 5160
              td Gastos depreciación
              td
            tr(style="background-color: #F6F6F6;")
              th 5305
              td Gastos financieros
              td $ 585.000
            tr
              th 6135
              td Costo de ventas
              td $ 22.750.000
            tr(style="background-color: #F6F6F6;")
              th 3605
              td Utilidad del ejercicio
              td
            tr
              th
              td TOTAL
              td $ 153.744.000
    .tarjeta.color-primario.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/img43.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-0 Para profundizar en la temática planteada en el componente, lo invito a explorar la biblioteca SENA, ingresando a través del siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-contenido.texto-blanco(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047" target="_blank")
                span(style="color: #000000 !important") Ver
                i.fas.fa-link(style="color: #000000 !important")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
