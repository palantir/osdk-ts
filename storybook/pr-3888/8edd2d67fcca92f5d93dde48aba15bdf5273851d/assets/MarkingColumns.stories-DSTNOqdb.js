import{f as p,j as e}from"./iframe-DQJqbOkg.js";import{O as i}from"./object-table-C42cD1W9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bx382jd8.js";import"./Table-BUKSbL-S.js";import"./index-DDju5qND.js";import"./Dialog-BvZa6S-z.js";import"./cross-CBKiDiFM.js";import"./svgIconContainer-Dh-If8bk.js";import"./useBaseUiId-Cd3DALKZ.js";import"./InternalBackdrop-CyA0gD-i.js";import"./composite-DJx5EpfC.js";import"./index-DcZTfGla.js";import"./index-BykRpjW_.js";import"./index-Bfev5bb1.js";import"./useEventCallback-9HlASw1I.js";import"./SkeletonBar-Cp-aCJOp.js";import"./LoadingCell-BmL71oDn.js";import"./ColumnConfigDialog-PodIpnSt.js";import"./DraggableList-uPaACmur.js";import"./search-BNWaEN5a.js";import"./Input-DfLnd1PA.js";import"./useControlled-B7roseIi.js";import"./Button-BsBGFSm4.js";import"./small-cross-CejGNC_3.js";import"./ActionButton-C4DfXQxH.js";import"./Checkbox-CFiLEo_f.js";import"./useValueChanged-CXcqZkjl.js";import"./CollapsiblePanel-BqmcF9l-.js";import"./MultiColumnSortDialog-NC9pVnrh.js";import"./MenuTrigger-VbMNUulM.js";import"./CompositeItem-DiI8zPAV.js";import"./ToolbarRootContext-QT_ZGINr.js";import"./getDisabledMountTransitionStyles-Cdyen_86.js";import"./getPseudoElementBounds-CTw6d2gi.js";import"./chevron-down-B4870N35.js";import"./index-BRXV0LIo.js";import"./error-BPF4Md4s.js";import"./BaseCbacBanner-BF9_Hyqe.js";import"./makeExternalStore-mpHw7kxu.js";import"./Tooltip-B_fuddTn.js";import"./PopoverPopup-CtZRJF9a.js";import"./debounce-s5XAQu68.js";import"./useOsdkClient-Buf3pzB5.js";import"./tick-Dvoh1BGs.js";import"./DropdownField-B4gCR3Np.js";import"./isEqual-DQglmP2C.js";import"./withOsdkMetrics-q_Jd76KJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
