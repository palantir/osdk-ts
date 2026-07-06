import{f as n,j as t}from"./iframe-6JVXeTWS.js";import{O as p}from"./object-table-C1ipw78N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cw1MFz_c.js";import"./Table-9ygqOewK.js";import"./index-CCRcN1k8.js";import"./Dialog-Bsn9Rk_r.js";import"./cross-5SRrceXd.js";import"./svgIconContainer-D_jRBUY4.js";import"./useBaseUiId-a7slHkDQ.js";import"./InternalBackdrop-pmr63x3R.js";import"./composite-DTzkFL_Y.js";import"./index-CKLXtTUZ.js";import"./index-akSI5u-L.js";import"./index-DZuT87X3.js";import"./useEventCallback-DYoiHgul.js";import"./SkeletonBar-rM9ABjT8.js";import"./LoadingCell-LaAz_fNS.js";import"./ColumnConfigDialog-D5jnte8R.js";import"./DraggableList-Dl53n4NM.js";import"./search-BvHHgQAn.js";import"./Input-SnHDB1yK.js";import"./useControlled-BXAX7das.js";import"./Button-HAvPtIv5.js";import"./small-cross-jS-NdMr0.js";import"./ActionButton-DASxk3lE.js";import"./Checkbox-DMkoRXZh.js";import"./useValueChanged-UwHPgUvg.js";import"./CollapsiblePanel-CpbfknWt.js";import"./MultiColumnSortDialog-BZb2hn9y.js";import"./MenuTrigger-CXl2Q-iR.js";import"./CompositeItem-Cxv47m7T.js";import"./ToolbarRootContext-DfFG8vJ4.js";import"./getDisabledMountTransitionStyles-DuM_w5_T.js";import"./getPseudoElementBounds-bE3BlAsx.js";import"./chevron-down-DxkqjctO.js";import"./index-Bd6rbSg8.js";import"./error-dc7Jmoqx.js";import"./BaseCbacBanner-DxIPYIdW.js";import"./makeExternalStore-DctrMw-f.js";import"./Tooltip-B3aByQMb.js";import"./PopoverPopup-Qdk1sxDf.js";import"./toNumber-CuMo-qtP.js";import"./useOsdkClient-BNpIjZXO.js";import"./tick-B-Qe8cb0.js";import"./DropdownField-3fvIF2hf.js";import"./withOsdkMetrics-BS6Er7Nk.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
