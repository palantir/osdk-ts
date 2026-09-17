import{f as p,j as e}from"./iframe-bxHnXZZE.js";import{O as i}from"./object-table-BcKyIo6e.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-7NwT3r5e.js";import"./Table-DcAq6LRL.js";import"./index-C6fHHFsn.js";import"./Dialog-BZhGaz9Z.js";import"./cross-BUbLZE-A.js";import"./svgIconContainer-DFa2cGRe.js";import"./useBaseUiId-QHeSB_uY.js";import"./InternalBackdrop-DBcnV2IB.js";import"./composite-16NtQKdD.js";import"./index-fMg1ul0K.js";import"./index-pscJp3QG.js";import"./index-Dx6jXTMT.js";import"./useEventCallback-wa1M1mLo.js";import"./SkeletonBar-DXwufme4.js";import"./LoadingCell-CtHiQ1DJ.js";import"./ColumnConfigDialog-DnaJrZAI.js";import"./DraggableList-BEfI0o-j.js";import"./search-B9cWql5S.js";import"./Input-DlQ75Tiv.js";import"./useControlled-DQ7SFQLa.js";import"./Button-CnrUq9Aa.js";import"./small-cross-rdg52v-X.js";import"./ActionButton-CgLa61YP.js";import"./Checkbox-DpXzlc6c.js";import"./useValueChanged-LREb8VW3.js";import"./CollapsiblePanel-BIKCw0VK.js";import"./MultiColumnSortDialog-CeNOFipN.js";import"./MenuTrigger-r7a7qy8M.js";import"./CompositeItem-Dt9_APYR.js";import"./ToolbarRootContext-BNi8FLUA.js";import"./getDisabledMountTransitionStyles-2zUc2nSg.js";import"./getPseudoElementBounds-B5V39s0c.js";import"./chevron-down-MvzNfmay.js";import"./index-B3lVa8tN.js";import"./error-5Rk85rBd.js";import"./BaseCbacBanner-Bs9cyiER.js";import"./makeExternalStore-BU1dPe3S.js";import"./Tooltip-B1qA2z5a.js";import"./PopoverPopup-B4w-OJGK.js";import"./debounce-BCNGKG7N.js";import"./useOsdkClient-CZNO-BM3.js";import"./tick-C0QgRHXL.js";import"./DropdownField-D9Q5H1vn.js";import"./isEqual-vsTmSx-f.js";import"./withOsdkMetrics-iUvejygz.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
