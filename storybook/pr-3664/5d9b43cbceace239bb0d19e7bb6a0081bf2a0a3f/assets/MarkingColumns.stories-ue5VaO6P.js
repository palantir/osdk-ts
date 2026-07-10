import{f as n,j as t}from"./iframe-wdFHGWSX.js";import{O as p}from"./object-table-CXnSTAav.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-lRa11HLR.js";import"./Table-Db__dYu-.js";import"./index-6fSpBBEr.js";import"./Dialog-DpgYQ9fc.js";import"./cross-BDxtbqIF.js";import"./svgIconContainer-B66bzX5w.js";import"./useBaseUiId-BFHOoAwS.js";import"./InternalBackdrop-_573r4se.js";import"./composite-ZTl8PnYY.js";import"./index-C20qzzU3.js";import"./index-B2-SFY1A.js";import"./index-aoPAyyRB.js";import"./useEventCallback-ChkAMAK5.js";import"./SkeletonBar-BeTxX73y.js";import"./LoadingCell-vFqJ-Rmg.js";import"./ColumnConfigDialog-BpQcItW2.js";import"./DraggableList-5CHp1244.js";import"./search-D6UfD1mk.js";import"./Input-CARXx6XT.js";import"./useControlled-DNzAlgaa.js";import"./Button-BAojFwdk.js";import"./small-cross-CP2fkqmb.js";import"./ActionButton-Bt_Epu2m.js";import"./Checkbox-GRoY1-8M.js";import"./useValueChanged-CvBDT23_.js";import"./CollapsiblePanel-Db68UHD2.js";import"./MultiColumnSortDialog-Cw-nJrI4.js";import"./MenuTrigger-DCK3u1eb.js";import"./CompositeItem-Cy_VESaa.js";import"./ToolbarRootContext-BxABkCAF.js";import"./getDisabledMountTransitionStyles-BmUYvwrD.js";import"./getPseudoElementBounds-BPJeyuKO.js";import"./chevron-down-DcqeShV2.js";import"./index-P-S-4BbC.js";import"./error-Cu2wquHT.js";import"./BaseCbacBanner-CpaNN7HS.js";import"./makeExternalStore-BF1biqUn.js";import"./Tooltip-BNN72k1G.js";import"./PopoverPopup-D3vr5SR9.js";import"./toNumber-DhUVIF4m.js";import"./useOsdkClient-CI6HBfvy.js";import"./tick-Cl1RBXCn.js";import"./DropdownField-B6VKVtOx.js";import"./withOsdkMetrics-DDn7vw9i.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
