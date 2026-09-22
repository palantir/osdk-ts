import{f as p,j as e}from"./iframe-CEjFXQ7i.js";import{O as i}from"./object-table-DSkg1M1h.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLeq1RMI.js";import"./Table-B9fOVtho.js";import"./index-D6JFDMhk.js";import"./Dialog-DzFXgghC.js";import"./cross-D6CNu_FK.js";import"./svgIconContainer-BmnNwyNQ.js";import"./useBaseUiId-DIsNXkIK.js";import"./InternalBackdrop-cEsiiajq.js";import"./composite-YofervN4.js";import"./index-DRlQNLpD.js";import"./index-B-VVrHtR.js";import"./index-D4xdv--D.js";import"./useEventCallback-DO0KrF-A.js";import"./SkeletonBar-DT9hE4gv.js";import"./LoadingCell-D85PK5AJ.js";import"./ColumnConfigDialog-D46zVtcj.js";import"./DraggableList-BZyIdZBv.js";import"./search-BURF39r2.js";import"./Input-CyL2x7p2.js";import"./useControlled-Bactb4pm.js";import"./Button-4xVurfNi.js";import"./small-cross-OzagSQJN.js";import"./ActionButton-ChX-Jzpd.js";import"./Checkbox-C7AiSlR0.js";import"./useValueChanged-BcDYkwEW.js";import"./CollapsiblePanel-fy30LupE.js";import"./MultiColumnSortDialog-DtTQpKwf.js";import"./MenuTrigger-JipuUt4m.js";import"./CompositeItem-B1vfMTcy.js";import"./ToolbarRootContext-CM1Snkhx.js";import"./getDisabledMountTransitionStyles-CCQ6XSw9.js";import"./getPseudoElementBounds-CVu5NcY5.js";import"./chevron-down-B26wW5MT.js";import"./index-Dwcp4INV.js";import"./error-Bcog9g9V.js";import"./BaseCbacBanner-CprDDsaN.js";import"./makeExternalStore-79RiVGfc.js";import"./Tooltip-BN52KZ5N.js";import"./PopoverPopup-2vrtL-xw.js";import"./debounce-CTnh9aDY.js";import"./useOsdkClient-CvwDornw.js";import"./tick-lx03iSJA.js";import"./DropdownField-vSNq3qus.js";import"./isEqual-D3NHAHrR.js";import"./withOsdkMetrics-DOR5d9wI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
