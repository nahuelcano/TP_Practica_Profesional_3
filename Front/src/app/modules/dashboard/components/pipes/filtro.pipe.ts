import { Pipe, PipeTransform } from "@angular/core";
import { Producto } from "src/app/modelos/Producto";

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(prod: Producto[], page: number = 0, search: string = '', cat: string = ''): Producto[] {
    if ((search.length === 0) && (cat.length === 0)) {
      // console.log('entra', search)
      return prod;
    }
    // console.log('cat', cat);
    // prod.forEach(p => console.log(p.id_categoria));
    let filteredProd = prod;

    if (cat.length > 0) {
      // filteredProd.forEach(res =>
      //   console.log('res', res.id_categoria, 'cat', cat, res.id_categoria == cat))
      filteredProd = filteredProd.filter(res =>
        res.id_categoria == cat);
      // console.log('filtrocat');
    }

    if (search.length > 0) {
      filteredProd = filteredProd.filter(res =>
        res.name.includes(search));
      // console.log('filtroSearch');
    }

    // console.log('p',prod);
    // console.log('filterprod', filteredProd);

    return filteredProd;

  }

}