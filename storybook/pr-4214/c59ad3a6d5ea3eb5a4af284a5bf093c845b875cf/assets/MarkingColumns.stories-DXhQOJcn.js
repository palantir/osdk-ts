import{f as p,j as e}from"./iframe-DzqriYoa.js";import{O as i}from"./object-table-D5UwWSXl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rEyizNUS.js";import"./Table-DyuUSwsE.js";import"./index-CbCX59S_.js";import"./Dialog-D1TTSOys.js";import"./cross-BYH-2i8n.js";import"./svgIconContainer-DGWH6ifX.js";import"./useBaseUiId-Dl4SGLhQ.js";import"./InternalBackdrop-CV9wiOw_.js";import"./composite-C_fUKfgf.js";import"./index-DbWpjH26.js";import"./index-D2hymCML.js";import"./index-BeXGlMwj.js";import"./useEventCallback--hGnFhfC.js";import"./SkeletonBar-l_DEAtNb.js";import"./LoadingCell-1xT5cYBz.js";import"./ColumnConfigDialog-CxRjf-Qz.js";import"./DraggableList-XCyCGDiX.js";import"./search-CdGNOopx.js";import"./Input-BkQ3tb2C.js";import"./useControlled-Y5VNoFPF.js";import"./Button-CORzZHVQ.js";import"./small-cross-Ctj0EcuU.js";import"./ActionButton-wBjk7qIy.js";import"./Checkbox-JHBqeoQa.js";import"./useValueChanged-Bbm6hoIu.js";import"./CollapsiblePanel-j9A_r2A6.js";import"./MultiColumnSortDialog-B0NKFRrJ.js";import"./MenuTrigger-C0zHrdEW.js";import"./CompositeItem-jOjnmS3J.js";import"./ToolbarRootContext-T8dcHRUE.js";import"./getDisabledMountTransitionStyles-WG_KSQgl.js";import"./getPseudoElementBounds-Bp5H42sl.js";import"./chevron-down-Oou_YMqa.js";import"./index-DfPgZdRM.js";import"./error-Ofk1hxBS.js";import"./BaseCbacBanner-BUCQhSiR.js";import"./makeExternalStore-C6hRU-73.js";import"./Tooltip-CpxT0FiY.js";import"./PopoverPopup-C_dYk9mI.js";import"./debounce-C4Oh_cfK.js";import"./useOsdkClient-BdwocmMk.js";import"./tick-B24kLRH2.js";import"./DropdownField-BJzekVR1.js";import"./isEqual-C3BNLNeA.js";import"./withOsdkMetrics-B8iePud0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
