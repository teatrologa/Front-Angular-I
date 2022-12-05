import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FeatureSectionData } from 'src/app/models/features-section-data.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  @Input() public featureData!: FeatureSectionData;

  @Output() public elementCreated: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(){
    this.elementCreated.emit('features')
  }
}
