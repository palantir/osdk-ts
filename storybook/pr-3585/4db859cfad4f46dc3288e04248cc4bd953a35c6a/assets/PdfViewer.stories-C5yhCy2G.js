import{R as i,O as M,j as y,M as v}from"./iframe-CDvWiTli.js";import{P as D}from"./pdf-viewer-RpRH0gcW.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CvCwHhQX.js";import"./preload-helper-9ozje1rh.js";import"./PdfRenderer-CsU4qy3O.js";import"./index-CyujWbyi.js";import"./PdfViewer-Dvaq08CA.js";import"./PdfViewer.module.css-QVDrW6VB.js";import"./PdfViewerAnnotationLayer-BeN9ac6w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B6LZMwu0.js";import"./PdfViewerOutlineSidebar-yqtWk3S6.js";import"./PdfViewerSidebarHeader-BOOMY3l2.js";import"./useBaseUiId-DzzuGPPW.js";import"./useControlled-DIQPWY3_.js";import"./CompositeRoot-CHblAgWI.js";import"./CompositeItem-CXw04HWM.js";import"./ToolbarRootContext-Dws7trkk.js";import"./composite-By3TAu-9.js";import"./svgIconContainer-DB9Ze22o.js";import"./PdfViewerSearchBar-BoOxblKr.js";import"./chevron-up-DtbjUnW5.js";import"./chevron-down-z3UkpJN3.js";import"./cross-Bv0LJGn2.js";import"./PdfViewerSidebar-DdW16Y9n.js";import"./index-0rnZUxGt.js";import"./index--6tfw9ra.js";import"./index-B3FSkHEh.js";import"./PdfViewerToolbar-Ciwn96yr.js";import"./Button-BM405h_w.js";import"./chevron-right-DEuacz0T.js";import"./Input-DboAu0u6.js";import"./minus-CProqGdy.js";import"./search-Buypx2Zu.js";import"./spin-C8SMKfJm.js";import"./error-BGBHkm2P.js";import"./withOsdkMetrics-Cf4YfkcX.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
