import{f as p,j as e}from"./iframe-m5MS_AOj.js";import{O as i}from"./object-table-BC9fkns5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cwc8v1fY.js";import"./Table-CIjlWIk4.js";import"./index-DLmK-3wj.js";import"./Dialog-70BG_zV_.js";import"./cross-CnvlWWQf.js";import"./svgIconContainer-CN2kOMHj.js";import"./useBaseUiId-Qy_uNuRZ.js";import"./InternalBackdrop-DkxaVrHk.js";import"./composite-URT0CF0y.js";import"./index-fzOrEoIw.js";import"./index-oqW8MMnv.js";import"./index-DJe0xhy4.js";import"./useEventCallback-DOc1-vE_.js";import"./SkeletonBar-iBmjJTol.js";import"./LoadingCell-CHS72waR.js";import"./ColumnConfigDialog-BmKaIgQQ.js";import"./DraggableList-BcK0Le42.js";import"./search-CcRTPglH.js";import"./Input-o1S0gnyB.js";import"./useControlled-22a6dTFJ.js";import"./isEqual-CfIEN4pK.js";import"./isObject-CsjcMZtm.js";import"./Button-DMilPMm4.js";import"./ActionButton-DLuP9c_H.js";import"./Checkbox-_jhKYKoR.js";import"./useValueChanged-BKB40wxe.js";import"./CollapsiblePanel-B98BpceP.js";import"./MultiColumnSortDialog-XlWsTK6k.js";import"./MenuTrigger-Bi21pepp.js";import"./CompositeItem-W4eWSFb6.js";import"./ToolbarRootContext-Nqff0oCy.js";import"./getDisabledMountTransitionStyles-LU9Dun1Q.js";import"./getPseudoElementBounds-DvApA5Pd.js";import"./chevron-down-CGfzs9sc.js";import"./index-BRTVPirF.js";import"./error-Cg5wTyY6.js";import"./BaseCbacBanner-B5_ySqf0.js";import"./makeExternalStore-BIok_NyR.js";import"./Tooltip-D8W5By2S.js";import"./PopoverPopup-B4LNmDrb.js";import"./toNumber-BCgQEwY4.js";import"./useOsdkClient-Czt1KuT1.js";import"./tick-bUBGlmQ7.js";import"./DropdownField-B72e_7Tx.js";import"./withOsdkMetrics-C6tQjPwh.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
