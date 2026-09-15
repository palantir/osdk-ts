import{f as p,j as e}from"./iframe-DjTsTlya.js";import{O as i}from"./object-table-BH4m2DVb.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DOwvcOZH.js";import"./Table-DeDjgQkN.js";import"./index-CRTtk6ac.js";import"./Dialog-CJA--hLR.js";import"./cross-Cvq5D40f.js";import"./svgIconContainer-xPgA_yJ1.js";import"./useBaseUiId-BzNc-3Ql.js";import"./InternalBackdrop-pUIcFmU-.js";import"./composite-0nzRqKiC.js";import"./index-y5c47ww6.js";import"./index-DqxuM6At.js";import"./index-BHnNwPKM.js";import"./useEventCallback-B8IjVnQ6.js";import"./SkeletonBar-CR9uI5kM.js";import"./LoadingCell-KFngOTg4.js";import"./ColumnConfigDialog-BdmQ5e1p.js";import"./DraggableList-C_6AaAoA.js";import"./search-Bt_OBQnD.js";import"./Input-D8ax6gQv.js";import"./useControlled-BVHEmv7i.js";import"./Button-DyYtieLu.js";import"./small-cross-CKizW9rD.js";import"./ActionButton-BZbmOJWh.js";import"./Checkbox-DRakJNAH.js";import"./useValueChanged-B-nMYLan.js";import"./CollapsiblePanel-BpE-bZTw.js";import"./MultiColumnSortDialog-CMuXKD4i.js";import"./MenuTrigger-Caw-fYwa.js";import"./CompositeItem-BuvWaDdm.js";import"./ToolbarRootContext-DfW4g7RO.js";import"./getDisabledMountTransitionStyles-BA0waCP-.js";import"./getPseudoElementBounds-DKRYw-Sa.js";import"./chevron-down-Crh_WC6g.js";import"./index-C3payG2R.js";import"./error-DgpTog1A.js";import"./BaseCbacBanner-BB7djwNT.js";import"./makeExternalStore-Dm9B4aPC.js";import"./Tooltip-H4kLk5D5.js";import"./PopoverPopup-CH71VGBG.js";import"./debounce-DVG0b2wL.js";import"./useOsdkClient-BaZTHlJk.js";import"./tick-CbhTJk3v.js";import"./DropdownField-BBpsDicP.js";import"./isEqual-BsYIHLNh.js";import"./withOsdkMetrics-BW3QL-zG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
