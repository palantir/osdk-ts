import{R as i,O as M,j as y,M as v}from"./iframe-femnAnxu.js";import{P as D}from"./pdf-viewer-CMN8-lki.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Bh4QKTzj.js";import"./preload-helper-C-WXOK-U.js";import"./PdfRenderer-DRGw7-uN.js";import"./index-Cbme1k2a.js";import"./PdfViewer-gLy4EetJ.js";import"./PdfViewer.module.css-CSiY6_Y5.js";import"./PdfViewerAnnotationLayer-CXPPX_A0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VtssW4hu.js";import"./PdfViewerOutlineSidebar-ouTxPeiE.js";import"./PdfViewerSidebarHeader-CExoPbTE.js";import"./useBaseUiId-eii0WrfQ.js";import"./useControlled-GpTDQtny.js";import"./CompositeRoot-1Bc1jNWb.js";import"./CompositeItem-BOw0SOmd.js";import"./ToolbarRootContext-BittqsQ9.js";import"./composite-Cm2mN-z1.js";import"./svgIconContainer-DSUHrivN.js";import"./PdfViewerSearchBar-CURo4orS.js";import"./chevron-up-Onfhw7rX.js";import"./chevron-down-CBGhBZTh.js";import"./cross-UuwGvC_0.js";import"./PdfViewerSidebar-BlzHLv34.js";import"./index-XzfaPc1h.js";import"./index-HUXPEUsO.js";import"./index-B82ftcNm.js";import"./PdfViewerToolbar-DokOIkHN.js";import"./Button-DIcTOjx3.js";import"./chevron-right-C7b5St3H.js";import"./Input-lyinRyk6.js";import"./minus-DIqAZ34C.js";import"./spin-DIC3Sq0U.js";import"./error-DjNZj1nA.js";import"./withOsdkMetrics-eqpNk8P2.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
