import{f as p,j as e}from"./iframe-DXJ7n1Mt.js";import{O as i}from"./object-table-C9iUs_pB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-J-T-Ktwt.js";import"./Table-BtAWTgx_.js";import"./index-BI3hFpTv.js";import"./Dialog-CV-I8Cmc.js";import"./cross-DmSTTtGj.js";import"./svgIconContainer-Cy-yvyP2.js";import"./useBaseUiId-CYKekcVM.js";import"./InternalBackdrop-DDjs_3_h.js";import"./composite-Br3qqN8V.js";import"./index-q7aE4fUG.js";import"./index-_EiW5ygO.js";import"./index-BfPkbabJ.js";import"./useEventCallback-DE2r_0Dc.js";import"./SkeletonBar-C2wmfKY_.js";import"./LoadingCell-MVk8M1F_.js";import"./ColumnConfigDialog-D58-ins6.js";import"./DraggableList-COSKQo83.js";import"./search-CS5luSCI.js";import"./Input-Cdu0Ne1b.js";import"./useControlled-DcXpzJX2.js";import"./Button-B1cldSa1.js";import"./small-cross-Bj0C9Gd0.js";import"./ActionButton--bYsYf66.js";import"./Checkbox-B0ntZnQU.js";import"./useValueChanged-CziH8SsH.js";import"./CollapsiblePanel-lE4KEPz7.js";import"./MultiColumnSortDialog-D_ET05Qr.js";import"./MenuTrigger-B0cYrf69.js";import"./CompositeItem-Btxqtw0m.js";import"./ToolbarRootContext-CBBxIG3X.js";import"./getDisabledMountTransitionStyles-DkNiKvvo.js";import"./getPseudoElementBounds-DRUex6O1.js";import"./chevron-down-zhZwP9mu.js";import"./index-CP1UTh8c.js";import"./error-9QZoIHyb.js";import"./BaseCbacBanner-ChfQU8z9.js";import"./makeExternalStore-BQUk64un.js";import"./Tooltip-DjRrr2Ut.js";import"./PopoverPopup-PPlNSATF.js";import"./debounce-BShPyhNf.js";import"./useOsdkClient-CbGeUOIk.js";import"./tick-6IruXiCw.js";import"./DropdownField-oynydTCh.js";import"./isEqual-BY-qrHy9.js";import"./withOsdkMetrics-AS-zNNJp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
