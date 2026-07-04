import{f as n,j as t}from"./iframe-CsKDXWEO.js";import{O as p}from"./object-table-Lq1z8Mu0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBPdY5UM.js";import"./Table-DlUIsLd7.js";import"./index-DZvekZfe.js";import"./Dialog-3Hij-yGl.js";import"./cross-Cizjf5nv.js";import"./svgIconContainer-CDnSXqhz.js";import"./useBaseUiId-C8rXvNXU.js";import"./InternalBackdrop-BbG2vM1-.js";import"./composite-DHZvyAu-.js";import"./index-C0UuoNxn.js";import"./index-DB8o02gJ.js";import"./index-Cej8j6kr.js";import"./useEventCallback-DLrk_Jxm.js";import"./SkeletonBar-B1tURlQo.js";import"./LoadingCell-DNSNQlha.js";import"./ColumnConfigDialog-CAQHlsYy.js";import"./DraggableList-BZ32jT6n.js";import"./search-CoMNvgfr.js";import"./Input-B7Me0RXp.js";import"./useControlled-3MQnQEky.js";import"./Button-CuTTrQDe.js";import"./small-cross-DoXNoere.js";import"./ActionButton-K-BAeJmb.js";import"./Checkbox-DuZWDtN7.js";import"./useValueChanged-BQTgWsrr.js";import"./CollapsiblePanel-Dpy8M8mw.js";import"./MultiColumnSortDialog-DPmi5PcT.js";import"./MenuTrigger-DAQyHzno.js";import"./CompositeItem-2ujK5FIL.js";import"./ToolbarRootContext-B5y904wS.js";import"./getDisabledMountTransitionStyles-Cn9I3Tqo.js";import"./getPseudoElementBounds-eBE2DcRk.js";import"./chevron-down-DJM_6rnf.js";import"./index-Dyh_7DuE.js";import"./error-xnvYS1XO.js";import"./BaseCbacBanner-C1Q0kUw6.js";import"./makeExternalStore-Csa2gVoe.js";import"./Tooltip-D_vmOIya.js";import"./PopoverPopup-04HeuIah.js";import"./toNumber-BoWd8EXB.js";import"./useOsdkClient-CCGHECRp.js";import"./tick-BlbDK4AY.js";import"./DropdownField-DCGGZdk0.js";import"./withOsdkMetrics-CtmiM-3o.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
