import{f as p,j as e}from"./iframe-DywKiRJ4.js";import{O as i}from"./object-table-BPc3eFSX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DnISu9SO.js";import"./Table-TcAaYlP2.js";import"./index-sdvv-Vmx.js";import"./Dialog-Bf55-VY4.js";import"./cross-CQksztLC.js";import"./svgIconContainer-BcOW5YRH.js";import"./useBaseUiId-C48Qv8Zq.js";import"./InternalBackdrop-Cpxyg-Ky.js";import"./composite-ZtNMv5XC.js";import"./index-DPwii3iK.js";import"./index-DqrMsXLY.js";import"./index-dA00YQm8.js";import"./useEventCallback-CppQh8Tw.js";import"./SkeletonBar-IiCmFQe8.js";import"./LoadingCell-CGfJC6P-.js";import"./ColumnConfigDialog-DEjm_EY6.js";import"./DraggableList-BHZ55AyS.js";import"./search-BqXYSkFu.js";import"./Input-C0MsgEOV.js";import"./useControlled-IjJG5oHn.js";import"./isEqual-CMqPJSO6.js";import"./isObject-C5jPAKNO.js";import"./Button-CDqHXNFi.js";import"./ActionButton-DZ3T_Hts.js";import"./Checkbox-C_Hoe2CZ.js";import"./useValueChanged-CzSHuwPy.js";import"./CollapsiblePanel-DvuaVJxN.js";import"./MultiColumnSortDialog-CFSzAgHA.js";import"./MenuTrigger-CSGpp6_f.js";import"./CompositeItem-BHZTQbjb.js";import"./ToolbarRootContext-BdKTbPdV.js";import"./getDisabledMountTransitionStyles-Do5D0uth.js";import"./getPseudoElementBounds-CH2A8lCF.js";import"./chevron-down-DFkNi3fh.js";import"./index-Bi9mx1Ld.js";import"./error-CTO_HqOG.js";import"./BaseCbacBanner-DDIvxm3S.js";import"./makeExternalStore-CVHUFZOf.js";import"./Tooltip-DWQ3NBX-.js";import"./PopoverPopup-kSQR-f1B.js";import"./toNumber-oB5ILiEz.js";import"./useOsdkClient-BGVCYVYl.js";import"./tick-CHvQk3IN.js";import"./DropdownField-fsCjlWHf.js";import"./withOsdkMetrics-mz9t4H8j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
