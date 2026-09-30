import{f as p,j as e}from"./iframe-DejlptTF.js";import{O as i}from"./object-table-X3qHvYRl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-t1ZC-fSO.js";import"./Table-D6t_1smO.js";import"./index-DeuG-BID.js";import"./Dialog-DtGIMPew.js";import"./cross-DE57w2Hx.js";import"./svgIconContainer-Bd-w9OF2.js";import"./useBaseUiId-DNOeS8k3.js";import"./InternalBackdrop-BegRmqYV.js";import"./composite-CgiNKm-K.js";import"./index-CbKeSWV-.js";import"./index-e8F5O9eW.js";import"./index-DmUvwc9j.js";import"./useEventCallback-DySuSceI.js";import"./SkeletonBar-Jnqmj5L9.js";import"./LoadingCell-BFjRur3u.js";import"./ColumnConfigDialog-CYgd3IBW.js";import"./DraggableList-C61bLq-a.js";import"./search-BB5SHFcx.js";import"./Input-BNct-weu.js";import"./useControlled-u0rXshqK.js";import"./Button-S0WXhUVU.js";import"./small-cross-BAi3Ugk-.js";import"./ActionButton-D5ovP9h8.js";import"./Checkbox-1CEuwEgy.js";import"./useValueChanged-Co9qYG2g.js";import"./CollapsiblePanel-whmM-HlO.js";import"./MultiColumnSortDialog-CQlHX6VX.js";import"./MenuTrigger-CY0lgVVo.js";import"./CompositeItem-C668gbIC.js";import"./ToolbarRootContext-hKTjuFFe.js";import"./getDisabledMountTransitionStyles-DARBSl-L.js";import"./getPseudoElementBounds-B3xcbhps.js";import"./chevron-down-R85fLGon.js";import"./index-CLFPBot-.js";import"./error-ClnW0JkG.js";import"./BaseCbacBanner-DiDBq870.js";import"./makeExternalStore-DzmCjszS.js";import"./Tooltip-D7gI9ZpI.js";import"./PopoverPopup-DUkO6HuE.js";import"./debounce-fU7KH6yO.js";import"./useOsdkClient-Be6GpiDW.js";import"./tick-CSsKr-Cj.js";import"./DropdownField-BgflIuYE.js";import"./isEqual-CStHxz3-.js";import"./withOsdkMetrics-CAm6PF-7.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
