import{f as n,j as t}from"./iframe-DgOZP_Cm.js";import{O as p}from"./object-table-CRNjvZaS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DjIc4MrC.js";import"./Table-D_6KfXXr.js";import"./index-BERzUTXk.js";import"./Dialog-CUddXQvV.js";import"./cross-DcWlG0ZM.js";import"./svgIconContainer-CuggTSBX.js";import"./useBaseUiId-BPFyUjqK.js";import"./InternalBackdrop-BGYYgaLJ.js";import"./composite-5D8VFPSs.js";import"./index-DvSYRibu.js";import"./index-Bq6paZvN.js";import"./index-CsBEGeAg.js";import"./useEventCallback-Bl2IGqsw.js";import"./SkeletonBar-E_6SFolC.js";import"./LoadingCell--bdbOZbj.js";import"./ColumnConfigDialog-BZx6PoYQ.js";import"./DraggableList-CtFMZdJB.js";import"./search-dZux87H-.js";import"./Input-ChTIrDkZ.js";import"./useControlled-CxK-j9x6.js";import"./Button-4HFyInoI.js";import"./small-cross-DpPsVYem.js";import"./ActionButton-BBcB5F0j.js";import"./Checkbox-CarDZmFj.js";import"./useValueChanged-D6TmlG2j.js";import"./CollapsiblePanel-CBMNDz3h.js";import"./MultiColumnSortDialog-CKCgtQAL.js";import"./MenuTrigger-8wRVo5BJ.js";import"./CompositeItem-CNZwoKOQ.js";import"./ToolbarRootContext-Dux0nsNS.js";import"./getDisabledMountTransitionStyles-Cjk8MlDy.js";import"./getPseudoElementBounds-Dg-Hwu-F.js";import"./chevron-down-Cts10Q8m.js";import"./index-DUN60dp8.js";import"./error-4FTnhPW6.js";import"./BaseCbacBanner-CXjSNB64.js";import"./makeExternalStore-C9IfhK9F.js";import"./Tooltip-DU-0Zhnw.js";import"./PopoverPopup-DxDoUAdK.js";import"./toNumber-nNoTH1nH.js";import"./useOsdkClient-vbmcxXCC.js";import"./tick-C2kvJxbo.js";import"./DropdownField-CHqdqsMq.js";import"./withOsdkMetrics-DuT7zG16.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
