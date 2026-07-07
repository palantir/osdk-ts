import{f as n,j as t}from"./iframe-CuK7zOMI.js";import{O as p}from"./object-table-BLzWJZjN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-P9V_DKNy.js";import"./Table-VF3FothX.js";import"./index-CnBZRbmI.js";import"./Dialog-C1BZYIHA.js";import"./cross-OS5Mk4Tx.js";import"./svgIconContainer-kSKNmQCk.js";import"./useBaseUiId-CXcuh5Mz.js";import"./InternalBackdrop-DGoM1UIh.js";import"./composite-Da-63znj.js";import"./index-DkYI9Dyb.js";import"./index-6dfOaeSG.js";import"./index-KUJAx-SL.js";import"./useEventCallback-Duych5DG.js";import"./SkeletonBar-ClVa462v.js";import"./LoadingCell-Cp65mqLp.js";import"./ColumnConfigDialog-BvIHS7o8.js";import"./DraggableList-D-b12pA0.js";import"./search-BrfJMiza.js";import"./Input-BaS-MecW.js";import"./useControlled-DBgWtr8v.js";import"./Button-DuZQUlnH.js";import"./small-cross-gtKzlEdY.js";import"./ActionButton-CeSTL8s7.js";import"./Checkbox-DTWC6Xy_.js";import"./useValueChanged-BQG6q7HJ.js";import"./CollapsiblePanel-1HNc67EX.js";import"./MultiColumnSortDialog-Bs5JPww7.js";import"./MenuTrigger-CaZJ74_J.js";import"./CompositeItem-D0mCMpid.js";import"./ToolbarRootContext-E8zMlUui.js";import"./getDisabledMountTransitionStyles-46BW6682.js";import"./getPseudoElementBounds-FtYloNUE.js";import"./chevron-down-BQEzPkWb.js";import"./index-TU3WdDzH.js";import"./error-I0gxPKgJ.js";import"./BaseCbacBanner-BGYOYjr3.js";import"./makeExternalStore-Dz28jKub.js";import"./Tooltip-C30OLI6K.js";import"./PopoverPopup-B8vHxKIz.js";import"./toNumber-DqlS6uOX.js";import"./useOsdkClient-ByBrlZIo.js";import"./tick-BycIOQYJ.js";import"./DropdownField-B7GzdHgx.js";import"./withOsdkMetrics-Dd2CKxXY.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
