import{f as p,j as e}from"./iframe-BqbigeuD.js";import{O as i}from"./object-table-ClqDNB1D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-RQWAHosC.js";import"./index-D7s1vZwA.js";import"./Dialog-BuZiIJzM.js";import"./cross-CLJqu8dR.js";import"./svgIconContainer-CNyNUipw.js";import"./useBaseUiId-BrUQ1lUA.js";import"./InternalBackdrop-CADGsbSS.js";import"./composite-DOjpwy0F.js";import"./index-CLCCLTRM.js";import"./index-KjJeD42o.js";import"./index-CK3DihJa.js";import"./useEventCallback-B_T5g4Vi.js";import"./SkeletonBar-ByKW1A8u.js";import"./LoadingCell-DmWxZ4hr.js";import"./ColumnConfigDialog-LESDT8Pt.js";import"./DraggableList-Cw4KULFA.js";import"./search-BkoZ-p7h.js";import"./Input-w6FfiWMZ.js";import"./useControlled-BkV9XWg4.js";import"./Button-Bs_AcwvG.js";import"./small-cross-Wg6h33WU.js";import"./ActionButton-DESSk2L6.js";import"./Checkbox-Csso-sIn.js";import"./useValueChanged-BVNP8RsF.js";import"./CollapsiblePanel-BgblNzsZ.js";import"./MultiColumnSortDialog-HMq3ZHNG.js";import"./MenuTrigger-Bgxeic5c.js";import"./CompositeItem-dQj9Bt62.js";import"./ToolbarRootContext-B_mJM9-f.js";import"./getDisabledMountTransitionStyles-CCtmzqiZ.js";import"./getPseudoElementBounds-l5CwwhmS.js";import"./chevron-down-GBaXIHW1.js";import"./index-BfjKC9iU.js";import"./error-BChOvziS.js";import"./BaseCbacBanner-Bw6sSYx1.js";import"./makeExternalStore-kAlj8eNH.js";import"./Tooltip-CDaVt04k.js";import"./PopoverPopup-ClTiD7mI.js";import"./debounce-WRa7r5fz.js";import"./useOsdkClient-5ha46Acw.js";import"./tick-D0Qn2Cby.js";import"./DropdownField-CNzaS55x.js";import"./isEqual-CJ26dzBU.js";import"./withOsdkMetrics-rp-esplT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
