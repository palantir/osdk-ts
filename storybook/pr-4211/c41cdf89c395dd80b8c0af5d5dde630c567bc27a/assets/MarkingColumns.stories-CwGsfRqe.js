import{f as p,j as e}from"./iframe-VyYU4_vz.js";import{O as i}from"./object-table-qLQNuHCM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BuqLdsok.js";import"./Table-D9gw01TB.js";import"./index-Ds9RaOEw.js";import"./Dialog-BYVV7Vxz.js";import"./cross-B8BSPVsW.js";import"./svgIconContainer-RHuD6B4X.js";import"./useBaseUiId-oAJGM4T3.js";import"./InternalBackdrop-Ks9C_KBp.js";import"./composite-D-GMalcD.js";import"./index-DGfEWUId.js";import"./index-CIaumvnO.js";import"./index-8WSLTY8y.js";import"./useEventCallback-LhuC7cwi.js";import"./SkeletonBar-pyPg3O_J.js";import"./LoadingCell-BTtjd3SD.js";import"./ColumnConfigDialog-Bawmc31o.js";import"./DraggableList-C2Qzt0AU.js";import"./search-Cp9T6kDH.js";import"./Input-Ck1mtXHC.js";import"./useControlled-DF-V1JcA.js";import"./Button-BO4-XA9w.js";import"./small-cross-BhR-tKKW.js";import"./ActionButton-BaZ1pakt.js";import"./Checkbox-ChTvZHXN.js";import"./useValueChanged-BlhavTes.js";import"./CollapsiblePanel-6lTx7MnB.js";import"./MultiColumnSortDialog-CLP9oSNu.js";import"./MenuTrigger-WG6WH2x9.js";import"./CompositeItem-BpcnF50U.js";import"./ToolbarRootContext-DNatahNZ.js";import"./getDisabledMountTransitionStyles-CZqTqyjY.js";import"./getPseudoElementBounds-CGw1_hUQ.js";import"./chevron-down-C6hF1wmk.js";import"./index-D3QHbtaM.js";import"./error-D4hrAgPV.js";import"./BaseCbacBanner-BlVyIN4U.js";import"./makeExternalStore-fugyGUCm.js";import"./Tooltip-BKVen5s5.js";import"./PopoverPopup-WQ_0bkhD.js";import"./debounce-C3KWhkea.js";import"./useOsdkClient-Yo8cLSm5.js";import"./tick-Fs7Tv_3o.js";import"./DropdownField-BEcIoxEz.js";import"./isEqual-CuqG53Rd.js";import"./withOsdkMetrics-iTeYpiSH.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
