import{f as p,j as e}from"./iframe-BP89Z9wn.js";import{O as i}from"./object-table-BwxRsYi9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpDXy6ri.js";import"./Table-BkomWwXJ.js";import"./index-7fPc8Pd4.js";import"./Dialog-BW7atylg.js";import"./cross-CseKBkZX.js";import"./svgIconContainer-B-B6fhYH.js";import"./useBaseUiId-BsQB3yjV.js";import"./InternalBackdrop-qHNvDGw-.js";import"./composite-JzO3n_7v.js";import"./index-yCs_Jqs_.js";import"./index-B2q267Hw.js";import"./index-RHMRxRkz.js";import"./useEventCallback-OSRHYtdG.js";import"./SkeletonBar-BVNLCVuA.js";import"./LoadingCell-B9UiRnTQ.js";import"./ColumnConfigDialog-CGzlL1ZB.js";import"./DraggableList-Bx6XvblW.js";import"./search-Ce4dpx9M.js";import"./Input-CurDQ8U3.js";import"./useControlled-DYUiPWJr.js";import"./Button-Bcmb5ML8.js";import"./small-cross-CxfEbA50.js";import"./ActionButton-QrFK0FUf.js";import"./Checkbox-CULg12Wm.js";import"./useValueChanged-SyUpxD-D.js";import"./CollapsiblePanel-C9i8cz4o.js";import"./MultiColumnSortDialog-GPZ6ZQYp.js";import"./MenuTrigger--b10bWzD.js";import"./CompositeItem-BWaumFAX.js";import"./ToolbarRootContext-BM5nRA8f.js";import"./getDisabledMountTransitionStyles-BNgnrYDf.js";import"./getPseudoElementBounds-bsHuPucT.js";import"./chevron-down-CbjEdb4A.js";import"./index-D2KO3R9_.js";import"./error-B9U50q0S.js";import"./BaseCbacBanner-B_kBlNl8.js";import"./makeExternalStore-G7zKBEOt.js";import"./Tooltip-DYmR_CPY.js";import"./PopoverPopup-oOwrFqQx.js";import"./debounce--3v9P4Lb.js";import"./useOsdkClient-BZi6F2zc.js";import"./tick-jzT-KPyz.js";import"./DropdownField-DBILA8E6.js";import"./isEqual-bFioetdV.js";import"./withOsdkMetrics-hOQ5lnvy.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
