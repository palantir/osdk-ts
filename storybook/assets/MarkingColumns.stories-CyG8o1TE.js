import{f as p,j as e}from"./iframe-CwHoXHUu.js";import{O as i}from"./object-table-Cag_aHEb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B8BrjogO.js";import"./index-CZaeEK6I.js";import"./Dialog-De2OFsHH.js";import"./cross-CbSe3IA2.js";import"./svgIconContainer-CCqCSEPy.js";import"./useBaseUiId-BPVfLfjX.js";import"./InternalBackdrop-Dp6bA82H.js";import"./composite-DnjWTUQ2.js";import"./index-Cd6vbhvO.js";import"./index-CfA2Hd3H.js";import"./index-UD_bptXF.js";import"./useEventCallback-ANOYlLcV.js";import"./SkeletonBar-BPg1Fkjv.js";import"./LoadingCell-7w5ijp3b.js";import"./ColumnConfigDialog-BLb0xQT4.js";import"./DraggableList-B9JF565r.js";import"./search-DFG6yLeC.js";import"./Input-D4zseZIs.js";import"./useControlled-Hry_0x1f.js";import"./Button-h45Z6oL5.js";import"./small-cross-hTe5W9lf.js";import"./ActionButton-o9bSj-37.js";import"./Checkbox-DCQ1bTrr.js";import"./useValueChanged-Bts0Uq_N.js";import"./CollapsiblePanel-BF_hIS1Q.js";import"./MultiColumnSortDialog-DUaw27L5.js";import"./MenuTrigger-D9Ll9dQr.js";import"./CompositeItem-D5ZABXe5.js";import"./ToolbarRootContext-Dnc8VcDU.js";import"./getDisabledMountTransitionStyles-zi3Kz6H3.js";import"./getPseudoElementBounds-BZ16Xjo9.js";import"./chevron-down-CJ7ExT0D.js";import"./index-CI3G919h.js";import"./error-fdiT2-40.js";import"./BaseCbacBanner-syPdUMGq.js";import"./makeExternalStore-BVBAkPec.js";import"./Tooltip-CbRVkG8d.js";import"./isObject-7iDi-x5O.js";import"./debounce-BaLd07FW.js";import"./useOsdkClient-Cq22Qxjo.js";import"./tick-_yHnD8nP.js";import"./DropdownField-D6wICRIR.js";import"./isEqual-DPe1pfPj.js";import"./_baseIsEqual-5-KFDSiY.js";import"./withOsdkMetrics-D3UK9v4M.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
