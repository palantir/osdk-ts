import{f as p,j as e}from"./iframe-CjUdfJYr.js";import{O as i}from"./object-table-BsLoarMY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-fppZUlGt.js";import"./Table-CMc_66VF.js";import"./index-D5_XSG7N.js";import"./Dialog-D0lLlvcy.js";import"./cross-C-2XKRLb.js";import"./svgIconContainer-Bv0ouseb.js";import"./useBaseUiId-Cl5BRcl7.js";import"./InternalBackdrop-CB_lryOn.js";import"./composite-D5c9F9UH.js";import"./index-DGq9E2mF.js";import"./index-C7UqLEto.js";import"./index-wrcdIAZc.js";import"./useEventCallback-FFGsql-n.js";import"./SkeletonBar-DkL9MhMD.js";import"./LoadingCell-ensypk3k.js";import"./ColumnConfigDialog-BWqqzG7e.js";import"./DraggableList-CgRnSckD.js";import"./search-S_JNugMy.js";import"./Input--hS-Bx7-.js";import"./useControlled-DdCiVbr2.js";import"./isEqual-B_voQcQE.js";import"./isObject-BlBSfT88.js";import"./Button-DA4t73qH.js";import"./ActionButton-CNOVcJso.js";import"./Checkbox-BAoyXMag.js";import"./useValueChanged-DLsIrkiq.js";import"./CollapsiblePanel-CKTH3Dlz.js";import"./MultiColumnSortDialog-Bka4eeo1.js";import"./MenuTrigger-JKWHb7NT.js";import"./CompositeItem-CPH32fpX.js";import"./ToolbarRootContext-DghAl8DN.js";import"./getDisabledMountTransitionStyles-DxCDNDGH.js";import"./getPseudoElementBounds-BE0Z67VR.js";import"./chevron-down-f283P8c6.js";import"./index-lzGUL1BT.js";import"./error-sJaqfY2O.js";import"./BaseCbacBanner-BfxtPo8k.js";import"./makeExternalStore-D0Z6Qar9.js";import"./Tooltip-gs8ZNnWJ.js";import"./PopoverPopup-BxvUAPET.js";import"./toNumber-D-9WJOW9.js";import"./useOsdkClient-BfDEIV2j.js";import"./tick-BhEgViHf.js";import"./DropdownField-EM_RIB-N.js";import"./withOsdkMetrics-DK9Pjfpl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
