import{f as p,j as e}from"./iframe-BX6zTnij.js";import{O as i}from"./object-table-HjumBpwO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CIctYDkr.js";import"./Table-KIccUGPl.js";import"./index-COyl-fnK.js";import"./Dialog-BBd-3h2m.js";import"./cross-DQs-8X1Y.js";import"./svgIconContainer-YvrcWCz5.js";import"./useBaseUiId-Iiv9zSt_.js";import"./InternalBackdrop-DERl9nUU.js";import"./composite-tNjYOXwg.js";import"./index-BXMmQHN1.js";import"./index-BBTcolHi.js";import"./index-BdFJFz6A.js";import"./useEventCallback-CXC3bTZZ.js";import"./SkeletonBar-BMTNEQmY.js";import"./LoadingCell-BDOMyR8x.js";import"./ColumnConfigDialog-CMkoR81A.js";import"./DraggableList-Ch6VbW8H.js";import"./search-CxVBrsXo.js";import"./Input-CSzJ0VGU.js";import"./useControlled-BbWNiggX.js";import"./isEqual-BULHHzuo.js";import"./isObject-Byb1sDcd.js";import"./Button-pMsIGg4G.js";import"./ActionButton-BXtG9d8G.js";import"./Checkbox-BSQI_4Tj.js";import"./useValueChanged-BRwHer1l.js";import"./CollapsiblePanel-CsPYgs9H.js";import"./MultiColumnSortDialog-UvnfXN2R.js";import"./MenuTrigger-Ds4lY9vq.js";import"./CompositeItem-BFxojHmW.js";import"./ToolbarRootContext-BEqq6mNC.js";import"./getDisabledMountTransitionStyles-BvemoO_E.js";import"./getPseudoElementBounds-C4OutAm4.js";import"./chevron-down-CJR3WBq7.js";import"./index-BpLkgj3w.js";import"./error-DLJXEcMM.js";import"./BaseCbacBanner-D93tYNJp.js";import"./makeExternalStore-BWA0mUfB.js";import"./Tooltip-b5S0dA7I.js";import"./PopoverPopup-9P-V5GZQ.js";import"./toNumber-BGKkQbGY.js";import"./useOsdkClient-BTAusKbD.js";import"./tick-C9TCC1fg.js";import"./DropdownField-CRXzHbV6.js";import"./withOsdkMetrics-B5u35hN9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
