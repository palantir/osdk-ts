import{f as n,j as t}from"./iframe-B0-tfh-c.js";import{O as p}from"./object-table-CElfWeNF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4hPIoyS.js";import"./Table-mBvKtU6c.js";import"./index-o6pOtgsT.js";import"./Dialog-BtNFg0Ba.js";import"./cross-CFyLhWV7.js";import"./svgIconContainer-C4aEhaYY.js";import"./useBaseUiId-DDUM07aX.js";import"./InternalBackdrop-5pNvJy8O.js";import"./composite-CRiuV0VN.js";import"./index-ClBRmNFr.js";import"./index-ofPqUom8.js";import"./index-CJexmYyu.js";import"./useEventCallback-CWKyC5RZ.js";import"./SkeletonBar-CCO1GM2C.js";import"./LoadingCell-BZ79Bdzq.js";import"./ColumnConfigDialog-HnPNdC-B.js";import"./DraggableList-C8t2my7k.js";import"./search-BjuITscC.js";import"./Input-CI58F6cK.js";import"./useControlled-CG0ODf7u.js";import"./Button-K8sSc9Ht.js";import"./small-cross-DHPKCqpp.js";import"./ActionButton-C_BPPDTi.js";import"./Checkbox-B_wZyMqm.js";import"./minus-CwuL6HIZ.js";import"./tick-CUoDPsNU.js";import"./useValueChanged-C3NzWCCQ.js";import"./caret-down-CAbKK5RA.js";import"./CollapsiblePanel-DqemgMga.js";import"./MultiColumnSortDialog-B6RPN2xx.js";import"./MenuTrigger-BUyPg5bA.js";import"./CompositeItem-QSA7DLWZ.js";import"./ToolbarRootContext-r7uc7AQy.js";import"./getDisabledMountTransitionStyles-D0bOjwBI.js";import"./getPseudoElementBounds-o4-IXSHe.js";import"./chevron-down-BISz4od6.js";import"./index-BR6Ge-EQ.js";import"./error-uUmuq0xV.js";import"./BaseCbacBanner-BFmc9EC8.js";import"./makeExternalStore-CoNXTWCW.js";import"./Tooltip-wJyh24UO.js";import"./PopoverPopup-CjVD96Kv.js";import"./toNumber-BnfL6wwZ.js";import"./useOsdkClient-DdcNgGVt.js";import"./DropdownField-BruiB-yV.js";import"./withOsdkMetrics-DEML7v4G.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
