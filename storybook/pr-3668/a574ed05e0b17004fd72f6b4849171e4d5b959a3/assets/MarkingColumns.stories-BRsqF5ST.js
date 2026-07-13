import{f as n,j as t}from"./iframe-Ot0GxjTr.js";import{O as p}from"./object-table-QGE0eDi0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DFpNKA9O.js";import"./Table-B0s1U3Mq.js";import"./index-BRML9mit.js";import"./Dialog-C3W0URlL.js";import"./cross-CpYxlxRI.js";import"./svgIconContainer-HicdYp2r.js";import"./useBaseUiId-DDlLKIgV.js";import"./InternalBackdrop-CTMLD0aO.js";import"./composite-DP1JrpiD.js";import"./index-Ozw8qwYC.js";import"./index-CxN3dem-.js";import"./index-IsrHjxnC.js";import"./useEventCallback-CwaLfXRC.js";import"./SkeletonBar-9939qlWr.js";import"./LoadingCell-Cjhu9VqR.js";import"./ColumnConfigDialog-CmQIfeyn.js";import"./DraggableList-BajWAPa6.js";import"./search-Br1hTVDJ.js";import"./Input-VABQru-I.js";import"./useControlled-Vo5SReNb.js";import"./Button-BF-MGMty.js";import"./small-cross-DsRgDD5M.js";import"./ActionButton-GxD-BebQ.js";import"./Checkbox-C2xIs2UX.js";import"./useValueChanged-ByBmdMD0.js";import"./CollapsiblePanel-ClNooCfi.js";import"./MultiColumnSortDialog-Bq2KujH8.js";import"./MenuTrigger-CGIOV3Fw.js";import"./CompositeItem-B1d6nBsa.js";import"./ToolbarRootContext-CgP0PFgV.js";import"./getDisabledMountTransitionStyles-BiiqvlVo.js";import"./getPseudoElementBounds-CiEwPnaU.js";import"./chevron-down-3bmQMyw7.js";import"./index-CflU78M4.js";import"./error-FTyzIopn.js";import"./BaseCbacBanner-CeabHNjy.js";import"./makeExternalStore-1z_XAK9i.js";import"./Tooltip-BnCYjbFc.js";import"./PopoverPopup-DJp0AJVa.js";import"./toNumber-B92OSo9e.js";import"./useOsdkClient-D_IquxfU.js";import"./tick-DRbogi8M.js";import"./DropdownField-Yo09_E3E.js";import"./withOsdkMetrics-DUE0eKfQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
