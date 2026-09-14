import{f as p,j as e}from"./iframe-jYOV-b_F.js";import{O as i}from"./object-table-ER46Kqbv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DU4dp1aN.js";import"./Table-CXyVPfAi.js";import"./index-Dy8g3oXx.js";import"./Dialog-DpEqyY2P.js";import"./cross-CihzmSlG.js";import"./svgIconContainer-CA_JwY2G.js";import"./useBaseUiId-D96OAV6j.js";import"./InternalBackdrop-DVW8uuqD.js";import"./composite-BzmrUUlD.js";import"./index-BeEj2nqC.js";import"./index-ClDKgmxW.js";import"./index-CukOFad8.js";import"./useEventCallback-CNXNkFCl.js";import"./SkeletonBar-DqT3CGGg.js";import"./LoadingCell-ZjH9jQZw.js";import"./ColumnConfigDialog-Dg5oJQCG.js";import"./DraggableList-stnRBhBr.js";import"./search-D-KgauV4.js";import"./Input-BMUKzcaw.js";import"./useControlled-BTG7h9NE.js";import"./Button-CWhgA2iR.js";import"./small-cross-D0bLxDZ1.js";import"./ActionButton-Dpswcr4W.js";import"./Checkbox-CVZRyAn3.js";import"./useValueChanged-DnbYI7cR.js";import"./CollapsiblePanel-BdQ-xqqb.js";import"./MultiColumnSortDialog-JSm3rIAr.js";import"./MenuTrigger-DXF12vt5.js";import"./CompositeItem-kjf0evVY.js";import"./ToolbarRootContext-Cv9is8EX.js";import"./getDisabledMountTransitionStyles-cOn0IGzp.js";import"./getPseudoElementBounds-aXTAgs7l.js";import"./chevron-down-CXyzKCEE.js";import"./index-DpuVJhHU.js";import"./error-DuFL7DmE.js";import"./BaseCbacBanner-DmrBjJVa.js";import"./makeExternalStore-DApOP_f0.js";import"./Tooltip-DJD3gADX.js";import"./PopoverPopup-BPI3lODj.js";import"./debounce-Cc847J6k.js";import"./useOsdkClient-vN6DzTqs.js";import"./tick-DkNi67AQ.js";import"./DropdownField-Zx-CWRyR.js";import"./isEqual-l4wrNuCJ.js";import"./withOsdkMetrics-D5SCgg1V.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
