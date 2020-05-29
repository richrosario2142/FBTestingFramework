$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("facebooklogin.feature");
formatter.feature({
  "line": 1,
  "name": "Create Facebook Account",
  "description": "As a user I want to be able to successfully create a facebook account",
  "id": "create-facebook-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4104411200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate first name field",
  "description": "",
  "id": "create-facebook-account;validate-first-name-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is on the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the following in the corresponding fields",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 7
    },
    {
      "cells": [
        "First Name",
        "Tom"
      ],
      "line": 8
    },
    {
      "cells": [
        "Last Name",
        "JLONG"
      ],
      "line": 9
    },
    {
      "cells": [
        "Email Address",
        "someone@someone.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Password",
        "Password1"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The user sees that his name is present in the username field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_on_the_facebook_login_page()"
});
formatter.result({
  "duration": 1530468300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_enters_the_following_in_the_corresponding_fields(DataTable)"
});
formatter.result({
  "duration": 543893700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.the_user_sees_that_his_name_is_present_in_the_username_field()"
});
formatter.result({
  "duration": 85917500,
  "status": "passed"
});
formatter.after({
  "duration": 633502700,
  "status": "passed"
});
});