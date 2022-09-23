class Desk {
  constructor(numDrawers, deskSize) {
    this.color = "White";
    this.size = deskSize;
    this.drawers = numDrawers;
  }

}

var thisDesk = new Desk(2, "Large");

var anotherDesk = new Desk(4, "Small");

var thirdDesk = new Desk(3);
