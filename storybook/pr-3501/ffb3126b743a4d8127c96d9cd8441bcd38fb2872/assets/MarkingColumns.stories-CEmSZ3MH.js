import{f as n,j as t}from"./iframe-3BSrEohR.js";import{O as p}from"./object-table-DlToRIpB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DXeTsVjO.js";import"./Table-C2qMG08V.js";import"./index-7lGm88P6.js";import"./Dialog-CKs607hQ.js";import"./cross-CUEj2Qu9.js";import"./svgIconContainer-DbtnET_h.js";import"./useBaseUiId-BEozV7Vt.js";import"./InternalBackdrop-DYfKSP-W.js";import"./composite-C1x4OMd_.js";import"./index-CQwUyo8q.js";import"./index-hpi8KTY1.js";import"./index-xdDo8YXy.js";import"./useEventCallback-WwuFpiTo.js";import"./SkeletonBar-9q8Ftsbb.js";import"./LoadingCell-Bv5fe8ez.js";import"./ColumnConfigDialog-BALwlruF.js";import"./DraggableList-ClXpqpJp.js";import"./Input-Do5Ts7f3.js";import"./useControlled-D3Z3KMny.js";import"./Button-Ci_aH_Nl.js";import"./small-cross-D9nwNIVe.js";import"./ActionButton-aWL5wICa.js";import"./Checkbox-BmyjCCgg.js";import"./minus-3EYMuIPv.js";import"./useValueChanged-BJzzgK9p.js";import"./caret-down-B1LYPiAa.js";import"./CollapsiblePanel-2o81ebmp.js";import"./MultiColumnSortDialog-CplPapX3.js";import"./MenuTrigger-eZweDM-K.js";import"./CompositeItem-jbQLbkIS.js";import"./ToolbarRootContext-Euk146SV.js";import"./getDisabledMountTransitionStyles-DOcdAk1M.js";import"./getPseudoElementBounds-DxGZ3ugF.js";import"./chevron-down-D8xgu5Kz.js";import"./index-Dubu6YFI.js";import"./error-7gRBPED4.js";import"./BaseCbacBanner-blrfKTgg.js";import"./makeExternalStore-D5lp8aYA.js";import"./Tooltip-3TfJTQ_O.js";import"./PopoverPopup-Bj23N6Nd.js";import"./toNumber-DOT5VYRq.js";import"./useOsdkClient-CZ-Iix3R.js";import"./DropdownField-zvJ8NOGH.js";import"./useStableShapeDefinition-BFwp_P0I.js";import"./withOsdkMetrics-BZku-HG_.js";const er={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,er as default};
