import{r as m,R as u,j as n}from"./iframe-CJFgfqJQ.js";import{c as b}from"./index-BDuqkffg.js";import{E as R}from"./Employee-BAk2o20h.js";import{R as x,f as h,N as j,u as O,g as A,a as v,F as L,b as B}from"./getFilterLabel-BG_p5BG4.js";import{P as w,a as D,b as G,c as H,d as M}from"./PopoverPopup-Cs5VOili.js";import{a as z}from"./assertUnreachable-tCT10eXl.js";import{f as V}from"./debounce-CeHNcT_D.js";import"./preload-helper-CB2bVH8w.js";import"./cross-CGqAK_rm.js";import"./svgIconContainer-SiM3kExX.js";import"./chevron-down-DGQA7IYp.js";import"./tick-DFl5nZ0u.js";import"./search-DdMhLoUU.js";import"./MenuTrigger-BYgin9ek.js";import"./useBaseUiId-KMobehZg.js";import"./CompositeItem-8xWeC0Vv.js";import"./ToolbarRootContext-DJb0kYMX.js";import"./composite-D_U5DxNy.js";import"./InternalBackdrop-DVgaqM5_.js";import"./index-D8JNb3--.js";import"./index-DCMHFOQf.js";import"./index-Dmlu-QeK.js";import"./getDisabledMountTransitionStyles-B5vF6vDs.js";import"./getPseudoElementBounds-BJ_KrdWI.js";import"./Button-cr6PNOy5.js";import"./Input-DmfjYINK.js";import"./useControlled-HhXb2sFD.js";import"./Switch-C28SKP2P.js";import"./CompositeRoot-Cc2xxpdp.js";import"./useValueChanged-DDVfSaOH.js";import"./index-CQX30p5n.js";import"./small-cross-Bvt4-Cci.js";import"./Checkbox-DKqm-Ws3.js";import"./SkeletonBar-dUsinxB7.js";import"./makeExternalStore-v_n6tY7p.js";import"./isEqual-CMNbp24S.js";import"./useOsdkClient-DsGPKyv1.js";const p={fieldGroup:"FilterPopover-module__fieldGroup___bJI9x6iw",fieldGroupTop:"FilterPopover-module__fieldGroupTop___UWVRmF6q",label:"FilterPopover-module__label___8EBeHiOL",trigger:"FilterPopover-module__trigger___BoaZtsHJ",summary:"FilterPopover-module__summary___WuTTkUvW",placeholder:"FilterPopover-module__placeholder___xMU4srnZ",removeButton:"FilterPopover-module__removeButton___7umI8EDc",popup:"FilterPopover-module__popup___-BVwuze4"};function U({label:t,summary:e,isActive:r,onRemove:o,children:l,className:s,placeholder:i="Any",labelPlacement:a="inline"}){const[d,_]=m.useState(!1),T=e!=="",I=m.useCallback(N=>{N.stopPropagation(),o==null||o()},[o]);return u.createElement(w,{open:d,onOpenChange:_},u.createElement("span",{className:b(p.fieldGroup,a==="top"&&p.fieldGroupTop,s)},u.createElement("span",{className:p.label},t),u.createElement(D,{className:p.trigger,"data-active":r?"true":void 0},u.createElement("span",{className:b(p.summary,!T&&p.placeholder)},T?e:i)),o&&u.createElement("button",{type:"button",onClick:I,className:p.removeButton,"aria-label":`Remove ${t} filter`},u.createElement(x,null))),u.createElement(G,null,u.createElement(H,{sideOffset:4,align:"start"},u.createElement(M,{className:p.popup},l))))}const W=m.memo(U),f="—",Y="(No value)",$="(empty string)";function E(t,e){if(t.length===0)return"";if(t.length>1)return`${t.length} selected`;const r=t[0];return r instanceof Date?e(r):r==null||r===j?Y:r===""?$:String(r)}function F(t,e,r,o,l){return`${t!=null?r(t):o} – ${e!=null?r(e):l}`}function k(t,e){if(e==null)return"";const r="formatDate"in t&&t.formatDate?t.formatDate:V;switch(e.type){case"EXACT_MATCH":return E(e.values,r);case"SELECT":return E(e.selectedValues,r);case"CONTAINS_TEXT":return e.value??"";case"NUMBER_RANGE":{const{minValue:o,maxValue:l,includeNull:s}=e;return o==null&&l==null?s?"Includes empty":"":F(o,l,String,"−∞","∞")}case"DATE_RANGE":{if(e.relativeState!=null){const i=e.relativeState.relativeMin?h(e.relativeState.relativeMin):"Indefinitely",a=e.relativeState.relativeMax?h(e.relativeState.relativeMax):"Indefinitely";return`${i} – ${a}`}const{minValue:o,maxValue:l,includeNull:s}=e;return o==null&&l==null?s?"Includes empty":"":F(o,l,r,f,f)}case"TIMELINE":{const{startDate:o,endDate:l}=e;return o==null&&l==null?"":F(o,l,r,f,f)}case"TOGGLE":return e.enabled?"Enabled":"";case"hasLink":return e.hasLink?e.isExcluding?"Not linked":"Linked":"";case"linkedProperty":return k(t,e.linkedFilterState);case"keywordSearch":return e.searchTerm??"";case"custom":return"Custom";default:return z(e)}}const X="_toolbar_1f5ug_17",J="_iconButton_1f5ug_27",K="_iconButtonGroup_1f5ug_41",Z="_layersButton_1f5ug_49",q="_inlineFieldGroup_1f5ug_54",Q="_label_1f5ug_61",ee="_inlineInputWrapper_1f5ug_68",c={toolbar:X,iconButton:J,iconButtonGroup:K,layersButton:Z,inlineFieldGroup:q,label:Q,inlineInputWrapper:ee},te={type:"PROPERTY",id:"locationCity",key:"locationCity",label:"Sites",filterComponent:"MULTI_SELECT"},re={type:"PROPERTY",id:"department",key:"department",label:"Specialties",filterComponent:"MULTI_SELECT"},ne={type:"PROPERTY",id:"fullName",key:"fullName",label:"Consultants",filterComponent:"CONTAINS_TEXT"},oe=[te,re,ne],le={};function ie(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"currentColor",children:[n.jsx("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z"}),n.jsx("path",{d:"M9.4 1.6a1 1 0 0 0-1.9 0l-.2.7a6 6 0 0 0-1.1.4l-.6-.4a1 1 0 0 0-1.4 1.4l.4.6a6 6 0 0 0-.4 1.1l-.7.2a1 1 0 0 0 0 1.9l.7.2c.1.4.2.8.4 1.1l-.4.6a1 1 0 0 0 1.4 1.4l.6-.4c.4.2.7.3 1.1.4l.2.7a1 1 0 0 0 1.9 0l.2-.7c.4-.1.8-.2 1.1-.4l.6.4a1 1 0 0 0 1.4-1.4l-.4-.6c.2-.4.3-.7.4-1.1l.7-.2a1 1 0 0 0 0-1.9l-.7-.2a6 6 0 0 0-.4-1.1l.4-.6a1 1 0 0 0-1.4-1.4l-.6.4a6 6 0 0 0-1.1-.4l-.2-.7z"})]})}function ae(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("circle",{cx:"8",cy:"8",r:"6.5",stroke:"currentColor",strokeWidth:"1.2"}),n.jsx("path",{d:"M8 4.5V8L10.5 9.5",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})}function se(){return n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("path",{d:"M8 2L2 5l6 3 6-3-6-3z",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"}),n.jsx("path",{d:"M2 9l6 3 6-3",stroke:"currentColor",strokeWidth:"1.2",strokeLinejoin:"round"})]})}const ue=[{label:"Settings",Icon:ie},{label:"History",Icon:ae},{label:"Layers",Icon:se,extraClass:c.layersButton}];function pe({filterKey:t,definition:e,filterState:r,whereClause:o,objectType:l,setFilterState:s}){const i=m.useCallback(a=>s(t,a),[t,s]);return n.jsxs("span",{className:c.inlineFieldGroup,children:[n.jsx("span",{className:c.label,children:v(e)}),n.jsx("span",{className:c.inlineInputWrapper,children:n.jsx(L,{objectType:l,definition:e,filterState:r,onFilterStateChanged:i,whereClause:o})})]})}function ce({filterKey:t,definition:e,filterState:r,whereClause:o,objectType:l,setFilterState:s,clearFilterState:i}){const a=m.useCallback(_=>s(t,_),[t,s]),d=m.useCallback(()=>i(t),[t,i]);return n.jsx(W,{label:v(e),summary:k(e,r),isActive:B(r),onRemove:d,labelPlacement:"top",children:n.jsx(L,{objectType:l,definition:e,filterState:r,onFilterStateChanged:a,whereClause:o,layout:"inline"})})}function me(t){const{definition:e}=t;return e.type==="PROPERTY"&&e.filterComponent==="CONTAINS_TEXT"?n.jsx(pe,{...t}):n.jsx(ce,{...t})}function P({objectType:t,filterDefinitions:e}){const{filterStates:r,setFilterState:o,clearFilterState:l,perFilterWhereClauses:s}=O({objectType:t,filterDefinitions:e});return n.jsxs("div",{className:c.toolbar,children:[e.map(i=>{const a=A(i);return n.jsx(me,{filterKey:a,definition:i,filterState:r.get(a),whereClause:s.get(a)??le,objectType:t,setFilterState:o,clearFilterState:l},a)}),n.jsx("div",{className:c.iconButtonGroup,children:ue.map(({label:i,Icon:a,extraClass:d})=>n.jsx("button",{type:"button",className:b(c.iconButton,d),"aria-label":i,children:n.jsx(a,{})},i))})]})}const Ke={title:"Components/FilterList/Recipes",component:P,tags:["beta"]},y={name:"Horizontal toolbar",parameters:{docs:{description:{story:"Composes `useFilterListState`, `FilterPopover`, and `FilterInput` into a custom inline toolbar. Each filter renders as a label + popover trigger; the popup opens the standard input UI for that filter type. The trailing utility buttons (settings, history, layers) are owned entirely by the consumer — `FilterList` never sees them. Replace the SVG icons with your own and swap the wrapper styles to match your design system."},source:{code:`import {
  filterHasActiveState,
  FilterInput,
  FilterPopover,
  getFilterKey,
  getFilterLabel,
  summarizeFilterValue,
  useFilterListState,
} from "@osdk/react-components/filter-list";

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
/>`}}},render:()=>n.jsx(P,{objectType:R,filterDefinitions:oe})};var S,g,C;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
} from "@osdk/react-components/filter-list";

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
}`,...(C=(g=y.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const Ze=["HorizontalToolbar"];export{y as HorizontalToolbar,Ze as __namedExportsOrder,Ke as default};
