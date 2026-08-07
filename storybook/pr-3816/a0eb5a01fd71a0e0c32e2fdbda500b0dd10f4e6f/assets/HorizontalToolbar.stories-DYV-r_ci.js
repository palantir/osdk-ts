import{r as d,R as u,j as o}from"./iframe-BUEP5_KN.js";import{c as _}from"./index-Cv5GbN86.js";import{E as j}from"./Employee-BAk2o20h.js";import{w as x,u as O,R as A,r as c,N as w,a as V,g as B,b as L,F as v,f as H}from"./getFilterLabel-DAOFlINX.js";import{P as D,a as z,b as G,c as M,d as W}from"./PopoverPopup-I_I-0Ao-.js";import{a as U}from"./assertUnreachable-tCT10eXl.js";import{f as Y}from"./toNumber-BkzfzitC.js";import"./preload-helper-BCZ0e6Bx.js";import"./svgIconContainer-BxBMhXhK.js";import"./chevron-down-BLw7EeHj.js";import"./tick-DqD8ipnV.js";import"./cross-BFI2c1gT.js";import"./search-ug0_eoW4.js";import"./MenuTrigger--G7NFvZU.js";import"./useBaseUiId-CtzwQFB0.js";import"./CompositeItem-C6hNbQz3.js";import"./ToolbarRootContext-BnGkTKD4.js";import"./composite-CRlO-KKn.js";import"./InternalBackdrop-0AgP2Frr.js";import"./index-BFlpobHB.js";import"./index-C5qosZUE.js";import"./index-CWhxk_VF.js";import"./getDisabledMountTransitionStyles-Dfr23WDG.js";import"./getPseudoElementBounds-F4tv6nV9.js";import"./Button-BSn-_RfD.js";import"./Switch-Bl-IYigx.js";import"./isObject-DY1gTwAG.js";import"./useControlled-PKwq7ae5.js";import"./Input-Bnyr3ygR.js";import"./useValueChanged-TybsbpVT.js";import"./index-ClnMgKgk.js";import"./Checkbox-D0bYA1uK.js";import"./SkeletonBar-GFqMzlNc.js";import"./makeExternalStore-BQTvyZx_.js";import"./isEqual-DuiBvV2G.js";import"./useOsdkClient-CVJbm5_v.js";const p={fieldGroup:"FilterPopover-module__fieldGroup___bJI9x6iw",fieldGroupTop:"FilterPopover-module__fieldGroupTop___UWVRmF6q",label:"FilterPopover-module__label___8EBeHiOL",trigger:"FilterPopover-module__trigger___BoaZtsHJ",summary:"FilterPopover-module__summary___WuTTkUvW",placeholder:"FilterPopover-module__placeholder___xMU4srnZ",removeButton:"FilterPopover-module__removeButton___7umI8EDc",popup:"FilterPopover-module__popup___-BVwuze4"};function X({label:t,summary:e,isActive:r,onRemove:n,children:l,className:i,placeholder:a,labelPlacement:s="inline"}){const y=O(),[F,P]=d.useState(!1),S=e!=="",N=d.useCallback(R=>{R.stopPropagation(),n==null||n()},[n]);return u.createElement(D,{open:F,onOpenChange:P},u.createElement("span",{className:_(p.fieldGroup,s==="top"&&p.fieldGroupTop,i)},u.createElement("span",{className:p.label},t),u.createElement(z,{className:p.trigger,"data-active":r?"true":void 0},u.createElement("span",{className:_(p.summary,!S&&p.placeholder)},S?e:a??y.popoverEmptySummary)),n&&u.createElement("button",{type:"button",onClick:N,className:p.removeButton,"aria-label":y.removeFilter(t)},u.createElement(A,null))),u.createElement(G,null,u.createElement(M,{sideOffset:4,align:"start"},u.createElement(W,{className:p.popup},l))))}const $=x(d.memo(X)),f="—";function h(t,e,r){if(t.length===0)return"";if(t.length>1)return c(r,"summaryMultipleSelected")(t.length);const n=t[0];return n instanceof Date?e(n):n==null||n===w?c(r,"summaryNoValue"):n===""?c(r,"emptyStringValue"):String(n)}function E(t,e,r,n,l){return`${t!=null?r(t):n} – ${e!=null?r(e):l}`}function k(t,e,r){if(e==null)return"";const n="formatDate"in t&&t.formatDate?t.formatDate:Y;switch(e.type){case"EXACT_MATCH":return h(e.values,n,r);case"SELECT":return h(e.selectedValues,n,r);case"CONTAINS_TEXT":return e.value??"";case"NUMBER_RANGE":{const{minValue:l,maxValue:i,includeNull:a}=e;return l==null&&i==null?a?c(r,"summaryIncludesEmpty"):"":E(l,i,String,"−∞","∞")}case"DATE_RANGE":{const{minValue:l,maxValue:i,includeNull:a}=e;return l==null&&i==null?a?c(r,"summaryIncludesEmpty"):"":E(l,i,n,f,f)}case"TIMELINE":{const{startDate:l,endDate:i}=e;return l==null&&i==null?"":E(l,i,n,f,f)}case"TOGGLE":return e.enabled?c(r,"summaryEnabled"):"";case"hasLink":return e.hasLink?c(r,"summaryHasLink"):"";case"linkedProperty":return k(t,e.linkedFilterState,r);case"keywordSearch":return e.searchTerm??"";case"custom":return c(r,"summaryCustom");default:return U(e)}}const J="_toolbar_1f5ug_17",K="_iconButton_1f5ug_27",Z="_iconButtonGroup_1f5ug_41",q="_layersButton_1f5ug_49",Q="_inlineFieldGroup_1f5ug_54",ee="_label_1f5ug_61",te="_inlineInputWrapper_1f5ug_68",m={toolbar:J,iconButton:K,iconButtonGroup:Z,layersButton:q,inlineFieldGroup:Q,label:ee,inlineInputWrapper:te},re={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Sites",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},ne={type:"PROPERTY",id:"department",key:"department",label:"Specialties",filterComponent:"MULTI_SELECT",filterState:{type:"SELECT",selectedValues:[]}},oe={type:"PROPERTY",id:"fullName",key:"fullName",label:"Consultants",filterComponent:"CONTAINS_TEXT",filterState:{type:"CONTAINS_TEXT"}},le=[re,ne,oe],ie={};function ae(){return o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[o.jsx("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}),o.jsx("path",{d:"M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z"})]})}function se(){return o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[o.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:"currentColor",strokeWidth:"1.2"}),o.jsx("path",{d:"M8 4.5V8L10.5 9.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function ue(){return o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[o.jsx("path",{d:"M8 2L2 5l6 3 6-3-6-3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),o.jsx("path",{d:"M2 9l6 3 6-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}const pe=[{label:"Settings",Icon:ae},{label:"History",Icon:se},{label:"Layers",Icon:ue,extraClass:m.layersButton}];function ce({filterKey:t,definition:e,filterState:r,whereClause:n,objectType:l,setFilterState:i}){const a=d.useCallback(s=>i(t,s),[t,i]);return o.jsxs("span",{className:m.inlineFieldGroup,children:[o.jsx("span",{className:m.label,children:L(e)}),o.jsx("span",{className:m.inlineInputWrapper,children:o.jsx(v,{objectType:l,definition:e,filterState:r,onFilterStateChanged:a,whereClause:n})})]})}function me({filterKey:t,definition:e,filterState:r,whereClause:n,objectType:l,setFilterState:i,clearFilterState:a}){const s=d.useCallback(F=>i(t,F),[t,i]),y=d.useCallback(()=>a(t),[t,a]);return o.jsx($,{label:L(e),summary:k(e,r),isActive:H(r),onRemove:y,labelPlacement:"top",children:o.jsx(v,{objectType:l,definition:e,filterState:r,onFilterStateChanged:s,whereClause:n,layout:"inline"})})}function ye(t){const{definition:e}=t;return e.type==="PROPERTY"&&e.filterComponent==="CONTAINS_TEXT"?o.jsx(ce,{...t}):o.jsx(me,{...t})}function I({objectType:t,filterDefinitions:e}){const{filterStates:r,setFilterState:n,clearFilterState:l,perFilterWhereClauses:i}=V({objectType:t,filterDefinitions:e});return o.jsxs("div",{className:m.toolbar,children:[e.map(a=>{const s=B(a);return o.jsx(ye,{filterKey:s,definition:a,filterState:r.get(s),whereClause:i.get(s)??ie,objectType:t,setFilterState:n,clearFilterState:l},s)}),o.jsx("div",{className:m.iconButtonGroup,children:pe.map(({label:a,Icon:s,extraClass:y})=>o.jsx("button",{type:"button",className:_(m.iconButton,y),"aria-label":a,children:o.jsx(s,{})},a))})]})}const Ke={title:"Components/FilterList/Recipes",component:I,tags:["beta"]},T={name:"Horizontal toolbar",parameters:{docs:{description:{story:"Composes `useFilterListState`, `FilterPopover`, and `FilterInput` into a custom inline toolbar. Each filter renders as a label + popover trigger; the popup opens the standard input UI for that filter type. The trailing utility buttons (settings, history, layers) are owned entirely by the consumer — `FilterList` never sees them. Replace the SVG icons with your own and swap the wrapper styles to match your design system."},source:{code:`import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/experimental/filter-list";

function HorizontalFilterToolbar({ objectType, filterDefinitions }) {
  const {
    filterStates,
    setFilterState,
    clearFilterState,
    perFilterWhereClauses,
  } = useFilterListState({ objectType, filterDefinitions });

  return (
    <div className={styles.toolbar}>
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        return (
          <FilterPopover
            key={key}
            label={getFilterLabel(definition)}
            summary={summarizeFilterValue(definition, filterStates.get(key))}
            isActive={filterHasActiveState(filterStates.get(key))}
            onRemove={() => clearFilterState(key)}
            labelPlacement="top"
          >
            <FilterInput
              objectType={objectType}
              definition={definition}
              filterState={filterStates.get(key)}
              onFilterStateChanged={(state) => setFilterState(key, state)}
              whereClause={perFilterWhereClauses.get(key) ?? {}}
              layout="inline"
            />
          </FilterPopover>
        );
      })}
      {/* Trailing utility buttons are owned entirely by the consumer. */}
    </div>
  );
}

