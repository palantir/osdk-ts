import{f as p,j as e}from"./iframe-C9OBkxCO.js";import{O as i}from"./object-table-DyBh1eIW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DzUjaibC.js";import"./Table-GHPPppGw.js";import"./index-CFjFkJ-v.js";import"./Dialog-C6jklDg1.js";import"./cross-DLECAn5_.js";import"./svgIconContainer-BvHwqNKP.js";import"./useBaseUiId-DrS8qHSd.js";import"./InternalBackdrop-CTmndIKQ.js";import"./composite-BI-3SHGF.js";import"./index-Ddu0h4gv.js";import"./index-_alj9X0j.js";import"./index-Bz5VFwta.js";import"./useEventCallback-DMriD0tz.js";import"./SkeletonBar-B8LNf0OH.js";import"./LoadingCell-BNyFOuWS.js";import"./ColumnConfigDialog-CVP1LZzf.js";import"./DraggableList-mTF-cNUq.js";import"./search-Cdrrqif2.js";import"./Input-DCcVeBLD.js";import"./useControlled-B3h0MmL1.js";import"./Button-DNW3Z-M9.js";import"./small-cross-Bpi6NFfA.js";import"./ActionButton-CPbx2fv2.js";import"./Checkbox-B1X_Gn66.js";import"./useValueChanged-Cja-sQjh.js";import"./CollapsiblePanel-89P4kXtj.js";import"./MultiColumnSortDialog-DWLrTEOw.js";import"./MenuTrigger-CGFwpF3E.js";import"./CompositeItem-ByNf42qV.js";import"./ToolbarRootContext-BjF8crHV.js";import"./getDisabledMountTransitionStyles-BYJIZN46.js";import"./getPseudoElementBounds-ChGaSxDt.js";import"./chevron-down-CRsfqdiU.js";import"./index-N_Ci-Ahv.js";import"./error-uXY_ifTf.js";import"./BaseCbacBanner-D8iGPSUH.js";import"./makeExternalStore-C1NBDQik.js";import"./Tooltip-BCMNs8th.js";import"./PopoverPopup-DvMdOZuS.js";import"./debounce-QFWpzeYe.js";import"./useOsdkClient-BkQTDtpM.js";import"./tick-BLKcW3rj.js";import"./DropdownField-DMyThSPG.js";import"./isEqual-DXjNUwI4.js";import"./withOsdkMetrics-BMU2Z44Q.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
