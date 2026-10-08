import{f as p,j as e}from"./iframe-BZFzj4I7.js";import{O as i}from"./object-table-CaOanD_r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4VtoqvU.js";import"./Table-D69G7tsa.js";import"./index-C9BOu-GC.js";import"./Dialog-BmAlFTcT.js";import"./cross-8Ktod3hp.js";import"./svgIconContainer-BgU1NuNe.js";import"./useBaseUiId-CynpPIak.js";import"./InternalBackdrop-CG54fetj.js";import"./composite-DOYm4spg.js";import"./index-CRbxC94q.js";import"./index-ZJ1zgTXq.js";import"./index-Bk8XfLzk.js";import"./useEventCallback-BCUiY9N8.js";import"./SkeletonBar-bkE9C5Ws.js";import"./LoadingCell-gLcFJ4DB.js";import"./ColumnConfigDialog-BiLqNN8I.js";import"./DraggableList-kJQ0KOz4.js";import"./search-CtmR8qHz.js";import"./Input-CNdZYHeG.js";import"./useControlled-ed2KW_CI.js";import"./Button-BADC2rqt.js";import"./small-cross-BAxJVgQG.js";import"./ActionButton-Dex_JIm4.js";import"./Checkbox-JZjDJOin.js";import"./useValueChanged-CuuuHRpO.js";import"./CollapsiblePanel-CGkaJLnK.js";import"./MultiColumnSortDialog-D4GOkhgz.js";import"./MenuTrigger-Cc6fQlb_.js";import"./CompositeItem-V8rmNgwr.js";import"./ToolbarRootContext-BpRFBWvV.js";import"./getDisabledMountTransitionStyles-Ch4NQ1Hm.js";import"./getPseudoElementBounds-DpgopoMm.js";import"./chevron-down-B4Kaehlj.js";import"./index-dwA92LAO.js";import"./error-DXjyDcZg.js";import"./BaseCbacBanner-DJu3ij19.js";import"./makeExternalStore-CONCRK9u.js";import"./Tooltip-kv_sqmri.js";import"./PopoverPopup-BZRml7yC.js";import"./debounce-BbAGx_Mx.js";import"./useOsdkClient-C4NEBTtT.js";import"./tick-CiH7fOUu.js";import"./DropdownField-DUmhDtNd.js";import"./isEqual-CYFWBjNz.js";import"./withOsdkMetrics-LbVHGHvS.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
