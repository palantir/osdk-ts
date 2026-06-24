import{f as n,j as t}from"./iframe-CztIB_cg.js";import{O as p}from"./object-table-CLHq9ho8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-9510aCR5.js";import"./Table-DDfqXBAa.js";import"./index-YBlbnmzA.js";import"./Dialog-BJZFOFLV.js";import"./cross-DJXpoBp2.js";import"./svgIconContainer-Czw7psRv.js";import"./useBaseUiId-BJ0MEPf0.js";import"./InternalBackdrop-DVeS3izt.js";import"./composite-EYIwQTl1.js";import"./index-BgNIdcBm.js";import"./index-D9HOFOC-.js";import"./index-CpFvddnD.js";import"./useEventCallback-Kh_9j7A6.js";import"./SkeletonBar-DML_JCkN.js";import"./LoadingCell-CprWK-Qx.js";import"./ColumnConfigDialog-BYSpKE4N.js";import"./DraggableList-CKoq-T1Q.js";import"./Input-CyW38lcI.js";import"./useControlled-C-5UBO3y.js";import"./Button-B4hkWrRY.js";import"./small-cross-CQaZMwtF.js";import"./ActionButton-CLqtO5dd.js";import"./Checkbox-CZOGWnT4.js";import"./minus-BSZbvGfL.js";import"./useValueChanged-CqPoCTge.js";import"./caret-down-peif0GjZ.js";import"./CollapsiblePanel-Tqi8hx7c.js";import"./MultiColumnSortDialog-DkAjX9QG.js";import"./MenuTrigger-x-xdReaq.js";import"./CompositeItem-Bnlb5c5E.js";import"./ToolbarRootContext-BO8nOB22.js";import"./getDisabledMountTransitionStyles-D1mhG6bw.js";import"./getPseudoElementBounds-3Qx1gVWN.js";import"./chevron-down-BfDWteN8.js";import"./index-DcRIl6lS.js";import"./error-BlRTFUd2.js";import"./BaseCbacBanner-B6qH3LGt.js";import"./makeExternalStore-AkxkkdDJ.js";import"./Tooltip-CC-KygJL.js";import"./PopoverPopup-lBUNWSfx.js";import"./toNumber-C-FodCVs.js";import"./useOsdkClient-BPzq3NYQ.js";import"./DropdownField-6hxf2jac.js";import"./withOsdkMetrics-CNKIlnNr.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
