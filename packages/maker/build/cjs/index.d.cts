import { OntologyIrInterfaceType, InterfaceTypeStatus, SharedPropertyTypeGothamMapping, StructFieldType, ValueTypeApiName, ValueTypeDisplayMetadata, ValueTypeStatus, ValueTypeVersion, BaseType, ValueTypeDataConstraint, ExampleValue, OntologyIrObjectType, Visibility, ApiNameValueTypeReference, OntologyIrPropertyType, DataConstraint, FailureMessage } from '@osdk/client.unstable';

declare function main(args?: string[]): Promise<void>;

type BlueprintIcon = "add-clip" | "add-column-left" | "add-column-right" | "add-location" | "add-row-bottom" | "add-row-top" | "add-to-artifact" | "add-to-folder" | "add" | "aimpoints-target" | "airplane" | "align-center" | "align-justify" | "align-left" | "align-right" | "alignment-bottom" | "alignment-horizontal-center" | "alignment-left" | "alignment-right" | "alignment-top" | "alignment-vertical-center" | "ammunition" | "anchor" | "annotation" | "antenna" | "app-header" | "application" | "applications" | "archive" | "area-of-interest" | "array-boolean" | "array-date" | "array-floating-point" | "array-numeric" | "array-string" | "array-timestamp" | "array" | "arrow-bottom-left" | "arrow-bottom-right" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-top-left" | "arrow-top-right" | "arrow-up" | "arrows-horizontal" | "arrows-vertical" | "asterisk" | "at" | "automatic-updates" | "axle" | "backlink" | "backward-ten" | "badge" | "ban-circle" | "bank-account" | "barcode" | "binary-number" | "blank" | "blocked-person" | "bold" | "book" | "bookmark" | "box" | "briefcase" | "bring-data" | "bring-forward" | "bug" | "buggy" | "build" | "bullseye" | "calculator" | "calendar" | "camera" | "caret-down" | "caret-left" | "caret-right" | "caret-up" | "cargo-ship" | "cell-tower" | "changes" | "chart" | "chat" | "chevron-backward" | "chevron-down" | "chevron-forward" | "chevron-left" | "chevron-right" | "chevron-up" | "circle-arrow-down" | "circle-arrow-left" | "circle-arrow-right" | "circle-arrow-up" | "circle" | "citation" | "clean" | "clip" | "clipboard-file" | "clipboard" | "cloud-download" | "cloud-server" | "cloud-tick" | "cloud-upload" | "cloud" | "code-block" | "code" | "cog" | "collapse-all" | "color-fill" | "column-layout" | "comment" | "comparison" | "compass" | "compressed" | "confirm" | "console" | "contrast" | "control" | "credit-card" | "crop" | "cross-circle" | "cross" | "crown" | "css-style" | "cube-add" | "cube-remove" | "cube" | "curly-braces" | "curved-range-chart" | "cut" | "cycle" | "dashboard" | "data-connection" | "data-lineage" | "data-search" | "data-sync" | "database" | "delete" | "delta" | "derive-column" | "desktop" | "detection" | "diagnosis" | "diagram-tree" | "direction-left" | "direction-right" | "disable" | "divide" | "document-open" | "document-share" | "document" | "dollar" | "dot" | "double-caret-horizontal" | "double-caret-vertical" | "double-chevron-down" | "double-chevron-left" | "double-chevron-right" | "double-chevron-up" | "doughnut-chart" | "download" | "drag-handle-horizontal" | "drag-handle-vertical" | "draw" | "drawer-left-filled" | "drawer-left" | "drawer-right-filled" | "drawer-right" | "drive-time" | "duplicate" | "edit" | "eject" | "emoji" | "endnote" | "endorsed" | "envelope" | "equals" | "eraser" | "error" | "euro" | "excavator" | "exchange" | "exclude-row" | "expand-all" | "explain" | "export" | "eye-off" | "eye-on" | "eye-open" | "fast-backward" | "fast-forward" | "feed-subscribed" | "feed" | "film" | "filter-keep" | "filter-list" | "filter-open" | "filter-remove" | "filter" | "flag" | "flame" | "flash" | "floating-point" | "floppy-disk" | "flow-branch" | "flow-end" | "flow-linear" | "flow-review-branch" | "flow-review" | "flows" | "folder-close" | "folder-new" | "folder-open" | "folder-shared-open" | "folder-shared" | "follower" | "following" | "font" | "fork" | "form" | "forward-ten" | "fuel" | "full-circle" | "full-stacked-chart" | "fullscreen" | "function" | "gantt-chart" | "generate" | "geofence" | "geolocation" | "geosearch" | "geotime" | "git-branch" | "git-commit" | "git-merge" | "git-new-branch" | "git-pull" | "git-push" | "git-repo" | "glass" | "globe-network" | "globe" | "graph-remove" | "graph" | "greater-than-or-equal-to" | "greater-than" | "grid-view" | "grid" | "group-item" | "group-objects" | "grouped-bar-chart" | "hand-down" | "hand-left" | "hand-right" | "hand-up" | "hand" | "hat" | "header-one" | "header-three" | "header-two" | "header" | "headset" | "heart-broken" | "heart" | "heat-grid" | "heatmap" | "helicopter" | "help" | "helper-management" | "high-priority" | "high-voltage-pole" | "highlight" | "history" | "home" | "horizontal-bar-chart-asc" | "horizontal-bar-chart-desc" | "horizontal-bar-chart" | "horizontal-distribution" | "horizontal-inbetween" | "hurricane" | "id-number" | "image-rotate-left" | "image-rotate-right" | "import" | "inbox-filtered" | "inbox-geo" | "inbox-search" | "inbox-update" | "inbox" | "info-sign" | "inheritance" | "inherited-group" | "inner-join" | "input" | "insert" | "intelligence" | "intersection" | "ip-address" | "issue-closed" | "issue-new" | "issue" | "italic" | "join-table" | "key-backspace" | "key-command" | "key-control" | "key-delete" | "key-enter" | "key-escape" | "key-option" | "key-shift" | "key-tab" | "key" | "known-vehicle" | "lab-test" | "label" | "layer-outline" | "layer" | "layers" | "layout-auto" | "layout-balloon" | "layout-bottom-row-three-tiles" | "layout-bottom-row-two-tiles" | "layout-circle" | "layout-grid" | "layout-group-by" | "layout-hierarchy" | "layout-left-column-three-tiles" | "layout-left-column-two-tiles" | "layout-linear" | "layout-right-column-three-tiles" | "layout-right-column-two-tiles" | "layout-skew-grid" | "layout-sorted-clusters" | "layout-three-columns" | "layout-three-rows" | "layout-top-row-three-tiles" | "layout-top-row-two-tiles" | "layout-two-columns" | "layout-two-rows" | "layout" | "learning" | "left-join" | "lengthen-text" | "less-than-or-equal-to" | "less-than" | "lifesaver" | "lightbulb" | "lightning" | "link" | "list-columns" | "list-detail-view" | "list" | "locate" | "lock" | "locomotive" | "log-in" | "log-out" | "low-voltage-pole" | "manual" | "manually-entered-data" | "many-to-many" | "many-to-one" | "map-create" | "map-marker" | "map" | "maximize" | "media" | "menu-closed" | "menu-open" | "menu" | "merge-columns" | "merge-links" | "microphone" | "minimize" | "minus" | "mobile-phone" | "mobile-video" | "modal-filled" | "modal" | "model" | "moon" | "more" | "mountain" | "move" | "mugshot" | "multi-select" | "music" | "nest" | "new-drawing" | "new-grid-item" | "new-layer" | "new-layers" | "new-link" | "new-object" | "new-person" | "new-prescription" | "new-shield" | "new-text-box" | "ninja" | "not-equal-to" | "notifications-snooze" | "notifications-updated" | "notifications" | "numbered-list" | "numerical" | "office" | "offline" | "oil-field" | "one-column" | "one-to-many" | "one-to-one" | "open-application" | "outdated" | "output" | "page-layout" | "panel-stats" | "panel-table" | "paperclip" | "paragraph" | "paste-variable" | "path-search" | "path" | "pause" | "people" | "percentage" | "person" | "phone-call" | "phone-forward" | "phone" | "pie-chart" | "pin" | "pivot-table" | "pivot" | "play" | "playbook" | "plus" | "polygon-filter" | "power" | "predictive-analysis" | "prescription" | "presentation" | "print" | "projects" | "properties" | "property" | "publish-function" | "pulse" | "rain" | "random" | "range-ring" | "record" | "rect-height" | "rect-width" | "rectangle" | "redo" | "refresh" | "regex" | "regression-chart" | "remove-column-left" | "remove-column-right" | "remove-column" | "remove-row-bottom" | "remove-row-top" | "remove" | "repeat" | "reset" | "resolve" | "rig" | "right-join" | "ring" | "rocket-slant" | "rocket" | "rotate-document" | "rotate-page" | "route" | "satellite" | "saved" | "scatter-plot" | "search-around" | "search-template" | "search-text" | "search" | "segmented-control" | "select" | "selection" | "send-backward" | "send-message" | "send-to-graph" | "send-to-map" | "send-to" | "sensor" | "series-add" | "series-configuration" | "series-derived" | "series-filtered" | "series-search" | "settings" | "shapes" | "share" | "shared-filter" | "shield" | "ship" | "shop" | "shopping-cart" | "shorten-text" | "signal-search" | "sim-card" | "slash" | "small-cross" | "small-info-sign" | "small-minus" | "small-plus" | "small-square" | "small-tick" | "snowflake" | "soccer-ball" | "social-media" | "sort-alphabetical-desc" | "sort-alphabetical" | "sort-asc" | "sort-desc" | "sort-numerical-desc" | "sort-numerical" | "sort" | "spell-check" | "split-columns" | "sports-stadium" | "square" | "stacked-chart" | "stadium-geometry" | "star-empty" | "star" | "step-backward" | "step-chart" | "step-forward" | "stop" | "stopwatch" | "strikethrough" | "style" | "subscript" | "superscript" | "swap-horizontal" | "swap-vertical" | "switch" | "symbol-circle" | "symbol-cross" | "symbol-diamond" | "symbol-rectangle" | "symbol-square" | "symbol-triangle-down" | "symbol-triangle-up" | "syringe" | "table-sync" | "tag" | "take-action" | "tank" | "target" | "taxi" | "team" | "temperature" | "text-highlight" | "th-derived" | "th-disconnect" | "th-filtered" | "th-list" | "th" | "third-party" | "thumbs-down" | "thumbs-up" | "tick-circle" | "tick" | "time" | "timeline-area-chart" | "timeline-bar-chart" | "timeline-events" | "timeline-line-chart" | "tint" | "torch" | "tractor" | "train" | "translate" | "trash" | "tree" | "trending-down" | "trending-up" | "trophy" | "truck" | "two-columns" | "unarchive" | "underline" | "undo" | "ungroup-objects" | "unknown-vehicle" | "unlink" | "unlock" | "unpin" | "unresolve" | "updated" | "upload" | "user" | "variable" | "vector" | "vertical-bar-chart-asc" | "vertical-bar-chart-desc" | "vertical-distribution" | "vertical-inbetween" | "video" | "virus" | "volume-down" | "volume-off" | "volume-up" | "walk" | "warning-sign" | "waterfall-chart" | "waves" | "widget-button" | "widget-footer" | "widget-header" | "widget" | "wind" | "wrench" | "zoom-in" | "zoom-out" | "zoom-to-fit";

