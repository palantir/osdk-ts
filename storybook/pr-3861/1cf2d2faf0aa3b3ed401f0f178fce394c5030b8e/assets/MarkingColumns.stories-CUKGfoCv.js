import{f as p,j as e}from"./iframe-CtO4Vlsv.js";import{O as i}from"./object-table-CfDXyuYa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YqejZBGo.js";import"./Table-BhmKYFQW.js";import"./index-D6VuR_bO.js";import"./Dialog-CAHX-FYg.js";import"./cross-DIyr606b.js";import"./svgIconContainer-dYvBsUdw.js";import"./useBaseUiId-B7sMgTKT.js";import"./InternalBackdrop-BQN3hAK8.js";import"./composite-1A59BLWV.js";import"./index-BcgXYDjH.js";import"./index-Ct5AqRLg.js";import"./index-D1KfpWj6.js";import"./useEventCallback-08xL6vGn.js";import"./SkeletonBar-DK-zeHoP.js";import"./LoadingCell-Cwx7eJxl.js";import"./ColumnConfigDialog-C_D9dEBn.js";import"./DraggableList-Ck21qkeS.js";import"./search-BP5Cq0-y.js";import"./Input-D94oZ1yC.js";import"./useControlled-Dnk1LplJ.js";import"./Button-n85r1nQ7.js";import"./small-cross-CStP_9vV.js";import"./ActionButton-DUxsUnvW.js";import"./Checkbox-CdI01C-h.js";import"./useValueChanged-QyFlMkIr.js";import"./CollapsiblePanel-C_0dIlmL.js";import"./MultiColumnSortDialog-a2Rp5WvA.js";import"./MenuTrigger-BIuhzh2h.js";import"./CompositeItem-CyExzK58.js";import"./ToolbarRootContext-BV8nTPdY.js";import"./getDisabledMountTransitionStyles-BZ333I0A.js";import"./getPseudoElementBounds-CWG0I-Qb.js";import"./chevron-down-BoBfGWo-.js";import"./index-SvYPogYk.js";import"./error-xCVe8qee.js";import"./BaseCbacBanner-DzpHtGQw.js";import"./makeExternalStore-C1nOJgZ5.js";import"./Tooltip-DGCiUH60.js";import"./PopoverPopup-ClkuOGbd.js";import"./debounce-BO6wUQGo.js";import"./useOsdkClient-ScCgYAaB.js";import"./tick-Co0_coOt.js";import"./DropdownField-Bo8r8-09.js";import"./isEqual-6ELeF5kp.js";import"./withOsdkMetrics-DviXph28.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
