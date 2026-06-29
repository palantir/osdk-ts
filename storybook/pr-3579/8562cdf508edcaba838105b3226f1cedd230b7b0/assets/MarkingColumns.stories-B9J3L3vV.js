import{f as n,j as t}from"./iframe-BgQGCMZK.js";import{O as p}from"./object-table-DGi5ojx7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DceMzvTp.js";import"./Table-BwK--m6r.js";import"./index-D0qM6_3F.js";import"./Dialog-XTOgmdwi.js";import"./cross-RpoL6ucO.js";import"./svgIconContainer-DjCbUlQN.js";import"./useBaseUiId-DUweHuqm.js";import"./InternalBackdrop-C-KkXhVz.js";import"./composite-BbaMzsMX.js";import"./index-DI0-04On.js";import"./index-Wkp08oh_.js";import"./index-CTszkxCl.js";import"./useEventCallback-Cbn4REYo.js";import"./SkeletonBar-Bc5GPczi.js";import"./LoadingCell-Bcytd3te.js";import"./ColumnConfigDialog-Do-fbJjG.js";import"./DraggableList-B40TwhtF.js";import"./search-Zc7R-E_2.js";import"./Input-CUdm70rf.js";import"./useControlled-DCsXBaGY.js";import"./Button-GgYxfYWW.js";import"./small-cross-BZ7ydq7Y.js";import"./ActionButton-DVXNZ8jM.js";import"./Checkbox-CFhpLHeE.js";import"./minus-DHXljQl6.js";import"./tick-Yj_7Mfse.js";import"./useValueChanged-B8xoRRSr.js";import"./caret-down-_fRrvn0V.js";import"./CollapsiblePanel-BUpK1HQh.js";import"./MultiColumnSortDialog-CvF5FERj.js";import"./MenuTrigger-D4GTioZh.js";import"./CompositeItem-Ww2GySUz.js";import"./ToolbarRootContext-BbJw-Q_h.js";import"./getDisabledMountTransitionStyles-_WTJrDNH.js";import"./getPseudoElementBounds-C31_Y2ZQ.js";import"./chevron-down-BIfCOlUi.js";import"./index-tp4G4vay.js";import"./error-BAwkgfC_.js";import"./BaseCbacBanner-C6ewlrRE.js";import"./makeExternalStore-CkvQswBh.js";import"./Tooltip-COfgRM0M.js";import"./PopoverPopup-CxSCaAOB.js";import"./toNumber-DVVr-KZF.js";import"./useOsdkClient-vZ0e3acl.js";import"./DropdownField-IkrvSbA8.js";import"./withOsdkMetrics-CPM5GGuF.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
