import ContinuousScale from "./ContinuousScale"
import ScaleType from "../Enums/ScaleType"

export default class LinearScale extends ContinuousScale {
  /**
   * @param {Object} scale_definition_object
   * @param {ParentInfo} parent_info
   */
  constructor(scale_definition_object, parent_info) {
    super(scale_definition_object, ScaleType.kLinear, parent_info)
  }
}
