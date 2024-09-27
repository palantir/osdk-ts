/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
 */

// This copy paste is bad but fine for now
export type BlueprintIcon =
  | "add-clip"
  | "add-column-left"
  | "add-column-right"
  | "add-location"
  | "add-row-bottom"
  | "add-row-top"
  | "add-to-artifact"
  | "add-to-folder"
  | "add"
  | "aimpoints-target"
  | "airplane"
  | "align-center"
  | "align-justify"
  | "align-left"
  | "align-right"
  | "alignment-bottom"
  | "alignment-horizontal-center"
  | "alignment-left"
  | "alignment-right"
  | "alignment-top"
  | "alignment-vertical-center"
  | "ammunition"
  | "anchor"
  | "annotation"
  | "antenna"
  | "app-header"
  | "application"
  | "applications"
  | "archive"
  | "area-of-interest"
  | "array-boolean"
  | "array-date"
  | "array-floating-point"
  | "array-numeric"
  | "array-string"
  | "array-timestamp"
  | "array"
  | "arrow-bottom-left"
  | "arrow-bottom-right"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-top-left"
  | "arrow-top-right"
  | "arrow-up"
  | "arrows-horizontal"
  | "arrows-vertical"
  | "asterisk"
  | "at"
  | "automatic-updates"
  | "axle"
  | "backlink"
  | "backward-ten"
  | "badge"
  | "ban-circle"
  | "bank-account"
  | "barcode"
  | "binary-number"
  | "blank"
  | "blocked-person"
  | "bold"
  | "book"
  | "bookmark"
  | "box"
  | "briefcase"
  | "bring-data"
  | "bring-forward"
  | "bug"
  | "buggy"
  | "build"
  | "bullseye"
  | "calculator"
  | "calendar"
  | "camera"
  | "caret-down"
  | "caret-left"
  | "caret-right"
  | "caret-up"
  | "cargo-ship"
  | "cell-tower"
  | "changes"
  | "chart"
  | "chat"
  | "chevron-backward"
  | "chevron-down"
  | "chevron-forward"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "circle-arrow-down"
  | "circle-arrow-left"
  | "circle-arrow-right"
  | "circle-arrow-up"
  | "circle"
  | "citation"
  | "clean"
  | "clip"
  | "clipboard-file"
  | "clipboard"
  | "cloud-download"
  | "cloud-server"
  | "cloud-tick"
  | "cloud-upload"
  | "cloud"
  | "code-block"
  | "code"
  | "cog"
  | "collapse-all"
  | "color-fill"
  | "column-layout"
  | "comment"
  | "comparison"
  | "compass"
  | "compressed"
  | "confirm"
  | "console"
  | "contrast"
  | "control"
  | "credit-card"
  | "crop"
  | "cross-circle"
  | "cross"
  | "crown"
  | "css-style"
  | "cube-add"
  | "cube-remove"
  | "cube"
  | "curly-braces"
  | "curved-range-chart"
  | "cut"
  | "cycle"
  | "dashboard"
  | "data-connection"
  | "data-lineage"
  | "data-search"
  | "data-sync"
  | "database"
  | "delete"
  | "delta"
  | "derive-column"
  | "desktop"
  | "detection"
  | "diagnosis"
  | "diagram-tree"
  | "direction-left"
  | "direction-right"
  | "disable"
  | "divide"
  | "document-open"
  | "document-share"
  | "document"
  | "dollar"
  | "dot"
  | "double-caret-horizontal"
  | "double-caret-vertical"
  | "double-chevron-down"
  | "double-chevron-left"
  | "double-chevron-right"
  | "double-chevron-up"
  | "doughnut-chart"
  | "download"
  | "drag-handle-horizontal"
  | "drag-handle-vertical"
  | "draw"
  | "drawer-left-filled"
  | "drawer-left"
  | "drawer-right-filled"
  | "drawer-right"
  | "drive-time"
  | "duplicate"
  | "edit"
  | "eject"
  | "emoji"
  | "endnote"
  | "endorsed"
  | "envelope"
  | "equals"
  | "eraser"
  | "error"
  | "euro"
  | "excavator"
  | "exchange"
  | "exclude-row"
  | "expand-all"
  | "explain"
  | "export"
  | "eye-off"
  | "eye-on"
  | "eye-open"
  | "fast-backward"
  | "fast-forward"
  | "feed-subscribed"
  | "feed"
  | "film"
  | "filter-keep"
  | "filter-list"
  | "filter-open"
  | "filter-remove"
  | "filter"
  | "flag"
  | "flame"
  | "flash"
  | "floating-point"
  | "floppy-disk"
  | "flow-branch"
  | "flow-end"
  | "flow-linear"
  | "flow-review-branch"
  | "flow-review"
  | "flows"
  | "folder-close"
  | "folder-new"
  | "folder-open"
  | "folder-shared-open"
  | "folder-shared"
  | "follower"
  | "following"
  | "font"
  | "fork"
  | "form"
  | "forward-ten"
  | "fuel"
  | "full-circle"
  | "full-stacked-chart"
  | "fullscreen"
  | "function"
  | "gantt-chart"
  | "generate"
  | "geofence"
  | "geolocation"
  | "geosearch"
  | "geotime"
  | "git-branch"
  | "git-commit"
  | "git-merge"
  | "git-new-branch"
  | "git-pull"
  | "git-push"
  | "git-repo"
  | "glass"
  | "globe-network"
  | "globe"
  | "graph-remove"
  | "graph"
  | "greater-than-or-equal-to"
  | "greater-than"
  | "grid-view"
  | "grid"
  | "group-item"
  | "group-objects"
  | "grouped-bar-chart"
  | "hand-down"
  | "hand-left"
  | "hand-right"
  | "hand-up"
  | "hand"
  | "hat"
  | "header-one"
  | "header-three"
  | "header-two"
  | "header"
  | "headset"
  | "heart-broken"
  | "heart"
  | "heat-grid"
  | "heatmap"
  | "helicopter"
  | "help"
  | "helper-management"
  | "high-priority"
  | "high-voltage-pole"
  | "highlight"
  | "history"
  | "home"
  | "horizontal-bar-chart-asc"
  | "horizontal-bar-chart-desc"
  | "horizontal-bar-chart"
  | "horizontal-distribution"
  | "horizontal-inbetween"
  | "hurricane"
  | "id-number"
  | "image-rotate-left"
  | "image-rotate-right"
  | "import"
  | "inbox-filtered"
  | "inbox-geo"
  | "inbox-search"
  | "inbox-update"
  | "inbox"
  | "info-sign"
  | "inheritance"
  | "inherited-group"
  | "inner-join"
  | "input"
  | "insert"
  | "intelligence"
  | "intersection"
  | "ip-address"
  | "issue-closed"
  | "issue-new"
  | "issue"
  | "italic"
  | "join-table"
  | "key-backspace"
  | "key-command"
  | "key-control"
  | "key-delete"
  | "key-enter"
  | "key-escape"
  | "key-option"
  | "key-shift"
  | "key-tab"
  | "key"
  | "known-vehicle"
  | "lab-test"
  | "label"
  | "layer-outline"
  | "layer"
  | "layers"
  | "layout-auto"
  | "layout-balloon"
  | "layout-bottom-row-three-tiles"
  | "layout-bottom-row-two-tiles"
  | "layout-circle"
  | "layout-grid"
  | "layout-group-by"
  | "layout-hierarchy"
  | "layout-left-column-three-tiles"
  | "layout-left-column-two-tiles"
  | "layout-linear"
  | "layout-right-column-three-tiles"
  | "layout-right-column-two-tiles"
  | "layout-skew-grid"
  | "layout-sorted-clusters"
  | "layout-three-columns"
  | "layout-three-rows"
  | "layout-top-row-three-tiles"
  | "layout-top-row-two-tiles"
  | "layout-two-columns"
  | "layout-two-rows"
  | "layout"
  | "learning"
  | "left-join"
  | "lengthen-text"
  | "less-than-or-equal-to"
  | "less-than"
  | "lifesaver"
  | "lightbulb"
  | "lightning"
  | "link"
  | "list-columns"
  | "list-detail-view"
  | "list"
  | "locate"
  | "lock"
  | "locomotive"
  | "log-in"
  | "log-out"
  | "low-voltage-pole"
  | "manual"
  | "manually-entered-data"
  | "many-to-many"
  | "many-to-one"
  | "map-create"
  | "map-marker"
  | "map"
  | "maximize"
  | "media"
  | "menu-closed"
  | "menu-open"
  | "menu"
  | "merge-columns"
  | "merge-links"
  | "microphone"
  | "minimize"
  | "minus"
  | "mobile-phone"
  | "mobile-video"
  | "modal-filled"
  | "modal"
  | "model"
  | "moon"
  | "more"
  | "mountain"
  | "move"
  | "mugshot"
  | "multi-select"
  | "music"
  | "nest"
  | "new-drawing"
  | "new-grid-item"
  | "new-layer"
  | "new-layers"
  | "new-link"
  | "new-object"
  | "new-person"
  | "new-prescription"
  | "new-shield"
  | "new-text-box"
  | "ninja"
  | "not-equal-to"
  | "notifications-snooze"
  | "notifications-updated"
  | "notifications"
  | "numbered-list"
  | "numerical"
  | "office"
  | "offline"
  | "oil-field"
  | "one-column"
  | "one-to-many"
  | "one-to-one"
  | "open-application"
  | "outdated"
  | "output"
  | "page-layout"
  | "panel-stats"
  | "panel-table"
  | "paperclip"
  | "paragraph"
  | "paste-variable"
  | "path-search"
  | "path"
  | "pause"
  | "people"
  | "percentage"
  | "person"
  | "phone-call"
  | "phone-forward"
  | "phone"
  | "pie-chart"
  | "pin"
  | "pivot-table"
  | "pivot"
  | "play"
  | "playbook"
  | "plus"
  | "polygon-filter"
  | "power"
  | "predictive-analysis"
  | "prescription"
  | "presentation"
  | "print"
  | "projects"
  | "properties"
  | "property"
  | "publish-function"
  | "pulse"
  | "rain"
  | "random"
  | "range-ring"
  | "record"
  | "rect-height"
  | "rect-width"
  | "rectangle"
  | "redo"
  | "refresh"
  | "regex"
  | "regression-chart"
  | "remove-column-left"
  | "remove-column-right"
  | "remove-column"
  | "remove-row-bottom"
  | "remove-row-top"
  | "remove"
  | "repeat"
  | "reset"
  | "resolve"
  | "rig"
  | "right-join"
  | "ring"
  | "rocket-slant"
  | "rocket"
  | "rotate-document"
  | "rotate-page"
  | "route"
  | "satellite"
  | "saved"
  | "scatter-plot"
  | "search-around"
  | "search-template"
  | "search-text"
  | "search"
  | "segmented-control"
  | "select"
  | "selection"
  | "send-backward"
  | "send-message"
  | "send-to-graph"
  | "send-to-map"
  | "send-to"
  | "sensor"
  | "series-add"
  | "series-configuration"
  | "series-derived"
  | "series-filtered"
  | "series-search"
  | "settings"
  | "shapes"
  | "share"
  | "shared-filter"
  | "shield"
  | "ship"
  | "shop"
  | "shopping-cart"
  | "shorten-text"
  | "signal-search"
  | "sim-card"
  | "slash"
  | "small-cross"
  | "small-info-sign"
  | "small-minus"
  | "small-plus"
  | "small-square"
  | "small-tick"
  | "snowflake"
  | "soccer-ball"
  | "social-media"
  | "sort-alphabetical-desc"
  | "sort-alphabetical"
  | "sort-asc"
  | "sort-desc"
  | "sort-numerical-desc"
  | "sort-numerical"
  | "sort"
  | "spell-check"
  | "split-columns"
  | "sports-stadium"
  | "square"
  | "stacked-chart"
  | "stadium-geometry"
  | "star-empty"
  | "star"
  | "step-backward"
  | "step-chart"
  | "step-forward"
  | "stop"
  | "stopwatch"
  | "strikethrough"
  | "style"
  | "subscript"
  | "superscript"
  | "swap-horizontal"
  | "swap-vertical"
  | "switch"
  | "symbol-circle"
  | "symbol-cross"
  | "symbol-diamond"
  | "symbol-rectangle"
  | "symbol-square"
  | "symbol-triangle-down"
  | "symbol-triangle-up"
  | "syringe"
  | "table-sync"
  | "tag"
  | "take-action"
  | "tank"
  | "target"
  | "taxi"
  | "team"
  | "temperature"
  | "text-highlight"
  | "th-derived"
  | "th-disconnect"
  | "th-filtered"
  | "th-list"
  | "th"
  | "third-party"
  | "thumbs-down"
  | "thumbs-up"
  | "tick-circle"
  | "tick"
  | "time"
  | "timeline-area-chart"
  | "timeline-bar-chart"
  | "timeline-events"
  | "timeline-line-chart"
  | "tint"
  | "torch"
  | "tractor"
  | "train"
  | "translate"
  | "trash"
  | "tree"
  | "trending-down"
  | "trending-up"
  | "trophy"
  | "truck"
  | "two-columns"
  | "unarchive"
  | "underline"
  | "undo"
  | "ungroup-objects"
  | "unknown-vehicle"
  | "unlink"
  | "unlock"
  | "unpin"
  | "unresolve"
  | "updated"
  | "upload"
  | "user"
  | "variable"
  | "vector"
  | "vertical-bar-chart-asc"
  | "vertical-bar-chart-desc"
  | "vertical-distribution"
  | "vertical-inbetween"
  | "video"
  | "virus"
  | "volume-down"
  | "volume-off"
  | "volume-up"
  | "walk"
  | "warning-sign"
  | "waterfall-chart"
  | "waves"
  | "widget-button"
  | "widget-footer"
  | "widget-header"
  | "widget"
  | "wind"
  | "wrench"
  | "zoom-in"
  | "zoom-out"
  | "zoom-to-fit";

