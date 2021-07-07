<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5(data-aos="flip-left")
      img(src="@/assets/curso/img1.svg", style="margin: auto; max-width: 50%;")
    p Para generar los estados financieros de propósito general es indispensable realizar el cierre contable, cuyo objetivo es reflejar el saldo correcto de las cuentas. En dado caso que se presenten diferencias se deben realizar los respectivos asientos de ajuste.
    p.mb-0 #[b Nota aclaratoria:] las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto no se numeran y la elaboración es propia del autor del presente componente.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
