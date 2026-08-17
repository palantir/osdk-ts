import{f as p,j as e}from"./iframe-BqP11lAl.js";import{O as i}from"./object-table-BSX4imw4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CC6pDEnd.js";import"./Table-CLZH9aTN.js";import"./index-C64P8eBz.js";import"./Dialog-kfk8DkZ5.js";import"./cross-HwIuLDzz.js";import"./svgIconContainer-oPNNgG6X.js";import"./useBaseUiId-Djy5KSNq.js";import"./InternalBackdrop-CBRTTdO3.js";import"./composite-kMucuKDb.js";import"./index-BB8CgDAM.js";import"./index-CGSFhzHU.js";import"./index-DGkDRhxB.js";import"./useEventCallback-Z2-FvKEF.js";import"./SkeletonBar-DMpt_Xnd.js";import"./LoadingCell-SkI0LHW0.js";import"./ColumnConfigDialog-kq1NxhtA.js";import"./DraggableList-qWvzM3F0.js";import"./search-BJsW39qj.js";import"./Input-B380zOW0.js";import"./useControlled-C68p10XH.js";import"./isEqual-HWPPZe8e.js";import"./isObject-EDcxoV9U.js";import"./Button-CeOJx0M4.js";import"./ActionButton-CSPytVBD.js";import"./Checkbox-Dc98QANj.js";import"./useValueChanged-C3lz4-Lx.js";import"./CollapsiblePanel-Dd-c_wm9.js";import"./MultiColumnSortDialog-C5lYkLdg.js";import"./MenuTrigger-C1W8SDZ-.js";import"./CompositeItem-BmMUGQ2w.js";import"./ToolbarRootContext-ClCfVHHi.js";import"./getDisabledMountTransitionStyles-DPQMYvAe.js";import"./getPseudoElementBounds-DG5NkHrs.js";import"./chevron-down-DCtv2YH3.js";import"./index-Bc_u8_gZ.js";import"./error-BNv6Et6s.js";import"./BaseCbacBanner-Cl9CYcki.js";import"./makeExternalStore-BC_XfyUC.js";import"./Tooltip-B7QrohEN.js";import"./PopoverPopup-Rq34_u9B.js";import"./toNumber-B1Hjpnf0.js";import"./useOsdkClient-BIJtNhWb.js";import"./tick-tcNcz_VP.js";import"./DropdownField-z5Tej7ll.js";import"./withOsdkMetrics-CWSxEVx_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
