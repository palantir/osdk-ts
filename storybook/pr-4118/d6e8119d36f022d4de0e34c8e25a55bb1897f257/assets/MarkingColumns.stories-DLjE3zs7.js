import{f as p,j as e}from"./iframe-B_S0EqMa.js";import{O as i}from"./object-table-C9dlJDzg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VT4tRblm.js";import"./Table-DPMLCe5N.js";import"./index-omwonnY8.js";import"./Dialog-D5MK1Ho4.js";import"./cross-CQGje-Eb.js";import"./svgIconContainer-D37wr4aE.js";import"./useBaseUiId-BlWO7UtN.js";import"./InternalBackdrop-B96Tkp15.js";import"./composite-PIV4lDcc.js";import"./index-DIzgx3sP.js";import"./index-b4QG9WWh.js";import"./index-5NQkvcqq.js";import"./useEventCallback-Bt8CFa_6.js";import"./SkeletonBar-DgL1EZY6.js";import"./LoadingCell-B7fZsn46.js";import"./ColumnConfigDialog-e_fW-uVL.js";import"./DraggableList-5Wocb-cP.js";import"./search-B1fKCW94.js";import"./Input-Dc-QK3C6.js";import"./useControlled-HSy2N_AY.js";import"./Button-Bt2kiQIM.js";import"./small-cross-4s57bvQI.js";import"./ActionButton-BC0COhhV.js";import"./Checkbox-BNRveCfd.js";import"./useValueChanged-BNRB7Ano.js";import"./CollapsiblePanel-BTNt_fsv.js";import"./MultiColumnSortDialog-DiSyxs0d.js";import"./MenuTrigger-Zl1JMXTK.js";import"./CompositeItem-C2Mv02sz.js";import"./ToolbarRootContext-zpUnsunT.js";import"./getDisabledMountTransitionStyles-C4jU6be9.js";import"./getPseudoElementBounds-Cf8_zdKL.js";import"./chevron-down-kik4znnV.js";import"./index-Eadm7kDD.js";import"./error-BnUCzbEn.js";import"./BaseCbacBanner-CLZXYniH.js";import"./makeExternalStore-CvSwbGtd.js";import"./Tooltip-wkX9ODyR.js";import"./PopoverPopup-DvC1XwGt.js";import"./debounce-DkO2AOLz.js";import"./useOsdkClient-BgQED0Kw.js";import"./tick-cfCmRgVv.js";import"./DropdownField-BqwO7jwV.js";import"./isEqual-DJaloL8r.js";import"./withOsdkMetrics-CXFFSRl8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
