import{f as p,j as e}from"./iframe-CBLGayoe.js";import{O as i}from"./object-table-Dfnb9q2S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-iqQbXwPR.js";import"./Table-3tUBpcgb.js";import"./index-WWQs816-.js";import"./Dialog-DDIWOZ7A.js";import"./cross-BsTZCMZo.js";import"./svgIconContainer-C6h86pFp.js";import"./useBaseUiId-1t0yXeWR.js";import"./InternalBackdrop-D-1bVe6k.js";import"./composite-B0OuyU4e.js";import"./index-DRnkv5ky.js";import"./index-cNWLnacK.js";import"./index-CJYhDRX8.js";import"./useEventCallback-Vi0Pn5Sv.js";import"./SkeletonBar-BnJ1P5Dc.js";import"./LoadingCell-joRgzu6e.js";import"./ColumnConfigDialog-DGG2zCSJ.js";import"./DraggableList-YSyn2lX_.js";import"./search-fj4r3aII.js";import"./Input-B3gcQSCO.js";import"./useControlled-aG0yjyc1.js";import"./Button-CjUTiVzv.js";import"./small-cross-1A3qDgIz.js";import"./ActionButton-k24uyueG.js";import"./Checkbox-Bl8YlgaC.js";import"./useValueChanged-DUE2Yivj.js";import"./CollapsiblePanel-NhOksXv9.js";import"./MultiColumnSortDialog-C3XrF8TS.js";import"./MenuTrigger-BxU3BSa9.js";import"./CompositeItem-DM2eqzsD.js";import"./ToolbarRootContext-DXoHeFWe.js";import"./getDisabledMountTransitionStyles-DjkeLEx-.js";import"./getPseudoElementBounds-O8sM1SFz.js";import"./chevron-down-fvU8e7Xa.js";import"./index-BlgAqsZh.js";import"./error-pMIF5hcF.js";import"./BaseCbacBanner-CTxjuNnU.js";import"./makeExternalStore-C4cF0z0U.js";import"./Tooltip-D0gzo0UL.js";import"./PopoverPopup-B6LNoEH2.js";import"./debounce-D5ZCw2WL.js";import"./useOsdkClient-C4j--X5m.js";import"./tick-CN0oe-d-.js";import"./DropdownField-BahT1QHv.js";import"./isEqual-BaMniWjI.js";import"./withOsdkMetrics-BgHhPSx8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
