import{f as p,j as e}from"./iframe-BwtdJUQ8.js";import{O as i}from"./object-table-av6kKlTv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DJuGrF4Q.js";import"./Table-Z-O0NX-2.js";import"./index-ecbPEJsH.js";import"./Dialog-B_W78HUj.js";import"./cross-D5O7asJB.js";import"./svgIconContainer-BpIR-cOm.js";import"./useBaseUiId-DlvOV9lG.js";import"./InternalBackdrop-CisMUyd7.js";import"./composite-DglRx_pb.js";import"./index-D-6QZGaS.js";import"./index-NBYYlFiK.js";import"./index-BwJhQ8nN.js";import"./useEventCallback-MmoNwFiG.js";import"./SkeletonBar-BlzetxzD.js";import"./LoadingCell-hO_dH2eC.js";import"./ColumnConfigDialog-BfntsKdn.js";import"./DraggableList-BzxAZyLJ.js";import"./search-BMvzDH_4.js";import"./Input-Ckc7B0k2.js";import"./useControlled-CTxNl2GG.js";import"./Button-a-v4YEmM.js";import"./small-cross-I0t2HoBL.js";import"./ActionButton-DqEhm5OJ.js";import"./Checkbox-C99ZgYQU.js";import"./useValueChanged-CCi2b_rF.js";import"./CollapsiblePanel-YpC4VMjy.js";import"./MultiColumnSortDialog-CAn6zX2c.js";import"./MenuTrigger-C5yVijsH.js";import"./CompositeItem-gNAn1-ON.js";import"./ToolbarRootContext-B6jDfH-i.js";import"./getDisabledMountTransitionStyles-CQlZrmJ4.js";import"./getPseudoElementBounds-Bh8KnJGz.js";import"./chevron-down-DAI8xIlK.js";import"./index-BkxqopTp.js";import"./error-B3Glsuys.js";import"./BaseCbacBanner-CKiruCeJ.js";import"./makeExternalStore-BDYC9xXC.js";import"./Tooltip-j2N8aKD1.js";import"./PopoverPopup-tHLORX91.js";import"./debounce-DG4OIz6a.js";import"./useOsdkClient-BqxjQYKW.js";import"./tick-B5x4eMkK.js";import"./DropdownField-DTj4mE1E.js";import"./isEqual-D1B6T6kU.js";import"./withOsdkMetrics-DjmWzspB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
