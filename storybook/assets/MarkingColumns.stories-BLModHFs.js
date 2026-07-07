import{f as n,j as t}from"./iframe-rsNkHZI8.js";import{O as p}from"./object-table-DoG_riAj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D8b9H-lm.js";import"./index-CGI_aBYs.js";import"./Dialog-D6cToeEE.js";import"./cross-DbbG_peE.js";import"./svgIconContainer-BZthJgoq.js";import"./useBaseUiId-BUl6pw-H.js";import"./InternalBackdrop-B7IWOY2b.js";import"./composite-XCitygaR.js";import"./index-BkJWDSh0.js";import"./index-CLHdUyO3.js";import"./index-CAsnxy9P.js";import"./useEventCallback-Dfv3a-Iz.js";import"./SkeletonBar-BcRxO3Po.js";import"./LoadingCell-CqRn8oKP.js";import"./ColumnConfigDialog-CwHJlUtp.js";import"./DraggableList-eEomo4ok.js";import"./search-CgZRPEt7.js";import"./Input-D8yDtZTG.js";import"./useControlled-D3vnxyt3.js";import"./Button-Bum5P5Nf.js";import"./small-cross-9X9VTSQu.js";import"./ActionButton-C4V7iFjI.js";import"./Checkbox-DYcAm_UR.js";import"./useValueChanged-DihpoPFc.js";import"./CollapsiblePanel-iQecx7jn.js";import"./MultiColumnSortDialog-DhSF4uLu.js";import"./MenuTrigger-DGA2G8MK.js";import"./CompositeItem-DDmeFsyN.js";import"./ToolbarRootContext-C0g8uHuL.js";import"./getDisabledMountTransitionStyles-VGahHJv5.js";import"./getPseudoElementBounds-DTvVzO4W.js";import"./chevron-down-DMoNOrUS.js";import"./index-D1xOPTpB.js";import"./error-B0gTN4Dr.js";import"./BaseCbacBanner-BIhJob0L.js";import"./makeExternalStore-DADMh7-t.js";import"./Tooltip-DvSRYP1I.js";import"./PopoverPopup-DVvc-z1R.js";import"./toNumber-Bhv3ET3D.js";import"./useOsdkClient-DVGLrA5j.js";import"./tick-BebInx4R.js";import"./DropdownField-BiWQVxwF.js";import"./withOsdkMetrics-DN3Tt0ZW.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
