import{f as n,j as t}from"./iframe-DI1xirK-.js";import{O as p}from"./object-table-ClKMFdSW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0eB-iNFg.js";import"./Table-CCcvKe_7.js";import"./index-Qmumqc3o.js";import"./Dialog-DmhjMM6r.js";import"./cross-DXxFyqdT.js";import"./svgIconContainer-C-6LIlco.js";import"./useBaseUiId-1iq4OEpU.js";import"./InternalBackdrop-BkpCiodu.js";import"./composite-B5wTQSOr.js";import"./index-dswnejRd.js";import"./index-jUgqDaNo.js";import"./index-Cb7DbeDl.js";import"./useEventCallback-Celq3rTk.js";import"./SkeletonBar-BAHMsEeV.js";import"./LoadingCell-eSrea5ZP.js";import"./ColumnConfigDialog-66wvzjEI.js";import"./DraggableList-BDW0Kp0A.js";import"./search-DSBEfNMJ.js";import"./Input-MVTV0nl7.js";import"./useControlled-CKn_W9T5.js";import"./Button-Dx4mM2CM.js";import"./small-cross-9WJda0nd.js";import"./ActionButton-DjqErxed.js";import"./Checkbox-Cq0tNIpf.js";import"./minus-C0dG24D9.js";import"./tick-C08GmpGd.js";import"./useValueChanged-DRmBmslJ.js";import"./caret-down-Cy-5jtYw.js";import"./CollapsiblePanel-KMnZsSUD.js";import"./MultiColumnSortDialog-B9aKyir5.js";import"./MenuTrigger-D4RI06Pj.js";import"./CompositeItem-FUSl92sr.js";import"./ToolbarRootContext-uhnlLHPe.js";import"./getDisabledMountTransitionStyles-DsaO_UTk.js";import"./getPseudoElementBounds-CvjcgftE.js";import"./chevron-down-BwPFXf2e.js";import"./index-BVSdOdg1.js";import"./error-MoXsr2oV.js";import"./BaseCbacBanner-u4prWgFK.js";import"./makeExternalStore-DnxCicIx.js";import"./Tooltip-gutm5hpa.js";import"./PopoverPopup-DplJaSXa.js";import"./toNumber-CBfAPFUg.js";import"./useOsdkClient-CGu4CdPM.js";import"./DropdownField-D2y0mo05.js";import"./withOsdkMetrics-Bci0_mqP.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
