import{f as p,j as e}from"./iframe-CvX9Pygi.js";import{O as i}from"./object-table-BUtrTjpN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BB8WBYsV.js";import"./Table-QxYBnfC2.js";import"./index-BZTqeQuD.js";import"./Dialog-Cwq31CHt.js";import"./cross-a0pxU8ye.js";import"./svgIconContainer-Cik9z__5.js";import"./useBaseUiId-BW2Ufhyw.js";import"./InternalBackdrop-KsToEN62.js";import"./composite-B1Ef3_vs.js";import"./index-C3D6pCjL.js";import"./index-EBKlSRA8.js";import"./index-BRzHUjU3.js";import"./useEventCallback-Cd4IUoh5.js";import"./SkeletonBar-Bnfzc4A1.js";import"./LoadingCell-EkqPT1cA.js";import"./ColumnConfigDialog-C2V8ttfd.js";import"./DraggableList-OvqbjDr_.js";import"./search-D9_8mB8g.js";import"./Input-B4YDDaMi.js";import"./useControlled-qJqObmnH.js";import"./Button-D5Y-liWD.js";import"./small-cross-BfYBNzN7.js";import"./ActionButton-BG0rIOTw.js";import"./Checkbox-B_3kZLWz.js";import"./useValueChanged-CN40AKPX.js";import"./CollapsiblePanel-DiQ0neqE.js";import"./MultiColumnSortDialog-khzDAYAw.js";import"./MenuTrigger-D9EQbsZv.js";import"./CompositeItem-LESBwLaD.js";import"./ToolbarRootContext-BT80oNNA.js";import"./getDisabledMountTransitionStyles-Oyv5nHgL.js";import"./getPseudoElementBounds-vWAS2NT6.js";import"./chevron-down-o9sdxfCV.js";import"./index-w6IpT_oR.js";import"./error-B2uabQYe.js";import"./BaseCbacBanner-BxOuxwtm.js";import"./makeExternalStore-M2yjAWof.js";import"./Tooltip-Bd17w1nK.js";import"./PopoverPopup-CFZCCanB.js";import"./debounce-BfCJX0Ug.js";import"./useOsdkClient-BkDk9PCS.js";import"./tick-Cu_c34Lw.js";import"./DropdownField-5zyXtgzR.js";import"./isEqual-CY1gbDwB.js";import"./withOsdkMetrics-DTO1kugV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
