# 1. The double curly braces{{}} are Angular's interpolation binding syntax

# 2. @Component is a decorator function that specifies the Angular metadata for the component

# 3. Pipes are a good way to format strings, currency amounts, dates and other display data. 
   Angular ships with several built-in pipes and you can create your own.
   The word uppercase in the interpolation binding, right after the pipe operator ( | ), activates the built-in UppercasePipe.
   ```
   <h2>{{hero.name | uppercase}} Details</h2>
   ```
# 4. two-way data binding with the ngModel directive

# 5. The messageService property must be public because you're going to bind to it in the template.
   Angular only binds to public component properties.
   
# 5. In Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and 
   imported by the root AppModule.
   By convention, the module class name is AppRoutingModule and it belongs in the app-routing.module.ts in the src/app folder.
   ng generate module app-routing --flat --module=app

# 6.  Angular router to navigate among different components..
	<nav>
		<a routerLink="/heroes">Heroes</a>
	</nav>
    The routerLink is the selector for the RouterLink directive that turns user clicks into router navigations. It's another of the public directives in the RouterModule.

# 7. The catchError() operator intercepts an Observable that failed. It passes the error an error handler that can do what it wants with the error.

# 8. The *ngFor repeats hero objects. Notice that the *ngFor iterates over a list called heroes$, not heroes. The $ is a convention that indicates heroes$ is an Observable, not an array.
   Since *ngFor can't do anything with an Observable, use the pipe character (|) followed by async. This identifies Angular's AsyncPipe and subscribes to an Observable automatically so you won't have to do so in the component class.

# 9. RouterModule provides the Router service, as well as router directives, such as RouterOutlet and routerLink.  VVVVVVVVVVVVVVV
If the RouterModule didn’t have forRoot() then each feature module would instantiate a new Router instance, which would break the application as there can only be one Router. By using the forRoot() method, the root application module imports RouterModule.forRoot(...) and gets a Router, and all feature modules import RouterModule.forChild(...) which does not instantiate another Router.

ng new customer-app --routing
command to create lazy loading module 
ng generate module customers --route customers --module app.module

https://angular.io/guide/lazy-loading-ngmodules#lazy-loading-feature-modules

# 10. https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/publish?view=azure-devops

# 11. one way binding
a. {{value}}
{{hero.name}}
b. [property]="value"
[hero]="selectedHero"
c. (click)="selectHero(hero)"

two way binding:
<input [(ngModule)]="hero.name" />

# 12. directives: structural and attribute
structural
<li *ngFor="let hero of heroes"></li>
<app-hero-detail *ngIf="selectedHero"></app-hero-detail>
attribute:
The ngModel directive, which implements two-way data binding, is an example of an attribute directive.
<input [(ngModel)]="hero.name">
Build a simple attribute directive: ng generate directive highlight

<div>
  Pick your favorite hero
  (<label><input type="checkbox" checked (change)="showSad = !showSad">show sad</label>)
</div>
<select [(ngModel)]="hero">
  <span *ngFor="let h of heroes">
    <span *ngIf="showSad || h.emotion !== 'sad'">
      <option [ngValue]="h">{{h.name}} ({{h.emotion}})</option>
    </span>
  </span>
</select>

# 13. error handling
https://www.positronx.io/angular-error-handling-tutorial-with-examples/

# 14. Publish an npm package from the command line 
https://docs.microsoft.com/en-us/azure/devops/artifacts/npm/publish?view=azure-devops

# 15. 
RxJS has observers (consuming interface) and observables (push interface). 
A Subject is both an observer and observable. 
A BehaviorSubject a Subject that can emit the current value (Subjects have no concept of current value). 
That is the confusing part. The easy part is using it.

# 16
```
if (typeof caseReference === 'undefined'){
  
}
```