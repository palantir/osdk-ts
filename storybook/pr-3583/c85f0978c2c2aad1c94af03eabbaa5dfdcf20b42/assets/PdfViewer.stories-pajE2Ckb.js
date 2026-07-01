import{R as i,O as M,j as y,M as v}from"./iframe-BWK3j4Bc.js";import{P as D}from"./pdf-viewer-DwOrak4l.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BR11O0-P.js";import"./preload-helper-Dfe5MO2u.js";import"./PdfRenderer-CoVAy36I.js";import"./index-DxqGnzK1.js";import"./PdfViewer-Cr6k89Dt.js";import"./PdfViewer.module.css-C9IHTD8p.js";import"./PdfViewerAnnotationLayer-CRO7wMWi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dca8kvGu.js";import"./PdfViewerOutlineSidebar-DhuFsRNA.js";import"./PdfViewerSidebarHeader-Bc9BEAu3.js";import"./useBaseUiId-DOMurdeY.js";import"./useControlled-Bt-xtMWt.js";import"./CompositeRoot-D5_L6ups.js";import"./CompositeItem-DuBjebRr.js";import"./ToolbarRootContext-C0rt45Xb.js";import"./composite-Dfu_j4_V.js";import"./svgIconContainer-D1lCxR_S.js";import"./PdfViewerSearchBar-Bbb6642F.js";import"./chevron-up-OyYSvrg4.js";import"./chevron-down-Bsx7mpFG.js";import"./cross-DbLWNhwv.js";import"./PdfViewerSidebar-Uhg0o36N.js";import"./index-Cyil71YA.js";import"./index-Dq5qOt3A.js";import"./index-BVFGLqJ0.js";import"./PdfViewerToolbar-nWirUn9a.js";import"./Button-CYcagvus.js";import"./chevron-right-BVCVMj_e.js";import"./Input-CivS3tPx.js";import"./minus-hpdP53eT.js";import"./search-DGv78-ya.js";import"./spin-DIf6QjqG.js";import"./error-Bk9VHHeM.js";import"./withOsdkMetrics-DxB6oO2V.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
