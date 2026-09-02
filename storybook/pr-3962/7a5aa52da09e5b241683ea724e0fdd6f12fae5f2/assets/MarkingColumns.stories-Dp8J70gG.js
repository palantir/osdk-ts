import{f as p,j as e}from"./iframe-BMR09Kil.js";import{O as i}from"./object-table-C3iga_h5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ibIringt.js";import"./Table-IwMRkVWK.js";import"./index-kb2gRuUI.js";import"./Dialog-DuoiCwHj.js";import"./cross-BJiHelFR.js";import"./svgIconContainer-Dz8rpqsG.js";import"./useBaseUiId-BrR-DAr4.js";import"./InternalBackdrop-9I6g5hQb.js";import"./composite-DEwDT13v.js";import"./index-BhKcBDQn.js";import"./index-DbMijjyJ.js";import"./index-UHkWCkXY.js";import"./useEventCallback-D_XJGpwY.js";import"./SkeletonBar-CI9jZmfm.js";import"./LoadingCell-CI68OwAB.js";import"./ColumnConfigDialog-Cb71Y2yT.js";import"./DraggableList-BYdz-BRt.js";import"./search-CRp3aPu6.js";import"./Input-C_38At4g.js";import"./useControlled-B61TAugk.js";import"./Button-BFYlz1Yp.js";import"./small-cross-CyEjcHAp.js";import"./ActionButton-Bi5VWO6H.js";import"./Checkbox-D0REpKya.js";import"./useValueChanged-BaQpGzAR.js";import"./CollapsiblePanel-DHQ1AqF9.js";import"./MultiColumnSortDialog-BYx3Jqz2.js";import"./MenuTrigger-D4rESh74.js";import"./CompositeItem-C-tDKeCj.js";import"./ToolbarRootContext-DfEHvgT5.js";import"./getDisabledMountTransitionStyles-pJAOA3nr.js";import"./getPseudoElementBounds-B6ICeRFa.js";import"./chevron-down-CN8cLhcC.js";import"./index-DrOIQ7Hj.js";import"./error-DuXRxQxW.js";import"./BaseCbacBanner-Ca-I1NS9.js";import"./makeExternalStore-nFkPZ8WP.js";import"./Tooltip-ht3E5gE3.js";import"./PopoverPopup-DjHK7GgL.js";import"./debounce-CAE2VCrS.js";import"./useOsdkClient-Sc-BWgcu.js";import"./tick-B4tcRZmd.js";import"./DropdownField-CWaHSYgi.js";import"./isEqual-DMttQ-x3.js";import"./withOsdkMetrics-BoN8aVN7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
