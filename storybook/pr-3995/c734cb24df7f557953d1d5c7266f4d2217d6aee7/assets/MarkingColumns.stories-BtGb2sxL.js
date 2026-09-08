import{f as p,j as e}from"./iframe-Bx-FSmYs.js";import{O as i}from"./object-table-Cv1yp6hD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DgijergL.js";import"./Table-Dbp6APwZ.js";import"./index-xwvc2Shv.js";import"./Dialog-TQR3WEGg.js";import"./cross-BOo5QBm9.js";import"./svgIconContainer-CBLTX1NK.js";import"./useBaseUiId-BGi2L2nz.js";import"./InternalBackdrop-B8hquDAO.js";import"./composite-mmpRjkxT.js";import"./index-CIkpzaA0.js";import"./index-Ye47VGO5.js";import"./index-xtICGEp3.js";import"./useEventCallback-BGLusK4B.js";import"./SkeletonBar-BFUHP2GD.js";import"./LoadingCell-vwI2MB3B.js";import"./ColumnConfigDialog-1hcgSYsk.js";import"./DraggableList-DsHzmqx-.js";import"./search-CdlZ7Qxj.js";import"./Input-Cv-wNC9i.js";import"./useControlled-DFOJ9xFP.js";import"./Button--MuiOxa3.js";import"./small-cross-C5HaUcq8.js";import"./ActionButton-D6Z09ARR.js";import"./Checkbox-DBH3W9y2.js";import"./useValueChanged-CaNUz0pS.js";import"./CollapsiblePanel-D8RgHLfO.js";import"./MultiColumnSortDialog-NOQ-MfWj.js";import"./MenuTrigger-D8gV95KI.js";import"./CompositeItem-CMA7rFte.js";import"./ToolbarRootContext-DpyqD2o0.js";import"./getDisabledMountTransitionStyles-CvhueaJp.js";import"./getPseudoElementBounds-tUYGl_H1.js";import"./chevron-down-Buw4ucuN.js";import"./index-BY0uRhrX.js";import"./error-DdvC7qFd.js";import"./BaseCbacBanner-Ch_sTin_.js";import"./makeExternalStore-CCy_wMev.js";import"./Tooltip-LQkFV94i.js";import"./PopoverPopup-CKS7Qwq2.js";import"./debounce-D3Ov_i6N.js";import"./useOsdkClient-4GcPKkIA.js";import"./tick-DWhWBN2e.js";import"./DropdownField-BNciL4Ne.js";import"./isEqual-ErNB6Z1g.js";import"./withOsdkMetrics-UuLHfX-P.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
