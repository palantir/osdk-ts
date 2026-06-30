import{f as n,j as t}from"./iframe-l9qVKk_h.js";import{O as p}from"./object-table-D2LNARXZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CeAAu9IW.js";import"./Table-H4QXpCZ_.js";import"./index-BHoGjpS3.js";import"./Dialog-DVJtrWnX.js";import"./cross-Ds51LG9m.js";import"./svgIconContainer-CAzybjiF.js";import"./useBaseUiId-CbnfRBmg.js";import"./InternalBackdrop-yHqL48nO.js";import"./composite-D-4XrB5f.js";import"./index-DpMQMu1P.js";import"./index-a_QuptCd.js";import"./index-c_0A-Zt8.js";import"./useEventCallback-vG85Phtq.js";import"./SkeletonBar-BmwSFW8Z.js";import"./LoadingCell-BWmfkwWm.js";import"./ColumnConfigDialog-BYhXg8Pd.js";import"./DraggableList-BpMddYsd.js";import"./search-nFffqI-8.js";import"./Input-BqbMFRQb.js";import"./useControlled-EjYXBnqg.js";import"./Button-BaDSsPLP.js";import"./small-cross-ColZtM_H.js";import"./ActionButton-DhzKfDPF.js";import"./Checkbox-BTH4-wD6.js";import"./minus-DYhHf52e.js";import"./tick-Dj7-0DA2.js";import"./useValueChanged-iXAGYuUJ.js";import"./caret-down-CvfF3tUW.js";import"./CollapsiblePanel-HdBzQ51A.js";import"./MultiColumnSortDialog-CGBleMtN.js";import"./MenuTrigger-Dz8uM8sy.js";import"./CompositeItem-B4j-arzc.js";import"./ToolbarRootContext-CzIYjHZF.js";import"./getDisabledMountTransitionStyles-B_OTSwUP.js";import"./getPseudoElementBounds-YDNd4Dqe.js";import"./chevron-down-Do-BqmH3.js";import"./index-CZkQaOL2.js";import"./error-DwWpVcA1.js";import"./BaseCbacBanner-DTUVOyXS.js";import"./makeExternalStore-B8M-W7eB.js";import"./Tooltip-LYCYn0z3.js";import"./PopoverPopup-CSx9mObT.js";import"./toNumber-BpW5uQen.js";import"./useOsdkClient-Db3JizoI.js";import"./DropdownField-UEnQaTvU.js";import"./withOsdkMetrics-Crh41W7X.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
