/**
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * WARNING: This file is generated automatically by the generateExamples.ts script.
 * DO NOT MODIFY this file directly as your changes will be overwritten.
 */

// Example: subscribeToObjectSetInstructions

import { Employee } from "../../../generatedNoCheck/index.js";
// Edit this import if your client location differs
import { client } from "./client.js";

type subscriptionError = {
    subscriptionClosed: boolean;
    error: any;
}

const subscription = client(Employee).subscribe(
    {
        onChange(update) {
            if (update.state === "ADDED_OR_UPDATED") {
                // An object has received an update or an object was added to the object set
                // Get the object using the $primaryKey from your cache
                // const currentObject = objects[update.object.$primaryKey];
                // use the update.object["<propertyName>"] to update your cache 
                //currentObject["<propertyName>"] = update.object["<propertyName>"] ?? currentObject["<propertyName>"];
            }
            else if (update.state === "REMOVED") {
                // The object was removed from the object set, which could mean it was deleted or no longer meets the filter criteria
                // Remove the object from your cache using the $primaryKey
                // delete objects[update.object.$primaryKey];
            }
        },
        onSuccessfulSubscription() {
            // The subscription was successful and you can expect to receive updates
        },
        onError(err) {
            // There was an error with the subscription and you will not receive any more updates
            throw new Error(err.error instanceof Error ? err.error.message : String(err.error));
        },
        onOutOfDate() {
            // We could not keep track of all changes. Please reload the objects in your set.
        },
    },
    { properties: [ "fullName","salary" ] }
);

// On dismount unsubscribe
subscription.unsubscribe();