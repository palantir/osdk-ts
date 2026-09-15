import{f as p,j as e}from"./iframe-DP2XT2Ax.js";import{O as i}from"./object-table-CWd3XKCa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-MSxHh9cg.js";import"./Table-oBozEYgN.js";import"./index-CZwfuIm2.js";import"./Dialog-D2jP7-9g.js";import"./cross-BST2eW_7.js";import"./svgIconContainer-CYYVNj4c.js";import"./useBaseUiId-FZoWw8m8.js";import"./InternalBackdrop-BhboBOxC.js";import"./composite-CmPQztny.js";import"./index-RJE3YwuO.js";import"./index-B2FT6Zn5.js";import"./index-DbIKPCqv.js";import"./useEventCallback-Dg6K2X_Q.js";import"./SkeletonBar-DH4NDkMn.js";import"./LoadingCell-ClVBOB9X.js";import"./ColumnConfigDialog-og7pKw1Q.js";import"./DraggableList-C1eYiUo8.js";import"./search-DHZrW8_w.js";import"./Input-1UPAFlWH.js";import"./useControlled-C4scXiay.js";import"./Button-BVtJyzoK.js";import"./small-cross-CtLGGmA4.js";import"./ActionButton-uv8s5IRm.js";import"./Checkbox-Beu4Oh0H.js";import"./useValueChanged-RoL-GB64.js";import"./CollapsiblePanel-DPIs0k4c.js";import"./MultiColumnSortDialog-xHpIpjzv.js";import"./MenuTrigger-CFNU6crv.js";import"./CompositeItem-AXDbFh92.js";import"./ToolbarRootContext-BZtQONnf.js";import"./getDisabledMountTransitionStyles-DDs7xAlw.js";import"./getPseudoElementBounds-QeoJL95h.js";import"./chevron-down-CzZnZ__S.js";import"./index-DTkzCssz.js";import"./error-BbJX9_-G.js";import"./BaseCbacBanner-pjzVuofY.js";import"./makeExternalStore-Db1GWq1p.js";import"./Tooltip-aqIVw1KW.js";import"./PopoverPopup-C_ncCoFL.js";import"./debounce-Dj81RInU.js";import"./useOsdkClient-CAkDS70D.js";import"./tick-C2-r-ZD3.js";import"./DropdownField-CtHib4R8.js";import"./isEqual-DLffGPnv.js";import"./withOsdkMetrics-l-VjWGrr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
