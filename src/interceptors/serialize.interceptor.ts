import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { Any } from 'typeorm';
//import { employeeDto } from 'src/employee/dto/employee.dto';

interface ClassConstructor // it will be more specfic to recevive param when this datatype is used in constructor 
{
    new (...args: any[]) :{}

}


export function Serialize(dto : ClassConstructor) // using classconstructor interface as datatype instaed of any is better approch to handle error by passing the wrong type of param
{
    return UseInterceptors(new serializeInterceptor(dto));
}
export class serializeInterceptor implements NestInterceptor {
  //implemets is not same as extend(inherirance) ,implement use when one class satisfy all the requirments of abstarct class or interface

  constructor (private dto :any){}
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    //console.log('//run something before this request is handled', context);
    //run something before this request is handled
    return handler.handle().pipe(
      map((data: any) => {
        return plainToClass ( this.dto, data,
            {
                    excludeExtraneousValues : true, // exclude unrelated data
            });
       // console.log('run before the response is sent out', data);
        //run before the response is sent out
      }),
    );
  }
}
