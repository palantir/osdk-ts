import{f as n,j as t}from"./iframe-An7_ok4C.js";import{O as p}from"./object-table-MDanzBw-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-RtOdUqdU.js";import"./Table-Bz8Txux5.js";import"./index-CsV4dS7f.js";import"./Dialog-G9WZrXcI.js";import"./cross-SIcxHuYm.js";import"./svgIconContainer-B6gElZ5n.js";import"./useBaseUiId-DFBpAm_h.js";import"./InternalBackdrop-CP8kJ_VP.js";import"./composite-C9JiOFOF.js";import"./index-DfNXtine.js";import"./index-B6sK19yI.js";import"./index-Ce69MtrK.js";import"./useEventCallback-D5d6OBxJ.js";import"./SkeletonBar-CoGZCSPy.js";import"./LoadingCell-YAt8KIIw.js";import"./ColumnConfigDialog-BoxDxvWz.js";import"./DraggableList-CFNgk54j.js";import"./Input-Ccvg9OTC.js";import"./useControlled-DpcT0DFF.js";import"./Button-BM9yKjC0.js";import"./small-cross-CSFvpByU.js";import"./ActionButton-DuPLC2_6.js";import"./Checkbox-D2tILyh6.js";import"./minus-NP1uxGH9.js";import"./useValueChanged-Dl388Q1L.js";import"./caret-down-ChNeoUMz.js";import"./CollapsiblePanel-Cvk0OUM1.js";import"./MultiColumnSortDialog-CVXxEKRs.js";import"./MenuTrigger-TPI_OH_h.js";import"./CompositeItem-DpyuKUKM.js";import"./ToolbarRootContext-DKP64O-4.js";import"./getDisabledMountTransitionStyles-DSoIsw5V.js";import"./getPseudoElementBounds-BLAVuF0e.js";import"./chevron-down-DwPJLpiv.js";import"./index-DUjZV3m5.js";import"./error-eGR5PXEA.js";import"./BaseCbacBanner-DE4-FZMs.js";import"./makeExternalStore-rNNfmP1e.js";import"./Tooltip-C9QDOcx4.js";import"./PopoverPopup-BI1Ajqls.js";import"./toNumber-C5xxX2hr.js";import"./useOsdkClient-BVi78b7z.js";import"./DropdownField-BrViNUXb.js";import"./useShape-B0HjDz_i.js";import"./withOsdkMetrics-CsEZPBhW.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
