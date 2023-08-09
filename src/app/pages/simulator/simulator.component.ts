import { Component } from '@angular/core';
import { SimulatorService } from 'src/app/services/simulator.service';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss']
})
export class SimulatorComponent {

  constructor(private simulatorService: SimulatorService){}

  simulate(){
    console.log('simulate');
    this.simulatorService.simulatePotential()
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (console.log),
      complete: (console.log)
    })
  }

}
