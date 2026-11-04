import{f as p,j as e}from"./iframe-BrmQZ3gv.js";import{O as i}from"./object-table-CEcHHP_q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-bFlMnFhE.js";import"./Table-DnUpQkRl.js";import"./index-BukqnFRF.js";import"./Dialog-C7vXG1dO.js";import"./cross-CyQ2LR1N.js";import"./svgIconContainer-1ZxcqWPt.js";import"./useBaseUiId-DOEJb2YQ.js";import"./InternalBackdrop-B6fWmh38.js";import"./composite-CToHHLnK.js";import"./index-DrxXiExk.js";import"./index-BHysiYNZ.js";import"./index-PCKTTVVz.js";import"./useEventCallback-D7yysNmp.js";import"./SkeletonBar-Bnl4zbTE.js";import"./LoadingCell-645SZiNQ.js";import"./ColumnConfigDialog-BOerTDNx.js";import"./DraggableList-VQAbVc9N.js";import"./search-3yVqV9Ja.js";import"./Input-CJbUQK7W.js";import"./useControlled-BKcLfL-m.js";import"./Button-DFW8ZRr_.js";import"./small-cross-DWB62PqX.js";import"./ActionButton-Cvda-cXU.js";import"./Checkbox-D2C-eWc7.js";import"./useValueChanged-B2eN2qPg.js";import"./CollapsiblePanel-C6bZdZ49.js";import"./MultiColumnSortDialog-DRMFjLTN.js";import"./MenuTrigger-CuPbLnV7.js";import"./CompositeItem-Cj9sjJEA.js";import"./ToolbarRootContext-DVJYWBBz.js";import"./getDisabledMountTransitionStyles-oZQkDeF-.js";import"./getPseudoElementBounds-GhphztYg.js";import"./chevron-down-DjoNZ0eU.js";import"./index-Lz8g2hRL.js";import"./error-BoTJC5k7.js";import"./BaseCbacBanner-Df4PMHpV.js";import"./makeExternalStore-B5wDpA-S.js";import"./Tooltip-B67VaBcv.js";import"./PopoverPopup-CsNA8h91.js";import"./debounce-DktWngHR.js";import"./useOsdkClient-DMIbxZRi.js";import"./tick-DQnQI0KH.js";import"./DropdownField-BDpM5rcW.js";import"./isEqual-DRj2__AA.js";import"./withOsdkMetrics-CjsWDT1I.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
