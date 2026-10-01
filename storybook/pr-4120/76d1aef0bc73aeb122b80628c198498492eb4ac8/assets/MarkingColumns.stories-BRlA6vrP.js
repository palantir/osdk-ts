import{f as p,j as e}from"./iframe-CvsBQ7Bv.js";import{O as i}from"./object-table-Bva39EkY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DlzqvSUq.js";import"./Table-Bk_Xiy1O.js";import"./index-zqvYW4SU.js";import"./Dialog-Dj7AJSDy.js";import"./cross-BBfoUyvH.js";import"./svgIconContainer-BICOG3-Z.js";import"./useBaseUiId-DJie0QLa.js";import"./InternalBackdrop-CgJA0r_O.js";import"./composite-tQAENqA9.js";import"./index-DWqMtX_5.js";import"./index-pktwAYcd.js";import"./index-CgcrBJpo.js";import"./useEventCallback-ama7zC7l.js";import"./SkeletonBar-BDtygrLN.js";import"./LoadingCell-DiJJdD0Z.js";import"./ColumnConfigDialog-DVeFw9Fz.js";import"./DraggableList--QPMrdfM.js";import"./search-DMySM0K3.js";import"./Input-CyAWOOQt.js";import"./useControlled-BMRWc9HY.js";import"./Button--C8rvOfU.js";import"./small-cross-CJHhyVum.js";import"./ActionButton-B4IV8DDr.js";import"./Checkbox-PtMaFLOi.js";import"./useValueChanged-MiAVaZ_u.js";import"./CollapsiblePanel-C7BP8ZD3.js";import"./MultiColumnSortDialog-DpCfKP_b.js";import"./MenuTrigger-D72mL9sH.js";import"./CompositeItem-CgFodWwZ.js";import"./ToolbarRootContext-CUoJwkVG.js";import"./getDisabledMountTransitionStyles-BYd2AM5Z.js";import"./getPseudoElementBounds-C1BIyYMV.js";import"./chevron-down-pfssoNn9.js";import"./index-CGIOcGM5.js";import"./error-D7W27UGH.js";import"./BaseCbacBanner-BS-G6SnX.js";import"./makeExternalStore-CoY10B_2.js";import"./Tooltip-BEj0KtXz.js";import"./PopoverPopup-ICSjS-3E.js";import"./debounce-B8ADmp8k.js";import"./useOsdkClient-Gme28oz4.js";import"./tick-Cx1M9Q22.js";import"./DropdownField-Dkea7y5N.js";import"./isEqual-zwoTdbaf.js";import"./withOsdkMetrics-B_Zhux1x.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
