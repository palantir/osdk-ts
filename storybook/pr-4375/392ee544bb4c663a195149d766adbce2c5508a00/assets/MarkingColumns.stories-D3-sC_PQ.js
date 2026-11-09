import{f as p,j as e}from"./iframe-HL5MQevY.js";import{O as i}from"./object-table-Br4gN5qL.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-_Ar_KgCE.js";import"./Table-Dr5Fkr5G.js";import"./index-CgN-SBJb.js";import"./Dialog-BK9qLDgm.js";import"./cross-peQbcr5N.js";import"./svgIconContainer-BLMvF_H6.js";import"./useBaseUiId-DySigJtL.js";import"./InternalBackdrop-CKzg6RWA.js";import"./composite-DWznhUuB.js";import"./index-CrQU1n-1.js";import"./index-f_DjFpxo.js";import"./index-C5eyjoS4.js";import"./useEventCallback-DlHXQ56Q.js";import"./SkeletonBar-B-apZFZ9.js";import"./LoadingCell-DSvyww-o.js";import"./ColumnConfigDialog-4ALjdxqV.js";import"./DraggableList-CIVKfffU.js";import"./search-BmC04ZEV.js";import"./Input-DgL7dTdA.js";import"./useControlled-BtrL0bqk.js";import"./Button-CqmZF1Qg.js";import"./small-cross-CMw0W6zl.js";import"./ActionButton-BLpeWzFG.js";import"./Checkbox-Hr-W96Z2.js";import"./useValueChanged-B9yWsaBI.js";import"./CollapsiblePanel-VgvJldOc.js";import"./MultiColumnSortDialog-Bw9P7eMf.js";import"./MenuTrigger-CA8etj0e.js";import"./CompositeItem-BWnHlDKK.js";import"./ToolbarRootContext-Egv6Ob_q.js";import"./getDisabledMountTransitionStyles-BxwARY5V.js";import"./getPseudoElementBounds-CHzRmgRw.js";import"./chevron-down-BP0kQuP_.js";import"./index-D0tF1Jnd.js";import"./error-CIfjiXVi.js";import"./BaseCbacBanner-DW6vW6kE.js";import"./makeExternalStore-CTUMxwBz.js";import"./Tooltip-fPY7edYe.js";import"./isObject-BqGyebfI.js";import"./debounce-CBt-yOgZ.js";import"./useOsdkClient-BNLgdfP5.js";import"./tick-BndTvqfU.js";import"./DropdownField-8OaEx8Wn.js";import"./isEqual-BBF27A1Q.js";import"./_baseIsEqual-DmjT90h1.js";import"./withOsdkMetrics-B6341jPo.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
