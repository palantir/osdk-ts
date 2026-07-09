import{f as n,j as t}from"./iframe-DWEd8R5S.js";import{O as p}from"./object-table-BQYXx6Sh.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DaUUOo99.js";import"./Table-vSxvKiI4.js";import"./index-Bx2-BOWB.js";import"./Dialog-shegLIpG.js";import"./cross-CIyh67fQ.js";import"./svgIconContainer-DYa-snY3.js";import"./useBaseUiId-BT71ztVg.js";import"./InternalBackdrop-D4040NIW.js";import"./composite-CW0CiqnD.js";import"./index-Bk_7zHvh.js";import"./index-BmArJPg7.js";import"./index-B76Djo_M.js";import"./useEventCallback-CMPfjsDH.js";import"./SkeletonBar-xQLbCmqn.js";import"./LoadingCell-BqQ_dhf9.js";import"./ColumnConfigDialog-ni9CCV48.js";import"./DraggableList-f0Y3nDTe.js";import"./search-BatkawE8.js";import"./Input-e2BlZYyr.js";import"./useControlled-BsSB664s.js";import"./Button-CWxV8aT7.js";import"./small-cross-CqhNHbOD.js";import"./ActionButton-Bp4G_TLc.js";import"./Checkbox-BIzafXdB.js";import"./useValueChanged-MtFkhlwR.js";import"./CollapsiblePanel-s14SXLDg.js";import"./MultiColumnSortDialog-CcNNh_5J.js";import"./MenuTrigger-CqIbaU9h.js";import"./CompositeItem-Rxk0y0MX.js";import"./ToolbarRootContext-DdCLIGah.js";import"./getDisabledMountTransitionStyles-BEacv5Ei.js";import"./getPseudoElementBounds-CoLU2SPr.js";import"./chevron-down-DoQfAY-o.js";import"./index-BNwSOPVh.js";import"./error-CqZhAlyz.js";import"./BaseCbacBanner-DQbKEs1D.js";import"./makeExternalStore-C-VusiHF.js";import"./Tooltip-Cd0vVKnL.js";import"./PopoverPopup-BUYjansb.js";import"./toNumber-DE-f5MJi.js";import"./useOsdkClient-THEH0hd1.js";import"./tick-DSHwV_qK.js";import"./DropdownField-jKMHiRAs.js";import"./withOsdkMetrics-4IHHHIkN.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
