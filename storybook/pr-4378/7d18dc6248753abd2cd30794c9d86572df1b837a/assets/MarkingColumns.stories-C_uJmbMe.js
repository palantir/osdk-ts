import{f as p,j as e}from"./iframe-CNsFCmRD.js";import{O as i}from"./object-table-DstampKG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3EQxtCm.js";import"./Table-Dgn2vo8F.js";import"./index-DehS0r9u.js";import"./Dialog-njFU-RsG.js";import"./cross-BgW6BP2I.js";import"./svgIconContainer-BLE7kABU.js";import"./useBaseUiId-DIFzx6WD.js";import"./InternalBackdrop-DlN7xffD.js";import"./composite-Difoiya5.js";import"./index-B7uESB1d.js";import"./index-Bu5_opre.js";import"./index-BV9ZuCbx.js";import"./useEventCallback-DRTsw9WP.js";import"./SkeletonBar-CVDn_hln.js";import"./LoadingCell-CVwdJWtD.js";import"./ColumnConfigDialog-C-bJHr5P.js";import"./DraggableList-DrJzXDE_.js";import"./search-D35U4f_q.js";import"./Input-DAosEkIl.js";import"./useControlled-DkXcDe2n.js";import"./Button-g1ae3uCc.js";import"./small-cross-N6zuJUXf.js";import"./ActionButton-C58Jqytf.js";import"./Checkbox-DZMuniEK.js";import"./useValueChanged-BQU9nMqw.js";import"./CollapsiblePanel-Dl7L2YAZ.js";import"./MultiColumnSortDialog-B_U1GzVy.js";import"./MenuTrigger-CIV0rhl6.js";import"./CompositeItem-PSR5eG0p.js";import"./ToolbarRootContext-DMD9u7kY.js";import"./getDisabledMountTransitionStyles-FanyKRLk.js";import"./getPseudoElementBounds-BDmo4YIs.js";import"./chevron-down-CgfsyRf8.js";import"./index-D9KhH6vm.js";import"./error-bpMZEwT_.js";import"./BaseCbacBanner-Bn09Oi1T.js";import"./makeExternalStore-V3MhvWul.js";import"./Tooltip-DXHkZovs.js";import"./isObject-DA6ucP6Z.js";import"./debounce-BZlJnoz_.js";import"./useOsdkClient-CvQAwD1B.js";import"./tick-B2tOyb01.js";import"./DropdownField-BeeT3wky.js";import"./isEqual--rV8x3RZ.js";import"./_baseIsEqual-DXkaLe8p.js";import"./withOsdkMetrics-DhWG7RdG.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
