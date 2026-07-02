import{f as n,j as t}from"./iframe-gNe9ReqN.js";import{O as p}from"./object-table-CLGrOJn7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BWzPsQJa.js";import"./Table-DbNydAJH.js";import"./index-DEY9Rjmf.js";import"./Dialog-DFaOMfz7.js";import"./cross-CjeCVve4.js";import"./svgIconContainer-QgcOta_8.js";import"./useBaseUiId-BAIfk5kV.js";import"./InternalBackdrop-CAZWagDR.js";import"./composite-DMVB6Olt.js";import"./index-BFRTdDwg.js";import"./index-DmajPU2-.js";import"./index-CYEQrn89.js";import"./useEventCallback-B0HM2CXq.js";import"./SkeletonBar-CYewB1Rd.js";import"./LoadingCell-D01HyjNA.js";import"./ColumnConfigDialog-DFIuCx3e.js";import"./DraggableList-Kpd_DNHJ.js";import"./search-mXj_8Ppd.js";import"./Input-CiGjYClw.js";import"./useControlled-B2IaLJKX.js";import"./Button-CHvqhQPU.js";import"./small-cross-BM9PWxzD.js";import"./ActionButton-Bb2hxfNj.js";import"./Checkbox-DzcQhc-0.js";import"./minus-DzeLGnSh.js";import"./tick-VVxW-4zS.js";import"./useValueChanged-C4UFJLNJ.js";import"./caret-down-CQkem9FY.js";import"./CollapsiblePanel-C0nUuJvJ.js";import"./MultiColumnSortDialog-B1WKnpTi.js";import"./MenuTrigger-DDdcEjzN.js";import"./CompositeItem-Cqp-Y5zN.js";import"./ToolbarRootContext-C7KD-nph.js";import"./getDisabledMountTransitionStyles-BCht8du3.js";import"./getPseudoElementBounds-B4vZvIIJ.js";import"./chevron-down-DwWur41J.js";import"./index-twtYLQD-.js";import"./error-Tk0QOVDp.js";import"./BaseCbacBanner-DhCf-Z8c.js";import"./makeExternalStore-DWmdl9O1.js";import"./Tooltip-BgQD0rV6.js";import"./PopoverPopup-CRAUo5cx.js";import"./toNumber-BeadpN6X.js";import"./useOsdkClient-DPUNkdKy.js";import"./DropdownField-w3TliArO.js";import"./withOsdkMetrics-D-wp4kSJ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
