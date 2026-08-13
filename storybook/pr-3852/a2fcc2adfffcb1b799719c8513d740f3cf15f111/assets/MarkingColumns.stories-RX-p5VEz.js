import{f as p,j as e}from"./iframe-CR0jsk8T.js";import{O as i}from"./object-table-CbDQCRdf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CLM-aN-8.js";import"./Table-D-GB8w9F.js";import"./index-BXDmefey.js";import"./Dialog-BDj_Pu-s.js";import"./cross-C_YRmPKj.js";import"./svgIconContainer-H7nQkb6n.js";import"./useBaseUiId-C44LpUZ_.js";import"./InternalBackdrop-DfOIlirh.js";import"./composite-NkcHW8Ts.js";import"./index-AF0HW_jU.js";import"./index-CviXfYOE.js";import"./index-C0xP1YRP.js";import"./useEventCallback-Dpm5I8hS.js";import"./SkeletonBar-COzcyyjY.js";import"./LoadingCell-2p8cREMA.js";import"./ColumnConfigDialog-C0J78ZfR.js";import"./DraggableList-DB4oE_ex.js";import"./search-CBxagsiD.js";import"./Input-BUfDw5Gv.js";import"./useControlled-BYmOvdgF.js";import"./Button-Cwqeh57g.js";import"./small-cross-87BZIShO.js";import"./ActionButton-D1872Zz6.js";import"./Checkbox-Dz3160i5.js";import"./useValueChanged-C26c-Dvh.js";import"./CollapsiblePanel-CsWiyBT2.js";import"./MultiColumnSortDialog-DPvLlybu.js";import"./MenuTrigger-CDrcjfD_.js";import"./CompositeItem-CYqCpyh6.js";import"./ToolbarRootContext-Dw5skxCs.js";import"./getDisabledMountTransitionStyles-BJl_BOkB.js";import"./getPseudoElementBounds-DYw0j0iR.js";import"./chevron-down-CgS2uuYi.js";import"./index-DeB2XC52.js";import"./error-Bqwx5_58.js";import"./BaseCbacBanner-ZqFqIYYB.js";import"./makeExternalStore-DmONQ8uz.js";import"./Tooltip-BzblDmOx.js";import"./PopoverPopup-DcPO1pup.js";import"./debounce-DglcdfXI.js";import"./useOsdkClient-DnL3l3f_.js";import"./tick-D2yfy9E4.js";import"./DropdownField-CZUcN7QE.js";import"./isEqual-DEwKDC01.js";import"./withOsdkMetrics-GDpEsgqr.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
