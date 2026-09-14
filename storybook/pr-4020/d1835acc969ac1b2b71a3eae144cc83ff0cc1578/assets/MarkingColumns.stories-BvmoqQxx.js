import{f as p,j as e}from"./iframe-KzcVBCRi.js";import{O as i}from"./object-table-BskToQWp.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHEHcaci.js";import"./Table-BkmXv9h9.js";import"./index-CzXxEHHr.js";import"./Dialog-Bg6StrtK.js";import"./cross-C3McpADX.js";import"./svgIconContainer-59d154vN.js";import"./useBaseUiId-DZF9dUKs.js";import"./InternalBackdrop-DU_2I3T6.js";import"./composite-5RWCdSN2.js";import"./index-k64aStbd.js";import"./index-2DqsNDep.js";import"./index-DjI5xhOO.js";import"./useEventCallback-C8Tozf_J.js";import"./SkeletonBar-Cjrbehp8.js";import"./LoadingCell-CB-JnvM9.js";import"./ColumnConfigDialog-oYSxjE5e.js";import"./DraggableList-CV6ahxMz.js";import"./search-CflGQf1d.js";import"./Input-Cd7kdMt2.js";import"./useControlled-uli5q6ql.js";import"./Button-CBd10Xxd.js";import"./small-cross-DS-iYFW3.js";import"./ActionButton-IdIQB2NM.js";import"./Checkbox-Cc_wqZbm.js";import"./useValueChanged-WxAxKP7S.js";import"./CollapsiblePanel-Bw4ONZWv.js";import"./MultiColumnSortDialog-DyVxfK2i.js";import"./MenuTrigger-BVsiP-tY.js";import"./CompositeItem-BzuuDXx0.js";import"./ToolbarRootContext-BWXPXzbU.js";import"./getDisabledMountTransitionStyles-VJ04QHXq.js";import"./getPseudoElementBounds-B5CJHYyN.js";import"./chevron-down-DpGps272.js";import"./index-BCuz_Fvw.js";import"./error-BAN-C5Cp.js";import"./BaseCbacBanner-CmTZFDnE.js";import"./makeExternalStore-DCqqAOa1.js";import"./Tooltip-CutkRXXV.js";import"./PopoverPopup-CndzA1oj.js";import"./debounce-NVX7x4-3.js";import"./useOsdkClient-B5kzp8lo.js";import"./tick-BnZkTXtc.js";import"./DropdownField-CLCiF7Rm.js";import"./isEqual-D7ffYgj9.js";import"./withOsdkMetrics-DIAhwg3C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
