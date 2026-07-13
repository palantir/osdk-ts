import{f as n,j as t}from"./iframe-D13OvIO6.js";import{O as p}from"./object-table-BJJjUG5p.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D5SNWq8-.js";import"./Table-De1zGHll.js";import"./index-H4QN0OBl.js";import"./Dialog-C81xGzcw.js";import"./cross-2WUvirnN.js";import"./svgIconContainer-B94D2qcl.js";import"./useBaseUiId-y58GEzqr.js";import"./InternalBackdrop-BOCEY4Pz.js";import"./composite-DpkCb7U_.js";import"./index-fRHUZYTt.js";import"./index-XlNIEKUK.js";import"./index-B9alaV6t.js";import"./useEventCallback-CQhxxtEl.js";import"./SkeletonBar-BrQBhLAw.js";import"./LoadingCell-CT2dJnWu.js";import"./ColumnConfigDialog-Di109sdr.js";import"./DraggableList-DNlZb68j.js";import"./search-C8nvyUgo.js";import"./Input-e5sKn9qR.js";import"./useControlled-BqUAMcfZ.js";import"./Button-DVYLGO83.js";import"./small-cross-CNZAufjA.js";import"./ActionButton-BIg0ZLEK.js";import"./Checkbox-CEdAPT5B.js";import"./useValueChanged-DDooMyS_.js";import"./CollapsiblePanel-BNie_Ck1.js";import"./MultiColumnSortDialog-C-1_pJrI.js";import"./MenuTrigger-CBkMsarv.js";import"./CompositeItem-DCNUmNPR.js";import"./ToolbarRootContext-CGxluKmw.js";import"./getDisabledMountTransitionStyles-C0PjBCeE.js";import"./getPseudoElementBounds-Cdp-0il5.js";import"./chevron-down--_FOD1tv.js";import"./index-_CZ2H6Pp.js";import"./error-DpcZtWhQ.js";import"./BaseCbacBanner-fWKK_-oS.js";import"./makeExternalStore-KSSdB1lG.js";import"./Tooltip-BazxrbVd.js";import"./PopoverPopup-CfsIlaCO.js";import"./toNumber-Bnf7Dflz.js";import"./useOsdkClient-B4hKTNPi.js";import"./tick-DF9c15Ll.js";import"./DropdownField-BqL35ukm.js";import"./withOsdkMetrics-D8_HxxxP.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
