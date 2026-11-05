import{f as p,j as e}from"./iframe-vYbyM6ZV.js";import{O as i}from"./object-table-CTxoAf9I.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-tlI1dOrD.js";import"./Table-9WAhGT43.js";import"./index-MNGJ9mHV.js";import"./Dialog-44SJ57MG.js";import"./cross-BEbCovKj.js";import"./svgIconContainer-DfARiMaj.js";import"./useBaseUiId-ByptStcX.js";import"./InternalBackdrop-DSD4DMxI.js";import"./composite-DaPRapKm.js";import"./index-D1tTu4S3.js";import"./index-CFPLyZ8s.js";import"./index-BnFHYNSY.js";import"./useEventCallback-BR6mcw5k.js";import"./SkeletonBar-BL8RDJ3t.js";import"./LoadingCell-BUvusmRL.js";import"./ColumnConfigDialog-CnrWIBhI.js";import"./DraggableList-CX-rHDv_.js";import"./search-Ci6nyrFb.js";import"./Input-B1kKyDDu.js";import"./useControlled-D5IPizVc.js";import"./Button-CkPI_2po.js";import"./small-cross-DI81dXVA.js";import"./ActionButton-DcwkvYtY.js";import"./Checkbox-BD1dSUeS.js";import"./useValueChanged-DKWqaoyN.js";import"./CollapsiblePanel-CocTkMtk.js";import"./MultiColumnSortDialog-B5nLuSPi.js";import"./MenuTrigger-B08jdsY5.js";import"./CompositeItem-D-60Q45b.js";import"./ToolbarRootContext-0aJ-Z7Lw.js";import"./getDisabledMountTransitionStyles-C65N2SkC.js";import"./getPseudoElementBounds-9yb0vIH6.js";import"./chevron-down-CCDvggT2.js";import"./index-BdDLYcYB.js";import"./error-bzzwZ2XW.js";import"./BaseCbacBanner-BXag0evl.js";import"./makeExternalStore-CEiL8mSF.js";import"./Tooltip-D32D5mnM.js";import"./PopoverPopup-SuAtAnXX.js";import"./debounce-ZlEARpZP.js";import"./useOsdkClient-B3gw6ZH8.js";import"./tick-BpFV42eT.js";import"./DropdownField-CEiBQEPL.js";import"./isEqual-6L5CvVx3.js";import"./withOsdkMetrics-BX5YNskQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
