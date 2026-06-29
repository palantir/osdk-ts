import{f as n,j as t}from"./iframe-Dby7K8X-.js";import{O as p}from"./object-table-Z1suui_6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbMpngWi.js";import"./Table-WVsq04Jf.js";import"./index-CqHAgdon.js";import"./Dialog-wDYI8t0k.js";import"./cross-BGzDdiNr.js";import"./svgIconContainer-mB2sMyBx.js";import"./useBaseUiId-BEmZSLoT.js";import"./InternalBackdrop-BWyN8TlX.js";import"./composite-DtQqu1F7.js";import"./index-2fRHQ96v.js";import"./index-Dl7mMc_z.js";import"./index-C9w6MWHI.js";import"./useEventCallback-DcQ0aiP3.js";import"./SkeletonBar-DJz_Fdc_.js";import"./LoadingCell-DmrZ0FvO.js";import"./ColumnConfigDialog-CEAbblaL.js";import"./DraggableList-D9CWNOi9.js";import"./search-Nog7PiWw.js";import"./Input-fNfkosC1.js";import"./useControlled-CipfzQZw.js";import"./Button-E6BV5PDL.js";import"./small-cross-CjHRcaNv.js";import"./ActionButton-CJCQc4cC.js";import"./Checkbox-D7Tmiqxe.js";import"./minus-BC5YD5Yl.js";import"./tick-CS2J8FRM.js";import"./useValueChanged-PXtHX02I.js";import"./caret-down-CAlARsVu.js";import"./CollapsiblePanel-B1GMcsHC.js";import"./MultiColumnSortDialog-BRMzrbSx.js";import"./MenuTrigger-Cc4wOWA1.js";import"./CompositeItem-C0MPwWG2.js";import"./ToolbarRootContext-Bv8DhEHE.js";import"./getDisabledMountTransitionStyles-Bi9bk7SK.js";import"./getPseudoElementBounds-CUWWN-Xz.js";import"./chevron-down-CNOZ50il.js";import"./index-CIlU0z6B.js";import"./error-B0De8d-K.js";import"./BaseCbacBanner-DIeYtaxg.js";import"./makeExternalStore-CO5qnO7a.js";import"./Tooltip-pOULyMAd.js";import"./PopoverPopup-BYQEhpmp.js";import"./toNumber-DYvwRr7p.js";import"./useOsdkClient-C_qZrc7W.js";import"./DropdownField-cMlLjd_e.js";import"./withOsdkMetrics-D_qlVUfT.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
