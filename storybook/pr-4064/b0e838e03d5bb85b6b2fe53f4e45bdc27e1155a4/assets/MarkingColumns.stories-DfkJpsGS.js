import{f as p,j as e}from"./iframe-VFEBMkmT.js";import{O as i}from"./object-table-C4rKgLpd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-07eHVQFi.js";import"./Table-5csSRIYj.js";import"./index-BNFDG_ll.js";import"./Dialog-BRCNAtd6.js";import"./cross-klKqW7pD.js";import"./svgIconContainer-CrmB8eAh.js";import"./useBaseUiId-vs4tfZGS.js";import"./InternalBackdrop-DhQAR8x3.js";import"./composite-DW9K0ypD.js";import"./index-C-ds3Per.js";import"./index-CHgbm3vu.js";import"./index-Cd122yTi.js";import"./useEventCallback-C41z4BOu.js";import"./SkeletonBar-C37LxB-t.js";import"./LoadingCell-BewF79XS.js";import"./ColumnConfigDialog-RBjKgz_k.js";import"./DraggableList-CU-FQY9q.js";import"./search-VMyVN87B.js";import"./Input-CRGuLcp8.js";import"./useControlled-C_z4AA7y.js";import"./Button-CSWptMiw.js";import"./small-cross-CDtSPCYR.js";import"./ActionButton-BWwL0ZTE.js";import"./Checkbox-CDDYNciR.js";import"./useValueChanged-BqBGjayP.js";import"./CollapsiblePanel-BIXleHAm.js";import"./MultiColumnSortDialog-DbqHEvtj.js";import"./MenuTrigger-CIXtaybW.js";import"./CompositeItem-CC1BkCel.js";import"./ToolbarRootContext-7k7RnlYE.js";import"./getDisabledMountTransitionStyles-CABZJUx0.js";import"./getPseudoElementBounds-DyGmu2aD.js";import"./chevron-down-DVKmbjNv.js";import"./index-npggFz05.js";import"./error-BAVEcOGP.js";import"./BaseCbacBanner-DXXff8Kf.js";import"./makeExternalStore-C0Q3dAYA.js";import"./Tooltip-CkehKfR2.js";import"./PopoverPopup-V-gR9AA8.js";import"./debounce-DG8oBSlI.js";import"./useOsdkClient-Ei_DMZLP.js";import"./tick-DWG5Mpvy.js";import"./DropdownField-DKVPGok9.js";import"./isEqual-CdM50Zo3.js";import"./withOsdkMetrics-BVlvQats.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
