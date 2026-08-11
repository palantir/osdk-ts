import{f as p,j as e}from"./iframe-6a0axaYb.js";import{O as i}from"./object-table-ckLHDuUg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C65r43dF.js";import"./Table-Bp_iz_Lh.js";import"./index-Bx8WIjbQ.js";import"./Dialog-Dniq6lMf.js";import"./cross-ui5GjUpZ.js";import"./svgIconContainer-CaPxp0ph.js";import"./useBaseUiId-Cbq5nu5V.js";import"./InternalBackdrop-CCRxD5z3.js";import"./composite-C5OCHPh0.js";import"./index-BGOIdxxc.js";import"./index-lSA6E12E.js";import"./index-BtvGHLm_.js";import"./useEventCallback-BxS3_eQ_.js";import"./SkeletonBar-DXlHutjQ.js";import"./LoadingCell-Cp2o2IIh.js";import"./ColumnConfigDialog-BBQhTIyV.js";import"./DraggableList-CW8x0iH2.js";import"./search-BNwfslCq.js";import"./Input-DMbXSCc_.js";import"./useControlled-CjqN0_NF.js";import"./isEqual-56Gbp1Vh.js";import"./isObject-B29iDIAZ.js";import"./Button-De2gQHI6.js";import"./ActionButton-DrWqQcrB.js";import"./Checkbox-akOJqxna.js";import"./useValueChanged-C0Arb9yb.js";import"./CollapsiblePanel-DMUD5QcD.js";import"./MultiColumnSortDialog-C19AmYzX.js";import"./MenuTrigger-DfEaML1p.js";import"./CompositeItem-QPaHlaAE.js";import"./ToolbarRootContext-3aAm6U4A.js";import"./getDisabledMountTransitionStyles-CQcYSoK0.js";import"./getPseudoElementBounds-EVwwh6hp.js";import"./chevron-down-ZwgymyQM.js";import"./index-BaPDJwEJ.js";import"./error-ZufoUxds.js";import"./BaseCbacBanner-CYPhAEd2.js";import"./makeExternalStore-BIiPaBhV.js";import"./Tooltip-DRQfkytf.js";import"./PopoverPopup-B1YhPEAq.js";import"./toNumber-SIC4RXNP.js";import"./useOsdkClient-BFFz0Pdr.js";import"./tick-ChlBO6Ol.js";import"./DropdownField-BTkkJQzG.js";import"./withOsdkMetrics-DDxseQIl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
