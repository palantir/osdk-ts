import{f as p,j as e}from"./iframe-CMeM9J6Y.js";import{O as i}from"./object-table-DjwC2agM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BE9t9w6w.js";import"./Table-B4aRPA0o.js";import"./index-DPhtRpPE.js";import"./Dialog-x-7GDQNX.js";import"./cross-BaQL3xgP.js";import"./svgIconContainer-oyAS0UWq.js";import"./useBaseUiId-DI9dP7QZ.js";import"./InternalBackdrop-CpHEPDe1.js";import"./composite-CY3k6TM7.js";import"./index-DTL2R8mN.js";import"./index-CdeTLK2Z.js";import"./index-DG1I6Kuc.js";import"./useEventCallback-BmsWUEZb.js";import"./SkeletonBar-B_4k99nJ.js";import"./LoadingCell-dz77DxK9.js";import"./ColumnConfigDialog-BpoO_LuJ.js";import"./DraggableList-CSVgP4Nh.js";import"./search-BAh8pYQa.js";import"./Input-B3BEXVhr.js";import"./useControlled-BSYDrQ5g.js";import"./Button-D3pZGYFY.js";import"./small-cross-sbaskDMM.js";import"./ActionButton-Bmi_tL1_.js";import"./Checkbox-BO0fGKwh.js";import"./useValueChanged-Rc2T5ip3.js";import"./CollapsiblePanel-Cq_em0cq.js";import"./MultiColumnSortDialog-CeFw10As.js";import"./MenuTrigger-COGf48-Y.js";import"./CompositeItem-Dj-DsIKf.js";import"./ToolbarRootContext-vSWj9GvP.js";import"./getDisabledMountTransitionStyles-DKjONRHa.js";import"./getPseudoElementBounds-BmBcIQWB.js";import"./chevron-down-DMwhZAyE.js";import"./index-Bpq4QA1l.js";import"./error-C1BVHOGO.js";import"./BaseCbacBanner-DWOaA_Qm.js";import"./makeExternalStore-D-x3UNlI.js";import"./Tooltip-AM4FOqG-.js";import"./PopoverPopup-dRUcZtBs.js";import"./toNumber-BbYikte9.js";import"./useOsdkClient-Bi-6TkqA.js";import"./tick-DeCcXAH6.js";import"./DropdownField-An8P0DUV.js";import"./withOsdkMetrics-ro0U0fU-.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
