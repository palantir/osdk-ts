import{f as p,j as e}from"./iframe-OLZMb4D5.js";import{O as i}from"./object-table-C0u5Nyay.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-RKY21aDn.js";import"./Table-BV0KvpzI.js";import"./index-uqrBuBmm.js";import"./Dialog-FHcDtkV2.js";import"./cross-C6sWsdCt.js";import"./svgIconContainer-UQoXiqqi.js";import"./useBaseUiId-PcdFyC4z.js";import"./InternalBackdrop-DPnwzQoA.js";import"./composite-ccxieFdd.js";import"./index-9pMWT7G3.js";import"./index-DzOZG8PU.js";import"./index-D9aYyFSG.js";import"./useEventCallback-Clkkc761.js";import"./SkeletonBar-UJ2KeehE.js";import"./LoadingCell-Dno7fuWS.js";import"./ColumnConfigDialog-B_gwSPYs.js";import"./DraggableList-DY59ynwG.js";import"./search-DZcjiMHC.js";import"./Input-CNxC7OWq.js";import"./useControlled-D50eYvCK.js";import"./Button-CVZ672ZX.js";import"./small-cross-DlQAt_1X.js";import"./ActionButton-Dr-SMGaZ.js";import"./Checkbox-Cg9__Cns.js";import"./useValueChanged-DTUEgWiI.js";import"./CollapsiblePanel-CilVibKg.js";import"./MultiColumnSortDialog-BGs8lqlA.js";import"./MenuTrigger-BnrLP3Ax.js";import"./CompositeItem-DUyVPGMH.js";import"./ToolbarRootContext-DulRS7Xf.js";import"./getDisabledMountTransitionStyles-Dp3MlQN6.js";import"./getPseudoElementBounds-Dd9XPosA.js";import"./chevron-down-CIukKbVS.js";import"./index-3bphJVPw.js";import"./error-CeyqzC3E.js";import"./BaseCbacBanner-DQ04thLC.js";import"./makeExternalStore-BBNFskLs.js";import"./Tooltip-D_ARL5hn.js";import"./PopoverPopup-C66q4O0T.js";import"./debounce-CJrA9wux.js";import"./useOsdkClient-pPuF8Xca.js";import"./tick-Cof-csWx.js";import"./DropdownField-DsSXPUWR.js";import"./isEqual-RFLHgDQt.js";import"./withOsdkMetrics-B3WIkRHJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
