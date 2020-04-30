import { Component } from '@angular/core';
import { GlobSService } from './glob-s.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  dataskrng: string="";

constructor (public varglob : GlobSService)
{
  this.data = this.varglob.getData();
}

ubahdata()
{
  this.varglob.setData(this.dataskrng);
  this.data = this.varglob.getData();
}

}
