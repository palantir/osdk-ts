import{f as p,j as e}from"./iframe-BB2E5Jix.js";import{O as i}from"./object-table-Cq8EQafa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-XstBZj0v.js";import"./Table-C_RaYKNB.js";import"./index-zGb1pbmH.js";import"./Dialog-Caobyqao.js";import"./cross-B8YgiCYl.js";import"./svgIconContainer-CXjFTKQc.js";import"./useBaseUiId-T8MHyWrJ.js";import"./InternalBackdrop-BU8oV8wN.js";import"./composite-DQwmFGUd.js";import"./index-Cft78AYh.js";import"./index-CLogktU3.js";import"./index-CDZCasWv.js";import"./useEventCallback-bXtnurx0.js";import"./SkeletonBar-DOM6sWKN.js";import"./LoadingCell-CEE6ECLC.js";import"./ColumnConfigDialog-i_CcXCPU.js";import"./DraggableList-B4O4-Uk4.js";import"./search-DPNy6EUf.js";import"./Input-vhcxgD7F.js";import"./useControlled-4jwl_yb5.js";import"./isEqual-DpkjvpyX.js";import"./isObject-cuWUV_SB.js";import"./Button-JlhJjdd0.js";import"./ActionButton-DzEBxPTA.js";import"./Checkbox-BQydhIvd.js";import"./useValueChanged-C37wvZ3p.js";import"./CollapsiblePanel-Dz0U_34e.js";import"./MultiColumnSortDialog-D_m8j8zj.js";import"./MenuTrigger-CS3ve4y6.js";import"./CompositeItem-Cc57-add.js";import"./ToolbarRootContext-VydJXhkq.js";import"./getDisabledMountTransitionStyles-TDufTSfj.js";import"./getPseudoElementBounds-ZgCYbSXN.js";import"./chevron-down-C_RItkCu.js";import"./index-D-e5E8TN.js";import"./error-DMB-1Uz3.js";import"./BaseCbacBanner-D-RccEMB.js";import"./makeExternalStore-D2tsWs0v.js";import"./Tooltip-DzUvJnVd.js";import"./PopoverPopup-CCnnPXu2.js";import"./toNumber-DxI2SU5x.js";import"./useOsdkClient-CtNTkVn8.js";import"./tick-vmRc4WsE.js";import"./DropdownField-5ckOa_G6.js";import"./withOsdkMetrics-D-4z6JPU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
