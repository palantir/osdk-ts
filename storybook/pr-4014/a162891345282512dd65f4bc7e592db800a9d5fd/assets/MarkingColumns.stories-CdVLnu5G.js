import{f as p,j as e}from"./iframe-CuKia_EN.js";import{O as i}from"./object-table-CmttaJ0f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZuarx_D.js";import"./Table-D2fC7E-R.js";import"./index-CVRiO_BO.js";import"./Dialog-D7PuDkh6.js";import"./cross-X509BjS9.js";import"./svgIconContainer-6Becg_K2.js";import"./useBaseUiId-C8uIC3Bm.js";import"./InternalBackdrop-ofNkj6qc.js";import"./composite-Cpd5KJD8.js";import"./index-q4KNVnv_.js";import"./index-Dx9fpQkg.js";import"./index-DRmu1dZx.js";import"./useEventCallback-eNr2_rgV.js";import"./SkeletonBar-CQrsNGDe.js";import"./LoadingCell-Fw6A3SCw.js";import"./ColumnConfigDialog-Da23NrBb.js";import"./DraggableList-C_j1TSmW.js";import"./search-Bab6PZbG.js";import"./Input-BIdaiZoI.js";import"./useControlled-UwQVkGem.js";import"./Button-CVMu9YDi.js";import"./small-cross-BeBD9G2Y.js";import"./ActionButton-DU7cLlj1.js";import"./Checkbox-DFS3qNO0.js";import"./useValueChanged-ChchmKxl.js";import"./CollapsiblePanel-HNtDo0gw.js";import"./MultiColumnSortDialog-DV2ZYylK.js";import"./MenuTrigger-QFhkU378.js";import"./CompositeItem-CJjI731A.js";import"./ToolbarRootContext-Bn8zU9xQ.js";import"./getDisabledMountTransitionStyles-CjBLuMnB.js";import"./getPseudoElementBounds-BKhdgpRc.js";import"./chevron-down-DJVJwxKZ.js";import"./index-BcyKe8qn.js";import"./error-C19RYWaj.js";import"./BaseCbacBanner-BeCxEPHQ.js";import"./makeExternalStore-DzI0MTA7.js";import"./Tooltip-3KVWe3HV.js";import"./PopoverPopup-BZX5fwgl.js";import"./debounce-KF7wF3li.js";import"./useOsdkClient-nV1NX6Cm.js";import"./tick-_5nSoxyV.js";import"./DropdownField-DQBcY_Rm.js";import"./isEqual-DM5iv7nZ.js";import"./withOsdkMetrics-5runl_VG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
