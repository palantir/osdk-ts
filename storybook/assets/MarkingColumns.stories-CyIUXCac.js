import{f as p,j as e}from"./iframe-KbQIFRGa.js";import{O as i}from"./object-table-A-4UVlPs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DjBvGnlI.js";import"./index-oNQDT3pN.js";import"./Dialog-LTN4yp4-.js";import"./cross-DoOTv_Kw.js";import"./svgIconContainer-sykDQB1x.js";import"./useBaseUiId-C5Z8PN8H.js";import"./InternalBackdrop-hXLK1iL5.js";import"./composite-GGTk9X_4.js";import"./index-D106GrLT.js";import"./index-bW-kSRQs.js";import"./index-dFSZLdFi.js";import"./useEventCallback-n0URW7JS.js";import"./SkeletonBar-I3jGGBun.js";import"./LoadingCell-DC9Ucowt.js";import"./ColumnConfigDialog-C4HjDGjr.js";import"./DraggableList-DiR0P00x.js";import"./search-CWIUc-iX.js";import"./Input-DCRhBd7X.js";import"./useControlled-IL1laNWB.js";import"./Button-DJ-kvAuB.js";import"./small-cross-Bxoh5HWy.js";import"./ActionButton-DtiTD6NE.js";import"./Checkbox-D6Lt66gL.js";import"./useValueChanged-BsapA-Fb.js";import"./CollapsiblePanel-DrC-9h6Q.js";import"./MultiColumnSortDialog-MXCrgjw4.js";import"./MenuTrigger-02eyTE7O.js";import"./CompositeItem-Du9x_QN-.js";import"./ToolbarRootContext-DVI-t-Yd.js";import"./getDisabledMountTransitionStyles-B2mb34X0.js";import"./getPseudoElementBounds-C0gXzrnf.js";import"./chevron-down-sNT3G-Lr.js";import"./index-BwbXqol-.js";import"./error-BfNvRC5H.js";import"./BaseCbacBanner-C1tqFwkR.js";import"./makeExternalStore-CkNn2ki8.js";import"./Tooltip-BFeQnd1L.js";import"./PopoverPopup-yB1fiotD.js";import"./debounce-W5fS1vR_.js";import"./useOsdkClient-C5xzc4Kj.js";import"./tick-CchspkVg.js";import"./DropdownField-BLXTmoIg.js";import"./isEqual-CpUPP3_F.js";import"./withOsdkMetrics-CE7F9eew.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
