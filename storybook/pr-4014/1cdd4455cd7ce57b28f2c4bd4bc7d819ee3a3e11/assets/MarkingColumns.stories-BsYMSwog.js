import{f as p,j as e}from"./iframe-uT48rLM_.js";import{O as i}from"./object-table-CpKuor12.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-yoQuylqU.js";import"./Table-Br0TYzk7.js";import"./index-CSvzskdp.js";import"./Dialog-DHFdNQrv.js";import"./cross-Bjaf7ehU.js";import"./svgIconContainer-p9hJC-XV.js";import"./useBaseUiId-9T64UX1j.js";import"./InternalBackdrop-B72hZeRt.js";import"./composite-DezEwUvA.js";import"./index-5wHFC5Fm.js";import"./index-BEQpnWE2.js";import"./index-B1GAZ9iL.js";import"./useEventCallback-Df-FKJT2.js";import"./SkeletonBar-oqZO1ZHs.js";import"./LoadingCell-C5KPxmDc.js";import"./ColumnConfigDialog-DgKPZlhI.js";import"./DraggableList-Bnzwsr1Q.js";import"./search-DQlds2Tm.js";import"./Input-CQKdcBRU.js";import"./useControlled-DuOdWxX8.js";import"./Button-C6gEU1e5.js";import"./small-cross-CisrNWlM.js";import"./ActionButton-7h418o9p.js";import"./Checkbox-SFA35Btf.js";import"./useValueChanged-znQA4Tbz.js";import"./CollapsiblePanel-CF6AHuns.js";import"./MultiColumnSortDialog-niDuA6Gj.js";import"./MenuTrigger-9TSMCP-s.js";import"./CompositeItem-BxuJPWc4.js";import"./ToolbarRootContext-DjYPc8nU.js";import"./getDisabledMountTransitionStyles-CluzbFfS.js";import"./getPseudoElementBounds-C4USjkgg.js";import"./chevron-down-DEgdTzUt.js";import"./index-BSbxg0rW.js";import"./error-BQiQ2GDM.js";import"./BaseCbacBanner-biYADY_e.js";import"./makeExternalStore-DTuIZdzn.js";import"./Tooltip-DQOQ2Q12.js";import"./PopoverPopup-_zY_9-mc.js";import"./debounce-BNAPXfSi.js";import"./useOsdkClient-DFYM3hyp.js";import"./tick-CU7R8lm8.js";import"./DropdownField-BTmtksts.js";import"./isEqual-BdznznjE.js";import"./withOsdkMetrics-zU8fQ91E.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
