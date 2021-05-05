import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {BaseService} from '../services/base-service';
import {Zone} from '../models/zone';
import {Helpers} from '../helpers';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

  zoneList: Zone[] = [];
  displayedColumns: string[] = ['id', 'name', 'created_at', 'modified_at'];
  helpers = Helpers;

  constructor(private zoneService: BaseService<Zone>, private router: Router) {
    this.zoneService.path = 'zone';
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.zoneService.getAll().subscribe(
      response => this.zoneList = response,
      ex => console.log(ex)
    );
  }


  public goToPage(path: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([path], extras).then();
  }
}
