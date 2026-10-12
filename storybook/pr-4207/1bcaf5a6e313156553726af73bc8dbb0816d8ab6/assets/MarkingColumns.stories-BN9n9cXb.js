import{f as p,j as e}from"./iframe-BxrMAPhN.js";import{O as i}from"./object-table-kLrWn1bD.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DrnFR1_M.js";import"./Table-_lbqKSTc.js";import"./index-3ce-DqIm.js";import"./Dialog-C8L9xW1b.js";import"./cross-CgUMfDbf.js";import"./svgIconContainer-BTC4I1jP.js";import"./useBaseUiId-CYhkk9Wl.js";import"./InternalBackdrop-fby99vEC.js";import"./composite-Dd7hy379.js";import"./index-C4XN9ow6.js";import"./index-DZWGTrRj.js";import"./index-CUS5I621.js";import"./useEventCallback-ztQWmBPn.js";import"./SkeletonBar-Dijlhnp9.js";import"./LoadingCell-Beq5gjYy.js";import"./ColumnConfigDialog-DCt_o6YG.js";import"./DraggableList-B_XL0fvE.js";import"./search-DDIdgg65.js";import"./Input-B49f-IH3.js";import"./useControlled-CBAJvoho.js";import"./Button-BHjA9vXD.js";import"./small-cross-DcC-nrRa.js";import"./ActionButton-CV_MAkW4.js";import"./Checkbox-ccqMIQBw.js";import"./useValueChanged-kVe0_w2P.js";import"./CollapsiblePanel-Dc01KugY.js";import"./MultiColumnSortDialog-DNdkPCtc.js";import"./MenuTrigger-Dpo_htYB.js";import"./CompositeItem-DrJtYX8s.js";import"./ToolbarRootContext-BseqN11S.js";import"./getDisabledMountTransitionStyles-CmE2wGB-.js";import"./getPseudoElementBounds-DT1sYSxK.js";import"./chevron-down-vMhLf0Yn.js";import"./index-B8D9hLY9.js";import"./error-AaI7Sssv.js";import"./BaseCbacBanner-CLTovdFm.js";import"./makeExternalStore-BOIpe8LX.js";import"./Tooltip-NlgzcR6l.js";import"./PopoverPopup-VtScEPpW.js";import"./debounce-B6IFkGZ6.js";import"./useOsdkClient-BmkTGWD1.js";import"./tick-F7U5QknT.js";import"./DropdownField-Dn-sPpxO.js";import"./isEqual-BBx3w4Uo.js";import"./withOsdkMetrics-PY8DhDl3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
