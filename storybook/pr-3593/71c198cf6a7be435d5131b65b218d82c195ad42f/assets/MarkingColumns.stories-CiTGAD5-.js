import{f as n,j as t}from"./iframe-DQvr3Jav.js";import{O as p}from"./object-table-B9L6alf-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ooBoNhn5.js";import"./Table-D2LWz6vJ.js";import"./index-BRCt6cxp.js";import"./Dialog-Dcyog95-.js";import"./cross-tGtcXHr6.js";import"./svgIconContainer-Ds2UL7bh.js";import"./useBaseUiId-LTESy3J9.js";import"./InternalBackdrop-Dk-UFsOZ.js";import"./composite-Ce57nFUb.js";import"./index-Cte7Z4aK.js";import"./index-Cnz5kJ0H.js";import"./index-DNoWe7V0.js";import"./useEventCallback-D79hwGDr.js";import"./SkeletonBar-x2w2024c.js";import"./LoadingCell-DpgJ6CrN.js";import"./ColumnConfigDialog-D3t4h60p.js";import"./DraggableList-CqrlPTeU.js";import"./search-BYW5nvbF.js";import"./Input-ByClYEaD.js";import"./useControlled-nB7_8tNr.js";import"./Button-68wzuZBE.js";import"./small-cross-DhXa_Rna.js";import"./ActionButton-DIY3pCd_.js";import"./Checkbox-izOG_FO4.js";import"./minus-C_9UKEBH.js";import"./tick-BvMDCgWS.js";import"./useValueChanged-BdCl9dqj.js";import"./caret-down-cOc3SO6v.js";import"./CollapsiblePanel-DSS250YF.js";import"./MultiColumnSortDialog-BdVCnlQJ.js";import"./MenuTrigger-DrYhO2tR.js";import"./CompositeItem-sAparfMV.js";import"./ToolbarRootContext-B3YjyvfT.js";import"./getDisabledMountTransitionStyles-BNJ4rgcA.js";import"./getPseudoElementBounds-D2yTYCyw.js";import"./chevron-down-Hj0rJYvj.js";import"./index-T0HFBwjj.js";import"./error-CEIJFE1k.js";import"./BaseCbacBanner-Cg7nLLQI.js";import"./makeExternalStore-B9TvfVcA.js";import"./Tooltip-COhdFvWD.js";import"./PopoverPopup-CF8Gl_GG.js";import"./toNumber-CwIApCEa.js";import"./useOsdkClient-CshpMI6P.js";import"./DropdownField-CrC7cxgl.js";import"./withOsdkMetrics-iyY5gpTp.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
