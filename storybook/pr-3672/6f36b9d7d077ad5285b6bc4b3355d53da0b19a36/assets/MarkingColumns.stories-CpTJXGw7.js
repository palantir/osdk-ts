import{f as n,j as t}from"./iframe-CbOWbGGw.js";import{O as p}from"./object-table-95eBl5N4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DondZV2N.js";import"./Table-BiWOPcO9.js";import"./index-CEPD03cF.js";import"./Dialog-F7npNZPS.js";import"./cross-DadtfeXK.js";import"./svgIconContainer-BhhXSaXd.js";import"./useBaseUiId-BzNtixXq.js";import"./InternalBackdrop-CSPTV1Cl.js";import"./composite-CKUgOMSc.js";import"./index-ByRc8Ngv.js";import"./index-3gvosMgp.js";import"./index-C2rONIRT.js";import"./useEventCallback-Dfl_NWp5.js";import"./SkeletonBar-B3dpl1Za.js";import"./LoadingCell-DuK2tdwP.js";import"./ColumnConfigDialog-b-JFGqEN.js";import"./DraggableList--K6Gy3Yf.js";import"./search-CjppIQIx.js";import"./Input-BIktgYh6.js";import"./useControlled-BZd54yFi.js";import"./Button-B9zOpaLB.js";import"./small-cross-Diysmy4g.js";import"./ActionButton-DwWRTMSM.js";import"./Checkbox-DqzGub4h.js";import"./useValueChanged-DcYlvIai.js";import"./CollapsiblePanel-DOL2Tpd-.js";import"./MultiColumnSortDialog-CmNpQ1Lx.js";import"./MenuTrigger-EXxdzeib.js";import"./CompositeItem-CYtnWxmM.js";import"./ToolbarRootContext-c2HSNs2W.js";import"./getDisabledMountTransitionStyles-B5rP0uTY.js";import"./getPseudoElementBounds-DTicY2h_.js";import"./chevron-down-CIpW-Tqv.js";import"./index-D9Yqc0fn.js";import"./error-DXxRlpOL.js";import"./BaseCbacBanner-B_P_aibi.js";import"./makeExternalStore-BANZXC9U.js";import"./Tooltip-CQ4u54OV.js";import"./PopoverPopup-CqsDM-AU.js";import"./toNumber-BCMAYKQn.js";import"./useOsdkClient-at6s7Ate.js";import"./tick-CQPlrvaP.js";import"./DropdownField-DYBPU_63.js";import"./withOsdkMetrics-p9zjIMMx.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
