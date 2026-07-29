import{f as n,j as t}from"./iframe-CAxD4pEZ.js";import{O as p}from"./object-table-BM6527NC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-cv8tk-is.js";import"./Table-EpehyIRm.js";import"./index-DlY3DWZs.js";import"./Dialog-XeXWPENh.js";import"./cross-D22f60Ip.js";import"./svgIconContainer-D0Ul3QRA.js";import"./useBaseUiId-D2zcvs6X.js";import"./InternalBackdrop-B9cl1zpt.js";import"./composite-H3Jc2oFy.js";import"./index-nQREIoe8.js";import"./index-CHDzEGvN.js";import"./index-Z_W4p0iB.js";import"./useEventCallback-Bi5htbJ3.js";import"./SkeletonBar-vFZbeSS2.js";import"./LoadingCell-zpys0AP-.js";import"./ColumnConfigDialog-BVnaeJ9R.js";import"./DraggableList-CNxO6XJ-.js";import"./search-sndjbWNW.js";import"./Input-B3Sr0GJ5.js";import"./useControlled-CGdyEJo1.js";import"./Button-oBzJmSqx.js";import"./small-cross-DJzP2arG.js";import"./ActionButton-Cqu_Amu-.js";import"./Checkbox-BnNM_92h.js";import"./useValueChanged-0gpOq36S.js";import"./CollapsiblePanel-DmiZ9Ja1.js";import"./MultiColumnSortDialog-C5aALK7y.js";import"./MenuTrigger-QKpFoUnj.js";import"./CompositeItem-ClL9Rn_X.js";import"./ToolbarRootContext-yGM8NHmL.js";import"./getDisabledMountTransitionStyles-41TbKhM8.js";import"./getPseudoElementBounds-DAHzGlSI.js";import"./chevron-down-Dtz8PPrm.js";import"./index-57QH5stG.js";import"./error-Cbgjfijt.js";import"./BaseCbacBanner-B_R3N6Ig.js";import"./makeExternalStore-BjuyQ1D_.js";import"./Tooltip-BTO9pvMP.js";import"./PopoverPopup-1pvk7noC.js";import"./toNumber-C0sx0f6a.js";import"./useOsdkClient-DYF8cXRh.js";import"./tick-CLYMtaOE.js";import"./DropdownField-DrTG0e78.js";import"./withOsdkMetrics-CgBsOBZ3.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
