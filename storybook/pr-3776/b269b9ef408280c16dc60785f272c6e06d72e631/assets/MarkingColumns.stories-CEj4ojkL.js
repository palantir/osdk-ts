import{f as p,j as e}from"./iframe-BIlQe-_e.js";import{O as i}from"./object-table-Bebvc8ca.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BFh2Wy6v.js";import"./Table-BWx_Tlsd.js";import"./index-DyQxAk9R.js";import"./Dialog-RpHf0uzn.js";import"./cross-CmtgrNNa.js";import"./svgIconContainer-CnLOcakL.js";import"./useBaseUiId-Lc4z0DNa.js";import"./InternalBackdrop-D0_cKxNn.js";import"./composite-CXGKVIWm.js";import"./index-KCNI5t5s.js";import"./index-DpNXYgWj.js";import"./index-HpxznOGw.js";import"./useEventCallback-BUux2rPj.js";import"./SkeletonBar-DdTqPQUn.js";import"./LoadingCell-DDRHLt1N.js";import"./ColumnConfigDialog-Jac7HBrJ.js";import"./DraggableList-Be3rI4xp.js";import"./search-CvXaJDz5.js";import"./Input-DUUbREQT.js";import"./useControlled-BXHG-GT_.js";import"./isEqual-CysZ8GPX.js";import"./isObject-KXgKHR5w.js";import"./Button-BIbJzGLK.js";import"./ActionButton-CyvzC9uY.js";import"./Checkbox-BCZr5C4i.js";import"./useValueChanged-u9UTocIj.js";import"./CollapsiblePanel-B0R9sRzS.js";import"./MultiColumnSortDialog-BvJABZRG.js";import"./MenuTrigger-BrM5S858.js";import"./CompositeItem-CMnAuhM-.js";import"./ToolbarRootContext-BiHeKQZa.js";import"./getDisabledMountTransitionStyles-BLsKgdzx.js";import"./getPseudoElementBounds-M2Ec4uwN.js";import"./chevron-down-CkrYyXCx.js";import"./index-D1LAJk1I.js";import"./error-BCCPbpND.js";import"./BaseCbacBanner-DGsBlBEg.js";import"./makeExternalStore-Dm1wHibL.js";import"./Tooltip-DLimuesN.js";import"./PopoverPopup-DhXjlyY4.js";import"./toNumber-DGKs9c9J.js";import"./useOsdkClient-Cv8dxDy4.js";import"./tick-BK1SF6OQ.js";import"./DropdownField-CmlfBBm0.js";import"./withOsdkMetrics-DGZYkXqG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
