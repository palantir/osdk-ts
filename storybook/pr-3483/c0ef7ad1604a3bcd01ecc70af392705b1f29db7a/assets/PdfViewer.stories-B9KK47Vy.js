import{R as i,O as M,j as y,M as v}from"./iframe-Bd4e_c4C.js";import{P as D}from"./pdf-viewer-gEk7NYFr.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-_jwnLTC5.js";import"./preload-helper-5bsUCg0y.js";import"./PdfRenderer-CbcKtlCi.js";import"./index-8zwV4JUV.js";import"./PdfViewer-Cc_lKnc-.js";import"./PdfViewer.module.css-BVpli2im.js";import"./PdfViewerAnnotationLayer-BZxfDwZq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GKnu2aUS.js";import"./PdfViewerOutlineSidebar-iUjWwX2o.js";import"./PdfViewerSidebarHeader-Cso75ZbL.js";import"./useBaseUiId-D-nOoqcA.js";import"./useControlled-DIwphUIH.js";import"./CompositeRoot-CXmCBN0p.js";import"./CompositeItem-DUtJM4r4.js";import"./ToolbarRootContext-BYX2mIW9.js";import"./composite-TNcbR0Nf.js";import"./svgIconContainer-BwBQeW3J.js";import"./PdfViewerSearchBar-BDd6QB5Z.js";import"./chevron-up-Bsb8wHRd.js";import"./chevron-down-BKImZJXc.js";import"./cross-B6r_yiO_.js";import"./PdfViewerSidebar-CfaU9pLU.js";import"./index--xQC6urW.js";import"./index-BATG7eU0.js";import"./index-B9pqn0Jn.js";import"./PdfViewerToolbar-B6i9gCZ5.js";import"./Button-DE7Oat1u.js";import"./chevron-right-CwCRw0eq.js";import"./Input-Bilv7Eok.js";import"./minus-BkvQoQv2.js";import"./spin-Bm5-Sikb.js";import"./error-BToHOsa4.js";import"./withOsdkMetrics-DdhctzSj.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
