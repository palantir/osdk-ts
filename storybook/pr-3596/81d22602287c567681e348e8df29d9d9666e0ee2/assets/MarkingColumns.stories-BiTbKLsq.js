import{f as n,j as t}from"./iframe-D0SoGzlw.js";import{O as p}from"./object-table-CWdPpm-w.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZb8OqUn.js";import"./Table-DTFwxP1Z.js";import"./index-NIcpiCuB.js";import"./Dialog-CUiiEYW7.js";import"./cross-B7-LJPHp.js";import"./svgIconContainer-DtLLs9FE.js";import"./useBaseUiId-0iVEX2QT.js";import"./InternalBackdrop-XOeF0jZ0.js";import"./composite-CiiEyupo.js";import"./index-Dokg2UqZ.js";import"./index--L61Dm0x.js";import"./index-DWvOPFpb.js";import"./useEventCallback-DjixT7t_.js";import"./SkeletonBar-wMpRaxcX.js";import"./LoadingCell-BDx765CK.js";import"./ColumnConfigDialog-DnqosaFW.js";import"./DraggableList-D15gStUs.js";import"./search-bfQtBKKt.js";import"./Input-Bn3p-c3n.js";import"./useControlled-Bi-kOtn8.js";import"./Button-6j7tEnHD.js";import"./small-cross-BgRvRrt5.js";import"./ActionButton-BhK-S006.js";import"./Checkbox-B7a0uavd.js";import"./minus-DvLGBYZX.js";import"./tick-D_QyMkmN.js";import"./useValueChanged-B63CMQDQ.js";import"./caret-down-DFDSgNRy.js";import"./CollapsiblePanel-CSagtLWS.js";import"./MultiColumnSortDialog-6sR8BZaW.js";import"./MenuTrigger-CUlueeaV.js";import"./CompositeItem-MAxqLPAf.js";import"./ToolbarRootContext-Xkrq5RfV.js";import"./getDisabledMountTransitionStyles-Bc5E5XVH.js";import"./getPseudoElementBounds-Cn12-CzF.js";import"./chevron-down-CAk4Pwea.js";import"./index-D8ICdijG.js";import"./error-CceLIcCi.js";import"./BaseCbacBanner-DAxaT8mK.js";import"./makeExternalStore-T88Wdozc.js";import"./Tooltip-Dgly_8KV.js";import"./PopoverPopup-BJxU45Dg.js";import"./toNumber-CG_mRwlH.js";import"./useOsdkClient-BFsEmlPp.js";import"./DropdownField-9VzvYka8.js";import"./withOsdkMetrics-DNsUUKzg.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
