import{f as n,j as t}from"./iframe-B_sNEAoD.js";import{O as p}from"./object-table-JtqAozY5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4w3BnHq.js";import"./Table-7sJ3b4k4.js";import"./index-Boi3yEsI.js";import"./Dialog-BOSXeufz.js";import"./cross-CNm-11LQ.js";import"./svgIconContainer-C33xHrgH.js";import"./useBaseUiId-sroOZ_HI.js";import"./InternalBackdrop-CDkKhgRm.js";import"./composite-CVNBfdPF.js";import"./index-D9sBx7SB.js";import"./index-SbkiAc5f.js";import"./index-eh1otGm1.js";import"./useEventCallback-BayWJCPD.js";import"./SkeletonBar-ztjOiJaC.js";import"./LoadingCell-Yqe4Nwgh.js";import"./ColumnConfigDialog-Dt3Dd90I.js";import"./DraggableList-CLd7JuXj.js";import"./search-DH6_rBgy.js";import"./Input-CXVnOTc2.js";import"./useControlled-DPIbQqn6.js";import"./Button-DcOn_dM0.js";import"./small-cross-BPdFfJ16.js";import"./ActionButton-BfDUNyJy.js";import"./Checkbox-DSMCczXO.js";import"./minus-Cuki4ueG.js";import"./tick-s8NLRhbg.js";import"./useValueChanged-DvckMFHu.js";import"./caret-down-BlO4iYKN.js";import"./CollapsiblePanel-Dl2v7Zaf.js";import"./MultiColumnSortDialog-GWO_PYIb.js";import"./MenuTrigger-WuyKFSEu.js";import"./CompositeItem-BeNd1EcZ.js";import"./ToolbarRootContext-C_Wh8Bm0.js";import"./getDisabledMountTransitionStyles-BiighB_e.js";import"./getPseudoElementBounds-BPyvZZ25.js";import"./chevron-down-De0mGeAX.js";import"./index-CSupOoj1.js";import"./error-B3EqSWGF.js";import"./BaseCbacBanner-DnxH874C.js";import"./makeExternalStore-DMHblOlq.js";import"./Tooltip-64eYTJZI.js";import"./PopoverPopup-DmafoOpZ.js";import"./toNumber-CNZwgXtt.js";import"./useOsdkClient-Bkgpx5aG.js";import"./DropdownField-oMuWeY6q.js";import"./withOsdkMetrics-BCikKbnS.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
