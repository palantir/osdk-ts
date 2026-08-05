import{f as p,j as e}from"./iframe-BuWAiJqq.js";import{O as i}from"./object-table-Dg6uTo_U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GKB8uXJQ.js";import"./Table-wMmYtE5v.js";import"./index-DKQN3MGn.js";import"./Dialog-Dg4Udp1v.js";import"./cross-DjEkx8hG.js";import"./svgIconContainer-DByURt-f.js";import"./useBaseUiId-GGObT-JF.js";import"./InternalBackdrop-B0bWqSaz.js";import"./composite-C1SnCG4A.js";import"./index-DFAgF64G.js";import"./index-B9dzMRkW.js";import"./index-DEUOQSO_.js";import"./useEventCallback-BPOi9RYR.js";import"./SkeletonBar-CLVSe2tF.js";import"./LoadingCell-2Ffy1nwL.js";import"./ColumnConfigDialog-BgUSYDwe.js";import"./DraggableList-BGVr5y5K.js";import"./search-BdQ2EhWX.js";import"./Input-CcDq3pYP.js";import"./useControlled-Cctdi5Pw.js";import"./isEqual-2xf-usy8.js";import"./isObject-aZqfOsIN.js";import"./Button-vtvLXbiy.js";import"./ActionButton-D5nzQiKO.js";import"./Checkbox-DAr_Jmtw.js";import"./useValueChanged-JZg98mWO.js";import"./CollapsiblePanel-D67FpZL7.js";import"./MultiColumnSortDialog-DQUdkJDP.js";import"./MenuTrigger-Cbl7-Jo9.js";import"./CompositeItem-BJOfR8On.js";import"./ToolbarRootContext-b_fKtK1X.js";import"./getDisabledMountTransitionStyles-bjl4L0WK.js";import"./getPseudoElementBounds-CTbPzfBI.js";import"./chevron-down-BLDZnR1d.js";import"./index-BZfI53UY.js";import"./error-Cox_k5eE.js";import"./BaseCbacBanner-DiZjhyyT.js";import"./makeExternalStore-cqUtgK5L.js";import"./Tooltip-Pk9_o1CK.js";import"./PopoverPopup-DjTdhxTJ.js";import"./toNumber-Bl6RDY1O.js";import"./useOsdkClient-CTOSmuh9.js";import"./tick-CnI7bF9f.js";import"./DropdownField-BxjPSxoY.js";import"./withOsdkMetrics-3JkArczg.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
