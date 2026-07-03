import{f as n,j as t}from"./iframe-B7ygTo9W.js";import{O as p}from"./object-table-DhTLQES4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CDqBt4yR.js";import"./Table-B-i3FtLX.js";import"./index-C5S5PNED.js";import"./Dialog-DxFyJc5q.js";import"./cross-LWZ52ovi.js";import"./svgIconContainer-CISnPs82.js";import"./useBaseUiId-BL8QwdSd.js";import"./InternalBackdrop-CXvccjwu.js";import"./composite-CKpqhrZy.js";import"./index-B3P4AJaW.js";import"./index-CHKj7ln1.js";import"./index-CGQUfxBN.js";import"./useEventCallback-13X3ATDb.js";import"./SkeletonBar-HLY_JWUQ.js";import"./LoadingCell-C6KHvTY3.js";import"./ColumnConfigDialog-BMpBMHI_.js";import"./DraggableList-BG7s-hdz.js";import"./search-rp6d_gvf.js";import"./Input-D14AIbfF.js";import"./useControlled-C8aPrRAZ.js";import"./Button-TKGMPkN8.js";import"./small-cross-VzE_-ZeK.js";import"./ActionButton-ap8XyJgv.js";import"./Checkbox-B10AkcRL.js";import"./minus-CKO-Xbst.js";import"./tick-D1hunxpG.js";import"./useValueChanged-Cw7xgqBp.js";import"./caret-down-C9D9pbar.js";import"./CollapsiblePanel-BZpNyJQy.js";import"./MultiColumnSortDialog-huuyH1AR.js";import"./MenuTrigger-CXEge_bG.js";import"./CompositeItem-CUibmTbJ.js";import"./ToolbarRootContext-BPlJHUij.js";import"./getDisabledMountTransitionStyles-CJM935fo.js";import"./getPseudoElementBounds-C_1oeJGE.js";import"./chevron-down-7Oeft8QW.js";import"./index-BWmqsa15.js";import"./error-TL5g5sOy.js";import"./BaseCbacBanner-rk0_gZJu.js";import"./makeExternalStore-Bv-s2QjN.js";import"./Tooltip-CxaU48aB.js";import"./PopoverPopup-sz6x1zop.js";import"./toNumber-DkQMtI-k.js";import"./useOsdkClient-BFg0b9k7.js";import"./DropdownField-CFDLeMNB.js";import"./withOsdkMetrics-EtNcQe-d.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
