import{f as p,j as e}from"./iframe-CDOSHHrT.js";import{O as i}from"./object-table-yA2uLPHr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C7s0GH2x.js";import"./Table-CzhTEXAF.js";import"./index-B49rYjrW.js";import"./Dialog-CnewdUpg.js";import"./cross-BFylRGnd.js";import"./svgIconContainer-De09oUFB.js";import"./useBaseUiId-DTVz5o-p.js";import"./InternalBackdrop-Cz8GamC4.js";import"./composite-ClRcggKL.js";import"./index-CMiNXGca.js";import"./index-DGmOJSLl.js";import"./useEventCallback-OCPQsthF.js";import"./SkeletonBar-BbruRB1c.js";import"./LoadingCell-CG861Lp6.js";import"./ColumnConfigDialog-BaWSSk7K.js";import"./DraggableList-CddPZ7rk.js";import"./search-CEcnnij_.js";import"./Input-BurDSqz5.js";import"./useControlled-C7Ep-7i8.js";import"./Button-BvdBUf3P.js";import"./small-cross-BhFa-iux.js";import"./ActionButton-C99QTbiy.js";import"./Checkbox-TsyVahlk.js";import"./useValueChanged-DrhV6J-4.js";import"./CollapsiblePanel-D6WRzd0y.js";import"./MultiColumnSortDialog-B526rR5B.js";import"./MenuTrigger-CIQ7JhVC.js";import"./CompositeItem-CaCo0rwH.js";import"./ToolbarRootContext-B8w6xXAv.js";import"./getDisabledMountTransitionStyles-BS4YLUcj.js";import"./getPseudoElementBounds-B_MpIFyK.js";import"./chevron-down-BmuDMVTK.js";import"./index-CpJ8i9_a.js";import"./error-C4hjwR0B.js";import"./BaseCbacBanner-DGLnZVUS.js";import"./makeExternalStore-D4uD5G65.js";import"./Tooltip-C9jpQygb.js";import"./PopoverPopup-SjgoRQ3b.js";import"./debounce-BmMiYGXj.js";import"./useOsdkClient-B9tQWmKk.js";import"./tick-DfF6ja2F.js";import"./DropdownField-fwqkmPCP.js";import"./isEqual-BB4oShAJ.js";import"./withOsdkMetrics-RGxpItz-.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
