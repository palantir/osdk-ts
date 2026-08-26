import{f as p,j as e}from"./iframe-IE85mU0C.js";import{O as i}from"./object-table-VIQdSIiM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOAVNMzj.js";import"./Table-BUUulN0Y.js";import"./index-Cb-uWra3.js";import"./Dialog-CZVPdwGB.js";import"./cross-B7J67M4-.js";import"./svgIconContainer-DstMKe-n.js";import"./useBaseUiId-ChrCSMbI.js";import"./InternalBackdrop-BJ4sp-TV.js";import"./composite-mlo2KNAb.js";import"./index-CBYXm5R5.js";import"./index-6Itdkxzy.js";import"./index-BsUZ9W2f.js";import"./useEventCallback-BDUXB78A.js";import"./SkeletonBar-DPNqEMQ-.js";import"./LoadingCell-d80XHTZ_.js";import"./ColumnConfigDialog-DMOAQiEJ.js";import"./DraggableList-CdhbZ45T.js";import"./search-OX4J1wJ3.js";import"./Input-BPNEbKHH.js";import"./useControlled-BXrD1fp6.js";import"./Button-B-X3VNkp.js";import"./small-cross-FEZjqabC.js";import"./ActionButton-Bmb7hpam.js";import"./Checkbox-DfUuehp8.js";import"./useValueChanged--7cQqyYE.js";import"./CollapsiblePanel-CbdW_t08.js";import"./MultiColumnSortDialog-DYFh7fse.js";import"./MenuTrigger-CfqEz4nM.js";import"./CompositeItem-DZQ4wuX3.js";import"./ToolbarRootContext-Bkab47o6.js";import"./getDisabledMountTransitionStyles-D2JDsEiR.js";import"./getPseudoElementBounds-CsgiHNji.js";import"./chevron-down-DF5Twgp3.js";import"./index-BNUcpvM4.js";import"./error-C3z-yM5U.js";import"./BaseCbacBanner-DCvcYvuq.js";import"./makeExternalStore-B2AoPMSj.js";import"./Tooltip-BwBdjepj.js";import"./PopoverPopup-DEA0O1h4.js";import"./debounce-DBEu6yXI.js";import"./useOsdkClient-C_Z8b3Qp.js";import"./tick-DXtXHPPs.js";import"./DropdownField-wEalnpiM.js";import"./isEqual-B5lM3oF_.js";import"./withOsdkMetrics-BRxVuFD2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
