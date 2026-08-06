import{f as p,j as e}from"./iframe-DQ03zKaw.js";import{O as i}from"./object-table-D0TV_B21.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DsOAMWP6.js";import"./Table-kOw5nmNT.js";import"./index-stdVkj-k.js";import"./Dialog-C66CAyKR.js";import"./cross-CJiMy_ZW.js";import"./svgIconContainer--Sopw3_S.js";import"./useBaseUiId-BcwXn3JA.js";import"./InternalBackdrop-BDQCmvGI.js";import"./composite-DzzU_ZlD.js";import"./index-qXGo-ysy.js";import"./index-V5lc2XuU.js";import"./index-DCGK3uWk.js";import"./useEventCallback-BXioPfMh.js";import"./SkeletonBar-BOLkzmdO.js";import"./LoadingCell-BCDUUXR0.js";import"./ColumnConfigDialog-CPqmG5YS.js";import"./DraggableList-B-tT0o9J.js";import"./search-B-4oOix2.js";import"./Input-whmgHMtV.js";import"./useControlled-CbhFopnc.js";import"./isEqual-DZJnDX0x.js";import"./isObject-CgqEtJAk.js";import"./Button-BC8511vo.js";import"./ActionButton-Br0z02Qg.js";import"./Checkbox-BMVyta3Q.js";import"./useValueChanged-Cz9X6_0h.js";import"./CollapsiblePanel--bspc30W.js";import"./MultiColumnSortDialog-CI82RZPT.js";import"./MenuTrigger-CmdoQsfw.js";import"./CompositeItem-B8vFY17A.js";import"./ToolbarRootContext-C2wgqXfe.js";import"./getDisabledMountTransitionStyles-B5rqwZz-.js";import"./getPseudoElementBounds-oUZpb_YO.js";import"./chevron-down-DcVCbfRt.js";import"./index-DFJwtzJK.js";import"./error-Len1bRu3.js";import"./BaseCbacBanner-wd6jVkbW.js";import"./makeExternalStore-Dc9gfDBF.js";import"./Tooltip-BmyXrIl8.js";import"./PopoverPopup-Dnkp6fPn.js";import"./toNumber-BQKjpdMy.js";import"./useOsdkClient-CE2i0WO2.js";import"./tick-xWM0VnDx.js";import"./DropdownField-C9zy3zTJ.js";import"./withOsdkMetrics-DUJdTBYY.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
