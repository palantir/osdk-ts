import{f as p,j as e}from"./iframe-B_IZKh8P.js";import{O as i}from"./object-table-BHBx1xhg.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSCxhMTJ.js";import"./Table-DWUB0BEu.js";import"./index-CnhyFb-r.js";import"./Dialog-Wm4jDDQn.js";import"./cross-hQMC7b3L.js";import"./svgIconContainer-Xsv1xEak.js";import"./useBaseUiId-Dr3xYZYx.js";import"./InternalBackdrop-CIvkvTEF.js";import"./composite-D9C4oNf8.js";import"./index-Cn6YA2O8.js";import"./index-CEu3xKdf.js";import"./index-Cz_FWict.js";import"./useEventCallback-psQhNNLf.js";import"./SkeletonBar-BOURZeYg.js";import"./LoadingCell-BsE1Vi6S.js";import"./ColumnConfigDialog-ByQeOPmB.js";import"./DraggableList-BkTfh7dw.js";import"./search-Bd9-hZh2.js";import"./Input-fcRS9Kmg.js";import"./useControlled-DNbx2H9c.js";import"./isEqual-CBO4YZX2.js";import"./isObject-BTbytGDT.js";import"./Button-BzbSQLjH.js";import"./ActionButton-DP2zPa-7.js";import"./Checkbox-hXQtnFKJ.js";import"./useValueChanged-DbQ39FoL.js";import"./CollapsiblePanel-BnA8neuU.js";import"./MultiColumnSortDialog-36rP3VXm.js";import"./MenuTrigger-5jncTReB.js";import"./CompositeItem-CFKw5_bq.js";import"./ToolbarRootContext-B8yBsSST.js";import"./getDisabledMountTransitionStyles-tSHMiDPJ.js";import"./getPseudoElementBounds-Bx5ztzSJ.js";import"./chevron-down-D7PGg54t.js";import"./index-C0Lj84kX.js";import"./error-SgZGkoCP.js";import"./BaseCbacBanner-CxEqfA_Y.js";import"./makeExternalStore-BAf1vw2Z.js";import"./Tooltip-Bepjyqd3.js";import"./PopoverPopup-BAI0fNYY.js";import"./toNumber-CZGRdJWc.js";import"./useOsdkClient-CKgeSwaI.js";import"./tick-B0vH2GvX.js";import"./DropdownField-DMPNyaBc.js";import"./withOsdkMetrics-Ch4rRkhY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
