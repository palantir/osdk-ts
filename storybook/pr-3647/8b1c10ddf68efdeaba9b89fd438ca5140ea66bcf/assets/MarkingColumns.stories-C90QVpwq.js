import{f as n,j as t}from"./iframe-BMHCHGCV.js";import{O as p}from"./object-table-sWxRB2Zw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BToqMbIM.js";import"./Table-KtxBq4Qt.js";import"./index-BWvdte7B.js";import"./Dialog-MoHCigUA.js";import"./cross-DOL0bGpk.js";import"./svgIconContainer-C9IhYIlY.js";import"./useBaseUiId-Dw6KSEH5.js";import"./InternalBackdrop-Cx2HcW_Y.js";import"./composite-DVGhito1.js";import"./index-NotlhKzd.js";import"./index-sYtRHJSk.js";import"./index-CpAnw4aN.js";import"./useEventCallback-Bhm5VxNk.js";import"./SkeletonBar-RLqGqCiW.js";import"./LoadingCell-CLkTmUtl.js";import"./ColumnConfigDialog-DIpESJ7x.js";import"./DraggableList-BK-msxMa.js";import"./search-BfFyr5yu.js";import"./Input-meCDYtHF.js";import"./useControlled-BRtv8zXv.js";import"./Button-C5QMWSrh.js";import"./small-cross-qkK35VpL.js";import"./ActionButton-ge2lMnJU.js";import"./Checkbox-DDYR0AUo.js";import"./useValueChanged-Dboh9V04.js";import"./CollapsiblePanel-DiU7EMOO.js";import"./MultiColumnSortDialog-C6jWqy7Q.js";import"./MenuTrigger-5I1dcn-m.js";import"./CompositeItem-DNAmy2TP.js";import"./ToolbarRootContext-7nCaEpX8.js";import"./getDisabledMountTransitionStyles-3qZjQRvj.js";import"./getPseudoElementBounds-Ds9hOSsz.js";import"./chevron-down-BdOF-_Ji.js";import"./index-DEoekmkM.js";import"./error-m-zoj5Z7.js";import"./BaseCbacBanner-D9tXUGCK.js";import"./makeExternalStore-DrivM0p_.js";import"./Tooltip-XK9w9b8J.js";import"./PopoverPopup-DHqynsSp.js";import"./toNumber-Dgv9SuYx.js";import"./useOsdkClient-BDYs6Htu.js";import"./tick-0BlKS-Z3.js";import"./DropdownField-BvpOJ8GC.js";import"./withOsdkMetrics-DS7wiXkt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
