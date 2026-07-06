import{f as n,j as t}from"./iframe-CUJD_feO.js";import{O as p}from"./object-table-B-1zA8Hj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CwMci636.js";import"./Table-XJYprrUY.js";import"./index-dod05_4l.js";import"./Dialog-B7U3fBEV.js";import"./cross-ByES0shH.js";import"./svgIconContainer-Bz-Xjm7j.js";import"./useBaseUiId-DBPD4Etj.js";import"./InternalBackdrop-C4qyaeJG.js";import"./composite-D39qFuWe.js";import"./index-Bu5v0TuY.js";import"./index-W8ATP_2c.js";import"./index-AfxA9EgT.js";import"./useEventCallback-kWqPZdVn.js";import"./SkeletonBar-XEE4WzKg.js";import"./LoadingCell-DgamI9l2.js";import"./ColumnConfigDialog-DwdE96ou.js";import"./DraggableList-BLYTsKtf.js";import"./search-dJzbdeML.js";import"./Input-BUE8rj0W.js";import"./useControlled-CKQPn_St.js";import"./Button-Dz5hys-D.js";import"./small-cross-Benw3npw.js";import"./ActionButton-CS3AgV9d.js";import"./Checkbox-DlU46lNw.js";import"./useValueChanged-D2Qhmq7T.js";import"./CollapsiblePanel-ljGVY6Ut.js";import"./MultiColumnSortDialog-BPBKnrWa.js";import"./MenuTrigger-DW2pizGd.js";import"./CompositeItem-CHPYeA1T.js";import"./ToolbarRootContext-KbzTQeVs.js";import"./getDisabledMountTransitionStyles-Bvu2dbPZ.js";import"./getPseudoElementBounds-Cd7q6M-o.js";import"./chevron-down-BKDgpmvX.js";import"./index-r_ox1X8s.js";import"./error-FGAi1Ish.js";import"./BaseCbacBanner-BnuVyEHc.js";import"./makeExternalStore-CcDXnPev.js";import"./Tooltip-BzGK_ZFb.js";import"./PopoverPopup-iUbZPEIi.js";import"./toNumber-C5Sl5_fT.js";import"./useOsdkClient-7gDPeBEw.js";import"./tick-CEb5nYmY.js";import"./DropdownField-BW3O-Mov.js";import"./withOsdkMetrics-gtUsoLlW.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
