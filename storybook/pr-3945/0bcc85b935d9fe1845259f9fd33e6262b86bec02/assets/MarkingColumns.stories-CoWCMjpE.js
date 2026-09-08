import{f as p,j as e}from"./iframe-zJLPhxDK.js";import{O as i}from"./object-table-Cp_r17tu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GdadUrm9.js";import"./Table-D8q83Fop.js";import"./index-vZmbqUi_.js";import"./Dialog-BJTpqgdP.js";import"./cross-CmuzwVFc.js";import"./svgIconContainer-17tBJAuz.js";import"./useBaseUiId-J532w0x8.js";import"./InternalBackdrop-DYym0q9C.js";import"./composite-CNMHWwCZ.js";import"./index-CDChpdVQ.js";import"./index-CPu2nGpB.js";import"./index-CjB3uV7l.js";import"./useEventCallback-CBonnidZ.js";import"./SkeletonBar-BB2sdYKt.js";import"./LoadingCell-BWSietrN.js";import"./ColumnConfigDialog-BMfkiHBt.js";import"./DraggableList-DkEAjvno.js";import"./search-Bw5FPkB2.js";import"./Input-DZwpfTHR.js";import"./useControlled-CczBvYjn.js";import"./Button-DBmBk1R0.js";import"./small-cross-CPIIsUu1.js";import"./ActionButton-DFDnceTv.js";import"./Checkbox-CsH-jZZw.js";import"./useValueChanged-C-tMKNKt.js";import"./CollapsiblePanel-8-MkrIjK.js";import"./MultiColumnSortDialog-D-a7nSC7.js";import"./MenuTrigger-C7PFgrEd.js";import"./CompositeItem-BJ5z2a5g.js";import"./ToolbarRootContext-BZVYMUxs.js";import"./getDisabledMountTransitionStyles-CLhsnKXl.js";import"./getPseudoElementBounds-B6OAxxYX.js";import"./chevron-down-Bpi62_qF.js";import"./index-C3FdRyLS.js";import"./error-CbniACzb.js";import"./BaseCbacBanner-BqucRKS0.js";import"./makeExternalStore-BwWr7KGq.js";import"./Tooltip-DPh4VI-S.js";import"./PopoverPopup-BppR1H6u.js";import"./debounce-mJk9aS5I.js";import"./useOsdkClient-C-E3sQun.js";import"./tick-BImD79hT.js";import"./DropdownField-C-INYeTI.js";import"./isEqual-CkRnhV_Y.js";import"./withOsdkMetrics-Bw_72zWT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
