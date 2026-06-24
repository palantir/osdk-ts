import{R as i,O as M,j as y,M as v}from"./iframe-DY7TjEEn.js";import{P as D}from"./pdf-viewer-6Pt7H4O1.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CUieie7t.js";import"./preload-helper-DV30TjXu.js";import"./PdfRenderer-COeakjhT.js";import"./index-9xdW1bzf.js";import"./PdfViewer-B13JeOqO.js";import"./PdfViewer.module.css-CxZ8qmD8.js";import"./PdfViewerAnnotationLayer-Bij5YfA7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ctdpmc5M.js";import"./PdfViewerOutlineSidebar-DsDbouND.js";import"./PdfViewerSidebarHeader-CfdV-vpi.js";import"./useBaseUiId-BUDx74Q5.js";import"./useControlled-Dn2FWoV4.js";import"./CompositeRoot-CZ20hwVc.js";import"./CompositeItem-Dc5WIWk8.js";import"./ToolbarRootContext-BPHZjtVb.js";import"./composite-DLJU60e-.js";import"./svgIconContainer-Dw5luHH7.js";import"./PdfViewerSearchBar-C63I4FpG.js";import"./chevron-up-D0TioHCH.js";import"./chevron-down-DWY_7Xon.js";import"./cross-DmDMkosf.js";import"./PdfViewerSidebar-Jyu8CWrg.js";import"./index-CoOBahNn.js";import"./index-RW5JFvyY.js";import"./index-BNrSPqq2.js";import"./PdfViewerToolbar-DO9qUe_0.js";import"./Button-BNY3yAVX.js";import"./chevron-right-DthKiciq.js";import"./Input-Dip5J26k.js";import"./minus-D3o8kAwy.js";import"./spin-D0ygHEOI.js";import"./error-Yod3J3YH.js";import"./withOsdkMetrics-Ba5usM12.js";import"./useRegisterUserAgent-8bPnJbhl.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
