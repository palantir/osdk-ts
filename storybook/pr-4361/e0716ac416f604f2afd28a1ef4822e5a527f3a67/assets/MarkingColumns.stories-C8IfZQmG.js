import{f as p,j as e}from"./iframe-BUHzazL7.js";import{O as i}from"./object-table-XBMiTrRZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-7pS0gMeE.js";import"./Table-DDeHODd6.js";import"./index-DAbvms11.js";import"./Dialog-C0B1XOhV.js";import"./cross-7sgOHlSE.js";import"./svgIconContainer-BXxi0rpR.js";import"./useBaseUiId-C-XGHDUu.js";import"./InternalBackdrop-DWQUsD_D.js";import"./composite-CJH_Fsm0.js";import"./index-DxPhhuRZ.js";import"./index-4VpR6oTN.js";import"./index-D9_tmeH_.js";import"./useEventCallback-DJI-8f_A.js";import"./SkeletonBar-0L9eM8bs.js";import"./LoadingCell-C4JquKRZ.js";import"./ColumnConfigDialog-1Eruji_6.js";import"./DraggableList-BDc-Fcs-.js";import"./search-DMRlY3rF.js";import"./Input-BfjcqwT4.js";import"./useControlled-Bi-hDwUg.js";import"./Button-DSLJNPkR.js";import"./small-cross-GD98Wxpt.js";import"./ActionButton-C74KTwzB.js";import"./Checkbox-BVuEO3Ob.js";import"./useValueChanged--IkhdHLc.js";import"./CollapsiblePanel-BSe5eWOg.js";import"./MultiColumnSortDialog-C0Vt9qBw.js";import"./MenuTrigger-CCRlm-zn.js";import"./CompositeItem-DKAPVnml.js";import"./ToolbarRootContext-CSl7A__z.js";import"./getDisabledMountTransitionStyles-Br83RBIR.js";import"./getPseudoElementBounds-DXs-chLM.js";import"./chevron-down-B-LRa2LO.js";import"./index-DO3hWjnR.js";import"./error-yaL4IHLV.js";import"./BaseCbacBanner-BdIaa-Er.js";import"./makeExternalStore-9kWZAU-l.js";import"./Tooltip-Ov0ymwIX.js";import"./isObject-DQHZLkoR.js";import"./debounce-BJH6rtO8.js";import"./useOsdkClient-Bpfa90-6.js";import"./tick-Cy-wk92W.js";import"./DropdownField-D0emNnpT.js";import"./isEqual-DysQUPNd.js";import"./_baseIsEqual-CMdutzPM.js";import"./withOsdkMetrics-BXf-ymjN.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
