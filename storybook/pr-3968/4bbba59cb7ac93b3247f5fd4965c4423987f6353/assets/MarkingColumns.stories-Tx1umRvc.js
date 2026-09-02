import{f as p,j as e}from"./iframe-4yYB2ECu.js";import{O as i}from"./object-table-DTcObYbZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C93dm6Ya.js";import"./Table-VfWP1IQk.js";import"./index-DSqbAlFE.js";import"./Dialog-CX5vmYnC.js";import"./cross-LcX80p3m.js";import"./svgIconContainer-JfwEPNa6.js";import"./useBaseUiId-CU_4DgXR.js";import"./InternalBackdrop-D42GbSkK.js";import"./composite-Ds40WlWo.js";import"./index-Yem3TUar.js";import"./index-BWrySZaR.js";import"./index-_KzJ1Rbr.js";import"./useEventCallback-DIy1mzZ8.js";import"./SkeletonBar-DWaiSj9c.js";import"./LoadingCell-CFvcFK4R.js";import"./ColumnConfigDialog-B4LF4x1T.js";import"./DraggableList-BZ-xJ4SQ.js";import"./search-CC-mClCy.js";import"./Input-Co-1aNP1.js";import"./useControlled-Dpm9HPQO.js";import"./Button-CUx6dso9.js";import"./small-cross-CLMNS1qh.js";import"./ActionButton-Bm6voTIO.js";import"./Checkbox-vSH54gMg.js";import"./useValueChanged-BxrzaDW-.js";import"./CollapsiblePanel-BvNzcq1u.js";import"./MultiColumnSortDialog-D6QFyCHS.js";import"./MenuTrigger-Dzcj5D89.js";import"./CompositeItem-BGzjXJQa.js";import"./ToolbarRootContext-D87nWH30.js";import"./getDisabledMountTransitionStyles-BUcNtKJv.js";import"./getPseudoElementBounds-r5PlTz71.js";import"./chevron-down-xdKSBTdG.js";import"./index-BpSvWq5I.js";import"./error-Dn6Wt_DI.js";import"./BaseCbacBanner-DiHyRB4h.js";import"./makeExternalStore-d8KP81yZ.js";import"./Tooltip-BJ5zYDuF.js";import"./PopoverPopup-HEf02Bcw.js";import"./debounce-BQ23lrxx.js";import"./useOsdkClient-x1g8_n4T.js";import"./tick-BwiRnB-U.js";import"./DropdownField-DHrmRAfm.js";import"./isEqual-irPOZyBy.js";import"./withOsdkMetrics-DFTVZPh6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
