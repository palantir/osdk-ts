import{f as p,j as e}from"./iframe-i3f0VK7P.js";import{O as i}from"./object-table-S96oFubf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CcQVXdAf.js";import"./Table-B3ADbA9t.js";import"./index-BSc8nCuA.js";import"./Dialog-gnB7Dkbr.js";import"./cross-U10SUwzd.js";import"./svgIconContainer-DpWasIbE.js";import"./useBaseUiId-3GNAAiBc.js";import"./InternalBackdrop-BzlNDOWb.js";import"./composite-GZoC5isN.js";import"./index-UuGZwwy8.js";import"./index-CrHn1Rne.js";import"./index-Dc_noU35.js";import"./useEventCallback-DEIVd39z.js";import"./SkeletonBar-DWNug-bk.js";import"./LoadingCell-CNgihZGh.js";import"./ColumnConfigDialog-0WMzoY99.js";import"./DraggableList-Dt6iazGC.js";import"./search-D1ajCeBe.js";import"./Input-BKCzKS6Z.js";import"./useControlled-BBd9b3hp.js";import"./Button-CM2JbGjZ.js";import"./small-cross-CaOVzuNS.js";import"./ActionButton-DHom0mZn.js";import"./Checkbox-_WMWLqhH.js";import"./useValueChanged-DQRztGVN.js";import"./CollapsiblePanel-D0rBf_Yr.js";import"./MultiColumnSortDialog-DGJSRujv.js";import"./MenuTrigger-owKOYRF_.js";import"./CompositeItem-C5NIgZsO.js";import"./ToolbarRootContext-DMZj-zjR.js";import"./getDisabledMountTransitionStyles-DlreV-Ph.js";import"./getPseudoElementBounds-BbqFlpXE.js";import"./chevron-down-BEmwBzIe.js";import"./index-B9C8GZw0.js";import"./error-Cm9VDJHx.js";import"./BaseCbacBanner-D_O2oYx8.js";import"./makeExternalStore-Ds3owEGg.js";import"./Tooltip--UELeF3n.js";import"./PopoverPopup-BilHat69.js";import"./debounce-CZjDoEnf.js";import"./useOsdkClient-eQiRfwbd.js";import"./tick-BdzI4Lm6.js";import"./DropdownField-CfwMrpRo.js";import"./isEqual-DUgfKGPN.js";import"./withOsdkMetrics-xRq5i0OL.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
