import{f as p,j as e}from"./iframe-DopY1iFB.js";import{O as i}from"./object-table-DrHRM2Vu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vT8POVDR.js";import"./Table-BtDoN67p.js";import"./index-CCfIWMGJ.js";import"./Dialog-DxxR-Nq8.js";import"./cross-y3ZfqzAA.js";import"./svgIconContainer-DKL3lG_j.js";import"./useBaseUiId-z-VkK_Xn.js";import"./InternalBackdrop-DaE_AKxd.js";import"./composite-BGFtTgn-.js";import"./index-CsUmhPmI.js";import"./index-CI3yqxJd.js";import"./index-C_zMkdHf.js";import"./useEventCallback-D2MDEmYo.js";import"./SkeletonBar-DK89tHws.js";import"./LoadingCell-DVfOKHP2.js";import"./ColumnConfigDialog-B8UtcMyX.js";import"./DraggableList-BJ6dbmeK.js";import"./search-CxfNGXVV.js";import"./Input-DdA-yANI.js";import"./useControlled-ClnCU8CR.js";import"./Button-BegRP6Wf.js";import"./small-cross-B8texXT0.js";import"./ActionButton-BHuru14O.js";import"./Checkbox-Dbl_-bLm.js";import"./useValueChanged-3u49EqeQ.js";import"./CollapsiblePanel-BqNboL-f.js";import"./MultiColumnSortDialog-DwldqtuV.js";import"./MenuTrigger-BuV2I-Gd.js";import"./CompositeItem-D98VU1_Q.js";import"./ToolbarRootContext-CFKLRcpG.js";import"./getDisabledMountTransitionStyles-DGXlslWy.js";import"./getPseudoElementBounds-_OfctKy9.js";import"./chevron-down-Cn7sl9Ua.js";import"./index-BlOFqzc6.js";import"./error-CTe9ttET.js";import"./BaseCbacBanner-bFfRsFJv.js";import"./makeExternalStore-B0UtzOn_.js";import"./Tooltip-qqUuKaYI.js";import"./PopoverPopup-CUxKzeOX.js";import"./debounce-B5Mx60fy.js";import"./useOsdkClient-BB4N8s6G.js";import"./tick-_PIvioO0.js";import"./DropdownField-hIeQcSW8.js";import"./isEqual-BBHg5dQ3.js";import"./withOsdkMetrics-BFGwpRHC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
