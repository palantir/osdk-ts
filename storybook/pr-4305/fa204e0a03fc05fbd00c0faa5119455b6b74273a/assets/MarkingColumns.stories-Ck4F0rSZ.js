import{f as p,j as e}from"./iframe-Dxf7pqeg.js";import{O as i}from"./object-table-CAmbjs-n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CF9q8wC-.js";import"./Table-Dqkj2dN7.js";import"./index-wDaQCgfa.js";import"./Dialog-C-C7J_C5.js";import"./cross-jA7YlUXs.js";import"./svgIconContainer-DeyZ4zWj.js";import"./useBaseUiId-DVv5YeQ_.js";import"./InternalBackdrop-0R1WE3fv.js";import"./composite-DX7eZJ2_.js";import"./index-6J7TyXcf.js";import"./index-BoUI8uiT.js";import"./index-BwEpBM25.js";import"./useEventCallback-B4KD4d9L.js";import"./SkeletonBar-CbuQfCLG.js";import"./LoadingCell-BumJxikK.js";import"./ColumnConfigDialog-CpetANnK.js";import"./DraggableList-DwJkQy_K.js";import"./search-n-Z5MtR9.js";import"./Input-B-AK0ISA.js";import"./useControlled-COWGSBWf.js";import"./Button-C2uuxQ9H.js";import"./small-cross-DYWSmTGJ.js";import"./ActionButton-BDiX3ANK.js";import"./Checkbox-CugdzikF.js";import"./useValueChanged-hug1LV6U.js";import"./CollapsiblePanel-C66-rvaM.js";import"./MultiColumnSortDialog-CC2PzkiA.js";import"./MenuTrigger-O60ZG2Mr.js";import"./CompositeItem-DXqXcqtg.js";import"./ToolbarRootContext-DwNvvDcu.js";import"./getDisabledMountTransitionStyles-BObfekIg.js";import"./getPseudoElementBounds-D9abS4hX.js";import"./chevron-down-CeBUa0jW.js";import"./index-COpT5bPe.js";import"./error-LTA79L0B.js";import"./BaseCbacBanner-DbDDCNA_.js";import"./makeExternalStore-B474c-YK.js";import"./Tooltip-BjgMSx3f.js";import"./PopoverPopup-BKxQctdQ.js";import"./debounce-CKRCdOlE.js";import"./useOsdkClient-BclyzzCm.js";import"./tick-Cm8FJ6ZM.js";import"./DropdownField-CGNqz11o.js";import"./isEqual-_UBNmDUY.js";import"./withOsdkMetrics-BVzotg80.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
