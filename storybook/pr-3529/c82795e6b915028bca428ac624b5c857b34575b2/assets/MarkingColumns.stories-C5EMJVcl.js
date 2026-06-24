import{f as n,j as t}from"./iframe-CKEep6kN.js";import{O as p}from"./object-table-Br8L76qR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBSwCv04.js";import"./Table-C7dfLR65.js";import"./index-B51uXe7x.js";import"./Dialog-Cv3CaHwc.js";import"./cross-3R2eZov2.js";import"./svgIconContainer-6a9_FdWG.js";import"./useBaseUiId-Cf3XkTD9.js";import"./InternalBackdrop-DGdNg4Uy.js";import"./composite-CdSFk3FS.js";import"./index-GxpKL1PF.js";import"./index-B9Cc25dO.js";import"./index-CKBPcDOl.js";import"./useEventCallback-CRzWNaW8.js";import"./SkeletonBar-QaOXR0kb.js";import"./LoadingCell-jUuIWt22.js";import"./ColumnConfigDialog-M2xK5Y53.js";import"./DraggableList-C2KOb13_.js";import"./Input-CYczkjTf.js";import"./useControlled-HMyB8Avt.js";import"./Button-QSe25YxR.js";import"./small-cross-DmHjlk1H.js";import"./ActionButton-BhEXK3G6.js";import"./Checkbox-By218_wd.js";import"./minus-BpmfRI-2.js";import"./useValueChanged-CIGiR-iB.js";import"./caret-down-D7-fgfmX.js";import"./CollapsiblePanel-DPu_SuBE.js";import"./MultiColumnSortDialog-zS2TglqN.js";import"./MenuTrigger-CO0uQXTS.js";import"./CompositeItem-37z4RgR6.js";import"./ToolbarRootContext-zRgPe1p-.js";import"./getDisabledMountTransitionStyles-CL_k4wk7.js";import"./getPseudoElementBounds-KV0ec2s_.js";import"./chevron-down-RO8A3GUE.js";import"./index-aOzPFy2G.js";import"./error-C0JEDzZM.js";import"./BaseCbacBanner-5p4LGMIR.js";import"./makeExternalStore-kgfv4vOn.js";import"./Tooltip-Af-0ialX.js";import"./PopoverPopup-BDJ0YuZM.js";import"./toNumber-CWPQ2KPu.js";import"./useOsdkClient-k2u-xLQU.js";import"./DropdownField-Mr6jSy8y.js";import"./withOsdkMetrics-ow7ebyRe.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
