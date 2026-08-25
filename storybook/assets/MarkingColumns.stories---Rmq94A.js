import{f as p,j as e}from"./iframe-DrnKYwzt.js";import{O as i}from"./object-table-B4WCOvbA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dd5bbgTK.js";import"./index-DPIZfSwK.js";import"./Dialog-DVFQmxM_.js";import"./cross-DXIDkMuC.js";import"./svgIconContainer-DaVnGh9c.js";import"./useBaseUiId-CFsS7qRQ.js";import"./InternalBackdrop-DfWfg3ug.js";import"./composite-CCKcLmMF.js";import"./index-B5y8rxCa.js";import"./index-CiYDc6_L.js";import"./index-Bisa-WXs.js";import"./useEventCallback-B-Wg4m7c.js";import"./SkeletonBar-Cc2Dg58p.js";import"./LoadingCell-C4YHX9fn.js";import"./ColumnConfigDialog-Df86GpYG.js";import"./DraggableList-CH2Ns8QE.js";import"./search-CLh-nr8U.js";import"./Input-Bed63vhv.js";import"./useControlled-CTk87t76.js";import"./Button-QrXAKlJD.js";import"./small-cross-BLp7dord.js";import"./ActionButton-DnesRqE0.js";import"./Checkbox-C_Bhd5c0.js";import"./useValueChanged-DZ_zqBSU.js";import"./CollapsiblePanel-B6RPHT_f.js";import"./MultiColumnSortDialog-wpAUedQ9.js";import"./MenuTrigger-DUsLBEvk.js";import"./CompositeItem-DupeSBp8.js";import"./ToolbarRootContext-D8ABn96Q.js";import"./getDisabledMountTransitionStyles-Bl-wnC8C.js";import"./getPseudoElementBounds-xbPRU0lb.js";import"./chevron-down-BY9VCrZu.js";import"./index-7JqWaY13.js";import"./error-Cd40ldoN.js";import"./BaseCbacBanner-B6pNmjKQ.js";import"./makeExternalStore-DWwwitH0.js";import"./Tooltip-CUvdbu8d.js";import"./PopoverPopup-6Vyawomv.js";import"./debounce-B8UVLwl7.js";import"./useOsdkClient-BVIFxFY0.js";import"./tick-DGaDc00O.js";import"./DropdownField-BYEnn1vN.js";import"./isEqual-CBKxto0y.js";import"./withOsdkMetrics-CulCESkd.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
