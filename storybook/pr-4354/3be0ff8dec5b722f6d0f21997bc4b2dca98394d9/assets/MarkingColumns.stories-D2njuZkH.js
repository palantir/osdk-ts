import{f as p,j as e}from"./iframe-CfP80nhE.js";import{O as i}from"./object-table-BVaDN9oy.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVx9So3f.js";import"./Table-C-C6MgHD.js";import"./index-COwN8tdJ.js";import"./Dialog-iX7BQDos.js";import"./cross-Dhhk-QOY.js";import"./svgIconContainer-ByL1CzmI.js";import"./useBaseUiId-BpCYJZt6.js";import"./InternalBackdrop-Bx7guY_d.js";import"./composite-BXpnnXVg.js";import"./index-CTbyqW3F.js";import"./index-5ZL8iVjG.js";import"./index-yQDp3qiC.js";import"./useEventCallback-BZgh7tEU.js";import"./SkeletonBar-BTKdZ9Ff.js";import"./LoadingCell-CB6w0OIv.js";import"./ColumnConfigDialog-C-rNyPlT.js";import"./DraggableList-BTeUHn5f.js";import"./search-DBbR_HQC.js";import"./Input-C5rpYEfy.js";import"./useControlled-DY45BqZY.js";import"./Button-CBX6PhDU.js";import"./small-cross-MDPhdUvt.js";import"./ActionButton-bm-7ANXn.js";import"./Checkbox-HB4hmGD9.js";import"./useValueChanged-BWuoub0f.js";import"./CollapsiblePanel-C-Oui3tr.js";import"./MultiColumnSortDialog-FvhHmpMw.js";import"./MenuTrigger-BVMKdwJK.js";import"./CompositeItem-rrhF1DOt.js";import"./ToolbarRootContext-BNZ6uAxf.js";import"./getDisabledMountTransitionStyles-CkkZsrSS.js";import"./getPseudoElementBounds-B5VczZa8.js";import"./chevron-down-DosI46m-.js";import"./index-Db0uTKuy.js";import"./error-D8W3ZfFh.js";import"./BaseCbacBanner-Dx8ja9_G.js";import"./makeExternalStore-CX8kqVGx.js";import"./Tooltip-I7xftFyx.js";import"./isObject-C97A8-HS.js";import"./debounce-o-BE-ayW.js";import"./useOsdkClient-BiT3AVNq.js";import"./tick-bPvw1r3T.js";import"./DropdownField-DFKXNXg2.js";import"./isEqual-BqwGPlqV.js";import"./_baseIsEqual-7qS6C5tt.js";import"./withOsdkMetrics-B-Iw4pyn.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
