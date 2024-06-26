import ConfigDefinitionInterface from "../Config/ConfigDefinitionInterface"

export default class CrossSectionTerrainConfigDefinitionObject extends ConfigDefinitionInterface {
  // eslint-disable-next-line no-undef
  static key = "lines"

  // eslint-disable-next-line no-undef
  static defaults = {
    strokeColor: "black",
    strokeWidth: 1,
    fillBelowLine: 1
  }

  /**
   * @param {Object} definition_object
   * @param {ParentInfo} parent_info
   */
  constructor(definition_object, parent_info) {
    super(definition_object, parent_info)

    this.strokeColor_ =
      CrossSectionTerrainConfigDefinitionObject.defaults.strokeColor
    if (Object.hasOwn(definition_object, "strokeColor")) {
      this.strokeColor_ = definition_object.strokeColor
    }
    this.strokeWidth_ =
      CrossSectionTerrainConfigDefinitionObject.defaults.strokeWidth
    if (Object.hasOwn(definition_object, "strokeWidth")) {
      this.strokeWidth_ = definition_object.strokeWidth
    }
    this.fillBelowLine_ =
      CrossSectionTerrainConfigDefinitionObject.defaults.fillBelowLine
    if (Object.hasOwn(definition_object, "fillBelowLine")) {
      this.fillBelowLine_ = definition_object.fillBelowLine
    }
  }

  get color() {
    return this.color
  }

  get fill() {
    return this.fill_
  }

  get strokeColor() {
    return this.strokeColor_
  }

  get strokeWidth() {
    return this.strokeWidth_
  }

  get fillBelowLine() {
    return this.fillBelowLine_
  }
}
