import{f as n,j as t}from"./iframe-BPUI5Kgo.js";import{O as p}from"./object-table-CynCWfwy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dv33dVL8.js";import"./Table-C0STH1op.js";import"./index-sIKPHGmL.js";import"./Dialog-CtdRKsOp.js";import"./cross-DnWwNXeZ.js";import"./svgIconContainer-uVN3SHWw.js";import"./useBaseUiId-B34XMpQ7.js";import"./InternalBackdrop-CXB1qhRr.js";import"./composite-Bg1PJ1tg.js";import"./index-Z6bfXtiU.js";import"./index-YVZVjFUa.js";import"./index-DDJgvZl7.js";import"./useEventCallback-D_W5o3dY.js";import"./SkeletonBar-NLwDJlgt.js";import"./LoadingCell-CIARiIhi.js";import"./ColumnConfigDialog-CDWNHL4F.js";import"./DraggableList-BgLRg5Bp.js";import"./search-DKhgsfsF.js";import"./Input-uBfJkprS.js";import"./useControlled-D6wbDbTH.js";import"./Button-FZz2m_Q-.js";import"./small-cross-YSnc5YlP.js";import"./ActionButton-CTRRIkfj.js";import"./Checkbox-DtHcC1ES.js";import"./useValueChanged-laMwZPK_.js";import"./CollapsiblePanel-DTCN1XTt.js";import"./MultiColumnSortDialog-uDfrYJl7.js";import"./MenuTrigger-q-9nc21D.js";import"./CompositeItem-DdYQtCue.js";import"./ToolbarRootContext-DmUpdaUF.js";import"./getDisabledMountTransitionStyles-Ltq_aiqH.js";import"./getPseudoElementBounds-IQg7HtC1.js";import"./chevron-down-4jAljgpv.js";import"./index-CMWCvMjE.js";import"./error-qD7A_lnk.js";import"./BaseCbacBanner-Df-0puAM.js";import"./makeExternalStore-BrnuU2nE.js";import"./Tooltip-DM0Iomaf.js";import"./PopoverPopup-CNC63ebP.js";import"./toNumber-DWYzIk8A.js";import"./useOsdkClient-BT85Xf0X.js";import"./tick-CaxfFoRU.js";import"./DropdownField-C-AI_ml6.js";import"./withOsdkMetrics-DhcoXFgw.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
