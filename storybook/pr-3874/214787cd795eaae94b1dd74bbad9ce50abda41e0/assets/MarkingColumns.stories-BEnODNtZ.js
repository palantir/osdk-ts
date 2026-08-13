import{f as p,j as e}from"./iframe-CtbKcdah.js";import{O as i}from"./object-table-BcacSCN4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-EU-ENyZQ.js";import"./Table-DDvi8H0_.js";import"./index-CwYTowdT.js";import"./Dialog-B9V_CHZo.js";import"./cross-DpOV5wae.js";import"./svgIconContainer-Cet6vu_r.js";import"./useBaseUiId-0bJN_qdd.js";import"./InternalBackdrop-DchFpK7_.js";import"./composite-BHhkxlsM.js";import"./index-DZQwww7d.js";import"./index-fOPXI3EL.js";import"./index-BrPDDtPb.js";import"./useEventCallback-DH2mBgYy.js";import"./SkeletonBar-DgWwIArl.js";import"./LoadingCell-DexMxGnO.js";import"./ColumnConfigDialog-CE99YesT.js";import"./DraggableList-DQiUbEHW.js";import"./search-BwzKNgs0.js";import"./Input-JG5cgvZN.js";import"./useControlled-BcslQkqc.js";import"./Button-B-vHHAok.js";import"./small-cross-BIpZh2I9.js";import"./ActionButton-BMI6qLuN.js";import"./Checkbox-DzgQD_l6.js";import"./useValueChanged-C9bAZlcS.js";import"./CollapsiblePanel-BmBuCIHD.js";import"./MultiColumnSortDialog-DoC4d9gu.js";import"./MenuTrigger-DXL8cJrO.js";import"./CompositeItem-lZSk-3LJ.js";import"./ToolbarRootContext-1H0rLmo4.js";import"./getDisabledMountTransitionStyles-Bx8H60NU.js";import"./getPseudoElementBounds-BU-GKez8.js";import"./chevron-down-DBDRq4_M.js";import"./index-ePGgCjvy.js";import"./error-D69Vfmfe.js";import"./BaseCbacBanner-CXbIB7CA.js";import"./makeExternalStore-QdIdUwH6.js";import"./Tooltip-i8kW-oFE.js";import"./PopoverPopup-B4NW6jDW.js";import"./debounce-5R1Uvz-P.js";import"./useOsdkClient-DtvN553N.js";import"./tick-BOLhtKSX.js";import"./DropdownField-B8IW1RM3.js";import"./isEqual-DxGVR0hC.js";import"./withOsdkMetrics-BjcrUEVS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
