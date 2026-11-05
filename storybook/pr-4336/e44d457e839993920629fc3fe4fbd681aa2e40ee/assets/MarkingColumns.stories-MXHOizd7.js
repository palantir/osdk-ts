import{f as p,j as e}from"./iframe-BTvYIEq8.js";import{O as i}from"./object-table-BDs6ZIZB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFYdII7P.js";import"./Table-HrNvjbUR.js";import"./index-Beef_kHp.js";import"./Dialog-CRyYU8oH.js";import"./cross-sKht6Kec.js";import"./svgIconContainer-CDJ2X3CN.js";import"./useBaseUiId-DVwPqKHc.js";import"./InternalBackdrop-BI_MJr4_.js";import"./composite-UnbXp0a2.js";import"./index-BVCWAs35.js";import"./index-CHR8y95E.js";import"./index-CANSaJTu.js";import"./useEventCallback-CwXh44fh.js";import"./SkeletonBar-iK4bBXD5.js";import"./LoadingCell-B-gsgGd4.js";import"./ColumnConfigDialog-2_efwR7t.js";import"./DraggableList-BfQihvC2.js";import"./search-Dy8Cjq17.js";import"./Input-WD0q61A7.js";import"./useControlled-CpfYcIbT.js";import"./Button-EZBekNYG.js";import"./small-cross-CqhWne9-.js";import"./ActionButton-DfZ4bMP2.js";import"./Checkbox-D7sg0_ag.js";import"./useValueChanged-DAMkXmw8.js";import"./CollapsiblePanel-DcdCTuB_.js";import"./MultiColumnSortDialog-D01rTg2B.js";import"./MenuTrigger-ejaNiXN3.js";import"./CompositeItem-nLfGi46c.js";import"./ToolbarRootContext-U5RtpmpZ.js";import"./getDisabledMountTransitionStyles-BbQWw9EP.js";import"./getPseudoElementBounds-BDf86miM.js";import"./chevron-down-Bkejrg-1.js";import"./index-DyutDDDZ.js";import"./error-ByI-eSLJ.js";import"./BaseCbacBanner-QUKWe09r.js";import"./makeExternalStore-B8YeuVYn.js";import"./Tooltip-B1Fhyptq.js";import"./PopoverPopup-CtLtSFsG.js";import"./debounce-C9YzblTl.js";import"./useOsdkClient-Dy5Kdk0b.js";import"./tick-DqlQ5rnC.js";import"./DropdownField-NUB4RBhJ.js";import"./isEqual-B9PMZa9f.js";import"./withOsdkMetrics-BCNSh7gL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
