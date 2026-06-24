import{R as i,O as M,j as y,M as v}from"./iframe-Bu2xKdiG.js";import{P as D}from"./pdf-viewer-CNckUQIC.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-7q4JG2Uo.js";import"./preload-helper-CcA_CFJQ.js";import"./PdfRenderer-Dc10AE5V.js";import"./index-DnkFbpFC.js";import"./PdfViewer-C6OPtOa0.js";import"./PdfViewer.module.css-BUmWquyP.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-BJ7v9ak-.js";import"./index-C5anXPPz.js";import"./index-B7dx4IY5.js";import"./PdfViewerAnnotationLayer-DvnRbWT9.js";import"./PdfViewerOutlineSidebar-BT8YdRJR.js";import"./PdfViewerSidebarHeader-wFzK5LmK.js";import"./useBaseUiId-D3lmtuKX.js";import"./useControlled-Bxjv-rpE.js";import"./CompositeRoot-CvIp1Ln4.js";import"./CompositeItem-BHPTwKO6.js";import"./ToolbarRootContext-BILum7i2.js";import"./composite-COkCPP3u.js";import"./svgIconContainer-D9vdOpuR.js";import"./PdfViewerSearchBar-CwuMuaI0.js";import"./chevron-up-Bovi7biE.js";import"./chevron-down-ZyUjIbUX.js";import"./cross-BHnpLW3B.js";import"./PdfViewerSidebar-B1mWIdns.js";import"./index-DL4xiZV3.js";import"./PdfViewerToolbar-B6xQZRTg.js";import"./Button-2odybCXl.js";import"./chevron-right-CbtJ2sSc.js";import"./Input-CNECceQZ.js";import"./minus-CX3Obu9a.js";import"./spin-BlI6rFlZ.js";import"./error-Cl8BtAPa.js";import"./withOsdkMetrics-DdVRvSLe.js";import"./useRegisterUserAgent-Co5SR2wL.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
