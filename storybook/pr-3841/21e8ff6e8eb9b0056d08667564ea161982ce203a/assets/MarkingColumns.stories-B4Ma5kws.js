import{f as p,j as e}from"./iframe-CPDW-PQM.js";import{O as i}from"./object-table-DTqjU_D_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DLPPZvQy.js";import"./Table-BUuLX7nP.js";import"./index-BD9zYiqo.js";import"./Dialog-DDyKfg5y.js";import"./cross-DR7gxXwq.js";import"./svgIconContainer-C7wqaI1B.js";import"./useBaseUiId-B5I3_RDX.js";import"./InternalBackdrop-DdjQtzae.js";import"./composite-p-h0KAPd.js";import"./index-fIzLT5CY.js";import"./index-BTWFHyEC.js";import"./index-B7g8W8Zp.js";import"./useEventCallback-CD0AM3jl.js";import"./SkeletonBar-CXBL3BvT.js";import"./LoadingCell-CjHZr7dQ.js";import"./ColumnConfigDialog-BIYXL1ew.js";import"./DraggableList-ChfPDfFa.js";import"./search-BZvDdvYt.js";import"./Input-CD_gqaHO.js";import"./useControlled-i4DTbWgc.js";import"./Button-CRJqCk8i.js";import"./small-cross-CSCn7V4Z.js";import"./ActionButton-J4pZ9dww.js";import"./Checkbox-Cq2SeKPb.js";import"./useValueChanged-f6yxC0pT.js";import"./CollapsiblePanel-CoH06yjt.js";import"./MultiColumnSortDialog-BGYn-b00.js";import"./MenuTrigger-ChgVJvO_.js";import"./CompositeItem-BKuiG4wu.js";import"./ToolbarRootContext-OaLx1XI9.js";import"./getDisabledMountTransitionStyles-Dto8xlJk.js";import"./getPseudoElementBounds-Dfn0jdGk.js";import"./chevron-down-BhbuOWem.js";import"./index-DF93-j-r.js";import"./error-BojBsd96.js";import"./BaseCbacBanner-BvfEUDY_.js";import"./makeExternalStore-EbQWCuwR.js";import"./Tooltip-B-fohL4X.js";import"./PopoverPopup-BdxYHBaz.js";import"./debounce-XSxzF9O8.js";import"./useOsdkClient-i81o04a7.js";import"./tick-BD10YuUL.js";import"./DropdownField-DJ9z17_O.js";import"./isEqual-CousIfvQ.js";import"./withOsdkMetrics-BSyWaS_D.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
