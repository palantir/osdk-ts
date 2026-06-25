import{f as n,j as t}from"./iframe-B45Fwd24.js";import{O as p}from"./object-table-DnmxIZHU.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DGPdPr-Q.js";import"./Table-EPEQXkHa.js";import"./index-CmB0aajK.js";import"./Dialog-DYoKM1ix.js";import"./cross-B-_C0TOb.js";import"./svgIconContainer-BNBtt37M.js";import"./useBaseUiId-Dr28hnWl.js";import"./InternalBackdrop-DuT4vDby.js";import"./composite-DJooMdlw.js";import"./index-D1eZs0rV.js";import"./index-CdlABH-y.js";import"./index-DHb9isl8.js";import"./useEventCallback-BNNaumvW.js";import"./SkeletonBar-BI6TrWj8.js";import"./LoadingCell-CicnvjVp.js";import"./ColumnConfigDialog-BeOQ92Sz.js";import"./DraggableList-CwEkfG_A.js";import"./Input-AViTwUB1.js";import"./useControlled-CC9KrKB_.js";import"./Button-Cm22MXXv.js";import"./small-cross-D-vI3K0u.js";import"./ActionButton-B4L14FBV.js";import"./Checkbox-DvDXiCC7.js";import"./minus-CiD-ecns.js";import"./useValueChanged-BvDHTHdp.js";import"./caret-down-CTTfY8rv.js";import"./CollapsiblePanel-D7Gi9bOG.js";import"./MultiColumnSortDialog-CZ8KzKuk.js";import"./MenuTrigger-DPIpDMOj.js";import"./CompositeItem-C488MAie.js";import"./ToolbarRootContext-DlOiOwv2.js";import"./getDisabledMountTransitionStyles-BuIdFrh6.js";import"./getPseudoElementBounds-HYVEuAwz.js";import"./chevron-down-Cwz3ukGp.js";import"./index-CzUHto2v.js";import"./error-BOHdpUwg.js";import"./BaseCbacBanner-Cb08zWrB.js";import"./makeExternalStore-B9iK3ZWK.js";import"./Tooltip-C1ZDOXBw.js";import"./PopoverPopup-ZIZLA3wZ.js";import"./toNumber-BP6HhfeY.js";import"./useOsdkClient-xhyXVxPX.js";import"./DropdownField-DRMPFiAY.js";import"./withOsdkMetrics-hjyJZf0c.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
