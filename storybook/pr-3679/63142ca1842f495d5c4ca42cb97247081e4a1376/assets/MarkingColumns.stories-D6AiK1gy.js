import{f as n,j as t}from"./iframe-CQwY6mO4.js";import{O as p}from"./object-table-D7g2z9YZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CG_nRBE5.js";import"./Table-B7vrLjio.js";import"./index-wtEpLbyR.js";import"./Dialog-DFe9H-CM.js";import"./cross-BwbamFqn.js";import"./svgIconContainer-uS1_fq8T.js";import"./useBaseUiId-CHDIn64B.js";import"./InternalBackdrop-CKjTB2OQ.js";import"./composite-DyRwYDBq.js";import"./index-Dmoy23Ww.js";import"./index-D_1Blimg.js";import"./index-B8nE2ZAt.js";import"./useEventCallback-DEVDqVRn.js";import"./SkeletonBar-B4NILhpG.js";import"./LoadingCell-CL3DDJJX.js";import"./ColumnConfigDialog-DpQeRmDv.js";import"./DraggableList-UdKpY5ai.js";import"./search-GVl2c2Dm.js";import"./Input-DVkCs8b8.js";import"./useControlled-CJq6D1v1.js";import"./Button-kJ1MHZUd.js";import"./small-cross-CoG2wqrt.js";import"./ActionButton-UwgbqG4O.js";import"./Checkbox-B7fyvHtg.js";import"./useValueChanged-DfoeKdsy.js";import"./CollapsiblePanel-Do_G1fsY.js";import"./MultiColumnSortDialog-BvKG0pxZ.js";import"./MenuTrigger-D0hj7Js1.js";import"./CompositeItem-4f9J1wU9.js";import"./ToolbarRootContext-De19NDdj.js";import"./getDisabledMountTransitionStyles-COxm13Os.js";import"./getPseudoElementBounds-BZucl2yJ.js";import"./chevron-down-Dml-bxcm.js";import"./index-Cd4rZEU7.js";import"./error-zMG-nmVh.js";import"./BaseCbacBanner-BUjods3E.js";import"./makeExternalStore-D84SWLxJ.js";import"./Tooltip-BPawDsea.js";import"./PopoverPopup-DGBpcJER.js";import"./toNumber-vDRB5vep.js";import"./useOsdkClient-BSPBXs5E.js";import"./tick-CrpY_CWh.js";import"./DropdownField-DYjsXzNH.js";import"./withOsdkMetrics-DTJ-q1xq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
