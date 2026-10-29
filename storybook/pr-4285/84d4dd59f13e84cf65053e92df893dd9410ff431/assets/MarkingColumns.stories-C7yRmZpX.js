import{f as p,j as e}from"./iframe-BJfHzdWS.js";import{O as i}from"./object-table-l7XN4Dbb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Be4hJibr.js";import"./Table-jF1s7PG6.js";import"./index-BSLvxwbk.js";import"./Dialog-1fpEI_I_.js";import"./cross-VeKqoNmu.js";import"./svgIconContainer-BhMqWeRt.js";import"./useBaseUiId-Xn3MqoRt.js";import"./InternalBackdrop-BzTHj0lc.js";import"./composite-CrQSucJ3.js";import"./index-C38cjlXr.js";import"./index-2WXta-5x.js";import"./index-SmxUvTww.js";import"./useEventCallback-CZI3wJzb.js";import"./SkeletonBar-bDcSNPdy.js";import"./LoadingCell-BY5Z7yg9.js";import"./ColumnConfigDialog-C94jaurd.js";import"./DraggableList-BE1mk1LV.js";import"./search-BzsA8JvQ.js";import"./Input-D-4Pcd1I.js";import"./useControlled-wFQSRpl4.js";import"./Button-CRGaJZKK.js";import"./small-cross-Cz9VsZUQ.js";import"./ActionButton-oml20GK7.js";import"./Checkbox-CjRQW81g.js";import"./useValueChanged-CGAdYuDI.js";import"./CollapsiblePanel-D9aghLn1.js";import"./MultiColumnSortDialog-D6hD_uIF.js";import"./MenuTrigger-BxuUnaU_.js";import"./CompositeItem-BKpyjtDM.js";import"./ToolbarRootContext-C9Lowhby.js";import"./getDisabledMountTransitionStyles-COzoDZ6v.js";import"./getPseudoElementBounds-zMviCxRX.js";import"./chevron-down-DcDfg2mn.js";import"./index-N4ZXm_T-.js";import"./error-D3R8RgSf.js";import"./BaseCbacBanner-CmLJNbPo.js";import"./makeExternalStore-DIVL--_e.js";import"./Tooltip-C_0TZ3Gg.js";import"./PopoverPopup-CX838QZ3.js";import"./debounce-DdyhzCuY.js";import"./useOsdkClient-_bAI4gJ8.js";import"./tick-DV36iul2.js";import"./DropdownField-BpAH7R9v.js";import"./isEqual-Bsbd3Ppd.js";import"./withOsdkMetrics-DUXg2PFQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
