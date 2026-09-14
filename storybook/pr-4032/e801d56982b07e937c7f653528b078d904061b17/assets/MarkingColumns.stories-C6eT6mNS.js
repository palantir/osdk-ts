import{f as p,j as e}from"./iframe-2Mr1t1V8.js";import{O as i}from"./object-table-Dff2vKVF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C_t9encF.js";import"./Table-DFubCc9q.js";import"./index-4lXnLG4B.js";import"./Dialog-CvvM78Yd.js";import"./cross-BRuFKM6t.js";import"./svgIconContainer-tMp-Mvzu.js";import"./useBaseUiId-k8zppgsU.js";import"./InternalBackdrop-qRL7WfZ9.js";import"./composite-DgP8pe-I.js";import"./index-5aB3LLsM.js";import"./index-CkMbtK8j.js";import"./index-BLky91mi.js";import"./useEventCallback-CP27jd0B.js";import"./SkeletonBar-BChVdeQ9.js";import"./LoadingCell-BcFGvW2n.js";import"./ColumnConfigDialog-J50UmXTQ.js";import"./DraggableList-BMMwdptn.js";import"./search-ysbzXeyh.js";import"./Input-BAjujx0C.js";import"./useControlled-BcBqikwr.js";import"./Button-C2c9HqHX.js";import"./small-cross-KP2o4lIf.js";import"./ActionButton-C7GEwUg1.js";import"./Checkbox-BjD1qVP8.js";import"./useValueChanged-DDLB8duD.js";import"./CollapsiblePanel-B4xPmd-G.js";import"./MultiColumnSortDialog-DzFIzDAv.js";import"./MenuTrigger-CYPXcTFc.js";import"./CompositeItem-C0DzT1s7.js";import"./ToolbarRootContext-BbL0J01R.js";import"./getDisabledMountTransitionStyles-QB61HrKH.js";import"./getPseudoElementBounds-DgqbZcO_.js";import"./chevron-down-DjlK2aIq.js";import"./index-C4bdzjhC.js";import"./error-ppckuRwj.js";import"./BaseCbacBanner-GDqo53YU.js";import"./makeExternalStore-B8Qdlr-8.js";import"./Tooltip-DliQMsoz.js";import"./PopoverPopup-CBvVWdt_.js";import"./debounce-Bx6R5QNY.js";import"./useOsdkClient-C22dfEiD.js";import"./tick-raGklPjk.js";import"./DropdownField-BgK_Iadc.js";import"./isEqual-6F4w8SEB.js";import"./withOsdkMetrics-IIt9i7U1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
