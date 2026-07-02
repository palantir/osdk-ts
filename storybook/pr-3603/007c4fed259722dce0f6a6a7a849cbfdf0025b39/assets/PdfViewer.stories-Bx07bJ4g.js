import{R as i,O as M,j as y,M as v}from"./iframe-B-N2-r-P.js";import{P as D}from"./pdf-viewer-D-y1K8Xz.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DzKj_2bA.js";import"./preload-helper-D4Q0vOys.js";import"./PdfRenderer-BgOSMhI_.js";import"./index-Bo0hoe2f.js";import"./PdfViewer-B8bSoGaJ.js";import"./PdfViewer.module.css-DjR3LgGb.js";import"./PdfViewerAnnotationLayer-d0qZdtSo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnG0I93j.js";import"./PdfViewerOutlineSidebar-qf7tptmK.js";import"./PdfViewerSidebarHeader-uJ--OG7r.js";import"./useBaseUiId-RRwSV0tF.js";import"./useControlled-Bs9QYkJN.js";import"./CompositeRoot-DHuIyBnD.js";import"./CompositeItem-BXK3omay.js";import"./ToolbarRootContext-J4sGFDfu.js";import"./composite-33K9WpJB.js";import"./svgIconContainer-BP_Cyky3.js";import"./PdfViewerSearchBar-DZinDP5G.js";import"./chevron-up-Cpv6QqUW.js";import"./chevron-down-BQ_F75_V.js";import"./cross-Dj5vzrKC.js";import"./PdfViewerSidebar-DuF2ciDD.js";import"./index-zUJNAcfu.js";import"./index-DGpxl1lF.js";import"./index-Byx-03Es.js";import"./PdfViewerToolbar-CsiCJ6Yk.js";import"./Button-6zOkUJKB.js";import"./chevron-right-DpC24OTH.js";import"./Input-B4_FJ4FZ.js";import"./minus-qMa9QIgZ.js";import"./search-DUpQ9VPH.js";import"./spin-DvPHC6DP.js";import"./error-NjgVHdy_.js";import"./withOsdkMetrics-D-Yn5mSP.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
