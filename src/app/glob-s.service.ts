import { Injectable } from '@angular/core';

@Injectable()
export class GlobSService {

private Data : String ='abc';

  constructor() { }
  
public getData()
{
  return this.Data;
}

public setData(databaru)
{
  this.Data=databaru;
}

}