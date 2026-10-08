import{f as p,j as e}from"./iframe-B5lqcjqD.js";import{O as i}from"./object-table-CUi82Gz7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CRQgFnVN.js";import"./Table-BIOpUksl.js";import"./index-CRsh17Vx.js";import"./Dialog-pNi0EjWd.js";import"./cross-DHsl6guL.js";import"./svgIconContainer-D6KCVgJj.js";import"./useBaseUiId-oknajK1z.js";import"./InternalBackdrop-BvHcPsAz.js";import"./composite-Cre9O_Y6.js";import"./index-yNr1-X6F.js";import"./index-C8V2J7Cn.js";import"./index-ClLOYYyH.js";import"./useEventCallback-C8huiUaV.js";import"./SkeletonBar-DQfYLsyN.js";import"./LoadingCell-D7B8f3z3.js";import"./ColumnConfigDialog-DTZTcXlo.js";import"./DraggableList-CP9FYccH.js";import"./search-Be9RJwWO.js";import"./Input-CZpiyJ1w.js";import"./useControlled-Dh0gZz2O.js";import"./Button-BS6My4W_.js";import"./small-cross-CYPA47ez.js";import"./ActionButton-QVbQttp6.js";import"./Checkbox-CidKTG-Z.js";import"./useValueChanged-ah5CBoLN.js";import"./CollapsiblePanel-rMdaxvYS.js";import"./MultiColumnSortDialog-Bv5mhlIZ.js";import"./MenuTrigger-VcmxL_4h.js";import"./CompositeItem-DEsHBn0r.js";import"./ToolbarRootContext-LzdOjhLO.js";import"./getDisabledMountTransitionStyles-BOwpTiKH.js";import"./getPseudoElementBounds-TZ-hmbJ3.js";import"./chevron-down-BAMUeMPH.js";import"./index-DBPktzPX.js";import"./error-hbt_Js5f.js";import"./BaseCbacBanner-B-UrZJ5M.js";import"./makeExternalStore-D04mQ5d-.js";import"./Tooltip-DSNJDxmy.js";import"./PopoverPopup-cEQUdM63.js";import"./debounce-BxC1HvQJ.js";import"./useOsdkClient-mF5eaEzP.js";import"./tick-Cz1YHSYQ.js";import"./DropdownField-dMvSytG-.js";import"./isEqual-BvOtC8Tw.js";import"./withOsdkMetrics-J94G_2em.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
