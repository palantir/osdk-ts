import{f as p,j as e}from"./iframe-BOj5ppke.js";import{O as i}from"./object-table-CMpHVwNW.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CBHct16F.js";import"./Table-XbqFUHS7.js";import"./index-HKvlrTBa.js";import"./Dialog-9inVe_LB.js";import"./cross-DNHN82gf.js";import"./svgIconContainer-BuTDWv6N.js";import"./useBaseUiId-BNy53Xwg.js";import"./InternalBackdrop-2JUdJu3v.js";import"./composite-BIYhI5rN.js";import"./index-yY_I17Ls.js";import"./index-D09ehKI5.js";import"./index-60fYJKFG.js";import"./useEventCallback-6T1KNzx1.js";import"./SkeletonBar-B-IOK4wU.js";import"./LoadingCell-CGBveAsm.js";import"./ColumnConfigDialog-BOLFm22z.js";import"./DraggableList-CuWl0rg1.js";import"./search-Df27sRIb.js";import"./Input-D8jSSVKT.js";import"./useControlled-7cY7BcCI.js";import"./Button-KVqGzs9n.js";import"./small-cross-Bg4ILemt.js";import"./ActionButton-BOz9rn69.js";import"./Checkbox-CpJwtUU1.js";import"./useValueChanged-1Gqn7W9E.js";import"./CollapsiblePanel-C2WGctBy.js";import"./MultiColumnSortDialog-D-kndlzk.js";import"./MenuTrigger-B8jkOBbS.js";import"./CompositeItem-DOYu6l81.js";import"./ToolbarRootContext-BwQvbarU.js";import"./getDisabledMountTransitionStyles-BPfNVA-k.js";import"./getPseudoElementBounds-BnmQ9bfG.js";import"./chevron-down-CNYfkkhw.js";import"./index-CZ8HqYif.js";import"./error-DVmdWFmh.js";import"./BaseCbacBanner-DEawCAhX.js";import"./makeExternalStore-EqBWCSWE.js";import"./Tooltip-DoFeRf33.js";import"./PopoverPopup-DVsaBUbG.js";import"./debounce-DoyNhnA7.js";import"./useOsdkClient-n_KwCS3w.js";import"./tick-ZiYqSkEH.js";import"./DropdownField-D4MnIHgF.js";import"./isEqual-CLTE0z_7.js";import"./withOsdkMetrics-RevSluC0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
