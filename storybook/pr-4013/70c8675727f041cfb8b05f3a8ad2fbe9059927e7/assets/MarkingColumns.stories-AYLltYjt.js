import{f as p,j as e}from"./iframe-CZqFYSvz.js";import{O as i}from"./object-table-DwMB5kVn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-W-9dgf5b.js";import"./Table-B3v6P-QS.js";import"./index-4I_FO6X-.js";import"./Dialog-ceRzZVUm.js";import"./cross-DwkOXENp.js";import"./svgIconContainer-B4GgTWLP.js";import"./useBaseUiId-D1DgvgDy.js";import"./InternalBackdrop-CqAf0JXm.js";import"./composite-DshpnDaY.js";import"./index-CwvgB0UQ.js";import"./index-TcvRDgBd.js";import"./index-DwIy-beY.js";import"./useEventCallback-C1QWqQSQ.js";import"./SkeletonBar-YNeerWRQ.js";import"./LoadingCell-J626_w_e.js";import"./ColumnConfigDialog-DhBY97p3.js";import"./DraggableList-DTGbsUyi.js";import"./search-DQIrKTJC.js";import"./Input-DFczC5qB.js";import"./useControlled-BEhUjoKU.js";import"./Button-DPWKZHun.js";import"./small-cross-DqYGaSrZ.js";import"./ActionButton-DwlulUX5.js";import"./Checkbox-CT4wGdV_.js";import"./useValueChanged-pQbly7Ct.js";import"./CollapsiblePanel-fJf7Arc3.js";import"./MultiColumnSortDialog-Daa1Ku64.js";import"./MenuTrigger-kTph8d-l.js";import"./CompositeItem-BX8AU06n.js";import"./ToolbarRootContext-FrGRfv5z.js";import"./getDisabledMountTransitionStyles-BKCYmhLV.js";import"./getPseudoElementBounds-BXEncbQt.js";import"./chevron-down-DW5k5Yie.js";import"./index-CkQb-QUw.js";import"./error-B_2Afo6g.js";import"./BaseCbacBanner-MmXi3aHl.js";import"./makeExternalStore-BLCxm6Ol.js";import"./Tooltip-4cXVr-Gb.js";import"./PopoverPopup-NWTu8aE_.js";import"./debounce-iVB6b_Y1.js";import"./useOsdkClient-CH4uCo_W.js";import"./tick-CC6n50A4.js";import"./DropdownField-BI2c6Ebd.js";import"./isEqual-BAjQPonJ.js";import"./withOsdkMetrics-BHAZhm5k.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
