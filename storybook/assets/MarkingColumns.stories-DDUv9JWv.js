import{f as p,j as e}from"./iframe-DV1yCMsw.js";import{O as i}from"./object-table-CDFR86N1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CSRtT_R-.js";import"./index-azQz1-D1.js";import"./Dialog-vp7CaCgc.js";import"./cross-DNR9YQ3a.js";import"./svgIconContainer-BeM6_7kW.js";import"./useBaseUiId-DOZms5KT.js";import"./InternalBackdrop-DdEug9RR.js";import"./composite-DfXvakAK.js";import"./index--Byjp6h8.js";import"./index-CmQmrs9R.js";import"./index-EhU39UPy.js";import"./useEventCallback-COYwW9Ss.js";import"./SkeletonBar-D_eY-DTv.js";import"./LoadingCell-Be_iH5t9.js";import"./ColumnConfigDialog-BL_HoTcd.js";import"./DraggableList-C67OFZGX.js";import"./search-CQsBxLkU.js";import"./Input-PDMkMKii.js";import"./useControlled-nUfbdO0a.js";import"./Button-DPHupdFu.js";import"./small-cross-DYpEQl9d.js";import"./ActionButton-LfdBhkgt.js";import"./Checkbox-jY5e4hfS.js";import"./useValueChanged-CJ0AX3Q5.js";import"./CollapsiblePanel-BW2nV8fU.js";import"./MultiColumnSortDialog-dKIsRy2L.js";import"./MenuTrigger-q7n2torl.js";import"./CompositeItem-BUg5Nmhs.js";import"./ToolbarRootContext-0T6zDh9h.js";import"./getDisabledMountTransitionStyles-CI5qk8fd.js";import"./getPseudoElementBounds-DPHhSEhv.js";import"./chevron-down-GWsulQRf.js";import"./index-BVIyipfq.js";import"./error-t-4CnxKH.js";import"./BaseCbacBanner-Dz0_Knjv.js";import"./makeExternalStore-0Z503ATJ.js";import"./Tooltip-T_V-Cw1B.js";import"./PopoverPopup-CXIkOXNy.js";import"./debounce-DPm4QGed.js";import"./useOsdkClient-KTkVgi-z.js";import"./tick-7CTVhgFt.js";import"./DropdownField-ByQ7XVe-.js";import"./isEqual-BfcI4Xz_.js";import"./withOsdkMetrics-DNZcGQG2.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
