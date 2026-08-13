import{f as p,j as e}from"./iframe-BNOKRHpm.js";import{O as i}from"./object-table-DxskSANI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CFKbXbX-.js";import"./Table-CP40vGo6.js";import"./index-XA3M--in.js";import"./Dialog-VzJ2GhTk.js";import"./cross-C6ouYwXO.js";import"./svgIconContainer-DfI3Swo4.js";import"./useBaseUiId-CUrQf0BS.js";import"./InternalBackdrop-Ba206NVe.js";import"./composite-miZnHh1r.js";import"./index-BRkADXm4.js";import"./index-DRg9zoeK.js";import"./index-CbdrAR84.js";import"./useEventCallback-BJLSqFt5.js";import"./SkeletonBar-CJCawi6C.js";import"./LoadingCell-CfWkjve0.js";import"./ColumnConfigDialog-B4XsetrV.js";import"./DraggableList-DJyAsJHK.js";import"./search-Dgaav2uF.js";import"./Input-BgXBkyZH.js";import"./useControlled-CFad5hXR.js";import"./Button-BuIgOk8v.js";import"./small-cross-BFmen-Bm.js";import"./ActionButton-CgO8w1uL.js";import"./Checkbox-tApvN24W.js";import"./useValueChanged-BwGMDP-K.js";import"./CollapsiblePanel-DOor5ooD.js";import"./MultiColumnSortDialog-B4nfMeQm.js";import"./MenuTrigger-G5dTVs-D.js";import"./CompositeItem-BXx4pExx.js";import"./ToolbarRootContext-B2tiH_2Q.js";import"./getDisabledMountTransitionStyles-WnO-c-MQ.js";import"./getPseudoElementBounds-C64LTfyN.js";import"./chevron-down-BEJwekoL.js";import"./index--hzNwQqO.js";import"./error-BlVam3Jf.js";import"./BaseCbacBanner-BCfdVX3j.js";import"./makeExternalStore-DzLhNxCL.js";import"./Tooltip-CY2sOn3Y.js";import"./PopoverPopup-CwX1wf7p.js";import"./debounce-sLe2cVh8.js";import"./useOsdkClient-CvNBJB2G.js";import"./tick-ck2iZb7i.js";import"./DropdownField-BXHMhMxP.js";import"./isEqual-BA4SbdaQ.js";import"./withOsdkMetrics-Bvubum1o.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
