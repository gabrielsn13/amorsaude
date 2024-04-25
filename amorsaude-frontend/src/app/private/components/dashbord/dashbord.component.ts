import { Component, OnInit } from '@angular/core';
import { AmorsaudeService } from '../../services/amorsaude.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit{

  constructor(private amorsaudeService: AmorsaudeService){

  }

  ngOnInit(): void {
    this.amorsaudeService.sendMessage();
  }
}
