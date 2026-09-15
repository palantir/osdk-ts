import{f as p,j as e}from"./iframe-DX9GTmTS.js";import{O as i}from"./object-table-BwtPBHMG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJHRWIj0.js";import"./Table-B0RyClyk.js";import"./index-qD7KPbHv.js";import"./Dialog-CBJ6xqNI.js";import"./cross-CnnW3pn0.js";import"./svgIconContainer-DiXmcE79.js";import"./useBaseUiId-LIEARN9F.js";import"./InternalBackdrop-DXzjiCbf.js";import"./composite-YtQb8O1c.js";import"./index-D6AHn8lU.js";import"./index-BFmznvox.js";import"./index-BI0-O9XB.js";import"./useEventCallback-Dz7-lFnn.js";import"./SkeletonBar-zzijKBDR.js";import"./LoadingCell-V3lORDX6.js";import"./ColumnConfigDialog-BJzQGuAy.js";import"./DraggableList-Dn15y9zJ.js";import"./search-CpS_oLmz.js";import"./Input-D3jwcYVb.js";import"./useControlled-Bbq2I_dd.js";import"./Button-B-xJiokr.js";import"./small-cross-99puV05O.js";import"./ActionButton-CUYGPjpl.js";import"./Checkbox-kStpg7os.js";import"./useValueChanged-xT7sW3-e.js";import"./CollapsiblePanel-BILO_2dF.js";import"./MultiColumnSortDialog-BxprvtcX.js";import"./MenuTrigger-B_Z_Pbg2.js";import"./CompositeItem-CDg-ghY6.js";import"./ToolbarRootContext-HucsP966.js";import"./getDisabledMountTransitionStyles-aiGqPhBD.js";import"./getPseudoElementBounds-fJ1HXQTt.js";import"./chevron-down-DasCvZc6.js";import"./index-B6DX-C20.js";import"./error-BLx5cAN8.js";import"./BaseCbacBanner-CoL5y8lQ.js";import"./makeExternalStore-ChFrK0L7.js";import"./Tooltip-Ba8TKTH9.js";import"./PopoverPopup-DtfiGPFv.js";import"./debounce-BubrlkRY.js";import"./useOsdkClient-C1e-iWGi.js";import"./tick-BfAQ_n_q.js";import"./DropdownField-DaWEyCui.js";import"./isEqual-4EDI4GuI.js";import"./withOsdkMetrics-CVU4RfbR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
