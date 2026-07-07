import{f as n,j as t}from"./iframe-ByDoaX8C.js";import{O as p}from"./object-table-B4s1UFGC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvaD9OZJ.js";import"./Table-DtzJcIyu.js";import"./index-GlKsUbbN.js";import"./Dialog-WnfpOUhI.js";import"./cross-Ci6Jj7x1.js";import"./svgIconContainer-D6ZV2OEK.js";import"./useBaseUiId-Dg_IP9k7.js";import"./InternalBackdrop-DyvSIoaM.js";import"./composite-DgARTLK0.js";import"./index-C6mHMKVD.js";import"./index-Q91mkqBj.js";import"./index-Cfk96ae3.js";import"./useEventCallback-z-4VOS-y.js";import"./SkeletonBar-CAKqy4Iy.js";import"./LoadingCell-Dyhq0AEz.js";import"./ColumnConfigDialog-yY-P5Usw.js";import"./DraggableList-Bx8kyLAi.js";import"./search-CAxEEjAo.js";import"./Input-r_6ftysT.js";import"./useControlled-61dg8lwC.js";import"./Button-CKKva8Mx.js";import"./small-cross-BN-OtsFI.js";import"./ActionButton-CzO_Ooaq.js";import"./Checkbox-CKt3XeTh.js";import"./useValueChanged-DEqCFRJS.js";import"./CollapsiblePanel-DL72uGeG.js";import"./MultiColumnSortDialog-CJIcA-mR.js";import"./MenuTrigger-DK1eGV3Y.js";import"./CompositeItem-5O_RuQIb.js";import"./ToolbarRootContext-BjgxX-Yn.js";import"./getDisabledMountTransitionStyles-C0f87Td7.js";import"./getPseudoElementBounds-BWRU3yF6.js";import"./chevron-down-CHlnzCkk.js";import"./index-BFHbPmzA.js";import"./error-De-72miU.js";import"./BaseCbacBanner-WS0hGwkD.js";import"./makeExternalStore-Bk6gHyl4.js";import"./Tooltip-ChZlEBJK.js";import"./PopoverPopup-ME3HcHE8.js";import"./toNumber-CyzCGxIs.js";import"./useOsdkClient-D_suE_xa.js";import"./tick-BgKJSYQZ.js";import"./DropdownField-B4oL-lyo.js";import"./withOsdkMetrics-BN9BRjTK.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
