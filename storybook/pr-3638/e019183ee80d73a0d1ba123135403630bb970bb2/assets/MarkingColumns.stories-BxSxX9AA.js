import{f as p,j as e}from"./iframe-BdrRBIvD.js";import{O as i}from"./object-table-Bp9ZPXwv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-N4H8PUoz.js";import"./Table-Cba47QOv.js";import"./index-CyGaVN4-.js";import"./Dialog-BYZH3diU.js";import"./cross-D7w2_wJU.js";import"./svgIconContainer-BaNqItXx.js";import"./useBaseUiId-CaVqH5La.js";import"./InternalBackdrop-a6ksL_iS.js";import"./composite-AHJSpspS.js";import"./index-CeaTfT0R.js";import"./index-CKJSQvSH.js";import"./index-Pelcz0Jw.js";import"./useEventCallback-BVBEQazv.js";import"./SkeletonBar-DPxsnRRt.js";import"./LoadingCell-MwptuhCt.js";import"./ColumnConfigDialog-Cr79jsaD.js";import"./DraggableList-CZoJ12ek.js";import"./search-P7WA0n-i.js";import"./Input-Crry490_.js";import"./useControlled-jNQesOqe.js";import"./Button-C9phC2y1.js";import"./small-cross-CXbRHj9E.js";import"./ActionButton-B4tMIaGw.js";import"./Checkbox-ByIXHCwi.js";import"./useValueChanged-B8B2MLUf.js";import"./CollapsiblePanel-sFHX5HPm.js";import"./MultiColumnSortDialog-B9Hj3lBb.js";import"./MenuTrigger-BwOTrPip.js";import"./CompositeItem-DukmHiA_.js";import"./ToolbarRootContext-DgRaA1gf.js";import"./getDisabledMountTransitionStyles-Ci3H7Cv-.js";import"./getPseudoElementBounds-CLs6rES9.js";import"./chevron-down-JT0IhlWE.js";import"./index-CyfjPVR_.js";import"./error-DWKLqXS9.js";import"./BaseCbacBanner-DhNV4gSP.js";import"./makeExternalStore--cYtEdhQ.js";import"./Tooltip-uc0E4CK4.js";import"./PopoverPopup-BR5nJgsw.js";import"./debounce-Cz2uqvCU.js";import"./useOsdkClient-DqwdNOrg.js";import"./tick-C7LkjtSk.js";import"./DropdownField-C3dDcHKe.js";import"./isEqual-DatieH5_.js";import"./withOsdkMetrics-BJXn2F5H.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
