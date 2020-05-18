// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-typescript.js.
import { name as packageName } from "meteor/refapp:meteor-typescript";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-typescript - example', function (test) {
  test.equal(packageName, "meteor-typescript");
});
