import{f as p,j as e}from"./iframe-BWi1ACEM.js";import{O as i}from"./object-table-CLdxWa0n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CMYTaGeR.js";import"./Table-B3Z4YM32.js";import"./index-D-2uEljO.js";import"./Dialog-Dbcy_K8j.js";import"./cross-CMcFjheT.js";import"./svgIconContainer-Cw0fxZBh.js";import"./useBaseUiId-YvjxUiEU.js";import"./InternalBackdrop-C8uaHnmS.js";import"./composite-4nRCZoba.js";import"./index-B_isAlQk.js";import"./index-DUFPmdn4.js";import"./index-DMoEONJx.js";import"./useEventCallback-Dvu0LVj3.js";import"./SkeletonBar-BHvw9YSk.js";import"./LoadingCell-CByB22ND.js";import"./ColumnConfigDialog-BUjwZfQ7.js";import"./DraggableList-B-4ddylM.js";import"./search-C-U4g2F4.js";import"./Input-rlMpFyex.js";import"./useControlled-CfVPwlXb.js";import"./Button-W_tcCiCZ.js";import"./small-cross-7-aG10PZ.js";import"./ActionButton-ClnNG4Uj.js";import"./Checkbox-C6dyiMCN.js";import"./useValueChanged-CBGJApuu.js";import"./CollapsiblePanel-cAHkXya3.js";import"./MultiColumnSortDialog-CABa_am7.js";import"./MenuTrigger-B_3p8oic.js";import"./CompositeItem-BGhZB90A.js";import"./ToolbarRootContext--XbyivlW.js";import"./getDisabledMountTransitionStyles-CGzwzFIs.js";import"./getPseudoElementBounds-DO2DurOI.js";import"./chevron-down-Dyruysbi.js";import"./index-DwdK-GcB.js";import"./error-Ru_WceS-.js";import"./BaseCbacBanner-DgCnPLXM.js";import"./makeExternalStore-DOcJRkhv.js";import"./Tooltip-C1JoGvq6.js";import"./PopoverPopup-Crv4q3Zt.js";import"./debounce-DVadtkz9.js";import"./useOsdkClient-BKedMyb4.js";import"./tick-Dgs22XJr.js";import"./DropdownField-BiyDva_F.js";import"./isEqual-CHmBQk58.js";import"./withOsdkMetrics-BqK1HlYa.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
