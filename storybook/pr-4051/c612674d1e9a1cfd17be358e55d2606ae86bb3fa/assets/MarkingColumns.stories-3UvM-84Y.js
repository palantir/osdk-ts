import{f as p,j as e}from"./iframe-UjTNASi3.js";import{O as i}from"./object-table-DIW9dq4B.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChUqF7Rx.js";import"./Table-MN_vrx7q.js";import"./index-CBLOqz9O.js";import"./Dialog-yrlpxn2H.js";import"./cross-BEq_sPpX.js";import"./svgIconContainer-BnZ--aX4.js";import"./useBaseUiId-DbZZYE7u.js";import"./InternalBackdrop-BCPpUKFw.js";import"./composite-BsaBRbEf.js";import"./index-bodWc-gm.js";import"./index-D5cIctx_.js";import"./index-Bzh_X7xQ.js";import"./useEventCallback-FKK13t9n.js";import"./SkeletonBar-BPWMNsbJ.js";import"./LoadingCell-CLJ65w3A.js";import"./ColumnConfigDialog-CL9JPzWq.js";import"./DraggableList-DpDJvc4F.js";import"./search-4dG4ZP2W.js";import"./Input-BLyk5LFB.js";import"./useControlled-C5YhSjey.js";import"./Button-DAjQjRlz.js";import"./small-cross-xy7dzoIW.js";import"./ActionButton-DwiWw116.js";import"./Checkbox-V82sjqAR.js";import"./useValueChanged-BLjWbJ6t.js";import"./CollapsiblePanel-DWpVdDad.js";import"./MultiColumnSortDialog-BKTCkKju.js";import"./MenuTrigger-Bh44Tetg.js";import"./CompositeItem-B-v9FANt.js";import"./ToolbarRootContext-BlxyZF17.js";import"./getDisabledMountTransitionStyles-DSqUzqL9.js";import"./getPseudoElementBounds-Dhsw8tBA.js";import"./chevron-down-B950jIbn.js";import"./index-CCVIwSxo.js";import"./error-K7GcRxh8.js";import"./BaseCbacBanner-CyOIqrYI.js";import"./makeExternalStore-BAIn4U_g.js";import"./Tooltip-D20tmfcP.js";import"./PopoverPopup-DfAiwejK.js";import"./debounce-C0USvgmQ.js";import"./useOsdkClient-DN28ZgTP.js";import"./tick-pbW1n8ts.js";import"./DropdownField-B-vNGTny.js";import"./isEqual-CIzOEpNl.js";import"./withOsdkMetrics-viX3FGJl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
