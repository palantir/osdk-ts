import{f as n,j as t}from"./iframe-Dsxw0GBU.js";import{O as p}from"./object-table-CcO61CxZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BnwWVRsr.js";import"./Table-DQbKGgMf.js";import"./index-DPoeuhvQ.js";import"./Dialog-BSx1KBGf.js";import"./cross-CIuUI1ag.js";import"./svgIconContainer-iLTT7Lnw.js";import"./useBaseUiId-Dn2RBhnq.js";import"./InternalBackdrop-BOaLeWv3.js";import"./composite-DOVvnto0.js";import"./index-BD0WDeZd.js";import"./index-CKGM5C8i.js";import"./index-jgi4n0Kg.js";import"./useEventCallback-CRN5p95i.js";import"./SkeletonBar-CeWkzQbU.js";import"./LoadingCell-r6ySHJlG.js";import"./ColumnConfigDialog-BIgczoQz.js";import"./DraggableList-B7NmzgFR.js";import"./search-g4Lu9O_Q.js";import"./Input-CttQmBnh.js";import"./useControlled-G8iNDU9Z.js";import"./Button-DQbdnJ3J.js";import"./small-cross-CuEZW0Dl.js";import"./ActionButton-DIKbnZZn.js";import"./Checkbox-BNZJKx2C.js";import"./useValueChanged-Dxr1wea1.js";import"./CollapsiblePanel-BWY8NHt3.js";import"./MultiColumnSortDialog-sa36swr0.js";import"./MenuTrigger-Ck-5Ifrf.js";import"./CompositeItem-0WcUmr8Z.js";import"./ToolbarRootContext-Dspty5lB.js";import"./getDisabledMountTransitionStyles-Ba8WnLZ8.js";import"./getPseudoElementBounds-DPFsuFuL.js";import"./chevron-down-C7k0uR2B.js";import"./index-CFvaYR46.js";import"./error-DFm0ZNQQ.js";import"./BaseCbacBanner-D6JmbmZY.js";import"./makeExternalStore-X9ZU_bQ2.js";import"./Tooltip-DSCsXlF7.js";import"./PopoverPopup-CsDr2xlC.js";import"./toNumber-D92cPJ9q.js";import"./useOsdkClient-CQY-VXwT.js";import"./tick-BHTYU4cy.js";import"./DropdownField-IOUi76KJ.js";import"./withOsdkMetrics-B4qbEFAW.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
