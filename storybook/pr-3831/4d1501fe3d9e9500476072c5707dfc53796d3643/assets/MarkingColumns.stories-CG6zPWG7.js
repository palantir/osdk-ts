import{f as p,j as e}from"./iframe-B_zElg-B.js";import{O as i}from"./object-table-CiudyEEV.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DRQoOE0T.js";import"./Table-YcuLBa9-.js";import"./index-Y0pbVALd.js";import"./Dialog-eqoCymUU.js";import"./cross-AjEzGA8V.js";import"./svgIconContainer-CUDghfka.js";import"./useBaseUiId-C39aF9XL.js";import"./InternalBackdrop-DhtYgC5u.js";import"./composite-0kNuzYvp.js";import"./index-Cixqsfx9.js";import"./index-C6L5_3LK.js";import"./index-DvYME2IR.js";import"./useEventCallback-Ca6KgphA.js";import"./SkeletonBar-DlZLi0bg.js";import"./LoadingCell-VpeWOucW.js";import"./ColumnConfigDialog-sn6CtPlU.js";import"./DraggableList-Bd644Fjq.js";import"./search-D4GHHRcy.js";import"./Input-CYBD-BHU.js";import"./useControlled-6dtWCE0B.js";import"./isEqual-D8eqqu_U.js";import"./isObject-YUZI-5HX.js";import"./Button-Ct7hm6nC.js";import"./ActionButton-DBW_GHnB.js";import"./Checkbox-D2EdTGWa.js";import"./useValueChanged-44oYbNFp.js";import"./CollapsiblePanel-CQKYGtyy.js";import"./MultiColumnSortDialog-47xFqf_s.js";import"./MenuTrigger-CjbOgME4.js";import"./CompositeItem-BVhfnvWC.js";import"./ToolbarRootContext-Cy1n_T1N.js";import"./getDisabledMountTransitionStyles-BT1usa7w.js";import"./getPseudoElementBounds-BbRYHzbr.js";import"./chevron-down--uAY4t4Y.js";import"./index-Cnqy7EOL.js";import"./error-Ckw62m6f.js";import"./BaseCbacBanner-D-fmKJvW.js";import"./makeExternalStore-B-Aw5Aa5.js";import"./Tooltip-CDziBIY_.js";import"./PopoverPopup-dlk6jeVL.js";import"./toNumber-CdMeurHh.js";import"./useOsdkClient-BfxQYBoI.js";import"./tick-URoWB_Nt.js";import"./DropdownField-Dp86C8Tw.js";import"./withOsdkMetrics-BBrkQJAI.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
