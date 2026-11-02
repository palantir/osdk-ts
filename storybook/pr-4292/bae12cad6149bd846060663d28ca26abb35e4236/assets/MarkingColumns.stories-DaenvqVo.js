import{f as p,j as e}from"./iframe-DUqIITxH.js";import{O as i}from"./object-table-3HbuhbM-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DRNNkrJi.js";import"./Table-Qy9QycEn.js";import"./index-CfKxCZr0.js";import"./Dialog-CQKZhvmg.js";import"./cross-CNr5tSf5.js";import"./svgIconContainer-6SFRCpjB.js";import"./useBaseUiId-kMUnh5gd.js";import"./InternalBackdrop-BhomPwEy.js";import"./composite-DJRtaiwf.js";import"./index-Dsym8n4N.js";import"./index-GkXmmaX0.js";import"./index-BLlR331c.js";import"./useEventCallback-CA5SU1AH.js";import"./SkeletonBar-fzqq3kFc.js";import"./LoadingCell-dwhV2BU5.js";import"./ColumnConfigDialog-JyLsvbUN.js";import"./DraggableList-BJEUmG2J.js";import"./search-BZkb1jfI.js";import"./Input-Ck3038DH.js";import"./useControlled-DnwEhQGz.js";import"./Button-DxPOU_Mc.js";import"./small-cross-DiAkLgef.js";import"./ActionButton-w4Urkbcz.js";import"./Checkbox-BEYrixR_.js";import"./useValueChanged-QI-v-4Vm.js";import"./CollapsiblePanel-BoajmFi9.js";import"./MultiColumnSortDialog-B_lvOEVt.js";import"./MenuTrigger-Bdaly6ds.js";import"./CompositeItem-DA_aeyOT.js";import"./ToolbarRootContext-B4KY25qe.js";import"./getDisabledMountTransitionStyles-g7BSBpZk.js";import"./getPseudoElementBounds-BB5-HDV6.js";import"./chevron-down-5LJm5ghw.js";import"./index-CSve1EYF.js";import"./error-BA5REKvs.js";import"./BaseCbacBanner-BJbK-LLa.js";import"./makeExternalStore-C3reCNG-.js";import"./Tooltip-C187RPOh.js";import"./PopoverPopup-Cb4S25yO.js";import"./debounce-8IWhPKp0.js";import"./useOsdkClient-DYmfz7qm.js";import"./tick-BKBNrx8N.js";import"./DropdownField-D8f8SQmJ.js";import"./isEqual-B7742ZuT.js";import"./withOsdkMetrics-NmiraHl_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
