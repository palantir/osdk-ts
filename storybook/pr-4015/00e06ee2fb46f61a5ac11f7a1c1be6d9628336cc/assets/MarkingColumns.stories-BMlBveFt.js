import{f as p,j as e}from"./iframe-BqB00GiJ.js";import{O as i}from"./object-table-C2NKZ5Ei.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBNowE1F.js";import"./Table-YLFb9JTa.js";import"./index-B6ljFb81.js";import"./Dialog-DxiqR021.js";import"./cross-NroKy72c.js";import"./svgIconContainer-BKScRVgJ.js";import"./useBaseUiId-BOd5ixEm.js";import"./InternalBackdrop-BrgH0B3m.js";import"./composite-pnQuH5Q_.js";import"./index-HDQn5rHu.js";import"./index-Bn4ERW5E.js";import"./index-9yoITr-1.js";import"./useEventCallback-D3Kfk8Ap.js";import"./SkeletonBar-CqIDeBXY.js";import"./LoadingCell-BZUln8hk.js";import"./ColumnConfigDialog-Bm9Omtos.js";import"./DraggableList-DQlXK6nA.js";import"./search-Bz2m71mS.js";import"./Input-BuKObC1x.js";import"./useControlled-BB4FINPW.js";import"./Button-UzxjVW7Z.js";import"./small-cross-DuiafL3Y.js";import"./ActionButton-DkxsgQ7J.js";import"./Checkbox-Cxps6qHC.js";import"./useValueChanged-vVuVXkf4.js";import"./CollapsiblePanel-Dm2x088n.js";import"./MultiColumnSortDialog-D4aqIUgF.js";import"./MenuTrigger-Dmunabbl.js";import"./CompositeItem-E84gf2Yn.js";import"./ToolbarRootContext-B0-kN55K.js";import"./getDisabledMountTransitionStyles-BLzEUkBl.js";import"./getPseudoElementBounds-DPHULfcE.js";import"./chevron-down-DmxY4RQH.js";import"./index-DIoCyghZ.js";import"./error-D0GZGtsZ.js";import"./BaseCbacBanner-ChsHyYrj.js";import"./makeExternalStore-CanGYDv6.js";import"./Tooltip-NtIdK9rB.js";import"./PopoverPopup-9AX7mF7M.js";import"./debounce-DJYw4rW8.js";import"./useOsdkClient-TXFw7McP.js";import"./tick-km-CKWcD.js";import"./DropdownField-DMGNppZZ.js";import"./isEqual-B_bGdX-y.js";import"./withOsdkMetrics-D9LjqIyU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
