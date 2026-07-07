import{f as n,j as t}from"./iframe-BsJ6skNO.js";import{O as p}from"./object-table-pbNxRNFV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-fA94zcC1.js";import"./index-tosYC6sU.js";import"./Dialog-Bfw73oV-.js";import"./cross-CJN9-3Xs.js";import"./svgIconContainer-BqKTiLhX.js";import"./useBaseUiId-w6j8mMqv.js";import"./InternalBackdrop-D7etPrMD.js";import"./composite-DB9MIcSB.js";import"./index-DPLkgV4s.js";import"./index-D2TBVAmm.js";import"./index-B8gpK-VO.js";import"./useEventCallback-XWn2X1FY.js";import"./SkeletonBar-Dq4O14F7.js";import"./LoadingCell-CLQ6xDTR.js";import"./ColumnConfigDialog-5NrAtps4.js";import"./DraggableList-Dzr-4YtP.js";import"./search-BAaG3R55.js";import"./Input-CAZSpPNu.js";import"./useControlled-BvG1X1Yn.js";import"./Button-B5q5Q8T0.js";import"./small-cross-CQRWwqr2.js";import"./ActionButton-DkUFfx8W.js";import"./Checkbox-D5epBfD3.js";import"./useValueChanged-CYA-mate.js";import"./CollapsiblePanel-YxlLoP0b.js";import"./MultiColumnSortDialog-IhD8YRKp.js";import"./MenuTrigger-BqiIfqiR.js";import"./CompositeItem-CB1yFyrh.js";import"./ToolbarRootContext-_3BaerVg.js";import"./getDisabledMountTransitionStyles-Cj9CR6qP.js";import"./getPseudoElementBounds-BRhgtxV0.js";import"./chevron-down-BIVIQnR2.js";import"./index-Dwjdsjwc.js";import"./error-BsMAB-HQ.js";import"./BaseCbacBanner-DRCvDlVW.js";import"./makeExternalStore-DtARJ13Z.js";import"./Tooltip-uViWemDq.js";import"./PopoverPopup-7R_eEBZj.js";import"./toNumber-BDn10los.js";import"./useOsdkClient-Iv1DBzKw.js";import"./tick-B25h9IxS.js";import"./DropdownField-V77m-xqr.js";import"./withOsdkMetrics-B8Tbf6Xk.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
