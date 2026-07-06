import{f as n,j as t}from"./iframe-CYo6CiSW.js";import{O as p}from"./object-table-DxYAw0mr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D7uMhHX5.js";import"./index-D0BEHZ8E.js";import"./Dialog-CSqtlWuG.js";import"./cross-BA1oqCdG.js";import"./svgIconContainer-CZoDcPlY.js";import"./useBaseUiId-CGeh8fiR.js";import"./InternalBackdrop-DGsGe-n5.js";import"./composite-Btm2J3-G.js";import"./index-D4V2Qtkn.js";import"./index-Bj9nqPhI.js";import"./index-BjmW3Q64.js";import"./useEventCallback-Bu8stj8x.js";import"./SkeletonBar-C-v5oG6-.js";import"./LoadingCell-r-ThUUFk.js";import"./ColumnConfigDialog-TY4UHxl7.js";import"./DraggableList-LOpEnq0K.js";import"./search-BZAdPc3p.js";import"./Input-GMVgYJUU.js";import"./useControlled-CpRbGX2p.js";import"./Button-DoUQZBb0.js";import"./small-cross-D-jBJnOS.js";import"./ActionButton-DGAsEdjH.js";import"./Checkbox-DXZAoBxY.js";import"./useValueChanged-CvggYWt-.js";import"./CollapsiblePanel-DSVvavMI.js";import"./MultiColumnSortDialog-B1LH2uRv.js";import"./MenuTrigger-Bb2vMEEW.js";import"./CompositeItem-BsIfQOx7.js";import"./ToolbarRootContext-B0KGcaQb.js";import"./getDisabledMountTransitionStyles-DwYYsBys.js";import"./getPseudoElementBounds-134PNsnD.js";import"./chevron-down-BdsIpzfe.js";import"./index-DRoFMQrY.js";import"./error-BYsFvbmv.js";import"./BaseCbacBanner-BTUwLolP.js";import"./makeExternalStore-C8pjQNBm.js";import"./Tooltip-DdMUe_Y_.js";import"./PopoverPopup-vhOJU3z9.js";import"./toNumber-DfF7HVnw.js";import"./useOsdkClient-Rhc9BrSS.js";import"./tick-C2F3nJMk.js";import"./DropdownField-DjUCjKVt.js";import"./withOsdkMetrics-DgFipaZR.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
