import{f as p,j as e}from"./iframe-Bfu51uKD.js";import{O as i}from"./object-table-ZisTagRp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CzYQogJ9.js";import"./Table-DsoGa2FL.js";import"./index-DQHJlggZ.js";import"./Dialog-BmpyHtLd.js";import"./cross-Cj0zRN-P.js";import"./svgIconContainer-BznedMGF.js";import"./useBaseUiId-BMFIksfI.js";import"./InternalBackdrop-vxJhONV7.js";import"./composite-cjjayGq4.js";import"./index-C7HMsQca.js";import"./index-bKbCmQEs.js";import"./index-DeDNMLrn.js";import"./useEventCallback-Ci69gKLi.js";import"./SkeletonBar-D3W8qW_m.js";import"./LoadingCell-DzIW3PIc.js";import"./ColumnConfigDialog-B6bW1hs_.js";import"./DraggableList-B18qaVoP.js";import"./search-DiqUH8-G.js";import"./Input-BARZRbjA.js";import"./useControlled-DiKj9TwT.js";import"./isEqual-zZQp1Tf_.js";import"./isObject-Dl748mdT.js";import"./Button-BczMqlK6.js";import"./ActionButton-DdI7_jIN.js";import"./Checkbox-D5o9wSO_.js";import"./useValueChanged-D3dCBJ9W.js";import"./CollapsiblePanel-wUtJF-2b.js";import"./MultiColumnSortDialog--0c-JbQA.js";import"./MenuTrigger-ISZjXtIA.js";import"./CompositeItem-DJ-aCdOv.js";import"./ToolbarRootContext-fCSUIj3k.js";import"./getDisabledMountTransitionStyles-DaieVKBp.js";import"./getPseudoElementBounds-DA_wzyEX.js";import"./chevron-down-zP9dxkSq.js";import"./index-yGcDT_JP.js";import"./error-DGXpdtF_.js";import"./BaseCbacBanner-f0-HF5WI.js";import"./makeExternalStore-CT8wDfgr.js";import"./Tooltip-CGMIo-xb.js";import"./PopoverPopup-D_2s96me.js";import"./toNumber-Bs_rfsY9.js";import"./useOsdkClient-Dw12XehB.js";import"./tick-WDJS8_jm.js";import"./DropdownField-Bd1ER7PN.js";import"./withOsdkMetrics-DUx07Whe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
