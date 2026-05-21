import{R as i,O as M,j as y,M as v}from"./iframe-Du_bi8z7.js";import{P as D}from"./pdf-viewer-FDHGv-WU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Dvg3VXMQ.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-QwvGP8mg.js";import"./index-CuQeHbb-.js";import"./PdfViewer-m32mIiRi.js";import"./PdfViewer.module.css-DSUTWR8z.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-BGJ4jrHN.js";import"./index-CoqGlFZ7.js";import"./index-DPVg48GI.js";import"./PdfViewerAnnotationLayer-BLF0fM58.js";import"./PdfViewerOutlineSidebar-1wkoHalK.js";import"./PdfViewerSidebarHeader-Bom31JIu.js";import"./useBaseUiId-DdEqNxiZ.js";import"./useControlled-WxgQV8ys.js";import"./CompositeRoot-nP9_9Vs6.js";import"./CompositeItem-qq0U8OE_.js";import"./ToolbarRootContext-Bm0agmPR.js";import"./composite-B-nDC0ia.js";import"./svgIconContainer-B8e1fnJA.js";import"./PdfViewerSearchBar-DueAFMhG.js";import"./chevron-up-D7IvnXX1.js";import"./chevron-down-VrnIlqRB.js";import"./cross-CVO6UsN1.js";import"./PdfViewerSidebar-CKm8a-Ap.js";import"./index-B19JTsbN.js";import"./PdfViewerToolbar-C624nVzv.js";import"./Button-DMSsOrJw.js";import"./chevron-right-DZsdcJFj.js";import"./Input-CJGY-dK-.js";import"./minus-GK6ww0Ev.js";import"./spin-C0DDUmg0.js";import"./error-CH03IjLU.js";import"./withOsdkMetrics-Bxspea-z.js";import"./useRegisterUserAgent-S46M0pCv.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
