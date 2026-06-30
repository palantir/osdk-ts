import{f as n,j as t}from"./iframe-D1OesapM.js";import{O as p}from"./object-table-BaWM8RD6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CWyFRo_B.js";import"./Table-BW_Pl1mb.js";import"./index-DMtCjLJY.js";import"./Dialog-CYTfIcx6.js";import"./cross-feoG7Ztk.js";import"./svgIconContainer-DXytnXt-.js";import"./useBaseUiId-kB4ggmLy.js";import"./InternalBackdrop-CYdFXR70.js";import"./composite-vHTE3Mr2.js";import"./index-Duv15EQw.js";import"./index-iLiemBjV.js";import"./index-C8Su04u8.js";import"./useEventCallback-2a2Izdjn.js";import"./SkeletonBar-3VbWmyu6.js";import"./LoadingCell-BnwtoBA7.js";import"./ColumnConfigDialog-B1oW35rJ.js";import"./DraggableList-BANago59.js";import"./search-BDr6JmbH.js";import"./Input-D9xER9fc.js";import"./useControlled-8kjH-NtT.js";import"./Button-CSxxyQxV.js";import"./small-cross-8YnFw4Gn.js";import"./ActionButton-BGGJkZUK.js";import"./Checkbox-DeHPN0NX.js";import"./minus-D6vzs1_J.js";import"./tick-DVC0a0EC.js";import"./useValueChanged-CDpYfx-I.js";import"./caret-down-BdwUfNpl.js";import"./CollapsiblePanel-1ZcOrG5F.js";import"./MultiColumnSortDialog-D186DMo3.js";import"./MenuTrigger-46a9wUgq.js";import"./CompositeItem-c0SeRm0i.js";import"./ToolbarRootContext-K7kL1Y4Z.js";import"./getDisabledMountTransitionStyles-DnY5N2AM.js";import"./getPseudoElementBounds-CBWmDnAi.js";import"./chevron-down-rIZQARrO.js";import"./index-Ck-dowE7.js";import"./error-BGk2V_gx.js";import"./BaseCbacBanner-abXmKDnF.js";import"./makeExternalStore-C7V9DMZC.js";import"./Tooltip-_dvMbNte.js";import"./PopoverPopup-CMVbsORE.js";import"./toNumber-BlRyUMU9.js";import"./useOsdkClient-Bzqt_ecX.js";import"./DropdownField-BTE9uSUn.js";import"./withOsdkMetrics-BIdW4CAc.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
