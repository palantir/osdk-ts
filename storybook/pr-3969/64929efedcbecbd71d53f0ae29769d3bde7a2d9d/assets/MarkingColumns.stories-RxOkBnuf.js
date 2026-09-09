import{f as p,j as e}from"./iframe-Cha5bzcQ.js";import{O as i}from"./object-table-CAzCMSOu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DTIBEWF3.js";import"./Table-D14BkX5X.js";import"./index-Bm3NhGlH.js";import"./Dialog-CUzVZoox.js";import"./cross-sYD9GiNz.js";import"./svgIconContainer-DA_Ed81f.js";import"./useBaseUiId-CoAf4zJ1.js";import"./InternalBackdrop-5-0DlwQk.js";import"./composite-DwMGYBdi.js";import"./index-BuHsw6tX.js";import"./index-CRCMyzG5.js";import"./index-BLVvXBm0.js";import"./useEventCallback-C_dAqdfF.js";import"./SkeletonBar-B6h9Ova2.js";import"./LoadingCell-CEXOIvr5.js";import"./ColumnConfigDialog-2XfPaajD.js";import"./DraggableList-CGZqRsIG.js";import"./search-LEzBZeqH.js";import"./Input-CS3x1fIq.js";import"./useControlled-BsFUux1R.js";import"./Button-KiGmPYx_.js";import"./small-cross-Cqpx81EU.js";import"./ActionButton-DQjspSLx.js";import"./Checkbox-CfFeXPwz.js";import"./useValueChanged-DX1fsVrr.js";import"./CollapsiblePanel-Dal__8LV.js";import"./MultiColumnSortDialog-sKVV6RHu.js";import"./MenuTrigger-B9H-qCGa.js";import"./CompositeItem-CI63tMYo.js";import"./ToolbarRootContext-BCJzUdOe.js";import"./getDisabledMountTransitionStyles-DtsqVZlu.js";import"./getPseudoElementBounds-BL7IKUOX.js";import"./chevron-down-BImkdPvb.js";import"./index-Wr7-HV8X.js";import"./error-JfmuoEvN.js";import"./BaseCbacBanner-DHmN-_jc.js";import"./makeExternalStore-DIkaw39a.js";import"./Tooltip-COCG5jN8.js";import"./PopoverPopup-DLpPXX4a.js";import"./debounce-CCWjtmn1.js";import"./useOsdkClient-BW0sTjCm.js";import"./tick-ADT_jvRp.js";import"./DropdownField-CLg5FybE.js";import"./isEqual-BermXjtW.js";import"./withOsdkMetrics-5Xu_aVjO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
