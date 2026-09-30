import{f as p,j as e}from"./iframe-DxVz5dus.js";import{O as i}from"./object-table-DOOpOjxQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-dij9S3RJ.js";import"./Table-D-CEaVeb.js";import"./index-C_W-VT0S.js";import"./Dialog-BDHH0maw.js";import"./cross-IXW3xmZm.js";import"./svgIconContainer-ftSbGeci.js";import"./useBaseUiId-BWXYzcoK.js";import"./InternalBackdrop-B1SYraZj.js";import"./composite-BDVlfNwN.js";import"./index-ClRjmnyd.js";import"./index-gok66sxW.js";import"./index-BiJTgGJY.js";import"./useEventCallback-CX0aAoan.js";import"./SkeletonBar-DERF-gsY.js";import"./LoadingCell-CvxZL9kC.js";import"./ColumnConfigDialog-J_BbbcKh.js";import"./DraggableList-L-6Y09gw.js";import"./search-C5WRo3gI.js";import"./Input-BLn4Lqlk.js";import"./useControlled-laJEGVBG.js";import"./Button-DkKQyNy7.js";import"./small-cross-DNkarUz2.js";import"./ActionButton-B5XzNvTu.js";import"./Checkbox-5nk_Ef0z.js";import"./useValueChanged-C6gCry8f.js";import"./CollapsiblePanel-emSmjH55.js";import"./MultiColumnSortDialog-CLj_cEaP.js";import"./MenuTrigger-m_qywH2D.js";import"./CompositeItem-DZxjvmIc.js";import"./ToolbarRootContext-BhnwoH5s.js";import"./getDisabledMountTransitionStyles-jz6kYw7l.js";import"./getPseudoElementBounds-DLZHdgfT.js";import"./chevron-down-CJ_JWdST.js";import"./index-DQFNyqTE.js";import"./error-l8hi8NpA.js";import"./BaseCbacBanner-DAlbmB8O.js";import"./makeExternalStore-6HRE-tXR.js";import"./Tooltip-CIQ48OAI.js";import"./PopoverPopup-DDubBzbx.js";import"./debounce-HK4ZQpWE.js";import"./useOsdkClient-DWdsPkLC.js";import"./tick-B2s8zm1S.js";import"./DropdownField-CXyq1EI7.js";import"./isEqual-BBaINTWv.js";import"./withOsdkMetrics-BUQXNERU.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
