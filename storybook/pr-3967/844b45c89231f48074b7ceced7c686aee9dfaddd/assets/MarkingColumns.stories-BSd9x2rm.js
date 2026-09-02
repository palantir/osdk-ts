import{f as p,j as e}from"./iframe-BDYkqvKe.js";import{O as i}from"./object-table-K5fMhv6U.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C36rJOAe.js";import"./Table-CT3JE7pW.js";import"./index-BRka1pCh.js";import"./Dialog-gUo4l4fk.js";import"./cross-BjNcEcWu.js";import"./svgIconContainer-CCyU9VHa.js";import"./useBaseUiId-UK_jdfAB.js";import"./InternalBackdrop-BmAe8PJ1.js";import"./composite-BODYGvTF.js";import"./index-F-0Lu3oA.js";import"./index-DMkY-4jo.js";import"./index-B9-WbJqu.js";import"./useEventCallback-iMH7A3pZ.js";import"./SkeletonBar-Cq_nprHL.js";import"./LoadingCell-DJ7KQfZH.js";import"./ColumnConfigDialog-iTIe4fMe.js";import"./DraggableList-DCvsjFKH.js";import"./search-CSsyQg3w.js";import"./Input-BR9BGUIw.js";import"./useControlled-ByKl2Iuv.js";import"./Button-CIPwZs7k.js";import"./small-cross-Cbjgg7ob.js";import"./ActionButton-DBYSomqw.js";import"./Checkbox-RA2YgDOE.js";import"./useValueChanged-CfjX2SMH.js";import"./CollapsiblePanel-aJJDXHKx.js";import"./MultiColumnSortDialog-CLpn8cYf.js";import"./MenuTrigger-etkbVx6I.js";import"./CompositeItem-CU4sB2os.js";import"./ToolbarRootContext-CxcdMdex.js";import"./getDisabledMountTransitionStyles-gipNIZ-N.js";import"./getPseudoElementBounds-BidLTe78.js";import"./chevron-down-DpmU34Wb.js";import"./index-DQIJwSCX.js";import"./error-BUARWoS0.js";import"./BaseCbacBanner-vwuuPXIN.js";import"./makeExternalStore-CG2NmNwS.js";import"./Tooltip-Bh4GJ4Q9.js";import"./PopoverPopup-CW8vS9sl.js";import"./debounce-BSt0zZQY.js";import"./useOsdkClient-dYN0Yvuj.js";import"./tick-ApKf3hEQ.js";import"./DropdownField-DwIxO86o.js";import"./isEqual-DnYx_c7F.js";import"./withOsdkMetrics-BDaIIid_.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
