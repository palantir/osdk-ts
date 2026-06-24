import{f as n,j as t}from"./iframe-DRN36ecf.js";import{O as p}from"./object-table-DhyGL0Wy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvDLzUOT.js";import"./Table-CAWhgxLK.js";import"./index-DH-SPDfK.js";import"./Dialog-DbujIbMZ.js";import"./cross-DRrB4XdS.js";import"./svgIconContainer-BNCc3Rgp.js";import"./useBaseUiId-BOfYIH6n.js";import"./InternalBackdrop-C2CNpSZ2.js";import"./composite-DSnfWIKZ.js";import"./index-BbgyxkW7.js";import"./index-DJdzN66o.js";import"./index-BQKj5v7n.js";import"./useEventCallback-D_QGzgEV.js";import"./SkeletonBar-76t6jnwi.js";import"./LoadingCell-dNv9d6pV.js";import"./ColumnConfigDialog-CUaeiSsU.js";import"./DraggableList-WCHN2Itd.js";import"./Input-BfjBcupd.js";import"./useControlled-Cyxpi559.js";import"./Button-Dlgty52G.js";import"./small-cross-C4lxr2I4.js";import"./ActionButton-I3uIiNWD.js";import"./Checkbox-DUZM8RdR.js";import"./minus-Dy0aeq92.js";import"./useValueChanged-BaCfCRMt.js";import"./caret-down-mWviLTug.js";import"./CollapsiblePanel-BZkrM5kR.js";import"./MultiColumnSortDialog-BwuGa0MR.js";import"./MenuTrigger-CAohX6S8.js";import"./CompositeItem-Q36cPPiC.js";import"./ToolbarRootContext-AvHr_vLX.js";import"./getDisabledMountTransitionStyles-DMh2KP3x.js";import"./getPseudoElementBounds-CX1j6ANj.js";import"./chevron-down-jOtyWEGA.js";import"./index-BUvd3_uM.js";import"./error-CfemcoYO.js";import"./BaseCbacBanner-C9MKgg9Z.js";import"./makeExternalStore-C41vVJcy.js";import"./Tooltip-D3FE1ijF.js";import"./PopoverPopup-LF2DVcnB.js";import"./toNumber-FWAcnhTX.js";import"./useOsdkClient-hjsPuk6I.js";import"./DropdownField-Uuyuu48v.js";import"./withOsdkMetrics-Bn5r_YLr.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
