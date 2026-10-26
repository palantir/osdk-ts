import{f as p,j as e}from"./iframe-DPxX1jR-.js";import{O as i}from"./object-table-6p4neQQt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bl3woUlG.js";import"./Table-DQT7xoCm.js";import"./index-D6OGPiBG.js";import"./Dialog-DfzPTpFX.js";import"./cross-BO6SlDqo.js";import"./svgIconContainer-DQ5sgBjC.js";import"./useBaseUiId-BKCJofKJ.js";import"./InternalBackdrop-BDTL8dMK.js";import"./composite-BcAnYQh9.js";import"./index-B-sWsLH5.js";import"./index-DQPQvAfC.js";import"./index-DSDqA_Ss.js";import"./useEventCallback-Bvjybx93.js";import"./SkeletonBar-BGjKDv0N.js";import"./LoadingCell-BPcqwqea.js";import"./ColumnConfigDialog-BMebv_uz.js";import"./DraggableList-BEhiYx7J.js";import"./search-B5aBIEi3.js";import"./Input-DFF83YG7.js";import"./useControlled-C7cllYbm.js";import"./Button-DQXd7O9l.js";import"./small-cross-BDDqqJMU.js";import"./ActionButton-1Q3tX4Fy.js";import"./Checkbox-DcG_vN9W.js";import"./useValueChanged-i5EMwMR_.js";import"./CollapsiblePanel-HGrFWplr.js";import"./MultiColumnSortDialog-F8EVd4m9.js";import"./MenuTrigger-CbBbJ5Lv.js";import"./CompositeItem-rTVyKIYC.js";import"./ToolbarRootContext-B53u_0Lg.js";import"./getDisabledMountTransitionStyles-DXbjzshq.js";import"./getPseudoElementBounds-CjxlBCdr.js";import"./chevron-down-DxRPC7K7.js";import"./index-CmhRQ5VM.js";import"./error-ChO0zkiL.js";import"./BaseCbacBanner-R2dfzvOz.js";import"./makeExternalStore-64rcfTGa.js";import"./Tooltip-BOGu4iQx.js";import"./PopoverPopup-BLHlUUDe.js";import"./debounce-DlKAS5ft.js";import"./useOsdkClient-BjyL2cyC.js";import"./tick-CTGvo1gM.js";import"./DropdownField-CpYwJ58e.js";import"./isEqual-CamMyuEt.js";import"./withOsdkMetrics-NcqisCon.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
