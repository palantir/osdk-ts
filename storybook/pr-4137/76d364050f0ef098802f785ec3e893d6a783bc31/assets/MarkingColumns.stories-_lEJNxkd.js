import{f as p,j as e}from"./iframe-D8wUjP5Q.js";import{O as i}from"./object-table-DSVS_rtH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C60jAzLY.js";import"./Table-CPajttPC.js";import"./index-BIu9Kojc.js";import"./Dialog-BBNCka6x.js";import"./cross-uw8rTCsg.js";import"./svgIconContainer-DfD-bPJ9.js";import"./useBaseUiId-BUaCAPTV.js";import"./InternalBackdrop-DVaKSQ1p.js";import"./composite-C2EdyOaO.js";import"./index-Urfc-aXa.js";import"./index-9bYJqJha.js";import"./index-ce0ZDUPy.js";import"./useEventCallback-dtUX6p5h.js";import"./SkeletonBar-B6gmAwPT.js";import"./LoadingCell-BrI3KBYK.js";import"./ColumnConfigDialog-Qngo8wHu.js";import"./DraggableList-D_AfdPMT.js";import"./search-CqoqcUsr.js";import"./Input-DqsKhBeK.js";import"./useControlled-DRmCkPiT.js";import"./Button-Db1yV2vy.js";import"./small-cross-DDqBCwa4.js";import"./ActionButton-DjdPFFrW.js";import"./Checkbox-BpgF2RLN.js";import"./useValueChanged-D4VH-6l-.js";import"./CollapsiblePanel-DLikBfTi.js";import"./MultiColumnSortDialog-CWrCEuuh.js";import"./MenuTrigger-C2hcdVp2.js";import"./CompositeItem-Df57X5b8.js";import"./ToolbarRootContext-Cng6yUXD.js";import"./getDisabledMountTransitionStyles-BmFHpdBq.js";import"./getPseudoElementBounds-DWEBDegK.js";import"./chevron-down-BCcrHoHV.js";import"./index-BopS7lH3.js";import"./error-CtMjuQbV.js";import"./BaseCbacBanner-CF1k4-_h.js";import"./makeExternalStore-CO9Wus6n.js";import"./Tooltip-FI1a-GTF.js";import"./PopoverPopup-D-3JSrTB.js";import"./debounce-CY5bsJow.js";import"./useOsdkClient-x6ND1sZF.js";import"./tick-BvcCbX7h.js";import"./DropdownField-r2EybeYn.js";import"./isEqual-DTRWaw1c.js";import"./withOsdkMetrics-cJOGTvbe.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
