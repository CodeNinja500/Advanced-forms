import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CartModel} from '../models/cart.model';

@Injectable()
export class CartsService {
  constructor(private _httpClient: HttpClient) {
  }

  createNewCart(cart: Omit<CartModel, 'id'>): Observable<CartModel> {
    return this._httpClient.post<CartModel>('https://fakestoreapi.com/carts', cart);
  }
}
