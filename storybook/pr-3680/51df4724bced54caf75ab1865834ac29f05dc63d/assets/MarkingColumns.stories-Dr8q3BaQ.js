import{f as n,j as t}from"./iframe-SSBca1_R.js";import{O as p}from"./object-table-eI1REZnt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6lMjEDW.js";import"./Table-gDPNQflO.js";import"./index-T2URQXQt.js";import"./Dialog-FJNO6X3A.js";import"./cross-DYAXqWW2.js";import"./svgIconContainer-HIapwXRy.js";import"./useBaseUiId-fawM7YtQ.js";import"./InternalBackdrop-CYltc76d.js";import"./composite-bxrdsVsm.js";import"./index-oSaY7MBE.js";import"./index-D5eHMYsk.js";import"./index-D1IU3UoT.js";import"./useEventCallback-BE-rHAoV.js";import"./SkeletonBar-SY4-I8ex.js";import"./LoadingCell-BR1o5Zw2.js";import"./ColumnConfigDialog-CDpXdU8n.js";import"./DraggableList-oL-YXs7b.js";import"./search-BN4BO4pT.js";import"./Input-CtJlf2nQ.js";import"./useControlled-CS_or-Yo.js";import"./Button-AgdhMTFe.js";import"./small-cross-DlueUKug.js";import"./ActionButton-1AWrtehL.js";import"./Checkbox-B0B_p0eJ.js";import"./useValueChanged-vlKczkI-.js";import"./CollapsiblePanel-zU15W0hu.js";import"./MultiColumnSortDialog-D-u4mprB.js";import"./MenuTrigger-LixJ7p37.js";import"./CompositeItem-B3hudRrX.js";import"./ToolbarRootContext-B6NfFDs2.js";import"./getDisabledMountTransitionStyles-wpvuQ_AK.js";import"./getPseudoElementBounds-BAf-9M6V.js";import"./chevron-down-Dab1IKra.js";import"./index-CqFgTtxT.js";import"./error-Bjv06Ito.js";import"./BaseCbacBanner-BE8wRz52.js";import"./makeExternalStore-BXWK3of-.js";import"./Tooltip-C6NhCjRK.js";import"./PopoverPopup-vmNf94TZ.js";import"./toNumber-5drVQXfr.js";import"./useOsdkClient-BGW2VwEq.js";import"./tick-nfy2KtcF.js";import"./DropdownField-BbXSNHsk.js";import"./withOsdkMetrics-D7v0VQYr.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
