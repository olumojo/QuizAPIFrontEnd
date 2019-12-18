import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { AboutComponent } from "./about/about.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
    declarations:[

    ],
    imports:[
        RouterModule.forRoot([
            {path :'home',component:HomeComponent},
            {path : 'about', component:ProductComponent},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:PageNotFoundComponent}
          ])
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}