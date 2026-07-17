import{f as p,j as e}from"./iframe-dM1Kh9EX.js";import{O as i}from"./object-table-B82lnkIi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-7FMWkzZS.js";import"./Table-cVdne5An.js";import"./index-B_KvKlce.js";import"./Dialog-C3Ce6gza.js";import"./cross-7AVQJru9.js";import"./svgIconContainer-Cx6Roc0W.js";import"./useBaseUiId-CVUY4bty.js";import"./InternalBackdrop-B3bGPZLn.js";import"./composite-DO-bqvDw.js";import"./index-g4kvI24p.js";import"./index-hjB_ZAfP.js";import"./index-DH2exy3-.js";import"./useEventCallback-BBUrZycY.js";import"./SkeletonBar-BQF9paXw.js";import"./LoadingCell-BUSMGpl6.js";import"./ColumnConfigDialog-BgVRpnqk.js";import"./DraggableList-BfVzgoon.js";import"./search-Bnfq5zPQ.js";import"./Input-DMcuRq9E.js";import"./useControlled-BZAbwJqP.js";import"./isEqual-C7V40YS0.js";import"./isObject-BXAfFXGd.js";import"./Button-CVLs3bjY.js";import"./ActionButton-GuuVk3P2.js";import"./Checkbox-BL7ZZXUO.js";import"./useValueChanged-BgGhZbIM.js";import"./CollapsiblePanel-D8g0BU6l.js";import"./MultiColumnSortDialog-CMVBp_G-.js";import"./MenuTrigger-oHfgy5O4.js";import"./CompositeItem-DEsFuTA4.js";import"./ToolbarRootContext-Dz7Y7U5D.js";import"./getDisabledMountTransitionStyles-DPoRLJtk.js";import"./getPseudoElementBounds-DCRW1Npc.js";import"./chevron-down-VABUlAmo.js";import"./index-C0EtQevH.js";import"./error-ByQ05fhN.js";import"./BaseCbacBanner-BKxtNFe3.js";import"./makeExternalStore-DOsKi0Pr.js";import"./Tooltip-CKSdaNNW.js";import"./PopoverPopup-CnuU0M4Z.js";import"./toNumber-CH9rsK5h.js";import"./useOsdkClient-BaeD6vgQ.js";import"./tick-o2hA1na9.js";import"./DropdownField-D9613Ml5.js";import"./withOsdkMetrics-CXmu9d_h.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
