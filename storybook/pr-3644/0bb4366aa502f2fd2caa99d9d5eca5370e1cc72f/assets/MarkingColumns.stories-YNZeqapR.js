import{f as n,j as t}from"./iframe-CcA7-Rjw.js";import{O as p}from"./object-table-B2QOmgbB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nvkubxzv.js";import"./Table-r75jEWKb.js";import"./index-AvY0EKRf.js";import"./Dialog-D7HPgcwA.js";import"./cross-ChHYC8Yw.js";import"./svgIconContainer-DckiNDXi.js";import"./useBaseUiId-BjFl5fKj.js";import"./InternalBackdrop-DshCkAFX.js";import"./composite-2XJp13CO.js";import"./index-vSBXvFMR.js";import"./index-Bp3ioUAC.js";import"./index-CCiRurIZ.js";import"./useEventCallback-DZ6mA2O0.js";import"./SkeletonBar-CHzT_Iji.js";import"./LoadingCell-EFwUP_lW.js";import"./ColumnConfigDialog-4lu5og8R.js";import"./DraggableList-BamXIqem.js";import"./search-poOCX-UW.js";import"./Input-CWdjMBiV.js";import"./useControlled-nd8aPGMS.js";import"./Button-ol1baUYT.js";import"./small-cross-B2lnzQNc.js";import"./ActionButton-BY5P2zLS.js";import"./Checkbox-C3RW5VbA.js";import"./useValueChanged-B0xt8GeX.js";import"./CollapsiblePanel-BA_eVEzB.js";import"./MultiColumnSortDialog-BotF52ei.js";import"./MenuTrigger-BluUjVHp.js";import"./CompositeItem-BPuGHInU.js";import"./ToolbarRootContext-BiU2w5wb.js";import"./getDisabledMountTransitionStyles-B4_jQLCb.js";import"./getPseudoElementBounds-DAvVoR-c.js";import"./chevron-down-hciG8vuR.js";import"./index-Zn-uiKn9.js";import"./error-bsTt9ox-.js";import"./BaseCbacBanner-C_uqeTqS.js";import"./makeExternalStore-CP-_NU5h.js";import"./Tooltip-DpJB35iG.js";import"./PopoverPopup-CH1UX-6w.js";import"./toNumber-Df4Xx_xs.js";import"./useOsdkClient-DUBmAi0z.js";import"./tick-Cy9zFVX_.js";import"./DropdownField-DIBLVux_.js";import"./withOsdkMetrics-CqsRELMI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