type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
interface ObjectTypeInner extends Omit<OntologyIrObjectType, "titlePropertyTypeRid" | "propertyTypes" | "allImplementsInterfaces" | "implementsInterfaces2" | "displayMetadata"> {
    properties: Array<ObjectPropertyType>;
    titlePropertyApiName: string;
    implementsInterfaces: Array<InterfaceImplementation>;
    description: string | undefined;
    icon: {
        locator: BlueprintIcon;
        color: string;
    } | undefined;
    displayName: string;
    pluralDisplayName: string;
    visibility: Visibility;
    editsEnabled: boolean;
}
type InterfaceImplementation = {
    implements: InterfaceType;
    propertyMapping: {
        interfaceProperty: string;
        mapsTo: string;
    }[];
};
type ObjectType = RequiredFields<Partial<ObjectTypeInner>, "apiName" | "primaryKeys" | "displayName" | "pluralDisplayName" | "titlePropertyApiName">;
interface ObjectPropertyTypeInner extends Omit<OntologyIrPropertyType, "sharedPropertyTypeApiName" | "type" | "inlineAction" | "sharedPropertyTypeRid" | "valueType" | "ruleSetBinding" | "displayMetadata"> {
    type: PropertyTypeType;
    array?: boolean;
    valueType: string | ValueTypeDefinitionVersion;
    sharedPropertyType: SharedPropertyType;
    description: string | undefined;
    displayName: string;
    visibility: Visibility;
}
type ObjectPropertyType = RequiredFields<Partial<ObjectPropertyTypeInner>, "apiName" | "type" | "displayName">;
interface InterfaceType extends Omit<OntologyIrInterfaceType, "properties" | "allProperties" | "allLinks" | "allExtendsInterfaces" | "propertiesV2"> {
    properties: Record<string, SharedPropertyType>;
    status: InterfaceTypeStatus;
}
interface PropertyType {
    type: PropertyTypeType;
    array?: boolean;
    description?: string;
    displayName?: string;
    valueType?: ApiNameValueTypeReference;
    typeClasses?: TypeClass[];
}
type TypeClass = {
    kind: string;
    name: string;
};
interface SharedPropertyType extends PropertyType {
    apiName: string;
    nonNameSpacedApiName: string;
    gothamMapping?: SharedPropertyTypeGothamMapping;
}
type PropertyTypeType = PropertyTypeTypesWithoutStruct | {
    type: "struct";
    structDefinition: {
        [api_name: string]: StructPropertyType | Exclude<PropertyTypeTypesWithoutStruct, MarkingPropertyType>;
    };
};
type PropertyTypeTypesWithoutStruct = "boolean" | "byte" | "date" | "decimal" | "double" | "float" | "geopoint" | "geoshape" | "integer" | "long" | MarkingPropertyType | "short" | "string" | "timestamp" | "mediaReference";
type MarkingPropertyType = {
    type: "marking";
    markingType: "MANDATORY" | "CBAC";
};
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
interface StructPropertyType extends Optional<Omit<StructFieldType, "fieldType" | "structFieldRid" | "apiName">, "typeClasses" | "aliases"> {
    fieldType: PropertyTypeTypesWithoutStruct;
}
interface ValueTypeType_array {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "array";
        }>["array"];
        failureMessage?: FailureMessage;
    }[];
    type: "array";
    value: {
        type: "array";
        elementType: ValueTypeType["value"];
    };
}
interface ValueTypeType_boolean {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "boolean";
        }>["boolean"];
        failureMessage?: FailureMessage;
    }[];
    type: "boolean";
    value: "boolean";
}
interface ValueTypeType_binary {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "binary";
        }>["binary"];
        failureMessage?: FailureMessage;
    }[];
    type: "binary";
    value: "binary";
}
interface ValueTypeType_byte {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "byte";
        }>["byte"];
        failureMessage?: FailureMessage;
    }[];
    type: "byte";
    value: "byte";
}
interface ValueTypeType_date {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "date";
        }>["date"];
        failureMessage?: FailureMessage;
    }[];
    type: "date";
    value: "date";
}
interface ValueTypeType_decimal {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "decimal";
        }>["decimal"];
        failureMessage?: FailureMessage;
    }[];
    type: "decimal";
    value: "decimal";
}
interface ValueTypeType_double {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "double";
        }>["double"];
        failureMessage?: FailureMessage;
    }[];
    type: "double";
    value: "double";
}
interface ValueTypeType_float {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "float";
        }>["float"];
        failureMessage?: FailureMessage;
    }[];
    type: "float";
    value: "float";
}
interface ValueTypeType_integer {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "integer";
        }>["integer"];
        failureMessage?: FailureMessage;
    }[];
    type: "integer";
    value: "integer";
}
interface ValueTypeType_long {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "long";
        }>["long"];
        failureMessage?: FailureMessage;
    }[];
    type: "long";
    value: "long";
}
interface ValueTypeType_map {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "map";
        }>["map"];
        failureMessage?: FailureMessage;
    }[];
    type: "map";
    value: {
        type: "map";
        keyType: ValueTypeType["value"];
        valueType: ValueTypeType["value"];
    };
}
interface ValueTypeType_optional {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "optional";
        }>["optional"];
        failureMessage?: FailureMessage;
    }[];
    type: "optional";
    value: {
        type: "optional";
        wrappedType: ValueTypeType["value"];
    };
}
interface ValueTypeType_short {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "short";
        }>["short"];
        failureMessage?: FailureMessage;
    }[];
    type: "short";
    value: "short";
}
interface ValueTypeType_string {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "string";
        }>["string"];
        failureMessage?: FailureMessage;
    }[];
    type: "string";
    value: "string";
}
interface ValueTypeType_structV2 {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "structV2";
        }>["structV2"];
        failureMessage?: FailureMessage;
    }[];
    type: "structV2";
    value: {
        type: "struct";
        fields: Array<{
            identifier: string;
            baseType: ValueTypeType["value"];
        }>;
    };
}
interface ValueTypeType_timestamp {
    constraints: {
        constraint: Extract<DataConstraint, {
            type: "timestamp";
        }>["timestamp"];
        failureMessage?: FailureMessage;
    }[];
    type: "timestamp";
    value: "timestamp";
}
type ValueTypeType = ValueTypeType_array | ValueTypeType_boolean | ValueTypeType_binary | ValueTypeType_byte | ValueTypeType_date | ValueTypeType_decimal | ValueTypeType_double | ValueTypeType_float | ValueTypeType_integer | ValueTypeType_long | ValueTypeType_map | ValueTypeType_optional | ValueTypeType_short | ValueTypeType_string | ValueTypeType_structV2 | ValueTypeType_timestamp;
type ValueTypeDefinitionVersion = {
    apiName: ValueTypeApiName;
    displayMetadata: ValueTypeDisplayMetadata;
    status: ValueTypeStatus;
    version: ValueTypeVersion;
    baseType: BaseType;
    constraints: ValueTypeDataConstraint[];
    exampleValues: ExampleValue[];
};

