import{f as p,j as e}from"./iframe-BHEMD7tl.js";import{O as i}from"./object-table-9JUtvRcU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9vvsdXl.js";import"./Table-CgHBZ9-U.js";import"./index-DZ514iDh.js";import"./Dialog-B407VpGc.js";import"./cross-CnuckHrQ.js";import"./svgIconContainer-czks9Ze_.js";import"./useBaseUiId-Bjqi_A68.js";import"./InternalBackdrop-BOOTBUHJ.js";import"./composite-CMjg4bD9.js";import"./index-CHTCcjpb.js";import"./index-BOLGOaBy.js";import"./index-COKjoxNM.js";import"./useEventCallback-C8xM2aMu.js";import"./SkeletonBar-CaP9thrl.js";import"./LoadingCell-Bi5n_cGp.js";import"./ColumnConfigDialog-4N1t5nOQ.js";import"./DraggableList-B_ZoJH4b.js";import"./search-BnYzLcC3.js";import"./Input-C6SEChBH.js";import"./useControlled-AgsGiueD.js";import"./Button-B8tVf1VG.js";import"./small-cross-CSiRE0ih.js";import"./ActionButton-D5jnFT3t.js";import"./Checkbox-Kf2cnlWj.js";import"./useValueChanged-B3jGbwyp.js";import"./CollapsiblePanel-D9e8UMK0.js";import"./MultiColumnSortDialog-DCIEhd8n.js";import"./MenuTrigger-BTN0l8ID.js";import"./CompositeItem-D521EeHU.js";import"./ToolbarRootContext-DbG-Pccc.js";import"./getDisabledMountTransitionStyles-BTxtuE3h.js";import"./getPseudoElementBounds-B18hrTO2.js";import"./chevron-down-fhI62sWj.js";import"./index-DUmTXUBR.js";import"./error-7ZQ1PwUq.js";import"./BaseCbacBanner-C_gcv04e.js";import"./makeExternalStore-Bvzg9kOq.js";import"./Tooltip-PgaxHJZr.js";import"./PopoverPopup-BSMX4lRh.js";import"./debounce-Bwjf3tf_.js";import"./useOsdkClient-Bww5s5cX.js";import"./tick-DMMXPGVM.js";import"./DropdownField-CHsTBEnv.js";import"./isEqual-miRlTJwc.js";import"./withOsdkMetrics-DXQf1Gwd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
