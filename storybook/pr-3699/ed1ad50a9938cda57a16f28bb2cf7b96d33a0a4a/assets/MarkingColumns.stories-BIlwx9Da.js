import{f as n,j as t}from"./iframe-BStx9yPR.js";import{O as p}from"./object-table-lkWTNthX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-UySgbcUR.js";import"./Table-D_gkiTYP.js";import"./index-Be1ULEOR.js";import"./Dialog-M9vpxV1b.js";import"./cross-FejrogDo.js";import"./svgIconContainer-B-Cpa4mV.js";import"./useBaseUiId-Bdm4fxvS.js";import"./InternalBackdrop-Cy4bnIED.js";import"./composite-Bd-v3I4o.js";import"./index-D47MGgQl.js";import"./index-CaXF2RA4.js";import"./index-C9UU_q_g.js";import"./useEventCallback-Bfd-jSTK.js";import"./SkeletonBar-DRw9PMp9.js";import"./LoadingCell-CB140HhJ.js";import"./ColumnConfigDialog-DH8SQcof.js";import"./DraggableList-4zd_qQ0H.js";import"./search-TPtYigE2.js";import"./Input-C7L8al23.js";import"./useControlled-DvySd0Ik.js";import"./Button-CvmdNRYB.js";import"./small-cross-CBxSdqg6.js";import"./ActionButton-BMs_YNH8.js";import"./Checkbox-CLWXSJkK.js";import"./useValueChanged-NROW4tL0.js";import"./CollapsiblePanel-vL_dQymU.js";import"./MultiColumnSortDialog-CbT9P8a7.js";import"./MenuTrigger-B5m-10ic.js";import"./CompositeItem-C63RKcL1.js";import"./ToolbarRootContext-bupG8LBJ.js";import"./getDisabledMountTransitionStyles-DaQS-FmV.js";import"./getPseudoElementBounds-s339g_vL.js";import"./chevron-down-BRbRhHVp.js";import"./index-yZu2NWSV.js";import"./error-KbCjfx82.js";import"./BaseCbacBanner-D0gQoWUH.js";import"./makeExternalStore-H8C5w62L.js";import"./Tooltip-DjBHr9yw.js";import"./PopoverPopup-DEZsTE-l.js";import"./toNumber-PgdLcTzy.js";import"./useOsdkClient-DRQhdCG2.js";import"./tick-By3v2mMw.js";import"./DropdownField-BXjq2rNB.js";import"./withOsdkMetrics-DOJw4LH5.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
