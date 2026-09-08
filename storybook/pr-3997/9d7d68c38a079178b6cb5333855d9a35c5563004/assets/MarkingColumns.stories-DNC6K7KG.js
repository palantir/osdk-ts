import{f as p,j as e}from"./iframe-CA9OR36W.js";import{O as i}from"./object-table-Dg45hJld.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bon2kKhd.js";import"./Table-UIIFlubo.js";import"./index-B68sXqkL.js";import"./Dialog-CnoDnchP.js";import"./cross-BEXTKsVw.js";import"./svgIconContainer-CeElG9sP.js";import"./useBaseUiId-BgUh3svF.js";import"./InternalBackdrop-JZwsIqkQ.js";import"./composite-Bz-KrWYH.js";import"./index-B8B9EgfF.js";import"./index-y3ZmFdkO.js";import"./index-B4EpkH5w.js";import"./useEventCallback-DIoxvDdl.js";import"./SkeletonBar-CVEQK3PW.js";import"./LoadingCell-YFYCkKuO.js";import"./ColumnConfigDialog-DNT7Gnke.js";import"./DraggableList-CACrYVx3.js";import"./search-BMMtCvCc.js";import"./Input-CexGKOKO.js";import"./useControlled-DI90JDHo.js";import"./Button-CP1_IUal.js";import"./small-cross-D_wkcItQ.js";import"./ActionButton-COKreHN7.js";import"./Checkbox-CIeNahPP.js";import"./useValueChanged-CkmYGlvP.js";import"./CollapsiblePanel-KgY9Iaos.js";import"./MultiColumnSortDialog-DnzJ-tS3.js";import"./MenuTrigger-6LAbxucn.js";import"./CompositeItem-DyzBw55k.js";import"./ToolbarRootContext-BVT0PB0Z.js";import"./getDisabledMountTransitionStyles-CYn3iehE.js";import"./getPseudoElementBounds-BUh3aPLZ.js";import"./chevron-down-DnMJpivZ.js";import"./index-B8DsW-Cw.js";import"./error-COtQT1aa.js";import"./BaseCbacBanner-aKw2K9_3.js";import"./makeExternalStore-CEy1rwg3.js";import"./Tooltip-Bkp5cOWe.js";import"./PopoverPopup-DmlxI6AN.js";import"./debounce-B8YN_pz8.js";import"./useOsdkClient-0xBbicQt.js";import"./tick-CqxkYZWw.js";import"./DropdownField-CaFeBBw0.js";import"./isEqual-DSdnsWsX.js";import"./withOsdkMetrics-C5BDt541.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
