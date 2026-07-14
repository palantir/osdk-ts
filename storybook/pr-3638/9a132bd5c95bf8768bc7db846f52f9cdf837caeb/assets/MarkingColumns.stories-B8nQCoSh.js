import{f as n,j as t}from"./iframe-CgaSJGms.js";import{O as p}from"./object-table-BAyjctPo.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DlGsqh-w.js";import"./Table-DveZeMXa.js";import"./index-p12yqEBA.js";import"./Dialog-DaLLSO_3.js";import"./cross-DRCEb7OP.js";import"./svgIconContainer-C3Ibj-cG.js";import"./useBaseUiId-D39DBVIB.js";import"./InternalBackdrop-CKvA9-Mq.js";import"./composite-CHM_Xrlu.js";import"./index-C8zT0CUI.js";import"./index-D9n3c3GT.js";import"./index-m450MFHl.js";import"./useEventCallback-Bv3Qwh0U.js";import"./SkeletonBar-BtO-oRoE.js";import"./LoadingCell-BdYrBaaT.js";import"./ColumnConfigDialog-C2XnVZvp.js";import"./DraggableList-CElAX1bR.js";import"./search-egRdoocF.js";import"./Input-cn_9g4lx.js";import"./useControlled-B0Odcszh.js";import"./Button-BrX3zqVY.js";import"./small-cross-BRuITACP.js";import"./ActionButton-DDXYNB3A.js";import"./Checkbox-Bv3Q47qr.js";import"./useValueChanged-B9DLMhOL.js";import"./CollapsiblePanel-l9ept7Ku.js";import"./MultiColumnSortDialog-CgGS2eHt.js";import"./MenuTrigger-CCjxHt9L.js";import"./CompositeItem-BD5vHMJe.js";import"./ToolbarRootContext-ByCsV2PG.js";import"./getDisabledMountTransitionStyles-CXaOoWuT.js";import"./getPseudoElementBounds-BQpXq_rw.js";import"./chevron-down-C_cLuLFO.js";import"./index-DOHBMT4I.js";import"./error-Dn_buZBL.js";import"./BaseCbacBanner-D8VmfF-2.js";import"./makeExternalStore-DR9huws8.js";import"./Tooltip-BMkqJJUI.js";import"./PopoverPopup-Cg2MC_3O.js";import"./toNumber-BnVugD9X.js";import"./useOsdkClient-Co1FOZGz.js";import"./tick-DrFwkT40.js";import"./DropdownField-CCFEjd-y.js";import"./withOsdkMetrics-ztqZgSAs.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
