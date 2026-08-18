import{r as m,R as p,j as n}from"./iframe-CxgKmfts.js";import{c as T}from"./index-CWB08-R4.js";import{E as N}from"./Employee-BAk2o20h.js";import{R,N as j,u as x,g as O,a as C,F as L,f as A}from"./getFilterLabel-CEmSDReR.js";import{P as B,a as w,b as H,c as D,d as G}from"./PopoverPopup-Ct-EccSB.js";import{a as z}from"./assertUnreachable-tCT10eXl.js";import{f as V}from"./debounce-ldRXCGpP.js";import"./preload-helper-B1ZVO4RI.js";import"./cross-Cgtr1c1V.js";import"./svgIconContainer-I9PvnlO_.js";import"./chevron-down-BxImBJhJ.js";import"./tick-CYpHjQHt.js";import"./search-Dxx8Wlti.js";import"./MenuTrigger-BPgNYlzf.js";import"./useBaseUiId-D_ExVr6r.js";import"./CompositeItem-CMYBs2xS.js";import"./ToolbarRootContext-BpJLr83A.js";import"./composite-CxoyATG1.js";import"./InternalBackdrop-KjPkGRsq.js";import"./index-DV2VvHyn.js";import"./index-BDjSCwox.js";import"./index-C8YewBG3.js";import"./getDisabledMountTransitionStyles-REb6g5g0.js";import"./getPseudoElementBounds-BPR2lIeY.js";import"./Button-DtbGY7fi.js";import"./Input-BORueW5n.js";import"./useControlled-_CoSROd4.js";import"./Switch-r0AaNwWW.js";import"./useValueChanged-BvZnG3_E.js";import"./index-ClnMgKgk.js";import"./Checkbox-CmVXv-8i.js";import"./small-cross-CgkI7U0n.js";import"./SkeletonBar-7NqNTH8P.js";import"./makeExternalStore-Dg2idi7m.js";import"./isEqual-rrKOSo6E.js";import"./useOsdkClient-_veAyDMq.js";const u={fieldGroup:"FilterPopover-module__fieldGroup___bJI9x6iw",fieldGroupTop:"FilterPopover-module__fieldGroupTop___UWVRmF6q",label:"FilterPopover-module__label___8EBeHiOL",trigger:"FilterPopover-module__trigger___BoaZtsHJ",summary:"FilterPopover-module__summary___WuTTkUvW",placeholder:"FilterPopover-module__placeholder___xMU4srnZ",removeButton:"FilterPopover-module__removeButton___7umI8EDc",popup:"FilterPopover-module__popup___-BVwuze4"};function M({label:t,summary:e,isActive:r,onRemove:o,children:l,className:i,placeholder:a="Any",labelPlacement:s="inline"}){const[d,_]=m.useState(!1),h=e!=="",v=m.useCallback(I=>{I.stopPropagation(),o==null||o()},[o]);return p.createElement(B,{open:d,onOpenChange:_},p.createElement("span",{className:T(u.fieldGroup,s==="top"&&u.fieldGroupTop,i)},p.createElement("span",{className:u.label},t),p.createElement(w,{className:u.trigger,"data-active":r?"true":void 0},p.createElement("span",{className:T(u.summary,!h&&u.placeholder)},h?e:a)),o&&p.createElement("button",{type:"button",onClick:v,className:u.removeButton,"aria-label":`Remove ${t} filter`},p.createElement(R,null))),p.createElement(H,null,p.createElement(D,{sideOffset:4,align:"start"},p.createElement(G,{className:u.popup},l))))}const U=m.memo(M),f="—",W="(No value)",Y="(empty string)";function b(t,e){if(t.length===0)return"";if(t.length>1)return`${t.length} selected`;const r=t[0];return r instanceof Date?e(r):r==null||r===j?W:r===""?Y:String(r)}function F(t,e,r,o,l){return`${t!=null?r(t):o} – ${e!=null?r(e):l}`}function P(t,e){if(e==null)return"";const r="formatDate"in t&&t.formatDate?t.formatDate:V;switch(e.type){case"EXACT_MATCH":return b(e.values,r);case"SELECT":return b(e.selectedValues,r);case"CONTAINS_TEXT":return e.value??"";case"NUMBER_RANGE":{const{minValue:o,maxValue:l,includeNull:i}=e;return o==null&&l==null?i?"Includes empty":"":F(o,l,String,"−∞","∞")}case"DATE_RANGE":{const{minValue:o,maxValue:l,includeNull:i}=e;return o==null&&l==null?i?"Includes empty":"":F(o,l,r,f,f)}case"TIMELINE":{const{startDate:o,endDate:l}=e;return o==null&&l==null?"":F(o,l,r,f,f)}case"TOGGLE":return e.enabled?"Enabled":"";case"hasLink":return e.hasLink?"Has link":"";case"linkedProperty":return P(t,e.linkedFilterState);case"keywordSearch":return e.searchTerm??"";case"custom":return"Custom";default:return z(e)}}const X="_toolbar_1f5ug_17",$="_iconButton_1f5ug_27",J="_iconButtonGroup_1f5ug_41",K="_layersButton_1f5ug_49",Z="_inlineFieldGroup_1f5ug_54",q="_label_1f5ug_61",Q="_inlineInputWrapper_1f5ug_68",c={toolbar:X,iconButton:$,iconButtonGroup:J,layersButton:K,inlineFieldGroup:Z,label:q,inlineInputWrapper:Q},ee={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Sites",filterComponent:"MULTI_SELECT"},te={type:"PROPERTY",id:"department",key:"department",label:"Specialties",filterComponent:"MULTI_SELECT"},re={type:"PROPERTY",id:"fullName",key:"fullName",label:"Consultants",filterComponent:"CONTAINS_TEXT"},ne=[ee,te,re],oe={};function le(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[n.jsx("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}),n.jsx("path",{d:"M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z"})]})}function ie(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:"currentColor",strokeWidth:"1.2"}),n.jsx("path",{d:"M8 4.5V8L10.5 9.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function ae(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("path",{d:"M8 2L2 5l6 3 6-3-6-3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),n.jsx("path",{d:"M2 9l6 3 6-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}const se=[{label:"Settings",Icon:le},{label:"History",Icon:ie},{label:"Layers",Icon:ae,extraClass:c.layersButton}];function pe({filterKey:t,definition:e,filterState:r,whereClause:o,objectType:l,setFilterState:i}){const a=m.useCallback(s=>i(t,s),[t,i]);return n.jsxs("span",{className:c.inlineFieldGroup,children:[n.jsx("span",{className:c.label,children:C(e)}),n.jsx("span",{className:c.inlineInputWrapper,children:n.jsx(L,{objectType:l,definition:e,filterState:r,onFilterStateChanged:a,whereClause:o})})]})}function ue({filterKey:t,definition:e,filterState:r,whereClause:o,objectType:l,setFilterState:i,clearFilterState:a}){const s=m.useCallback(_=>i(t,_),[t,i]),d=m.useCallback(()=>a(t),[t,a]);return n.jsx(U,{label:C(e),summary:P(e,r),isActive:A(r),onRemove:d,labelPlacement:"top",children:n.jsx(L,{objectType:l,definition:e,filterState:r,onFilterStateChanged:s,whereClause:o,layout:"inline"})})}function ce(t){const{definition:e}=t;return e.type==="PROPERTY"&&e.filterComponent==="CONTAINS_TEXT"?n.jsx(pe,{...t}):n.jsx(ue,{...t})}function k({objectType:t,filterDefinitions:e}){const{filterStates:r,setFilterState:o,clearFilterState:l,perFilterWhereClauses:i}=x({objectType:t,filterDefinitions:e});return n.jsxs("div",{className:c.toolbar,children:[e.map(a=>{const s=O(a);return n.jsx(ce,{filterKey:s,definition:a,filterState:r.get(s),whereClause:i.get(s)??oe,objectType:t,setFilterState:o,clearFilterState:l},s)}),n.jsx("div",{className:c.iconButtonGroup,children:se.map(({label:a,Icon:s,extraClass:d})=>n.jsx("button",{type:"button",className:T(c.iconButton,d),"aria-label":a,children:n.jsx(s,{})},a))})]})}const $e={title:"Components/FilterList/Recipes",component:k,tags:["beta"]},y={name:"Horizontal toolbar",parameters:{docs:{description:{story:"Composes `useFilterListState`, `FilterPopover`, and `FilterInput` into a custom inline toolbar. Each filter renders as a label + popover trigger; the popup opens the standard input UI for that filter type. The trailing utility buttons (settings, history, layers) are owned entirely by the consumer — `FilterList` never sees them. Replace the SVG icons with your own and swap the wrapper styles to match your design system."},source:{code:`import {
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
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT" },
  ]}
/>`}}},render:()=>n.jsx(k,{objectType:N,filterDefinitions:ne})};var E,g,S;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    { type: "PROPERTY", key: "locationCity", label: "Sites", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "department", label: "Specialties", filterComponent: "MULTI_SELECT" },
    { type: "PROPERTY", key: "fullName", label: "Consultants", filterComponent: "CONTAINS_TEXT" },
  ]}
/>\`
      }
    }
  },
  render: () => <HorizontalFilterToolbar objectType={Employee} filterDefinitions={TOOLBAR_FILTER_DEFINITIONS} />
}`,...(S=(g=y.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const Je=["HorizontalToolbar"];export{y as HorizontalToolbar,Je as __namedExportsOrder,$e as default};
