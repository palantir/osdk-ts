import{f as n,j as t}from"./iframe-BzmiqMlA.js";import{O as p}from"./object-table-Dt3bz_Pr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWDBlvcC.js";import"./Table-BrHGJZ1Q.js";import"./index-awxBpamY.js";import"./Dialog-D1lazOKX.js";import"./cross-BaWVDSt7.js";import"./svgIconContainer-CRKkbXcr.js";import"./useBaseUiId-B5jv3z2Z.js";import"./InternalBackdrop-CchH6x0S.js";import"./composite--zb5EXZT.js";import"./index-DN6rquhH.js";import"./index-DS9dAQh3.js";import"./index-De5f_Vtl.js";import"./useEventCallback-BUCV92cf.js";import"./SkeletonBar-3pG9Qu1r.js";import"./LoadingCell-Tuh72paR.js";import"./ColumnConfigDialog-DUKLrnVF.js";import"./DraggableList-beMCGvrH.js";import"./search-CaDlj1cR.js";import"./Input-D8stKE34.js";import"./useControlled-jiltt0Oe.js";import"./Button-Bo5_QW4H.js";import"./small-cross-DHLqtVKq.js";import"./ActionButton-DIPVPCB_.js";import"./Checkbox-C0nT-z_k.js";import"./useValueChanged-B2L6ond-.js";import"./CollapsiblePanel-CZ6Ho1h-.js";import"./MultiColumnSortDialog-B_LkGz_w.js";import"./MenuTrigger-DYP0PUrh.js";import"./CompositeItem-DbR51llk.js";import"./ToolbarRootContext-BsgmrDDK.js";import"./getDisabledMountTransitionStyles-6yvLqwIR.js";import"./getPseudoElementBounds-DskGH7VY.js";import"./chevron-down-DfO2hlZp.js";import"./index-DKajfwmt.js";import"./error-3H7hzpsi.js";import"./BaseCbacBanner-Cs3yRMNF.js";import"./makeExternalStore-qzzx8i_j.js";import"./Tooltip-BazOuqd6.js";import"./PopoverPopup-CkJCEMUH.js";import"./toNumber-ChNz3iSq.js";import"./useOsdkClient-C1kqxV17.js";import"./tick-So6dEDVK.js";import"./DropdownField-CjrvuFTq.js";import"./withOsdkMetrics-C_7uNmr6.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
