import{f as p,j as e}from"./iframe-FyhVxTrk.js";import{O as i}from"./object-table-B-v3OglS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dgs_n9Dy.js";import"./Table-BrVoT8y3.js";import"./index-CXzmbyfT.js";import"./Dialog-ADhD3aFg.js";import"./cross-DPb3Lanf.js";import"./svgIconContainer-mVuSeb5R.js";import"./useBaseUiId-BsG-Zm5E.js";import"./InternalBackdrop-lcLk2Gq9.js";import"./composite-DaCZVCOl.js";import"./index-DRvakaoR.js";import"./index-BcB9qF6v.js";import"./index-DZEBmZlt.js";import"./useEventCallback-CS4xnGaY.js";import"./SkeletonBar-vBALGr9N.js";import"./LoadingCell-D_pAN0sa.js";import"./ColumnConfigDialog-Idwcyfol.js";import"./DraggableList-BP9Ko5QT.js";import"./search-CtSjt_Wn.js";import"./Input-CqlCBTmB.js";import"./useControlled-qW1tEB03.js";import"./isEqual-DKIpiXeA.js";import"./isObject-BX6l97k5.js";import"./Button-DZSjklBP.js";import"./ActionButton-DtPXi7bs.js";import"./Checkbox-CYpeO19Y.js";import"./useValueChanged-IvYOrVB3.js";import"./CollapsiblePanel-BDVhZGI8.js";import"./MultiColumnSortDialog-RxvuixfL.js";import"./MenuTrigger-FabbnfzY.js";import"./CompositeItem-D8I-jjeP.js";import"./ToolbarRootContext-_joG3CJi.js";import"./getDisabledMountTransitionStyles-D_8DEOz8.js";import"./getPseudoElementBounds-CQ3XjkJ4.js";import"./chevron-down-Dm-2k2rq.js";import"./index-CXhL9gtU.js";import"./error-BlFFjo7T.js";import"./BaseCbacBanner-BDIpvw6L.js";import"./makeExternalStore-nNw6ACoo.js";import"./Tooltip-B1BshqRw.js";import"./PopoverPopup-V8zfBt9y.js";import"./toNumber-Cys5SJht.js";import"./useOsdkClient-CrxPmQPb.js";import"./tick-B8Sdc5b8.js";import"./DropdownField-DLlzMdB9.js";import"./withOsdkMetrics-BYmyRLlT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
