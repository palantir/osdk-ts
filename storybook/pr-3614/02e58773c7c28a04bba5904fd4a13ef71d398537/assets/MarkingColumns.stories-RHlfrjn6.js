import{f as n,j as t}from"./iframe-5X19KWNx.js";import{O as p}from"./object-table-BLtHdEC0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-UTxkvQfT.js";import"./Table-DlThgZoY.js";import"./index-DMgSKlOH.js";import"./Dialog-COJQAXB9.js";import"./cross-C3ae2c9J.js";import"./svgIconContainer-BwFWOY5-.js";import"./useBaseUiId-5Y5tv9E4.js";import"./InternalBackdrop-DQn4Ja3Y.js";import"./composite-CRwwAO6c.js";import"./index-CrYEtrFn.js";import"./index-iNzzVQ6F.js";import"./index-XCFK5Y6u.js";import"./useEventCallback-BwzoRgpe.js";import"./SkeletonBar-BOPAVFnE.js";import"./LoadingCell-DLv3_ZgW.js";import"./ColumnConfigDialog-DNXfe5r6.js";import"./DraggableList-8c_hU6Bg.js";import"./search-D_fUGpVV.js";import"./Input-DFixr08O.js";import"./useControlled-1rpxN9if.js";import"./Button-Bt5MDCDq.js";import"./small-cross-C5Y5dweo.js";import"./ActionButton-C5VpQ9X3.js";import"./Checkbox-DwknMju_.js";import"./minus-G83cJ8Qy.js";import"./tick-BpZE7lfu.js";import"./useValueChanged-CcxAGDZ6.js";import"./caret-down-VuBYEUlH.js";import"./CollapsiblePanel-Dy7a8b4l.js";import"./MultiColumnSortDialog-DI9LcbeN.js";import"./MenuTrigger-Ceaqc5y4.js";import"./CompositeItem-sAVqkF8E.js";import"./ToolbarRootContext-Bxj_6rSd.js";import"./getDisabledMountTransitionStyles-CSuzdCj7.js";import"./getPseudoElementBounds-DJIVGB2O.js";import"./chevron-down-6VdMSlQi.js";import"./index-C-mg4eFB.js";import"./error-DYtuPI4g.js";import"./BaseCbacBanner-BHDFEJt2.js";import"./makeExternalStore-BbDEhM-7.js";import"./Tooltip-DZMQ6j78.js";import"./PopoverPopup-C0jrsTfl.js";import"./toNumber-BemET0AU.js";import"./useOsdkClient-wjqQ16vo.js";import"./DropdownField-Cnx5SZRH.js";import"./withOsdkMetrics-CVHDQp9i.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
