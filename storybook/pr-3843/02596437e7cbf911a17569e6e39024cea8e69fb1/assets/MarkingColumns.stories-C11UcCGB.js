import{f as p,j as e}from"./iframe-BzgeOfJo.js";import{O as i}from"./object-table-CcppgmG_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bkrr1btE.js";import"./Table-ChpIbJnY.js";import"./index-0sS4DK38.js";import"./Dialog-BZEvx_K9.js";import"./cross-CDPJxVBK.js";import"./svgIconContainer-DfG8sdKE.js";import"./useBaseUiId-CXJNSrJM.js";import"./InternalBackdrop-BayFq1HO.js";import"./composite-B4xmkZhl.js";import"./index-CGtuAssr.js";import"./index-BF9eciPM.js";import"./index-Do1t6yvi.js";import"./useEventCallback-DoNQJm52.js";import"./SkeletonBar-DtVWZo4V.js";import"./LoadingCell-tQGaf6Fy.js";import"./ColumnConfigDialog-CAYn7V1z.js";import"./DraggableList-D722nH37.js";import"./search-D0znHoB0.js";import"./Input-uW-V73Ym.js";import"./useControlled-CCMODMjy.js";import"./isEqual-B3eAqf2z.js";import"./isObject-WM2S0FIl.js";import"./Button-CMlQCxNr.js";import"./ActionButton-CzlEqbU-.js";import"./Checkbox-DoYSW_5U.js";import"./useValueChanged-CsD6JbCM.js";import"./CollapsiblePanel-nnSQYfou.js";import"./MultiColumnSortDialog-CN8uVtgE.js";import"./MenuTrigger-DIP-YTxW.js";import"./CompositeItem-hxBAdSix.js";import"./ToolbarRootContext-BPdZZUMs.js";import"./getDisabledMountTransitionStyles-CKX8M7fA.js";import"./getPseudoElementBounds-mxfkqN-r.js";import"./chevron-down-DWn-RMzw.js";import"./index-C4lWqJjv.js";import"./error-B2aj7L5W.js";import"./BaseCbacBanner-DhKW-D1J.js";import"./makeExternalStore-Bo_8jKeh.js";import"./Tooltip-DaUXTYBe.js";import"./PopoverPopup-lz77nYOE.js";import"./toNumber-B6i1rSxO.js";import"./useOsdkClient-DcUrkyFT.js";import"./tick-BblDtOqU.js";import"./DropdownField-DhpZ0Ims.js";import"./withOsdkMetrics-C1N_Pny7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
