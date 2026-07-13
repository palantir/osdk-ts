import{f as n,j as t}from"./iframe-DtBbG9ub.js";import{O as p}from"./object-table-Bb2lJtGy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKqQHump.js";import"./Table-Cx79SsZ-.js";import"./index-BNVRawFZ.js";import"./Dialog-CD0VrbDR.js";import"./cross-DIyvJNHW.js";import"./svgIconContainer-BSDh2cSh.js";import"./useBaseUiId-tUXy-r9e.js";import"./InternalBackdrop-Ctuc6V-v.js";import"./composite-7sC3O7Er.js";import"./index-DvIS35-4.js";import"./index-BEnCWhpy.js";import"./index-D-Y9W4pM.js";import"./useEventCallback-B31xIQy4.js";import"./SkeletonBar-umJNN02Q.js";import"./LoadingCell-DeLl0c0M.js";import"./ColumnConfigDialog-DBc1v7gt.js";import"./DraggableList-CJowRZ4E.js";import"./search-Bsn7yrB3.js";import"./Input-CAYv7kt0.js";import"./useControlled-C7YYJ7SZ.js";import"./Button-Esowa-jc.js";import"./small-cross-BcrTif3u.js";import"./ActionButton-BmkBgDhp.js";import"./Checkbox-UBHMV01U.js";import"./useValueChanged-BXftvbE_.js";import"./CollapsiblePanel-D7kF0Mjz.js";import"./MultiColumnSortDialog-CNdeS0Kb.js";import"./MenuTrigger-s7z1UxN1.js";import"./CompositeItem-BzT3Jsrd.js";import"./ToolbarRootContext-htCg31Ng.js";import"./getDisabledMountTransitionStyles-FKuyrVtO.js";import"./getPseudoElementBounds-CUpPDhu7.js";import"./chevron-down-BtYcm6jh.js";import"./index-BIgVDJqH.js";import"./error-B45wk9AO.js";import"./BaseCbacBanner-CvNqhK-v.js";import"./makeExternalStore-DhJItYLX.js";import"./Tooltip-ArIiOhAv.js";import"./PopoverPopup-Dyi0j7Mk.js";import"./toNumber-4neA1TZq.js";import"./useOsdkClient-D8IXesWp.js";import"./tick-BCjEByk9.js";import"./DropdownField-FQymozOq.js";import"./withOsdkMetrics-AhCC2N-G.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
