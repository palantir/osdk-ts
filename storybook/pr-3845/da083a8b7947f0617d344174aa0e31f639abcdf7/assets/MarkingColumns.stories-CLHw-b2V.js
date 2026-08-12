import{f as p,j as e}from"./iframe-BG-xXo7r.js";import{O as i}from"./object-table-1RAfaQKF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-2GkLelL5.js";import"./Table-rb1p-4tf.js";import"./index-Pj-HzUzm.js";import"./Dialog-DrUN80A_.js";import"./cross-COO8NBvG.js";import"./svgIconContainer-CRyh23yS.js";import"./useBaseUiId-D-UAxzqn.js";import"./InternalBackdrop-WCG0sYkD.js";import"./composite-CKXXvF5N.js";import"./index-BK0u17L-.js";import"./index-DwqJd7FU.js";import"./index-DR02O8bu.js";import"./useEventCallback-C97y8csB.js";import"./SkeletonBar-CKWLJD0i.js";import"./LoadingCell-CAUxc5Qv.js";import"./ColumnConfigDialog-zJyC0k_x.js";import"./DraggableList-jcpceXqW.js";import"./search-BdsoZ98Z.js";import"./Input-BZw_T80b.js";import"./useControlled-iuVTSgpH.js";import"./isEqual-DPwdhm9T.js";import"./isObject-CSS3G1-i.js";import"./Button-BwngmVa3.js";import"./ActionButton-Ck1hjfYS.js";import"./Checkbox-BAWFiuPA.js";import"./useValueChanged-CpBTQG4m.js";import"./CollapsiblePanel-BxSGC2o0.js";import"./MultiColumnSortDialog-B3LSPblt.js";import"./MenuTrigger-Bg-yIpNH.js";import"./CompositeItem-cxMrWvJM.js";import"./ToolbarRootContext-DRFZpc1m.js";import"./getDisabledMountTransitionStyles-BFncSCC7.js";import"./getPseudoElementBounds-DIwOO_f-.js";import"./chevron-down-BfUHrZib.js";import"./index-CQkLRa4U.js";import"./error-RFJ-PR3n.js";import"./BaseCbacBanner-BiIEtPUE.js";import"./makeExternalStore-BKMYc6Mc.js";import"./Tooltip-pjPnDbXT.js";import"./PopoverPopup-B0nz0je_.js";import"./toNumber-s1ERlujj.js";import"./useOsdkClient-DH7JXxel.js";import"./tick-Ck2m9m_d.js";import"./DropdownField-Clf5Rcoi.js";import"./withOsdkMetrics-CfOwfL5Z.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
