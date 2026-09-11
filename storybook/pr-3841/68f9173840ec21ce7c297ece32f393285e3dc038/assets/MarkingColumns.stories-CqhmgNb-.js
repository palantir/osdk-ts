import{f as p,j as e}from"./iframe-BFm_OPcJ.js";import{O as i}from"./object-table-7RsImB24.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-hWMdww.js";import"./Table-BOaymXKV.js";import"./index-D6OldzKg.js";import"./Dialog-RmDlKm5l.js";import"./cross-DAfVMEHB.js";import"./svgIconContainer-DFBJL56Q.js";import"./useBaseUiId-Bdo2oKJK.js";import"./InternalBackdrop-BDKMpH4Z.js";import"./composite-ClIBPGgl.js";import"./index-D0NN2v4g.js";import"./index-D_unebpF.js";import"./index-CGbcIBw9.js";import"./useEventCallback-Don2-mEM.js";import"./SkeletonBar-CLIzo5Xt.js";import"./LoadingCell-BzlltzKN.js";import"./ColumnConfigDialog-DHiaXc2L.js";import"./DraggableList-ItVAzQSp.js";import"./search-JGyx4lc7.js";import"./Input-EUSvaA_S.js";import"./useControlled-DARaGIjq.js";import"./Button-C_avm1ie.js";import"./small-cross-DHkBCmiu.js";import"./ActionButton-ylSGNg3V.js";import"./Checkbox-LGdzzza0.js";import"./useValueChanged-C7A3m1Bn.js";import"./CollapsiblePanel-kwBiLUkd.js";import"./MultiColumnSortDialog-CGrTzc_p.js";import"./MenuTrigger-e9BU4Lb3.js";import"./CompositeItem-Dv9cYPny.js";import"./ToolbarRootContext-B9b_DGi_.js";import"./getDisabledMountTransitionStyles-BgUKa7Jc.js";import"./getPseudoElementBounds-CneiYeVp.js";import"./chevron-down-DYcOsbsP.js";import"./index-DlKJFgce.js";import"./error-BSGKVmqD.js";import"./BaseCbacBanner-D7_4jx09.js";import"./makeExternalStore-C1VxggOZ.js";import"./Tooltip-BKDnPOlI.js";import"./PopoverPopup-BEMdzx0_.js";import"./debounce-D8DxzbxV.js";import"./useOsdkClient-mRsBldvP.js";import"./tick-zhT1lai6.js";import"./DropdownField-CN6SZeut.js";import"./isEqual-BTYeq4px.js";import"./withOsdkMetrics-1bFznkGS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
