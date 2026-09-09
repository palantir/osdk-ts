import{f as p,j as e}from"./iframe-BBZCzStV.js";import{O as i}from"./object-table-DapV3Rol.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-5SQDyWdl.js";import"./Table-fxlaPCGo.js";import"./index-B0mBcXI4.js";import"./Dialog-B-85Rx-2.js";import"./cross-CPvMVENn.js";import"./svgIconContainer-DfBgJD9-.js";import"./useBaseUiId-B2Dwi3UQ.js";import"./InternalBackdrop-B_1kGoJ6.js";import"./composite-CFasADcm.js";import"./index-Cj4Q5m-x.js";import"./index-V3B_uiL2.js";import"./index-Csh22FK0.js";import"./useEventCallback-C7wdVJUu.js";import"./SkeletonBar-Dh6u025G.js";import"./LoadingCell-CXYGJFXm.js";import"./ColumnConfigDialog-CV8tcLtB.js";import"./DraggableList-ed1YuQHx.js";import"./search-vc9aoGpm.js";import"./Input-CSnQRyFu.js";import"./useControlled-DoPklQtk.js";import"./Button-CfbDmY7F.js";import"./small-cross-DTHtoiVl.js";import"./ActionButton-NPe1j-Pf.js";import"./Checkbox-BBvJmZ_C.js";import"./useValueChanged-DDicrYhc.js";import"./CollapsiblePanel-DRW0CG7D.js";import"./MultiColumnSortDialog-uU-I92Wo.js";import"./MenuTrigger-CcvPK_Ol.js";import"./CompositeItem-DCNZBIgo.js";import"./ToolbarRootContext-BJ5gq2Ug.js";import"./getDisabledMountTransitionStyles-p7s1v2Wq.js";import"./getPseudoElementBounds-CGyVBiW9.js";import"./chevron-down-CMFHrqJp.js";import"./index-DbFsgQOw.js";import"./error-DTmGvXOz.js";import"./BaseCbacBanner-CQos4IsY.js";import"./makeExternalStore-C0iVHY1V.js";import"./Tooltip-CIld4EMB.js";import"./PopoverPopup-Ct6679Cx.js";import"./debounce-CV2RI2D0.js";import"./useOsdkClient-qOAfm0EP.js";import"./tick-BCDmZou0.js";import"./DropdownField-CcyuWoJs.js";import"./isEqual-QmNJKBr8.js";import"./withOsdkMetrics-mfymYHOu.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
