import{f as p,j as e}from"./iframe-D8hMLNEt.js";import{O as i}from"./object-table-BKVAudWN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DdG7SQNV.js";import"./Table-DPcU3goU.js";import"./index-QDiAeGPl.js";import"./Dialog-CTNbHSyM.js";import"./cross-SP4nOs9x.js";import"./svgIconContainer-BJNLg_qp.js";import"./useBaseUiId-O-XOb3K-.js";import"./InternalBackdrop-BWmGo_0i.js";import"./composite-36-nzuho.js";import"./index-D2Eij5lS.js";import"./index-B7f8WC_6.js";import"./index-CYi3P9bP.js";import"./useEventCallback-BUFtzlGF.js";import"./SkeletonBar-Br5GneAQ.js";import"./LoadingCell-Dc5q-JgP.js";import"./ColumnConfigDialog-Bv-9rG9y.js";import"./DraggableList-DFj2LmBF.js";import"./search-fDezn5AL.js";import"./Input-DMnyIvQ_.js";import"./useControlled-60YnUuGr.js";import"./Button-C5El-Ott.js";import"./small-cross-CnL6sI_q.js";import"./ActionButton-BBpnUKPy.js";import"./Checkbox-Cha3BFPL.js";import"./useValueChanged-Bm34Du_O.js";import"./CollapsiblePanel-Cy98f2QZ.js";import"./MultiColumnSortDialog-DXezHdvO.js";import"./MenuTrigger--bnc-pAS.js";import"./CompositeItem-C5rE64Sx.js";import"./ToolbarRootContext-D5yv28Ry.js";import"./getDisabledMountTransitionStyles-C0Hmpzmq.js";import"./getPseudoElementBounds-BmPS8XBk.js";import"./chevron-down-BOORn2QE.js";import"./index-CXwV2iqk.js";import"./error-CLijhntf.js";import"./BaseCbacBanner-B0WVh69X.js";import"./makeExternalStore-Bvnv1DDu.js";import"./Tooltip-Cll_9OQu.js";import"./PopoverPopup-CnH8jKUA.js";import"./debounce-DSbZ-o5K.js";import"./useOsdkClient-Dp1gI7BH.js";import"./tick-CGx1uDyI.js";import"./DropdownField-B31FtCPd.js";import"./isEqual-Dbe--Ogh.js";import"./withOsdkMetrics-wAiRx6GW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
