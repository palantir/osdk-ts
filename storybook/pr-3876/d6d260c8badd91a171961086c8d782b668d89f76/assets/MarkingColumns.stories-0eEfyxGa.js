import{f as p,j as e}from"./iframe-CTnfI1fn.js";import{O as i}from"./object-table-aPMHD6ZO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5m-DnEx.js";import"./Table-hnAuiZx8.js";import"./index-BPrym6Kl.js";import"./Dialog-Bx4nD03L.js";import"./cross-D4HJDRmD.js";import"./svgIconContainer-BFETNtyc.js";import"./useBaseUiId-BSgypfGI.js";import"./InternalBackdrop-Cb5oJ93u.js";import"./composite-DP5BYXI_.js";import"./index-Tcjlr1Xh.js";import"./index-CSivwcG6.js";import"./index-Cvpf7HGY.js";import"./useEventCallback-CksauH-9.js";import"./SkeletonBar-diFfA6Py.js";import"./LoadingCell-BmwSsxYg.js";import"./ColumnConfigDialog-CR3rWsRi.js";import"./DraggableList-DTswv5-B.js";import"./search-C2q7wa1q.js";import"./Input-CpteBLrp.js";import"./useControlled-CBc9j59P.js";import"./Button-s38-kdWV.js";import"./small-cross-BdeJKm8T.js";import"./ActionButton-C3UfynQH.js";import"./Checkbox-BWBu_T2r.js";import"./useValueChanged-Dc0ezk3N.js";import"./CollapsiblePanel-2oxc_ptb.js";import"./MultiColumnSortDialog-DjIlGeDq.js";import"./MenuTrigger-DiFKGoMt.js";import"./CompositeItem-CS9C2Hpj.js";import"./ToolbarRootContext-BdrEzidw.js";import"./getDisabledMountTransitionStyles-BCsy3609.js";import"./getPseudoElementBounds-wqeFSaKd.js";import"./chevron-down-BKx-E6vn.js";import"./index-B3Orgk-A.js";import"./error-BZ1221iV.js";import"./BaseCbacBanner-BTKdSCqU.js";import"./makeExternalStore-DBGKNZLc.js";import"./Tooltip-CTQxiSY6.js";import"./PopoverPopup-Ct9yt3c3.js";import"./debounce-5bVA-BgV.js";import"./useOsdkClient-O7Mj-qAw.js";import"./tick-CoLyb-AK.js";import"./DropdownField-DE73NP0s.js";import"./isEqual-D-f_j2hI.js";import"./withOsdkMetrics-BxNR9pg9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
