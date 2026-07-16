import{f as n,j as t}from"./iframe-DkpSGPRQ.js";import{O as p}from"./object-table-BXuV-Jq3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLqqYOdZ.js";import"./Table-7LDXJdsj.js";import"./index-BhGh3GfC.js";import"./Dialog-CBwLvDeY.js";import"./cross-NGS1eS1H.js";import"./svgIconContainer-BSSOnUka.js";import"./useBaseUiId-B9DlhAqD.js";import"./InternalBackdrop-HQEVKppz.js";import"./composite-DqvvbcbC.js";import"./index-By0beLJF.js";import"./index-xc_Rbfjf.js";import"./index-Cqfvo0Tw.js";import"./useEventCallback-NwnWSF1f.js";import"./SkeletonBar-Da3Ee8Zn.js";import"./LoadingCell-uVl0ez8L.js";import"./ColumnConfigDialog-LKAnRiEt.js";import"./DraggableList-s6C2UfMr.js";import"./search-C2LoXU-4.js";import"./Input-DwjA5vF5.js";import"./useControlled-X7oTCMhV.js";import"./Button-BNpYQl5H.js";import"./small-cross-PayX3FHk.js";import"./ActionButton-cgioEY_G.js";import"./Checkbox-DNRrAQCD.js";import"./useValueChanged-B7p--LLl.js";import"./CollapsiblePanel-CYWWt-NG.js";import"./MultiColumnSortDialog-CGF45VQz.js";import"./MenuTrigger-ByYl9PAV.js";import"./CompositeItem-BQ27p43g.js";import"./ToolbarRootContext-Du1GI0xL.js";import"./getDisabledMountTransitionStyles-BQp14p-F.js";import"./getPseudoElementBounds-Ccm21uZb.js";import"./chevron-down-CMLdZkkD.js";import"./index-Bh7ePidM.js";import"./error-DLwoWCBM.js";import"./BaseCbacBanner-B8ZODtm5.js";import"./makeExternalStore-DHc_mvHu.js";import"./Tooltip-4ca73xR8.js";import"./PopoverPopup-CTB0jgTS.js";import"./toNumber-YpdzN7Sy.js";import"./useOsdkClient-bds3HbXy.js";import"./tick-9Z7h2rmL.js";import"./DropdownField-CXFGEt8J.js";import"./withOsdkMetrics-slF_OeSc.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
