import{f as p,j as e}from"./iframe-HPloXe9j.js";import{O as i}from"./object-table-Dw0TlSIB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DScJgkz5.js";import"./Table-SpiJn5fd.js";import"./index-CYy51o6d.js";import"./Dialog-xwTFg4xc.js";import"./cross-9AkiFjIe.js";import"./svgIconContainer-DgH7XjE0.js";import"./useBaseUiId-CuSCou4B.js";import"./InternalBackdrop-CuN7aJKc.js";import"./composite-BKkRB1Ja.js";import"./index-CZ-MIMEA.js";import"./index-CLiETF6g.js";import"./index-BtQkTWRV.js";import"./useEventCallback-D7m3Yiiv.js";import"./SkeletonBar-BmlxW_EU.js";import"./LoadingCell-DYdNzb3Q.js";import"./ColumnConfigDialog-CW49yF_5.js";import"./DraggableList-HqZPos2A.js";import"./search-BtGEDCk0.js";import"./Input-BxTgEocG.js";import"./useControlled-8YOYv55u.js";import"./Button-6Q_hxnNq.js";import"./small-cross-Ccl3EiTU.js";import"./ActionButton-CzZ5C-jr.js";import"./Checkbox-Gx-UAF5W.js";import"./useValueChanged-D8dkL44z.js";import"./CollapsiblePanel-DgpfvzE6.js";import"./MultiColumnSortDialog-Ddk1Lns6.js";import"./MenuTrigger-BcanciK8.js";import"./CompositeItem-BeYsw0Rf.js";import"./ToolbarRootContext-C0mmD1Sp.js";import"./getDisabledMountTransitionStyles-I0fd0fDa.js";import"./getPseudoElementBounds-BzI7Zs8z.js";import"./chevron-down-BfaqTxAc.js";import"./index-WJ-o1DZ0.js";import"./error-CtWAgql8.js";import"./BaseCbacBanner-3MoHAqX4.js";import"./makeExternalStore-B18oZ143.js";import"./Tooltip-CXYD7mSj.js";import"./PopoverPopup-zlChUm0U.js";import"./debounce-3RrYA89K.js";import"./useOsdkClient-BZavVCL8.js";import"./tick-COIkFqpx.js";import"./DropdownField-j8LPkCHX.js";import"./isEqual-C3KsvxK8.js";import"./withOsdkMetrics-C1kb3R25.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
