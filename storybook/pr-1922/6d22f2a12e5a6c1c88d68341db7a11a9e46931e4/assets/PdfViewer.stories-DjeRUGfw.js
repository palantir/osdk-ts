import{R as i,O as M,j as y,M as v}from"./iframe-BjvUzf2G.js";import{P as D}from"./pdf-viewer-BUvJMejt.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-FnGaZI7s.js";import"./preload-helper-ChLujkjw.js";import"./PdfRenderer-DA7RPu50.js";import"./index-CV0Q9dls.js";import"./PdfViewer-Bc-XwEfM.js";import"./PdfViewer.module.css-CZaFb5p9.js";import"./PdfViewerAnnotationLayer-arLsK8b-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUlksB2C.js";import"./PdfViewerOutlineSidebar-Bc3jrBDC.js";import"./PdfViewerSidebarHeader-zB4-THkp.js";import"./useBaseUiId-BDbPswOv.js";import"./useControlled-BcrqOuKT.js";import"./CompositeRoot-C6e5-oGA.js";import"./CompositeItem-BERBQGWk.js";import"./ToolbarRootContext-ogdKOFIs.js";import"./composite-Dw0QnQGe.js";import"./svgIconContainer-BTyMbHu3.js";import"./PdfViewerSearchBar-CBFBd9ey.js";import"./chevron-up-1ot7P72m.js";import"./chevron-down-09WpJW4h.js";import"./cross-BJGvmtHL.js";import"./PdfViewerSidebar-D0i0W-A3.js";import"./index-CvRtYV7l.js";import"./index-DkF1GDTM.js";import"./index-Dm9fU4ht.js";import"./PdfViewerToolbar-CgmCldPq.js";import"./Button-DQrgiRWU.js";import"./chevron-right-B8ivoYpp.js";import"./Input-BejOJn9A.js";import"./minus-C1rQ-HqY.js";import"./spin-Ct4r1K7n.js";import"./error-jQ1aYYgr.js";import"./withOsdkMetrics-Bd8w39f_.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
