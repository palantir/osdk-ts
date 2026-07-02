import{f as n,j as t}from"./iframe-BMWLVu1B.js";import{O as p}from"./object-table-i9WgEze4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CD98YvT3.js";import"./Table-BFOswdeX.js";import"./index-C_CSLeaI.js";import"./Dialog-DeFB76Vj.js";import"./cross-p8R5_cfS.js";import"./svgIconContainer-ChJGYcue.js";import"./useBaseUiId-rgc-9xpG.js";import"./InternalBackdrop-DItb8lzc.js";import"./composite-DYUx8nh9.js";import"./index-4cLeK3Jc.js";import"./index-AHIlm2Fz.js";import"./index-BRyr8IxN.js";import"./useEventCallback-DCHEtQGe.js";import"./SkeletonBar-CCGVdtwF.js";import"./LoadingCell-Bsxd82cy.js";import"./ColumnConfigDialog-Buxs6f2Q.js";import"./DraggableList-qAQW-i3j.js";import"./search-DgKFphhq.js";import"./Input-EoHvS4g1.js";import"./useControlled-Bfojft4Y.js";import"./Button-Bk--HmG4.js";import"./small-cross-DZPDKuqE.js";import"./ActionButton-BiA-j-C5.js";import"./Checkbox-B58GmySO.js";import"./minus-BI_eIHcn.js";import"./tick-Dfrbbqt6.js";import"./useValueChanged-s5kHSGX3.js";import"./caret-down-DI3xHQly.js";import"./CollapsiblePanel-QxNjDlEm.js";import"./MultiColumnSortDialog-Dp6jmXwG.js";import"./MenuTrigger-BNh8e055.js";import"./CompositeItem-XO12oXBx.js";import"./ToolbarRootContext-DfTMi3Dg.js";import"./getDisabledMountTransitionStyles-DO9tsb_K.js";import"./getPseudoElementBounds-DPs4iUYT.js";import"./chevron-down-CmjTA-FB.js";import"./index-pGHJ9wYX.js";import"./error-CLqxyRzW.js";import"./BaseCbacBanner-D8l3dUrd.js";import"./makeExternalStore-D9Kx5fbz.js";import"./Tooltip-a-gM-vdW.js";import"./PopoverPopup-BYr72FP1.js";import"./toNumber-BPNbPaP1.js";import"./useOsdkClient-BRug10vB.js";import"./DropdownField-aayoHhfJ.js";import"./withOsdkMetrics-CM4amC2X.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
