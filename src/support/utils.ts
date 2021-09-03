/**
 * Method to create deep copy of object.
 * @param object: any
 * @return any
 */
// eslint-disable-next-line
export default function HDeepCopy(object: any): any {
  return JSON.parse(JSON.stringify(object));
}
