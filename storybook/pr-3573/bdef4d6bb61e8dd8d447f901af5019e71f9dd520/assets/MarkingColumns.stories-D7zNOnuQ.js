import{f as n,j as t}from"./iframe-BuIfWQiT.js";import{O as p}from"./object-table-DS4_LoWX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BvAbq-DM.js";import"./Table-C858h8rG.js";import"./index-tGxJ4i2d.js";import"./Dialog-C4GUvOGI.js";import"./cross-CqgTtmT-.js";import"./svgIconContainer-D5Zy-JaY.js";import"./useBaseUiId-BTaavWiD.js";import"./InternalBackdrop-BRodQhq9.js";import"./composite-Dqi9L7ei.js";import"./index-eA4nGAMP.js";import"./index-DdiA5Wxy.js";import"./index-BII4jbsX.js";import"./useEventCallback-BkQX7Rjw.js";import"./SkeletonBar-CKIOXB9T.js";import"./LoadingCell-D0AZ6QKi.js";import"./ColumnConfigDialog-Cf3vXwIc.js";import"./DraggableList-CspVOldG.js";import"./search-EvA7dgxQ.js";import"./Input-eVj5BZhK.js";import"./useControlled-5qhFJw8u.js";import"./Button-FYmGU4rV.js";import"./small-cross-BW6PSFF_.js";import"./ActionButton-G0n9zjV1.js";import"./Checkbox-B58Ju5sj.js";import"./useValueChanged-ji7N0pBd.js";import"./CollapsiblePanel-CiWwcGAq.js";import"./MultiColumnSortDialog-DYkKMfKY.js";import"./MenuTrigger-N0ZgTD8n.js";import"./CompositeItem-uCKrjlaB.js";import"./ToolbarRootContext-UqrQOJ91.js";import"./getDisabledMountTransitionStyles-o_tdRGxz.js";import"./getPseudoElementBounds-D9X5mnmF.js";import"./chevron-down-DQNyNuTM.js";import"./index-B_N9wHAC.js";import"./error-EFGVVxdZ.js";import"./BaseCbacBanner-DyUCsEov.js";import"./makeExternalStore-CXUbXgCo.js";import"./Tooltip-CeCYuZCR.js";import"./PopoverPopup-djdegwSN.js";import"./toNumber-DkB1lRqr.js";import"./useOsdkClient-adN11b3w.js";import"./tick-BjMraGP3.js";import"./DropdownField-DGj4udZJ.js";import"./withOsdkMetrics-CQy4uTsn.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
