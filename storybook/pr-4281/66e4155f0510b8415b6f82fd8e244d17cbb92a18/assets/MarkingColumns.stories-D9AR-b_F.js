import{f as p,j as e}from"./iframe-BLF1KQu4.js";import{O as i}from"./object-table-CqtGn1QO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-GcktYcA3.js";import"./Table-BQK0Clb8.js";import"./index-aXPerbbD.js";import"./Dialog-D_it6VW5.js";import"./cross-D5Owe--z.js";import"./svgIconContainer-DjnJEiXc.js";import"./useBaseUiId-BxovN8d6.js";import"./InternalBackdrop-8YL1-Sw7.js";import"./composite-fyXwWWU2.js";import"./index-BeFBWWGf.js";import"./index-CJxk2Woh.js";import"./index-CNufdcVg.js";import"./useEventCallback-CZHl-UH0.js";import"./SkeletonBar-CuJtrTbh.js";import"./LoadingCell-DQVtZ2uu.js";import"./ColumnConfigDialog-DGZd3AJ3.js";import"./DraggableList-D-ibz47z.js";import"./search-jxTo-jPn.js";import"./Input-ep0tMe9Y.js";import"./useControlled-BnRS1sX7.js";import"./Button-YyRiSJZP.js";import"./small-cross-D2kARGCF.js";import"./ActionButton-DJbMDa4y.js";import"./Checkbox-Cz2c9LTI.js";import"./useValueChanged-rkrZLPbB.js";import"./CollapsiblePanel-C1eEG4ny.js";import"./MultiColumnSortDialog-D38u1zNw.js";import"./MenuTrigger-B1erjAsz.js";import"./CompositeItem-jL-VyW-C.js";import"./ToolbarRootContext-FsR9CG6K.js";import"./getDisabledMountTransitionStyles-DoQQxJRd.js";import"./getPseudoElementBounds-C6VfQ6WO.js";import"./chevron-down-CtuyY29H.js";import"./index-DoZkCOy9.js";import"./error-8EJJ_3qq.js";import"./BaseCbacBanner-DOrbPdl4.js";import"./makeExternalStore-G2m-9f72.js";import"./Tooltip-CgClAe-q.js";import"./PopoverPopup-148tTgSp.js";import"./debounce-D7Z_8Dqm.js";import"./useOsdkClient-GmjUNKMk.js";import"./tick-By4yjMKZ.js";import"./DropdownField-DWAvJ7rF.js";import"./isEqual-BlXyHZ5h.js";import"./withOsdkMetrics-JDZWgyN8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
