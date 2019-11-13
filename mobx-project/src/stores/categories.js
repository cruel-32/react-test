import { observable, action } from 'mobx';
import {getCategories} from 'api/category';

export default class CategoryStore {
  @observable categories = [];
  
  constructor(root) {
    this.root = root;
  }

  @action
  getCategories = async (parentId='') => {
    const {data} = await getCategories(parentId);
    this.categories = data;
  };
}
