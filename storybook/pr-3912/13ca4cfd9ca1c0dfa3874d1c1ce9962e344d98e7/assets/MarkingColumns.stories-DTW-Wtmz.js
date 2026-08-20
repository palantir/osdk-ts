import{f as p,j as e}from"./iframe-CnFdBl-W.js";import{O as i}from"./object-table-B4sXouVB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D0VrPXX4.js";import"./Table-BCdm6SW9.js";import"./index-C7QX7sqh.js";import"./Dialog-cgPcTj2J.js";import"./cross-C0CFi2LA.js";import"./svgIconContainer-BH-fJV0L.js";import"./useBaseUiId-Db0ciCX6.js";import"./InternalBackdrop-DXjwxVqq.js";import"./composite-Bchd3j-K.js";import"./index-D-ULFZnm.js";import"./index-CVfyo-vI.js";import"./index-0fNVrXhf.js";import"./useEventCallback-qSmw8efB.js";import"./SkeletonBar-BdOFoRrQ.js";import"./LoadingCell-BLzyjQA-.js";import"./ColumnConfigDialog-FZGCYRdi.js";import"./DraggableList-Db-KWUP4.js";import"./search-BZ3zzvB7.js";import"./Input-DbDF9B3g.js";import"./useControlled-q9_B02Xu.js";import"./Button-CliHRcLl.js";import"./small-cross-CNTpTYNR.js";import"./ActionButton-f_QMANPB.js";import"./Checkbox-DuI53iNm.js";import"./useValueChanged-B9ALwysi.js";import"./CollapsiblePanel-DABG9C5U.js";import"./MultiColumnSortDialog-Sb3fOS37.js";import"./MenuTrigger-4FjSbfAn.js";import"./CompositeItem-ZV7LMbWM.js";import"./ToolbarRootContext-CpYHpTj-.js";import"./getDisabledMountTransitionStyles-BZKarr_8.js";import"./getPseudoElementBounds-k-pDzgEw.js";import"./chevron-down-CQGtY8nv.js";import"./index-CkqoLo0V.js";import"./error-CB_FjmA0.js";import"./BaseCbacBanner-YRlLrGPK.js";import"./makeExternalStore-BjBU5_-l.js";import"./Tooltip-q-GVrgqN.js";import"./PopoverPopup-BDYpDFDK.js";import"./debounce-BYgZD2VZ.js";import"./useOsdkClient-BhwDdzh_.js";import"./tick-n1UZaFr7.js";import"./DropdownField-DWV1mCKe.js";import"./isEqual-DIsBPJHu.js";import"./withOsdkMetrics-DiZaeAo8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
