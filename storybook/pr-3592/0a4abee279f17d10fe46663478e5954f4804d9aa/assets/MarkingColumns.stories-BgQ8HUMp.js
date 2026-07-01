import{f as n,j as t}from"./iframe-BZiD4dB8.js";import{O as p}from"./object-table-apGjJxQt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DR7LWHEJ.js";import"./Table-BGrBK0LP.js";import"./index-CRMEJFID.js";import"./Dialog-jiHNFcJc.js";import"./cross-CaoaPxqf.js";import"./svgIconContainer--TZqu1uj.js";import"./useBaseUiId-BxRNlOB2.js";import"./InternalBackdrop-C4L7n-3z.js";import"./composite-C9S8ZKEE.js";import"./index-CMNXWmqT.js";import"./index-DW3PGEUA.js";import"./index-SHqajPDw.js";import"./useEventCallback-Be01qCFF.js";import"./SkeletonBar-BgsyoHBV.js";import"./LoadingCell-BzBCtOuE.js";import"./ColumnConfigDialog-Bdb_pD7a.js";import"./DraggableList-D8EPxT49.js";import"./search-CLnJLT11.js";import"./Input-duFg7CPv.js";import"./useControlled-DEDmQHxU.js";import"./Button-CROPbfSK.js";import"./small-cross-BMAH22f8.js";import"./ActionButton-8IgzWD4y.js";import"./Checkbox-DBk2XKjP.js";import"./minus-BBgQxbOW.js";import"./tick-CNyN2IxQ.js";import"./useValueChanged-BVcPkk5K.js";import"./caret-down-DETKlPEv.js";import"./CollapsiblePanel-glwC9Nzh.js";import"./MultiColumnSortDialog-D5PigFhU.js";import"./MenuTrigger-DiMkXrOG.js";import"./CompositeItem-DUVari45.js";import"./ToolbarRootContext-B11PSfpo.js";import"./getDisabledMountTransitionStyles-CuHCOVlX.js";import"./getPseudoElementBounds-BTy4GSr-.js";import"./chevron-down-vgV-93jB.js";import"./index-DCMkWzvN.js";import"./error-CDNBuFLS.js";import"./BaseCbacBanner-CZO5rCtQ.js";import"./makeExternalStore-BN0_OllU.js";import"./Tooltip-CLtZZOFq.js";import"./PopoverPopup-a3oxtfS2.js";import"./toNumber-BBAYN7I4.js";import"./useOsdkClient-B0kN0hUK.js";import"./DropdownField-CQ92nZHG.js";import"./withOsdkMetrics-BMAbK5si.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
