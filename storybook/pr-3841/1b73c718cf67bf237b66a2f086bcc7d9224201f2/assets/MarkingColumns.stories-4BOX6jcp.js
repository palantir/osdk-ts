import{f as p,j as e}from"./iframe-D7UfG5lN.js";import{O as i}from"./object-table-eNKoCF02.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fsR8YlZl.js";import"./Table-CsU_D9jD.js";import"./index-CX_4Y7_E.js";import"./Dialog-DSMt8zro.js";import"./cross-BqS1fcFn.js";import"./svgIconContainer-DJd8wnEJ.js";import"./useBaseUiId-DO-f1Z6D.js";import"./InternalBackdrop-BIiS9BIy.js";import"./composite-CgMpynF4.js";import"./index-lBcmGDx7.js";import"./index-F7_7yuPT.js";import"./index-Bvzrvbs2.js";import"./useEventCallback-qxrAFbQA.js";import"./SkeletonBar-B31eMzse.js";import"./LoadingCell-DfcZnJS5.js";import"./ColumnConfigDialog-W0ouTFm6.js";import"./DraggableList-B9ySW3pf.js";import"./search-DtcC4DIl.js";import"./Input-CWcjnHAg.js";import"./useControlled-9hlnEbGI.js";import"./Button-Bwe_2Hp9.js";import"./small-cross-ClVjQsKL.js";import"./ActionButton-bYa-rsQ8.js";import"./Checkbox-DjxkizG9.js";import"./useValueChanged-D2v-_P-u.js";import"./CollapsiblePanel-CVdAsYYQ.js";import"./MultiColumnSortDialog-7qmaHD4E.js";import"./MenuTrigger-CbkBKjZX.js";import"./CompositeItem-fbZDtKEs.js";import"./ToolbarRootContext-49Q9r-mz.js";import"./getDisabledMountTransitionStyles-B0aARxvK.js";import"./getPseudoElementBounds-COopDBiV.js";import"./chevron-down-6NKtD6R3.js";import"./index-C29X8ucR.js";import"./error-CNylSIIz.js";import"./BaseCbacBanner-DbAWaE4h.js";import"./makeExternalStore-CCIQpKDE.js";import"./Tooltip-Ab7jqY7P.js";import"./PopoverPopup-DMAHYwOJ.js";import"./debounce-DZ3i5AHh.js";import"./useOsdkClient-CzIUie5K.js";import"./tick-ZztQqfup.js";import"./DropdownField-D-knyklq.js";import"./isEqual-Cj0yvF_6.js";import"./withOsdkMetrics-C0ALIoPR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
