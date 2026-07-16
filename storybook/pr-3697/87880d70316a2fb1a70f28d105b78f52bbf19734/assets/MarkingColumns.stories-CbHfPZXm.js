import{f as n,j as t}from"./iframe-V5Dsqq0d.js";import{O as p}from"./object-table-D_KLyo-Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bthw__r8.js";import"./Table-vC_SWQNL.js";import"./index-B75_VI1p.js";import"./Dialog-D5KSGijj.js";import"./cross-jbRB2TJp.js";import"./svgIconContainer-Cz3IKSsl.js";import"./useBaseUiId-DXRKShIH.js";import"./InternalBackdrop-D3crDW5k.js";import"./composite-hb-h17Su.js";import"./index-DgUBVLOU.js";import"./index-_BMAZb8P.js";import"./index-BXMNk3j9.js";import"./useEventCallback-B_UvXy6b.js";import"./SkeletonBar-BcKt417-.js";import"./LoadingCell-CdJqbP4U.js";import"./ColumnConfigDialog-C_XvrYBS.js";import"./DraggableList-DVIeIBSF.js";import"./search-Dfvk5b0g.js";import"./Input-Ck61Hw0f.js";import"./useControlled-B6wVKPoP.js";import"./Button-tYsz5pPM.js";import"./small-cross-D1AsSP7V.js";import"./ActionButton-KYeFq5X2.js";import"./Checkbox-50ox9mob.js";import"./useValueChanged-BQSQ7Her.js";import"./CollapsiblePanel-DtYk5wKa.js";import"./MultiColumnSortDialog-DneAdahx.js";import"./MenuTrigger-8q0KjjAa.js";import"./CompositeItem-DctY2Vmm.js";import"./ToolbarRootContext-Dxo6gOUC.js";import"./getDisabledMountTransitionStyles-TqeppgoQ.js";import"./getPseudoElementBounds-Ci1WT3yL.js";import"./chevron-down-CweBSDsu.js";import"./index-xE_yDc94.js";import"./error-BmuFdri0.js";import"./BaseCbacBanner-DMnfpi-a.js";import"./makeExternalStore-B7BZElb1.js";import"./Tooltip-BKNJ4CXW.js";import"./PopoverPopup-BXqpUswH.js";import"./toNumber-CPe3vDWf.js";import"./useOsdkClient-D4E0nqRl.js";import"./tick-Bgr1RKjf.js";import"./DropdownField-DRff_abd.js";import"./withOsdkMetrics-DCCDg2XQ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
