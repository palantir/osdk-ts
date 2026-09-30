import{f as p,j as e}from"./iframe-BLOGWzes.js";import{O as i}from"./object-table-CsIXDMq0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DKYPYdJ1.js";import"./Table-SG7EtYJY.js";import"./index-Dw_R0R3u.js";import"./Dialog-D_X4CI00.js";import"./cross-81MWidH4.js";import"./svgIconContainer-DOUGpiyN.js";import"./useBaseUiId-0dkTavyr.js";import"./InternalBackdrop-C7ZwjG_B.js";import"./composite-BaecbUIv.js";import"./index-C_xx75lm.js";import"./index-CURDKWBa.js";import"./index-_ogkwLFC.js";import"./useEventCallback-DOR7ddeL.js";import"./SkeletonBar-CQnlCQ4P.js";import"./LoadingCell-BV3nAEVD.js";import"./ColumnConfigDialog-BnQ3wHRv.js";import"./DraggableList-DngOd2Pk.js";import"./search-DLp12F_x.js";import"./Input-BWx5Xf6Z.js";import"./useControlled-sfZuFzcU.js";import"./Button-BCMvPzPq.js";import"./small-cross-BfNan5YN.js";import"./ActionButton-d0qDXU7F.js";import"./Checkbox-BhIE-LLh.js";import"./useValueChanged-BAxxlU-6.js";import"./CollapsiblePanel-C8EuAByc.js";import"./MultiColumnSortDialog-n2Vo9i4d.js";import"./MenuTrigger-DIFG2ArH.js";import"./CompositeItem-B6ZRSaDZ.js";import"./ToolbarRootContext-Y2iZ9Ujq.js";import"./getDisabledMountTransitionStyles-DaPF4otG.js";import"./getPseudoElementBounds-DOWThf3d.js";import"./chevron-down-Eag7e6pI.js";import"./index-BIwD5Jbf.js";import"./error-CiKKwT6x.js";import"./BaseCbacBanner-B4c_Rabd.js";import"./makeExternalStore-DETb4-Ws.js";import"./Tooltip-DPnWTDYN.js";import"./PopoverPopup-BqAXUtPT.js";import"./debounce-R97o068-.js";import"./useOsdkClient-D9f4bCNA.js";import"./tick-CtDA2FHx.js";import"./DropdownField-DOctIr4W.js";import"./isEqual-C1zrLI8K.js";import"./withOsdkMetrics-DrML1D1X.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
