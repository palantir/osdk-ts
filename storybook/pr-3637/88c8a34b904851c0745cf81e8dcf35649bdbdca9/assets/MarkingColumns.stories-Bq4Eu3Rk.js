import{f as n,j as t}from"./iframe-DgFlFSqw.js";import{O as p}from"./object-table-B-W0kj0X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CPoJgLbD.js";import"./Table-B_Zr-Z1A.js";import"./index-Sjlr9OZ9.js";import"./Dialog-BTxhEZr7.js";import"./cross-e7LLecP3.js";import"./svgIconContainer-Ck7R7GNS.js";import"./useBaseUiId-CzClm8lS.js";import"./InternalBackdrop-CDItLFAr.js";import"./composite-Bx4vJwHl.js";import"./index-DcRi5XsN.js";import"./index-y9Siuh-t.js";import"./index-B-oU2C7D.js";import"./useEventCallback-DQPwpf7n.js";import"./SkeletonBar-DFZ9ilJ3.js";import"./LoadingCell-D0Z-MHXr.js";import"./ColumnConfigDialog-CgtXCNeN.js";import"./DraggableList-Dre2Y9az.js";import"./search-aooxb7DJ.js";import"./Input-D8O5iNKf.js";import"./useControlled-DSXoNmS_.js";import"./Button-1vOL_hWG.js";import"./small-cross-DLycRwdO.js";import"./ActionButton-CMdIib0U.js";import"./Checkbox-CT3X67_H.js";import"./useValueChanged-NINTeSM4.js";import"./CollapsiblePanel-BNeL23Hk.js";import"./MultiColumnSortDialog-Dl9ZcKnL.js";import"./MenuTrigger-BoirjXme.js";import"./CompositeItem-DXDg3-3M.js";import"./ToolbarRootContext-CNkFj6wl.js";import"./getDisabledMountTransitionStyles-BzPRhQXj.js";import"./getPseudoElementBounds-CoSLbHUu.js";import"./chevron-down-hXDZjWMC.js";import"./index-BmyBsxbp.js";import"./error-C5R6qt22.js";import"./BaseCbacBanner-B4j9H-ld.js";import"./makeExternalStore-DsAyUeWV.js";import"./Tooltip-DGBUjh4K.js";import"./PopoverPopup-hE5AthEw.js";import"./toNumber-BOLj3o8x.js";import"./useOsdkClient-CTWveBZp.js";import"./tick-jBNzmjU9.js";import"./DropdownField-BqGa9g4k.js";import"./withOsdkMetrics-CvKuYVbO.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
