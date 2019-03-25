import { IStudent } from './student';

export interface ICourse {
  reference?: string;
  code?: string;
  name?: string;
  type?: string;
  students?: IStudent[];
  professor?: any;
}
