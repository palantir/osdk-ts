import{f as p,j as e}from"./iframe-Jx-ulL5C.js";import{O as i}from"./object-table-q3UrjN6F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DQOtA23C.js";import"./Table-DZbRuhsF.js";import"./index-DbcvcRjy.js";import"./Dialog-BRvHhEdd.js";import"./cross-BM4LNdzl.js";import"./svgIconContainer-DA5CXbWv.js";import"./useBaseUiId-DlGP4CyH.js";import"./InternalBackdrop-6LUyu52Z.js";import"./composite-Ci3x3D-j.js";import"./index-C-0GQm9S.js";import"./index-CGN3jVUK.js";import"./index-CdQh5CWa.js";import"./useEventCallback-BBmWvDTH.js";import"./SkeletonBar-BXzTGbHS.js";import"./LoadingCell-qf1fOl3j.js";import"./ColumnConfigDialog-BmBxaPQ0.js";import"./DraggableList-BD5HhNtg.js";import"./search-DKR4hHlP.js";import"./Input-xfSfvcdJ.js";import"./useControlled-DTXqp68j.js";import"./isEqual-nIAJKi_O.js";import"./isObject-BplzMpX4.js";import"./Button-BgbvTS34.js";import"./ActionButton-URjGw98Y.js";import"./Checkbox-D9CUAKPQ.js";import"./useValueChanged-MGFURfEB.js";import"./CollapsiblePanel-CvwhhdJE.js";import"./MultiColumnSortDialog-BzisExGf.js";import"./MenuTrigger-CsTa46EY.js";import"./CompositeItem-C-U5_30J.js";import"./ToolbarRootContext-DjVkVQIx.js";import"./getDisabledMountTransitionStyles-o05RofWl.js";import"./getPseudoElementBounds-DKJ-1ie9.js";import"./chevron-down-DmKonuNt.js";import"./index-A1POwUcc.js";import"./error-Bqu3bVtd.js";import"./BaseCbacBanner-CMl-VU3K.js";import"./makeExternalStore-CrS-QWtj.js";import"./Tooltip-hRlt1KoC.js";import"./PopoverPopup-CjIG7Pek.js";import"./toNumber-CcKit7Y-.js";import"./useOsdkClient-BsIcKaUN.js";import"./tick-C7uyqAjE.js";import"./DropdownField-auraDr24.js";import"./withOsdkMetrics-B-ZB5Rqw.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