<HorizontalFilterToolbar
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT", filterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT", filterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" } },
  ]}
/>`}}},render:()=>o.jsx(I,{objectType:j,filterDefinitions:le})};var b,C,g;T.parameters={...T.parameters,docs:{...(b=T.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Horizontal toolbar",
  parameters: {
    docs: {
      description: {
        story: "Composes \`useFilterListState\`, \`FilterPopover\`, and " + "\`FilterInput\` into a custom inline toolbar. Each filter renders " + "as a label + popover trigger; the popup opens the standard input " + "UI for that filter type. The trailing utility buttons (settings, " + "history, layers) are owned entirely by the consumer — \`FilterList\`" + " never sees them. Replace the SVG icons with your own and swap " + "the wrapper styles to match your design system."
      },
      source: {
        code: \`import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/experimental/filter-list";

function HorizontalFilterToolbar({ objectType, filterDefinitions }) {
  const {
    filterStates,
    setFilterState,
    clearFilterState,
    perFilterWhereClauses,
  } = useFilterListState({ objectType, filterDefinitions });

  return (
    <div className={styles.toolbar}>
      {filterDefinitions.map((definition) => {
        const key = getFilterKey(definition);
        return (
          <FilterPopover
            key={key}
            label={getFilterLabel(definition)}
            summary={summarizeFilterValue(definition, filterStates.get(key))}
            isActive={filterHasActiveState(filterStates.get(key))}
            onRemove={() => clearFilterState(key)}
            labelPlacement="top"
          >
            <FilterInput
              objectType={objectType}
              definition={definition}
              filterState={filterStates.get(key)}
              onFilterStateChanged={(state) => setFilterState(key, state)}
              whereClause={perFilterWhereClauses.get(key) ?? {}}
              layout="inline"
            />
          </FilterPopover>
        );
      })}
      {/* Trailing utility buttons are owned entirely by the consumer. */}
    </div>
  );
}

<HorizontalFilterToolbar
  objectType={Employee}
  filterDefinitions={[
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT", filterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT", filterState: { type: "SELECT", selectedValues: [] } },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT", filterState: { type: "CONTAINS_TEXT" } },
  ]}
/>\`
      }
    }
  },
  render: () => <HorizontalFilterToolbar objectType={Employee} filterDefinitions={TOOLBAR_FILTER_DEFINITIONS} />
}`,...(g=(C=T.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const Ze=["HorizontalToolbar"];export{T as HorizontalToolbar,Ze as __namedExportsOrder,Ke as default};
