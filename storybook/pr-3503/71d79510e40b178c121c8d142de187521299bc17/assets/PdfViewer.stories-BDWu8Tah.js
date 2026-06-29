import{R as i,O as M,j as y,M as v}from"./iframe-Cj5XhV0K.js";import{P as D}from"./pdf-viewer-Z9bGUByt.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-bPaMfi75.js";import"./preload-helper-CuJrIVwN.js";import"./PdfRenderer-C6iy_E9e.js";import"./index-BUuf6QFI.js";import"./PdfViewer-BW0SnpBh.js";import"./PdfViewer.module.css-46_CVSuf.js";import"./PdfViewerAnnotationLayer-C2iTlb6l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEx5Fo6k.js";import"./PdfViewerOutlineSidebar-CGNyU8ex.js";import"./PdfViewerSidebarHeader-Cz2Mdfqh.js";import"./useBaseUiId-EaNfd7E5.js";import"./useControlled-BqmBP-xo.js";import"./CompositeRoot-l75iQeT-.js";import"./CompositeItem-uYx2vIaG.js";import"./ToolbarRootContext-C5rbQ6xe.js";import"./composite-DourfYiy.js";import"./svgIconContainer-B4JaXaFc.js";import"./PdfViewerSearchBar-D2G84VF7.js";import"./chevron-up-7lKz-4w3.js";import"./chevron-down-iqXj3iA3.js";import"./cross-ipEa_Fgv.js";import"./PdfViewerSidebar-DSLBAJC5.js";import"./index-CfT4_Ghf.js";import"./index-3sVAsvdZ.js";import"./index-KpoTnuXn.js";import"./PdfViewerToolbar-CA47uCAi.js";import"./Button-C0iKOXSP.js";import"./chevron-right-DAXICAgs.js";import"./Input-DpvlHRmk.js";import"./minus-Dt5gz2Wp.js";import"./search-8fWNri7B.js";import"./spin-C1HtlxJE.js";import"./error-BhxFFmsR.js";import"./withOsdkMetrics-DEOsKe5t.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
