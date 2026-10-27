import{f as p,j as e}from"./iframe-D150H4vz.js";import{O as i}from"./object-table-DP4wjFEO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BarckMkV.js";import"./Table-gGJNwpbp.js";import"./index-cVrSJLbz.js";import"./Dialog-GeD2sG_1.js";import"./cross-6mUh6O0a.js";import"./svgIconContainer-VUxlTV2E.js";import"./useBaseUiId-BEwnCbr0.js";import"./InternalBackdrop-D-pm-OPY.js";import"./composite-B_0CI6wq.js";import"./index-Cy-heBPu.js";import"./index-N3sDVMXC.js";import"./index-B1h1Ffvc.js";import"./useEventCallback-CBWL1hY-.js";import"./SkeletonBar-CvwasmzM.js";import"./LoadingCell-CV767y0j.js";import"./ColumnConfigDialog-BVWNFeUZ.js";import"./DraggableList-Bzc3U9HD.js";import"./search-B_D2n4ON.js";import"./Input-D0LXp2w8.js";import"./useControlled-lhlupqEn.js";import"./Button-wEOF9kbC.js";import"./small-cross-OFGcSSBP.js";import"./ActionButton-YzMno_H9.js";import"./Checkbox-CXCLecrd.js";import"./useValueChanged-CN5YLtWf.js";import"./CollapsiblePanel-CA9S5PKs.js";import"./MultiColumnSortDialog-BFMBTEvA.js";import"./MenuTrigger-CxpIKNcn.js";import"./CompositeItem-iPCNYUwO.js";import"./ToolbarRootContext-G9KEnSun.js";import"./getDisabledMountTransitionStyles-5KUPlXNs.js";import"./getPseudoElementBounds-CVhzJWTU.js";import"./chevron-down-BtdYGIbe.js";import"./index-CwtLN-AV.js";import"./error-EjSx_YOh.js";import"./BaseCbacBanner-DH3oT3a9.js";import"./makeExternalStore-BIWQlVyv.js";import"./Tooltip-BMJ7R0dC.js";import"./PopoverPopup-B10GF7su.js";import"./debounce-_Huulw1P.js";import"./useOsdkClient-Dsa6FFc4.js";import"./tick-CYEAeUON.js";import"./DropdownField-StYPCDOl.js";import"./isEqual-Cu2b5RlF.js";import"./withOsdkMetrics-BMpR6FdW.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
