import{f as n,j as t}from"./iframe-Dgzah4Ez.js";import{O as p}from"./object-table-gylCjQTi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-26Cs7xve.js";import"./Table-D2TThdzW.js";import"./index-B1YqTsok.js";import"./Dialog-CXltrbku.js";import"./cross-BbfuF5iR.js";import"./svgIconContainer-CZHa7DiX.js";import"./useBaseUiId-C7dFyywe.js";import"./InternalBackdrop-BZ3eAm0t.js";import"./composite-C_apnA4T.js";import"./index-BZqsoeZU.js";import"./index-fDV0Uoju.js";import"./index-DC3BClkC.js";import"./useEventCallback-Ct3odo2P.js";import"./SkeletonBar-Cc3cuVf1.js";import"./LoadingCell-CSeMSomh.js";import"./ColumnConfigDialog-BuXMTenx.js";import"./DraggableList-DuhwTuiJ.js";import"./search-YMKDi33D.js";import"./Input-C8gEKolu.js";import"./useControlled-LGs8Aok6.js";import"./Button-BBGhnGuz.js";import"./small-cross-W9Se1A-2.js";import"./ActionButton-DnKbTICk.js";import"./Checkbox-CPaOK9fO.js";import"./useValueChanged-BuJOCtfc.js";import"./CollapsiblePanel-HlVUQCBV.js";import"./MultiColumnSortDialog-DBoYjtgp.js";import"./MenuTrigger-CxUIFmoV.js";import"./CompositeItem-BJZxdgFq.js";import"./ToolbarRootContext-CMDx9_oV.js";import"./getDisabledMountTransitionStyles-DSL4LJq7.js";import"./getPseudoElementBounds-CDE30EpF.js";import"./chevron-down-C3jDER8P.js";import"./index-UACqA1Dm.js";import"./error-B9L1dBU3.js";import"./BaseCbacBanner-Dr-jxbLc.js";import"./makeExternalStore-COFDyZ69.js";import"./Tooltip-DP_sZUMN.js";import"./PopoverPopup-NT3uelQh.js";import"./toNumber-BxpgPYZU.js";import"./useOsdkClient-BOoPTBtF.js";import"./tick-CvcP7CN1.js";import"./DropdownField-CGqUm18n.js";import"./withOsdkMetrics-BJBuqmdH.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
