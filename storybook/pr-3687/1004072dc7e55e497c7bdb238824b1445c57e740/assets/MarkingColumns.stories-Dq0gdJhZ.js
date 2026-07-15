import{f as n,j as t}from"./iframe-BLN3c0ny.js";import{O as p}from"./object-table-BRQiEtNc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YNn4sAzm.js";import"./Table-BqBpAO8B.js";import"./index-C2W4mW7k.js";import"./Dialog-D1zYTuGJ.js";import"./cross-BI_OHT9E.js";import"./svgIconContainer-BdZesHFS.js";import"./useBaseUiId-CXuD1HYt.js";import"./InternalBackdrop-Dy3--uK1.js";import"./composite-Nm1NmS0N.js";import"./index-DbM9L159.js";import"./index-BeAUbI1J.js";import"./index-iWYhYSYV.js";import"./useEventCallback-BS-UwOoJ.js";import"./SkeletonBar-tcUQ8Ewk.js";import"./LoadingCell-DMki7SqR.js";import"./ColumnConfigDialog-DSDZHNtL.js";import"./DraggableList-C0sv1MFz.js";import"./search-BLsF3Nkl.js";import"./Input-CApTyOle.js";import"./useControlled-DHQ1gK1Z.js";import"./Button-Cg8SRRwY.js";import"./small-cross-NKa0ncfv.js";import"./ActionButton-DVBx-J9R.js";import"./Checkbox-DXPAj_mn.js";import"./useValueChanged-CI08ean9.js";import"./CollapsiblePanel-CiBqDfSD.js";import"./MultiColumnSortDialog-CGfxAi10.js";import"./MenuTrigger-BtbO1Shb.js";import"./CompositeItem-DwO22Lb_.js";import"./ToolbarRootContext-BUImLfjc.js";import"./getDisabledMountTransitionStyles-Dd7VVNVU.js";import"./getPseudoElementBounds-ciSWEQDm.js";import"./chevron-down-CuzDNcNa.js";import"./index-BRP9fXLP.js";import"./error-B6PTXWnS.js";import"./BaseCbacBanner-B9Cq4apT.js";import"./makeExternalStore-CIYI4EDM.js";import"./Tooltip-DPeaRUh3.js";import"./PopoverPopup-D7-vXjkP.js";import"./toNumber-DNMr4FP3.js";import"./useOsdkClient-da_YBg30.js";import"./tick-dIj8THiq.js";import"./DropdownField-BhW6h_q5.js";import"./withOsdkMetrics-DkRRLrbq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
