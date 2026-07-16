import{f as n,j as t}from"./iframe-CWkABBma.js";import{O as p}from"./object-table-D-KvH3jr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQRRuufD.js";import"./Table-BdRocScX.js";import"./index-3ehC8OdM.js";import"./Dialog-D5C49Lu-.js";import"./cross-BGjCAIVz.js";import"./svgIconContainer-D5adoGHw.js";import"./useBaseUiId-CPgz5i84.js";import"./InternalBackdrop-DvWivivO.js";import"./composite-B06WlP90.js";import"./index-gt44mxyL.js";import"./index-CtzvA1bZ.js";import"./index-RuzafOwh.js";import"./useEventCallback-B0Esa7bp.js";import"./SkeletonBar-DrzHk6S1.js";import"./LoadingCell-7EynM7tG.js";import"./ColumnConfigDialog-D0l_gWh3.js";import"./DraggableList-B0Rabszq.js";import"./search-B0C2G-JS.js";import"./Input-CLhjhXb0.js";import"./useControlled-DYSGp6Q0.js";import"./Button-CWqRBSs3.js";import"./small-cross-DOqMgDFO.js";import"./ActionButton-Bu0fs7dh.js";import"./Checkbox-_QeN3Wmt.js";import"./useValueChanged-EI-tZeY0.js";import"./CollapsiblePanel-DRD0fGlP.js";import"./MultiColumnSortDialog-D7F2yuCO.js";import"./MenuTrigger-COoo83bD.js";import"./CompositeItem-0Boub15Y.js";import"./ToolbarRootContext-BK7_v0HT.js";import"./getDisabledMountTransitionStyles-Bd0ty3vN.js";import"./getPseudoElementBounds-wP3Otyiq.js";import"./chevron-down-HsrWGWGQ.js";import"./index-CgKDqhfF.js";import"./error-DCDpRlQh.js";import"./BaseCbacBanner-DXIwQMsu.js";import"./makeExternalStore-BC2H5EJJ.js";import"./Tooltip-B6tBT2GI.js";import"./PopoverPopup-BiCOY9S3.js";import"./toNumber-cTak21z2.js";import"./useOsdkClient-DDsjTWlX.js";import"./tick-DlPVe4Li.js";import"./DropdownField-Cxinprvc.js";import"./withOsdkMetrics-B1J9h4Fq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
