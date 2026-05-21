import{R as i,O as M,j as y,M as v}from"./iframe-DuVqCQ9Y.js";import{P as D}from"./pdf-viewer-N9nv3Tef.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B76mClPQ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-Cc1ZGn53.js";import"./index-DUsGWmvk.js";import"./PdfViewer-BRItIh1w.js";import"./PdfViewer.module.css-B9UdNVSN.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-7f7igpJ4.js";import"./index-CRbZp6L0.js";import"./index-DLo6CZ5S.js";import"./PdfViewerAnnotationLayer-isS7V7gk.js";import"./PdfViewerOutlineSidebar-CCtLo4M6.js";import"./PdfViewerSidebarHeader-sZcPyGEy.js";import"./useBaseUiId-C52SIdJF.js";import"./useControlled-B0_0JJXK.js";import"./CompositeRoot-M_x3ejzF.js";import"./useCompositeListItem-D-ombNlk.js";import"./ToolbarRootContext-ClJbZpTE.js";import"./composite-C1USiBfe.js";import"./CompositeItem-CapoO8lR.js";import"./svgIconContainer-CpDyVwKR.js";import"./PdfViewerSearchBar-BBbQ-tMW.js";import"./chevron-up-_fuk1S9u.js";import"./chevron-down-CARqZdRO.js";import"./cross-BHZFXa2C.js";import"./PdfViewerSidebar-Bl6F39lZ.js";import"./index-c18zNpXk.js";import"./PdfViewerToolbar-CoM9K2Su.js";import"./Button-DVFP8T0c.js";import"./chevron-right-DfH2o4rK.js";import"./Input-BSnsWg-O.js";import"./minus-Bt97TENS.js";import"./spin-DIKOrqY9.js";import"./error-glRmYmUa.js";import"./withOsdkMetrics-D9ycNzlj.js";import"./useRegisterUserAgent-DtBi-D8g.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const be={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const Oe=["Default"];export{a as Default,Oe as __namedExportsOrder,be as default};
