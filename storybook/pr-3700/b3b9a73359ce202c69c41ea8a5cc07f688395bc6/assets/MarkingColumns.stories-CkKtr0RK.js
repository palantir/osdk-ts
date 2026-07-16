import{f as n,j as t}from"./iframe-Bc7fci45.js";import{O as p}from"./object-table-Lc7rAe1B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CqcExPbf.js";import"./Table-D3D_4ote.js";import"./index-8r1H5riV.js";import"./Dialog-CNj6gQ8q.js";import"./cross-B4chqNXv.js";import"./svgIconContainer-C9iQHhK5.js";import"./useBaseUiId-CAA2R02B.js";import"./InternalBackdrop-BIZ4VQKs.js";import"./composite-BYmI-CM7.js";import"./index-Cg8_1J89.js";import"./index-C7pEeJfy.js";import"./index-IJ2TR0_H.js";import"./useEventCallback-BU9uqu8F.js";import"./SkeletonBar-Bp1ICZ5u.js";import"./LoadingCell-Cl_eHfZO.js";import"./ColumnConfigDialog-BEu_fPCC.js";import"./DraggableList-CtBlgLfW.js";import"./search-D9ZdlKIV.js";import"./Input-CCNPikiw.js";import"./useControlled-CW7hKPmo.js";import"./Button-B6PamS6L.js";import"./small-cross-DVVSx5dv.js";import"./ActionButton-Eyk_uIM7.js";import"./Checkbox-BmETaWWs.js";import"./useValueChanged-Dbuxg5Cd.js";import"./CollapsiblePanel-B4GZLTpO.js";import"./MultiColumnSortDialog-CbY4K3hV.js";import"./MenuTrigger-BOPJGu7_.js";import"./CompositeItem-6dJ1pRPS.js";import"./ToolbarRootContext-Bfz1iCSH.js";import"./getDisabledMountTransitionStyles-CI2gtkP8.js";import"./getPseudoElementBounds-Cvhm_Lzv.js";import"./chevron-down-BoR-jQHF.js";import"./index-jFyp9vbd.js";import"./error-m7b9Nqv6.js";import"./BaseCbacBanner-DFcXpzSj.js";import"./makeExternalStore-DPhR3Lge.js";import"./Tooltip-BC4-jGwy.js";import"./PopoverPopup-BZSoXk37.js";import"./toNumber-1lcAc5PT.js";import"./useOsdkClient-C1dFAZUj.js";import"./tick-DM6HqIIk.js";import"./DropdownField-DuWJ4_LC.js";import"./withOsdkMetrics-CSMpf7Ll.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
