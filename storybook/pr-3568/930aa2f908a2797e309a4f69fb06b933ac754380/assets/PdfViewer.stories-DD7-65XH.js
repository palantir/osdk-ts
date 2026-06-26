import{R as i,O as M,j as y,M as v}from"./iframe-DNEXoeer.js";import{P as D}from"./pdf-viewer-kpzbi1Ge.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-JUOQRF9X.js";import"./preload-helper-Jn8sG95d.js";import"./PdfRenderer-Clv3cIT0.js";import"./index-BEofSLlc.js";import"./PdfViewer-Bt6_JNgq.js";import"./PdfViewer.module.css-DVqqryD7.js";import"./PdfViewerAnnotationLayer-CdmbZeis.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMr3fyvz.js";import"./PdfViewerOutlineSidebar-Dby_4qhz.js";import"./PdfViewerSidebarHeader-BYJhBpKe.js";import"./useBaseUiId-KYMCvl8Q.js";import"./useControlled-CrZ8m48H.js";import"./CompositeRoot-Db4A8SJy.js";import"./CompositeItem-Ddc2UdGN.js";import"./ToolbarRootContext-C2EqUJvX.js";import"./composite-DBM_-mux.js";import"./svgIconContainer-D3j8o7X8.js";import"./PdfViewerSearchBar-CAHQ0xlb.js";import"./chevron-up-BdDTtgv6.js";import"./chevron-down-BaCTdFdO.js";import"./cross-DXjHMq23.js";import"./PdfViewerSidebar-BSQeIIbd.js";import"./index-Do1-DySI.js";import"./index-DHqw5lp6.js";import"./index-CbvGK0GC.js";import"./PdfViewerToolbar-BYgJ227M.js";import"./Button-DbE8yzwJ.js";import"./chevron-right-WnaWrSh_.js";import"./Input-C_rLILSM.js";import"./minus-DZ9hqfUK.js";import"./search-C6tTsP5I.js";import"./spin-D9wel-Fr.js";import"./error-CxUo4vYl.js";import"./withOsdkMetrics-Cd3UTLRz.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
