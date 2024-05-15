import { LightningElement } from "lwc";

export default class simple extends LightningElement {
  // Variables used in HTML are declared here
  name = "catName";
  description = "A cute little cat";
  pictureUrl = "https://raw.githubusercontent.com/Sorab0428/study/main/cat.jpeg?token=GHSAT0AAAAAACSDPNNWGI33CIGQVGR63NOQZSEKKKQ";
  tag1 = "picture";
  tag2 = "cute";
  tag3 = "cat";
  ready = true;
}