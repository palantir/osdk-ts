import{f as p,j as e}from"./iframe-CpSXGIMP.js";import{O as i}from"./object-table-BfhkxOeM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BAIK3F_r.js";import"./Table-C1hP_W1k.js";import"./index-CKAzeimB.js";import"./Dialog-20OrDQWb.js";import"./cross-CzQoIi7Z.js";import"./svgIconContainer-DUtflVNj.js";import"./useBaseUiId-D-3zNuFz.js";import"./InternalBackdrop-DZlr-aNU.js";import"./composite-B3b5WAJp.js";import"./index-Cik8okmC.js";import"./index-B7KWUsJB.js";import"./index-DftJEGwA.js";import"./useEventCallback-BBf_aYTc.js";import"./SkeletonBar-CNXCAGmc.js";import"./LoadingCell-D_8obgOr.js";import"./ColumnConfigDialog-BTrG7a_x.js";import"./DraggableList-DXHuvwR9.js";import"./search-CuxqOQhv.js";import"./Input-UzrhFg4t.js";import"./useControlled-BmzJBEAD.js";import"./Button-68wBS86H.js";import"./small-cross-DWFx64Mr.js";import"./ActionButton-Dz39mG8V.js";import"./Checkbox-sbgttWZA.js";import"./useValueChanged-BqjXh4dX.js";import"./CollapsiblePanel-BeRSQgN_.js";import"./MultiColumnSortDialog-C2n86c34.js";import"./MenuTrigger-D4bpA_BO.js";import"./CompositeItem-DSORcIfD.js";import"./ToolbarRootContext-DEzzSQ1U.js";import"./getDisabledMountTransitionStyles-MU4kd6R3.js";import"./getPseudoElementBounds-Ce2XLvLP.js";import"./chevron-down-Btszu4M0.js";import"./index-B-U1HPP1.js";import"./error-Cwk6m0y9.js";import"./BaseCbacBanner-BTg5nBuQ.js";import"./makeExternalStore-DmkWZ8pD.js";import"./Tooltip-a-xfMqZ7.js";import"./PopoverPopup-B2SsDUTB.js";import"./debounce-TFuakvIj.js";import"./useOsdkClient-nFyg2naI.js";import"./tick-FjTw9avv.js";import"./DropdownField-D9b5Vmbe.js";import"./isEqual-D1jnOiv1.js";import"./withOsdkMetrics-DDed3ono.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
