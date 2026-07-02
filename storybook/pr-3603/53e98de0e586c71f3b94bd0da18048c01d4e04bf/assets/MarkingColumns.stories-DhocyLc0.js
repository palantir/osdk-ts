import{f as n,j as t}from"./iframe-D1ccwbwU.js";import{O as p}from"./object-table-BKIuKo0s.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D-6W13E3.js";import"./Table-Be5FiA5d.js";import"./index-_DOpC_8N.js";import"./Dialog-CG4IC7UU.js";import"./cross-BMef0xJB.js";import"./svgIconContainer-Cr6kNKv_.js";import"./useBaseUiId-Clr8kPvs.js";import"./InternalBackdrop-BoTze6QF.js";import"./composite-DWIzRXre.js";import"./index-BL_AcbNT.js";import"./index-CVRon0Pv.js";import"./index-B-rSIqKA.js";import"./useEventCallback-D5kk2RVq.js";import"./SkeletonBar-BIHDViRC.js";import"./LoadingCell-CY-93stn.js";import"./ColumnConfigDialog-DcVA4MZO.js";import"./DraggableList-C7NaMQTh.js";import"./search-CsdxFzkr.js";import"./Input-B3NMUZ09.js";import"./useControlled-Dx6d83cc.js";import"./Button-BVSBHIRR.js";import"./small-cross-Dmllr_po.js";import"./ActionButton-Dh6CUNTx.js";import"./Checkbox-MzFZagAk.js";import"./minus-COQXhc_S.js";import"./tick-BtpAyNBR.js";import"./useValueChanged-H-TEbZOy.js";import"./caret-down-DOrJ6n-X.js";import"./CollapsiblePanel-ROvkXdEl.js";import"./MultiColumnSortDialog-D_BSy6iR.js";import"./MenuTrigger-HbXay-PC.js";import"./CompositeItem-BpdYb2R3.js";import"./ToolbarRootContext-CmhDo6DX.js";import"./getDisabledMountTransitionStyles-gTuOm429.js";import"./getPseudoElementBounds-BR-Ygay5.js";import"./chevron-down-nYDTPiJL.js";import"./index-BMEVSxUh.js";import"./error-BqWL9tH5.js";import"./BaseCbacBanner-n_27XJfI.js";import"./makeExternalStore-Dii7ZLIe.js";import"./Tooltip-CwHuiRIr.js";import"./PopoverPopup-LB2Rk61G.js";import"./toNumber-Dw359r28.js";import"./useOsdkClient-D65mP1tz.js";import"./DropdownField-CQgTIugi.js";import"./withOsdkMetrics-6KXZf89b.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
