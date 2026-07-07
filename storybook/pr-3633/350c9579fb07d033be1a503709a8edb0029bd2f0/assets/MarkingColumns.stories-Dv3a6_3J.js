import{f as n,j as t}from"./iframe-DMptrxa9.js";import{O as p}from"./object-table-A6SVzUJ1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BECJHbCs.js";import"./Table-D4a3p9xb.js";import"./index-CiAHDYkd.js";import"./Dialog-CKJC3om1.js";import"./cross-DrL9tyUF.js";import"./svgIconContainer-w_wSwNRF.js";import"./useBaseUiId-BW9Wjo5d.js";import"./InternalBackdrop-yMvZoi9q.js";import"./composite-DxN_csnM.js";import"./index-C903pG23.js";import"./index-BJouSfXg.js";import"./index-CffcvR2V.js";import"./useEventCallback-DaZWsjJ1.js";import"./SkeletonBar-Dr20ke-r.js";import"./LoadingCell-LyELAFYf.js";import"./ColumnConfigDialog-BQcrkvTf.js";import"./DraggableList-CmblJ_pw.js";import"./search-DBBNrD_U.js";import"./Input-CHoo27YZ.js";import"./useControlled-Bj3k7i7A.js";import"./Button-D3Z34MXJ.js";import"./small-cross-M8tj83eK.js";import"./ActionButton-0nILSGNj.js";import"./Checkbox-ahe8pHBd.js";import"./useValueChanged-DPjTrSyC.js";import"./CollapsiblePanel-BsB-ZTap.js";import"./MultiColumnSortDialog-BnlrlDjt.js";import"./MenuTrigger-C9gq5cpX.js";import"./CompositeItem-DlSnK-c0.js";import"./ToolbarRootContext-OVu30J-T.js";import"./getDisabledMountTransitionStyles-__DoLLzf.js";import"./getPseudoElementBounds-BiUi3OyF.js";import"./chevron-down-BZDyhjQs.js";import"./index-eeCx8pJO.js";import"./error-DappMFNy.js";import"./BaseCbacBanner-CJEF52Wf.js";import"./makeExternalStore-C8ohaOxV.js";import"./Tooltip-SsiX4-8t.js";import"./PopoverPopup-BecxA6Dr.js";import"./toNumber-C0mlKI_y.js";import"./useOsdkClient-D_TDsMlb.js";import"./tick-VyNiS8eq.js";import"./DropdownField-C2PH99aG.js";import"./withOsdkMetrics-BiS01aqI.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
