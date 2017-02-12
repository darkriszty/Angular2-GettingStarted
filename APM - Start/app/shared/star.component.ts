import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";

@Component({
    selector: "ai-star",
    moduleId: module.id,
    templateUrl: "star.component.html",
    styleUrls: ["star.component.css"]
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClickedEmitter: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        this.ratingClickedEmitter.emit(`The rating ${this.rating} was clicked`);
    }
}