import { BaseModelRDMS } from './BaseModel.RDMS';

//
// ToDo's
//
export class ToDo extends BaseModelRDMS {

  /**
   * Constructor
   */
  constructor() {
    let tableName = 'todos';

    /* istanbul ignore next */
    super(tableName);
  }
}
