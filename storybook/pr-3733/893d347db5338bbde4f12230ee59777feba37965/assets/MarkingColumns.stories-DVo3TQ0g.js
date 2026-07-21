import{f as n,j as t}from"./iframe-UqajrsoW.js";import{O as p}from"./object-table-C4Ncx-Ta.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CJeET2h7.js";import"./Table-1Ek8d2bt.js";import"./index-CmtgLUwj.js";import"./Dialog-BOQgWJ76.js";import"./cross-BuNElw2x.js";import"./svgIconContainer-D-2BiFCP.js";import"./useBaseUiId-BrGGNUOY.js";import"./InternalBackdrop-DcXJMkHT.js";import"./composite-3VJYau70.js";import"./index-DRqKrb3w.js";import"./index-BOlhsimz.js";import"./index-BVSoVEYU.js";import"./useEventCallback-BdWvRzzi.js";import"./SkeletonBar-vGDCgLZp.js";import"./LoadingCell-BAbhrxtt.js";import"./ColumnConfigDialog-ChuJLSQr.js";import"./DraggableList-BkgSjEPi.js";import"./search-BQFJJ_A5.js";import"./Input-CxFj4lrX.js";import"./useControlled-DOab4WQ8.js";import"./Button-Bj7hMr0l.js";import"./small-cross-CvBi8hbQ.js";import"./ActionButton-CcEEMfkm.js";import"./Checkbox-BDC6dbiE.js";import"./useValueChanged-BqFf7dJk.js";import"./CollapsiblePanel-Bg1HOG6w.js";import"./MultiColumnSortDialog-DIL8PicZ.js";import"./MenuTrigger-D2Z9Hcim.js";import"./CompositeItem-BRKTidf5.js";import"./ToolbarRootContext-BboH-vWC.js";import"./getDisabledMountTransitionStyles-DTOTC5QJ.js";import"./getPseudoElementBounds-DIDm98ZK.js";import"./chevron-down-DpqJ-OwS.js";import"./index-DsJuxyW3.js";import"./error-ChPKflVB.js";import"./BaseCbacBanner-DsJL4_Xr.js";import"./makeExternalStore-Cj14d6ni.js";import"./Tooltip-DFTNv1ik.js";import"./PopoverPopup-D1z9B4du.js";import"./toNumber-DpPs6abZ.js";import"./useOsdkClient-BF3N2abz.js";import"./tick-C1YMozEk.js";import"./DropdownField-sp8aRziV.js";import"./withOsdkMetrics-gY6Ov3av.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
