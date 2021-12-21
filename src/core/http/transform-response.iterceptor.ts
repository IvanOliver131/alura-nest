import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { NestResponse } from "./nest-response";

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost) {
    this.httpAdapter = adapterHost.httpAdapter;
  }
  
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle()
      .pipe(
        map( (responseController: NestResponse) => {
          if (responseController instanceof NestResponse) {
            const constContext = context.switchToHttp();
            const response = constContext.getResponse();
            const { headers, status, body } = responseController;
          
            const namesHeaders = Object.getOwnPropertyNames(headers);
            
            namesHeaders.forEach( nameHeader => {
              const valueHeader = headers[nameHeader];
              this.httpAdapter.setHeader(response, nameHeader, valueHeader);
            });

            this.httpAdapter.status(response, status);
            console.log(this.httpAdapter)
            return body;
          }

          return responseController;
        })
      );
  }
}