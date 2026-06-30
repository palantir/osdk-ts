import{f as n,j as t}from"./iframe-Bvhm8qfU.js";import{O as p}from"./object-table-_L17rpGR.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--aEUszXl.js";import"./Table-DIG54T7i.js";import"./index-B7oRpfat.js";import"./Dialog-Cr9OTB_2.js";import"./cross-BKXPnGR1.js";import"./svgIconContainer-DZYyFwVB.js";import"./useBaseUiId-DHD1p1ck.js";import"./InternalBackdrop-S8Xu3mx0.js";import"./composite-DZlEutUv.js";import"./index-B818tD1j.js";import"./index-e0iBKkiM.js";import"./index-COUgQ4kH.js";import"./useEventCallback-DWisbH3Y.js";import"./SkeletonBar-DPi66zfJ.js";import"./LoadingCell-qCWKfTH6.js";import"./ColumnConfigDialog-BT1VdOF-.js";import"./DraggableList--o9pyCLA.js";import"./search-BYPKe0WR.js";import"./Input-DHF7KtGa.js";import"./useControlled-CPLk0KIM.js";import"./Button-DYNdP7JI.js";import"./small-cross-iQVthjuW.js";import"./ActionButton-Zw3JA-TU.js";import"./Checkbox-DuqpPHir.js";import"./minus-CQerWD_S.js";import"./tick-BmNvfWRq.js";import"./useValueChanged-CwoLDn5R.js";import"./caret-down-BDWPWkks.js";import"./CollapsiblePanel-iWnkQfav.js";import"./MultiColumnSortDialog-IB4CDF0Y.js";import"./MenuTrigger-BQBx1rco.js";import"./CompositeItem-Cl4tN66p.js";import"./ToolbarRootContext-DMaSL3sx.js";import"./getDisabledMountTransitionStyles-BxfFVPMZ.js";import"./getPseudoElementBounds-C4W3UBm_.js";import"./chevron-down-uu59Pobx.js";import"./index-Bmso51pm.js";import"./error-CK_pKYgQ.js";import"./BaseCbacBanner-B_TRt7hF.js";import"./makeExternalStore-eTGShPFZ.js";import"./Tooltip-CIjvdolK.js";import"./PopoverPopup-2zPZquuY.js";import"./toNumber-CTEbi8Hp.js";import"./useOsdkClient-9Es9m4k8.js";import"./DropdownField-6gm7YSEz.js";import"./withOsdkMetrics-Dg2bW5Vf.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
