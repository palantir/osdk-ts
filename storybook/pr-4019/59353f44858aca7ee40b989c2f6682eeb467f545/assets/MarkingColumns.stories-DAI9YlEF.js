import{f as p,j as e}from"./iframe-C0TXowYh.js";import{O as i}from"./object-table-CgEVeuv7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DxTxvmk8.js";import"./Table-DJG_r3Xk.js";import"./index-Cu2rgIRW.js";import"./Dialog-vTWvQ72w.js";import"./cross-BfvUUSFN.js";import"./svgIconContainer-C2fAWGrt.js";import"./useBaseUiId-CxGokxTP.js";import"./InternalBackdrop-BG3n3cO9.js";import"./composite-CXmgh9Nc.js";import"./index-u3QGRCwO.js";import"./index-C6Y-pof4.js";import"./index-BU6mBswW.js";import"./useEventCallback-DkQiwOiq.js";import"./SkeletonBar-D0XWEPXE.js";import"./LoadingCell-BIGgOebX.js";import"./ColumnConfigDialog-DmC6LqPv.js";import"./DraggableList-mYeO1b8W.js";import"./search-6re8IEAF.js";import"./Input-8EnzzSA0.js";import"./useControlled-BFSHGlV3.js";import"./Button-D_dg1W6z.js";import"./small-cross-Bc8Y0COB.js";import"./ActionButton-CtkWJ4rU.js";import"./Checkbox-B-Meopae.js";import"./useValueChanged-HDLvanC4.js";import"./CollapsiblePanel-D9qfjPFi.js";import"./MultiColumnSortDialog-BHXvxwMe.js";import"./MenuTrigger-DMgWfOwE.js";import"./CompositeItem-KxsL0x_o.js";import"./ToolbarRootContext-CE5VkmEX.js";import"./getDisabledMountTransitionStyles-D_Zo5NjY.js";import"./getPseudoElementBounds-WqJcoAVH.js";import"./chevron-down-D7WH3ySY.js";import"./index-DWDyv98l.js";import"./error-Z4OH-yWW.js";import"./BaseCbacBanner-6omcgI-g.js";import"./makeExternalStore-C_tJozdQ.js";import"./Tooltip-P9jbmoIC.js";import"./PopoverPopup-CuAJ2y9v.js";import"./debounce-DMyrgWDf.js";import"./useOsdkClient-Dik0BEfs.js";import"./tick-Bc8vz4AB.js";import"./DropdownField-09zuyy2T.js";import"./isEqual-DaFfWolB.js";import"./withOsdkMetrics-BPzAvbiW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
