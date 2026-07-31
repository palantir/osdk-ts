import{f as p,j as e}from"./iframe-8l4VgzvN.js";import{O as i}from"./object-table-BYDCS3dp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWMgMhg-.js";import"./Table-BtXRikvm.js";import"./index-CENhKLHr.js";import"./Dialog-7UDuPlvQ.js";import"./cross-B2bEUPP4.js";import"./svgIconContainer-BQL_tfkb.js";import"./useBaseUiId-DUa6Gl7o.js";import"./InternalBackdrop-BYDChCJ5.js";import"./composite-a8JqXKoE.js";import"./index-e67zZ8CW.js";import"./index-ue3NKf6y.js";import"./index-CGcIjaZR.js";import"./useEventCallback-BBSO6LkX.js";import"./SkeletonBar-Cb6FypxV.js";import"./LoadingCell-Cb2SpVHN.js";import"./ColumnConfigDialog-7R66Lh7L.js";import"./DraggableList-BXrBLydx.js";import"./search-Bd8us1xK.js";import"./Input-CdaK_hcH.js";import"./useControlled-D-2KZgoS.js";import"./isEqual-Di3NOZUo.js";import"./isObject-Bswa1wAC.js";import"./Button-aIlHQ8yg.js";import"./ActionButton-C_uBNnQ3.js";import"./Checkbox-CjIu4B-7.js";import"./useValueChanged-Zk553mpV.js";import"./CollapsiblePanel-DqyaDfuX.js";import"./MultiColumnSortDialog-BTeLTlUO.js";import"./MenuTrigger-CsMLDPFG.js";import"./CompositeItem-Db4Osd20.js";import"./ToolbarRootContext-DpqGT7Lo.js";import"./getDisabledMountTransitionStyles-C2NmiCwZ.js";import"./getPseudoElementBounds-CJwQ3ni7.js";import"./chevron-down-DTdeumy4.js";import"./index-CqpjD42R.js";import"./error-B0b_D1P0.js";import"./BaseCbacBanner-uVAZLnwX.js";import"./makeExternalStore-vb2YzOlo.js";import"./Tooltip-DHWPRF-j.js";import"./PopoverPopup-pIzCYtCt.js";import"./toNumber-DKpENdrk.js";import"./useOsdkClient-_FMDwwtZ.js";import"./tick-rt-IJVvT.js";import"./DropdownField-PUakMDKl.js";import"./withOsdkMetrics-BlRozGsn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
