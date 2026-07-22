import{f as p,j as e}from"./iframe-CpIscZhw.js";import{O as i}from"./object-table-DExIUaKs.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CKL1SrJi.js";import"./Table-F8M0h7uG.js";import"./index-Bbg2WkYK.js";import"./Dialog-BTfwXurt.js";import"./cross-BiY2PLN4.js";import"./svgIconContainer-Bo0dryoI.js";import"./useBaseUiId-DKFRz7u_.js";import"./InternalBackdrop-DkfJf7KJ.js";import"./composite-BSkicZqF.js";import"./index-_k1fg5w-.js";import"./index-BSRo_UIf.js";import"./index-Cc37kO7c.js";import"./useEventCallback-CwEBZdvn.js";import"./SkeletonBar-DYQqnMcF.js";import"./LoadingCell-DLGuhZNX.js";import"./ColumnConfigDialog-CeqYFQqR.js";import"./DraggableList-CO69zXRQ.js";import"./search-Jceajqon.js";import"./Input-DvSM-OUx.js";import"./useControlled-CGunv8o7.js";import"./isEqual-y3kPmhQZ.js";import"./isObject-DbGkaUtb.js";import"./Button-ww1sLsLD.js";import"./ActionButton-D0mwK-Bb.js";import"./Checkbox-C5lZzT3T.js";import"./useValueChanged-GbbRLuPy.js";import"./CollapsiblePanel-BuxUZF0q.js";import"./MultiColumnSortDialog-CqOE6Xvl.js";import"./MenuTrigger-Up7T0qhd.js";import"./CompositeItem-Cx9E9PGy.js";import"./ToolbarRootContext-fuyfjlA6.js";import"./getDisabledMountTransitionStyles-D4XulON5.js";import"./getPseudoElementBounds-DSJANOQW.js";import"./chevron-down-BGZmvdK2.js";import"./index-4TzoUCSY.js";import"./error-CrZCprMy.js";import"./BaseCbacBanner-CKmAeuc6.js";import"./makeExternalStore-CrqilYoq.js";import"./Tooltip-fOOaPNmW.js";import"./PopoverPopup-D52RNKHy.js";import"./toNumber-BMg14M0e.js";import"./useOsdkClient-BLWyt4h8.js";import"./tick-CMTsFQi4.js";import"./DropdownField-C6iFv2wj.js";import"./withOsdkMetrics-9iqcjCiu.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
