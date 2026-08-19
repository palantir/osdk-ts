import{f as p,j as e}from"./iframe-CDYdpxWh.js";import{O as i}from"./object-table-BjnWrH01.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CkE461ve.js";import"./Table-CjJV4sLf.js";import"./index-BDIxaxLo.js";import"./Dialog-BCMaIp31.js";import"./cross-oT0hm_vb.js";import"./svgIconContainer-CHuNpbq1.js";import"./useBaseUiId-CUhIEzim.js";import"./InternalBackdrop-B3fYgT8p.js";import"./composite-rscbUgln.js";import"./index-Dh4Ma2cK.js";import"./index-DTjfrKc-.js";import"./index-BCnZqWBV.js";import"./useEventCallback-b289-p9H.js";import"./SkeletonBar-yRXBaiBE.js";import"./LoadingCell-BtByd-IS.js";import"./ColumnConfigDialog-CxQXLoNC.js";import"./DraggableList-D1f34AP8.js";import"./search-DOJNPKi3.js";import"./Input-BmXHCQaU.js";import"./useControlled-BZuuCA_k.js";import"./Button-B9zOHmCX.js";import"./small-cross-BEQ-ib7U.js";import"./ActionButton-Ck63C7O6.js";import"./Checkbox-BEImIYGg.js";import"./useValueChanged-rfKvsQCF.js";import"./CollapsiblePanel-DeVfDs5X.js";import"./MultiColumnSortDialog-DiVuI_tD.js";import"./MenuTrigger-DD5GtTNj.js";import"./CompositeItem-BTvB014k.js";import"./ToolbarRootContext-Cua-jDew.js";import"./getDisabledMountTransitionStyles-jtYZ-5fr.js";import"./getPseudoElementBounds-DkrZo1x4.js";import"./chevron-down--F9l2MVX.js";import"./index-DTpaMTKB.js";import"./error-BRoJe7F1.js";import"./BaseCbacBanner-D_Iu1OFt.js";import"./makeExternalStore-BpabXzBh.js";import"./Tooltip-Bcibbl9B.js";import"./PopoverPopup-B3plVJqJ.js";import"./debounce-DDBUoCd_.js";import"./useOsdkClient-992L-qjf.js";import"./tick-DYCePGsU.js";import"./DropdownField-cy05WkxS.js";import"./isEqual-IO0SWj-x.js";import"./withOsdkMetrics-_ioV7svt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
