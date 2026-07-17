import{f as p,j as e}from"./iframe-BhMda2LY.js";import{O as i}from"./object-table-D9mMmnvf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-75e-5k4t.js";import"./Table-DRzG2gi0.js";import"./index-C5L2YS_F.js";import"./Dialog-C5wuHx6-.js";import"./cross-5ajNaQzh.js";import"./svgIconContainer-Mb9rdeUY.js";import"./useBaseUiId-CWyEnpaT.js";import"./InternalBackdrop-geG2508r.js";import"./composite-CKcHThLd.js";import"./index-BIbgCmH4.js";import"./index-ChI2AZSM.js";import"./index-BzPA69tT.js";import"./useEventCallback-DemHvAtP.js";import"./SkeletonBar-BlHfRHN1.js";import"./LoadingCell-Cb3NBLg0.js";import"./ColumnConfigDialog-BKlG1ofL.js";import"./DraggableList-DGZxOEyh.js";import"./search-Dlo0lLNw.js";import"./Input-fgFDjqfv.js";import"./useControlled-YvV-9ymG.js";import"./isEqual-Cu4OyWuI.js";import"./isObject-C3T2LXh7.js";import"./Button-s_pszfzc.js";import"./ActionButton-3FYOXbgT.js";import"./Checkbox-BeYGHivq.js";import"./useValueChanged-CpPoDRkJ.js";import"./CollapsiblePanel-VpFaoisq.js";import"./MultiColumnSortDialog-DRpHKvYE.js";import"./MenuTrigger-CChgeK_0.js";import"./CompositeItem-RIDogeUw.js";import"./ToolbarRootContext-BRlTnNWp.js";import"./getDisabledMountTransitionStyles-DsIgvfWG.js";import"./getPseudoElementBounds-DtvKZ_uA.js";import"./chevron-down-pfWabtUx.js";import"./index-D59wFyg4.js";import"./error-Bswcd5QK.js";import"./BaseCbacBanner-_Rmzt6Jj.js";import"./makeExternalStore-BaQIzF5m.js";import"./Tooltip-CrcuvR-I.js";import"./PopoverPopup-CI-yHT6k.js";import"./toNumber-NFAIVokf.js";import"./useOsdkClient-DASG7VAF.js";import"./tick-B7-jZJau.js";import"./DropdownField-BJWB-E3h.js";import"./withOsdkMetrics-DmY73Wc-.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