/**
 * Defines a foreign shared property type you want to take as an input to your product. The typeHint field is used for OSDK generation
 */
declare function importSharedPropertyType(opts: {
    apiName: string;
    packageName?: string;
    typeHint: PropertyTypeType;
}): SharedPropertyType;

type SimplifiedInterfaceTypeStatus = {
    type: "deprecated";
    message: string;
    deadline: string;
} | {
    type: "active";
} | {
    type: "experimental";
};
declare function defineInterface(opts: {
    apiName: string;
    displayName?: string;
    description?: string;
    icon?: {
        locator: BlueprintIcon;
        color: string;
    };
    status?: SimplifiedInterfaceTypeStatus;
    properties?: Record<string, SharedPropertyType | PropertyTypeType>;
    extends?: InterfaceType | InterfaceType[] | string | string[];
}): InterfaceType;

type ApiNameOrInterfaceType = string | InterfaceType;
type Many = {
    apiName: string;
    from: InterfaceType;
    toMany: ApiNameOrInterfaceType;
    toOne?: never;
    displayName?: string;
    description?: string;
    required?: boolean;
};
type One = {
    apiName: string;
    from: InterfaceType;
    toOne: ApiNameOrInterfaceType;
    toMany?: never;
    displayName?: string;
    description?: string;
    required?: boolean;
};
declare function defineInterfaceLinkConstraint(linkDef: One | Many): void;

declare function defineObject(objectDef: ObjectType): ObjectType;

declare function defineSharedPropertyType(opts: {
    apiName: string;
    type: PropertyTypeType;
    array?: boolean;
    description?: string;
    displayName?: string;
    valueType?: ApiNameValueTypeReference;
    typeClasses?: SharedPropertyType["typeClasses"];
    gothamMapping?: SharedPropertyTypeGothamMapping;
}): SharedPropertyType;

type NewValueTypeDefinitionBacking = {
    [Type in ValueTypeType as Type["type"]]: {
        type: Type["value"];
        constraints?: Type["constraints"];
    };
};
type NewValueTypeDefinition = NewValueTypeDefinitionBacking[keyof NewValueTypeDefinitionBacking];
declare function defineValueType(opts: {
    apiName: string;
    displayName: string;
    description?: string;
    type: NewValueTypeDefinition;
    version: string;
}): ValueTypeDefinitionVersion;

export { main as default, defineInterface, defineInterfaceLinkConstraint, defineObject, defineSharedPropertyType, defineValueType, importSharedPropertyType };
