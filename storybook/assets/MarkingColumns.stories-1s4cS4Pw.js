import{f as n,j as t}from"./iframe-CWUGZUf-.js";import{O as p}from"./object-table-tECkYFeZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DPiZGhTq.js";import"./index-C_lPUxQk.js";import"./Dialog-HE8MScm-.js";import"./cross-D3cic8ur.js";import"./svgIconContainer-BVl7iIFx.js";import"./useBaseUiId-rQsTKa8n.js";import"./InternalBackdrop-cB--nlkL.js";import"./composite-DcPHzi1h.js";import"./index-CtVEBM7t.js";import"./index-B-UXWbow.js";import"./index-DxFYHr3P.js";import"./useEventCallback-DWZwpR1_.js";import"./SkeletonBar-BJmuTneL.js";import"./LoadingCell-ICsTVPu8.js";import"./ColumnConfigDialog-Dw3wfbxb.js";import"./DraggableList-oftxM9Y4.js";import"./search-C9SH_QQG.js";import"./Input-DYPJq1YJ.js";import"./useControlled-BK_JVOej.js";import"./Button-CfMcT41P.js";import"./small-cross-DSKoNLHw.js";import"./ActionButton-R--2eAYv.js";import"./Checkbox-BgCKkZEq.js";import"./useValueChanged-DneB0amX.js";import"./CollapsiblePanel-D6AN7hTs.js";import"./MultiColumnSortDialog-D7bwbWx-.js";import"./MenuTrigger-DwnMCmfb.js";import"./CompositeItem-BJx-fZxp.js";import"./ToolbarRootContext-BpsY1BVI.js";import"./getDisabledMountTransitionStyles-BHbzk6vW.js";import"./getPseudoElementBounds-CEK_WQCp.js";import"./chevron-down-KWweqKS6.js";import"./index-Fa5PUE1e.js";import"./error-CQ2hgZnJ.js";import"./BaseCbacBanner-MzR5itUd.js";import"./makeExternalStore-wd6o7Thy.js";import"./Tooltip-YubE5DkR.js";import"./PopoverPopup-CGzqcLVA.js";import"./toNumber-Dc5bG2MO.js";import"./useOsdkClient-DYpUSblW.js";import"./tick-CRydnjq8.js";import"./DropdownField-D2-CPQa5.js";import"./withOsdkMetrics-CdfjuVxc.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
