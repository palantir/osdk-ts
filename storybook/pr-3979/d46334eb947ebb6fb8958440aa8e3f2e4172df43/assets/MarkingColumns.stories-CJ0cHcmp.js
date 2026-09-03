import{f as p,j as e}from"./iframe-CK5D4Vrc.js";import{O as i}from"./object-table-odZsr0rd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--rfFAAg9.js";import"./Table-B6H8EmOv.js";import"./index-DTCKW3FC.js";import"./Dialog-MAq9T2A5.js";import"./cross-DqRqsA-Z.js";import"./svgIconContainer-B-9rvjfq.js";import"./useBaseUiId-ChiwJHU0.js";import"./InternalBackdrop-Dbr5rYW1.js";import"./composite-EY5o54z0.js";import"./index-B0VFCsPS.js";import"./index-Bf8FWlfU.js";import"./index-vAIMW8Pw.js";import"./useEventCallback-CDnpJnS0.js";import"./SkeletonBar-DauQo2dk.js";import"./LoadingCell-CgV3bQ4z.js";import"./ColumnConfigDialog-izBtKiAL.js";import"./DraggableList-CanQdJdW.js";import"./search-CQswBcjf.js";import"./Input-BkbLF__D.js";import"./useControlled-EjNIu-gh.js";import"./Button-QI0ogqOo.js";import"./small-cross-CvPfbhzU.js";import"./ActionButton-CMbHUj5v.js";import"./Checkbox-BHP2yOKQ.js";import"./useValueChanged-Bmru0ySn.js";import"./CollapsiblePanel-B9cQatbS.js";import"./MultiColumnSortDialog-BFioXfJ3.js";import"./MenuTrigger-BHa9H6Qv.js";import"./CompositeItem-GR3Crn-r.js";import"./ToolbarRootContext-fQ8fBJNz.js";import"./getDisabledMountTransitionStyles-CKHIKkcN.js";import"./getPseudoElementBounds-D8b8g-_9.js";import"./chevron-down-Bfelo19f.js";import"./index-BRqooFTa.js";import"./error-BTGDM8SC.js";import"./BaseCbacBanner-Ca5YQ56m.js";import"./makeExternalStore-BGHIEiJx.js";import"./Tooltip-L8rEht9z.js";import"./PopoverPopup-Wqv_QtzO.js";import"./debounce-BESlaVbz.js";import"./useOsdkClient-DQg5y7FA.js";import"./tick-Dc4uWMLG.js";import"./DropdownField-C2vkPRGk.js";import"./isEqual-N3gXTKiL.js";import"./withOsdkMetrics-BNMaUBqJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
