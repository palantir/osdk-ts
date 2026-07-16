import{f as n,j as t}from"./iframe-DjQMMxLx.js";import{O as p}from"./object-table-DUgIainw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D9gz9dP2.js";import"./Table-BkuG0VkM.js";import"./index-BQktNRpG.js";import"./Dialog-z4RrYaCt.js";import"./cross-5foZzpQT.js";import"./svgIconContainer-CbzxULm7.js";import"./useBaseUiId-DV8MiEHP.js";import"./InternalBackdrop-C9KcoWa0.js";import"./composite-C5S9u2C0.js";import"./index-ALu0R69I.js";import"./index-BG4nrt80.js";import"./index-EFcmNpTF.js";import"./useEventCallback-Drdmlcim.js";import"./SkeletonBar-CGRDkd9v.js";import"./LoadingCell-swjpYlNO.js";import"./ColumnConfigDialog-CiABG_Ud.js";import"./DraggableList-BlEhOX02.js";import"./search-Bi__Xh0V.js";import"./Input-tHO_0mDU.js";import"./useControlled-BDZX5EOW.js";import"./Button-BTmvZlhP.js";import"./small-cross-FBQ1JrA6.js";import"./ActionButton-C_PfwCCe.js";import"./Checkbox-C_5U9Io6.js";import"./useValueChanged-89MMWahA.js";import"./CollapsiblePanel-CpT5okR3.js";import"./MultiColumnSortDialog-CqktysIc.js";import"./MenuTrigger-GFLsYYHT.js";import"./CompositeItem-BHy9Y5ew.js";import"./ToolbarRootContext-DNPy_MLL.js";import"./getDisabledMountTransitionStyles-CNpzdjsj.js";import"./getPseudoElementBounds-Dr_GhPRN.js";import"./chevron-down-BV8W7pzT.js";import"./index-Cvgyb1rs.js";import"./error-DjBJ5FPo.js";import"./BaseCbacBanner-CsBUohxp.js";import"./makeExternalStore-T8o28ggm.js";import"./Tooltip-BBVQxka_.js";import"./PopoverPopup-_FAePhJQ.js";import"./toNumber-D1bpn60s.js";import"./useOsdkClient-CtATvy04.js";import"./tick-Cjjv8cPo.js";import"./DropdownField-jUgYJn_u.js";import"./withOsdkMetrics-BEgzEpnF.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
