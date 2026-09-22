import{f as p,j as e}from"./iframe-m0ugFJ_n.js";import{O as i}from"./object-table-DmJiYE4x.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-KeOwj4qj.js";import"./Table-BEcMkdo0.js";import"./index-CrjphzT5.js";import"./Dialog-pTZq51tA.js";import"./cross-BQwE0Wie.js";import"./svgIconContainer-Y7-V7Oui.js";import"./useBaseUiId-DnAq2IXn.js";import"./InternalBackdrop-CRgyIZok.js";import"./composite-CkzXePM6.js";import"./index-FGKMGa8g.js";import"./index-Cv1cYxMy.js";import"./index-CJxlEYMP.js";import"./useEventCallback-Cuom9Pax.js";import"./SkeletonBar-C5qsauJF.js";import"./LoadingCell-RgHR2Fb3.js";import"./ColumnConfigDialog-D-PMs8be.js";import"./DraggableList-QqAiUCMs.js";import"./search-BBD2MUX2.js";import"./Input-BmzIYnaH.js";import"./useControlled-Cbg37gEr.js";import"./Button-BYPOjnzJ.js";import"./small-cross-DLIPGDB9.js";import"./ActionButton-75hIFgs2.js";import"./Checkbox-ISw-vbZ6.js";import"./useValueChanged-CtZddPP0.js";import"./CollapsiblePanel-D7qJlDW0.js";import"./MultiColumnSortDialog-Be6oA0fc.js";import"./MenuTrigger-B-okH4na.js";import"./CompositeItem-DwEHzZa4.js";import"./ToolbarRootContext-DuKgQD9s.js";import"./getDisabledMountTransitionStyles-CQzsyu-N.js";import"./getPseudoElementBounds-B0jU5gJz.js";import"./chevron-down-CRZsF1SF.js";import"./index-BchCr8yn.js";import"./error-C7YpCdj7.js";import"./BaseCbacBanner-BTNPmbKP.js";import"./makeExternalStore-gYyz61fG.js";import"./Tooltip-BRPBf4sJ.js";import"./PopoverPopup-DtCGLRJW.js";import"./debounce-B4kVVAWf.js";import"./useOsdkClient-BOwEJ48t.js";import"./tick-Bn7hFcMc.js";import"./DropdownField-Dv2YzHOX.js";import"./isEqual-DIxe2VxH.js";import"./withOsdkMetrics-B3S-uWw6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
