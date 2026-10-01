import{f as p,j as e}from"./iframe-CxgAHdD_.js";import{O as i}from"./object-table-C7ixhBuT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DzzfBRd8.js";import"./Table-BmWVIdNB.js";import"./index-B6MbbFlT.js";import"./Dialog-Bf6796fg.js";import"./cross-EITDvaH2.js";import"./svgIconContainer-DjIuQsyB.js";import"./useBaseUiId-DFqoi1rW.js";import"./InternalBackdrop-Crloy16K.js";import"./composite-BPWDb3yK.js";import"./index-JYYI4S_c.js";import"./index-C5Y_pAhG.js";import"./index-D-vA12FC.js";import"./useEventCallback-sGjAmQeH.js";import"./SkeletonBar-MqJ57wAm.js";import"./LoadingCell-DmY90DU0.js";import"./ColumnConfigDialog-Bprdm90O.js";import"./DraggableList-fZ5NLtJS.js";import"./search-DdlCwk58.js";import"./Input-DwYZqNpM.js";import"./useControlled-UHTW7SDW.js";import"./Button-CKsUHdvx.js";import"./small-cross-B2gJHFCh.js";import"./ActionButton-Dckwg9He.js";import"./Checkbox-CfELijEt.js";import"./useValueChanged-BU8URL3f.js";import"./CollapsiblePanel-Dovlacux.js";import"./MultiColumnSortDialog-BIUGZ0oe.js";import"./MenuTrigger-DNZYutWE.js";import"./CompositeItem-rluq41vP.js";import"./ToolbarRootContext-CWhOmDUt.js";import"./getDisabledMountTransitionStyles-dFS3a40R.js";import"./getPseudoElementBounds-X4FvtDz7.js";import"./chevron-down-BzYJ5JTr.js";import"./index-8jFysFom.js";import"./error-BEe-jKvu.js";import"./BaseCbacBanner-DPhkvM0N.js";import"./makeExternalStore-BX4690TY.js";import"./Tooltip-Dr79PoMC.js";import"./PopoverPopup-0jo72wW7.js";import"./debounce-BfZR2tut.js";import"./useOsdkClient-ByyBiwZ3.js";import"./tick-DFLiPhFT.js";import"./DropdownField-DQTuRx4r.js";import"./isEqual-DErxsFmS.js";import"./withOsdkMetrics-CAH8aQvL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
