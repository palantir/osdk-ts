import{f as p,j as e}from"./iframe-Dxf4Pfii.js";import{O as i}from"./object-table-teUVeBQF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Ci8NMOYF.js";import"./Table-Dq5REfPe.js";import"./index-BPBHjHBt.js";import"./Dialog-mndqTSLP.js";import"./cross-COrhxFBC.js";import"./svgIconContainer-BdxGOMXV.js";import"./useBaseUiId-BBachgDn.js";import"./InternalBackdrop-CFrJwRy4.js";import"./composite-BAA7WPxj.js";import"./index-Dsk0oEX3.js";import"./index-DlHivqB_.js";import"./index-CA0xM10N.js";import"./useEventCallback-DZCNq0Gg.js";import"./SkeletonBar-DyvtAZ1q.js";import"./LoadingCell-C9sMEV6k.js";import"./ColumnConfigDialog-CCDthIHA.js";import"./DraggableList-CqWC8oEM.js";import"./search-BYBW1CEy.js";import"./Input-Dc5nJgGF.js";import"./useControlled-40F8gIyz.js";import"./Button-DiZtkqKs.js";import"./small-cross-CUKjKhkC.js";import"./ActionButton-ABdmTgM9.js";import"./Checkbox-xERkEuYE.js";import"./useValueChanged-CIVU-p1z.js";import"./CollapsiblePanel-B4bl4mBR.js";import"./MultiColumnSortDialog-U_EzV9Kr.js";import"./MenuTrigger-DZh473oa.js";import"./CompositeItem-6maKJylY.js";import"./ToolbarRootContext-CAbW4J_e.js";import"./getDisabledMountTransitionStyles-BKzkpdmr.js";import"./getPseudoElementBounds-BYX5JyBU.js";import"./chevron-down-DG4gq9Kw.js";import"./index-C6hYmHGr.js";import"./error-Cp32RNcr.js";import"./BaseCbacBanner-DXgTdQpZ.js";import"./makeExternalStore-DOGp9SoX.js";import"./Tooltip-DsvfSe4i.js";import"./PopoverPopup-DlIAjFIG.js";import"./debounce-CqpSqGTT.js";import"./useOsdkClient-5XyyZIRW.js";import"./tick--0CHJ2Jw.js";import"./DropdownField-4kbww5nN.js";import"./isEqual-O4AuTBeS.js";import"./withOsdkMetrics-DGJIUSZ9.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
