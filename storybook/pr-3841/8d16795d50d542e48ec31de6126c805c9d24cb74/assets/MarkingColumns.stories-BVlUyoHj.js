import{f as p,j as e}from"./iframe-BppbSrhx.js";import{O as i}from"./object-table-BjB8n29H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bw11sjj1.js";import"./Table-DRXfButT.js";import"./index-CJZanbl2.js";import"./Dialog-BzaTL6st.js";import"./cross-Q-zXxGGB.js";import"./svgIconContainer-DQpEIb1x.js";import"./useBaseUiId-qZ19-Hcf.js";import"./InternalBackdrop-DIgXdfTv.js";import"./composite-C3Q3MArL.js";import"./index-BTrAPlHS.js";import"./index-LD31CDcT.js";import"./index-BjVxDYWx.js";import"./useEventCallback-D3IsyJIX.js";import"./SkeletonBar-Bs6fl9dq.js";import"./LoadingCell-BkOQAo1d.js";import"./ColumnConfigDialog-CW56PtbG.js";import"./DraggableList-C2qiVH7w.js";import"./search-4uPMjt9H.js";import"./Input-TL4PyLM9.js";import"./useControlled-Cyv1OlQu.js";import"./Button-CpCWCMtk.js";import"./small-cross-p5zHgXkA.js";import"./ActionButton-C9eS6C4k.js";import"./Checkbox-LwUtlCY3.js";import"./useValueChanged-Br96PFLq.js";import"./CollapsiblePanel-DKSz5_iN.js";import"./MultiColumnSortDialog-z_UEp66c.js";import"./MenuTrigger-Boc06z0M.js";import"./CompositeItem-Bf84ptir.js";import"./ToolbarRootContext-Us9sChGo.js";import"./getDisabledMountTransitionStyles-UdumhEnt.js";import"./getPseudoElementBounds-CinKU-E5.js";import"./chevron-down-RK-wSJaV.js";import"./index-Bg7F7AhM.js";import"./error-B6rYlYt_.js";import"./BaseCbacBanner-solUHKcX.js";import"./makeExternalStore-Bbh9MWGd.js";import"./Tooltip-Bk7WuH7N.js";import"./PopoverPopup-VNvKO1hU.js";import"./debounce-H-onGT9e.js";import"./useOsdkClient-Bi2QyrOg.js";import"./tick-BYxeszBx.js";import"./DropdownField-mww5JMwj.js";import"./isEqual-I2G5XZfm.js";import"./withOsdkMetrics-CEFcST5F.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
