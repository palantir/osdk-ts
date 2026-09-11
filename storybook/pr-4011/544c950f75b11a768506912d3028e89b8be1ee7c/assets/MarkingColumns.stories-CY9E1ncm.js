import{f as p,j as e}from"./iframe-CUvi9RCV.js";import{O as i}from"./object-table-D10wKq82.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GqmuGD1I.js";import"./Table-BMWdrlsV.js";import"./index-Z2IvR_t6.js";import"./Dialog-zDUgWSJT.js";import"./cross-BswioSgU.js";import"./svgIconContainer-BiFTkGqE.js";import"./useBaseUiId-D-6poyG0.js";import"./InternalBackdrop-CIMfO5y8.js";import"./composite-BnXsOcTt.js";import"./index-COsMkiIW.js";import"./index-Cn-BGg-w.js";import"./index-B95PX811.js";import"./useEventCallback-CG8tP2N4.js";import"./SkeletonBar-r6LXjWHA.js";import"./LoadingCell-D-T0QMYd.js";import"./ColumnConfigDialog-DwaQQ7uZ.js";import"./DraggableList-CWWzUIUD.js";import"./search-DljzsUQ1.js";import"./Input-gjvR1UgW.js";import"./useControlled-CGiicoDL.js";import"./Button-DN8sAUol.js";import"./small-cross-ojaGdjNx.js";import"./ActionButton-DDSl0ABg.js";import"./Checkbox-DWypi4-C.js";import"./useValueChanged-CVvpPlQH.js";import"./CollapsiblePanel-DqM5CzQ9.js";import"./MultiColumnSortDialog-BXSs3FYu.js";import"./MenuTrigger-TKN9rOm7.js";import"./CompositeItem-BOheTBRU.js";import"./ToolbarRootContext-B6eeQfxM.js";import"./getDisabledMountTransitionStyles-DyOCVWdJ.js";import"./getPseudoElementBounds-Cvp7B3_m.js";import"./chevron-down-DG0ceM1k.js";import"./index-fPjfyI_6.js";import"./error-nPJR1KaJ.js";import"./BaseCbacBanner-DiGXVIg-.js";import"./makeExternalStore-CRTDTaWN.js";import"./Tooltip-_cTW755E.js";import"./PopoverPopup-BbwvRm54.js";import"./debounce-Cv2dODgM.js";import"./useOsdkClient-BgZD9TyH.js";import"./tick-CHlHLJu2.js";import"./DropdownField-B-lq3-Qt.js";import"./isEqual-CsYmmgrt.js";import"./withOsdkMetrics-B0yRqBdO.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
