import {Component, OnInit, Input, HostBinding, HostListener} from '@angular/core';
import {Store} from "@ngrx/store";
import {Category} from "../../../data/category";
import {State} from "../../../state/State";
import {CATEGORY_CHANGED} from "../../../state/actions/category";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category;
  @HostBinding('class.selected') selected: boolean = false;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    const self = this;
    this.store.select('category')
      .subscribe((category: Category) => {
        self.selected = self.category === category;
      });
  }

  @HostListener('mousedown')
  onMouseDown() {
    this.store.dispatch({
      type: CATEGORY_CHANGED,
      payload: this.category
    });
  }
}
