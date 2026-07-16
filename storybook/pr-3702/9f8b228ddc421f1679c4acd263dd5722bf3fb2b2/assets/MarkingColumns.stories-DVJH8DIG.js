import{f as p,j as e}from"./iframe-Bhfx531f.js";import{O as i}from"./object-table-vU8nbnp-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGTnO5pN.js";import"./Table-C4sggtCp.js";import"./index-B0vP1he4.js";import"./Dialog-Dhnsfh9U.js";import"./cross-D0mP7iDn.js";import"./svgIconContainer-35gVlP3R.js";import"./useBaseUiId-BUiHaz06.js";import"./InternalBackdrop-DVH37k6h.js";import"./composite-D8rImhTM.js";import"./index-BrXRE2qO.js";import"./index-BDCmNH8P.js";import"./index-Ct4EiF5M.js";import"./useEventCallback-Ct-7CH8e.js";import"./SkeletonBar-DPZU72M_.js";import"./LoadingCell-DY80l0m3.js";import"./ColumnConfigDialog-D_R7_Me5.js";import"./DraggableList-wyi8zgmM.js";import"./search-qHcMc9Tr.js";import"./Input-m_AxZLGF.js";import"./useControlled-Bt8EGKOL.js";import"./isEqual-BMHhsMi8.js";import"./isObject-C8vBNZTD.js";import"./Button-DnykwL8H.js";import"./ActionButton-CHqASvVV.js";import"./Checkbox-EhHvFVJO.js";import"./useValueChanged-BX1-yvcr.js";import"./CollapsiblePanel-DGyN7xmq.js";import"./MultiColumnSortDialog-DOGA4lTA.js";import"./MenuTrigger-C8ItDnfC.js";import"./CompositeItem-C9Gcac0L.js";import"./ToolbarRootContext-C82BKwEN.js";import"./getDisabledMountTransitionStyles-AlRRs8UP.js";import"./getPseudoElementBounds-BHPxA5_1.js";import"./chevron-down-DUVuPwR-.js";import"./index-BXq-WXuD.js";import"./error-Bxa2zWko.js";import"./BaseCbacBanner-DtzZmgnE.js";import"./makeExternalStore-t5wmtFvn.js";import"./Tooltip-CkFBZWsC.js";import"./PopoverPopup-Dvr14ROK.js";import"./toNumber-CB8QFug6.js";import"./useOsdkClient-C5TTVPe7.js";import"./tick-15VgqVU9.js";import"./DropdownField-Bqc-YXgb.js";import"./withOsdkMetrics-Bf2OGc1w.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
