import{f as n,j as t}from"./iframe-Bj1MEzZt.js";import{O as p}from"./object-table-BC0yia3t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1FTf2If.js";import"./Table-nHIXVq93.js";import"./index-DeSLIOWc.js";import"./Dialog-CovfAVrp.js";import"./cross-0IJmXpL8.js";import"./svgIconContainer-DlmzthC9.js";import"./useBaseUiId-BqpIS-F-.js";import"./InternalBackdrop-Bj5ELeUU.js";import"./composite-Bi6Cj2uF.js";import"./index-XZ5d8N__.js";import"./index-CX0fm6C9.js";import"./index-BgWajjmf.js";import"./useEventCallback-DxAR1ff6.js";import"./SkeletonBar-CA2ACSK2.js";import"./LoadingCell-SN0drMT6.js";import"./ColumnConfigDialog-yb7C7ws7.js";import"./DraggableList-DKYV5u-Z.js";import"./search-kif-7SC4.js";import"./Input-BjZAvpMy.js";import"./useControlled-BsXhHg9D.js";import"./Button-Bxx-3lnA.js";import"./small-cross-J_ERw0XX.js";import"./ActionButton-DdT1xcsP.js";import"./Checkbox-DFV8iiYL.js";import"./useValueChanged-Dg8j-_e-.js";import"./CollapsiblePanel-jY6uiW4N.js";import"./MultiColumnSortDialog-C0oFejLb.js";import"./MenuTrigger-oft4l45T.js";import"./CompositeItem-lYV_12NC.js";import"./ToolbarRootContext-rh9b1pH4.js";import"./getDisabledMountTransitionStyles-7yClBl8N.js";import"./getPseudoElementBounds-W-4nVNw3.js";import"./chevron-down-CgyuwAZ7.js";import"./index-D22cm5dM.js";import"./error-I_yYOMPz.js";import"./BaseCbacBanner-BmYs9nWw.js";import"./makeExternalStore-CO194rEb.js";import"./Tooltip-BswTbyww.js";import"./PopoverPopup-Bk7SkigI.js";import"./toNumber-CbYg0YlJ.js";import"./useOsdkClient-O0BdObBn.js";import"./tick-DNZmbno-.js";import"./DropdownField-CPFGK459.js";import"./withOsdkMetrics-BQyhZxiE.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
