import{f as p,j as e}from"./iframe-D0RhBbJ7.js";import{O as i}from"./object-table-B2fqQp0N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B4Xh17S2.js";import"./Table-CGxKeYPS.js";import"./index-D2Roz-9u.js";import"./Dialog-Babq4ltF.js";import"./cross-BW6hDEvA.js";import"./svgIconContainer-DuD4Mtb3.js";import"./useBaseUiId-T9aew-gX.js";import"./InternalBackdrop-xQTgedTo.js";import"./composite-B8QHgAvj.js";import"./index-j6SYw05A.js";import"./index-CxHqbhkx.js";import"./index-Bn0niQE2.js";import"./useEventCallback-DIb7RwpK.js";import"./SkeletonBar-DVDQ5O4X.js";import"./LoadingCell-CyocpwIK.js";import"./ColumnConfigDialog-nAo7pdLn.js";import"./DraggableList-BY2D44VA.js";import"./search-DRKOfXxF.js";import"./Input-CFIey-mK.js";import"./useControlled-BjciqBy6.js";import"./isEqual-TZ_78gjt.js";import"./isObject-BkOSfPK7.js";import"./Button-DB4dzGoL.js";import"./ActionButton-GLIuGSHH.js";import"./Checkbox-xVZfPybI.js";import"./useValueChanged-D_z1TQ_P.js";import"./CollapsiblePanel-C2d1N9XC.js";import"./MultiColumnSortDialog-Cn2hHO2h.js";import"./MenuTrigger-nLp5S_0_.js";import"./CompositeItem-BY-oynxC.js";import"./ToolbarRootContext-u1w7Gkl9.js";import"./getDisabledMountTransitionStyles-B0ANbSyH.js";import"./getPseudoElementBounds-D1fr0bY0.js";import"./chevron-down-DHSkS5E6.js";import"./index-CLNQopGb.js";import"./error-CRtUKBZI.js";import"./BaseCbacBanner-BAQdsUKn.js";import"./makeExternalStore-DPu8JMdK.js";import"./Tooltip-CIoxrFJN.js";import"./PopoverPopup-Bgai_nPn.js";import"./toNumber-DITuDXSM.js";import"./useOsdkClient-B41RwrWJ.js";import"./tick-BxjHAf9W.js";import"./DropdownField-RKVrx_8m.js";import"./withOsdkMetrics-B0Rjn456.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
