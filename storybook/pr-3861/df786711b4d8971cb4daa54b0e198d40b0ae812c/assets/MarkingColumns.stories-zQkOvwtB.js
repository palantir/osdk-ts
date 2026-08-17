import{f as p,j as e}from"./iframe-BykysWv2.js";import{O as i}from"./object-table-VL2pIuSS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-tSwkR5.js";import"./Table-DKKJuYn2.js";import"./index-CCmH1fLx.js";import"./Dialog-BYmQ2lK1.js";import"./cross-C6UPhC48.js";import"./svgIconContainer-DuuAzJ-q.js";import"./useBaseUiId-BtfasykQ.js";import"./InternalBackdrop-DcsekBaZ.js";import"./composite-DVza1WGR.js";import"./index-CdS3MnO1.js";import"./index-D5tO8tmB.js";import"./index-Cqonjd7p.js";import"./useEventCallback-B4_uUg37.js";import"./SkeletonBar-XxmSe_Cp.js";import"./LoadingCell-DjZgc0r1.js";import"./ColumnConfigDialog-B17ARdeN.js";import"./DraggableList-DRSLRpqD.js";import"./search-BDkejYae.js";import"./Input-B6kNrbT5.js";import"./useControlled-BHDm0MR_.js";import"./Button-CmlMFMdB.js";import"./small-cross-CSSivirH.js";import"./ActionButton-DSbQbnUR.js";import"./Checkbox-D24EyxhG.js";import"./useValueChanged-C9e2VdUl.js";import"./CollapsiblePanel-CXUAw-hA.js";import"./MultiColumnSortDialog-T2inBz5a.js";import"./MenuTrigger-DAeKyCnh.js";import"./CompositeItem-B2Va5Uj8.js";import"./ToolbarRootContext-hgVSKpi4.js";import"./getDisabledMountTransitionStyles-DPi8XNEW.js";import"./getPseudoElementBounds-84sUmk7I.js";import"./chevron-down-BhIvQaF5.js";import"./index-D5SG44W0.js";import"./error-DoPIKpmU.js";import"./BaseCbacBanner-iC1JAFKe.js";import"./makeExternalStore-Efjiv4ks.js";import"./Tooltip-D6tequ9v.js";import"./PopoverPopup-7-Z1ZTD2.js";import"./debounce-BQifmnVJ.js";import"./useOsdkClient-BSt3qc0S.js";import"./tick-bGW9sZOi.js";import"./DropdownField-xIr7Ptnm.js";import"./isEqual-CY52NdiV.js";import"./withOsdkMetrics-byqTEtiY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
