import{f as p,j as e}from"./iframe-UkB5vgVG.js";import{O as i}from"./object-table--6JN6yLk.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVf8llwS.js";import"./Table-CjCohFn6.js";import"./index-qp1j7wJC.js";import"./Dialog-CZ_x9J9x.js";import"./cross-BdVzNhJI.js";import"./svgIconContainer-DayxyL3r.js";import"./useBaseUiId-Dn0EoDTA.js";import"./InternalBackdrop-C7U9xWxA.js";import"./composite-BGwzEdrp.js";import"./index-Bi4xYXRw.js";import"./index-e4diuhxy.js";import"./index-DfHcWnOV.js";import"./useEventCallback-Ct4SjjN5.js";import"./SkeletonBar-jc8wsvoD.js";import"./LoadingCell-Drwaf3vU.js";import"./ColumnConfigDialog-DICfUWLH.js";import"./DraggableList-DezpGo4i.js";import"./search-CsKKjabz.js";import"./Input-CB29R5Tw.js";import"./useControlled-Clgvd4Wq.js";import"./Button-C-9R3Dge.js";import"./small-cross-BhTFlBDt.js";import"./ActionButton-gCoOaLsR.js";import"./Checkbox-D2_TGGsM.js";import"./useValueChanged-8upR9kV4.js";import"./CollapsiblePanel-OMF1Q75F.js";import"./MultiColumnSortDialog-COAhezi2.js";import"./MenuTrigger-qboTs4ql.js";import"./CompositeItem-UlYd9APp.js";import"./ToolbarRootContext-m-lFbgU6.js";import"./getDisabledMountTransitionStyles-B6fypB_z.js";import"./getPseudoElementBounds-BaPROP5U.js";import"./chevron-down-CKWbFOWn.js";import"./index-CLbtj4dS.js";import"./error-uoew32RU.js";import"./BaseCbacBanner-C9O888Wq.js";import"./makeExternalStore-B3cxenBa.js";import"./Tooltip-BGpYaoin.js";import"./PopoverPopup-CiCjFpg3.js";import"./debounce-OlKnPm4h.js";import"./useOsdkClient-CN5kE_kM.js";import"./tick-Blswzu6W.js";import"./DropdownField-8gcZzb7t.js";import"./isEqual-J8qJ1onM.js";import"./withOsdkMetrics-dDcxjbTR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
