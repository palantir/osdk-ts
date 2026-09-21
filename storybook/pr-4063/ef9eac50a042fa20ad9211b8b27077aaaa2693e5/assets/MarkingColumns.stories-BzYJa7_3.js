import{f as p,j as e}from"./iframe-CjpAd4U5.js";import{O as i}from"./object-table-B1N2YZGj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfNxESlv.js";import"./Table-B-2W-CJ2.js";import"./index-CFyMtNDf.js";import"./Dialog-BTEOwbFI.js";import"./cross-YCEgVYb5.js";import"./svgIconContainer-BfRjvWya.js";import"./useBaseUiId-DtGYbhuk.js";import"./InternalBackdrop-_y5D9f1C.js";import"./composite-CXKEjPEl.js";import"./index-CESQmif6.js";import"./index-BqxRrYRP.js";import"./index-6181skxy.js";import"./useEventCallback-CJNt2kD4.js";import"./SkeletonBar-C6jHBjWT.js";import"./LoadingCell-DsM74MbC.js";import"./ColumnConfigDialog-D16XIRUR.js";import"./DraggableList-T2ec2RNh.js";import"./search-CXQZDVwK.js";import"./Input-BMeqWiRY.js";import"./useControlled-DlmQuXZO.js";import"./Button-B8Qahzmt.js";import"./small-cross-D9G7qUei.js";import"./ActionButton-CpKjD_O3.js";import"./Checkbox-Bpk90P30.js";import"./useValueChanged-C6MnAZ9a.js";import"./CollapsiblePanel-DuW80WT3.js";import"./MultiColumnSortDialog-CW0LUVRi.js";import"./MenuTrigger-CCjqXcFD.js";import"./CompositeItem-M0I4N5Qo.js";import"./ToolbarRootContext-pZWEREev.js";import"./getDisabledMountTransitionStyles-DQtOlfYI.js";import"./getPseudoElementBounds-VcyCM6_5.js";import"./chevron-down-Dk_9PWbo.js";import"./index-D-J9KFgM.js";import"./error-DP0C5EXb.js";import"./BaseCbacBanner-Cu9DTugF.js";import"./makeExternalStore-m3vRiWo8.js";import"./Tooltip-BDKJdSJE.js";import"./PopoverPopup-D3nKiinq.js";import"./debounce-DcMhn9AR.js";import"./useOsdkClient-C1vhGPX1.js";import"./tick-Dy5_FPax.js";import"./DropdownField-DCYZRjtJ.js";import"./isEqual-CTh71RS_.js";import"./withOsdkMetrics-q9Wg1g7p.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
