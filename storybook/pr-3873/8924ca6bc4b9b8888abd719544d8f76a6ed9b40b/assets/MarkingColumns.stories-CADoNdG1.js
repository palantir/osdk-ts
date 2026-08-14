import{f as p,j as e}from"./iframe-CBrZfziz.js";import{O as i}from"./object-table-DgpN12v3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1Z52epK.js";import"./Table-BY3aOI22.js";import"./index-Cg9PAsxv.js";import"./Dialog-BcMlSlrF.js";import"./cross-CUjJ-5wv.js";import"./svgIconContainer-Dyb3dMVr.js";import"./useBaseUiId-rohArgKw.js";import"./InternalBackdrop-V0CkF19D.js";import"./composite-DsbP76iG.js";import"./index-BelcqY8o.js";import"./index-1iEJy2Ov.js";import"./index-Bae-mW45.js";import"./useEventCallback-BuEcwQ1V.js";import"./SkeletonBar-DUf6Dhh7.js";import"./LoadingCell-BihYYLTD.js";import"./ColumnConfigDialog-CqdmK7O6.js";import"./DraggableList-x3hT5q1h.js";import"./search-D5OSZ-8x.js";import"./Input-Z9Dcl-3O.js";import"./useControlled-DGjbGIEp.js";import"./Button-C6PfnoAg.js";import"./small-cross-BgphLRoU.js";import"./ActionButton-B64bWJbY.js";import"./Checkbox-DBzE_Cg7.js";import"./useValueChanged-BZvjAs-H.js";import"./CollapsiblePanel-CYyA9miJ.js";import"./MultiColumnSortDialog-CBJDppMh.js";import"./MenuTrigger-BJKTh4zN.js";import"./CompositeItem-BfobZyII.js";import"./ToolbarRootContext-P5RW03dk.js";import"./getDisabledMountTransitionStyles-BBlvU2B3.js";import"./getPseudoElementBounds-BnGi5c6o.js";import"./chevron-down-DSLPvc9w.js";import"./index-TRV83l-e.js";import"./error-B-tgnml8.js";import"./BaseCbacBanner-BMjyNEmC.js";import"./makeExternalStore-B8Ya0P1z.js";import"./Tooltip-Cyp7zXRj.js";import"./PopoverPopup-BeaN5rrP.js";import"./debounce-Byylbass.js";import"./useOsdkClient-SkJ9fsFZ.js";import"./tick-Do95XvNo.js";import"./DropdownField-7P6q9HW6.js";import"./isEqual-CqekdwE9.js";import"./withOsdkMetrics-CdS06qS5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
