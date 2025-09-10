import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-status',
  standalone: true,
  imports: [],
  templateUrl: './service-status.component.html',
  styleUrl: './service-status.component.css'
})
export class ServiceStatusComponent implements OnInit{
   currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  //  private interval?: ReturnType<typeof setInterval>;
    private destroyRef = inject(DestroyRef)

   constructor(){}

   ngOnInit(){
    const interval= setInterval(() => {
      const random = Math.random();

      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if(random < 0.9){
        this.currentStatus = 'offline'
      }else{
        this.currentStatus = 'unknown'
      }
    }, 4000);

    this.destroyRef.onDestroy(() =>{
      clearInterval(interval);
    });
   }

//    ngOnDestroy() {
//        clearInterval(this.interval)
//    }
 }
