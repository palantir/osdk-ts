import{f as p,j as e}from"./iframe-Bw3x6lZJ.js";import{O as i}from"./object-table-KzIqbEB8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6ImcOTa.js";import"./Table-Dn3rkKiX.js";import"./index-Qclu0QrF.js";import"./Dialog-Diba78Yn.js";import"./cross-m2G2dPiH.js";import"./svgIconContainer-BM9FUCfQ.js";import"./useBaseUiId-vJHidliA.js";import"./InternalBackdrop-BBU4IrWY.js";import"./composite-aqmH1tPf.js";import"./index-cks-ZHTj.js";import"./index-BCgpKXyP.js";import"./index-DAhYrebj.js";import"./useEventCallback-B3x6jacx.js";import"./SkeletonBar-CuoJzBkC.js";import"./LoadingCell-DiT3zFwT.js";import"./ColumnConfigDialog-CcIdW_Y_.js";import"./DraggableList-B4PR-Ql0.js";import"./search-D48t6EZV.js";import"./Input-DR8DiZ8k.js";import"./useControlled-oOeAgRpZ.js";import"./isEqual-Cj10nL2b.js";import"./isObject-POigzj9I.js";import"./Button-CFbUHaqb.js";import"./ActionButton-Bv98HW9B.js";import"./Checkbox-_PsJuHu0.js";import"./useValueChanged-CRiOWQUR.js";import"./CollapsiblePanel-DDt6cKZo.js";import"./MultiColumnSortDialog-CYroUACu.js";import"./MenuTrigger-CHrB0ZA9.js";import"./CompositeItem-f_kpd3CD.js";import"./ToolbarRootContext-4HkoDmNp.js";import"./getDisabledMountTransitionStyles-DASxAd7F.js";import"./getPseudoElementBounds-CcrwyNPG.js";import"./chevron-down-mYSDwVOj.js";import"./index-D9NWm6bI.js";import"./error-B-KtUvsa.js";import"./BaseCbacBanner-U4HxRxxX.js";import"./makeExternalStore-xbWe60kF.js";import"./Tooltip-QdSUHEnp.js";import"./PopoverPopup-Bjb7rB-u.js";import"./toNumber-D9ViIeEh.js";import"./useOsdkClient-BBzpp516.js";import"./tick-CqjIagJp.js";import"./DropdownField-ws6Kg5_D.js";import"./withOsdkMetrics-BzxdER45.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
