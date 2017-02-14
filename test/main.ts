import * as db from "../src/db";
import * as chai from "chai";

import integrationTests from "./integration";
import unitTests from "./unit";

describe('Main', function(){
    unitTests();    
    integrationTests();
});