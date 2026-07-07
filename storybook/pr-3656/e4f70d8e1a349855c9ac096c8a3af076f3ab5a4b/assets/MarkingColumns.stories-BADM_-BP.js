import{f as n,j as t}from"./iframe-CCipF1Gu.js";import{O as p}from"./object-table-Ci6KbIgI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DyQNCCfn.js";import"./Table-CmacUHpi.js";import"./index-Db8z_Hye.js";import"./Dialog-DNLrB3rQ.js";import"./cross-DiOEkLx6.js";import"./svgIconContainer-DHE5fDWZ.js";import"./useBaseUiId-CWyUyXAh.js";import"./InternalBackdrop-5-cXA4Bt.js";import"./composite-B1toWk7q.js";import"./index-C_lc2ILX.js";import"./index-BMJ22wsT.js";import"./index-BOMuJ9cz.js";import"./useEventCallback-Dj9lFL5w.js";import"./SkeletonBar-D9K7KLAx.js";import"./LoadingCell-B5K9ftBV.js";import"./ColumnConfigDialog-BaeBBra9.js";import"./DraggableList-B3j0XoA5.js";import"./search-rV5C5W_L.js";import"./Input--JNTo814.js";import"./useControlled-C2ebkniI.js";import"./Button-hL4QnKp1.js";import"./small-cross-yXFSTUP7.js";import"./ActionButton-heKu_t46.js";import"./Checkbox-BmVjwXjY.js";import"./useValueChanged-B-M5CVPa.js";import"./CollapsiblePanel-DGJn6Maw.js";import"./MultiColumnSortDialog-BoIHWg8I.js";import"./MenuTrigger-oEEtL9Wr.js";import"./CompositeItem-BEvC6B4Q.js";import"./ToolbarRootContext-BvBYCTeH.js";import"./getDisabledMountTransitionStyles-DEV1-foK.js";import"./getPseudoElementBounds-CSOzUbvE.js";import"./chevron-down-CokEFD0V.js";import"./index-BXSH3t7d.js";import"./error-Cslg2EPx.js";import"./BaseCbacBanner-DmaE8M-w.js";import"./makeExternalStore-DfFo9Pzi.js";import"./Tooltip-BAf-5QHv.js";import"./PopoverPopup-Dj4jtlXL.js";import"./toNumber-DJrkK84W.js";import"./useOsdkClient-C-yuN-fT.js";import"./tick-BlokcJw2.js";import"./DropdownField-BqDBjFEX.js";import"./withOsdkMetrics-BxZv_ggk.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
