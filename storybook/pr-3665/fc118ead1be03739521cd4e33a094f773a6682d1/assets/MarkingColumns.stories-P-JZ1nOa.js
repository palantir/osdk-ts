import{f as n,j as t}from"./iframe-Dlc4Y7l2.js";import{O as p}from"./object-table-BNtOCxqE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-uHTpd2SN.js";import"./Table-ZsL5mT4O.js";import"./index-CZb7s7DJ.js";import"./Dialog-CpX8GiTF.js";import"./cross-Y257G4Zz.js";import"./svgIconContainer-MMCfVynN.js";import"./useBaseUiId-Bqq2iQuH.js";import"./InternalBackdrop-CLU3BUo6.js";import"./composite-D-qbH-OC.js";import"./index-BlukRXQK.js";import"./index-CgbPnQ_X.js";import"./index-C0jmzovy.js";import"./useEventCallback-E8udmNyR.js";import"./SkeletonBar-DnjtAHl2.js";import"./LoadingCell-DeoD5XqM.js";import"./ColumnConfigDialog-BuFIxSNG.js";import"./DraggableList-CWHHoS6z.js";import"./search-QE3CE0Tz.js";import"./Input-S_id-E4x.js";import"./useControlled-DmSTmLMx.js";import"./Button-DygHWmXM.js";import"./small-cross-n2RqMY5j.js";import"./ActionButton-Bq3Z3iy3.js";import"./Checkbox-BLjTeF9X.js";import"./useValueChanged-Bgj3wcsH.js";import"./CollapsiblePanel-CE6rW_wg.js";import"./MultiColumnSortDialog-bX61WxND.js";import"./MenuTrigger-LT93qDjg.js";import"./CompositeItem-CcQUowfR.js";import"./ToolbarRootContext-BSN7TU8_.js";import"./getDisabledMountTransitionStyles-BqdSsHIW.js";import"./getPseudoElementBounds-BUyW-N5V.js";import"./chevron-down-O5ou2q9f.js";import"./index-Djal1eO8.js";import"./error-BKw89Z36.js";import"./BaseCbacBanner-DB3EJxfT.js";import"./makeExternalStore-C8atPSYy.js";import"./Tooltip-BMX0J5o3.js";import"./PopoverPopup-DqnaPKum.js";import"./toNumber-BvsdTZJS.js";import"./useOsdkClient-CyCyLp6I.js";import"./tick-CYCDDCZa.js";import"./DropdownField-DVnPWa-u.js";import"./withOsdkMetrics-C_AJad1o.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
