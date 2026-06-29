import{f as n,j as t}from"./iframe-BVofpPSh.js";import{O as p}from"./object-table-6G22YSJN.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEEggwwT.js";import"./Table-DIIUca_h.js";import"./index-BTjHxjuP.js";import"./Dialog-BO7PyXvd.js";import"./cross-DwYaDImP.js";import"./svgIconContainer-CnHYE5Go.js";import"./useBaseUiId-uza4jYwr.js";import"./InternalBackdrop-JAQw3n7r.js";import"./composite-lLRexDFf.js";import"./index-DZGFA6ki.js";import"./index-BhaDRrZ1.js";import"./index-CS47u5OT.js";import"./useEventCallback-xO7oshYA.js";import"./SkeletonBar-IZTNFp5I.js";import"./LoadingCell-weAaaSiQ.js";import"./ColumnConfigDialog-DyimBgSZ.js";import"./DraggableList-BsDKBWqU.js";import"./search-COWjozv0.js";import"./Input-BRYHbnsp.js";import"./useControlled-DiaUCSUo.js";import"./Button-DpoSBKA6.js";import"./small-cross-DN6Jl0EM.js";import"./ActionButton-DHfun-NX.js";import"./Checkbox-xHidtdRl.js";import"./minus-aIHhCvvz.js";import"./tick-Cma7EK9G.js";import"./useValueChanged-F7d-fQrW.js";import"./caret-down-BRzeDSat.js";import"./CollapsiblePanel-BHTwuMtd.js";import"./MultiColumnSortDialog-DlkU6LRZ.js";import"./MenuTrigger-1U1qNLyo.js";import"./CompositeItem-JswMhmst.js";import"./ToolbarRootContext-ihuBEwJr.js";import"./getDisabledMountTransitionStyles-IfFGCstW.js";import"./getPseudoElementBounds-xIiKhLnn.js";import"./chevron-down-BNqlyXsK.js";import"./index-Dpzcb5_G.js";import"./error-BIF9moR2.js";import"./BaseCbacBanner-CFO7yvPj.js";import"./makeExternalStore-DlGgaZcl.js";import"./Tooltip-BAj-c0m-.js";import"./PopoverPopup-BtF0P5Ev.js";import"./toNumber-BA8rci6l.js";import"./useOsdkClient-CnzJZmEA.js";import"./DropdownField-Bd8xwX15.js";import"./withOsdkMetrics-B2wf_l0T.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
