import{f as p,j as e}from"./iframe-Mtgd1DTS.js";import{O as i}from"./object-table-DZcbuhax.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B0i-YCE7.js";import"./index-DGQ1D5ZF.js";import"./Dialog-BUwRTkBO.js";import"./cross-nE9MHaq6.js";import"./svgIconContainer-BTXfnqy-.js";import"./useBaseUiId-gk6HeQ4v.js";import"./InternalBackdrop-C3FLzDyf.js";import"./composite-BOi5r20r.js";import"./index-DWBX8AGA.js";import"./index-DVZkzu80.js";import"./index-BLZbP_iP.js";import"./useEventCallback-Otl2FIIq.js";import"./SkeletonBar-Bjmn4nj7.js";import"./LoadingCell-CWKO4sHJ.js";import"./ColumnConfigDialog-CTJhoKGI.js";import"./DraggableList-BJ0RDZMA.js";import"./search-B4_r-kWC.js";import"./Input-BuQB-8kT.js";import"./useControlled-Bdc-9JPt.js";import"./Button-BRDaSx2s.js";import"./small-cross-B5fbwO-C.js";import"./ActionButton-JooCSyPg.js";import"./Checkbox-BUFEp9JI.js";import"./useValueChanged-JDBorrlu.js";import"./CollapsiblePanel-BjaTBsUI.js";import"./MultiColumnSortDialog-BNPHleDp.js";import"./MenuTrigger-Bs70PEvm.js";import"./CompositeItem-CvGV1Dn5.js";import"./ToolbarRootContext-C7D-uVC_.js";import"./getDisabledMountTransitionStyles-DyU0dy72.js";import"./getPseudoElementBounds-CKwpRTNx.js";import"./chevron-down-Bvy3Wm81.js";import"./index-D3rG4xmO.js";import"./error-O-ALRXAM.js";import"./BaseCbacBanner-CSkg4fga.js";import"./makeExternalStore-BPm4QJ00.js";import"./Tooltip-BP1dRkR8.js";import"./PopoverPopup-WtLbH-U4.js";import"./debounce-BsdStdiQ.js";import"./useOsdkClient-0d2T-tjR.js";import"./tick-CGp3ABT2.js";import"./DropdownField-CAtdjvP3.js";import"./isEqual-CbNbEIQW.js";import"./withOsdkMetrics-B9hm1gbS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
