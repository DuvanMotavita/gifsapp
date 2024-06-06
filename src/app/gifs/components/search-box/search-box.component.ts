import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.services';

@Component({
  selector: 'gifs-search-box',
  template: `<h5>Buscar:</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Buscar gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
    />`,
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsServices: GifsService) {}

  //searchTag(newTag: string): void {       txtTagInput.value
  searchTag(): void {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsServices.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
