import{f as p,j as e}from"./iframe-BefR0BAx.js";import{O as i}from"./object-table-Cl1cxBhi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D_muUgZZ.js";import"./Table-Bbsv4uan.js";import"./index-DI2v9xVU.js";import"./Dialog-D2CNWkJE.js";import"./cross-BihP7IYO.js";import"./svgIconContainer-CcaI0s95.js";import"./useBaseUiId-BnEhW10T.js";import"./InternalBackdrop-BaYjef9L.js";import"./composite-3yd-dfOO.js";import"./index-B0uyT0kH.js";import"./index-DHh2SPX3.js";import"./index-CmGKfrHw.js";import"./useEventCallback-RE9J9fb3.js";import"./SkeletonBar-BQEuDBTT.js";import"./LoadingCell-a1YjlDon.js";import"./ColumnConfigDialog-D8-Mz4_c.js";import"./DraggableList-8q3mEk2N.js";import"./search-BY8LPeq_.js";import"./Input-BgIQD_Ke.js";import"./useControlled-B0OAP1sO.js";import"./isEqual-DCCK4WBY.js";import"./isObject-DIUgRmYP.js";import"./Button-DI1B5wsL.js";import"./ActionButton-BTr_jfHn.js";import"./Checkbox-Dlu869_M.js";import"./useValueChanged-gDR6Oi3v.js";import"./CollapsiblePanel-DlAGvVsT.js";import"./MultiColumnSortDialog-B98AyuUx.js";import"./MenuTrigger-BG0GJahU.js";import"./CompositeItem-Bslbfoq2.js";import"./ToolbarRootContext-Bfg2cH-3.js";import"./getDisabledMountTransitionStyles-D-v5okLS.js";import"./getPseudoElementBounds-B_WYvVxH.js";import"./chevron-down-BfV0Otca.js";import"./index-CmoAwC0-.js";import"./error-DE1G-33b.js";import"./BaseCbacBanner-BMG75jme.js";import"./makeExternalStore-BWxrZDxx.js";import"./Tooltip-Dt-Twhia.js";import"./PopoverPopup-Bc50mxvp.js";import"./toNumber-4hosA8bD.js";import"./useOsdkClient-C3lcOu7D.js";import"./tick-CsCiMB1v.js";import"./DropdownField-CXf1ZULm.js";import"./withOsdkMetrics-BGhvxxIj.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