export type BlueprintIcons_16Key =
  | "AddClip"
  | "AddColumnLeft"
  | "AddColumnRight"
  | "AddLocation"
  | "AddRowBottom"
  | "AddRowTop"
  | "AddToArtifact"
  | "AddToFolder"
  | "Add"
  | "AimpointsTarget"
  | "Airplane"
  | "AlignCenter"
  | "AlignJustify"
  | "AlignLeft"
  | "AlignRight"
  | "AlignmentBottom"
  | "AlignmentHorizontalCenter"
  | "AlignmentLeft"
  | "AlignmentRight"
  | "AlignmentTop"
  | "AlignmentVerticalCenter"
  | "Ammunition"
  | "Anchor"
  | "Annotation"
  | "Antenna"
  | "AppHeader"
  | "Application"
  | "Applications"
  | "Archive"
  | "AreaOfInterest"
  | "ArrayBoolean"
  | "ArrayDate"
  | "ArrayFloatingPoint"
  | "ArrayNumeric"
  | "ArrayString"
  | "ArrayTimestamp"
  | "Array"
  | "ArrowBottomLeft"
  | "ArrowBottomRight"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowTopLeft"
  | "ArrowTopRight"
  | "ArrowUp"
  | "ArrowsHorizontal"
  | "ArrowsVertical"
  | "Asterisk"
  | "At"
  | "AutomaticUpdates"
  | "Axle"
  | "Backlink"
  | "BackwardTen"
  | "Badge"
  | "BanCircle"
  | "BankAccount"
  | "Barcode"
  | "BinaryNumber"
  | "Blank"
  | "BlockedPerson"
  | "Bold"
  | "Book"
  | "Bookmark"
  | "Box"
  | "Briefcase"
  | "BringData"
  | "BringForward"
  | "Bug"
  | "Buggy"
  | "Build"
  | "Bullseye"
  | "Calculator"
  | "Calendar"
  | "Camera"
  | "CaretDown"
  | "CaretLeft"
  | "CaretRight"
  | "CaretUp"
  | "CargoShip"
  | "CellTower"
  | "Changes"
  | "Chart"
  | "Chat"
  | "ChevronBackward"
  | "ChevronDown"
  | "ChevronForward"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "CircleArrowDown"
  | "CircleArrowLeft"
  | "CircleArrowRight"
  | "CircleArrowUp"
  | "Circle"
  | "Citation"
  | "Clean"
  | "Clip"
  | "ClipboardFile"
  | "Clipboard"
  | "CloudDownload"
  | "CloudServer"
  | "CloudTick"
  | "CloudUpload"
  | "Cloud"
  | "CodeBlock"
  | "Code"
  | "Cog"
  | "CollapseAll"
  | "ColorFill"
  | "ColumnLayout"
  | "Comment"
  | "Comparison"
  | "Compass"
  | "Compressed"
  | "Confirm"
  | "Console"
  | "Contrast"
  | "Control"
  | "CreditCard"
  | "Crop"
  | "CrossCircle"
  | "Cross"
  | "Crown"
  | "CssStyle"
  | "CubeAdd"
  | "CubeRemove"
  | "Cube"
  | "CurlyBraces"
  | "CurvedRangeChart"
  | "Cut"
  | "Cycle"
  | "Dashboard"
  | "DataConnection"
  | "DataLineage"
  | "DataSearch"
  | "DataSync"
  | "Database"
  | "Delete"
  | "Delta"
  | "DeriveColumn"
  | "Desktop"
  | "Detection"
  | "Diagnosis"
  | "DiagramTree"
  | "DirectionLeft"
  | "DirectionRight"
  | "Disable"
  | "Divide"
  | "DocumentOpen"
  | "DocumentShare"
  | "Document"
  | "Dollar"
  | "Dot"
  | "DoubleCaretHorizontal"
  | "DoubleCaretVertical"
  | "DoubleChevronDown"
  | "DoubleChevronLeft"
  | "DoubleChevronRight"
  | "DoubleChevronUp"
  | "DoughnutChart"
  | "Download"
  | "DragHandleHorizontal"
  | "DragHandleVertical"
  | "Draw"
  | "DrawerLeftFilled"
  | "DrawerLeft"
  | "DrawerRightFilled"
  | "DrawerRight"
  | "DriveTime"
  | "Duplicate"
  | "Edit"
  | "Eject"
  | "Emoji"
  | "Endnote"
  | "Endorsed"
  | "Envelope"
  | "Equals"
  | "Eraser"
  | "Error"
  | "Euro"
  | "Excavator"
  | "Exchange"
  | "ExcludeRow"
  | "ExpandAll"
  | "Explain"
  | "Export"
  | "EyeOff"
  | "EyeOn"
  | "EyeOpen"
  | "FastBackward"
  | "FastForward"
  | "FeedSubscribed"
  | "Feed"
  | "Film"
  | "FilterKeep"
  | "FilterList"
  | "FilterOpen"
  | "FilterRemove"
  | "Filter"
  | "Flag"
  | "Flame"
  | "Flash"
  | "FloatingPoint"
  | "FloppyDisk"
  | "FlowBranch"
  | "FlowEnd"
  | "FlowLinear"
  | "FlowReviewBranch"
  | "FlowReview"
  | "Flows"
  | "FolderClose"
  | "FolderNew"
  | "FolderOpen"
  | "FolderSharedOpen"
  | "FolderShared"
  | "Follower"
  | "Following"
  | "Font"
  | "Fork"
  | "Form"
  | "ForwardTen"
  | "Fuel"
  | "FullCircle"
  | "FullStackedChart"
  | "Fullscreen"
  | "Function"
  | "GanttChart"
  | "Generate"
  | "Geofence"
  | "Geolocation"
  | "Geosearch"
  | "Geotime"
  | "GitBranch"
  | "GitCommit"
  | "GitMerge"
  | "GitNewBranch"
  | "GitPull"
  | "GitPush"
  | "GitRepo"
  | "Glass"
  | "GlobeNetwork"
  | "Globe"
  | "GraphRemove"
  | "Graph"
  | "GreaterThanOrEqualTo"
  | "GreaterThan"
  | "GridView"
  | "Grid"
  | "GroupItem"
  | "GroupObjects"
  | "GroupedBarChart"
  | "HandDown"
  | "HandLeft"
  | "HandRight"
  | "HandUp"
  | "Hand"
  | "Hat"
  | "HeaderOne"
  | "HeaderThree"
  | "HeaderTwo"
  | "Header"
  | "Headset"
  | "HeartBroken"
  | "Heart"
  | "HeatGrid"
  | "Heatmap"
  | "Helicopter"
  | "Help"
  | "HelperManagement"
  | "HighPriority"
  | "HighVoltagePole"
  | "Highlight"
  | "History"
  | "Home"
  | "HorizontalBarChartAsc"
  | "HorizontalBarChartDesc"
  | "HorizontalBarChart"
  | "HorizontalDistribution"
  | "HorizontalInbetween"
  | "Hurricane"
  | "IdNumber"
  | "ImageRotateLeft"
  | "ImageRotateRight"
  | "Import"
  | "InboxFiltered"
  | "InboxGeo"
  | "InboxSearch"
  | "InboxUpdate"
  | "Inbox"
  | "InfoSign"
  | "Inheritance"
  | "InheritedGroup"
  | "InnerJoin"
  | "Input"
  | "Insert"
  | "Intelligence"
  | "Intersection"
  | "IpAddress"
  | "IssueClosed"
  | "IssueNew"
  | "Issue"
  | "Italic"
  | "JoinTable"
  | "KeyBackspace"
  | "KeyCommand"
  | "KeyControl"
  | "KeyDelete"
  | "KeyEnter"
  | "KeyEscape"
  | "KeyOption"
  | "KeyShift"
  | "KeyTab"
  | "Key"
  | "KnownVehicle"
  | "LabTest"
  | "Label"
  | "LayerOutline"
  | "Layer"
  | "Layers"
  | "LayoutAuto"
  | "LayoutBalloon"
  | "LayoutBottomRowThreeTiles"
  | "LayoutBottomRowTwoTiles"
  | "LayoutCircle"
  | "LayoutGrid"
  | "LayoutGroupBy"
  | "LayoutHierarchy"
  | "LayoutLeftColumnThreeTiles"
  | "LayoutLeftColumnTwoTiles"
  | "LayoutLinear"
  | "LayoutRightColumnThreeTiles"
  | "LayoutRightColumnTwoTiles"
  | "LayoutSkewGrid"
  | "LayoutSortedClusters"
  | "LayoutThreeColumns"
  | "LayoutThreeRows"
  | "LayoutTopRowThreeTiles"
  | "LayoutTopRowTwoTiles"
  | "LayoutTwoColumns"
  | "LayoutTwoRows"
  | "Layout"
  | "Learning"
  | "LeftJoin"
  | "LengthenText"
  | "LessThanOrEqualTo"
  | "LessThan"
  | "Lifesaver"
  | "Lightbulb"
  | "Lightning"
  | "Link"
  | "ListColumns"
  | "ListDetailView"
  | "List"
  | "Locate"
  | "Lock"
  | "Locomotive"
  | "LogIn"
  | "LogOut"
  | "LowVoltagePole"
  | "Manual"
  | "ManuallyEnteredData"
  | "ManyToMany"
  | "ManyToOne"
  | "MapCreate"
  | "MapMarker"
  | "Map"
  | "Maximize"
  | "Media"
  | "MenuClosed"
  | "MenuOpen"
  | "Menu"
  | "MergeColumns"
  | "MergeLinks"
  | "Microphone"
  | "Minimize"
  | "Minus"
  | "MobilePhone"
  | "MobileVideo"
  | "ModalFilled"
  | "Modal"
  | "Model"
  | "Moon"
  | "More"
  | "Mountain"
  | "Move"
  | "Mugshot"
  | "MultiSelect"
  | "Music"
  | "Nest"
  | "NewDrawing"
  | "NewGridItem"
  | "NewLayer"
  | "NewLayers"
  | "NewLink"
  | "NewObject"
  | "NewPerson"
  | "NewPrescription"
  | "NewShield"
  | "NewTextBox"
  | "Ninja"
  | "NotEqualTo"
  | "NotificationsSnooze"
  | "NotificationsUpdated"
  | "Notifications"
  | "NumberedList"
  | "Numerical"
  | "Office"
  | "Offline"
  | "OilField"
  | "OneColumn"
  | "OneToMany"
  | "OneToOne"
  | "OpenApplication"
  | "Outdated"
  | "Output"
  | "PageLayout"
  | "PanelStats"
  | "PanelTable"
  | "Paperclip"
  | "Paragraph"
  | "PasteVariable"
  | "PathSearch"
  | "Path"
  | "Pause"
  | "People"
  | "Percentage"
  | "Person"
  | "PhoneCall"
  | "PhoneForward"
  | "Phone"
  | "PieChart"
  | "Pin"
  | "PivotTable"
  | "Pivot"
  | "Play"
  | "Playbook"
  | "Plus"
  | "PolygonFilter"
  | "Power"
  | "PredictiveAnalysis"
  | "Prescription"
  | "Presentation"
  | "Print"
  | "Projects"
  | "Properties"
  | "Property"
  | "PublishFunction"
  | "Pulse"
  | "Rain"
  | "Random"
  | "RangeRing"
  | "Record"
  | "RectHeight"
  | "RectWidth"
  | "Rectangle"
  | "Redo"
  | "Refresh"
  | "Regex"
  | "RegressionChart"
  | "RemoveColumnLeft"
  | "RemoveColumnRight"
  | "RemoveColumn"
  | "RemoveRowBottom"
  | "RemoveRowTop"
  | "Remove"
  | "Repeat"
  | "Reset"
  | "Resolve"
  | "Rig"
  | "RightJoin"
  | "Ring"
  | "RocketSlant"
  | "Rocket"
  | "RotateDocument"
  | "RotatePage"
  | "Route"
  | "Satellite"
  | "Saved"
  | "ScatterPlot"
  | "SearchAround"
  | "SearchTemplate"
  | "SearchText"
  | "Search"
  | "SegmentedControl"
  | "Select"
  | "Selection"
  | "SendBackward"
  | "SendMessage"
  | "SendToGraph"
  | "SendToMap"
  | "SendTo"
  | "Sensor"
  | "SeriesAdd"
  | "SeriesConfiguration"
  | "SeriesDerived"
  | "SeriesFiltered"
  | "SeriesSearch"
  | "Settings"
  | "Shapes"
  | "Share"
  | "SharedFilter"
  | "Shield"
  | "Ship"
  | "Shop"
  | "ShoppingCart"
  | "ShortenText"
  | "SignalSearch"
  | "SimCard"
  | "Slash"
  | "SmallCross"
  | "SmallInfoSign"
  | "SmallMinus"
  | "SmallPlus"
  | "SmallSquare"
  | "SmallTick"
  | "Snowflake"
  | "SoccerBall"
  | "SocialMedia"
  | "SortAlphabeticalDesc"
  | "SortAlphabetical"
  | "SortAsc"
  | "SortDesc"
  | "SortNumericalDesc"
  | "SortNumerical"
  | "Sort"
  | "SpellCheck"
  | "SplitColumns"
  | "SportsStadium"
  | "Square"
  | "StackedChart"
  | "StadiumGeometry"
  | "StarEmpty"
  | "Star"
  | "StepBackward"
  | "StepChart"
  | "StepForward"
  | "Stop"
  | "Stopwatch"
  | "Strikethrough"
  | "Style"
  | "Subscript"
  | "Superscript"
  | "SwapHorizontal"
  | "SwapVertical"
  | "Switch"
  | "SymbolCircle"
  | "SymbolCross"
  | "SymbolDiamond"
  | "SymbolRectangle"
  | "SymbolSquare"
  | "SymbolTriangleDown"
  | "SymbolTriangleUp"
  | "Syringe"
  | "TableSync"
  | "Tag"
  | "TakeAction"
  | "Tank"
  | "Target"
  | "Taxi"
  | "Team"
  | "Temperature"
  | "TextHighlight"
  | "ThDerived"
  | "ThDisconnect"
  | "ThFiltered"
  | "ThList"
  | "Th"
  | "ThirdParty"
  | "ThumbsDown"
  | "ThumbsUp"
  | "TickCircle"
  | "Tick"
  | "Time"
  | "TimelineAreaChart"
  | "TimelineBarChart"
  | "TimelineEvents"
  | "TimelineLineChart"
  | "Tint"
  | "Torch"
  | "Tractor"
  | "Train"
  | "Translate"
  | "Trash"
  | "Tree"
  | "TrendingDown"
  | "TrendingUp"
  | "Trophy"
  | "Truck"
  | "TwoColumns"
  | "Unarchive"
  | "Underline"
  | "Undo"
  | "UngroupObjects"
  | "UnknownVehicle"
  | "Unlink"
  | "Unlock"
  | "Unpin"
  | "Unresolve"
  | "Updated"
  | "Upload"
  | "User"
  | "Variable"
  | "Vector"
  | "VerticalBarChartAsc"
  | "VerticalBarChartDesc"
  | "VerticalDistribution"
  | "VerticalInbetween"
  | "Video"
  | "Virus"
  | "VolumeDown"
  | "VolumeOff"
  | "VolumeUp"
  | "Walk"
  | "WarningSign"
  | "WaterfallChart"
  | "Waves"
  | "WidgetButton"
  | "WidgetFooter"
  | "WidgetHeader"
  | "Widget"
  | "Wind"
  | "Wrench"
  | "ZoomIn"
  | "ZoomOut"
  | "ZoomToFit";
