import{f as n,j as t}from"./iframe-I_k9iA2r.js";import{O as p}from"./object-table-BO5LpSBd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Rq9LGVNY.js";import"./Table-CGGaq1yL.js";import"./index-DVhYSATe.js";import"./Dialog-DDV-QP7Q.js";import"./cross-DZj5F5yy.js";import"./svgIconContainer-Bm8IQIgc.js";import"./useBaseUiId-BC0qB70q.js";import"./InternalBackdrop-CjTsJsa0.js";import"./composite-94aKrmzL.js";import"./index-CxDh8uEw.js";import"./index-jfMTX6SL.js";import"./index-CggGHYdO.js";import"./useEventCallback-CDNIpxLZ.js";import"./SkeletonBar-DajOaudb.js";import"./LoadingCell-BtAk9Fq6.js";import"./ColumnConfigDialog-xRFl0W25.js";import"./DraggableList-CC3SePp8.js";import"./search-DQFp49xm.js";import"./Input-CMRXUrbv.js";import"./useControlled-BiiA8gv_.js";import"./Button-CIvcc5OZ.js";import"./small-cross-BmTRR8Kh.js";import"./ActionButton-6Tp_0u_0.js";import"./Checkbox-BxwNVeDN.js";import"./useValueChanged-CMujdLvf.js";import"./CollapsiblePanel-CS-8wMHI.js";import"./MultiColumnSortDialog-CpdcMq4S.js";import"./MenuTrigger-B_rU64b_.js";import"./CompositeItem-C0O-edlN.js";import"./ToolbarRootContext-ClYn3uN4.js";import"./getDisabledMountTransitionStyles-Cir3IUIp.js";import"./getPseudoElementBounds-td3hXWx-.js";import"./chevron-down-CVrr8Nei.js";import"./index-DdeXxzng.js";import"./error-Bsb3fTvs.js";import"./BaseCbacBanner-D8vh4f16.js";import"./makeExternalStore-DfER66Jm.js";import"./Tooltip-ByXRP8i8.js";import"./PopoverPopup-BsbCnWOd.js";import"./toNumber-DqrgHWGN.js";import"./useOsdkClient-Dwbyk6qK.js";import"./tick-BYguMZir.js";import"./DropdownField-Dqahbgj2.js";import"./withOsdkMetrics-CngPNjHz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
