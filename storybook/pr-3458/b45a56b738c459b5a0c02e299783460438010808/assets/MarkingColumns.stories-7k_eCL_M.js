import{f as n,j as t}from"./iframe-QL9jjgtT.js";import{O as p}from"./object-table-CoBjn76Y.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BNL5tg_R.js";import"./Table-BgmV8nHI.js";import"./index-C7yMPf9I.js";import"./Dialog-HEz90GT_.js";import"./cross-D9J_OWJu.js";import"./svgIconContainer-Cq56KS1n.js";import"./useBaseUiId-CS5_kO7T.js";import"./InternalBackdrop-dMCOSWZN.js";import"./composite-TMeVl6ts.js";import"./index-CyfCophj.js";import"./index-B5jORrz6.js";import"./index-Bp7Secbs.js";import"./useEventCallback-BAGaJExi.js";import"./SkeletonBar-o4YrDjze.js";import"./LoadingCell-B1FdUSkv.js";import"./ColumnConfigDialog-D0TZEq0p.js";import"./DraggableList--727y8ri.js";import"./search-Bzm9Q_D2.js";import"./Input-BxbdEwYe.js";import"./useControlled-jF4Qz43A.js";import"./Button-BrIIDNdE.js";import"./small-cross-BlwMF1mi.js";import"./ActionButton-_emLHmrN.js";import"./Checkbox-BtpzFLPf.js";import"./useValueChanged-sHyrOuAt.js";import"./CollapsiblePanel-CrPCsQIn.js";import"./MultiColumnSortDialog-DV8E_opP.js";import"./MenuTrigger-D-gw6xFK.js";import"./CompositeItem-Uw6eZL9e.js";import"./ToolbarRootContext-CwQjdto9.js";import"./getDisabledMountTransitionStyles-DOsFMt1y.js";import"./getPseudoElementBounds-DzdN-phT.js";import"./chevron-down-DBVO4jIp.js";import"./index-CcNAU_ui.js";import"./error-H-jfmF3B.js";import"./BaseCbacBanner-BfSBwlX8.js";import"./makeExternalStore-DJkBOpRI.js";import"./Tooltip-8lmuVpJT.js";import"./PopoverPopup-CR9e5ueR.js";import"./toNumber-DlRBEMAk.js";import"./useOsdkClient-1wnjy4kN.js";import"./tick-BfKYHNPN.js";import"./DropdownField-Cx6elCj5.js";import"./withOsdkMetrics-Dst5838R.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
