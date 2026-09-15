import{f as p,j as e}from"./iframe-CpWBydph.js";import{O as i}from"./object-table-BNn1Ll-c.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D2EqYees.js";import"./Table-DVh8Ouz0.js";import"./index-DvfucFad.js";import"./Dialog-Cp3umFkg.js";import"./cross-NuddkLO5.js";import"./svgIconContainer-DbE5PrYx.js";import"./useBaseUiId-COtj2_rS.js";import"./InternalBackdrop-BSfinE2G.js";import"./composite-B-otFn75.js";import"./index-DrBBVf0s.js";import"./index-BmfQPoOF.js";import"./index-5xD2A4-R.js";import"./useEventCallback-BLTuArat.js";import"./SkeletonBar-XV3C3ne0.js";import"./LoadingCell-_Kzizub0.js";import"./ColumnConfigDialog-K0YRT_ip.js";import"./DraggableList-CwbCSsnT.js";import"./search-CA9yp1JF.js";import"./Input-CBPVcjqK.js";import"./useControlled-BmS1IvVS.js";import"./Button-CVph9TxQ.js";import"./small-cross-toPDb3Us.js";import"./ActionButton-CSVHMrTJ.js";import"./Checkbox-NGkojnFm.js";import"./useValueChanged-VjU-WqRp.js";import"./CollapsiblePanel-CygfXvb2.js";import"./MultiColumnSortDialog-B4rwN1TP.js";import"./MenuTrigger-CGEbHfg2.js";import"./CompositeItem-nG423aGN.js";import"./ToolbarRootContext-DMifvP-V.js";import"./getDisabledMountTransitionStyles-BccbayF2.js";import"./getPseudoElementBounds-D6k5ZcCj.js";import"./chevron-down-D78fMNFz.js";import"./index-D9R22dHy.js";import"./error-Due8my_O.js";import"./BaseCbacBanner-6xWHfIM4.js";import"./makeExternalStore-C7U98bYJ.js";import"./Tooltip-BhubVngg.js";import"./PopoverPopup-9FwNVPH6.js";import"./debounce-ClJ8DjPv.js";import"./useOsdkClient-OrClxpkO.js";import"./tick-1IBp_A8v.js";import"./DropdownField-Cj_IdBfJ.js";import"./isEqual-D7VM7CcB.js";import"./withOsdkMetrics-CmC654Yj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
