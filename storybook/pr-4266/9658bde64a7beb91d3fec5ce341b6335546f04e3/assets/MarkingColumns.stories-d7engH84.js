import{f as p,j as e}from"./iframe-BK92nj8O.js";import{O as i}from"./object-table-C_ms1YYM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzvFWRwm.js";import"./Table-ybPM_z_s.js";import"./index-Cp-oegvQ.js";import"./Dialog-C5rrN2iU.js";import"./cross-CQouWOVo.js";import"./svgIconContainer-CUCnXzLA.js";import"./useBaseUiId-DJzLMsdJ.js";import"./InternalBackdrop-CXx_gZFt.js";import"./composite-CUOp8zR0.js";import"./index-CRvcO-Mq.js";import"./index-Vq2K6jMQ.js";import"./index-BOzml72P.js";import"./useEventCallback-DW2JMFk8.js";import"./SkeletonBar-CUN-Db9r.js";import"./LoadingCell-B25Xa0BU.js";import"./ColumnConfigDialog-Ceb4wjXo.js";import"./DraggableList-D1Tjvk-y.js";import"./search-Cx7lcCpX.js";import"./Input-R7iFBYJw.js";import"./useControlled-D4vgYWXW.js";import"./Button-CLd3GlZq.js";import"./small-cross-DGwpD6_s.js";import"./ActionButton-BkWRPx-v.js";import"./Checkbox-D0BoCwAX.js";import"./useValueChanged-DREFbt6f.js";import"./CollapsiblePanel-fv8SIwpm.js";import"./MultiColumnSortDialog-D3G2Cdgi.js";import"./MenuTrigger-oYqLCT26.js";import"./CompositeItem-BUqJx2UC.js";import"./ToolbarRootContext-DaxowF1A.js";import"./getDisabledMountTransitionStyles-Dx3aHikn.js";import"./getPseudoElementBounds-BOjBrs5G.js";import"./chevron-down-DFEA5aIq.js";import"./index-D33Byr__.js";import"./error-CpelSvOO.js";import"./BaseCbacBanner-B6Aq0ByB.js";import"./makeExternalStore-C6TfNWC7.js";import"./Tooltip-DraOFyZC.js";import"./PopoverPopup-mBT0X6Cq.js";import"./debounce-CcroCpX3.js";import"./useOsdkClient-CR-tfmoo.js";import"./tick-DePsAy0F.js";import"./DropdownField-CfACKZfD.js";import"./isEqual-EKhcscH8.js";import"./withOsdkMetrics-F47lPElZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
