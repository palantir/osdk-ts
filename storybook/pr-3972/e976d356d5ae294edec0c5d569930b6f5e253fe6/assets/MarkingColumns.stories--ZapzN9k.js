import{f as p,j as e}from"./iframe-fyhOhwEJ.js";import{O as i}from"./object-table-DL8SFP3R.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZoapQc5.js";import"./Table-Ctpip_To.js";import"./index-D-0-qAO5.js";import"./Dialog-43hYOnmf.js";import"./cross-DcnXKO8D.js";import"./svgIconContainer-D3XXZDFA.js";import"./useBaseUiId-CZh58POx.js";import"./InternalBackdrop-vw9qXSiq.js";import"./composite-7m6ynQ4d.js";import"./index-B_-hV7j3.js";import"./index-CYvM2k13.js";import"./index-CrSiM7KM.js";import"./useEventCallback-DjM_GW4g.js";import"./SkeletonBar-Cw5Aef6j.js";import"./LoadingCell-CFwFhPVt.js";import"./ColumnConfigDialog-ByNW_vNZ.js";import"./DraggableList-D7BBk5vR.js";import"./search-wMsJ6744.js";import"./Input-Cz7IuMZA.js";import"./useControlled-ClsMoo9s.js";import"./Button-Co7avqcv.js";import"./small-cross-CAgcnaA8.js";import"./ActionButton-BZu6itaU.js";import"./Checkbox-mC8xxjCq.js";import"./useValueChanged-X0NoeIhA.js";import"./CollapsiblePanel-B9lz7yEt.js";import"./MultiColumnSortDialog-4iaVSLEp.js";import"./MenuTrigger-DmW7hve0.js";import"./CompositeItem-BW8rxov7.js";import"./ToolbarRootContext-D9LUIP1a.js";import"./getDisabledMountTransitionStyles-Cl4PQU1i.js";import"./getPseudoElementBounds-BYiy2Fl5.js";import"./chevron-down-BpyNxw-E.js";import"./index-Vhqxhhfj.js";import"./error-CMmhcpte.js";import"./BaseCbacBanner-C2PkaPNb.js";import"./makeExternalStore-NbT1IyrN.js";import"./Tooltip-D88G4HUZ.js";import"./PopoverPopup-B-sMZa0V.js";import"./debounce-C1ihnlW1.js";import"./useOsdkClient-IFEN1g4H.js";import"./tick-Dkudayrr.js";import"./DropdownField-DmsLnnQ3.js";import"./isEqual-B59dK6L3.js";import"./withOsdkMetrics-Bf5xCGJp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
