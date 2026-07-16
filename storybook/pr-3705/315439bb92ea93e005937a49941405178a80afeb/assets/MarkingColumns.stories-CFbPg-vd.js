import{f as p,j as e}from"./iframe-DCDT_GEC.js";import{O as i}from"./object-table-B2Xhh7-1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bib2WHN0.js";import"./Table-Bjemn4ZK.js";import"./index-DQF2gROF.js";import"./Dialog-guj3eCbx.js";import"./cross-D0ezV9wV.js";import"./svgIconContainer-zVAc1HP4.js";import"./useBaseUiId-FuvCdJd6.js";import"./InternalBackdrop-DJEJs06X.js";import"./composite-DH_q14qD.js";import"./index-CU-EXkPD.js";import"./index-C5ieCprR.js";import"./index-aQ1y3zCB.js";import"./useEventCallback-mKCpe9Qm.js";import"./SkeletonBar-CIudgoih.js";import"./LoadingCell-2M1ewjmO.js";import"./ColumnConfigDialog-CEzZI6qq.js";import"./DraggableList-CRSSB-9r.js";import"./search-D9zbOR7d.js";import"./Input-D0Bf3WdC.js";import"./useControlled-CPbv6-hY.js";import"./isEqual-wbrjZ5Ox.js";import"./isObject-gOdt8umz.js";import"./Button-DYyYqqv7.js";import"./ActionButton-BJN6tWTh.js";import"./Checkbox-BwMea7Cw.js";import"./useValueChanged-0W_3mzOi.js";import"./CollapsiblePanel-C0i7ZzjL.js";import"./MultiColumnSortDialog-C2NPq1G-.js";import"./MenuTrigger-xaMQcA2q.js";import"./CompositeItem-EJcBvamT.js";import"./ToolbarRootContext-TK-ZGDXl.js";import"./getDisabledMountTransitionStyles-rz1DesUN.js";import"./getPseudoElementBounds-D7c7uIUb.js";import"./chevron-down-Dn1IJT36.js";import"./index-C_ovaKx1.js";import"./error-DzLrnjHD.js";import"./BaseCbacBanner-Du-LYEsQ.js";import"./makeExternalStore-5BoqGt7e.js";import"./Tooltip-B35DjJOj.js";import"./PopoverPopup-41BGVEmI.js";import"./toNumber-CzpC-362.js";import"./useOsdkClient-DnTwvX4l.js";import"./tick-DPj8j-FE.js";import"./DropdownField-DFiC8lgE.js";import"./withOsdkMetrics-DnKnMeSY.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
