import{f as p,j as e}from"./iframe-Bu669Pxz.js";import{O as i}from"./object-table-DK52PO3J.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BsSow9E-.js";import"./index-DKHlcWi3.js";import"./Dialog-BwCvlknS.js";import"./cross-6sB-IXgJ.js";import"./svgIconContainer-zdH7oio0.js";import"./useBaseUiId-B-sZe3p-.js";import"./InternalBackdrop-DFCC9SF7.js";import"./composite-C8rBSBTd.js";import"./index-Qt20q_8J.js";import"./index-DtY732wl.js";import"./index-ZPPDUEEy.js";import"./useEventCallback-Dh0fuerp.js";import"./SkeletonBar-B6C4eUYl.js";import"./LoadingCell-CA52xOUo.js";import"./ColumnConfigDialog-BHyVuCmw.js";import"./DraggableList-CA70q-wM.js";import"./search-083fpx5Y.js";import"./Input-bVe5DU0v.js";import"./useControlled-DxXQTGIF.js";import"./Button-qSnmCYaa.js";import"./small-cross-B8RPZtO3.js";import"./ActionButton-D6nzOa4u.js";import"./Checkbox-BCCb0-f8.js";import"./useValueChanged-B3n0Qzyy.js";import"./CollapsiblePanel-D21pB3lg.js";import"./MultiColumnSortDialog-BP0oqUUy.js";import"./MenuTrigger-C6YgD8em.js";import"./CompositeItem-BEsWan-K.js";import"./ToolbarRootContext-BLCkh9_F.js";import"./getDisabledMountTransitionStyles-D16icKYZ.js";import"./getPseudoElementBounds-D1iyZfNX.js";import"./chevron-down-Cy5tfknz.js";import"./index-DEkRoDzJ.js";import"./error-BWta7cvF.js";import"./BaseCbacBanner-BlFOx_qQ.js";import"./makeExternalStore-BcdadG9D.js";import"./Tooltip-D205HYzH.js";import"./PopoverPopup-rL_9M6MP.js";import"./debounce-DACEF8BV.js";import"./useOsdkClient-DffLg-Qv.js";import"./tick-CYydrRhB.js";import"./DropdownField-DaafnRcr.js";import"./isEqual-BlD-tDfk.js";import"./withOsdkMetrics-DgxQm_Yv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
