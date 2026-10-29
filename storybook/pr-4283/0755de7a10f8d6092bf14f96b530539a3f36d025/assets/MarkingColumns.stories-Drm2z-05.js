import{f as p,j as e}from"./iframe-Dnji8ErS.js";import{O as i}from"./object-table-BcZuD4QU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DBdP8Q4o.js";import"./Table-B3iD-gZe.js";import"./index-BNoiE65C.js";import"./Dialog-C-SVK6-Y.js";import"./cross-BWKDw-8_.js";import"./svgIconContainer-B0znNA-B.js";import"./useBaseUiId-ScNjevUP.js";import"./InternalBackdrop-9jtE3fb7.js";import"./composite-Bo0dFacb.js";import"./index-Calwhz4q.js";import"./index-BVgNOwgs.js";import"./index-Bka3S9OK.js";import"./useEventCallback-56O3ZT4v.js";import"./SkeletonBar-gGwHwvfg.js";import"./LoadingCell-DEtBbjKP.js";import"./ColumnConfigDialog-D2x2SSdm.js";import"./DraggableList-Cm9hxWQ5.js";import"./search-C5sdVGIt.js";import"./Input-DyynrLgV.js";import"./useControlled-DmavZ4hp.js";import"./Button-D-1VZnj-.js";import"./small-cross-wM2Fg1Ze.js";import"./ActionButton-B5ftVOcR.js";import"./Checkbox-IsH8M5rS.js";import"./useValueChanged-GZrrpvDZ.js";import"./CollapsiblePanel-BYjZCBYa.js";import"./MultiColumnSortDialog-CYJMBYTR.js";import"./MenuTrigger-oZZDVCJq.js";import"./CompositeItem-YgQK4Acr.js";import"./ToolbarRootContext-BPwepJKC.js";import"./getDisabledMountTransitionStyles-DeZ02XBV.js";import"./getPseudoElementBounds-C5houf6l.js";import"./chevron-down-r7E6FDSt.js";import"./index-Cj0RyZw2.js";import"./error-CpTRDjda.js";import"./BaseCbacBanner-C1c3Q8Aj.js";import"./makeExternalStore-BNNlgyK5.js";import"./Tooltip-DMaI5dDd.js";import"./PopoverPopup-DmROoIcA.js";import"./debounce-BAxkMmEn.js";import"./useOsdkClient-CR7GyxlC.js";import"./tick-PvaRxYp4.js";import"./DropdownField-Lc5xugId.js";import"./isEqual-B5K4ZASA.js";import"./withOsdkMetrics-DdDqJJvP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
