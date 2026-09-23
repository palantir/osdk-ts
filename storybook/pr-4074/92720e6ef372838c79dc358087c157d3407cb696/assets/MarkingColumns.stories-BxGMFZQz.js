import{f as p,j as e}from"./iframe-Cav9-PmA.js";import{O as i}from"./object-table-FfWcaoHB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C5qWD71s.js";import"./Table-Df9qMKmC.js";import"./index-CL4yhLt9.js";import"./Dialog-DrrXMeVl.js";import"./cross-Clu4CbjC.js";import"./svgIconContainer-DLGQs5zG.js";import"./useBaseUiId-FJrmMdaq.js";import"./InternalBackdrop-B6mZpXks.js";import"./composite-BhU6OEFZ.js";import"./index-B3WsbxUl.js";import"./index-CB0DImnr.js";import"./index-BK2mdNIa.js";import"./useEventCallback-DzYDdyjP.js";import"./SkeletonBar-DYSwTtQ7.js";import"./LoadingCell-DU86OTGa.js";import"./ColumnConfigDialog-B-Y2u4gB.js";import"./DraggableList-Cg_3j8gI.js";import"./search-LZGc9ZDj.js";import"./Input-BztqfZ4v.js";import"./useControlled-D_WTTjhN.js";import"./Button-lsqLjeDU.js";import"./small-cross-CLC5iKl2.js";import"./ActionButton-DmiOjJKj.js";import"./Checkbox-D_fY4w-O.js";import"./useValueChanged-LKsB26MY.js";import"./CollapsiblePanel-BlEs5D1u.js";import"./MultiColumnSortDialog-DDkUkQLe.js";import"./MenuTrigger-A8bLi2al.js";import"./CompositeItem-COO8IGaX.js";import"./ToolbarRootContext-BTcyHQC1.js";import"./getDisabledMountTransitionStyles-BN7EVmAM.js";import"./getPseudoElementBounds-Dlr5-0YW.js";import"./chevron-down-8Euui_dn.js";import"./index-CGDltp0P.js";import"./error-DdLyc_Py.js";import"./BaseCbacBanner-BtRv0qqS.js";import"./makeExternalStore-ZoA1Ll7J.js";import"./Tooltip-DXJLfO__.js";import"./PopoverPopup-Z0-leGqd.js";import"./debounce-Cq7GTWpW.js";import"./useOsdkClient-CyrMft84.js";import"./tick-UiUEGSqj.js";import"./DropdownField-B1NLU9Rd.js";import"./isEqual-D3uVPOsR.js";import"./withOsdkMetrics-Bmf3O0C1.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
