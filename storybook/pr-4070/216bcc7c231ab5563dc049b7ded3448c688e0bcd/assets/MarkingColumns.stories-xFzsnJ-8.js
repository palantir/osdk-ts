import{f as p,j as e}from"./iframe-_5xzb7Z5.js";import{O as i}from"./object-table-0qi2nMot.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9kDSgaR1.js";import"./Table-DsrQfiL7.js";import"./index-BQLQ6q72.js";import"./Dialog-Bbjbb_1f.js";import"./cross-DvzeLUuw.js";import"./svgIconContainer-zoYg_i-y.js";import"./useBaseUiId-CL6BvqYc.js";import"./InternalBackdrop-Cx_q57j2.js";import"./composite-RcxH71Ia.js";import"./index-Bwe_rVKq.js";import"./index-a6ymnaCE.js";import"./index-nvhFONdR.js";import"./useEventCallback-B_bCz7hc.js";import"./SkeletonBar-BnEWIrOx.js";import"./LoadingCell-DwlYTioM.js";import"./ColumnConfigDialog-0RMPiipV.js";import"./DraggableList-tGQIUW9A.js";import"./search-FeXiW-S5.js";import"./Input-6FTkig4D.js";import"./useControlled-CaOEMTdE.js";import"./Button-BN8W0OGL.js";import"./small-cross-yCsD8QJM.js";import"./ActionButton-B002jOVk.js";import"./Checkbox-C9unrssW.js";import"./useValueChanged-CqFQHurj.js";import"./CollapsiblePanel-upvgLUI2.js";import"./MultiColumnSortDialog-PYIcfppy.js";import"./MenuTrigger-DnPTwTN1.js";import"./CompositeItem-sQD2esUI.js";import"./ToolbarRootContext-BP4N1j53.js";import"./getDisabledMountTransitionStyles-B-Suvi-e.js";import"./getPseudoElementBounds-BupiSRrq.js";import"./chevron-down-Dc3YtOri.js";import"./index-CNCDNsvZ.js";import"./error-Ba02y8oz.js";import"./BaseCbacBanner-BMMVV8EG.js";import"./makeExternalStore-GpKW6nTD.js";import"./Tooltip-CiEdThN9.js";import"./PopoverPopup-CRcIjBTG.js";import"./debounce-Lcm6HHyi.js";import"./useOsdkClient-m9TwflB_.js";import"./tick-CP0D6HqE.js";import"./DropdownField-DOx-xuVw.js";import"./isEqual-DXzuEJcp.js";import"./withOsdkMetrics-uKo-L4d5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
