import{f as p,j as e}from"./iframe-DWecEh6Z.js";import{O as i}from"./object-table-DAMoRfJu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bbi2Z730.js";import"./Table-BQIL32i2.js";import"./index-6GDxt5zW.js";import"./Dialog-BTJHEOWb.js";import"./cross-DJ8vlukc.js";import"./svgIconContainer-CzZM0mPh.js";import"./useBaseUiId-DGtSF2d7.js";import"./InternalBackdrop-Dwui7Iwy.js";import"./composite-Dkoqcymr.js";import"./index-DwNzNK9a.js";import"./index-CgyINOqj.js";import"./index-D1u_zvAB.js";import"./useEventCallback-BnrirAaK.js";import"./SkeletonBar-BtmrMCoY.js";import"./LoadingCell-C2TXzPgY.js";import"./ColumnConfigDialog-DQxLvf4V.js";import"./DraggableList-Drxl4Ij8.js";import"./search-Dq1J9kTw.js";import"./Input-CalqcJQf.js";import"./useControlled-DxZ-cBby.js";import"./Button-Cipj2Ppc.js";import"./small-cross-CtR_-pfW.js";import"./ActionButton-BHq7nCiC.js";import"./Checkbox-gSoIZfAY.js";import"./useValueChanged-MajtV6Am.js";import"./CollapsiblePanel-DKsnYU-Y.js";import"./MultiColumnSortDialog-F5EwEeJC.js";import"./MenuTrigger-DQPZVbQo.js";import"./CompositeItem-K9AR25LJ.js";import"./ToolbarRootContext-D-1OWq12.js";import"./getDisabledMountTransitionStyles-DyI0iHRG.js";import"./getPseudoElementBounds-DnVQyjld.js";import"./chevron-down-C6k7Uas0.js";import"./index-B-5_Mr4U.js";import"./error-BHOwo5JQ.js";import"./BaseCbacBanner-DBe9XQkF.js";import"./makeExternalStore-BKGvKQz7.js";import"./Tooltip-CvzGGbpE.js";import"./isObject-4ImOr-SM.js";import"./debounce-BVhyQSqg.js";import"./useOsdkClient-BfFw3qSS.js";import"./tick-DrdvNN56.js";import"./DropdownField-CrXyCQrM.js";import"./isEqual-DnM3Sqmr.js";import"./_baseIsEqual-DJDOeQCT.js";import"./withOsdkMetrics-BTTMLJya.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
