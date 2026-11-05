import{f as p,j as e}from"./iframe-DNoPlrmW.js";import{O as i}from"./object-table-nzcluZUw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BA-kC20r.js";import"./Table-C4kOqFlr.js";import"./index-GMd43Lzl.js";import"./Dialog-CqjErnak.js";import"./cross-Dbdjn7RF.js";import"./svgIconContainer-CUvRyfnW.js";import"./useBaseUiId-CG8dqONM.js";import"./InternalBackdrop-DL1HDt1e.js";import"./composite-8FnP0FRm.js";import"./index-CiJY3H2C.js";import"./index-PNiqJ9T4.js";import"./index-SE8XSgW-.js";import"./useEventCallback-CX57274w.js";import"./SkeletonBar-DvQ-YXlb.js";import"./LoadingCell-Bp5le_if.js";import"./ColumnConfigDialog-BFHfnyqX.js";import"./DraggableList-isYHywku.js";import"./search-BAl_vtGE.js";import"./Input-Ci_chYxf.js";import"./useControlled-L9fBFGN0.js";import"./Button-Au7RONC3.js";import"./small-cross-U2NFloQ_.js";import"./ActionButton-DjdbAx1F.js";import"./Checkbox-CyToGzmV.js";import"./useValueChanged-DL6q5b55.js";import"./CollapsiblePanel-CJnRgBiN.js";import"./MultiColumnSortDialog-DyzvNICP.js";import"./MenuTrigger-D0TngpDX.js";import"./CompositeItem-CVV0k2jm.js";import"./ToolbarRootContext-D3fcj2nK.js";import"./getDisabledMountTransitionStyles-BJ4RXawF.js";import"./getPseudoElementBounds-ByFx_aK9.js";import"./chevron-down-AD2NYQ4Y.js";import"./index-DzuC6B4f.js";import"./error-BcP9NYX_.js";import"./BaseCbacBanner-ComGjBeE.js";import"./makeExternalStore-ThIGMhbJ.js";import"./Tooltip-BLCCo0To.js";import"./PopoverPopup-CsydTAyn.js";import"./debounce-CwIobNTC.js";import"./useOsdkClient-DEmkR6YZ.js";import"./tick-CkHBz8KO.js";import"./DropdownField-BQsQKUlk.js";import"./isEqual-CIzAN7dH.js";import"./withOsdkMetrics-C7RJ1R_V.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
