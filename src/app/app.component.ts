import { Component } from '@angular/core';
import { SpinnerServiceService } from './shared/spinner-service.service';
import { OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentChecked {
  title = 'AngularApp';
  // shouldShowSpinner!: boolean;
  constructor(
    public spinnerService: SpinnerServiceService,
    private changeDetector: ChangeDetectorRef
  ) {}

  // ngOnInit() {
  //   this.spinnerService.getVisibilityState().subscribe((data) => {
  //     this.shouldShowSpinner = data;
  //     console.log(this.shouldShowSpinner);
  //   });
  // }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
