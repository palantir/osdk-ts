import{f as n,j as t}from"./iframe-CYldCnGD.js";import{O as p}from"./object-table-DDSn2UFU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D83jK9dp.js";import"./Table-BNcmDYbm.js";import"./index-Dk842-I6.js";import"./Dialog-Cukr5S6M.js";import"./cross-BSECteXn.js";import"./svgIconContainer-CIQly-CR.js";import"./useBaseUiId-3gcUh3x_.js";import"./InternalBackdrop-CGNn8QCI.js";import"./composite-C8RXtb6D.js";import"./index-oSG7gC6J.js";import"./index-DKy92Rhg.js";import"./index-7jWJhwgw.js";import"./useEventCallback-f5yIvlah.js";import"./SkeletonBar-DHK_ouX1.js";import"./LoadingCell-CQraBTCJ.js";import"./ColumnConfigDialog-CyWy3MMl.js";import"./DraggableList-ixce-GvH.js";import"./search-CTxjB9si.js";import"./Input-B40LOt8Z.js";import"./useControlled-_faCI7Qf.js";import"./Button-CN8pOJ9l.js";import"./small-cross-Bc-bcB4C.js";import"./ActionButton-D5nWBNES.js";import"./Checkbox-CBZGwAK2.js";import"./useValueChanged-C402cjzJ.js";import"./CollapsiblePanel-Dubvbhy2.js";import"./MultiColumnSortDialog-Dm30vEHW.js";import"./MenuTrigger-BAN0tGrY.js";import"./CompositeItem-BCxD5w-u.js";import"./ToolbarRootContext-zgHJbPne.js";import"./getDisabledMountTransitionStyles-BEYowYDh.js";import"./getPseudoElementBounds-3OWmYiM9.js";import"./chevron-down-B4mO7Rnp.js";import"./index-wm6d9Hb7.js";import"./error-ssch54vp.js";import"./BaseCbacBanner-D7Nu5WBL.js";import"./makeExternalStore-vFxxqEzr.js";import"./Tooltip-qFWWzNTU.js";import"./PopoverPopup-DNDyZQ3Z.js";import"./toNumber-Dq5OYsdE.js";import"./useOsdkClient-BSc7a6NV.js";import"./tick-8U5GqDOJ.js";import"./DropdownField-CVzsqnrF.js";import"./withOsdkMetrics-KwpXosWm.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
