import{f as p,j as e}from"./iframe-D7WyLq_R.js";import{O as i}from"./object-table-jRD1_Lko.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BqfBxCjy.js";import"./Table-BamzqaoI.js";import"./index-HyeIDcrc.js";import"./Dialog-Ccerh4bb.js";import"./cross-uvcs2Wcl.js";import"./svgIconContainer-B4x4BdHn.js";import"./useBaseUiId-CG-SGXYP.js";import"./InternalBackdrop-7rlgucId.js";import"./composite-D_DTOoGQ.js";import"./index-ufR6xdAx.js";import"./index-D2fZUIcR.js";import"./index-eSq-wOtL.js";import"./useEventCallback-BReO6q8q.js";import"./SkeletonBar-Be2VldqA.js";import"./LoadingCell-BsVuTR_T.js";import"./ColumnConfigDialog-Q7laFexQ.js";import"./DraggableList-Cay8cu3c.js";import"./search-s_J2wlUd.js";import"./Input-C4gz0NfF.js";import"./useControlled-Bb8KRWad.js";import"./Button-BE_yPzwR.js";import"./small-cross-B4qCwIBh.js";import"./ActionButton-BuFs1EiV.js";import"./Checkbox-DcJs6uB9.js";import"./useValueChanged-BSHUSrlL.js";import"./CollapsiblePanel-H-RuyrJq.js";import"./MultiColumnSortDialog-4e12ji_e.js";import"./MenuTrigger-Ca94hyEY.js";import"./CompositeItem-ZpmtOb_M.js";import"./ToolbarRootContext-Fnt7cK66.js";import"./getDisabledMountTransitionStyles-DFqI_LNP.js";import"./getPseudoElementBounds-OQu2StyZ.js";import"./chevron-down-CUo9ik68.js";import"./index-CJGKKiqL.js";import"./error-D2VV45CC.js";import"./BaseCbacBanner-D9RQiU4n.js";import"./makeExternalStore-DcukOp_j.js";import"./Tooltip-ColuuQlO.js";import"./isObject-CDlc3nuf.js";import"./debounce-CJeHPCAd.js";import"./useOsdkClient-Ci5CHzsk.js";import"./tick-Dc3ISC5j.js";import"./DropdownField-BcUtsHzO.js";import"./isEqual-Cog-R91C.js";import"./_baseIsEqual-DcLozDln.js";import"./withOsdkMetrics-BvKbLnrg.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
