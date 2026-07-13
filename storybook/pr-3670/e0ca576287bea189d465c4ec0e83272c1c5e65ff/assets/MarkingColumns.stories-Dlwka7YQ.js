import{f as n,j as t}from"./iframe-BX2djs1n.js";import{O as p}from"./object-table-D9E48Bl7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-hVm1bQeY.js";import"./Table-Di1QA_LY.js";import"./index-B9jmPLST.js";import"./Dialog-Cu8Q7yUP.js";import"./cross-CW7i9eUS.js";import"./svgIconContainer-DQabYsmJ.js";import"./useBaseUiId-BWPkie-N.js";import"./InternalBackdrop-CClJArh8.js";import"./composite-DyJ2axhs.js";import"./index-Veb86PcG.js";import"./index-BjGEWd6s.js";import"./index-DK3OLPU0.js";import"./useEventCallback-Br_DPj0e.js";import"./SkeletonBar-CCTQ8t8m.js";import"./LoadingCell-BZzn-Lhe.js";import"./ColumnConfigDialog-CD6IjvD3.js";import"./DraggableList-DxAhuj6U.js";import"./search-XN3WBCJt.js";import"./Input-5JT_Fa9T.js";import"./useControlled-BSC0C-xX.js";import"./Button-CHDLG2_C.js";import"./small-cross-4WH95PZm.js";import"./ActionButton-CFjW8YMs.js";import"./Checkbox-BrI5HDqK.js";import"./useValueChanged-cpr9LWfI.js";import"./CollapsiblePanel-CgUW_La_.js";import"./MultiColumnSortDialog-CcyLyp4K.js";import"./MenuTrigger-B1ibprGJ.js";import"./CompositeItem-DgYN0Pe2.js";import"./ToolbarRootContext-ntjKxxJl.js";import"./getDisabledMountTransitionStyles-CdiiF55E.js";import"./getPseudoElementBounds-4AftQeRM.js";import"./chevron-down-B5T3s_bk.js";import"./index-B-r10tKF.js";import"./error-A3g6IGlp.js";import"./BaseCbacBanner-CQXz5kun.js";import"./makeExternalStore-C-3siswC.js";import"./Tooltip-Cd8ot6bh.js";import"./PopoverPopup-NOBKhAHC.js";import"./toNumber-BVi18079.js";import"./useOsdkClient-Dok-Kz_s.js";import"./tick-DKrL_lYR.js";import"./DropdownField-po0UMaym.js";import"./withOsdkMetrics-DLJus_Y-.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
