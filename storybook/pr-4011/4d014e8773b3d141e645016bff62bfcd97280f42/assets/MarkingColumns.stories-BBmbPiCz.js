import{f as p,j as e}from"./iframe-UsJOy75R.js";import{O as i}from"./object-table-DfGlC2U4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BMFhjcbd.js";import"./Table-t1Qpgusu.js";import"./index-LJeXjTdh.js";import"./Dialog-BEQy-MMo.js";import"./cross-BFteWzwf.js";import"./svgIconContainer-fImKWsr3.js";import"./useBaseUiId-BrB63-GA.js";import"./InternalBackdrop-BvLkiF1F.js";import"./composite-C9sM39C4.js";import"./index-B6uoE1g4.js";import"./index-_ScyNYUM.js";import"./index-BiyqCy7k.js";import"./useEventCallback-4YDJMtg5.js";import"./SkeletonBar-6HxN9bQ-.js";import"./LoadingCell-CclmtLk1.js";import"./ColumnConfigDialog-DnFW9xYC.js";import"./DraggableList-CCrQnUpT.js";import"./search-Ch0geOF0.js";import"./Input-CtUjoKBa.js";import"./useControlled-CUgFibpX.js";import"./Button-D7E7FwX5.js";import"./small-cross-BOpZ-6OG.js";import"./ActionButton-B_I8L5VG.js";import"./Checkbox-DYapDyGT.js";import"./useValueChanged-DElP9LhV.js";import"./CollapsiblePanel-BWwXPV-O.js";import"./MultiColumnSortDialog-DIyR453J.js";import"./MenuTrigger-BLBgkFH1.js";import"./CompositeItem-CtPMwd_g.js";import"./ToolbarRootContext-Ch0u-hZt.js";import"./getDisabledMountTransitionStyles-CVQ-Uwt_.js";import"./getPseudoElementBounds-CEd1PQdU.js";import"./chevron-down-B8hI3iSa.js";import"./index-RoLHKfsw.js";import"./error-DSrMae8G.js";import"./BaseCbacBanner-DQMQBEwH.js";import"./makeExternalStore-CrvnmPw1.js";import"./Tooltip-DfMLTWhn.js";import"./PopoverPopup-DEnJfeh4.js";import"./debounce-C05jCoTa.js";import"./useOsdkClient-B4gpQY7o.js";import"./tick-Bgtx0_Fg.js";import"./DropdownField-hxgGPfNJ.js";import"./isEqual-Dbo3xsh8.js";import"./withOsdkMetrics-Dxoj52t7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
