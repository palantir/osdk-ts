import{f as p,j as e}from"./iframe-BNkEWG9a.js";import{O as i}from"./object-table-Qs3gwRh7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COpsNFvL.js";import"./Table-BRo60hrW.js";import"./index-72yVnFn9.js";import"./Dialog-CEGWLd6J.js";import"./cross-DtXpSNop.js";import"./svgIconContainer-CP_7SCsh.js";import"./useBaseUiId-C2SIyrP4.js";import"./InternalBackdrop-DL1FTzrx.js";import"./composite-av1GhyDs.js";import"./index-Cggvd78O.js";import"./index-DEfY7O8R.js";import"./index-CEgJZuuG.js";import"./useEventCallback-D1Rxj0yz.js";import"./SkeletonBar-D-eSS5Nh.js";import"./LoadingCell-DQeoykhl.js";import"./ColumnConfigDialog-BWqRTolx.js";import"./DraggableList-xtF1Hp-l.js";import"./search-C5-ZQPA-.js";import"./Input-DWIMVPa2.js";import"./useControlled-DvYSYpF5.js";import"./isEqual-DrE4eLTE.js";import"./isObject-BwMKN0BU.js";import"./Button-DgpDNDJ9.js";import"./ActionButton-DIAFsp8c.js";import"./Checkbox-CWbEwXRu.js";import"./useValueChanged-NeM28dcY.js";import"./CollapsiblePanel-B0ffwjNO.js";import"./MultiColumnSortDialog-CqnbLiDB.js";import"./MenuTrigger-BhbSLNHY.js";import"./CompositeItem-DeRlHXsU.js";import"./ToolbarRootContext-BBdWlzqo.js";import"./getDisabledMountTransitionStyles-DN_b7Zsd.js";import"./getPseudoElementBounds-BMm8O3oC.js";import"./chevron-down-7Toxqoqn.js";import"./index-wuM_JjP7.js";import"./error-DiVMU7Ev.js";import"./BaseCbacBanner-z6rnorq_.js";import"./makeExternalStore-ByHargtT.js";import"./Tooltip-DYtmttXC.js";import"./PopoverPopup-qYbyIH6Y.js";import"./toNumber-ClNDy-wj.js";import"./useOsdkClient-BRiSPEVp.js";import"./tick-BoaWBw1L.js";import"./DropdownField-iGQ191qz.js";import"./withOsdkMetrics-CR8laU5K.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
