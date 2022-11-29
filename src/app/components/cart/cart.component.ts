import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {CartsService} from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  styleUrls: ['./cart.component.scss'],
  templateUrl: './cart.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
  readonly productList$: Observable<ProductModel[]> = this._productsService.getAll().pipe(tap(data => this.createProductFormControls(data)));
  readonly cartForm: FormGroup = new FormGroup({
    date: new FormControl()
  });
  readonly userId$: Observable<string> = this._activatedRoute.params.pipe(map(params => {
    return params['userid'];
  }));

  constructor(private _productsService: ProductsService, private _activatedRoute: ActivatedRoute, private _cartsService: CartsService) {
  }

  createProductFormControls(products: ProductModel[]): void {
    products.forEach(product => this.cartForm.addControl(product.title, new FormControl(false)))
  }

  onCartFormSubmitted(cartForm: FormGroup, products: ProductModel[]): void {
    this.userId$.subscribe(userIdFromParam => {
      this._cartsService.createNewCart({
        userId: userIdFromParam,
        date: cartForm.get('date')?.value,
        products: products.filter(product => cartForm.get(product.title)?.value).map((data) => {
            return {
              productId: data.id,
              quantity: '1'
            }
          }
        )
      }).subscribe();
    })
  }
}
