export class PropHelper {
  strToBool(str: string | boolean): boolean {
    if (typeof str === 'boolean') {
      return str;
    }
    return str === 'true';
  }

  strToObj(str: object | string | false): object | false {
    if (!str) {
      return false;
    }
    if (typeof str === 'string') {
      return JSON.parse(str);
    }
    return str;
  }
}

export const propHelper = new PropHelper();
