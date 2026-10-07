import{f as p,j as e}from"./iframe-BmAfqmVA.js";import{O as i}from"./object-table-DwtrgXe0.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dw8BIZgV.js";import"./Table-D0gnuVks.js";import"./index-B62tNakJ.js";import"./Dialog-BJN_I2ET.js";import"./cross-CIbg1fnp.js";import"./svgIconContainer-DmqE13LP.js";import"./useBaseUiId-Ve_Ndjtk.js";import"./InternalBackdrop-B-HL31XO.js";import"./composite-D_ZO_GVZ.js";import"./index-dHY7n0A_.js";import"./index-fK0RIQv7.js";import"./index-sRqT8LaY.js";import"./useEventCallback-Dst592Es.js";import"./SkeletonBar-CpgIKy9M.js";import"./LoadingCell-DFItCsbF.js";import"./ColumnConfigDialog-DGQnTD89.js";import"./DraggableList-CZmnsgWW.js";import"./search-CXOC_cUa.js";import"./Input-Nk05MRQJ.js";import"./useControlled-DnfhwrQ9.js";import"./Button-B6o09hJ9.js";import"./small-cross-hJq0bu3d.js";import"./ActionButton-C7nJBpda.js";import"./Checkbox-tlw2znwL.js";import"./useValueChanged-BOO_UIZl.js";import"./CollapsiblePanel-BARvj3J1.js";import"./MultiColumnSortDialog-CjzVK0QW.js";import"./MenuTrigger-CZUdBscp.js";import"./CompositeItem-DXCwTfSl.js";import"./ToolbarRootContext-BGE7RlZq.js";import"./getDisabledMountTransitionStyles-D7fYxIXW.js";import"./getPseudoElementBounds-vijoVG-C.js";import"./chevron-down-BlYRgYBH.js";import"./index-K0yxoLEe.js";import"./error-Dmi1futd.js";import"./BaseCbacBanner-BCmjq5Q4.js";import"./makeExternalStore-Bdb1GDa3.js";import"./Tooltip-CvzNm6MG.js";import"./PopoverPopup-BO42v_DZ.js";import"./debounce-J4cnnbIe.js";import"./useOsdkClient-Dkseg2Ko.js";import"./tick-C2TrJ_N8.js";import"./DropdownField-D1g5_LVv.js";import"./isEqual-BY0VpmlK.js";import"./withOsdkMetrics-ihUosZll.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
