import { LightningElement } from "lwc";

export default class simple extends LightningElement {
  // Variables used in HTML are declared here
  name = "catName";
  description = "A cute little cat";
  pictureUrl = "\cat.jpeg";
  tag1 = "picture";
  tag2 = "cute";
  tag3 = "cat";
  ready = true;
}