import{f as p,j as e}from"./iframe-BrJtcpJ-.js";import{O as i}from"./object-table-Ba60e5pC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CuoRPrGF.js";import"./Table-fr9x0s6y.js";import"./index-nkhoJcGd.js";import"./Dialog-Co9LnxK1.js";import"./cross-d8c80yU_.js";import"./svgIconContainer-DQxuiyDQ.js";import"./useBaseUiId-DFIfo0ZP.js";import"./InternalBackdrop-BbxmA2T7.js";import"./composite-C-pSriHc.js";import"./index-Dwk1Vkcl.js";import"./index-B5ZK0sbN.js";import"./index-D5JNcTNh.js";import"./useEventCallback-DoXYXLX5.js";import"./SkeletonBar-0Ro5ifVl.js";import"./LoadingCell-DmlDNf3u.js";import"./ColumnConfigDialog-v5___XS0.js";import"./DraggableList-DwFdvBiU.js";import"./search-X8eqGfVO.js";import"./Input-DAryto7C.js";import"./useControlled-Cd1hGYJl.js";import"./Button-DcuDiaTG.js";import"./small-cross-9wqnQkm4.js";import"./ActionButton-BDrruohV.js";import"./Checkbox-H76Gvg_o.js";import"./useValueChanged-C292XOMb.js";import"./CollapsiblePanel-hSjEACXk.js";import"./MultiColumnSortDialog-wsRq_6Fi.js";import"./MenuTrigger-DNY3kAMg.js";import"./CompositeItem-wSMz-Esy.js";import"./ToolbarRootContext-EqViDiBL.js";import"./getDisabledMountTransitionStyles-BjBvYd21.js";import"./getPseudoElementBounds-DUnOVe2o.js";import"./chevron-down-CoN2lN4l.js";import"./index-CfmHUnMx.js";import"./error-DVsSmDYx.js";import"./BaseCbacBanner-B-GEVUFt.js";import"./makeExternalStore-DiNYJVVJ.js";import"./Tooltip-W6ksbOeG.js";import"./PopoverPopup-D-7Tgy13.js";import"./debounce-DAXxoF40.js";import"./useOsdkClient-dk5-s00y.js";import"./tick-B2A_YE_w.js";import"./DropdownField-BIwUeAD-.js";import"./isEqual-AUI3jiRn.js";import"./withOsdkMetrics-DpnTSy7T.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
