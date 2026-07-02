import{f as n,j as t}from"./iframe-z3kgqSwP.js";import{O as p}from"./object-table-CNC9gfSG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BxD95gn8.js";import"./Table-H6ixnkGp.js";import"./index-BFzEGCFR.js";import"./Dialog-C43gzUf6.js";import"./cross-CNRI10qM.js";import"./svgIconContainer-vxXaLN1R.js";import"./useBaseUiId-CC2KGGKF.js";import"./InternalBackdrop-CKhjFOXn.js";import"./composite-urFBwUYd.js";import"./index-dfy9RQgR.js";import"./index-FCWlAxUt.js";import"./index-CrvaJ4KL.js";import"./useEventCallback-69yfmcsN.js";import"./SkeletonBar-CL6uzwaq.js";import"./LoadingCell-BkzNxYsJ.js";import"./ColumnConfigDialog-D5VXG4O2.js";import"./DraggableList-BSWo3yPa.js";import"./search-DlCI_3ne.js";import"./Input-Drp1-O2N.js";import"./useControlled-DFFBLt9g.js";import"./Button-D4IOHvu3.js";import"./small-cross-Bl4VrcoI.js";import"./ActionButton-Csq3-tVg.js";import"./Checkbox-DsnTDe0T.js";import"./minus-CO0ZddGe.js";import"./tick-B3MjVo2F.js";import"./useValueChanged-D5GVFMGN.js";import"./caret-down-ByWoL30O.js";import"./CollapsiblePanel-CS7hGN9c.js";import"./MultiColumnSortDialog-BaRtzNys.js";import"./MenuTrigger-Ps_r7LqP.js";import"./CompositeItem-DtH80mGV.js";import"./ToolbarRootContext-dk23u97p.js";import"./getDisabledMountTransitionStyles-BNPY0Tt-.js";import"./getPseudoElementBounds-DppQ_N1z.js";import"./chevron-down-Cx-xxyBK.js";import"./index-BfosxuAq.js";import"./error-BLsVnIXb.js";import"./BaseCbacBanner-BakFBbhU.js";import"./makeExternalStore-CM3DLK4v.js";import"./Tooltip-BYE41ph8.js";import"./PopoverPopup-Cu1Yfa_D.js";import"./toNumber-DSUxr4FR.js";import"./useOsdkClient-D2suex8d.js";import"./DropdownField-MdWKCCRC.js";import"./withOsdkMetrics-D9bXlcbM.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
