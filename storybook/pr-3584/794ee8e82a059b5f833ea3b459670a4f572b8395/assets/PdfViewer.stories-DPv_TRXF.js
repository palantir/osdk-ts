import{R as i,O as M,j as y,M as v}from"./iframe-CJBaWBDv.js";import{P as D}from"./pdf-viewer-Do6-bRED.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BOZIxHKI.js";import"./preload-helper-BWI1AJ3q.js";import"./PdfRenderer-BFr9qUKr.js";import"./index-CMledsxy.js";import"./PdfViewer-Cl5F7-ml.js";import"./PdfViewer.module.css-UmS-s0ES.js";import"./PdfViewerAnnotationLayer-B6az-26D.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Q0Sv8qHO.js";import"./PdfViewerOutlineSidebar-o-ZhSCtI.js";import"./PdfViewerSidebarHeader-INuWB_G2.js";import"./useBaseUiId-CoBsL_SE.js";import"./useControlled-OTZ1QGTe.js";import"./CompositeRoot-C5X4Prrd.js";import"./CompositeItem-Ce5546Sm.js";import"./ToolbarRootContext-CaePn4Tj.js";import"./composite-BADN5REh.js";import"./svgIconContainer-BLorCNBT.js";import"./PdfViewerSearchBar-tWFYjHms.js";import"./chevron-up-CN6A9nmZ.js";import"./chevron-down-RgggEZkL.js";import"./cross-49LfIgF0.js";import"./PdfViewerSidebar-Cs4MJxd0.js";import"./index-BSLfY8jl.js";import"./index-C5e1qggc.js";import"./index-mtO4_tCj.js";import"./PdfViewerToolbar-CvFhNT0-.js";import"./Button-C4T61Ci8.js";import"./chevron-right-CHssYQg8.js";import"./Input-hgK_yrrQ.js";import"./minus-jEQVeEYW.js";import"./search-DjRbLZYR.js";import"./spin-B8TkksLd.js";import"./error-DSt-zVpr.js";import"./withOsdkMetrics-C-E-7zTk.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
