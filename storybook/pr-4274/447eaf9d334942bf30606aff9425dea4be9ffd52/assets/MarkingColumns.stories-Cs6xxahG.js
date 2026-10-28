import{f as p,j as e}from"./iframe-C8k3uumS.js";import{O as i}from"./object-table-EZOB7GFm.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dj6SQCER.js";import"./Table-NqTGUUle.js";import"./index-Da9JAcME.js";import"./Dialog-DJIAnjKL.js";import"./cross-Dp2ox1xu.js";import"./svgIconContainer-Dj-Mm7D3.js";import"./useBaseUiId-DFXqCjvq.js";import"./InternalBackdrop-aU7kJmwR.js";import"./composite-DxAUAqur.js";import"./index-DzwHbvl0.js";import"./index-DjlNroqj.js";import"./index-DZnZB0mi.js";import"./useEventCallback-fbvYUM-2.js";import"./SkeletonBar-abAgXsnv.js";import"./LoadingCell-Tiia-8Ir.js";import"./ColumnConfigDialog-CmxDqqkp.js";import"./DraggableList-DgviW2i0.js";import"./search-DKEa9C8l.js";import"./Input--AleI5pt.js";import"./useControlled-C2PJbUNw.js";import"./Button-CBL5cv9S.js";import"./small-cross-Ce-hROYd.js";import"./ActionButton-BMUSg4X7.js";import"./Checkbox-B-gD_A1e.js";import"./useValueChanged-Dqs1inlY.js";import"./CollapsiblePanel-Dt19Mdgf.js";import"./MultiColumnSortDialog-mxFmSdR4.js";import"./MenuTrigger-C8wkes2i.js";import"./CompositeItem-DZbgQ7y8.js";import"./ToolbarRootContext-BVd3nTMD.js";import"./getDisabledMountTransitionStyles-DfVVkl0j.js";import"./getPseudoElementBounds-BPwV_7bA.js";import"./chevron-down-Biem--ni.js";import"./index-CEB9MiMS.js";import"./error-DgFxq49l.js";import"./BaseCbacBanner-CbsjZeyt.js";import"./makeExternalStore-Xdq9roG-.js";import"./Tooltip-BGHZdQle.js";import"./PopoverPopup-qnEIN4P4.js";import"./debounce-Nfw019PW.js";import"./useOsdkClient-BvDl_R1k.js";import"./tick-B-xbQpjH.js";import"./DropdownField-cT1ROS8v.js";import"./isEqual-DlqCCDtd.js";import"./withOsdkMetrics-zb3RyNQY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
