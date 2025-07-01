import { addAttributeOptions } from 'sequelize-typescript';

export function ToNumber(target: any, propertyKey: string): any {
  addAttributeOptions(target, propertyKey, {
    get(): any {
      // converter e pegar numero
      return +this.getDataValue(propertyKey);
    },
  });
}
