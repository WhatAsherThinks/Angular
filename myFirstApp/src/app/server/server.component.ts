import { Component } from '@angular/core';

// tells angular this is a component. (decorator)
// need to pass a javascript object. will tell angualr what to do.
// must be unique
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent{
  serverId: number = 10;
  serverStatus: string = 'Offline';

  getServerStatus(){
    return this.serverStatus;
  }

}
