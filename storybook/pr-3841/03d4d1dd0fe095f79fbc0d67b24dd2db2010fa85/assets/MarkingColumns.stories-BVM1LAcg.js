import{f as p,j as e}from"./iframe-Bln2S2Hd.js";import{O as i}from"./object-table-0P7byv91.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4XaSru4.js";import"./Table-BEkghpit.js";import"./index-D1Ietrlj.js";import"./Dialog-DEyvnXkc.js";import"./cross-wcRc-diA.js";import"./svgIconContainer-BTYpKb3Z.js";import"./useBaseUiId-DzFDj8Yr.js";import"./InternalBackdrop-KP_aOvQ9.js";import"./composite-BlSW-C1U.js";import"./index-BOpwrJ-W.js";import"./index-CnTqZcox.js";import"./index-C16meakn.js";import"./useEventCallback-Bj0pRbTX.js";import"./SkeletonBar-BdZdM1Th.js";import"./LoadingCell-B35XRP0_.js";import"./ColumnConfigDialog-CvyyVNgA.js";import"./DraggableList-DfRqf7-w.js";import"./search-DNt_4LqU.js";import"./Input-CVgkuK1P.js";import"./useControlled-BG_GY85e.js";import"./Button-B9XMX6ms.js";import"./small-cross-E68qj1jZ.js";import"./ActionButton-DDJblqxX.js";import"./Checkbox-BW1T9Qnp.js";import"./useValueChanged-D84JKHV4.js";import"./CollapsiblePanel-_dpQ2gCa.js";import"./MultiColumnSortDialog-DxPIIqla.js";import"./MenuTrigger-BFaGK2P0.js";import"./CompositeItem-D6F0jU5J.js";import"./ToolbarRootContext-z7yzW3tg.js";import"./getDisabledMountTransitionStyles-B2diP31Y.js";import"./getPseudoElementBounds-BoRsn9l4.js";import"./chevron-down-B_NZATAC.js";import"./index-BHIpZYxv.js";import"./error-wBBSXgAg.js";import"./BaseCbacBanner-Br3vpTnB.js";import"./makeExternalStore-CXv5fKfm.js";import"./Tooltip-DgYrqeUf.js";import"./PopoverPopup-C1scz7F7.js";import"./debounce-Chz3lEmw.js";import"./useOsdkClient-8Oo-BI0v.js";import"./tick-CX7gnba2.js";import"./DropdownField-B6DQXdcq.js";import"./isEqual-D-po6U1T.js";import"./withOsdkMetrics-BkrRXFvl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
