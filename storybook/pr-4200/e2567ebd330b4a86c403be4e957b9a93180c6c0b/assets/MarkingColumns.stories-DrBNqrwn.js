import{f as p,j as e}from"./iframe-u7IuoPqS.js";import{O as i}from"./object-table-CwiiGrwV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cj56MnTO.js";import"./Table-Di4wiE30.js";import"./index-BoeQsLqp.js";import"./Dialog-CpvXnFfZ.js";import"./cross-C6E9vWMV.js";import"./svgIconContainer-B7-2IFM8.js";import"./useBaseUiId-BbTWfvqf.js";import"./InternalBackdrop-B6YckNyz.js";import"./composite-CN58o8c7.js";import"./index-Dj4--fik.js";import"./index-D32Dt5Vb.js";import"./index-BpkgF5rv.js";import"./useEventCallback-CKntwpr7.js";import"./SkeletonBar-D7FcAjBa.js";import"./LoadingCell-C7rWRneL.js";import"./ColumnConfigDialog-DmWSH25A.js";import"./DraggableList-DhymAh2k.js";import"./search-DFsiEXmE.js";import"./Input-zHybezEW.js";import"./useControlled-Bz9okVK9.js";import"./Button-CvzuhgBL.js";import"./small-cross-DaEkKO8E.js";import"./ActionButton-C24F2_0f.js";import"./Checkbox-Dqft24kT.js";import"./useValueChanged-IctLC50s.js";import"./CollapsiblePanel-BXTP71-2.js";import"./MultiColumnSortDialog-wCdTEjlb.js";import"./MenuTrigger-Z8BjAXwH.js";import"./CompositeItem-KI1SOpIs.js";import"./ToolbarRootContext-DD30MDHZ.js";import"./getDisabledMountTransitionStyles-CiLgfWr9.js";import"./getPseudoElementBounds-cKkhOfCl.js";import"./chevron-down-J58PJfTC.js";import"./index-B0Ziw4xI.js";import"./error-BqAhf9VK.js";import"./BaseCbacBanner-DPrwyNKc.js";import"./makeExternalStore-BUehwWYZ.js";import"./Tooltip-JWOTsvNT.js";import"./PopoverPopup-C4ZXIBTy.js";import"./debounce-IxsrJnss.js";import"./useOsdkClient-DIYDfnUU.js";import"./tick-D6HWtL2J.js";import"./DropdownField-BUflj4ln.js";import"./isEqual-BWjeHkq7.js";import"./withOsdkMetrics-myAMZpO7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
