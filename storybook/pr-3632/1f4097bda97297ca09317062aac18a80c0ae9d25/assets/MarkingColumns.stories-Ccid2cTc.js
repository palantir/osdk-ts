import{f as n,j as t}from"./iframe-jF_GefZe.js";import{O as p}from"./object-table-DAFH2_iu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ax3rxsHF.js";import"./Table-CqMbhJVJ.js";import"./index-DitLc0z5.js";import"./Dialog-hOzjJddK.js";import"./cross-VCektVnL.js";import"./svgIconContainer-C0F2aC1p.js";import"./useBaseUiId-DKzOiOT9.js";import"./InternalBackdrop-DBoI3VKc.js";import"./composite-CtM82JIl.js";import"./index-BghPQzz8.js";import"./index-D6U5yBjg.js";import"./index-UpOV_Tp2.js";import"./useEventCallback-DgCPMj53.js";import"./SkeletonBar-FaBS4gsf.js";import"./LoadingCell-txOfY4l-.js";import"./ColumnConfigDialog-9QulIh_E.js";import"./DraggableList-BYbu2Jfl.js";import"./search-B_vtsGCI.js";import"./Input-CmBmi_9h.js";import"./useControlled-DiS2bKo-.js";import"./Button-0Mscwedl.js";import"./small-cross-B4gE9Ich.js";import"./ActionButton-DGp4EQZa.js";import"./Checkbox-Ba-Ng1Px.js";import"./useValueChanged-BDLRv1IB.js";import"./CollapsiblePanel-C6aW43JT.js";import"./MultiColumnSortDialog-CL7_CDoJ.js";import"./MenuTrigger-BMOIlSrU.js";import"./CompositeItem-D9lMUzCF.js";import"./ToolbarRootContext-DldUqbwa.js";import"./getDisabledMountTransitionStyles-BpwvBXbe.js";import"./getPseudoElementBounds-C0PrIbSd.js";import"./chevron-down-8rc7edZ_.js";import"./index-CiE6yYJO.js";import"./error-C-ncpnxT.js";import"./BaseCbacBanner-C96lDbA0.js";import"./makeExternalStore-D5-uy0cS.js";import"./Tooltip-C345dB4n.js";import"./PopoverPopup-DmOQzXm3.js";import"./toNumber-BjdShkvM.js";import"./useOsdkClient-CyIvl52A.js";import"./tick-tUFCtYdB.js";import"./DropdownField-Bg7AaapD.js";import"./withOsdkMetrics-CO8nMfPN.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
