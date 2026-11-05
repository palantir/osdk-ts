import{f as p,j as e}from"./iframe-tTpw548-.js";import{O as i}from"./object-table-BCDZaXaC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BfLQzAkp.js";import"./Table-CQgHASpq.js";import"./index-CfoC8y9T.js";import"./Dialog-CcCJwuwm.js";import"./cross-CLKnrtat.js";import"./svgIconContainer-T3TG2U7K.js";import"./useBaseUiId-CAQFrlAe.js";import"./InternalBackdrop-_xAR7iPe.js";import"./composite-CJkTEPcI.js";import"./index-BP7y8sZT.js";import"./index-D2O-B8gB.js";import"./index-C8camuNF.js";import"./useEventCallback-1ybuVTus.js";import"./SkeletonBar-Ba6ZiQYs.js";import"./LoadingCell-CDMAzX01.js";import"./ColumnConfigDialog-D3qNKgcM.js";import"./DraggableList-mlkL4pGw.js";import"./search-DermPgDt.js";import"./Input-HFN8Ab80.js";import"./useControlled-C7x4-FQ_.js";import"./Button-GJuyUH0v.js";import"./small-cross-DlwKfIY_.js";import"./ActionButton-cg61E8o3.js";import"./Checkbox-utjOGAI8.js";import"./useValueChanged-DAHI-SPm.js";import"./CollapsiblePanel-C5C_WUGb.js";import"./MultiColumnSortDialog-DRlOQfTI.js";import"./MenuTrigger-CwGcycds.js";import"./CompositeItem-CCzTqTt9.js";import"./ToolbarRootContext-CJ6qVhPJ.js";import"./getDisabledMountTransitionStyles-BbmWSW2i.js";import"./getPseudoElementBounds-Bmi-Rz86.js";import"./chevron-down-EEhO5M0S.js";import"./index-LL3h6rZ2.js";import"./error-DVgq5BdO.js";import"./BaseCbacBanner-fq8ZDz2f.js";import"./makeExternalStore-0aQuonQe.js";import"./Tooltip-D0gUYvNC.js";import"./PopoverPopup-C-VSahmb.js";import"./debounce-DfLNQaQZ.js";import"./useOsdkClient-DSnXFag8.js";import"./tick-D3aN5WCZ.js";import"./DropdownField-9NgabMek.js";import"./isEqual-D5EvyUKD.js";import"./withOsdkMetrics-DMDExHtI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
