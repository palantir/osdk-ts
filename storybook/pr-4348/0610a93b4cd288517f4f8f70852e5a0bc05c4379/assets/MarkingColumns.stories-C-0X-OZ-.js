import{f as p,j as e}from"./iframe-x4Y4VSHV.js";import{O as i}from"./object-table-1cZIpCil.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-wFwf1Z_7.js";import"./Table-C-oXinJO.js";import"./index-BTkF7OpO.js";import"./Dialog-D0myaYAC.js";import"./cross-34rpmbRR.js";import"./svgIconContainer-BRq3fj7v.js";import"./useBaseUiId-O7ZsVKwo.js";import"./InternalBackdrop-Bv0h497n.js";import"./composite-HDXk98Mo.js";import"./index-BcBc9KVj.js";import"./index-B3Hd8yqN.js";import"./index-CfRBgTVy.js";import"./useEventCallback-SHHnyPaE.js";import"./SkeletonBar-IY8wlZ6P.js";import"./LoadingCell-CPBTYhln.js";import"./ColumnConfigDialog-BgjiELGT.js";import"./DraggableList-BMxd087o.js";import"./search-t_lGFyp_.js";import"./Input-RqZQ3gi6.js";import"./useControlled-B1vBMtLm.js";import"./Button-D6WWCBJV.js";import"./small-cross-B7mLfu2a.js";import"./ActionButton-Bufn2px0.js";import"./Checkbox-CXM0rLwb.js";import"./useValueChanged-B_Sqxe_h.js";import"./CollapsiblePanel-Dlts5kAq.js";import"./MultiColumnSortDialog-uXuJ_gss.js";import"./MenuTrigger-dApCLvRy.js";import"./CompositeItem-gQ_2jip-.js";import"./ToolbarRootContext-BTpSmFWY.js";import"./getDisabledMountTransitionStyles-cT_E1wd_.js";import"./getPseudoElementBounds-DrAxvQVr.js";import"./chevron-down-DIIH-694.js";import"./index-B9Z4kBgT.js";import"./error-1h6EWorL.js";import"./BaseCbacBanner-CYc6azI0.js";import"./makeExternalStore-CRHmXcik.js";import"./Tooltip-CIUrl65j.js";import"./PopoverPopup-CMpyIGzp.js";import"./debounce-FKkJspwT.js";import"./useOsdkClient-Bh27IzO_.js";import"./tick-DJgmKu8k.js";import"./DropdownField-2L4uAddC.js";import"./isEqual-CIrx9idy.js";import"./withOsdkMetrics-LnVAi8HB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
