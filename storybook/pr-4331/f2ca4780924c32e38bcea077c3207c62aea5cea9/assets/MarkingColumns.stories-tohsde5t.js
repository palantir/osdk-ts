import{f as p,j as e}from"./iframe-B1KRdkhO.js";import{O as i}from"./object-table-VH9o08u7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bnxkxvgo.js";import"./Table-DFRPqef8.js";import"./index-BSlreuwL.js";import"./Dialog-vBDXh0ed.js";import"./cross-I1O1eUVR.js";import"./svgIconContainer-B6SQl79i.js";import"./useBaseUiId-Cr74IIpt.js";import"./InternalBackdrop-DVl-y0rc.js";import"./composite-JDw4eSYM.js";import"./index-bzttAU4r.js";import"./index-DTJULArL.js";import"./index-Guz5zGoB.js";import"./useEventCallback-CfkBWOSK.js";import"./SkeletonBar-QeVp58Hy.js";import"./LoadingCell-D9O9FL6a.js";import"./ColumnConfigDialog-BsnhR79I.js";import"./DraggableList-D6vwU-jG.js";import"./search-C904-bBJ.js";import"./Input-B2oruy_a.js";import"./useControlled-CLV8A8ub.js";import"./Button-D76Gdss_.js";import"./small-cross-Cap9qk1X.js";import"./ActionButton-BFe9pmTu.js";import"./Checkbox-DYj6I-LQ.js";import"./useValueChanged-CXerxiwd.js";import"./CollapsiblePanel-CFp75AIt.js";import"./MultiColumnSortDialog-C_4Aabvc.js";import"./MenuTrigger-B-Rbw3mG.js";import"./CompositeItem-Bkqt9gor.js";import"./ToolbarRootContext-Bfq07vZg.js";import"./getDisabledMountTransitionStyles-wREHFmKX.js";import"./getPseudoElementBounds-CJIzvOat.js";import"./chevron-down-CnakN8OV.js";import"./index-BdAFUNX5.js";import"./error-DulRH5vX.js";import"./BaseCbacBanner-CisfZHjv.js";import"./makeExternalStore-YXTpwul9.js";import"./Tooltip-CtbVHmv4.js";import"./PopoverPopup-C0hcd2Vi.js";import"./debounce-BqZLsoFx.js";import"./useOsdkClient-Cr05SL_1.js";import"./tick-DN0jUzW_.js";import"./DropdownField-fIw7AjbO.js";import"./isEqual-DHHyDIZe.js";import"./withOsdkMetrics-BnkJio_O.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
