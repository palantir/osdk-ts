import{f as n,j as t}from"./iframe-CTuVWhxi.js";import{O as p}from"./object-table-BK2y_vlE.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5f8MMsA.js";import"./Table-DBDjPDkm.js";import"./index-pTof7JYZ.js";import"./Dialog-DwEW2wgv.js";import"./cross-6rGq7VMg.js";import"./svgIconContainer-BKWJam_3.js";import"./useBaseUiId-DE-xcgG4.js";import"./InternalBackdrop-DI4L7F2f.js";import"./composite-Bw1G9Kye.js";import"./index-BW4DslJD.js";import"./index-DD8TBGw5.js";import"./index-BdFagx55.js";import"./useEventCallback-1AZ17ZYh.js";import"./SkeletonBar-DtV5aZQI.js";import"./LoadingCell-japmrCik.js";import"./ColumnConfigDialog-BHcKWMbo.js";import"./DraggableList-D957cyDY.js";import"./search-CxRV-GkA.js";import"./Input-De2G7Z6K.js";import"./useControlled-ulluTzXP.js";import"./Button-5J6F3z6F.js";import"./small-cross-DeITGuHZ.js";import"./ActionButton-J62iTZ_L.js";import"./Checkbox-CHtMBp5F.js";import"./useValueChanged-9B25Z5qH.js";import"./CollapsiblePanel-UlV3jvMc.js";import"./MultiColumnSortDialog-BgTJUj9G.js";import"./MenuTrigger-CAdGIR_0.js";import"./CompositeItem-DQ4PmIbl.js";import"./ToolbarRootContext-CMHyw-yh.js";import"./getDisabledMountTransitionStyles-CP5KobCt.js";import"./getPseudoElementBounds-DKADYboT.js";import"./chevron-down-v0A8ScL7.js";import"./index-LF3Syxin.js";import"./error-cZVWPVml.js";import"./BaseCbacBanner-Czf97xXt.js";import"./makeExternalStore-BHoCWoeW.js";import"./Tooltip-B1PUGzVr.js";import"./PopoverPopup-Dyq_EHwe.js";import"./toNumber-sWbM57dX.js";import"./useOsdkClient-BNdk0L4u.js";import"./tick-B805DdgF.js";import"./DropdownField-BtZM_o1g.js";import"./withOsdkMetrics-BZmuG9a2.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
