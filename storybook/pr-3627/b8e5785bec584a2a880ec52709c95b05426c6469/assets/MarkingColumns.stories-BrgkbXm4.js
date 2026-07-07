import{f as n,j as t}from"./iframe-CKGsYlL3.js";import{O as p}from"./object-table-DhiT4yQy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5_AcwHL.js";import"./Table-B1aTXYlq.js";import"./index-Bx0tKmFZ.js";import"./Dialog-k4xGR0d7.js";import"./cross-BQKCm2uo.js";import"./svgIconContainer-Dufm_U67.js";import"./useBaseUiId-BM2mKp6x.js";import"./InternalBackdrop-D6_V1t1F.js";import"./composite-Cn5fnswO.js";import"./index-Bwbgkj51.js";import"./index-CxFoDY87.js";import"./index-CCJmYNV0.js";import"./useEventCallback-oFWStxnl.js";import"./SkeletonBar-piUFx7aS.js";import"./LoadingCell-Dihlf0nf.js";import"./ColumnConfigDialog-DnVq8NdW.js";import"./DraggableList-DXC1qMas.js";import"./search-BVZzJD28.js";import"./Input-DIB0gIqF.js";import"./useControlled-DYnKoOxV.js";import"./Button-F5mbE45g.js";import"./small-cross-DNrh-WdA.js";import"./ActionButton-DV3naqyf.js";import"./Checkbox-B9dLz82F.js";import"./useValueChanged-SpqWbaTd.js";import"./CollapsiblePanel-oV0mT02Z.js";import"./MultiColumnSortDialog-D4D45Hz4.js";import"./MenuTrigger-Bnu6NHh7.js";import"./CompositeItem-CSKIQkVe.js";import"./ToolbarRootContext-C3AlTUaZ.js";import"./getDisabledMountTransitionStyles-BCACnq_3.js";import"./getPseudoElementBounds-CbOeQKAj.js";import"./chevron-down-BSPC3sc1.js";import"./index-C1Mn403H.js";import"./error-BZiJX6vH.js";import"./BaseCbacBanner-DI1whGQT.js";import"./makeExternalStore-DgODZvRh.js";import"./Tooltip-ByJeAVbr.js";import"./PopoverPopup-BZ2FlQe8.js";import"./toNumber-HoiP0jnY.js";import"./useOsdkClient-UdeX4_rM.js";import"./tick-D81xquKA.js";import"./DropdownField-C_baTzbm.js";import"./withOsdkMetrics-BMeFLA1P.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
