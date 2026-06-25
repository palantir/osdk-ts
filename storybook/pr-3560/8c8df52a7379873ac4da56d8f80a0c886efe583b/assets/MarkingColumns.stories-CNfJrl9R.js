import{f as n,j as t}from"./iframe-Du3uM15W.js";import{O as p}from"./object-table-QcHHovjj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CklvEmIK.js";import"./Table-C0iNIutE.js";import"./index-Dy-Ae7RB.js";import"./Dialog-BC6a3Zrf.js";import"./cross-BWq8BmPL.js";import"./svgIconContainer-CLb4tBtk.js";import"./useBaseUiId-BWcyG7Ta.js";import"./InternalBackdrop-CXcRFscB.js";import"./composite-Cnhi7YUj.js";import"./index-BQnFFWmV.js";import"./index-DB_385io.js";import"./index-CwvyzZQ-.js";import"./useEventCallback-yZhMlxgT.js";import"./SkeletonBar-D8Wt8gtk.js";import"./LoadingCell-hwYG_z20.js";import"./ColumnConfigDialog-Ci4MbzhT.js";import"./DraggableList-eu3m2ctc.js";import"./Input-DYidzq6i.js";import"./useControlled-CAedJelb.js";import"./Button-C-guVMtj.js";import"./small-cross-CufBPfRi.js";import"./ActionButton-J1yxKUle.js";import"./Checkbox-GQzVHDUM.js";import"./minus-CHx7f04S.js";import"./useValueChanged-DuxxxZQB.js";import"./caret-down-sJOmqaWY.js";import"./CollapsiblePanel-BgmAtPsb.js";import"./MultiColumnSortDialog-fx3ztKua.js";import"./MenuTrigger-DqnBh5ts.js";import"./CompositeItem-sdkMkBWm.js";import"./ToolbarRootContext-D9ltIK0F.js";import"./getDisabledMountTransitionStyles-fmtNbB5U.js";import"./getPseudoElementBounds-Bn36j3X1.js";import"./chevron-down-DNZXBIAg.js";import"./index-Hw5Lk4kT.js";import"./error-BflolPu3.js";import"./BaseCbacBanner--nWvMsbx.js";import"./makeExternalStore-D3QNHW0n.js";import"./Tooltip-BFAbQqMK.js";import"./PopoverPopup-xMh4lLSp.js";import"./toNumber-Bsc7HPi9.js";import"./useOsdkClient-DSidVlSv.js";import"./DropdownField-Cgo7cZAE.js";import"./withOsdkMetrics-DvZnKl1V.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
