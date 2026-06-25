import{R as i,O as M,j as y,M as v}from"./iframe-DxRo3sD6.js";import{P as D}from"./pdf-viewer-D4v5fBjZ.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DjQQrxlV.js";import"./preload-helper-bPZbOV5q.js";import"./PdfRenderer-lNWr7J11.js";import"./index-DZ8vSuQh.js";import"./PdfViewer-BUWJISQJ.js";import"./PdfViewer.module.css-CjI5ngTK.js";import"./PdfViewerAnnotationLayer-EXFKo5OG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0PIlftq.js";import"./PdfViewerOutlineSidebar-Dcnt7Qxf.js";import"./PdfViewerSidebarHeader-BiEeBPhP.js";import"./useBaseUiId-DjaFKFQv.js";import"./useControlled-TG2Cxp8w.js";import"./CompositeRoot-IyWESIvL.js";import"./CompositeItem-BoE56Oxq.js";import"./ToolbarRootContext-CdPg_jD3.js";import"./composite-CMAzK-Ek.js";import"./svgIconContainer-Bdzo1L10.js";import"./PdfViewerSearchBar-B9-gNJF7.js";import"./chevron-up-DcWsfAId.js";import"./chevron-down-DAt1sh2b.js";import"./cross-DOmHlQK3.js";import"./PdfViewerSidebar-NuD3Q-Y7.js";import"./index-CsypsuGg.js";import"./index-of6p6uv9.js";import"./index-ki8fUDKa.js";import"./PdfViewerToolbar-Bzj8p5AZ.js";import"./Button-BJ5nfj7f.js";import"./chevron-right-C_lQ6C5s.js";import"./Input-Bh7Elsv1.js";import"./minus-yUL54Um2.js";import"./spin-D5mrR2Fk.js";import"./error-DZhvmQkp.js";import"./withOsdkMetrics--aTVBuzR.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
