import{f as n,j as t}from"./iframe-CiJvhlhG.js";import{O as p}from"./object-table-DjSFe4WO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DK17mGgM.js";import"./Table-DYDZ4-sI.js";import"./index-RjixPHr_.js";import"./Dialog-CLExdB4_.js";import"./cross-NCh7tpSo.js";import"./svgIconContainer-BNXd1gaL.js";import"./useBaseUiId-B2KcvHa2.js";import"./InternalBackdrop-OO-w_VM2.js";import"./composite-BTQPOs72.js";import"./index-C4epKkDO.js";import"./index-CxzxdhNR.js";import"./index-CEKORZa5.js";import"./useEventCallback-CH-Ltu1h.js";import"./SkeletonBar-DoodPwQC.js";import"./LoadingCell-BzqG1NRn.js";import"./ColumnConfigDialog-DRGwD9Dm.js";import"./DraggableList-CeY62dF2.js";import"./search-DBGT9m4H.js";import"./Input-Aw_J2heG.js";import"./useControlled-cOv0fQIu.js";import"./Button-e0gPLSr0.js";import"./small-cross-BM6CQS56.js";import"./ActionButton-J9kPteYf.js";import"./Checkbox-oxoIS36a.js";import"./useValueChanged-Cl5VLp1f.js";import"./CollapsiblePanel-C4kdGcSA.js";import"./MultiColumnSortDialog-BP288Im4.js";import"./MenuTrigger-B-66VZ3M.js";import"./CompositeItem-DqJih94e.js";import"./ToolbarRootContext-BfL_p7mI.js";import"./getDisabledMountTransitionStyles-BMysfTcm.js";import"./getPseudoElementBounds-Draalqvp.js";import"./chevron-down-BKNhjhGB.js";import"./index-BrcCQyJc.js";import"./error-CVhpmH-E.js";import"./BaseCbacBanner-BpxLGHb6.js";import"./makeExternalStore-DxzVB76A.js";import"./Tooltip-CYrBhYub.js";import"./PopoverPopup-DWoLO15S.js";import"./toNumber-DGy3-eir.js";import"./useOsdkClient-CdAIbxew.js";import"./tick-3edY387H.js";import"./DropdownField-d2Rj1067.js";import"./withOsdkMetrics-DwxB9ODW.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
