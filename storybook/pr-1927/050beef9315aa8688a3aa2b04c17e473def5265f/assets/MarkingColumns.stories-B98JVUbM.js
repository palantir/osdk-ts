import{f as n,j as t}from"./iframe-CTtKpuPX.js";import{O as p}from"./object-table-BIXe4J1r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6hSPOmN.js";import"./Table-k8qyL3Jx.js";import"./index-Cyj4Ffpi.js";import"./Dialog-C-sXaxV2.js";import"./cross-BoqqpAr8.js";import"./svgIconContainer-DoDhPV94.js";import"./useBaseUiId-D1J9vYIJ.js";import"./InternalBackdrop-DF_dpEIw.js";import"./composite-C9mmOUFU.js";import"./index-Drl0RHSH.js";import"./index-YN6uwMna.js";import"./index-D2lFCtLu.js";import"./useEventCallback-BqbDxq1F.js";import"./SkeletonBar-C33oyVZZ.js";import"./LoadingCell-B3KYC1sj.js";import"./ColumnConfigDialog-BUTeKvu-.js";import"./DraggableList-OHE20B7W.js";import"./Input-58Z_MEuh.js";import"./useControlled-0bvtoG4K.js";import"./Button-CP-xYD7T.js";import"./small-cross-D7OT641J.js";import"./ActionButton-DzmwX5SM.js";import"./Checkbox-pQXewEiI.js";import"./minus-BRS7K1mA.js";import"./useValueChanged-Cypak-Cg.js";import"./caret-down-CnfRvl-P.js";import"./CollapsiblePanel-Mm5ZP4Kk.js";import"./MultiColumnSortDialog-Cu_kayiK.js";import"./MenuTrigger-mQZmMEDC.js";import"./CompositeItem-CA2UNOYQ.js";import"./ToolbarRootContext-CK-kAq8R.js";import"./getDisabledMountTransitionStyles-r5G5hKif.js";import"./getPseudoElementBounds-CKvt87_B.js";import"./chevron-down-DisEtop0.js";import"./index-BDXDgZqI.js";import"./error-gl_tyZw4.js";import"./BaseCbacBanner-Zd0__7zm.js";import"./makeExternalStore-eTbS9FM_.js";import"./Tooltip-D3FGGowJ.js";import"./PopoverPopup-DIozXyVU.js";import"./toNumber-CvlL-ztq.js";import"./useOsdkClient-Cvm4tIwe.js";import"./DropdownField-B6U_2dcW.js";import"./withOsdkMetrics-OYxvwukt.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
