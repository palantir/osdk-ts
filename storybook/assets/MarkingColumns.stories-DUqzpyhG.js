import{f as p,j as e}from"./iframe-DGSVH7ih.js";import{O as i}from"./object-table-C4VpbQcw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-b1v88Pr-.js";import"./index-CWCW2TNI.js";import"./Dialog-C-Shdnwc.js";import"./cross-CvX0N4CS.js";import"./svgIconContainer-Cr42efgU.js";import"./useBaseUiId-CUzGGztv.js";import"./InternalBackdrop-BiQg34oG.js";import"./composite-CZStrJl6.js";import"./index-DcV7YM_0.js";import"./index-BQRwVVvU.js";import"./index-DLMh8z7x.js";import"./useEventCallback-CR9RHm-1.js";import"./SkeletonBar-Ccy0H5G7.js";import"./LoadingCell-B_-iiokl.js";import"./ColumnConfigDialog-D9yJG8h0.js";import"./DraggableList-dRFSQN3R.js";import"./search-Ms57RDK0.js";import"./Input-BMGPA6kQ.js";import"./useControlled-DIh7B-EX.js";import"./Button-hUhDz_nK.js";import"./small-cross-CgrlmkQc.js";import"./ActionButton-gW-JXC-3.js";import"./Checkbox-DHxcmdc7.js";import"./useValueChanged-B06XAO6O.js";import"./CollapsiblePanel-BNVEM1jZ.js";import"./MultiColumnSortDialog-9T7ss7CS.js";import"./MenuTrigger-z0zhSk9n.js";import"./CompositeItem-ChK2cRHi.js";import"./ToolbarRootContext-Dx_n0qqS.js";import"./getDisabledMountTransitionStyles-DNsTJsOD.js";import"./getPseudoElementBounds-v1o8MRIa.js";import"./chevron-down-Wv7CQLfg.js";import"./index-JXPpIgsw.js";import"./error-B-lFLFVh.js";import"./BaseCbacBanner-BNO6Noip.js";import"./makeExternalStore-DBH296jI.js";import"./Tooltip-BfWuJBag.js";import"./PopoverPopup-CUzAnlgp.js";import"./Select-B9JAKdg8.js";import"./useOsdkClient-BZZNJHHe.js";import"./tick-CTH5_AKz.js";import"./DropdownField-BWt4U9sB.js";import"./useDebouncedCallback-6dMPohFl.js";import"./isEqual-3BX1wwaO.js";import"./_baseIsEqual-CZt1h0DB.js";import"./stableSerialize-hL56Cbf8.js";import"./withOsdkMetrics-69zOARzS.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
