import{f as p,j as e}from"./iframe-DcH5xezC.js";import{O as i}from"./object-table-CCvnPiSH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zu47KBbI.js";import"./Table-Dy9KocsG.js";import"./index-DbAD30nX.js";import"./Dialog-B5-mrXFN.js";import"./cross-Chd2V34f.js";import"./svgIconContainer-B5leceMR.js";import"./useBaseUiId-Bbtq32g0.js";import"./InternalBackdrop-DyFOy9BL.js";import"./composite-DA4kpS88.js";import"./index-DRxO555y.js";import"./index-B91Y8CCx.js";import"./index--Rg5YMM0.js";import"./useEventCallback-CLRIu-kV.js";import"./SkeletonBar-CrKV3y2b.js";import"./LoadingCell-CWgQfXVP.js";import"./ColumnConfigDialog-CNCkRvcG.js";import"./DraggableList-BZ5chcCZ.js";import"./search-BF1ckEWB.js";import"./Input-CHJLRFkf.js";import"./useControlled-BYauL-0P.js";import"./Button-DWi0EVGU.js";import"./small-cross-VAMEtZ-6.js";import"./ActionButton-CqL2_MDd.js";import"./Checkbox-rpNWgGoa.js";import"./useValueChanged-CM-EGciU.js";import"./CollapsiblePanel-D0_hAvFL.js";import"./MultiColumnSortDialog-jPjtDQhP.js";import"./MenuTrigger-L8QBqhYV.js";import"./CompositeItem-D4A9PZVo.js";import"./ToolbarRootContext-DDNTKhTz.js";import"./getDisabledMountTransitionStyles-DP9RwCAa.js";import"./getPseudoElementBounds-Dlvy_Xcp.js";import"./chevron-down-cNoDE_3k.js";import"./index-C7e3Vf0D.js";import"./error-BKi4y-Uw.js";import"./BaseCbacBanner-Bq_TsmNs.js";import"./makeExternalStore-DyQTnfpK.js";import"./Tooltip-DJvrdrIe.js";import"./PopoverPopup-Bkoo-Q_-.js";import"./debounce-CGWpxv8T.js";import"./useOsdkClient-D5k8Tf4N.js";import"./tick-JU-3FL-Z.js";import"./DropdownField-CrN4lGdi.js";import"./isEqual-BqvZfAJd.js";import"./withOsdkMetrics-BohsC0KD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
