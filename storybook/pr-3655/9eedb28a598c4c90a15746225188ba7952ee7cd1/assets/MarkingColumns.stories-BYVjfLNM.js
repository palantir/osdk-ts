import{f as n,j as t}from"./iframe-pWexxLT7.js";import{O as p}from"./object-table-B5g5sPcn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DAxCna9u.js";import"./Table-CUv0n495.js";import"./index-Cn2FWRSV.js";import"./Dialog-RiQkF2vL.js";import"./cross-En_bKMfi.js";import"./svgIconContainer-C7ZN1XkX.js";import"./useBaseUiId-CWLPLs_V.js";import"./InternalBackdrop-EjITGFPi.js";import"./composite-Bebos5Dw.js";import"./index-BPJH_7Cs.js";import"./index-BEDzz0C9.js";import"./index-BOniZzx2.js";import"./useEventCallback-DvTk5xxd.js";import"./SkeletonBar-DtLQ5OBz.js";import"./LoadingCell-DzPVQNSy.js";import"./ColumnConfigDialog-KsWNHrDc.js";import"./DraggableList-By9I7Og3.js";import"./search-JsUI98Vl.js";import"./Input-Doi-pqeP.js";import"./useControlled-BLLqDxFL.js";import"./Button-DTgwHHdU.js";import"./small-cross-DRIYLuGi.js";import"./ActionButton-JHhpni9F.js";import"./Checkbox-DvwtdsOg.js";import"./useValueChanged-BVOSwWq_.js";import"./CollapsiblePanel-DjdH7ke8.js";import"./MultiColumnSortDialog-D_A2XQ5b.js";import"./MenuTrigger-3NHCHTuZ.js";import"./CompositeItem-5ildQ8TW.js";import"./ToolbarRootContext-DgmlBkd_.js";import"./getDisabledMountTransitionStyles-CC19l7NL.js";import"./getPseudoElementBounds-Dn59Fciy.js";import"./chevron-down-DiwVAatE.js";import"./index-DwGcf4YC.js";import"./error-DGoDyeTd.js";import"./BaseCbacBanner-Ds_O4slh.js";import"./makeExternalStore-C-I5-WDr.js";import"./Tooltip-CErGqUGR.js";import"./PopoverPopup-CVfloMHh.js";import"./toNumber-gKwcaXYT.js";import"./useOsdkClient-BG_-WuD8.js";import"./tick-CL_1gRQi.js";import"./DropdownField-Coj8LYqA.js";import"./withOsdkMetrics-uY2Z1dO5.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
