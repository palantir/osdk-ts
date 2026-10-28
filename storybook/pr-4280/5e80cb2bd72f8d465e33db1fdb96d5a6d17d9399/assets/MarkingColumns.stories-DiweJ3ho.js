import{f as p,j as e}from"./iframe-D9bc5sGs.js";import{O as i}from"./object-table-D98NQBsI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vGOnJPAI.js";import"./Table-BjYScxa6.js";import"./index-CEam5gFO.js";import"./Dialog-DIn83yZk.js";import"./cross-BPOrfQFo.js";import"./svgIconContainer-Dhw0ma3V.js";import"./useBaseUiId-DLMQDqLu.js";import"./InternalBackdrop-VOmSs6FM.js";import"./composite-BeRvyJhW.js";import"./index-ClW3grIR.js";import"./index-BdCRvfl5.js";import"./index-ZYtQI0k4.js";import"./useEventCallback-BoorzceT.js";import"./SkeletonBar-DcN0x3Jd.js";import"./LoadingCell-CUn_ULP8.js";import"./ColumnConfigDialog-BJ532Rxa.js";import"./DraggableList-BZLxRXoI.js";import"./search-Bf3j8VuO.js";import"./Input-D8Pr2sKK.js";import"./useControlled-DNEcMFJZ.js";import"./Button-FP5Viz1l.js";import"./small-cross-DB8z7y2Q.js";import"./ActionButton-ByEZi_P7.js";import"./Checkbox-FPB0D1z8.js";import"./useValueChanged-BshnFGHt.js";import"./CollapsiblePanel-DHmmGhnb.js";import"./MultiColumnSortDialog-BPa70xRK.js";import"./MenuTrigger-8kQCsdaA.js";import"./CompositeItem-DUTzLbNz.js";import"./ToolbarRootContext-Be9Mfuy4.js";import"./getDisabledMountTransitionStyles-C4hp9GAV.js";import"./getPseudoElementBounds-Bb0zZX2S.js";import"./chevron-down-Cyz2_1Cu.js";import"./index-DCNHXyz8.js";import"./error-Df3SJLzh.js";import"./BaseCbacBanner-CvVmvohl.js";import"./makeExternalStore-DCoCUTl5.js";import"./Tooltip-zRPANrX1.js";import"./PopoverPopup-DbOGNWOA.js";import"./debounce-7BefPhSx.js";import"./useOsdkClient-CSlIz3Zl.js";import"./tick-jhbvcied.js";import"./DropdownField-Chrmpf_E.js";import"./isEqual-D-lr0oWU.js";import"./withOsdkMetrics-B-tcpkdE.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
