import{f as n,j as t}from"./iframe-Dcob2W8_.js";import{O as p}from"./object-table-Bj1qs7i3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHeM-9-4.js";import"./index-Bvh3RcnQ.js";import"./Dialog-DYOlHOKm.js";import"./cross-C_jTsLej.js";import"./svgIconContainer-BpTYx9Q8.js";import"./useBaseUiId-U9aYAGEx.js";import"./InternalBackdrop-DpnEyZiz.js";import"./composite-M8BIEMcs.js";import"./index-BoFlf3Uo.js";import"./index-BDsZi_tg.js";import"./index-Blbk1WCr.js";import"./useEventCallback-exSG89Ey.js";import"./SkeletonBar-BdOCohyP.js";import"./LoadingCell-D8SiPH3u.js";import"./ColumnConfigDialog-Cz2CHo9c.js";import"./DraggableList-uHueOzKx.js";import"./search-DMNHMKQT.js";import"./Input-B9MgFoYa.js";import"./useControlled-WTczK4fM.js";import"./Button-CLYa9bys.js";import"./small-cross-BsPwaf41.js";import"./ActionButton-BJ5oPQSc.js";import"./Checkbox-CIDs49MX.js";import"./minus-C5vub-g_.js";import"./tick-Dkfib2K4.js";import"./useValueChanged-BOZMc8Hc.js";import"./caret-down-CV4aXDks.js";import"./CollapsiblePanel-CRsSVXsO.js";import"./MultiColumnSortDialog-rg2xFFVu.js";import"./MenuTrigger-CUYAn02Y.js";import"./CompositeItem-DjGNiNJg.js";import"./ToolbarRootContext-CUhgq_HJ.js";import"./getDisabledMountTransitionStyles-U5k01Ji_.js";import"./getPseudoElementBounds-BEx-K6Y8.js";import"./chevron-down-BJqD46Ef.js";import"./index-Bnh0lEPO.js";import"./error-DoeeGnIt.js";import"./BaseCbacBanner-Bu1siASi.js";import"./makeExternalStore-C7bXpdyC.js";import"./Tooltip-9VSV8iXp.js";import"./PopoverPopup-CG4P1eky.js";import"./toNumber-Ck9SIron.js";import"./useOsdkClient-CVkvjVz-.js";import"./DropdownField-CkofW4Dn.js";import"./withOsdkMetrics-tRkPT9_X.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
