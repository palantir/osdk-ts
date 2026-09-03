import{f as p,j as e}from"./iframe-g6xxvyIV.js";import{O as i}from"./object-table-BWyD-xVP.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VtRw9ZxB.js";import"./Table-CWYryIq-.js";import"./index-CswLMQ0k.js";import"./Dialog-gHaoBoVV.js";import"./cross-ClaRDnYq.js";import"./svgIconContainer-TEGni_EK.js";import"./useBaseUiId-DXMdH-da.js";import"./InternalBackdrop-B2kPN_TW.js";import"./composite-CidrPxyb.js";import"./index-B1T8sIVD.js";import"./index-Df1hA2tb.js";import"./index-BqNrJX4d.js";import"./useEventCallback-Q7tlTXVx.js";import"./SkeletonBar-CIK4W8nM.js";import"./LoadingCell-Cf0gPIJl.js";import"./ColumnConfigDialog-TZ-5NdgB.js";import"./DraggableList-TxpAQF2V.js";import"./search-CoUKVa3J.js";import"./Input-DvVClOUT.js";import"./useControlled-DBzkXlO9.js";import"./Button-BX2PLV5j.js";import"./small-cross-DuwCmfeY.js";import"./ActionButton-B6C4Psnv.js";import"./Checkbox-CVKZIi-z.js";import"./useValueChanged-DvWpAsov.js";import"./CollapsiblePanel-RFMs-0SV.js";import"./MultiColumnSortDialog-Dq269Ur2.js";import"./MenuTrigger-BOmmKr51.js";import"./CompositeItem-D8bzrW1A.js";import"./ToolbarRootContext-CnYeU0vp.js";import"./getDisabledMountTransitionStyles-AFQK8iPs.js";import"./getPseudoElementBounds-COVW9G6p.js";import"./chevron-down-CkRfYs8Z.js";import"./index-DuMOiw4h.js";import"./error-BGoiu4dF.js";import"./BaseCbacBanner-y5Sk3JyZ.js";import"./makeExternalStore-BrS-ebeG.js";import"./Tooltip-82FaG7gZ.js";import"./PopoverPopup-MFr_6M87.js";import"./debounce-D2Twfe4R.js";import"./useOsdkClient-DQW7wz7c.js";import"./tick-BcR7azTr.js";import"./DropdownField-B2rbjyzb.js";import"./isEqual-D1gQH29y.js";import"./withOsdkMetrics-CfHIwfTt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
