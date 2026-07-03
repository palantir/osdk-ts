import{f as n,j as t}from"./iframe-Ct3oxr9I.js";import{O as p}from"./object-table-CSjABLkC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cpix7I59.js";import"./Table-CLTcGTc3.js";import"./index-BeEk7T1w.js";import"./Dialog-Ce4lIITg.js";import"./cross-BMADg6y6.js";import"./svgIconContainer-BPTRZNd7.js";import"./useBaseUiId-DrNLrMt2.js";import"./InternalBackdrop-CSLfISGf.js";import"./composite-CMfYV8DM.js";import"./index-1uXXO74H.js";import"./index-CDpKJhZ5.js";import"./index-C8HOIxQp.js";import"./useEventCallback-k7DqcGil.js";import"./SkeletonBar-Bedbz1Nr.js";import"./LoadingCell-DmsCJtVe.js";import"./ColumnConfigDialog-C6xxCd5f.js";import"./DraggableList-VeNpOQ8s.js";import"./search-DVZxNNQh.js";import"./Input-Cjly-w9P.js";import"./useControlled-B3TsBytj.js";import"./Button-CV4FI36d.js";import"./small-cross-B3O2MU3_.js";import"./ActionButton-BQQh8gGV.js";import"./Checkbox-1niPv3J6.js";import"./useValueChanged-DiVwA_uk.js";import"./CollapsiblePanel-DIZMMwNq.js";import"./MultiColumnSortDialog-CzIieURU.js";import"./MenuTrigger-BJGI-hYP.js";import"./CompositeItem-C4Lg52S-.js";import"./ToolbarRootContext-Cj7czbwT.js";import"./getDisabledMountTransitionStyles-DVbZgRkg.js";import"./getPseudoElementBounds-DA8S38vA.js";import"./chevron-down-BNs-bhsK.js";import"./index-DLMrgljF.js";import"./error-BBSgIsYT.js";import"./BaseCbacBanner-CLMl4XCn.js";import"./makeExternalStore-rhS6SIAC.js";import"./Tooltip-YC0sAdup.js";import"./PopoverPopup-B88CTSAN.js";import"./toNumber-Bxm5uqpe.js";import"./useOsdkClient-CAdGRQxY.js";import"./tick-yGMEq9M3.js";import"./DropdownField-JWICtErB.js";import"./withOsdkMetrics-CUO9lnTj.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
