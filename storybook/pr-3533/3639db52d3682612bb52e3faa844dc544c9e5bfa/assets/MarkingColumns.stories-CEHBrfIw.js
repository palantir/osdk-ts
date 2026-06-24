import{f as n,j as t}from"./iframe-BAukKYpt.js";import{O as p}from"./object-table-Bz41jIPC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DEP8ArnM.js";import"./Table-CJmUtLBk.js";import"./index-BpChn7s-.js";import"./Dialog-BTx8w-FR.js";import"./cross-Wt5P4vcF.js";import"./svgIconContainer-Cdktco_5.js";import"./useBaseUiId-RhabLNAA.js";import"./InternalBackdrop-o22B5KIj.js";import"./composite-D8lj-V4B.js";import"./index-1wXDZdG-.js";import"./index-BpvJbmcH.js";import"./index-C0qPs7j2.js";import"./useEventCallback-DUEkXs09.js";import"./SkeletonBar-CvbMyIey.js";import"./LoadingCell-uoMeCHhb.js";import"./ColumnConfigDialog-BXKMMM3W.js";import"./DraggableList-DdhGXVEF.js";import"./Input-DJoA583-.js";import"./useControlled-ThDL_X9N.js";import"./Button-CPPNdecC.js";import"./small-cross-BW9tO6Bs.js";import"./ActionButton-B6RmjO27.js";import"./Checkbox-BU6Ro2Gi.js";import"./minus-mKlcJW5w.js";import"./useValueChanged-rBMJmxdF.js";import"./caret-down-B0rccozb.js";import"./CollapsiblePanel-BOmUW2eo.js";import"./MultiColumnSortDialog-vP4CQcMg.js";import"./MenuTrigger-BiECvH1L.js";import"./CompositeItem-BQ57aeFJ.js";import"./ToolbarRootContext-C1ndUy9w.js";import"./getDisabledMountTransitionStyles-CKDaAImU.js";import"./getPseudoElementBounds-0CZHolYG.js";import"./chevron-down-u5jwuTcd.js";import"./index-Bc23yeam.js";import"./error-DdebbK9k.js";import"./BaseCbacBanner-b8jHKhwY.js";import"./makeExternalStore-DO-Jcp6U.js";import"./Tooltip-By-fKxMI.js";import"./PopoverPopup-SZX_-Nex.js";import"./toNumber-C23jTECR.js";import"./useOsdkClient-Xt_UoppG.js";import"./DropdownField-CWRZhojM.js";import"./withOsdkMetrics-z4L-EvAK.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
