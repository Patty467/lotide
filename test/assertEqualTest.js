const assertEqual = require("../assertEqual");

assertEqual("abc", "abc");
assertEqual(1, 1);
assertEqual(1, "1");
assertEqual("abc", "abd");