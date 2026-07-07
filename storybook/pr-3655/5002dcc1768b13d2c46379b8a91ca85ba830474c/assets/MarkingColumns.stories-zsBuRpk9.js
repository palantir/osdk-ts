import{f as n,j as t}from"./iframe-DYDLzeoT.js";import{O as p}from"./object-table-3dNSovpa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dj-3qyaW.js";import"./Table-BLggD4Sn.js";import"./index-BWet9nE2.js";import"./Dialog-DUXEL7qt.js";import"./cross-ChKzqqWp.js";import"./svgIconContainer-CeeJvfXj.js";import"./useBaseUiId-BHZiOLsQ.js";import"./InternalBackdrop-Smml0DP5.js";import"./composite-BJJtpUWb.js";import"./index-BRJKmzk8.js";import"./index-F5ZSuRFQ.js";import"./index-D506KWan.js";import"./useEventCallback-B90xElHj.js";import"./SkeletonBar-tW67NeGR.js";import"./LoadingCell-D4rxohRT.js";import"./ColumnConfigDialog-1wiF5SO5.js";import"./DraggableList-BpcC29u5.js";import"./search-CkUYDIfC.js";import"./Input-B6UHg7Cf.js";import"./useControlled-DR3Eb6Ko.js";import"./Button-CDOdl8fj.js";import"./small-cross-CBi6jRX2.js";import"./ActionButton-BQqeBoVg.js";import"./Checkbox-tpVh0-Hs.js";import"./useValueChanged-BOyD6Dx6.js";import"./CollapsiblePanel-BVIGQOGi.js";import"./MultiColumnSortDialog-CKdZ6Bhw.js";import"./MenuTrigger-Dwm8z83B.js";import"./CompositeItem-C4gOqPUm.js";import"./ToolbarRootContext-BEqSzICa.js";import"./getDisabledMountTransitionStyles-Ce30YM9X.js";import"./getPseudoElementBounds-DMs6SzZ8.js";import"./chevron-down-bii-cUY8.js";import"./index-BfzwJlfw.js";import"./error-ELb8w3lR.js";import"./BaseCbacBanner-c7qjmCT5.js";import"./makeExternalStore-3xX7J05n.js";import"./Tooltip-CUVG9XBB.js";import"./PopoverPopup-C7ts03fw.js";import"./toNumber-D4RCmOc2.js";import"./useOsdkClient-ejG7xw1T.js";import"./tick-ByLmwJSg.js";import"./DropdownField-Di1ZdXzy.js";import"./withOsdkMetrics-CwaAA2NA.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
