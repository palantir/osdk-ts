import{f as p,j as e}from"./iframe-DJNQVBhP.js";import{O as i}from"./object-table-B9t8qM78.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dd3_dQYh.js";import"./Table-Dx6f_VuV.js";import"./index-CphRLvVE.js";import"./Dialog-B9ctGsOx.js";import"./cross-DsRxB_p3.js";import"./svgIconContainer-DCiAh43S.js";import"./useBaseUiId-Cz2X2F5p.js";import"./InternalBackdrop-BZQ8c9pm.js";import"./composite-Ct6qnndE.js";import"./index-CmyN3uxX.js";import"./index-a7advLwQ.js";import"./index-D4qLI3jW.js";import"./useEventCallback-BM4mhydT.js";import"./SkeletonBar-DQOnWFIQ.js";import"./LoadingCell--U8WogEj.js";import"./ColumnConfigDialog-DMIwDHBp.js";import"./DraggableList-_Q-j7IUZ.js";import"./search-C_y30h_d.js";import"./Input-FTUus8ay.js";import"./useControlled-BkxsgPSI.js";import"./isEqual-ByhWP8Lo.js";import"./isObject-BhdOJrex.js";import"./Button-AHG0YTUa.js";import"./ActionButton-1kHfimgg.js";import"./Checkbox-jo06geF9.js";import"./useValueChanged-DYk1G5aa.js";import"./CollapsiblePanel-DPgiaCtq.js";import"./MultiColumnSortDialog-Dn3bXmK_.js";import"./MenuTrigger-D6_84Az4.js";import"./CompositeItem-BYt7z6Mp.js";import"./ToolbarRootContext-80wFuusO.js";import"./getDisabledMountTransitionStyles-DmO6f7A1.js";import"./getPseudoElementBounds-BXqYkt3j.js";import"./chevron-down-Cy7vDLtZ.js";import"./index-hfdoxJDN.js";import"./error-CeYxwre0.js";import"./BaseCbacBanner-CbOoO5AE.js";import"./makeExternalStore-DnBSFN8S.js";import"./Tooltip-C7rbNABY.js";import"./PopoverPopup-D7FpibGO.js";import"./toNumber-BRyyrH-m.js";import"./useOsdkClient-2kF2kDK1.js";import"./tick-D908gNrJ.js";import"./DropdownField-Drk0XneQ.js";import"./withOsdkMetrics-zXitcxEN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
