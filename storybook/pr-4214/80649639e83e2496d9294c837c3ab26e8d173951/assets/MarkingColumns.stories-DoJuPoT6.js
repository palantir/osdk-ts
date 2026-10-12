import{f as p,j as e}from"./iframe-EQYHZGCW.js";import{O as i}from"./object-table-D9hNiE1B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0iBIgcV.js";import"./Table-Cf4en3W7.js";import"./index-DcRUH42g.js";import"./Dialog-D9xIFL2n.js";import"./cross-C8-00d-y.js";import"./svgIconContainer-D1wDh7_l.js";import"./useBaseUiId-B-jRpzmU.js";import"./InternalBackdrop-eYIHjnQ3.js";import"./composite-CIqX99J4.js";import"./index-CKjEOO1w.js";import"./index-CIgaZG3c.js";import"./index-D0Wo5FO3.js";import"./useEventCallback-BSME_xf2.js";import"./SkeletonBar-3kB07n5e.js";import"./LoadingCell-lCcSsnES.js";import"./ColumnConfigDialog-DXmrsezo.js";import"./DraggableList-BL7JJ4PT.js";import"./search-BVTqMz5e.js";import"./Input-C4K0OIlf.js";import"./useControlled-D8_Vw_1O.js";import"./Button-DiwOmMcV.js";import"./small-cross-CbxvG1Lp.js";import"./ActionButton-3hxbNss0.js";import"./Checkbox-ERk9uuCO.js";import"./useValueChanged-DhKLyqGQ.js";import"./CollapsiblePanel-BfN11z03.js";import"./MultiColumnSortDialog-Cze2u-4H.js";import"./MenuTrigger-CEzznRiL.js";import"./CompositeItem-Bzt8qu7P.js";import"./ToolbarRootContext-DFyHSe1V.js";import"./getDisabledMountTransitionStyles-DstXpz2X.js";import"./getPseudoElementBounds-B45YCg5U.js";import"./chevron-down-HP5bea9D.js";import"./index-DVNPKMaj.js";import"./error-Cd2sdUKV.js";import"./BaseCbacBanner-B4yymivw.js";import"./makeExternalStore-CxRQlBs2.js";import"./Tooltip-D1rS0CVa.js";import"./PopoverPopup-wEOR7HLL.js";import"./debounce-EHAoHJMy.js";import"./useOsdkClient-CuIzd9gl.js";import"./tick-DTY36Y1v.js";import"./DropdownField-Dyd5qMS9.js";import"./isEqual-D4DzFFxH.js";import"./withOsdkMetrics-Dwt30EQ7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
