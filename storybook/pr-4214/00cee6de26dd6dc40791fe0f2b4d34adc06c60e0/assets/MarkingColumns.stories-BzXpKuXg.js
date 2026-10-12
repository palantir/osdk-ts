import{f as p,j as e}from"./iframe-0F7DfPLe.js";import{O as i}from"./object-table-C_o6_U1k.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6mO-KnDD.js";import"./Table-TSXH1iBc.js";import"./index-Djr_Jop1.js";import"./Dialog-DMahry3k.js";import"./cross-BVUsmn4r.js";import"./svgIconContainer-DTCoh7Fd.js";import"./useBaseUiId-SJpz-dQs.js";import"./InternalBackdrop-B1m6j3HH.js";import"./composite-DHXjkz_4.js";import"./index-EJLGsV9R.js";import"./index-DwIy8s5K.js";import"./index-R6GrqbYj.js";import"./useEventCallback-DUoe3CsI.js";import"./SkeletonBar-CXuflC8R.js";import"./LoadingCell-vD5FHOaA.js";import"./ColumnConfigDialog-CT4XAy2M.js";import"./DraggableList-BsAXguPI.js";import"./search-Ba_3E6-e.js";import"./Input-CAkxXyLf.js";import"./useControlled-aWzuAlWu.js";import"./Button-BmQF-Ia9.js";import"./small-cross-CDkCMjNB.js";import"./ActionButton-D21Af3H6.js";import"./Checkbox-y8uSVOiI.js";import"./useValueChanged-CP-BBW9F.js";import"./CollapsiblePanel-RNfr1kyY.js";import"./MultiColumnSortDialog-CZo4S3zo.js";import"./MenuTrigger-B2PrT13W.js";import"./CompositeItem-wpUfw-Sy.js";import"./ToolbarRootContext-RyDWl030.js";import"./getDisabledMountTransitionStyles-BQhIpI0n.js";import"./getPseudoElementBounds-DLhJqY1Y.js";import"./chevron-down-CdGiAoum.js";import"./index-RC7u8s6f.js";import"./error-CEwiS4uA.js";import"./BaseCbacBanner-CcqWw-uT.js";import"./makeExternalStore-xL_Ap3fc.js";import"./Tooltip-BqsM21S7.js";import"./PopoverPopup-DPjg8bEK.js";import"./debounce-C55KCuAL.js";import"./useOsdkClient-BLejN4Am.js";import"./tick-DOsknYHf.js";import"./DropdownField-DTXS9S7w.js";import"./isEqual-Bv_Lvinp.js";import"./withOsdkMetrics-B8TnMVr-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
