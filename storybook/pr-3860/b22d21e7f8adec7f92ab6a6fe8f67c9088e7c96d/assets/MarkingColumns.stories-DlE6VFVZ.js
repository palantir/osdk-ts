import{f as p,j as e}from"./iframe-Bl9Agv3T.js";import{O as i}from"./object-table-BG0To-J4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2Q81Ac3.js";import"./Table-BlXfDqyU.js";import"./index-DsMKsdV8.js";import"./Dialog-DZ9rfxK8.js";import"./cross-DNHfVbpu.js";import"./svgIconContainer-CYsYLgfA.js";import"./useBaseUiId-CxMJijpy.js";import"./InternalBackdrop-C4VzyeDT.js";import"./composite-BXwJLY2p.js";import"./index-Bqfpj0Ej.js";import"./index-DTOWBSwW.js";import"./index-D-bhGtGz.js";import"./useEventCallback-dyRpDIhK.js";import"./SkeletonBar-KfT1mCrA.js";import"./LoadingCell-CbXaSrBE.js";import"./ColumnConfigDialog-BlCGNGQ_.js";import"./DraggableList-CM5Y7MVj.js";import"./search-BMgb5_aJ.js";import"./Input-BPwTrKsb.js";import"./useControlled-BFzsGkd0.js";import"./Button-C9n-JPHB.js";import"./small-cross-DDl_mPr6.js";import"./ActionButton-sQxxk7Mn.js";import"./Checkbox-CZOAd3AB.js";import"./useValueChanged-Z7Be-pzQ.js";import"./CollapsiblePanel-B4rX7D3r.js";import"./MultiColumnSortDialog-D9YNntfk.js";import"./MenuTrigger-H_h16LiM.js";import"./CompositeItem-D_lixxrU.js";import"./ToolbarRootContext-DtF-FbA5.js";import"./getDisabledMountTransitionStyles-CmUtvBkr.js";import"./getPseudoElementBounds-BLuA6Yh1.js";import"./chevron-down-BpdWjY1P.js";import"./index-CzVK5CEn.js";import"./error-BNDEYQ-r.js";import"./BaseCbacBanner-BmN75nkV.js";import"./makeExternalStore-D9cq61Qp.js";import"./Tooltip-CfmWYMwT.js";import"./PopoverPopup-BlQUb6MZ.js";import"./debounce-B0RIZne8.js";import"./useOsdkClient-KsFQc-mA.js";import"./tick-BQpeZs08.js";import"./DropdownField-BaZrA__h.js";import"./isEqual-CQ-BNQDU.js";import"./withOsdkMetrics-Bn6nYcc2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
