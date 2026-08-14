import{f as p,j as e}from"./iframe-ZQnTw6Mu.js";import{O as i}from"./object-table-VjCEQ2g5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-COwmt9io.js";import"./Table-DO7e5-3Q.js";import"./index-Bak_kxpO.js";import"./Dialog-C8YwB1to.js";import"./cross-dvjzW6Ys.js";import"./svgIconContainer-zMynHcXT.js";import"./useBaseUiId-Av3ESRn4.js";import"./InternalBackdrop-Qsz8azrK.js";import"./composite-CNYNMU2K.js";import"./index-Ik5TkMWF.js";import"./index-Bf52DBTe.js";import"./index-DfpvWPDi.js";import"./useEventCallback-CeUbtgbw.js";import"./SkeletonBar-Dgm9uPl0.js";import"./LoadingCell-CIjhjeS2.js";import"./ColumnConfigDialog-BWT2uBSi.js";import"./DraggableList-Ctrx9KC6.js";import"./search-BcJ2_wX2.js";import"./Input-BQqVIR5S.js";import"./useControlled-BApUdZQ6.js";import"./Button-kYFmJJeP.js";import"./small-cross-BLKDIIIs.js";import"./ActionButton-DY2D-_nH.js";import"./Checkbox-B7Q3lTD0.js";import"./useValueChanged-C4pb924U.js";import"./CollapsiblePanel-CxVYe-zl.js";import"./MultiColumnSortDialog-DYTtJA9W.js";import"./MenuTrigger-BovXshwK.js";import"./CompositeItem-agXPXgTu.js";import"./ToolbarRootContext-DbSl-Ybu.js";import"./getDisabledMountTransitionStyles-BtRqleFK.js";import"./getPseudoElementBounds-B3-Fohbc.js";import"./chevron-down-BYkOWi_f.js";import"./index-BKq3a1zJ.js";import"./error-BXfejV6f.js";import"./BaseCbacBanner-BUe4BhHO.js";import"./makeExternalStore-BK88dgnr.js";import"./Tooltip-CU9szSp1.js";import"./PopoverPopup-CEcziLeh.js";import"./debounce-B20oACA_.js";import"./useOsdkClient-FhDWA4Y3.js";import"./tick-CK4a_7vG.js";import"./DropdownField-CyRtpzR4.js";import"./isEqual-BMOE5IT2.js";import"./withOsdkMetrics-CrtXH3Cf.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
