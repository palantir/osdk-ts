import{f as n,j as t}from"./iframe-CDkPOILN.js";import{O as p}from"./object-table-DtVNw-AA.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DstM-b3D.js";import"./Table-BoUxZm_F.js";import"./index-C76wageu.js";import"./Dialog-BG_q3N6C.js";import"./cross-BTipsHnW.js";import"./svgIconContainer-XqkOMFy_.js";import"./useBaseUiId-Bi029yYy.js";import"./InternalBackdrop-6EPFS0GP.js";import"./composite-_J6MeSdL.js";import"./index-DJHxJgNy.js";import"./index-GRTtLyGH.js";import"./index-BEsrOqqm.js";import"./useEventCallback-DIFBdV7H.js";import"./SkeletonBar-C9PG6PGs.js";import"./LoadingCell-BCiWw6D9.js";import"./ColumnConfigDialog-DtFxGXjb.js";import"./DraggableList-Cs-rfRu8.js";import"./Input-0Z3alS2i.js";import"./useControlled-CQDqyTru.js";import"./Button-ysMPqPj2.js";import"./small-cross-DcsQKm6H.js";import"./ActionButton-DuuQTCEy.js";import"./Checkbox-D_RH3eqz.js";import"./minus-C9QhXgcJ.js";import"./useValueChanged-FsuDeEtK.js";import"./caret-down-CVl211W2.js";import"./CollapsiblePanel-DXD6NgJh.js";import"./MultiColumnSortDialog-Crbt-QVN.js";import"./MenuTrigger-B6djei_B.js";import"./CompositeItem-D5_4-mm1.js";import"./ToolbarRootContext-C104elOq.js";import"./getDisabledMountTransitionStyles-S0MEs800.js";import"./getPseudoElementBounds-BsJFPRVk.js";import"./chevron-down-BPVdisw6.js";import"./index-Bz3n7Z6b.js";import"./error-D9S23zBD.js";import"./BaseCbacBanner-Dg0q2rCt.js";import"./makeExternalStore-B42izMk6.js";import"./Tooltip-ulK85C6g.js";import"./PopoverPopup-cKbKaNTV.js";import"./toNumber-B5sJ-7QS.js";import"./useOsdkClient-CzqVC4vB.js";import"./DropdownField-C59D45Gd.js";import"./withOsdkMetrics-Bg00xEyT.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
