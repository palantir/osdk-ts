import{f as n,j as t}from"./iframe-CwoAXq9w.js";import{O as p}from"./object-table-Qoo5nmSx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BikimO2v.js";import"./Table-C8HW5nJU.js";import"./index-D9Zjfa1o.js";import"./Dialog-C5BiYfIA.js";import"./cross-Bc5p1FSk.js";import"./svgIconContainer-BJEqVzej.js";import"./useBaseUiId-BboOs85c.js";import"./InternalBackdrop-CIVHg3Ds.js";import"./composite-c9bCA0hK.js";import"./index-D967pqEx.js";import"./index-Dka6Ak-A.js";import"./index-XNv1uUQZ.js";import"./useEventCallback-OyEgmEDC.js";import"./SkeletonBar-CPqAoycC.js";import"./LoadingCell-BUhXwdTk.js";import"./ColumnConfigDialog-DGPs6Oz5.js";import"./DraggableList-BfFuXdsC.js";import"./Input-0AZJ2Hid.js";import"./useControlled-CoAQv9N8.js";import"./Button-DW8xrm3Y.js";import"./small-cross-DZl_aikX.js";import"./ActionButton-DBVvxxNx.js";import"./Checkbox-bk2JvKKj.js";import"./minus-DK0B5VIQ.js";import"./useValueChanged-BdslLfQh.js";import"./caret-down-CIuQc6pr.js";import"./CollapsiblePanel-px4q1VBP.js";import"./MultiColumnSortDialog-B4XjOval.js";import"./MenuTrigger-Do5YrGO0.js";import"./CompositeItem-BaOK_hwt.js";import"./ToolbarRootContext-CNH3IivW.js";import"./getDisabledMountTransitionStyles-Dr9HbiZ5.js";import"./getPseudoElementBounds-Dk6C1cLo.js";import"./chevron-down-CFoBp37B.js";import"./index-UeX6jYz5.js";import"./error-TyY4lHoh.js";import"./BaseCbacBanner-CzHf0FHH.js";import"./makeExternalStore-CX6C8tTz.js";import"./Tooltip-DP49belO.js";import"./PopoverPopup-DE2J03HK.js";import"./toNumber-IsBXMsK9.js";import"./useOsdkClient-CdnXHgNl.js";import"./DropdownField-Bw9GeLPL.js";import"./withOsdkMetrics-CapMcR8H.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
