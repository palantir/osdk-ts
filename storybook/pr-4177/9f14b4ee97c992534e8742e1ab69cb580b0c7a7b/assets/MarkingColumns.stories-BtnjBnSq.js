import{f as p,j as e}from"./iframe-DXrbmFQU.js";import{O as i}from"./object-table-CZgdmLOz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BpeD6mmz.js";import"./Table-C_vJuGXT.js";import"./index-CC0lkARs.js";import"./Dialog-BSRL8opj.js";import"./cross-CS_4qYPy.js";import"./svgIconContainer-D3MknpC0.js";import"./useBaseUiId-Bmo8e_yl.js";import"./InternalBackdrop-CZ7SS8XL.js";import"./composite-CtPqGv2Q.js";import"./index-C1FzfM-T.js";import"./index-F1aEIIjQ.js";import"./index-CIJdhEvE.js";import"./useEventCallback-D7stwHp4.js";import"./SkeletonBar-D5AKklLC.js";import"./LoadingCell-BVwkbAMD.js";import"./ColumnConfigDialog-CNe6t6jf.js";import"./DraggableList-D4sOGYVr.js";import"./search-B06mFuBu.js";import"./Input-sDtqAHjV.js";import"./useControlled-B7qMp3Jr.js";import"./Button-CaEsIWhF.js";import"./small-cross-op6IWr8S.js";import"./ActionButton-zcaUPaLa.js";import"./Checkbox-CrDOEg-9.js";import"./useValueChanged-DqKKufXw.js";import"./CollapsiblePanel-BcteEw7K.js";import"./MultiColumnSortDialog-CbkKxFNz.js";import"./MenuTrigger-DLWZFo83.js";import"./CompositeItem-BFe5eqlW.js";import"./ToolbarRootContext-D7OAZc3v.js";import"./getDisabledMountTransitionStyles-C_81mHPe.js";import"./getPseudoElementBounds-BxGouxy3.js";import"./chevron-down-Dt-I4rTn.js";import"./index-Cmhl-M1L.js";import"./error-DTlfxxBy.js";import"./BaseCbacBanner-CQVfVEFg.js";import"./makeExternalStore-CmG1_iz5.js";import"./Tooltip-DqU4cO90.js";import"./PopoverPopup-BkZ0u7Nq.js";import"./debounce-CPG8fLwA.js";import"./useOsdkClient-DVkOG91y.js";import"./tick-BRRV4IxG.js";import"./DropdownField-B-USOmOG.js";import"./isEqual-0AwzXC1p.js";import"./withOsdkMetrics-CrZM7ObA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
