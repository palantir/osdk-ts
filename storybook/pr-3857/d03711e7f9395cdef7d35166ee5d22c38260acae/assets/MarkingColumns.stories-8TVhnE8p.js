import{f as p,j as e}from"./iframe-TSCXHIvh.js";import{O as i}from"./object-table-g4jUaBrr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CyN_qzqo.js";import"./Table-7IyhMdYF.js";import"./index-CGNWdjig.js";import"./Dialog-BrSEEWIj.js";import"./cross-qV010Wi5.js";import"./svgIconContainer-Bphs_oGH.js";import"./useBaseUiId-BRdTeBe9.js";import"./InternalBackdrop-zmDDK70c.js";import"./composite-C_xrzc_v.js";import"./index-DJNFZ_0Y.js";import"./index-CyvvuY01.js";import"./index-365hR3Tz.js";import"./useEventCallback-Q-BuKhlk.js";import"./SkeletonBar-Cn6bvStP.js";import"./LoadingCell-Dc7JZgB1.js";import"./ColumnConfigDialog-B_KblGDd.js";import"./DraggableList-BA7ztIjM.js";import"./search-CbBOTsc7.js";import"./Input-CKK_09LY.js";import"./useControlled-BlC2AddR.js";import"./isEqual-CUbPxmeV.js";import"./isObject-CdyqwF5E.js";import"./Button-DshrbGne.js";import"./ActionButton-BqiSBwhf.js";import"./Checkbox-BOW9gfJ4.js";import"./useValueChanged-D5zyQZ_8.js";import"./CollapsiblePanel-Bv1oor-z.js";import"./MultiColumnSortDialog-BfUJH6qF.js";import"./MenuTrigger-Dzncy3J5.js";import"./CompositeItem-0AIS0Bnl.js";import"./ToolbarRootContext-msQZFx_W.js";import"./getDisabledMountTransitionStyles-DAAaOP18.js";import"./getPseudoElementBounds-DZOzu6Xp.js";import"./chevron-down-BoPRMOEq.js";import"./index-CG_ja6Hi.js";import"./error-B7F78YrU.js";import"./BaseCbacBanner-DMzPVCj_.js";import"./makeExternalStore-B-opuCj0.js";import"./Tooltip-h74fXVzi.js";import"./PopoverPopup-CD6nvj94.js";import"./toNumber-DiHLMfvy.js";import"./useOsdkClient-BjJ_4Cbd.js";import"./tick-B8NR-l3z.js";import"./DropdownField-CA23MMyB.js";import"./withOsdkMetrics-q66YyN3A.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
