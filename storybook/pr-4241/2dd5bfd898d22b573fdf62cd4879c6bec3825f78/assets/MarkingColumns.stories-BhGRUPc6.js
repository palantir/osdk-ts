import{f as p,j as e}from"./iframe-Cz66haSq.js";import{O as i}from"./object-table-DgHEroMX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xhSAljX0.js";import"./Table-CX8QpB3V.js";import"./index-BUXfO4Ju.js";import"./Dialog-BrdTDQh1.js";import"./cross-D9OamDgN.js";import"./svgIconContainer-DHL3SwmU.js";import"./useBaseUiId--zYyuape.js";import"./InternalBackdrop-Cy2hO_QK.js";import"./composite-BA9faNy6.js";import"./index-0XJJDvoy.js";import"./index-DfGIRzxo.js";import"./index-CP2YAN8J.js";import"./useEventCallback-CBZ6ta6R.js";import"./SkeletonBar-n0_YCfbh.js";import"./LoadingCell-DHeCnijo.js";import"./ColumnConfigDialog-CV9-HJ4X.js";import"./DraggableList-DJBRcK0Q.js";import"./search-ARM4tErG.js";import"./Input-Bxz-Dd7O.js";import"./useControlled-C9QmB7A0.js";import"./Button-C0vlEOkp.js";import"./small-cross-BvAVeELv.js";import"./ActionButton-JYX3c3SK.js";import"./Checkbox-DO5ZYVN7.js";import"./useValueChanged-CFnHS4Ph.js";import"./CollapsiblePanel-CDnOBlfI.js";import"./MultiColumnSortDialog-P-1eLcJI.js";import"./MenuTrigger-wVH_z4yX.js";import"./CompositeItem-hCCScXH4.js";import"./ToolbarRootContext-B9foH7Qy.js";import"./getDisabledMountTransitionStyles-Df62lxLU.js";import"./getPseudoElementBounds-KBPA7oty.js";import"./chevron-down-e8LYC-cq.js";import"./index-CWknVfE8.js";import"./error-CctugoDe.js";import"./BaseCbacBanner-Dbe55bim.js";import"./makeExternalStore-CSjj7q-A.js";import"./Tooltip-Cpc6auoa.js";import"./PopoverPopup-lHWxOezE.js";import"./debounce-BQlWP471.js";import"./useOsdkClient-DPYsXDsF.js";import"./tick-DHfOLs3o.js";import"./DropdownField-B7Jif8UN.js";import"./isEqual-DMMPSwJg.js";import"./withOsdkMetrics-BKDPrjKN.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
