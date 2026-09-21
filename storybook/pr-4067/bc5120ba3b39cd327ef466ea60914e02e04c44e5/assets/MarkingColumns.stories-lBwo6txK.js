import{f as p,j as e}from"./iframe-eyZPO-r8.js";import{O as i}from"./object-table-DngYOc4G.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1V99eN4.js";import"./Table-dxXXc1zF.js";import"./index-Gdnr7hdE.js";import"./Dialog-DF5CklX0.js";import"./cross-BDtR8km0.js";import"./svgIconContainer-BYYEkT6q.js";import"./useBaseUiId-DuycL1XH.js";import"./InternalBackdrop-47eHZtxY.js";import"./composite-BQIBWjV1.js";import"./index-BW1bbNNA.js";import"./index-BSykaiWk.js";import"./index-DQ49IRLG.js";import"./useEventCallback-0WugJweh.js";import"./SkeletonBar-Czp6H1QV.js";import"./LoadingCell-D5uFu_3a.js";import"./ColumnConfigDialog-DA84oAQ9.js";import"./DraggableList-h1DTHUPL.js";import"./search-C_tBHa91.js";import"./Input-CwJlG5HX.js";import"./useControlled-RnivCiUR.js";import"./Button-DYsGegFs.js";import"./small-cross-DM_xhuPC.js";import"./ActionButton-DepzqUcv.js";import"./Checkbox-ByNijBVh.js";import"./useValueChanged-gzjrwQir.js";import"./CollapsiblePanel-CpdU7F-n.js";import"./MultiColumnSortDialog-DNlGctld.js";import"./MenuTrigger-Ddng4r_f.js";import"./CompositeItem-D72MffoG.js";import"./ToolbarRootContext-DsL0BSnt.js";import"./getDisabledMountTransitionStyles-D1KI5R6m.js";import"./getPseudoElementBounds-DGpPk1TO.js";import"./chevron-down-C6BwuTUh.js";import"./index-Dhfw8vgu.js";import"./error-vxQVtw9f.js";import"./BaseCbacBanner-K41hGtlu.js";import"./makeExternalStore-TlPHbOId.js";import"./Tooltip-UpAI-IXV.js";import"./PopoverPopup-D20NUS2f.js";import"./debounce-DpI20L6M.js";import"./useOsdkClient-DpWMI8Fp.js";import"./tick-DL7gzaWC.js";import"./DropdownField-B28WZREh.js";import"./isEqual-fw4VSZCU.js";import"./withOsdkMetrics-O_Dwj_Kt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
