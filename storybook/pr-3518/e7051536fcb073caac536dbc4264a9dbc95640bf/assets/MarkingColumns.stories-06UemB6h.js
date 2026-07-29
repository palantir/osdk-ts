import{f as n,j as t}from"./iframe-Tmq9KCpc.js";import{O as p}from"./object-table-DxW95kv5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLGqi4dC.js";import"./Table-DNleXS7x.js";import"./index-B3-Jf5q4.js";import"./Dialog-BTGYUxcF.js";import"./cross-CyyHn5eQ.js";import"./svgIconContainer-SeCgGy2c.js";import"./useBaseUiId-CDHglk1S.js";import"./InternalBackdrop-DHXyDPGP.js";import"./composite-z6wOCmoj.js";import"./index-B0MERIRr.js";import"./index-DdZtAD9D.js";import"./index-B-0SceBz.js";import"./useEventCallback-B2xheCCA.js";import"./SkeletonBar-D5Y79bQT.js";import"./LoadingCell-C0IV3LmC.js";import"./ColumnConfigDialog-Dx2dqRbl.js";import"./DraggableList-tiEMfeAq.js";import"./Input-CJHQs4S-.js";import"./useControlled-D-cUaZGk.js";import"./Button-Can0oDI1.js";import"./small-cross-DuQBNiUS.js";import"./ActionButton-zom743tW.js";import"./Checkbox-geBsgGrq.js";import"./minus-mJpqaYf6.js";import"./useValueChanged-4_kIh2Qy.js";import"./caret-down-Bj1kxY5N.js";import"./CollapsiblePanel-ldyFyryG.js";import"./MultiColumnSortDialog-Cnu7c22c.js";import"./MenuTrigger-DGPqeCRx.js";import"./CompositeItem-Njv-UL0-.js";import"./ToolbarRootContext-CO46LevS.js";import"./getDisabledMountTransitionStyles-34a-rU3g.js";import"./getPseudoElementBounds-BbXVzXA0.js";import"./chevron-down-CtrzDWNG.js";import"./index-CSeUdJKV.js";import"./error-BYw7g7-I.js";import"./BaseCbacBanner-B4hDckkf.js";import"./makeExternalStore-RjVLrk3T.js";import"./Tooltip-2aZ4GuI9.js";import"./PopoverPopup-BtxdP9wx.js";import"./toNumber-DO1vsYv5.js";import"./useOsdkClient-HhfOBtyn.js";import"./DropdownField-DvPpNAiC.js";import"./withOsdkMetrics-BIxYACPr.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
