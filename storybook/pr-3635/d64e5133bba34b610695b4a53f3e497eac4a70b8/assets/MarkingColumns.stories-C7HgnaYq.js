import{f as n,j as t}from"./iframe-CG99bj09.js";import{O as p}from"./object-table-DrR2Qrlv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dd1TkT6k.js";import"./Table-V2wOtTXm.js";import"./index-D7gY0hRK.js";import"./Dialog-CBjy7r45.js";import"./cross-t0N6DpLf.js";import"./svgIconContainer-C_F12f5S.js";import"./useBaseUiId-BO8sSlSs.js";import"./InternalBackdrop-CxhYLBPK.js";import"./composite-DWYrv1GA.js";import"./index-BcNI1vjn.js";import"./index-kpJ34CNx.js";import"./index-CrxYXNcV.js";import"./useEventCallback-QuxwqWZT.js";import"./SkeletonBar-BW6qPW8F.js";import"./LoadingCell-BHvMGmom.js";import"./ColumnConfigDialog-BWekz4aD.js";import"./DraggableList-BDzXrT6V.js";import"./search-YjI6pP1Q.js";import"./Input-DbJ4L96L.js";import"./useControlled-DH84q4Fx.js";import"./Button-m3hFNjvl.js";import"./small-cross-veGJYXed.js";import"./ActionButton-YWVPxHbs.js";import"./Checkbox-LAfeeieF.js";import"./useValueChanged-sahMxLNs.js";import"./CollapsiblePanel-CykX4u8j.js";import"./MultiColumnSortDialog-CYwKYUfY.js";import"./MenuTrigger-DfqQok0A.js";import"./CompositeItem-dTebkY1l.js";import"./ToolbarRootContext-BJD50VRL.js";import"./getDisabledMountTransitionStyles-DQ7vmLX8.js";import"./getPseudoElementBounds-DQvmSrKK.js";import"./chevron-down-nVZhB1tH.js";import"./index-yjYJUv2V.js";import"./error-CNV7oJCP.js";import"./BaseCbacBanner-Dhh8C1M1.js";import"./makeExternalStore-BkRDyKI6.js";import"./Tooltip--y96ATrH.js";import"./PopoverPopup-DBc_xp7Q.js";import"./toNumber-BKsKWNEq.js";import"./useOsdkClient-CCkjSK1u.js";import"./tick-BemPLEPb.js";import"./DropdownField-CbaEKPdy.js";import"./withOsdkMetrics-CvLx9GEQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
