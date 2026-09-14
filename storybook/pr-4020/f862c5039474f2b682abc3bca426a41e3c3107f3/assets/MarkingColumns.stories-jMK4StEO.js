import{f as p,j as e}from"./iframe-CEbiJF3f.js";import{O as i}from"./object-table-l5DPuuw6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--fKrMWtx.js";import"./Table-QdTH_HbG.js";import"./index-BRgb61-Z.js";import"./Dialog-B7q4XORi.js";import"./cross-Be87dRvq.js";import"./svgIconContainer-CApLlW_3.js";import"./useBaseUiId-BeYV2UYU.js";import"./InternalBackdrop-CWMLQJAd.js";import"./composite-u77iw9-s.js";import"./index-DjCMbuHr.js";import"./index-CW5Q51QX.js";import"./index-CRAw0ImC.js";import"./useEventCallback-B1x1-FvS.js";import"./SkeletonBar-COyoJDUZ.js";import"./LoadingCell-D1do7JHy.js";import"./ColumnConfigDialog-CTF7Yu1b.js";import"./DraggableList-DBwRCP6S.js";import"./search-0rzEE67s.js";import"./Input-DqoIy3Li.js";import"./useControlled-B3SpxFFa.js";import"./Button-BrIf-_b8.js";import"./small-cross-D4xWb1jq.js";import"./ActionButton-CQIzGqaS.js";import"./Checkbox-ClLrXql_.js";import"./useValueChanged-CMcadSWU.js";import"./CollapsiblePanel-DhxijBYj.js";import"./MultiColumnSortDialog-BCMu3SVh.js";import"./MenuTrigger-D_puwtx9.js";import"./CompositeItem-D6m2hJvC.js";import"./ToolbarRootContext-FCi4TTjo.js";import"./getDisabledMountTransitionStyles-C9wPoLZe.js";import"./getPseudoElementBounds-BE7nCALs.js";import"./chevron-down-SWbuBgt1.js";import"./index-DjIJ3azX.js";import"./error-q5QL61EF.js";import"./BaseCbacBanner-5dQqe5p_.js";import"./makeExternalStore-DY8wBZ1L.js";import"./Tooltip-pyeRzdyt.js";import"./PopoverPopup-BYAEm86P.js";import"./debounce-DedZNKWR.js";import"./useOsdkClient-YUQ2ZKSl.js";import"./tick-1Ij9OHtP.js";import"./DropdownField-DbwRCAUl.js";import"./isEqual-Fw1VuUqB.js";import"./withOsdkMetrics-C-j5mTrT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
