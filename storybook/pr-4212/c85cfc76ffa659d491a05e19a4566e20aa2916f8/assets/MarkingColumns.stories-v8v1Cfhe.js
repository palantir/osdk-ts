import{f as p,j as e}from"./iframe-8RY7zcAm.js";import{O as i}from"./object-table-CbV4Ilqn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BGkfdM1d.js";import"./Table-CqiF0OH7.js";import"./index-F16GWZJ_.js";import"./Dialog-H50YXpLu.js";import"./cross-aMDWg1-0.js";import"./svgIconContainer-Bnw3Cx_6.js";import"./useBaseUiId-D3Is5SDV.js";import"./InternalBackdrop-CEKxxXVK.js";import"./composite-BDnjYEG7.js";import"./index-DR56g2UK.js";import"./index-CFR66S1o.js";import"./index-Cp_HTgiP.js";import"./useEventCallback-DbbrRawA.js";import"./SkeletonBar-Bkq728Iu.js";import"./LoadingCell-BcGa5QXD.js";import"./ColumnConfigDialog-DzrGm4d-.js";import"./DraggableList-CMpifBio.js";import"./search-C17XLT_W.js";import"./Input-CMi9rgRv.js";import"./useControlled-knRgQYvS.js";import"./Button-CAL7_9_d.js";import"./small-cross-BtCoVVKf.js";import"./ActionButton-D-4IyjVA.js";import"./Checkbox-BfbxkGOa.js";import"./useValueChanged-Do7jw3sZ.js";import"./CollapsiblePanel-C2F04vFW.js";import"./MultiColumnSortDialog-BovWGrT4.js";import"./MenuTrigger-D5_b2zNs.js";import"./CompositeItem-CgF-gvX4.js";import"./ToolbarRootContext-xvpkFEWT.js";import"./getDisabledMountTransitionStyles-C7O4Eqmv.js";import"./getPseudoElementBounds-Cf6FS6bo.js";import"./chevron-down-h5bw2Tva.js";import"./index-RRcFr7Yl.js";import"./error-DN4E4s-5.js";import"./BaseCbacBanner-BmgMkMuj.js";import"./makeExternalStore-C5QucHCB.js";import"./Tooltip-BlXoDKth.js";import"./PopoverPopup-BTcWcv1_.js";import"./debounce-B7Gynz3E.js";import"./useOsdkClient-P54WfxAq.js";import"./tick-5ikQBC0o.js";import"./DropdownField-0aYp1GEb.js";import"./isEqual-DlaxxFzG.js";import"./withOsdkMetrics-DZUKZj-t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
