import{f as p,j as e}from"./iframe-BO3JDeUy.js";import{O as i}from"./object-table-BZk0Lu8i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-urwU0B1K.js";import"./Table-Npo51Eyl.js";import"./index-CEHZ1Lmc.js";import"./Dialog-x_VYxJbx.js";import"./cross-B4B_Rmmg.js";import"./svgIconContainer-B2x3jtn9.js";import"./useBaseUiId-BhX3QU_S.js";import"./InternalBackdrop-B9xuZ3X4.js";import"./composite-DkSbjExr.js";import"./index-DuMMGCln.js";import"./index-C_ZbNhui.js";import"./index-C1W664_h.js";import"./useEventCallback-DsZGsUBH.js";import"./SkeletonBar-BIEi9a0x.js";import"./LoadingCell-DDYsuin1.js";import"./ColumnConfigDialog-DWj93LnE.js";import"./DraggableList-Dpi7zkEQ.js";import"./search-BTnE45Hm.js";import"./Input-aywzIDzd.js";import"./useControlled-CFrWaOQK.js";import"./Button-HsgZWy4d.js";import"./small-cross-D5iZfcsS.js";import"./ActionButton-CjOnURl7.js";import"./Checkbox-BxlWuqsA.js";import"./useValueChanged-D73ikQgq.js";import"./CollapsiblePanel-fn9uuRmZ.js";import"./MultiColumnSortDialog-C_nTOm41.js";import"./MenuTrigger-DD1ibjA3.js";import"./CompositeItem-DeWDKhlH.js";import"./ToolbarRootContext-rGxGVX8f.js";import"./getDisabledMountTransitionStyles-D2oz7XSg.js";import"./getPseudoElementBounds-C9NZ6w4c.js";import"./chevron-down-D8wRJ6gM.js";import"./index-_n59woxc.js";import"./error-COT9B3Hv.js";import"./BaseCbacBanner-CWSg8Ff3.js";import"./makeExternalStore-DdmSyb-E.js";import"./Tooltip-B6gO1E8K.js";import"./PopoverPopup-HQOEOoaE.js";import"./debounce-B2PKE0le.js";import"./useOsdkClient-B48UOwRR.js";import"./tick-tswKzLaH.js";import"./DropdownField-CB_lS8X1.js";import"./isEqual-DQBhCu8Z.js";import"./withOsdkMetrics-C6_wMEah.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
