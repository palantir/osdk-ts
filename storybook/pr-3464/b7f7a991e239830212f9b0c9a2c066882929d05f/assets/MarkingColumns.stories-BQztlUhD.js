import{f as n,j as t}from"./iframe-Bg2tdbhw.js";import{O as p}from"./object-table-DMeAr9IO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJ2h9Z3P.js";import"./Table-DS1NG64h.js";import"./index-DKCNWX5P.js";import"./Dialog-Yun62dDl.js";import"./cross-CSAJ6NGt.js";import"./svgIconContainer-BKy6MW2l.js";import"./useBaseUiId-CmShBS4E.js";import"./InternalBackdrop-C7j63BIo.js";import"./composite-WuBsguEZ.js";import"./index-BqzwnnAx.js";import"./index-BGzQ98DL.js";import"./index-ApiaoFLR.js";import"./useEventCallback-B09psOqr.js";import"./SkeletonBar-BFs_EbHH.js";import"./LoadingCell-gQy7zYPb.js";import"./ColumnConfigDialog-DHFMP1aX.js";import"./DraggableList-B7wBREqh.js";import"./search-D2VSB8NA.js";import"./Input-BJ_M4j-9.js";import"./useControlled-CABvNtdU.js";import"./Button-B-5c89Rn.js";import"./small-cross-3LC1Qq0-.js";import"./ActionButton-rO6xL848.js";import"./Checkbox-CkEKuPGn.js";import"./minus-DiSzlybj.js";import"./tick-Gp7bJI6t.js";import"./useValueChanged-BFdww-yd.js";import"./caret-down-DroK-1s1.js";import"./CollapsiblePanel-Cb1WmNCy.js";import"./MultiColumnSortDialog-DupyQcO4.js";import"./MenuTrigger-JygfyG9G.js";import"./CompositeItem-BOkTSBHI.js";import"./ToolbarRootContext-CjlXcYih.js";import"./getDisabledMountTransitionStyles-CokUKgrd.js";import"./getPseudoElementBounds-jbG1O4CA.js";import"./chevron-down-BsJmxCP1.js";import"./index-D5BHG7ss.js";import"./error-B9bcZORz.js";import"./BaseCbacBanner-CjUVCXAF.js";import"./makeExternalStore-DKBlb9J_.js";import"./Tooltip-DdZm173y.js";import"./PopoverPopup-CiCfzqLE.js";import"./toNumber-BWpEGEDf.js";import"./useOsdkClient-CdktJojs.js";import"./DropdownField-Cck41Ynp.js";import"./withOsdkMetrics-BQEHtTjv.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
