import{f as p,j as e}from"./iframe-Cos_ofCy.js";import{O as i}from"./object-table-Y5iUMhG7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CdGuEwVx.js";import"./Table-BJPnPRWS.js";import"./index-DDSQGeHq.js";import"./Dialog-BKHY_is-.js";import"./cross-Cs_o1IBr.js";import"./svgIconContainer-BOcgzqTL.js";import"./useBaseUiId-BoCR0mVM.js";import"./InternalBackdrop-a-1TUhKR.js";import"./composite-C2bzS_eC.js";import"./index-D7gjn-bC.js";import"./index-C68uuJyt.js";import"./index-6MtMpwNm.js";import"./useEventCallback-DScuBbC5.js";import"./SkeletonBar-BZb1P8Qp.js";import"./LoadingCell-C7XTpkDw.js";import"./ColumnConfigDialog-CyTLpYWA.js";import"./DraggableList-Q4D349op.js";import"./search-C9QPdOJ2.js";import"./Input-BKyhRKRB.js";import"./useControlled-CU8iec4I.js";import"./isEqual-IWZJBVF1.js";import"./isObject-C2bjSTiE.js";import"./Button-DJJJIJ8U.js";import"./ActionButton-Be-sd2GN.js";import"./Checkbox-B8AIL56G.js";import"./useValueChanged-B7ldNgfd.js";import"./CollapsiblePanel-RlQL_xjx.js";import"./MultiColumnSortDialog-CW1m32-a.js";import"./MenuTrigger-Dx9vEa8h.js";import"./CompositeItem-CfU3YuOz.js";import"./ToolbarRootContext-uScdLbZ3.js";import"./getDisabledMountTransitionStyles-DLxvAmhZ.js";import"./getPseudoElementBounds-CUu-7ttm.js";import"./chevron-down-DDQApabx.js";import"./index-Bw8KyJ0j.js";import"./error-DyQZ58wH.js";import"./BaseCbacBanner-Biu4grrU.js";import"./makeExternalStore-D4qNgwYa.js";import"./Tooltip-C1yGDdiV.js";import"./PopoverPopup-bgrrdxmZ.js";import"./toNumber-DoDd6CDz.js";import"./useOsdkClient-Df3IuLfg.js";import"./tick-DPttqPRs.js";import"./DropdownField-C6Y3ObD0.js";import"./withOsdkMetrics-0H3uZ0eq.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
