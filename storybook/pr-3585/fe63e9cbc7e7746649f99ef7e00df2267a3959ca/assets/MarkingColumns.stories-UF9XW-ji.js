import{f as n,j as t}from"./iframe-JRXk6WQ4.js";import{O as p}from"./object-table-BErpw0uZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DY-INlY3.js";import"./Table-ByTkFmP6.js";import"./index-BO846xN-.js";import"./Dialog-fFmmmc0m.js";import"./cross-Dr9u3tXQ.js";import"./svgIconContainer-Cg-IKnaQ.js";import"./useBaseUiId-B92YT4qV.js";import"./InternalBackdrop-IkIoPfpf.js";import"./composite-D4OUfhgC.js";import"./index-DXAqUoUy.js";import"./index-BMRdKDpN.js";import"./index-BpDT7UQk.js";import"./useEventCallback-DtIDOqdF.js";import"./SkeletonBar-C5fmdImL.js";import"./LoadingCell-C-ylPjkm.js";import"./ColumnConfigDialog-Cpj3rnNh.js";import"./DraggableList-BLMUOYqr.js";import"./search-_1TrNhYm.js";import"./Input-DjHTVW-A.js";import"./useControlled-dtVC169A.js";import"./Button-DSNlXlAR.js";import"./small-cross-Cs2E1URa.js";import"./ActionButton-f-kUwvDl.js";import"./Checkbox-DpQLgZjt.js";import"./minus-LvkrsuRu.js";import"./tick-iZXtoYGm.js";import"./useValueChanged-BqZ1lE8Z.js";import"./caret-down-C2Z5rnDP.js";import"./CollapsiblePanel-epMkUfhz.js";import"./MultiColumnSortDialog-CQcA4d6c.js";import"./MenuTrigger-BSusHxBx.js";import"./CompositeItem-ChXpUiqm.js";import"./ToolbarRootContext-_m98rJ-b.js";import"./getDisabledMountTransitionStyles-DpTkzKkS.js";import"./getPseudoElementBounds-CCgTn4bo.js";import"./chevron-down-BXqLseJM.js";import"./index-cSqZ-rWT.js";import"./error-CE7cMa91.js";import"./BaseCbacBanner-C5xsWSQt.js";import"./makeExternalStore-Cey95PQI.js";import"./Tooltip-BVLcA-zb.js";import"./PopoverPopup-CDN4tqr5.js";import"./toNumber-BDIDtbcM.js";import"./useOsdkClient-K80ZdjZt.js";import"./DropdownField-CMxxv1bJ.js";import"./withOsdkMetrics-CBTqKcfH.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
