import{R as i,O as M,j as y,M as v}from"./iframe-ZUB6IC-i.js";import{P as D}from"./pdf-viewer-DilEDcm5.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DwG2idL0.js";import"./preload-helper-JSGDW2EE.js";import"./PdfRenderer-DjB7H2yc.js";import"./index-kkF-sHSR.js";import"./PdfViewer-B49xYqtL.js";import"./PdfViewer.module.css-CTqrFjEC.js";import"./PdfViewerAnnotationLayer-CHlq1Nac.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4gjBnpgX.js";import"./PdfViewerOutlineSidebar-l6zNdnXk.js";import"./PdfViewerSidebarHeader-CUjj67W-.js";import"./useBaseUiId-8JVytAd4.js";import"./useControlled-D5JAD95y.js";import"./CompositeRoot-DGjmtGgA.js";import"./CompositeItem-DxD9hL6l.js";import"./ToolbarRootContext-DXYxYbuP.js";import"./composite-CYJkcK0Q.js";import"./svgIconContainer-vkeEtLLq.js";import"./PdfViewerSearchBar-BCp-8P92.js";import"./chevron-up-BRVMnX27.js";import"./chevron-down-C67n9eRn.js";import"./cross-DAlFLQ8V.js";import"./PdfViewerSidebar-BwLn05Hn.js";import"./index-CvCX7BzG.js";import"./index-BnGIgAZn.js";import"./index-BjqQMb7M.js";import"./PdfViewerToolbar-C9zX3jxB.js";import"./Button-9-saF2rs.js";import"./chevron-right-hS_0D8-v.js";import"./Input-B0ErIUZ2.js";import"./minus-oAtQTwgm.js";import"./search-Cxmpkc3b.js";import"./spin-De5Dbjq9.js";import"./error-B-AGre3U.js";import"./withOsdkMetrics-hA4DBR4r.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
