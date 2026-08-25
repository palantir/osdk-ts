import{f as p,j as e}from"./iframe-Bno8djo7.js";import{O as i}from"./object-table-nJ2m76fC.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoyMSojG.js";import"./Table-BjCnq7GD.js";import"./index-Bp1l5rWD.js";import"./Dialog-DAQFqKel.js";import"./cross-QI68TLXt.js";import"./svgIconContainer-BnD58swH.js";import"./useBaseUiId-CysbO9z2.js";import"./InternalBackdrop-Cn5KziF1.js";import"./composite-DfMqUtsP.js";import"./index-CTCxNRd0.js";import"./index-zlVZaIXm.js";import"./index-CNSLgLDR.js";import"./useEventCallback-YcQVIhsi.js";import"./SkeletonBar-aqALnIxM.js";import"./LoadingCell-DVWiWlTZ.js";import"./ColumnConfigDialog-CUZw6o28.js";import"./DraggableList-B5fYxue1.js";import"./search-Cwwb_s2u.js";import"./Input-DbgwKTdL.js";import"./useControlled-c3pzkWI7.js";import"./Button-C9PyxqvP.js";import"./small-cross-CBEoJXlf.js";import"./ActionButton-DLiePIQg.js";import"./Checkbox-Rj4xDxF3.js";import"./useValueChanged-uylpe4Ux.js";import"./CollapsiblePanel-BI8YmfWp.js";import"./MultiColumnSortDialog-BXYA9Uwj.js";import"./MenuTrigger-UmNPDpZR.js";import"./CompositeItem-4hPgfCxC.js";import"./ToolbarRootContext-Dql3SctO.js";import"./getDisabledMountTransitionStyles-q13OTEOP.js";import"./getPseudoElementBounds-DHmOFePC.js";import"./chevron-down-DPAZwO7T.js";import"./index-CyXtkMiX.js";import"./error-DdObSOoZ.js";import"./BaseCbacBanner-DWR6ArJJ.js";import"./makeExternalStore-BAXThE2g.js";import"./Tooltip-CE0qB4Lt.js";import"./PopoverPopup-Ctz89BjB.js";import"./debounce-BUYNR-N5.js";import"./useOsdkClient-DzQFMUb8.js";import"./tick-Bq0tsPSN.js";import"./DropdownField-IPHIVFRE.js";import"./isEqual-CkJTtiCd.js";import"./withOsdkMetrics-DvUN-3xf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
