import{f as p,j as e}from"./iframe-CJIAHpsc.js";import{O as i}from"./object-table-CwUXi6yg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-6cWemOcr.js";import"./Table-D0rCsC0y.js";import"./index-BzlqDAfw.js";import"./Dialog-U3PPNzQj.js";import"./cross-D0IHJ6R4.js";import"./svgIconContainer-56SLvs0U.js";import"./useBaseUiId-DvojBwxI.js";import"./InternalBackdrop-C4MFPAsi.js";import"./composite-CFOr0BZu.js";import"./index-DiBt9TUI.js";import"./index-BzXh_3LE.js";import"./index-CFmt81Rk.js";import"./useEventCallback-B1gWvbDg.js";import"./SkeletonBar-Dbp-LEnb.js";import"./LoadingCell-DNRrniXH.js";import"./ColumnConfigDialog-CDMrr0h-.js";import"./DraggableList-D3tJ5a8G.js";import"./search-Bfm8FcWQ.js";import"./Input-icqzcMB1.js";import"./useControlled-OjeTa2_t.js";import"./Button-B7ufGNzS.js";import"./small-cross-oWzWfK8v.js";import"./ActionButton-DVvDY0Pz.js";import"./Checkbox-DUM-1O-m.js";import"./useValueChanged-uNOI8JzK.js";import"./CollapsiblePanel-Dili79wA.js";import"./MultiColumnSortDialog-CHzBTx0p.js";import"./MenuTrigger-zbtqCKoD.js";import"./CompositeItem-Czysbmcp.js";import"./ToolbarRootContext-CJh9ljWw.js";import"./getDisabledMountTransitionStyles-DKmwvZAI.js";import"./getPseudoElementBounds-DvGqkRSV.js";import"./chevron-down-TVEh7Z-q.js";import"./index-D7-FHl4f.js";import"./error-D5dqG5sm.js";import"./BaseCbacBanner-N61U2yaQ.js";import"./makeExternalStore-BCywNTfM.js";import"./Tooltip-CeGxYMTK.js";import"./PopoverPopup-DewRGdkh.js";import"./debounce-2inWENXP.js";import"./useOsdkClient-Cut5RvL3.js";import"./tick-hj5PgKj5.js";import"./DropdownField-CBRqM-61.js";import"./isEqual-glBRSill.js";import"./withOsdkMetrics-mHYGalWz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
