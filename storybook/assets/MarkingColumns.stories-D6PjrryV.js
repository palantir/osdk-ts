import{f as p,j as e}from"./iframe-DeJWYCn1.js";import{O as i}from"./object-table-DWE2VEpf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DnOMAeVk.js";import"./index-B5Yva2Xc.js";import"./Dialog-BIJb_fD_.js";import"./cross-BHBLhOoQ.js";import"./svgIconContainer-D4OdXIbd.js";import"./useBaseUiId-DhBsrvdy.js";import"./InternalBackdrop-BJau4LqI.js";import"./composite-q4pLTQsX.js";import"./index-B6JIIbmg.js";import"./index-Bkdv8Oep.js";import"./index-Ccr_Oqxn.js";import"./useEventCallback-DdrNhhpd.js";import"./SkeletonBar-BwPzkscq.js";import"./LoadingCell-BVl8AVkF.js";import"./ColumnConfigDialog-dYRefZ2m.js";import"./DraggableList-BEs5_1MY.js";import"./search-ymO1htD2.js";import"./Input-ChnYFThm.js";import"./useControlled-DyW4-M2H.js";import"./Button-BTjXEyn6.js";import"./small-cross-CfWYRnkb.js";import"./ActionButton-DPXABoY3.js";import"./Checkbox-ByzxnXye.js";import"./useValueChanged-B2CAJ-lq.js";import"./CollapsiblePanel-BMKqCEZr.js";import"./MultiColumnSortDialog-B5PSdxf2.js";import"./MenuTrigger-DP6Vl1V5.js";import"./CompositeItem-BhfhJAmc.js";import"./ToolbarRootContext-Bw_XS67E.js";import"./getDisabledMountTransitionStyles-xtYaaI8G.js";import"./getPseudoElementBounds-Cyi5-PCV.js";import"./chevron-down-C0hhObXO.js";import"./index-B8RwvKuR.js";import"./error-CPbKcdrM.js";import"./BaseCbacBanner-CClRvK2W.js";import"./makeExternalStore-DYjFjmyg.js";import"./Tooltip-BhujbOiL.js";import"./PopoverPopup-BUbNU-wA.js";import"./debounce-DaBf6ZBx.js";import"./useOsdkClient-CNpvmYWs.js";import"./tick-DsYG6Jvb.js";import"./DropdownField-BiG-Qys8.js";import"./isEqual-Di2UFqa0.js";import"./withOsdkMetrics-BUS-C4Xd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
