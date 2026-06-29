import{f as n,j as t}from"./iframe-DgoyKrMA.js";import{O as p}from"./object-table-BDJxGvfg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B0nQfTcI.js";import"./Table-CXf24iHv.js";import"./index-AaUdncAY.js";import"./Dialog-BGiBKybc.js";import"./cross-DJcC46zn.js";import"./svgIconContainer-CjREsQum.js";import"./useBaseUiId-DuSsdC-V.js";import"./InternalBackdrop-CAgPM9rt.js";import"./composite-B2UAnxY_.js";import"./index-ClrSkKoK.js";import"./index-ivmBoQou.js";import"./index-C_TDW3lj.js";import"./useEventCallback-BPcrC7A7.js";import"./SkeletonBar-C7CmUyLZ.js";import"./LoadingCell-4jIfMe8M.js";import"./ColumnConfigDialog-BZd964CI.js";import"./DraggableList-Dlg3apg8.js";import"./search-DV7KFLuZ.js";import"./Input-BwILyUm2.js";import"./useControlled-Bf5Je3fS.js";import"./Button-CnrRhfIU.js";import"./small-cross-mRUAKOcb.js";import"./ActionButton-DUb0z2uJ.js";import"./Checkbox-CnGtQ0Yp.js";import"./minus-CI3B_Ta0.js";import"./tick-Be2gOV7a.js";import"./useValueChanged-DvcJooWB.js";import"./caret-down-DodzsHMt.js";import"./CollapsiblePanel-BkY_AT-k.js";import"./MultiColumnSortDialog-DNZgvh0T.js";import"./MenuTrigger-CGODXcVC.js";import"./CompositeItem-Cr2thBXg.js";import"./ToolbarRootContext-B2lXsL_Q.js";import"./getDisabledMountTransitionStyles-9w8FYi46.js";import"./getPseudoElementBounds-C8ZTNg2L.js";import"./chevron-down-DPt7J5eG.js";import"./index-BgnwFznl.js";import"./error-B4hvPJmm.js";import"./BaseCbacBanner-DnPAK7r3.js";import"./makeExternalStore-B2cgo-7D.js";import"./Tooltip-sUU9tFGQ.js";import"./PopoverPopup-BU1U6qD_.js";import"./toNumber-BWsXTX5n.js";import"./useOsdkClient-pfbNNRty.js";import"./DropdownField-Ii77R6H-.js";import"./withOsdkMetrics-JOv1iZ_z.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
