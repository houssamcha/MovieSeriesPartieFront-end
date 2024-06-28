import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

interface utilisateur {
  nom: string;
  mail: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angularMovie';

  userList: utilisateur[] = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get<utilisateur[]>("http://localhost:8082/MovieSeriesPart2").subscribe(response => {
      this.userList = response;
      console.log(this.userList);
    }, error => {
      console.log("error occured while fetching user list");
    })
  }}