import{f as p,j as e}from"./iframe-CVjWJMmF.js";import{O as i}from"./object-table-D4ooF-A_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DW9TanSD.js";import"./Table-NZffx37x.js";import"./index-DkPpZQEy.js";import"./Dialog-CWfQdoBZ.js";import"./cross-Dl2vOulJ.js";import"./svgIconContainer-DkRHhgAa.js";import"./useBaseUiId-OuEDX3TX.js";import"./InternalBackdrop-CR34Ewfm.js";import"./composite-BCNmB505.js";import"./index-D4WXG5sY.js";import"./index-w6zbUUyx.js";import"./index-Dm_Ge5uT.js";import"./useEventCallback-B5YEIz9O.js";import"./SkeletonBar-DX1RNCoe.js";import"./LoadingCell-D4-E-UQj.js";import"./ColumnConfigDialog-YTFZCCrW.js";import"./DraggableList-BbL5yczo.js";import"./search-Cenk5EYj.js";import"./Input-Bt-eNbkA.js";import"./useControlled-Cb41SkUR.js";import"./Button-Dhayy-gQ.js";import"./small-cross-BYy4lIdj.js";import"./ActionButton-Bz2nLLis.js";import"./Checkbox-DsL8lHse.js";import"./useValueChanged-BLqQhLSX.js";import"./CollapsiblePanel-CCmgcfNX.js";import"./MultiColumnSortDialog-BMJWLvKA.js";import"./MenuTrigger-CqCLQ8GU.js";import"./CompositeItem-U33_rWfO.js";import"./ToolbarRootContext-n7CVeFta.js";import"./getDisabledMountTransitionStyles-CbAAbmOX.js";import"./getPseudoElementBounds-BQFi3yBI.js";import"./chevron-down-CJH6CLnR.js";import"./index-gTNpBnbn.js";import"./error-w9z2sjwy.js";import"./BaseCbacBanner-DPcBpAnp.js";import"./makeExternalStore-CpmQogqA.js";import"./Tooltip-BhxZaxYf.js";import"./PopoverPopup-B9Qp2Kpx.js";import"./debounce-D8r16Qwg.js";import"./useOsdkClient-DnVFgevD.js";import"./tick-B-ooZKr2.js";import"./DropdownField-CifY0DIK.js";import"./isEqual-ijbEh8nu.js";import"./withOsdkMetrics-D-WikLGs.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
