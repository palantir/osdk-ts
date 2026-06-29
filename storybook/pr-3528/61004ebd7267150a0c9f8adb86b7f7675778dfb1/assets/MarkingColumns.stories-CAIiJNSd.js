import{f as n,j as t}from"./iframe-DU6AifTB.js";import{O as p}from"./object-table-B1-7NoP3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9r7Mq-J.js";import"./Table-DHArZ8YK.js";import"./index-BDDtmXmH.js";import"./Dialog-rHeGiyVw.js";import"./cross-W5LBmGNL.js";import"./svgIconContainer-CE7iH6vv.js";import"./useBaseUiId-KEqBcONz.js";import"./InternalBackdrop-C1n83a4m.js";import"./composite-BUEF30mt.js";import"./index-BVCAhqLI.js";import"./index-CbGov4bv.js";import"./index-Cc5nnvD9.js";import"./useEventCallback-CSe60fga.js";import"./SkeletonBar-xUA_BnPk.js";import"./LoadingCell-C6-fN5g6.js";import"./ColumnConfigDialog-DpDBJRBt.js";import"./DraggableList-CUie6ux5.js";import"./search-DsFx-0Lb.js";import"./Input-DeaC_9xA.js";import"./useControlled-C9IdqnIb.js";import"./Button-D3E7joIa.js";import"./small-cross-Dsfh3VxT.js";import"./ActionButton-BtJoXbTX.js";import"./Checkbox-EFasBB7R.js";import"./minus-CZITBZ58.js";import"./tick-CFFCE3l9.js";import"./useValueChanged-23vmUID7.js";import"./caret-down-p2ukZgjz.js";import"./CollapsiblePanel-BmUb8f5c.js";import"./MultiColumnSortDialog-Dy1WZ59r.js";import"./MenuTrigger-QUNBLFJd.js";import"./CompositeItem-DvPShEFw.js";import"./ToolbarRootContext-B9_dyxli.js";import"./getDisabledMountTransitionStyles-9aLAd6iH.js";import"./getPseudoElementBounds-Cl7Ektof.js";import"./chevron-down-D_7VX1CI.js";import"./index-BhGYIy1H.js";import"./error-DxvBCM2J.js";import"./BaseCbacBanner-cn7-bx-g.js";import"./makeExternalStore-D55TZi2h.js";import"./Tooltip-Bai_s3dW.js";import"./PopoverPopup-CYRurJWo.js";import"./toNumber-Cpq8CdJL.js";import"./useOsdkClient-C8FLUOGt.js";import"./DropdownField-iO6tjfAa.js";import"./withOsdkMetrics-CdAtkSMD.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
