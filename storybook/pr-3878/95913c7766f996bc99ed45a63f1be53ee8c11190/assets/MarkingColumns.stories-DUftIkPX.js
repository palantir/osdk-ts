import{f as p,j as e}from"./iframe--ccl4y8N.js";import{O as i}from"./object-table-CR6w98zx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-eDRQxybW.js";import"./Table-CwJnTSLu.js";import"./index-Vig6W4vx.js";import"./Dialog-B__qzqHr.js";import"./cross-DXpDqiaU.js";import"./svgIconContainer-DanQ2deo.js";import"./useBaseUiId-fZY9l5U4.js";import"./InternalBackdrop-CcF1cHM3.js";import"./composite-BIOD5O0o.js";import"./index-DaU8wHoE.js";import"./index-DHS-gUYg.js";import"./index-BGU5pc6Z.js";import"./useEventCallback-aG5NN5nQ.js";import"./SkeletonBar-CjkXHjrG.js";import"./LoadingCell-Dd_uLqZH.js";import"./ColumnConfigDialog-CMQdiYEt.js";import"./DraggableList-B5aeSYJb.js";import"./search-BSNzJLm0.js";import"./Input-CMEDwRP1.js";import"./useControlled-DnjkEDg6.js";import"./Button-WLNHPk3M.js";import"./small-cross-BpjjQ8hl.js";import"./ActionButton-CBwATAf_.js";import"./Checkbox-D4QlXADU.js";import"./useValueChanged-WfWZ-saZ.js";import"./CollapsiblePanel-CpfhC1pL.js";import"./MultiColumnSortDialog-DcUJ7g95.js";import"./MenuTrigger-DHolIQKG.js";import"./CompositeItem-CgDhVlw6.js";import"./ToolbarRootContext-DphUk-b_.js";import"./getDisabledMountTransitionStyles-Fp8bhwNn.js";import"./getPseudoElementBounds-C7suUQde.js";import"./chevron-down-CjjtTKBP.js";import"./index-DlRKciFL.js";import"./error-C1s20D2H.js";import"./BaseCbacBanner-BLo7Llvs.js";import"./makeExternalStore-CgFnBRv9.js";import"./Tooltip-CawT2Rn1.js";import"./PopoverPopup-D3eT8tPI.js";import"./debounce-C5k2VTX2.js";import"./useOsdkClient-VVFwCZnH.js";import"./tick-BSFeBmWe.js";import"./DropdownField-qGy4ydz7.js";import"./isEqual-Bv9sPlAd.js";import"./withOsdkMetrics-CgPXr3ib.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
