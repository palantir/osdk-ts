import{f as p,j as e}from"./iframe-CXrJqDi7.js";import{O as i}from"./object-table-Cd3STzG6.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-jkRaFgLU.js";import"./Table-BhBhFKEz.js";import"./index-CIjDsdU0.js";import"./Dialog-B9epiWv4.js";import"./cross-BukSyOKz.js";import"./svgIconContainer-BzSV1llx.js";import"./useBaseUiId-DRTWV3IQ.js";import"./InternalBackdrop-ZhhoRitJ.js";import"./composite-BIMYEycB.js";import"./index-rAYh6pbi.js";import"./index-CUgOIZQ8.js";import"./index-DCDlBCaZ.js";import"./useEventCallback-JwHO2nyR.js";import"./SkeletonBar-BwxqUkGA.js";import"./LoadingCell-0V77jspv.js";import"./ColumnConfigDialog-D1Ji2zsY.js";import"./DraggableList-CYP5Vy9D.js";import"./search-Dyn6N2H3.js";import"./Input-CvxpQ6Xp.js";import"./useControlled-BrDZ81ve.js";import"./Button-BnGcPvMs.js";import"./small-cross-FSbZyUiS.js";import"./ActionButton-C9HLEbBL.js";import"./Checkbox-DWj--UOb.js";import"./useValueChanged-5Z86VqGU.js";import"./CollapsiblePanel-BopoqNCU.js";import"./MultiColumnSortDialog-rx6YdH4_.js";import"./MenuTrigger-De9J9ONv.js";import"./CompositeItem-CyZPBPBK.js";import"./ToolbarRootContext-Dha7jpb4.js";import"./getDisabledMountTransitionStyles-D6coONqb.js";import"./getPseudoElementBounds-BFV0DdWn.js";import"./chevron-down-vVCEooOb.js";import"./index-WbZsn1IX.js";import"./error-bx5NADv9.js";import"./BaseCbacBanner-B-0TwJ_2.js";import"./makeExternalStore-Bxt_lPGm.js";import"./Tooltip-DdLaENUl.js";import"./PopoverPopup-DE4OVcAD.js";import"./debounce-DfSTdNM2.js";import"./useOsdkClient-DBydK2k_.js";import"./tick-BKMBX6oh.js";import"./DropdownField-Be1p7WjB.js";import"./isEqual-CVznVMsb.js";import"./withOsdkMetrics-Dl4aNlWl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
