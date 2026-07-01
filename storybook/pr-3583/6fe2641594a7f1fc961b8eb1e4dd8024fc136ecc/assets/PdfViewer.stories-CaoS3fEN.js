import{R as i,O as M,j as y,M as v}from"./iframe-dVXbPfbW.js";import{P as D}from"./pdf-viewer-BWr_ZIWU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-D1P93TRJ.js";import"./preload-helper-BFr4GPrV.js";import"./PdfRenderer-B76stNU3.js";import"./index-CymBcBUO.js";import"./PdfViewer-BhSpDNRZ.js";import"./PdfViewer.module.css-UIHUX2yQ.js";import"./PdfViewerAnnotationLayer-BHr6Qzh5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgV7y4mW.js";import"./PdfViewerOutlineSidebar-87Qu_Pl0.js";import"./PdfViewerSidebarHeader-DSA8tt2D.js";import"./useBaseUiId-DkQRwknn.js";import"./useControlled-B7zIb9rJ.js";import"./CompositeRoot-DEpQjLlp.js";import"./CompositeItem-Bb0_tKq-.js";import"./ToolbarRootContext-CLmrqA3G.js";import"./composite-BS0mYAk9.js";import"./svgIconContainer-DxPEc-Dh.js";import"./PdfViewerSearchBar-CQggxRKd.js";import"./chevron-up-gLJ-KnSK.js";import"./chevron-down-CKo19cp9.js";import"./cross-C_K1F1KB.js";import"./PdfViewerSidebar-_xTyOb2z.js";import"./index-BrJlT82Q.js";import"./index-CRqtUjTy.js";import"./index-D32At8WP.js";import"./PdfViewerToolbar-9ZXzCFtE.js";import"./Button-Bed55EGq.js";import"./chevron-right-NsHAkV1v.js";import"./Input-Cg6B84SQ.js";import"./minus-D2NQo-N5.js";import"./search-CmnGJ3RM.js";import"./spin-DKN_9zMC.js";import"./error-DHRbgXf-.js";import"./withOsdkMetrics-D6DNbUwT.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
