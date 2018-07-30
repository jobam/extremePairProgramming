import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Injectable } from '../../../../node_modules/@angular/core';

@Injectable()
export class VideoStoreApi {
  constructor(protected http: HttpClient) {}

  //   /**
  //    * @summary Get the scenario customization data
  //    * @param scenarioStrategy
  //    */
  //   public apiStrategyGetScenarioCustomizationGet(
  //     scenarioStrategy: StrategyEnum,
  //     httpParams?: HttpParams
  //   ): Observable<Customization> {
  //     const path = `${this.basePath}/api/scenarios/customization`;

  //     if (scenarioStrategy === null || scenarioStrategy === undefined) {
  //       throw new Error(
  //         'Required parameter scenarioStrategy was null or undefined when calling apiStrategyGetScenarioCustomizationGet.'
  //       );
  //     }

  //     return this.http.get<Customization>(path, {
  //       headers: new HttpHeaders().append(
  //         'scenarioStrategy',
  //         StrategyEnum[scenarioStrategy]
  //       ),
  //       withCredentials: this.configuration.withCredentials,
  //       params: httpParams
  //     });
  //   }
}
