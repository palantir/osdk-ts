import{f as p,j as e}from"./iframe-8nXJMjDB.js";import{O as i}from"./object-table-C1y8_Cff.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJKRkHxR.js";import"./Table-cSlmjIo0.js";import"./index-DJbKq1-5.js";import"./Dialog-CeUIfP7J.js";import"./cross-CpVH0STr.js";import"./svgIconContainer-olalqAcz.js";import"./useBaseUiId-DpDF9vet.js";import"./InternalBackdrop-BwllQc25.js";import"./composite-Bp-oM0Et.js";import"./index-CEoWz6xw.js";import"./index-2q5Mchef.js";import"./index-BXuWsT-u.js";import"./useEventCallback-Cb1n4noc.js";import"./SkeletonBar-D3HcZ6cf.js";import"./LoadingCell-DNVjwROJ.js";import"./ColumnConfigDialog-DP_5GMTQ.js";import"./DraggableList-BYVD_cJw.js";import"./search-Bnief77D.js";import"./Input-QBUJ65eb.js";import"./useControlled-CUJ7pCf5.js";import"./Button-BIf78uDw.js";import"./small-cross-7ULJZ0Aq.js";import"./ActionButton-BVPquFXf.js";import"./Checkbox-Cv4_Iq6h.js";import"./useValueChanged-Dzpnds2M.js";import"./CollapsiblePanel-C7gxpTye.js";import"./MultiColumnSortDialog-B0xMWyyj.js";import"./MenuTrigger-BwWfXhSx.js";import"./CompositeItem-CfRgOFRs.js";import"./ToolbarRootContext-BLLK3VJo.js";import"./getDisabledMountTransitionStyles-yJ-bhU6o.js";import"./getPseudoElementBounds-BTPVoCRU.js";import"./chevron-down-Cc9laCGb.js";import"./index-C0-gYeVA.js";import"./error-BhxtiV9P.js";import"./BaseCbacBanner-KbhteuMc.js";import"./makeExternalStore-DMgVpl9f.js";import"./Tooltip-DYQoxjoJ.js";import"./PopoverPopup-iFnEjeGR.js";import"./debounce-CLt3Mm3K.js";import"./useOsdkClient-DlZIRDE7.js";import"./tick-DDh-ihWu.js";import"./DropdownField-C3Grldi_.js";import"./isEqual-B38MWf1z.js";import"./withOsdkMetrics-C8MRYO6c.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
