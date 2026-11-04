import{f as p,j as e}from"./iframe-CNX9e2vb.js";import{O as i}from"./object-table-BldKdaED.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ZMNA8h9P.js";import"./Table-DDRIQJWd.js";import"./index-BIHn_wHI.js";import"./Dialog-D3BNf1DY.js";import"./cross-CoOqaEol.js";import"./svgIconContainer-nouhoaqF.js";import"./useBaseUiId-DVajJCtq.js";import"./InternalBackdrop-g7diMjlH.js";import"./composite-DPfaHyL7.js";import"./index-DLyOpAuF.js";import"./index-DzwDShI9.js";import"./index-D4wtEvwv.js";import"./useEventCallback-BHcK-HWT.js";import"./SkeletonBar-C4hnXkU8.js";import"./LoadingCell-DljGb_fq.js";import"./ColumnConfigDialog-DUiy6zFv.js";import"./DraggableList-CuUpn6fc.js";import"./search-PqF1ps1R.js";import"./Input-DsowkJey.js";import"./useControlled-CAgAp9qH.js";import"./Button-DqD_xK8o.js";import"./small-cross-BJExYpuG.js";import"./ActionButton-wZGD9rTp.js";import"./Checkbox-C9aBsH-7.js";import"./useValueChanged-DYtO7VQ0.js";import"./CollapsiblePanel-C7abhmgq.js";import"./MultiColumnSortDialog-DjjVtXUH.js";import"./MenuTrigger-C-b4TkP-.js";import"./CompositeItem-WdRO-_hy.js";import"./ToolbarRootContext-tIEjfpOU.js";import"./getDisabledMountTransitionStyles-2kFCtm_x.js";import"./getPseudoElementBounds-FCxgA3hM.js";import"./chevron-down-BjfbDPyK.js";import"./index-CAwx3j0M.js";import"./error-B93ABaLs.js";import"./BaseCbacBanner-CH3dXHtT.js";import"./makeExternalStore-DE_Ve778.js";import"./Tooltip-Dvuw96-K.js";import"./PopoverPopup-BcTNuNdl.js";import"./debounce-CgHfZ2yU.js";import"./useOsdkClient-ANeJgNR0.js";import"./tick-BqwzrLtf.js";import"./DropdownField-BFuGqXSY.js";import"./isEqual-DxCKwYiG.js";import"./withOsdkMetrics-DMNQhU4Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
