import{f as p,j as e}from"./iframe-Dvvw4I1q.js";import{O as i}from"./object-table-DA5dn-b0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCKjsCnY.js";import"./Table-C4SEmzII.js";import"./index-CcRKYtMA.js";import"./Dialog-Bmsj4cRm.js";import"./cross-DWppTOTY.js";import"./svgIconContainer-gsEkol3B.js";import"./useBaseUiId-BMt9jKSu.js";import"./InternalBackdrop-Deoo566R.js";import"./composite-BgyboUCE.js";import"./index-xNuGHOPM.js";import"./index-BuX2Af_P.js";import"./index-DX2A1KCX.js";import"./useEventCallback-DFvqG3p2.js";import"./SkeletonBar-C5qOS_tN.js";import"./LoadingCell-Dk5yhj2P.js";import"./ColumnConfigDialog-CwfwOYOT.js";import"./DraggableList-Bc-cadL2.js";import"./search-BSDyuuEt.js";import"./Input-BQ69AAqr.js";import"./useControlled-B94x4lv8.js";import"./isEqual-DWyezf-d.js";import"./isObject-J1Az8jaZ.js";import"./Button-E81dSXSm.js";import"./ActionButton-TG8YPeM3.js";import"./Checkbox-B-vpnnXS.js";import"./useValueChanged-D3V3UkpS.js";import"./CollapsiblePanel-BVxLKlBv.js";import"./MultiColumnSortDialog-CyuBhwb5.js";import"./MenuTrigger-DSIuTp-N.js";import"./CompositeItem-D2lVOo6X.js";import"./ToolbarRootContext-JCvgM6Mp.js";import"./getDisabledMountTransitionStyles-Dy_PX6T4.js";import"./getPseudoElementBounds-DxXNZ4R-.js";import"./chevron-down-TYpwe3O5.js";import"./index-BS778pXW.js";import"./error-CJRuy9Eq.js";import"./BaseCbacBanner-buppnQCi.js";import"./makeExternalStore-NaZQ5_sz.js";import"./Tooltip-X2ZFgy_f.js";import"./PopoverPopup-C99h-obr.js";import"./toNumber-DxTGzT3S.js";import"./useOsdkClient-DTkXPsfR.js";import"./tick-DOnm_b7O.js";import"./DropdownField-Dx9j_SNq.js";import"./withOsdkMetrics-UyO6uczm.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
