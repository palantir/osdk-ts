import{f as p,j as e}from"./iframe-DUUN6t7i.js";import{O as i}from"./object-table-DTqnDN-H.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BzY2PQK8.js";import"./Table-DnFu5Qca.js";import"./index-CllJbB6n.js";import"./Dialog-BQe1t3O4.js";import"./cross-BL0CmC8v.js";import"./svgIconContainer-BiEJIKWJ.js";import"./useBaseUiId-DD-rnAgn.js";import"./InternalBackdrop-50xUnS5H.js";import"./composite-DXLhbd5q.js";import"./index-CF3EfJQa.js";import"./index-Cyo2_RId.js";import"./index-zmjPNORe.js";import"./useEventCallback-C8EWv1mM.js";import"./SkeletonBar-D_7uUrgz.js";import"./LoadingCell-BF9OtyKp.js";import"./ColumnConfigDialog-B_VPvCsk.js";import"./DraggableList-DDmZHPJs.js";import"./search-BOFS1DOk.js";import"./Input-eja5fv_S.js";import"./useControlled-OksHndqL.js";import"./Button-BiBj2Ngy.js";import"./small-cross-Brklb7bd.js";import"./ActionButton-Dc9XrfLH.js";import"./Checkbox-Bymh2P1S.js";import"./useValueChanged-DbYhsi4t.js";import"./CollapsiblePanel-DY2xqSav.js";import"./MultiColumnSortDialog-D1gQqu1j.js";import"./MenuTrigger-CrjuaHsp.js";import"./CompositeItem-C7oLwUzE.js";import"./ToolbarRootContext-sOFoFOUi.js";import"./getDisabledMountTransitionStyles-DUae_uwF.js";import"./getPseudoElementBounds-BVQl0rR8.js";import"./chevron-down-9ao4cWz0.js";import"./index-JYM0ZjgP.js";import"./error-Btl2ABt3.js";import"./BaseCbacBanner-pDJQtSGl.js";import"./makeExternalStore-DSCive7G.js";import"./Tooltip-2hA_c5uF.js";import"./PopoverPopup-Bh2SXv5G.js";import"./debounce-CCRuevd-.js";import"./useOsdkClient-BfrDVP7e.js";import"./tick-CVC53zOF.js";import"./DropdownField-DUhPo9yt.js";import"./isEqual-f8Z9Lb_j.js";import"./withOsdkMetrics-YnroKoAT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
