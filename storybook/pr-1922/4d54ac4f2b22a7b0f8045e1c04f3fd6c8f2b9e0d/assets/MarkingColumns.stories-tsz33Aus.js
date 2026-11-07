import{f as p,j as e}from"./iframe-ByxoF4UB.js";import{O as i}from"./object-table-i4_SWQmL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CXMZSjtp.js";import"./Table-DZvz2Swy.js";import"./index-87CISW6C.js";import"./Dialog-sWeXwNNr.js";import"./cross-wBV-Qz69.js";import"./svgIconContainer-C7yUgkWe.js";import"./useBaseUiId-uat7AM1o.js";import"./InternalBackdrop-CzcksTqB.js";import"./composite-wjt4XLHj.js";import"./index-BjYlodOL.js";import"./index-DbpuMeeP.js";import"./index-C70dk2Pf.js";import"./useEventCallback-B_ko9UJi.js";import"./SkeletonBar-CtkMryCw.js";import"./LoadingCell-DUS-9_f_.js";import"./ColumnConfigDialog-B24LGm76.js";import"./DraggableList-BkuIleRX.js";import"./search-Cs7dO1R3.js";import"./Input-DgqlI36T.js";import"./useControlled-Dzpgg9G4.js";import"./Button-GV0a0tCT.js";import"./small-cross-SMAuoYrx.js";import"./ActionButton-DOmmgWg5.js";import"./Checkbox-BwgRj8PA.js";import"./useValueChanged-C7klXfZS.js";import"./CollapsiblePanel-BKL2IXwk.js";import"./MultiColumnSortDialog-CKYKNCyG.js";import"./MenuTrigger-DU7skQGD.js";import"./CompositeItem-CwRzyQgC.js";import"./ToolbarRootContext-Dnh-d6oH.js";import"./getDisabledMountTransitionStyles-Dl9xKsbw.js";import"./getPseudoElementBounds-CQCChVBu.js";import"./chevron-down-j_R9vXIX.js";import"./index-CQ29xKcD.js";import"./error-BsU_wzAp.js";import"./BaseCbacBanner-BRAkof2I.js";import"./makeExternalStore-CDdf-Cz-.js";import"./Tooltip-DpHICHzA.js";import"./isObject-CdQNKQKv.js";import"./debounce-DeIoYJsa.js";import"./useOsdkClient-BdIxFpI6.js";import"./tick-csDNEheu.js";import"./DropdownField-Cz1Kwyi1.js";import"./isEqual-C9uj5OR1.js";import"./_baseIsEqual-BR0JMNW1.js";import"./withOsdkMetrics-A7PvRLF9.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
