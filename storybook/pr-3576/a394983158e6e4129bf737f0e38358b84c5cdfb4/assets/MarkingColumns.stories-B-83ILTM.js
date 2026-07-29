import{f as n,j as t}from"./iframe-BSIgyMcX.js";import{O as p}from"./object-table-D1IXkGNu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Vwn1zG-c.js";import"./Table-CWkr2e4e.js";import"./index-CYEa7lt6.js";import"./Dialog-2-FUdRtH.js";import"./cross-Bx-M8RXP.js";import"./svgIconContainer-BVFNRB7A.js";import"./useBaseUiId-15TCd7xM.js";import"./InternalBackdrop-BGq07i-q.js";import"./composite-BbSmRPUP.js";import"./index-SMFaBWPk.js";import"./index-_0jYJfLv.js";import"./index-DB7SZIcK.js";import"./useEventCallback-DOqcf7hF.js";import"./SkeletonBar-CQQHBEOC.js";import"./LoadingCell-ByfPc28X.js";import"./ColumnConfigDialog-BN4eiFfy.js";import"./DraggableList-BcK5oCTo.js";import"./Input-DCGchhDf.js";import"./useControlled-BamXX08A.js";import"./Button-Bl63Rk1T.js";import"./small-cross-Caam3Gbi.js";import"./ActionButton-_C0gXFcX.js";import"./Checkbox-BSoNtsC3.js";import"./minus-DmSawA_9.js";import"./useValueChanged-BSUduMHa.js";import"./caret-down-BRWT5yLr.js";import"./CollapsiblePanel-CyYbp_jP.js";import"./MultiColumnSortDialog-CL0Bp9aC.js";import"./MenuTrigger-CsHIqAjh.js";import"./CompositeItem-DwbLLIpd.js";import"./ToolbarRootContext-D361tRwo.js";import"./getDisabledMountTransitionStyles-GIQrdxOg.js";import"./getPseudoElementBounds-C7rNJ_6n.js";import"./chevron-down-C6aLW3mD.js";import"./index-CTmZmhp2.js";import"./error-CgifGU1W.js";import"./BaseCbacBanner-DllHc7sy.js";import"./makeExternalStore-HtN5TSU1.js";import"./Tooltip-npn1mYJ0.js";import"./PopoverPopup-DGZkaTYp.js";import"./toNumber-jkNeOyMg.js";import"./useOsdkClient-DApJDvlg.js";import"./DropdownField-BK3o4v5E.js";import"./withOsdkMetrics-DQZSGBFC.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
