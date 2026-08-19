import{f as p,j as e}from"./iframe-C0JXh_jt.js";import{O as i}from"./object-table-BR4W4gdR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0Et_7z7-.js";import"./Table-Kbovsawz.js";import"./index-BSrY5iMo.js";import"./Dialog-C4kIKRtm.js";import"./cross-Bm65njCD.js";import"./svgIconContainer-5-WGF7OP.js";import"./useBaseUiId-Bk4impeO.js";import"./InternalBackdrop-C18A-Tx4.js";import"./composite-nAeWCUEc.js";import"./index-Cs47SF-M.js";import"./index-BQYvqJ11.js";import"./index-B1VzYVQh.js";import"./useEventCallback-BvjYX78-.js";import"./SkeletonBar-C39BHLdc.js";import"./LoadingCell-DJwDUOoO.js";import"./ColumnConfigDialog-C4NDWqut.js";import"./DraggableList-GzGJIIDU.js";import"./search-BMjichka.js";import"./Input-DiPNrK96.js";import"./useControlled-DeS56r8l.js";import"./Button-DcuoF34z.js";import"./small-cross-DB3Xtqva.js";import"./ActionButton-C-01Q6PL.js";import"./Checkbox-D9L9g5eC.js";import"./useValueChanged-Dxl2PIC6.js";import"./CollapsiblePanel-CcTUzl4K.js";import"./MultiColumnSortDialog-zrIp6hk-.js";import"./MenuTrigger-CjiYJlVu.js";import"./CompositeItem-CtfPQ2IE.js";import"./ToolbarRootContext-yYdi36hQ.js";import"./getDisabledMountTransitionStyles-BzLHMn7U.js";import"./getPseudoElementBounds-BterO-VS.js";import"./chevron-down-C561UuJZ.js";import"./index-BH6PEMN3.js";import"./error-DWodFhyG.js";import"./BaseCbacBanner-DpG-XC7J.js";import"./makeExternalStore-DmS2WvLR.js";import"./Tooltip-KLREtOGA.js";import"./PopoverPopup-DiEm1yom.js";import"./debounce-2EuMzH9u.js";import"./useOsdkClient-SMhKg19p.js";import"./tick-CaKTO1b8.js";import"./DropdownField-BoK85QnO.js";import"./isEqual-D-q1Gdam.js";import"./withOsdkMetrics-o4Vui-zi.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
