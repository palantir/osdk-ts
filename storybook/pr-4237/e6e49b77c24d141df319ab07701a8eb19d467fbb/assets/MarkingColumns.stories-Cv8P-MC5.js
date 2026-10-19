import{f as p,j as e}from"./iframe-DhSxUQkX.js";import{O as i}from"./object-table-DbphsC1p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-sXoL7niC.js";import"./Table-Cxw9cwM6.js";import"./index-BvSFmfl4.js";import"./Dialog-BT2zLzQV.js";import"./cross-DPp5FPP-.js";import"./svgIconContainer-Cv6Vlj7K.js";import"./useBaseUiId-CZTbsmZg.js";import"./InternalBackdrop-C1ZWO4Fv.js";import"./composite-CVjZUaK1.js";import"./index-CIxCim47.js";import"./index-DqmtWcN5.js";import"./index-jTHMQX5i.js";import"./useEventCallback-CvDvv5HC.js";import"./SkeletonBar-CyDJ1Ldz.js";import"./LoadingCell-CYynvORP.js";import"./ColumnConfigDialog-oy9TAHvX.js";import"./DraggableList-B0EZBRPj.js";import"./search-DUqXaRZn.js";import"./Input-CZERibHA.js";import"./useControlled-BFOHrubs.js";import"./Button-WT-hQp_M.js";import"./small-cross-sUBGXhQ0.js";import"./ActionButton-D68fVxeC.js";import"./Checkbox-BeTRGy-6.js";import"./useValueChanged-O0UVeLkr.js";import"./CollapsiblePanel-CnIi4ruU.js";import"./MultiColumnSortDialog-DQ1pW78O.js";import"./MenuTrigger-BGLuUfjR.js";import"./CompositeItem-B0iGyW5R.js";import"./ToolbarRootContext-DCHPkWcS.js";import"./getDisabledMountTransitionStyles-B8WSataG.js";import"./getPseudoElementBounds-Dg91PpPW.js";import"./chevron-down-DgOK1tfP.js";import"./index-DS-3NohG.js";import"./error-BkDo7z_m.js";import"./BaseCbacBanner-DfrB6rgb.js";import"./makeExternalStore-C6P_xGma.js";import"./Tooltip-GjEUJm8I.js";import"./PopoverPopup-BhdoMacR.js";import"./debounce-CttzonmO.js";import"./useOsdkClient-JBSVfS2z.js";import"./tick-DIF_A_6E.js";import"./DropdownField-eY4WYUsH.js";import"./isEqual-BPbLcVx_.js";import"./withOsdkMetrics-BwywW8LF.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
