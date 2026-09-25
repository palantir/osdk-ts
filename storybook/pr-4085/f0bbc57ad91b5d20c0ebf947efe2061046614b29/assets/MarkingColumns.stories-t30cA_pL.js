import{f as p,j as e}from"./iframe-DUMXb5nI.js";import{O as i}from"./object-table-BDaQbe3w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJwXp4Q-.js";import"./Table-DKTu2e5B.js";import"./index-BbwFJ-ta.js";import"./Dialog-dT22cMHq.js";import"./cross-D_uZDyQx.js";import"./svgIconContainer-sVTzBKmW.js";import"./useBaseUiId-_e14ZC1l.js";import"./InternalBackdrop-CJNWsu2d.js";import"./composite-D-SRMe6j.js";import"./index-CNSnRqug.js";import"./index-DYmqgljQ.js";import"./index-7zI_gih7.js";import"./useEventCallback-ChqFaUAL.js";import"./SkeletonBar-CSPA62mF.js";import"./LoadingCell-D2OEMclx.js";import"./ColumnConfigDialog-DzXCaLxv.js";import"./DraggableList-BWkG-iJ_.js";import"./search-TGSQVeh_.js";import"./Input-DiFVGF-l.js";import"./useControlled-BDe8NiPs.js";import"./Button-BgjvY2h6.js";import"./small-cross-DAi9ABlY.js";import"./ActionButton-DBuZkuqt.js";import"./Checkbox-CpSDYiLA.js";import"./useValueChanged-B3sHWLjz.js";import"./CollapsiblePanel-BGXgYcLe.js";import"./MultiColumnSortDialog-BMg6PxrU.js";import"./MenuTrigger-Dm8pjmIz.js";import"./CompositeItem-HBdNGEyu.js";import"./ToolbarRootContext-LKaZxJnb.js";import"./getDisabledMountTransitionStyles-C0sSy9Tx.js";import"./getPseudoElementBounds-C-fSL_7l.js";import"./chevron-down-C-ZMpNeB.js";import"./index-CwUqs_yy.js";import"./error-Cm3UeO8R.js";import"./BaseCbacBanner-CKZAQPTu.js";import"./makeExternalStore-BwFxLGns.js";import"./Tooltip-PrnQ8hCt.js";import"./PopoverPopup-DQegoE5S.js";import"./debounce-Ct13Tnzu.js";import"./useOsdkClient-Ce1WdpbO.js";import"./tick-CJMPUx9Y.js";import"./DropdownField-B_P7JzgN.js";import"./isEqual-25Tdwmwq.js";import"./withOsdkMetrics-pgg1h4tV.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
