import{f as p,j as e}from"./iframe-CC79wy_g.js";import{O as i}from"./object-table-CkXFhR3k.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-z3GLkGAP.js";import"./Table-C_k6UNCH.js";import"./index-C33jCrCz.js";import"./Dialog-B4UEOGBl.js";import"./cross-ipWBqB8R.js";import"./svgIconContainer-BP6BFAr1.js";import"./useBaseUiId-DAg5RdyV.js";import"./InternalBackdrop-COWpBHnV.js";import"./composite-C0Vu5t_m.js";import"./index-BlLuABy0.js";import"./index-D3F-m5eM.js";import"./index-a8jLhQEi.js";import"./useEventCallback-DRddk0cy.js";import"./SkeletonBar-D7y69zaB.js";import"./LoadingCell-DTyZ0HHf.js";import"./ColumnConfigDialog-BJ-BrdIG.js";import"./DraggableList-DTV1vgC0.js";import"./search-C23-bZ6_.js";import"./Input-rDYGL68X.js";import"./useControlled-B01nKra1.js";import"./isEqual-7wD5lyOB.js";import"./isObject-CdHfoVRL.js";import"./Button-DuivO10i.js";import"./ActionButton-CNWw_rBN.js";import"./Checkbox-CsyxZdv8.js";import"./useValueChanged-CZBR_R6j.js";import"./CollapsiblePanel-DeEVZt2f.js";import"./MultiColumnSortDialog-Cne529o4.js";import"./MenuTrigger-D2yJRNIb.js";import"./CompositeItem-DFHw5T7g.js";import"./ToolbarRootContext-DHil5fps.js";import"./getDisabledMountTransitionStyles-Bvyp7A2k.js";import"./getPseudoElementBounds-BlO2I0zb.js";import"./chevron-down-v3_iAZgR.js";import"./index-HMtgFW0K.js";import"./error-wnTyEN9d.js";import"./BaseCbacBanner-B_HqEQWu.js";import"./makeExternalStore-CkX2v-LN.js";import"./Tooltip-qaomFd3j.js";import"./PopoverPopup-CcmMhYNQ.js";import"./toNumber-BhxvyPk1.js";import"./useOsdkClient-DVLj6L8G.js";import"./tick-Ctls74RV.js";import"./DropdownField-IS4psDxI.js";import"./withOsdkMetrics-EoR7xkLR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
