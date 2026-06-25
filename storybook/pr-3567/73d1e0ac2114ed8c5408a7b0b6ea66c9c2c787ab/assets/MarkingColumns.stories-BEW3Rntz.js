import{f as n,j as t}from"./iframe-Ci9OEgk1.js";import{O as p}from"./object-table-CalR23l0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-8sCrdDbL.js";import"./Table-Ceqps-ut.js";import"./index-DkMA7RU6.js";import"./Dialog-DKRzZo0C.js";import"./cross-B4HZSJqw.js";import"./svgIconContainer-Dv1tejIq.js";import"./useBaseUiId-D6vQddwn.js";import"./InternalBackdrop-CBYAvGzI.js";import"./composite-GDbwZnW0.js";import"./index-SVikJX9n.js";import"./index-_iib4Iaf.js";import"./index-DhQ0vgBz.js";import"./useEventCallback-DPw0YfxT.js";import"./SkeletonBar-CxbHVr8t.js";import"./LoadingCell-DXfpPEWE.js";import"./ColumnConfigDialog-CQhKSZxw.js";import"./DraggableList-CU1a4t0D.js";import"./Input-BU9SX9xW.js";import"./useControlled-BIoQnqvN.js";import"./Button-ZKTKU8-L.js";import"./small-cross-D_3GFq1H.js";import"./ActionButton-DpQhPuej.js";import"./Checkbox-HH0Zpy9p.js";import"./minus-BJZs7W1B.js";import"./useValueChanged-Clx629G1.js";import"./caret-down-BZkmTWb4.js";import"./CollapsiblePanel-BlwuIWf5.js";import"./MultiColumnSortDialog-hCAoC3aA.js";import"./MenuTrigger-YC-2esKr.js";import"./CompositeItem-CXrizCRc.js";import"./ToolbarRootContext-CF1tznBs.js";import"./getDisabledMountTransitionStyles-CjbsvGPU.js";import"./getPseudoElementBounds-3Np-Ljbp.js";import"./chevron-down--eMrF9nV.js";import"./index-CoQOplZM.js";import"./error-BshhoQ9-.js";import"./BaseCbacBanner-CTlD8XE6.js";import"./makeExternalStore-BPvpIWV1.js";import"./Tooltip-C3cemgtD.js";import"./PopoverPopup-H2L6RQzg.js";import"./toNumber-CGkag2OW.js";import"./useOsdkClient-3tUyvk3C.js";import"./DropdownField-DBR2g8Yh.js";import"./withOsdkMetrics-21p2vZyJ.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
