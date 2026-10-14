import{f as p,j as e}from"./iframe-rmDWkA_9.js";import{O as i}from"./object-table-B8aHvZpY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9KhRoGp.js";import"./Table-CDkXqsoq.js";import"./index-BJm_TGuS.js";import"./Dialog-DJB2o2QQ.js";import"./cross-2JsEwOCU.js";import"./svgIconContainer-CMH5VHbE.js";import"./useBaseUiId-eTIPtAex.js";import"./InternalBackdrop-DzWBIKbq.js";import"./composite-CfWqZbx5.js";import"./index-H2c6m-1E.js";import"./index-DxDYposm.js";import"./index-De_UCKOS.js";import"./useEventCallback-D8hCo4Qr.js";import"./SkeletonBar-BKZCl3Vr.js";import"./LoadingCell-C9_6aYmb.js";import"./ColumnConfigDialog-DlL3YS6U.js";import"./DraggableList-BVf7hRf8.js";import"./search-C7TYX9ku.js";import"./Input-ByxvWbQj.js";import"./useControlled-J2jUgDlJ.js";import"./Button-CBc549Tl.js";import"./small-cross-Bj93jEWq.js";import"./ActionButton-fx9WgCVG.js";import"./Checkbox-D7Kuup1h.js";import"./useValueChanged-Cj7F5rYS.js";import"./CollapsiblePanel-BAWkr6_y.js";import"./MultiColumnSortDialog-QVlbyCZ0.js";import"./MenuTrigger-DHmlKjKL.js";import"./CompositeItem-CbLxl7fO.js";import"./ToolbarRootContext-BXp0BN9t.js";import"./getDisabledMountTransitionStyles-B9EO47QZ.js";import"./getPseudoElementBounds-2-r7YzfT.js";import"./chevron-down-BX-4AcWo.js";import"./index-DnhRAwMR.js";import"./error-xYNFBZUd.js";import"./BaseCbacBanner-BAA703FJ.js";import"./makeExternalStore-CTIqcnCN.js";import"./Tooltip-fR1RcwZF.js";import"./PopoverPopup-4q2X5f4w.js";import"./debounce-BvKRQopC.js";import"./useOsdkClient-BM6gicWm.js";import"./tick-CuO5iyTL.js";import"./DropdownField-m3ZbFk-Q.js";import"./isEqual-DdDr95hp.js";import"./withOsdkMetrics-f5SdKW_u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
