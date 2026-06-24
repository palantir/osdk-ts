import{f as n,j as t}from"./iframe-Dt23VS2Z.js";import{O as p}from"./object-table-CsWrb87S.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CDbHLuIJ.js";import"./Table-Gk-h24M2.js";import"./index-DXJEmnjN.js";import"./Dialog-CI62ffPs.js";import"./cross-CcucmV0I.js";import"./svgIconContainer-Dcx_fEGI.js";import"./useBaseUiId-Cw-CwzoJ.js";import"./InternalBackdrop-CNKXwl0N.js";import"./composite-CZm5T3m5.js";import"./index-BJQE82NE.js";import"./index-Diirl9qd.js";import"./index-vMS793UO.js";import"./useEventCallback-DG-rh0jj.js";import"./SkeletonBar-BbwuVn85.js";import"./LoadingCell-Dsj4ARAa.js";import"./ColumnConfigDialog-BfV2E1_d.js";import"./DraggableList-B2HhD_gm.js";import"./Input-B7lTQB0Z.js";import"./useControlled-DOiCnDPS.js";import"./Button-EnTVyLw_.js";import"./small-cross-BcKqhqUD.js";import"./ActionButton-BdqM7lhp.js";import"./Checkbox-CRKeP7XI.js";import"./minus-DS_onhdK.js";import"./useValueChanged-DKtJy5y-.js";import"./caret-down-B7wt9gYi.js";import"./CollapsiblePanel-Cg9_gUic.js";import"./MultiColumnSortDialog-BmB0bmWa.js";import"./MenuTrigger-BXgcS4WH.js";import"./CompositeItem-O_elIjk1.js";import"./ToolbarRootContext-D9DfySWd.js";import"./getDisabledMountTransitionStyles-BMDslz7c.js";import"./getPseudoElementBounds-BBC582qT.js";import"./chevron-down-CVpGfrz_.js";import"./index-RtMEqfR-.js";import"./error-CCtxrEto.js";import"./BaseCbacBanner-D-G7tYQ0.js";import"./makeExternalStore-CU6m38AP.js";import"./Tooltip-Bo-kihMN.js";import"./PopoverPopup-BEc-6R0p.js";import"./toNumber-BzqcUk2R.js";import"./useOsdkClient-N9aw6Qjx.js";import"./DropdownField-CpLV6zZS.js";import"./withOsdkMetrics-BYt--z85.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
