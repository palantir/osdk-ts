import{f as n,j as t}from"./iframe-BsQgWFmA.js";import{O as p}from"./object-table-D-myA9gq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ox8sc0DE.js";import"./Table-80WN1noJ.js";import"./index-Cz06TiHR.js";import"./Dialog-mSTI47Em.js";import"./cross-dIYqR0im.js";import"./svgIconContainer-BFXX1WcO.js";import"./useBaseUiId-Rf-IjtIz.js";import"./InternalBackdrop-CeUODOQu.js";import"./composite-BRcAP26W.js";import"./index-Bc2NOt8d.js";import"./index-CK1uJrEi.js";import"./index-dO1cnqES.js";import"./useEventCallback-BD7RgSO2.js";import"./SkeletonBar-DY6bU-2X.js";import"./LoadingCell-bMlzYaU_.js";import"./ColumnConfigDialog-CIx18KJc.js";import"./DraggableList-CQX37W4N.js";import"./search-Bf_HBchW.js";import"./Input-BffJw4Yo.js";import"./useControlled-BrKYBCok.js";import"./Button-CnDPVMED.js";import"./small-cross-DH-4kCQT.js";import"./ActionButton-TCMWR9j9.js";import"./Checkbox-PBcz_M5r.js";import"./useValueChanged-D_umwE73.js";import"./CollapsiblePanel-9SASHUHU.js";import"./MultiColumnSortDialog-Dq98EDpz.js";import"./MenuTrigger-iSVa15xy.js";import"./CompositeItem-CgQckNl-.js";import"./ToolbarRootContext-DCuLKsCk.js";import"./getDisabledMountTransitionStyles-C_Zb6IZy.js";import"./getPseudoElementBounds-BYT0UDE5.js";import"./chevron-down-Dr4jf91F.js";import"./index-C3Do-XCw.js";import"./error-kykHtLGD.js";import"./BaseCbacBanner-8e831k6I.js";import"./makeExternalStore-DEES9k4f.js";import"./Tooltip-Dl9c7BIb.js";import"./PopoverPopup-CH1AGiwO.js";import"./toNumber-v_FGOzW2.js";import"./useOsdkClient-DrKDMcdJ.js";import"./tick-D0aRfSQT.js";import"./DropdownField-Ba-ySGYF.js";import"./withOsdkMetrics-CxjcE0Us.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
