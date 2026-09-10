import{f as p,j as e}from"./iframe-oqiETzjs.js";import{O as i}from"./object-table-rNXIHn5Q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DY6GVQaH.js";import"./Table-BflKtP03.js";import"./index-ZtK2AEsr.js";import"./Dialog-Cz1Kh4Dd.js";import"./cross-CMMlEidH.js";import"./svgIconContainer-C-hQGfLn.js";import"./useBaseUiId-DB5E9Fa7.js";import"./InternalBackdrop-BD9FMsgH.js";import"./composite-DUWgXaax.js";import"./index-D6-tP7ey.js";import"./index-BcAnoDMR.js";import"./index-CDmWDyVL.js";import"./useEventCallback-CgLXQDBT.js";import"./SkeletonBar-BrsaaqIx.js";import"./LoadingCell-DZynjFCS.js";import"./ColumnConfigDialog-DWQC5Adn.js";import"./DraggableList-Zvqqdsz9.js";import"./search-Hb2jWcJP.js";import"./Input-DVeUb6S9.js";import"./useControlled-CGzg1vVh.js";import"./Button-BnpV_XVG.js";import"./small-cross-CVZbPmwP.js";import"./ActionButton-Br3jBZ8T.js";import"./Checkbox-CFStyuqq.js";import"./useValueChanged-DvOpzAYW.js";import"./CollapsiblePanel-BJpSAUrV.js";import"./MultiColumnSortDialog-CNdNiaKX.js";import"./MenuTrigger-D8dN5Oyb.js";import"./CompositeItem-D_YoAFpQ.js";import"./ToolbarRootContext-B7aYE2db.js";import"./getDisabledMountTransitionStyles-Df2F2xk8.js";import"./getPseudoElementBounds-XzSdEMVW.js";import"./chevron-down-B5wuH3n5.js";import"./index-Dg5Wo44B.js";import"./error-B914xSJQ.js";import"./BaseCbacBanner-DnRPWhLM.js";import"./makeExternalStore-BIBGwZYl.js";import"./Tooltip-BjFPs1Cw.js";import"./PopoverPopup-C_RplgjD.js";import"./debounce--r48Cn5x.js";import"./useOsdkClient-B_WbWNUS.js";import"./tick-Bf3wXGgd.js";import"./DropdownField-WW4hkpJ1.js";import"./isEqual-p6GWxLy9.js";import"./withOsdkMetrics-tcmfqEow.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
