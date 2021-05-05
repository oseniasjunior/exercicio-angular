import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {BaseService} from '../../services/base-service';
import {Zone} from '../../models/zone';

@Component({
  selector: 'app-zone-item',
  templateUrl: './zone-item.component.html',
  styleUrls: ['./zone-item.component.scss']
})
export class ZoneItemComponent implements OnInit {

  zone: Zone = new Zone();

  constructor(private zoneService: BaseService<Zone>, private router: Router) {
    this.zoneService.path = 'zone';
  }

  ngOnInit(): void {
  }

  public goToPage(path: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([path], extras).then();
  }

  public save(): void {
    this.zoneService.save(this.zone).subscribe(() => {
      console.log('Salvo com sucesso');
      this.goToPage('zone');
    });
  }
}
