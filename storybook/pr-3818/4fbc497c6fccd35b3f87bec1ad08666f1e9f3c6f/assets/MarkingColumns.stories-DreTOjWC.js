import{f as p,j as e}from"./iframe-Cre-9cas.js";import{O as i}from"./object-table-Bg3gsRRi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DHrhJo4v.js";import"./Table-Dq3AZrKj.js";import"./index-Cz4GDW4R.js";import"./Dialog-DoK0FYZI.js";import"./cross-CmMOk3cx.js";import"./svgIconContainer-DBkJAZ9O.js";import"./useBaseUiId-DOqKyLzL.js";import"./InternalBackdrop-1FWh9j41.js";import"./composite-0-c1qOZY.js";import"./index-Bm3R8EDL.js";import"./index-BSEjtXWh.js";import"./index-Bs-sQftb.js";import"./useEventCallback-NxP8s_T9.js";import"./SkeletonBar-rO47kBpz.js";import"./LoadingCell-DGZQUZbu.js";import"./ColumnConfigDialog-B8iplsw1.js";import"./DraggableList-BlCKxOBK.js";import"./search-C14d_QIQ.js";import"./Input-BbbRXoqK.js";import"./useControlled-hjvc-0on.js";import"./isEqual-1ldjMOun.js";import"./isObject-DR7tzgbU.js";import"./Button-D-qwXXls.js";import"./ActionButton-DoSJxpA9.js";import"./Checkbox-la-vkOrM.js";import"./useValueChanged-CkYMjklD.js";import"./CollapsiblePanel-4tw6s3Ru.js";import"./MultiColumnSortDialog-DsfGREW-.js";import"./MenuTrigger-CsyLpWwx.js";import"./CompositeItem-BAdlDQDE.js";import"./ToolbarRootContext-Dg4xP7xV.js";import"./getDisabledMountTransitionStyles-D4Potz8p.js";import"./getPseudoElementBounds-B7onhS8M.js";import"./chevron-down-D0grZxr0.js";import"./index-NgNvunFL.js";import"./error-DrQnvBEM.js";import"./BaseCbacBanner-DQ9-w6LD.js";import"./makeExternalStore-B7-iML3E.js";import"./Tooltip-C_98Sk3C.js";import"./PopoverPopup-YEX9TARL.js";import"./toNumber-CqhpYoFk.js";import"./useOsdkClient-DeR_d-JJ.js";import"./tick-zYcRhqQQ.js";import"./DropdownField-BHwdgkO9.js";import"./withOsdkMetrics-CUiTNeFG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
