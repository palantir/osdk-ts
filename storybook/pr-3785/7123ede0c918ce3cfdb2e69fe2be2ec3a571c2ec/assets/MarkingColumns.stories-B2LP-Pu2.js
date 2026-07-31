import{f as p,j as e}from"./iframe-Bf2U0wCC.js";import{O as i}from"./object-table-OXNT7OpI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B7BTsDqe.js";import"./Table-CwvnrNvY.js";import"./index-DTioBO_V.js";import"./Dialog-C61hzq8j.js";import"./cross-DV8e5TBd.js";import"./svgIconContainer-DpvB8Y2n.js";import"./useBaseUiId-9mx6zIx7.js";import"./InternalBackdrop-BILNsdtA.js";import"./composite-CuGbenFt.js";import"./index-CCvKupVl.js";import"./index-B_wOLzlx.js";import"./index-BxK_xSmV.js";import"./useEventCallback-DSQicMgE.js";import"./SkeletonBar-DBSEcPZi.js";import"./LoadingCell-Cojawg0b.js";import"./ColumnConfigDialog-BnX62pS1.js";import"./DraggableList--16cOjqh.js";import"./search-CSich7qy.js";import"./Input-DHFhxehL.js";import"./useControlled-Bdm8AXhj.js";import"./isEqual-CFr-5M8s.js";import"./isObject-BT7OCmwv.js";import"./Button-ZT6AtrIL.js";import"./ActionButton-Bg9xuvsN.js";import"./Checkbox-MaMlRZpO.js";import"./useValueChanged-CQlo19Nx.js";import"./CollapsiblePanel-CCStv30f.js";import"./MultiColumnSortDialog-BuhrcQLV.js";import"./MenuTrigger-RlWUsL5i.js";import"./CompositeItem-IczX1adk.js";import"./ToolbarRootContext-DJE5EDVH.js";import"./getDisabledMountTransitionStyles-C8Ps9vte.js";import"./getPseudoElementBounds-DeTAVI5M.js";import"./chevron-down-CYc3xdZN.js";import"./index-xzJ-XSgN.js";import"./error-p0-ItGgy.js";import"./BaseCbacBanner-DaYGAsYZ.js";import"./makeExternalStore-SEqUXvVt.js";import"./Tooltip-CjVk8_-5.js";import"./PopoverPopup-DoSXd954.js";import"./toNumber-B_n9-lZk.js";import"./useOsdkClient-RXDPaXmq.js";import"./tick-DoAEo7vC.js";import"./DropdownField-C_x97BWO.js";import"./withOsdkMetrics-DiupHODT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
