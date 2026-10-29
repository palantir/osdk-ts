import{f as p,j as e}from"./iframe-BgXQ_2ZQ.js";import{O as i}from"./object-table-CC0ZxKyO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BidOVzf2.js";import"./Table-JOmGqnGr.js";import"./index-Du7DARA2.js";import"./Dialog-Cb5azjs7.js";import"./cross-DjR1Bdqm.js";import"./svgIconContainer-Dt6fkfKI.js";import"./useBaseUiId-BDBZknBQ.js";import"./InternalBackdrop-c9jJBd1p.js";import"./composite-DkGW9dlU.js";import"./index-BrroAixZ.js";import"./index-BNVSiMmU.js";import"./index-BSei0jMm.js";import"./useEventCallback-R0FrqxvI.js";import"./SkeletonBar-BBIq-vhs.js";import"./LoadingCell-CsZKXS-Q.js";import"./ColumnConfigDialog-ByzLyWUj.js";import"./DraggableList-Bwy-m9j0.js";import"./search-DUa1f9S-.js";import"./Input-snLmBrpI.js";import"./useControlled-BJTO4Tz0.js";import"./Button-DyzWkyRc.js";import"./small-cross-DZhFWeH9.js";import"./ActionButton-BXIrWwIY.js";import"./Checkbox-Dl0Ot1yr.js";import"./useValueChanged-pU_y0YNC.js";import"./CollapsiblePanel-Bdczxe9M.js";import"./MultiColumnSortDialog-CoCx59aY.js";import"./MenuTrigger-Dz9YkOj_.js";import"./CompositeItem-BoTWi4na.js";import"./ToolbarRootContext-DnYkqago.js";import"./getDisabledMountTransitionStyles-D_LWhqVm.js";import"./getPseudoElementBounds-Df9rfh-s.js";import"./chevron-down-xbEb9_oS.js";import"./index-BR5r7qBw.js";import"./error-DWfidi70.js";import"./BaseCbacBanner-DkSenGHc.js";import"./makeExternalStore-Bhk5996J.js";import"./Tooltip-KBTfxc0_.js";import"./PopoverPopup-BYQDCscd.js";import"./debounce-DWFh7d24.js";import"./useOsdkClient-CcbFY1-2.js";import"./tick-Cj44jG3P.js";import"./DropdownField-CsQwc8Ii.js";import"./isEqual-DBPj2USA.js";import"./withOsdkMetrics-DMzLVnra.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
