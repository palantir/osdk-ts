import{f as p,j as e}from"./iframe-RocwcLA1.js";import{O as i}from"./object-table-BrowN1D4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bi11_lQh.js";import"./Table-BeLYz7uY.js";import"./index-CPYhK6Tm.js";import"./Dialog-CuZ5OQb1.js";import"./cross-BgyJlmiP.js";import"./svgIconContainer-DLWtp0BU.js";import"./useBaseUiId-CBnRLDYk.js";import"./InternalBackdrop-DmC9pE0x.js";import"./composite-CcO-1qH0.js";import"./index-BnYAAGls.js";import"./index-CYrtNoCb.js";import"./index-CqKREmsT.js";import"./useEventCallback-CTQI-oGY.js";import"./SkeletonBar-DsYTpZqP.js";import"./LoadingCell-ObbDg5k5.js";import"./ColumnConfigDialog-B_Lr4FBf.js";import"./DraggableList-Ddkm9W7N.js";import"./search-vjT1hCHx.js";import"./Input-CcAG7gXy.js";import"./useControlled-Bbowgw5B.js";import"./Button-BNn-NlyQ.js";import"./small-cross-Dl_P2df6.js";import"./ActionButton-BCQKfrqp.js";import"./Checkbox-Ck2XR2UN.js";import"./useValueChanged-BedL59h3.js";import"./CollapsiblePanel-CmwuXWb4.js";import"./MultiColumnSortDialog-DLBjnobr.js";import"./MenuTrigger-CkSTpP0b.js";import"./CompositeItem-CRCvuWR7.js";import"./ToolbarRootContext-Cn6bmXqK.js";import"./getDisabledMountTransitionStyles-Cz_F6_AI.js";import"./getPseudoElementBounds-Dgc6Xv0e.js";import"./chevron-down-C7FnpsrF.js";import"./index-DmXTiMr0.js";import"./error-DACjt9aW.js";import"./BaseCbacBanner-DURaiKed.js";import"./makeExternalStore-B-sos_Fc.js";import"./Tooltip-CaSy6w0D.js";import"./PopoverPopup-CewEisyu.js";import"./debounce-V1uFoEkK.js";import"./useOsdkClient-6Q8tx1W_.js";import"./tick-ZxNKxEMa.js";import"./DropdownField-i887lUmw.js";import"./isEqual-DMqshNMZ.js";import"./withOsdkMetrics-D9G4bz54.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
