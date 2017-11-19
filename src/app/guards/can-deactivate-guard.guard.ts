import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface CanDeactivateComponent{
  canDeactivate:()=>Observable<boolean>|Promise<boolean>|boolean;
}

@Injectable()
export class CanDeactivateGuardGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component: CanDeactivateComponent, currentRoute: ActivatedRouteSnapshot, 
                currentState: RouterStateSnapshot){
                  return component.canDeactivate();
  }
}
