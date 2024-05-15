import { LightningElement } from "lwc";

export default class simple extends LightningElement {
  // Variables used in HTML are declared here
  name = "catName";
  description = "A cute little cat";
  pictureUrl = "https://github.com/Sorab0428/LWC-beginners-guide/blob/master/cat.jpeg?raw=true";
  tag1 = "picture";
  tag2 = "cute";
  tag3 = "cat";
  ready = true;
}