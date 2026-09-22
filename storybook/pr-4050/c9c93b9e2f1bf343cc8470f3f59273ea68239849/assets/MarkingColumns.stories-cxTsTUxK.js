import{f as p,j as e}from"./iframe-B4Qf2x47.js";import{O as i}from"./object-table-CPLTCgyJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DmaZizbX.js";import"./Table-DcPW7WI2.js";import"./index-B97ocqDB.js";import"./Dialog-De2ibvoK.js";import"./cross-w9xefAeS.js";import"./svgIconContainer-Bx39OoUr.js";import"./useBaseUiId-CuoaS_IK.js";import"./InternalBackdrop-C8l1Y-0f.js";import"./composite-BxeFJGWF.js";import"./index-DHeuY6qT.js";import"./index-B6nqCMvX.js";import"./index-BA03CKcA.js";import"./useEventCallback-DWh8d3_D.js";import"./SkeletonBar-BtuvgBa-.js";import"./LoadingCell-DXNqVRfq.js";import"./ColumnConfigDialog-BZuObZPn.js";import"./DraggableList-CIdOPMJV.js";import"./search-D96kAX6P.js";import"./Input-CT1b0uTH.js";import"./useControlled-CjTdF22S.js";import"./Button-xKEqEHmE.js";import"./small-cross-DS3Q2Rz0.js";import"./ActionButton-zETE6syU.js";import"./Checkbox-COhZNwHi.js";import"./useValueChanged-DsKPkoty.js";import"./CollapsiblePanel-B9o26G0c.js";import"./MultiColumnSortDialog-DC5fGvj7.js";import"./MenuTrigger-exs7SvA9.js";import"./CompositeItem-Dm0AUseO.js";import"./ToolbarRootContext-gq31GD3n.js";import"./getDisabledMountTransitionStyles-CdqBMtts.js";import"./getPseudoElementBounds-F5SYiEpp.js";import"./chevron-down-DNdE9fs0.js";import"./index-COOPd0_C.js";import"./error-0thEM3V8.js";import"./BaseCbacBanner-ncSG64qg.js";import"./makeExternalStore-DYKlPK4M.js";import"./Tooltip-Rk-aR7OJ.js";import"./PopoverPopup-tqPNwfif.js";import"./debounce-DpXq-GLD.js";import"./useOsdkClient-D22Zy3Aq.js";import"./tick-DFcuOcOL.js";import"./DropdownField-D-duYmE0.js";import"./isEqual-Bh4qltOa.js";import"./withOsdkMetrics-CQFCnZa4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
