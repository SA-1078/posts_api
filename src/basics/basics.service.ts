import { Controller, Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {

    getMyFirstGet(): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics',
            function: 'Get Example'
        };
      }

      getConParametros(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics/:parametro',
            function: 'Get con Parametros',
            parametroRecibido: parametro
        };
      }

      postFunction(bodyPost: object): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de petición Post',
            bodyRecibido: bodyPost
        };
      }

      putFunction(bodyPost: object, parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo put',
            function: 'Ejemplo de petición Put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
      }
      deleteFunction(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'Ejemplo de petición Delete',
            parametro: parametro
        };
      }

      calcularTriangulo(body: any):object {
        const result: number = (body.base*body.altura)/2;
        return {
            service: 'Blog-Backend',
            controller: '/calculo-area-triangulo',
            function: 'Cálculo de área de un triángulo',
            base: body,
            resultado: result
        };
      }

      areaRectangulo(ancho: number, alto: number): object {
        const result: number = ancho*alto;
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function: 'calculo-area-rectangulo/.ancho/.alto',
            ancho: ancho,
            alto: alto,
            area: result
        }
      }

}