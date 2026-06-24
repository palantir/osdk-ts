import{f as n,j as t}from"./iframe-bCqkjYXy.js";import{O as p}from"./object-table-BsVjMMi7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JM6EDuxp.js";import"./Table-D-QT7C6A.js";import"./index-BPP7EufF.js";import"./Dialog-Dovwop9n.js";import"./cross-DJytR_xb.js";import"./svgIconContainer-pwFXFDcF.js";import"./useBaseUiId-Cgl_CtkY.js";import"./InternalBackdrop-CtpOZ47w.js";import"./composite-CIAMGJ8-.js";import"./index-DpupV0gW.js";import"./index-CqKdNo8H.js";import"./index-DdaIttIp.js";import"./useEventCallback-FaBF_0K6.js";import"./SkeletonBar-DFjzkg9q.js";import"./LoadingCell-CplfX0E_.js";import"./ColumnConfigDialog-B2lSXOht.js";import"./DraggableList-NeGNKxxv.js";import"./Input-6Q7B27Y4.js";import"./useControlled-BwGqFjS-.js";import"./Button-0Kv-A3xP.js";import"./small-cross-DjOwu3lt.js";import"./ActionButton-DpCAyBoQ.js";import"./Checkbox-ChilpboF.js";import"./minus-DkKmin5C.js";import"./useValueChanged-Z_NMb60W.js";import"./caret-down-BVjSm1fX.js";import"./CollapsiblePanel-CHWj-krs.js";import"./MultiColumnSortDialog-CevVTIYQ.js";import"./MenuTrigger-DLW-1JgS.js";import"./CompositeItem-9AAK0yx7.js";import"./ToolbarRootContext-DSYTYCWy.js";import"./getDisabledMountTransitionStyles-B26PuUNT.js";import"./getPseudoElementBounds-D-jfdjeU.js";import"./chevron-down-CM9ahFMo.js";import"./index-CvU8ZXYA.js";import"./error-UH_1G_DJ.js";import"./BaseCbacBanner-C-GfX_8N.js";import"./makeExternalStore-BggjNHUN.js";import"./Tooltip-D7hy9plI.js";import"./PopoverPopup-DuxMj4Xy.js";import"./toNumber-O4YyRiit.js";import"./useOsdkClient-Cgatok0o.js";import"./DropdownField-DkVgq5Nh.js";import"./withOsdkMetrics-G1bjVNM9.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
