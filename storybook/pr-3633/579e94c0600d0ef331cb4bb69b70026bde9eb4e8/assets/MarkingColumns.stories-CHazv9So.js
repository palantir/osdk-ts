import{f as n,j as t}from"./iframe-BpPL3N54.js";import{O as p}from"./object-table-iVWdo1ow.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D1PYXbeJ.js";import"./Table-BGWajjmT.js";import"./index-Kd2NNqIR.js";import"./Dialog-CXk74w95.js";import"./cross-BJ0QdvuH.js";import"./svgIconContainer-9Pzm5qjd.js";import"./useBaseUiId-C9DsREXo.js";import"./InternalBackdrop-CGQF71it.js";import"./composite-en2PO2eu.js";import"./index-DheQatUS.js";import"./index-C-mPw1Ld.js";import"./index-BCFd2eZP.js";import"./useEventCallback-YXlLtF38.js";import"./SkeletonBar-AIIT-VJx.js";import"./LoadingCell-BSfa4ms0.js";import"./ColumnConfigDialog-CmZwNc3e.js";import"./DraggableList-BYNatC0V.js";import"./search-DqtKkGvQ.js";import"./Input-Cpw5RQEM.js";import"./useControlled-CpFf2mto.js";import"./Button-BoeqI3JJ.js";import"./small-cross-CWqf0vmG.js";import"./ActionButton-X872u3sL.js";import"./Checkbox-D-nf0isV.js";import"./useValueChanged-2iE6mcfQ.js";import"./CollapsiblePanel-yQgnYHEM.js";import"./MultiColumnSortDialog-GOdF4rVZ.js";import"./MenuTrigger-y-B4TUjB.js";import"./CompositeItem-DEp2UQ0X.js";import"./ToolbarRootContext-G90fG1r6.js";import"./getDisabledMountTransitionStyles-C9NNeY-9.js";import"./getPseudoElementBounds-Cxream8Q.js";import"./chevron-down-DkOfUPuv.js";import"./index-CRd_jlZZ.js";import"./error-Czkn31BN.js";import"./BaseCbacBanner-CXnMpnuS.js";import"./makeExternalStore-Co0apv13.js";import"./Tooltip-O6aoWgZl.js";import"./PopoverPopup-BQAUvugs.js";import"./toNumber-DupMMiwu.js";import"./useOsdkClient-BmpwDX8b.js";import"./tick-hfn2aVEQ.js";import"./DropdownField-l0x_cRse.js";import"./withOsdkMetrics-CZtxKDXJ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
