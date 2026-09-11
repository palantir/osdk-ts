import{f as p,j as e}from"./iframe-o2qKykKB.js";import{O as i}from"./object-table-sMhn0qpj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C27-ZLGM.js";import"./Table-uySpa02t.js";import"./index-BGljrmTZ.js";import"./Dialog-DUL6qeS3.js";import"./cross-BTB24VP7.js";import"./svgIconContainer-BhaYgLqs.js";import"./useBaseUiId-OPidnSdm.js";import"./InternalBackdrop-DR4zGZzK.js";import"./composite-BLm43g8N.js";import"./index-DNh70Okq.js";import"./index-CvhnTB6X.js";import"./index-BVMYD8Oa.js";import"./useEventCallback-hJBDMJsx.js";import"./SkeletonBar-DhdbyDRI.js";import"./LoadingCell-Cy4uZsC0.js";import"./ColumnConfigDialog-Bz_3ncfr.js";import"./DraggableList-CbirbCIw.js";import"./search-C1CYCLwX.js";import"./Input-3CD54kGq.js";import"./useControlled-j9Xx4bgV.js";import"./Button-DlN0yFDg.js";import"./small-cross-C2cMuOH_.js";import"./ActionButton-CeNVvCTB.js";import"./Checkbox-jOrUjYBn.js";import"./useValueChanged-Cie3N3Mi.js";import"./CollapsiblePanel-CkovkzYb.js";import"./MultiColumnSortDialog-BUyBDOja.js";import"./MenuTrigger--MJrp4d4.js";import"./CompositeItem-Kr2j0ah9.js";import"./ToolbarRootContext-CkkOTkz9.js";import"./getDisabledMountTransitionStyles-Cs2uu7jZ.js";import"./getPseudoElementBounds-DS-R98qk.js";import"./chevron-down-QYJ-TtLl.js";import"./index-D5B8A__1.js";import"./error-UQwhkZq_.js";import"./BaseCbacBanner-BPWRf3LX.js";import"./makeExternalStore-DBMN3aEP.js";import"./Tooltip-DxXhJeja.js";import"./PopoverPopup-Pczz4-8n.js";import"./debounce-CTJxY2Tj.js";import"./useOsdkClient-B8dETVs7.js";import"./tick-BMQAi16Z.js";import"./DropdownField-BbGjuJzG.js";import"./isEqual-DFmsCwVE.js";import"./withOsdkMetrics-ByPWr5gV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
